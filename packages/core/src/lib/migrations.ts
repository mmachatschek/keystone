import path from 'path';
import { createDatabase, uriToCredentials, DatabaseCredentials } from '@prisma/internals';
import { Migrate } from '@prisma/migrate';
import chalk from 'chalk';
import { ExitError } from '../scripts/utils';
import { confirmPrompt, textPrompt } from './prompts';

// we don't want to pollute process.env.DATABASE_URL so we're
// setting the env variable _just_ long enough for Migrate to
// read it and then we reset it immediately after.
// Migrate reads the env variables a single time when it starts the child process that it talks to

// note that we could only run this once per Migrate instance but we're going to do it consistently for all migrate calls
// so that calls can moved around freely without implictly relying on some other migrate command being called before it

// We also want to silence messages from Prisma about available updates, since the developer is
// not in control of their Prisma version.
// https://www.prisma.io/docs/reference/api-reference/environment-variables-reference#prisma_hide_update_message
export function runMigrateWithDbUrl<T>(
  dbUrl: string,
  shadowDbUrl: string | undefined,
  cb: () => T
): T {
  const prevDBURLFromEnv = process.env.DATABASE_URL;
  const prevShadowDBURLFromEnv = process.env.SHADOW_DATABASE_URL;
  const prevHiddenUpdateMessage = process.env.PRISMA_HIDE_UPDATE_MESSAGE;
  try {
    process.env.DATABASE_URL = dbUrl;
    setOrRemoveEnvVariable('SHADOW_DATABASE_URL', shadowDbUrl);
    process.env.PRISMA_HIDE_UPDATE_MESSAGE = '1';
    return cb();
  } finally {
    setOrRemoveEnvVariable('DATABASE_URL', prevDBURLFromEnv);
    setOrRemoveEnvVariable('SHADOW_DATABASE_URL', prevShadowDBURLFromEnv);
    setOrRemoveEnvVariable('PRISMA_HIDE_UPDATE_MESSAGE', prevHiddenUpdateMessage);
  }
}

function setOrRemoveEnvVariable(name: string, value: string | undefined) {
  if (value === undefined) {
    delete process.env[name];
  } else {
    process.env[name] = value;
  }
}

export async function withMigrate<T>(schemaPath: string, cb: (migrate: Migrate) => Promise<T>) {
  const migrate = new Migrate(schemaPath);
  try {
    return await cb(migrate);
  } finally {
    const closePromise = new Promise<void>(resolve => {
      const child = (migrate.engine as any).child as import('child_process').ChildProcess;
      child.once('exit', () => resolve());
    });
    migrate.stop();
    await closePromise;
  }
}

export async function pushPrismaSchemaToDatabase(
  dbUrl: string,
  shadowDbUrl: string | undefined,
  schema: string,
  schemaPath: string,
  resetDb: boolean
) {
  const created = await createDatabase(dbUrl, path.dirname(schemaPath));
  if (created) {
    const credentials = uriToCredentials(dbUrl);
    console.log(
      `✨ ${credentials.type} database "${credentials.database}" created at ${getDbLocation(
        credentials
      )}`
    );
  }

  const migration = await withMigrate(schemaPath, async migrate => {
    if (resetDb) {
      await runMigrateWithDbUrl(dbUrl, shadowDbUrl, () => migrate.engine.reset());
      let migration = await runMigrateWithDbUrl(dbUrl, shadowDbUrl, () =>
        migrate.engine.schemaPush({
          force: true,
          schema,
        })
      );
      console.log('✨ Your database has been reset');
      return migration;
    }
    // what does force on migrate.engine.schemaPush mean?
    // - true: ignore warnings but will not run anything if there are unexecutable steps(so the database needs to be reset before)
    // - false: if there are warnings or unexecutable steps, don't run the migration
    // https://github.com/prisma/prisma-engines/blob/a2de6b71267b45669d25c3a27ad30998862a275c/migration-engine/core/src/commands/schema_push.rs
    const migration = await runMigrateWithDbUrl(dbUrl, shadowDbUrl, () =>
      migrate.engine.schemaPush({
        force: false,
        schema,
      })
    );

    // if there are unexecutable steps, we need to reset the database or the user can switch to using migrations
    // there's no point in asking if they're okay with the warnings separately after asking if they're okay with
    // resetting their db since their db is already empty so they don't have any data to lose
    if (migration.unexecutable.length) {
      logUnexecutableSteps(migration.unexecutable);
      if (migration.warnings.length) {
        logWarnings(migration.warnings);
      }
      console.log('\nTo apply this migration, we need to reset the database');
      if (
        !(await confirmPrompt(
          `Do you want to continue? ${chalk.red('All data will be lost')}`,
          false
        ))
      ) {
        console.error('Reset cancelled');
        throw new ExitError(0);
      }
      await runMigrateWithDbUrl(dbUrl, shadowDbUrl, () => migrate.reset());
      return runMigrateWithDbUrl(dbUrl, shadowDbUrl, () =>
        migrate.engine.schemaPush({
          force: false,
          schema,
        })
      );
    }

    if (migration.warnings.length) {
      logWarnings(migration.warnings);
      if (
        !(await confirmPrompt(
          `Do you want to continue? ${chalk.red('Some data will be lost')}`,
          false
        ))
      ) {
        console.error('Push cancelled');
        throw new ExitError(0);
      }
      return runMigrateWithDbUrl(dbUrl, shadowDbUrl, () =>
        migrate.engine.schemaPush({
          force: true,
          schema,
        })
      );
    }

    return migration;
  });

  if (migration.warnings.length === 0 && migration.executedSteps === 0) {
    console.info(`✨ The database is already in sync with the Prisma schema`);
  } else {
    console.info(`✨ Your database is now in sync with your schema`);
  }
}

