// Do not manually modify this file, it is automatically generated by the package at /prisma-utils in this repo.
// Update the script if you need this file to be different

import { graphql } from '../../schema';

import { QueryMode } from '../../next-fields';

type StringNullableFilterType = graphql.InputObjectType<{
  // can be null
  equals: graphql.Arg<typeof graphql.String>;
  // can be null
  in: graphql.Arg<graphql.ListType<graphql.NonNullType<typeof graphql.String>>>;
  // can be null
  notIn: graphql.Arg<graphql.ListType<graphql.NonNullType<typeof graphql.String>>>;
  lt: graphql.Arg<typeof graphql.String>;
  lte: graphql.Arg<typeof graphql.String>;
  gt: graphql.Arg<typeof graphql.String>;
  gte: graphql.Arg<typeof graphql.String>;
  contains: graphql.Arg<typeof graphql.String>;
  startsWith: graphql.Arg<typeof graphql.String>;
  endsWith: graphql.Arg<typeof graphql.String>;
  mode: graphql.Arg<typeof QueryMode>;
  // can be null
  not: graphql.Arg<typeof NestedStringNullableFilter>;
}>;

const StringNullableFilter: StringNullableFilterType = graphql.inputObject({
  name: 'StringNullableFilter',
  fields: () => ({
    // can be null
    equals: graphql.arg({ type: graphql.String }),
    // can be null
    in: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.String)) }),
    // can be null
    notIn: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.String)) }),
    lt: graphql.arg({ type: graphql.String }),
    lte: graphql.arg({ type: graphql.String }),
    gt: graphql.arg({ type: graphql.String }),
    gte: graphql.arg({ type: graphql.String }),
    contains: graphql.arg({ type: graphql.String }),
    startsWith: graphql.arg({ type: graphql.String }),
    endsWith: graphql.arg({ type: graphql.String }),
    mode: graphql.arg({ type: QueryMode }),
    // can be null
    not: graphql.arg({ type: NestedStringNullableFilter }),
  }),
});

type NestedStringNullableFilterType = graphql.InputObjectType<{
  // can be null
  equals: graphql.Arg<typeof graphql.String>;
  // can be null
  in: graphql.Arg<graphql.ListType<graphql.NonNullType<typeof graphql.String>>>;
  // can be null
  notIn: graphql.Arg<graphql.ListType<graphql.NonNullType<typeof graphql.String>>>;
  lt: graphql.Arg<typeof graphql.String>;
  lte: graphql.Arg<typeof graphql.String>;
  gt: graphql.Arg<typeof graphql.String>;
  gte: graphql.Arg<typeof graphql.String>;
  contains: graphql.Arg<typeof graphql.String>;
  startsWith: graphql.Arg<typeof graphql.String>;
  endsWith: graphql.Arg<typeof graphql.String>;
  // can be null
  not: graphql.Arg<typeof NestedStringNullableFilter>;
}>;

const NestedStringNullableFilter: NestedStringNullableFilterType = graphql.inputObject({
  name: 'NestedStringNullableFilter',
  fields: () => ({
    // can be null
    equals: graphql.arg({ type: graphql.String }),
    // can be null
    in: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.String)) }),
    // can be null
    notIn: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.String)) }),
    lt: graphql.arg({ type: graphql.String }),
    lte: graphql.arg({ type: graphql.String }),
    gt: graphql.arg({ type: graphql.String }),
    gte: graphql.arg({ type: graphql.String }),
    contains: graphql.arg({ type: graphql.String }),
    startsWith: graphql.arg({ type: graphql.String }),
    endsWith: graphql.arg({ type: graphql.String }),
    // can be null
    not: graphql.arg({ type: NestedStringNullableFilter }),
  }),
});

type StringFilterType = graphql.InputObjectType<{
  equals: graphql.Arg<typeof graphql.String>;
  in: graphql.Arg<graphql.ListType<graphql.NonNullType<typeof graphql.String>>>;
  notIn: graphql.Arg<graphql.ListType<graphql.NonNullType<typeof graphql.String>>>;
  lt: graphql.Arg<typeof graphql.String>;
  lte: graphql.Arg<typeof graphql.String>;
  gt: graphql.Arg<typeof graphql.String>;
  gte: graphql.Arg<typeof graphql.String>;
  contains: graphql.Arg<typeof graphql.String>;
  startsWith: graphql.Arg<typeof graphql.String>;
  endsWith: graphql.Arg<typeof graphql.String>;
  mode: graphql.Arg<typeof QueryMode>;
  not: graphql.Arg<typeof NestedStringFilter>;
}>;

const StringFilter: StringFilterType = graphql.inputObject({
  name: 'StringFilter',
  fields: () => ({
    equals: graphql.arg({ type: graphql.String }),
    in: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.String)) }),
    notIn: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.String)) }),
    lt: graphql.arg({ type: graphql.String }),
    lte: graphql.arg({ type: graphql.String }),
    gt: graphql.arg({ type: graphql.String }),
    gte: graphql.arg({ type: graphql.String }),
    contains: graphql.arg({ type: graphql.String }),
    startsWith: graphql.arg({ type: graphql.String }),
    endsWith: graphql.arg({ type: graphql.String }),
    mode: graphql.arg({ type: QueryMode }),
    not: graphql.arg({ type: NestedStringFilter }),
  }),
});

type NestedStringFilterType = graphql.InputObjectType<{
  equals: graphql.Arg<typeof graphql.String>;
  in: graphql.Arg<graphql.ListType<graphql.NonNullType<typeof graphql.String>>>;
  notIn: graphql.Arg<graphql.ListType<graphql.NonNullType<typeof graphql.String>>>;
  lt: graphql.Arg<typeof graphql.String>;
  lte: graphql.Arg<typeof graphql.String>;
  gt: graphql.Arg<typeof graphql.String>;
  gte: graphql.Arg<typeof graphql.String>;
  contains: graphql.Arg<typeof graphql.String>;
  startsWith: graphql.Arg<typeof graphql.String>;
  endsWith: graphql.Arg<typeof graphql.String>;
  not: graphql.Arg<typeof NestedStringFilter>;
}>;

const NestedStringFilter: NestedStringFilterType = graphql.inputObject({
  name: 'NestedStringFilter',
  fields: () => ({
    equals: graphql.arg({ type: graphql.String }),
    in: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.String)) }),
    notIn: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.String)) }),
    lt: graphql.arg({ type: graphql.String }),
    lte: graphql.arg({ type: graphql.String }),
    gt: graphql.arg({ type: graphql.String }),
    gte: graphql.arg({ type: graphql.String }),
    contains: graphql.arg({ type: graphql.String }),
    startsWith: graphql.arg({ type: graphql.String }),
    endsWith: graphql.arg({ type: graphql.String }),
    not: graphql.arg({ type: NestedStringFilter }),
  }),
});

type StringNullableListFilterType = graphql.InputObjectType<{
  // can be null
  equals: graphql.Arg<graphql.ListType<graphql.NonNullType<typeof graphql.String>>>;
  // can be null
  has: graphql.Arg<typeof graphql.String>;
  hasEvery: graphql.Arg<graphql.ListType<graphql.NonNullType<typeof graphql.String>>>;
  hasSome: graphql.Arg<graphql.ListType<graphql.NonNullType<typeof graphql.String>>>;
  isEmpty: graphql.Arg<typeof graphql.Boolean>;
}>;

const StringNullableListFilter: StringNullableListFilterType = graphql.inputObject({
  name: 'StringNullableListFilter',
  fields: () => ({
    // can be null
    equals: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.String)) }),
    // can be null
    has: graphql.arg({ type: graphql.String }),
    hasEvery: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.String)) }),
    hasSome: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.String)) }),
    isEmpty: graphql.arg({ type: graphql.Boolean }),
  }),
});

type BoolNullableFilterType = graphql.InputObjectType<{
  // can be null
  equals: graphql.Arg<typeof graphql.Boolean>;
  // can be null
  not: graphql.Arg<typeof BoolNullableFilter>;
}>;

const BoolNullableFilter: BoolNullableFilterType = graphql.inputObject({
  name: 'BooleanNullableFilter',
  fields: () => ({
    // can be null
    equals: graphql.arg({ type: graphql.Boolean }),
    // can be null
    not: graphql.arg({ type: BoolNullableFilter }),
  }),
});