function logUnexecutableSteps(unexecutableSteps: string[]) {
  console.log(`${chalk.bold.red('\n⚠️ We found changes that cannot be executed:\n')}`);
  for (const item of unexecutableSteps) {
    console.log(`  • ${item}`);
  }
}

function logWarnings(warnings: string[]) {
  console.warn(chalk.bold(`\n⚠️  Warnings:\n`));
  for (const warning of warnings) {
    console.warn(`  • ${warning}`);
  }
}

export async function deployMigrations(schemaPath: string, dbUrl: string) {
  return withMigrate(schemaPath, async migrate => {
    const migration = await runMigrateWithDbUrl(dbUrl, undefined, () => migrate.applyMigrations());
    if (migration.appliedMigrationNames.length === 0) {
      console.info(`✨ The database is already in sync with your migrations`);
    } else {
      console.info(`✨ Your database is now in sync with your migrations`);
    }
  });
}

export async function devMigrations(
  dbUrl: string,
  shadowDbUrl: string | undefined,
  prismaSchema: string,
  schemaPath: string,
  resetDb: boolean
) {
  const created = await createDatabase(dbUrl, path.dirname(schemaPath));
  if (created) {
    const credentials = uriToCredentials(dbUrl);
    console.log(
      `✨ ${credentials.type} database "${credentials.database}" created at ${getDbLocation(
        credentials
      )}`
    );
  }

  return withMigrate(schemaPath, async migrate => {
    if (!migrate.migrationsDirectoryPath) {
      console.error('No migrations directory path');
      throw new ExitError(1);
    }

    const { migrationsDirectoryPath } = migrate;

    if (resetDb) {
      await runMigrateWithDbUrl(dbUrl, shadowDbUrl, () => migrate.reset());
      console.log('✨ Your database has been reset');
    } else {
      // see if we need to reset the database
      // note that the other action devDiagnostic can return is createMigration
      // that doesn't necessarily mean that we need to create a migration
      // it only means that we don't need to reset the database
      const devDiagnostic = await runMigrateWithDbUrl(dbUrl, shadowDbUrl, () =>
        migrate.devDiagnostic()
      );

      // when the action is reset, the database is somehow inconsistent with the migrations so we need to reset it
      // (not just some migrations need to be applied but there's some inconsistency)
      if (devDiagnostic.action.tag === 'reset') {
        const credentials = uriToCredentials(dbUrl);
        console.log(`${devDiagnostic.action.reason}

We need to reset the ${credentials.type} database "${credentials.database}" at ${getDbLocation(
          credentials
        )}.`);
        const confirmedReset = await confirmPrompt(
          `Do you want to continue? ${chalk.red('All data will be lost')}`
        );
        console.info(); // empty line

        if (!confirmedReset) {
          console.error('Reset cancelled');
          throw new ExitError(0);
        }

        // do the reset
        await runMigrateWithDbUrl(dbUrl, shadowDbUrl, () => migrate.reset());
      }
    }
    const { appliedMigrationNames } = await runMigrateWithDbUrl(dbUrl, shadowDbUrl, () =>
      migrate.applyMigrations()
    );

    // inform user about applied migrations now
    if (appliedMigrationNames.length) {
      console.info(`✨ The following migration(s) have been applied:`);
      for (const id of appliedMigrationNames) {
        console.info(`  - ${chalk.cyan.bold(id)}`);
      }
    }

    // evaluateDataLoss basically means "try to create a migration but don't write it"
    // so we can tell the user whether it can be executed and if there will be data loss
    const evaluateDataLossResult = await runMigrateWithDbUrl(dbUrl, shadowDbUrl, () =>
      migrate.evaluateDataLoss()
    );

    // if there are no steps, there was no change to the prisma schema so we don't need to create a migration
    if (evaluateDataLossResult.migrationSteps) {
      console.log('✨ There has been a change to your Keystone schema that requires a migration');
      const migrationCanBeApplied = !evaluateDataLossResult.unexecutableSteps.length;

      // see the link below for what "unexecutable steps" are
      // https://github.com/prisma/prisma-engines/blob/c65d20050f139a7917ef2efc47a977338070ea61/migration-engine/connectors/sql-migration-connector/src/sql_destructive_change_checker/unexecutable_step_check.rs
      // the tl;dr is "making things non null when there are nulls in the db"
      if (!migrationCanBeApplied) {
        logUnexecutableSteps(evaluateDataLossResult.unexecutableSteps.map(x => x.message));
      }
      // warnings mean "if the migration was applied to the database you're connected to, you will lose x data"
      // note that if you have a field where all of the values are null on your local db and you've removed it, you won't get a warning here.
      // there will be a warning in a comment in the generated migration though.
      if (evaluateDataLossResult.warnings.length) {
        logWarnings(evaluateDataLossResult.warnings.map(x => x.message));
      }

      console.log(); // for an empty line
      const migrationNameInput = await textPrompt('Name of migration');

      // 200 characters is the limit from Prisma
      //   see https://github.com/prisma/prisma/blob/c6995ebb6f23996d3b48dfdd1b841e0b5cf549b3/packages/migrate/src/utils/promptForMigrationName.ts#L12
      const migrationName = migrationNameInput.replace(/[^A-Za-z0-9_]/g, '_').slice(0, 200);

      // note this only creates the migration, it does not apply it
      const { generatedMigrationName } = await runMigrateWithDbUrl(dbUrl, shadowDbUrl, () =>
        migrate.createMigration({
          migrationsDirectoryPath,
          // https://github.com/prisma/prisma-engines/blob/11dfcc85d7f9b55235e31630cd87da7da3aed8cc/migration-engine/core/src/commands/create_migration.rs#L16-L17
          // draft means "create an empty migration even if there are no changes rather than exiting"
          // because this whole thing only happens when there are changes to the schema, this can be false
          // (we should also ofc have a way to create an empty migration but that's a separate thing)
          draft: false,
          prismaSchema,
          migrationName,
        })
      );

      console.log(`✨ A migration has been created at migrations/${generatedMigrationName}`);

      const shouldApplyMigration =
        migrationCanBeApplied &&
        (await confirmPrompt('Would you like to apply this migration?', false));

      if (shouldApplyMigration) {
        await runMigrateWithDbUrl(dbUrl, shadowDbUrl, () => migrate.applyMigrations());
        console.log('✅ The migration has been applied');
      } else {
        console.error('Please edit the migration and try again');
        throw new ExitError(0);
      }
    } else {
      if (appliedMigrationNames.length) {
        console.log('✨ Your migrations are up to date, no new migrations need to be created');
      } else {
        console.log('✨ Your database is up to date, no migrations need to be created or applied');
      }
    }
  });
}

function getDbLocation(credentials: DatabaseCredentials): string {
  if (credentials.type === 'sqlite') {
    return credentials.uri!;
  }

  return `${credentials.host}${credentials.port === undefined ? '' : `:${credentials.port}`}`;
}