type BoolFilterType = graphql.InputObjectType<{
  equals: graphql.Arg<typeof graphql.Boolean>;
  not: graphql.Arg<typeof BoolFilter>;
}>;

const BoolFilter: BoolFilterType = graphql.inputObject({
  name: 'BooleanFilter',
  fields: () => ({
    equals: graphql.arg({ type: graphql.Boolean }),
    not: graphql.arg({ type: BoolFilter }),
  }),
});

type BoolNullableListFilterType = graphql.InputObjectType<{
  // can be null
  equals: graphql.Arg<graphql.ListType<graphql.NonNullType<typeof graphql.Boolean>>>;
  // can be null
  has: graphql.Arg<typeof graphql.Boolean>;
  hasEvery: graphql.Arg<graphql.ListType<graphql.NonNullType<typeof graphql.Boolean>>>;
  hasSome: graphql.Arg<graphql.ListType<graphql.NonNullType<typeof graphql.Boolean>>>;
  isEmpty: graphql.Arg<typeof graphql.Boolean>;
}>;

const BoolNullableListFilter: BoolNullableListFilterType = graphql.inputObject({
  name: 'BooleanNullableListFilter',
  fields: () => ({
    // can be null
    equals: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.Boolean)) }),
    // can be null
    has: graphql.arg({ type: graphql.Boolean }),
    hasEvery: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.Boolean)) }),
    hasSome: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.Boolean)) }),
    isEmpty: graphql.arg({ type: graphql.Boolean }),
  }),
});

type IntNullableFilterType = graphql.InputObjectType<{
  // can be null
  equals: graphql.Arg<typeof graphql.Int>;
  // can be null
  in: graphql.Arg<graphql.ListType<graphql.NonNullType<typeof graphql.Int>>>;
  // can be null
  notIn: graphql.Arg<graphql.ListType<graphql.NonNullType<typeof graphql.Int>>>;
  lt: graphql.Arg<typeof graphql.Int>;
  lte: graphql.Arg<typeof graphql.Int>;
  gt: graphql.Arg<typeof graphql.Int>;
  gte: graphql.Arg<typeof graphql.Int>;
  // can be null
  not: graphql.Arg<typeof IntNullableFilter>;
}>;

const IntNullableFilter: IntNullableFilterType = graphql.inputObject({
  name: 'IntNullableFilter',
  fields: () => ({
    // can be null
    equals: graphql.arg({ type: graphql.Int }),
    // can be null
    in: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.Int)) }),
    // can be null
    notIn: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.Int)) }),
    lt: graphql.arg({ type: graphql.Int }),
    lte: graphql.arg({ type: graphql.Int }),
    gt: graphql.arg({ type: graphql.Int }),
    gte: graphql.arg({ type: graphql.Int }),
    // can be null
    not: graphql.arg({ type: IntNullableFilter }),
  }),
});

type IntFilterType = graphql.InputObjectType<{
  equals: graphql.Arg<typeof graphql.Int>;
  in: graphql.Arg<graphql.ListType<graphql.NonNullType<typeof graphql.Int>>>;
  notIn: graphql.Arg<graphql.ListType<graphql.NonNullType<typeof graphql.Int>>>;
  lt: graphql.Arg<typeof graphql.Int>;
  lte: graphql.Arg<typeof graphql.Int>;
  gt: graphql.Arg<typeof graphql.Int>;
  gte: graphql.Arg<typeof graphql.Int>;
  not: graphql.Arg<typeof IntFilter>;
}>;

const IntFilter: IntFilterType = graphql.inputObject({
  name: 'IntFilter',
  fields: () => ({
    equals: graphql.arg({ type: graphql.Int }),
    in: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.Int)) }),
    notIn: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.Int)) }),
    lt: graphql.arg({ type: graphql.Int }),
    lte: graphql.arg({ type: graphql.Int }),
    gt: graphql.arg({ type: graphql.Int }),
    gte: graphql.arg({ type: graphql.Int }),
    not: graphql.arg({ type: IntFilter }),
  }),
});

type IntNullableListFilterType = graphql.InputObjectType<{
  // can be null
  equals: graphql.Arg<graphql.ListType<graphql.NonNullType<typeof graphql.Int>>>;
  // can be null
  has: graphql.Arg<typeof graphql.Int>;
  hasEvery: graphql.Arg<graphql.ListType<graphql.NonNullType<typeof graphql.Int>>>;
  hasSome: graphql.Arg<graphql.ListType<graphql.NonNullType<typeof graphql.Int>>>;
  isEmpty: graphql.Arg<typeof graphql.Boolean>;
}>;

const IntNullableListFilter: IntNullableListFilterType = graphql.inputObject({
  name: 'IntNullableListFilter',
  fields: () => ({
    // can be null
    equals: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.Int)) }),
    // can be null
    has: graphql.arg({ type: graphql.Int }),
    hasEvery: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.Int)) }),
    hasSome: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.Int)) }),
    isEmpty: graphql.arg({ type: graphql.Boolean }),
  }),
});

type FloatNullableFilterType = graphql.InputObjectType<{
  // can be null
  equals: graphql.Arg<typeof graphql.Float>;
  // can be null
  in: graphql.Arg<graphql.ListType<graphql.NonNullType<typeof graphql.Float>>>;
  // can be null
  notIn: graphql.Arg<graphql.ListType<graphql.NonNullType<typeof graphql.Float>>>;
  lt: graphql.Arg<typeof graphql.Float>;
  lte: graphql.Arg<typeof graphql.Float>;
  gt: graphql.Arg<typeof graphql.Float>;
  gte: graphql.Arg<typeof graphql.Float>;
  // can be null
  not: graphql.Arg<typeof FloatNullableFilter>;
}>;

const FloatNullableFilter: FloatNullableFilterType = graphql.inputObject({
  name: 'FloatNullableFilter',
  fields: () => ({
    // can be null
    equals: graphql.arg({ type: graphql.Float }),
    // can be null
    in: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.Float)) }),
    // can be null
    notIn: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.Float)) }),
    lt: graphql.arg({ type: graphql.Float }),
    lte: graphql.arg({ type: graphql.Float }),
    gt: graphql.arg({ type: graphql.Float }),
    gte: graphql.arg({ type: graphql.Float }),
    // can be null
    not: graphql.arg({ type: FloatNullableFilter }),
  }),
});

type FloatFilterType = graphql.InputObjectType<{
  equals: graphql.Arg<typeof graphql.Float>;
  in: graphql.Arg<graphql.ListType<graphql.NonNullType<typeof graphql.Float>>>;
  notIn: graphql.Arg<graphql.ListType<graphql.NonNullType<typeof graphql.Float>>>;
  lt: graphql.Arg<typeof graphql.Float>;
  lte: graphql.Arg<typeof graphql.Float>;
  gt: graphql.Arg<typeof graphql.Float>;
  gte: graphql.Arg<typeof graphql.Float>;
  not: graphql.Arg<typeof FloatFilter>;
}>;

const FloatFilter: FloatFilterType = graphql.inputObject({
  name: 'FloatFilter',
  fields: () => ({
    equals: graphql.arg({ type: graphql.Float }),
    in: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.Float)) }),
    notIn: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.Float)) }),
    lt: graphql.arg({ type: graphql.Float }),
    lte: graphql.arg({ type: graphql.Float }),
    gt: graphql.arg({ type: graphql.Float }),
    gte: graphql.arg({ type: graphql.Float }),
    not: graphql.arg({ type: FloatFilter }),
  }),
});

type FloatNullableListFilterType = graphql.InputObjectType<{
  // can be null
  equals: graphql.Arg<graphql.ListType<graphql.NonNullType<typeof graphql.Float>>>;
  // can be null
  has: graphql.Arg<typeof graphql.Float>;
  hasEvery: graphql.Arg<graphql.ListType<graphql.NonNullType<typeof graphql.Float>>>;
  hasSome: graphql.Arg<graphql.ListType<graphql.NonNullType<typeof graphql.Float>>>;
  isEmpty: graphql.Arg<typeof graphql.Boolean>;
}>;

const FloatNullableListFilter: FloatNullableListFilterType = graphql.inputObject({
  name: 'FloatNullableListFilter',
  fields: () => ({
    // can be null
    equals: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.Float)) }),
    // can be null
    has: graphql.arg({ type: graphql.Float }),
    hasEvery: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.Float)) }),
    hasSome: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.Float)) }),
    isEmpty: graphql.arg({ type: graphql.Boolean }),
  }),
});

type DateTimeNullableFilterType = graphql.InputObjectType<{
  // can be null
  equals: graphql.Arg<typeof graphql.DateTime>;
  // can be null
  in: graphql.Arg<graphql.ListType<graphql.NonNullType<typeof graphql.DateTime>>>;
  // can be null
  notIn: graphql.Arg<graphql.ListType<graphql.NonNullType<typeof graphql.DateTime>>>;
  lt: graphql.Arg<typeof graphql.DateTime>;
  lte: graphql.Arg<typeof graphql.DateTime>;
  gt: graphql.Arg<typeof graphql.DateTime>;
  gte: graphql.Arg<typeof graphql.DateTime>;
  // can be null
  not: graphql.Arg<typeof DateTimeNullableFilter>;
}>;

const DateTimeNullableFilter: DateTimeNullableFilterType = graphql.inputObject({
  name: 'DateTimeNullableFilter',
  fields: () => ({
    // can be null
    equals: graphql.arg({ type: graphql.DateTime }),
    // can be null
    in: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.DateTime)) }),
    // can be null
    notIn: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.DateTime)) }),
    lt: graphql.arg({ type: graphql.DateTime }),
    lte: graphql.arg({ type: graphql.DateTime }),
    gt: graphql.arg({ type: graphql.DateTime }),
    gte: graphql.arg({ type: graphql.DateTime }),
    // can be null
    not: graphql.arg({ type: DateTimeNullableFilter }),
  }),
});

type DateTimeFilterType = graphql.InputObjectType<{
  equals: graphql.Arg<typeof graphql.DateTime>;
  in: graphql.Arg<graphql.ListType<graphql.NonNullType<typeof graphql.DateTime>>>;
  notIn: graphql.Arg<graphql.ListType<graphql.NonNullType<typeof graphql.DateTime>>>;
  lt: graphql.Arg<typeof graphql.DateTime>;
  lte: graphql.Arg<typeof graphql.DateTime>;
  gt: graphql.Arg<typeof graphql.DateTime>;
  gte: graphql.Arg<typeof graphql.DateTime>;
  not: graphql.Arg<typeof DateTimeFilter>;
}>;

const DateTimeFilter: DateTimeFilterType = graphql.inputObject({
  name: 'DateTimeFilter',
  fields: () => ({
    equals: graphql.arg({ type: graphql.DateTime }),
    in: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.DateTime)) }),
    notIn: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.DateTime)) }),
    lt: graphql.arg({ type: graphql.DateTime }),
    lte: graphql.arg({ type: graphql.DateTime }),
    gt: graphql.arg({ type: graphql.DateTime }),
    gte: graphql.arg({ type: graphql.DateTime }),
    not: graphql.arg({ type: DateTimeFilter }),
  }),
});

type DateTimeNullableListFilterType = graphql.InputObjectType<{
  // can be null
  equals: graphql.Arg<graphql.ListType<graphql.NonNullType<typeof graphql.DateTime>>>;
  // can be null
  has: graphql.Arg<typeof graphql.DateTime>;
  hasEvery: graphql.Arg<graphql.ListType<graphql.NonNullType<typeof graphql.DateTime>>>;
  hasSome: graphql.Arg<graphql.ListType<graphql.NonNullType<typeof graphql.DateTime>>>;
  isEmpty: graphql.Arg<typeof graphql.Boolean>;
}>;

const DateTimeNullableListFilter: DateTimeNullableListFilterType = graphql.inputObject({
  name: 'DateTimeNullableListFilter',
  fields: () => ({
    // can be null
    equals: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.DateTime)) }),
    // can be null
    has: graphql.arg({ type: graphql.DateTime }),
    hasEvery: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.DateTime)) }),
    hasSome: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.DateTime)) }),
    isEmpty: graphql.arg({ type: graphql.Boolean }),
  }),
});

type DecimalNullableFilterType = graphql.InputObjectType<{
  // can be null
  equals: graphql.Arg<typeof graphql.Decimal>;
  // can be null
  in: graphql.Arg<graphql.ListType<graphql.NonNullType<typeof graphql.Decimal>>>;
  // can be null
  notIn: graphql.Arg<graphql.ListType<graphql.NonNullType<typeof graphql.Decimal>>>;
  lt: graphql.Arg<typeof graphql.Decimal>;
  lte: graphql.Arg<typeof graphql.Decimal>;
  gt: graphql.Arg<typeof graphql.Decimal>;
  gte: graphql.Arg<typeof graphql.Decimal>;
  // can be null
  not: graphql.Arg<typeof DecimalNullableFilter>;
}>;

const DecimalNullableFilter: DecimalNullableFilterType = graphql.inputObject({
  name: 'DecimalNullableFilter',
  fields: () => ({
    // can be null
    equals: graphql.arg({ type: graphql.Decimal }),
    // can be null
    in: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.Decimal)) }),
    // can be null
    notIn: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.Decimal)) }),
    lt: graphql.arg({ type: graphql.Decimal }),
    lte: graphql.arg({ type: graphql.Decimal }),
    gt: graphql.arg({ type: graphql.Decimal }),
    gte: graphql.arg({ type: graphql.Decimal }),
    // can be null
    not: graphql.arg({ type: DecimalNullableFilter }),
  }),
});

type DecimalFilterType = graphql.InputObjectType<{
  equals: graphql.Arg<typeof graphql.Decimal>;
  in: graphql.Arg<graphql.ListType<graphql.NonNullType<typeof graphql.Decimal>>>;
  notIn: graphql.Arg<graphql.ListType<graphql.NonNullType<typeof graphql.Decimal>>>;
  lt: graphql.Arg<typeof graphql.Decimal>;
  lte: graphql.Arg<typeof graphql.Decimal>;
  gt: graphql.Arg<typeof graphql.Decimal>;
  gte: graphql.Arg<typeof graphql.Decimal>;
  not: graphql.Arg<typeof DecimalFilter>;
}>;

const DecimalFilter: DecimalFilterType = graphql.inputObject({
  name: 'DecimalFilter',
  fields: () => ({
    equals: graphql.arg({ type: graphql.Decimal }),
    in: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.Decimal)) }),
    notIn: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.Decimal)) }),
    lt: graphql.arg({ type: graphql.Decimal }),
    lte: graphql.arg({ type: graphql.Decimal }),
    gt: graphql.arg({ type: graphql.Decimal }),
    gte: graphql.arg({ type: graphql.Decimal }),
    not: graphql.arg({ type: DecimalFilter }),
  }),
});

type DecimalNullableListFilterType = graphql.InputObjectType<{
  // can be null
  equals: graphql.Arg<graphql.ListType<graphql.NonNullType<typeof graphql.Decimal>>>;
  // can be null
  has: graphql.Arg<typeof graphql.Decimal>;
  hasEvery: graphql.Arg<graphql.ListType<graphql.NonNullType<typeof graphql.Decimal>>>;
  hasSome: graphql.Arg<graphql.ListType<graphql.NonNullType<typeof graphql.Decimal>>>;
  isEmpty: graphql.Arg<typeof graphql.Boolean>;
}>;

const DecimalNullableListFilter: DecimalNullableListFilterType = graphql.inputObject({
  name: 'DecimalNullableListFilter',
  fields: () => ({
    // can be null
    equals: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.Decimal)) }),
    // can be null
    has: graphql.arg({ type: graphql.Decimal }),
    hasEvery: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.Decimal)) }),
    hasSome: graphql.arg({ type: graphql.list(graphql.nonNull(graphql.Decimal)) }),
    isEmpty: graphql.arg({ type: graphql.Boolean }),
  }),
});

export const String = {
  optional: StringNullableFilter,
  required: StringFilter,
  many: StringNullableListFilter,
};

export const Boolean = {
  optional: BoolNullableFilter,
  required: BoolFilter,
  many: BoolNullableListFilter,
};

export const Int = {
  optional: IntNullableFilter,
  required: IntFilter,
  many: IntNullableListFilter,
};

export const Float = {
  optional: FloatNullableFilter,
  required: FloatFilter,
  many: FloatNullableListFilter,
};

export const DateTime = {
  optional: DateTimeNullableFilter,
  required: DateTimeFilter,
  many: DateTimeNullableListFilter,
};

export const Decimal = {
  optional: DecimalNullableFilter,
  required: DecimalFilter,
  many: DecimalNullableListFilter,
};

export { enumFilters as enum } from '../enum-filter';
