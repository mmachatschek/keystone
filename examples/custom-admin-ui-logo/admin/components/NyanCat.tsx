/** @jsx jsx */
import { css, jsx, keyframes, Global } from '@keystone-ui/core';
const sparkle = keyframes`
  0% {
    opacity: 1;
  }

  16.666666% {
    opacity: 1;
  }

  16.6666666% {
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
`;

const rainbowUpdown = keyframes`
  0% {
    transform: translate(0, 0px);
  }

  49.99% {
    transform: translate(0, 0px);
  }

  50% {
    transform: translate(0, 4px);
  }

  100% {
    transform: translate(0, 4px);
  }
`;

const rainbowLeftright = keyframes`
  0% {
    transform: translate(0px, 0px);
  }

  49.99% {
    transform: translate(0px, 0px);
  }

  50% {
    transform: translate(-4px, 0px);
  }

  100% {
    transform: translate(-4px, 0px);
  }
`;

const catrun = keyframes`
  0% {
    opacity: 1;
  }

  16.666666% {
    opacity: 1;
  }

  16.6666666% {
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
`;

export const NyanCat = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 180"
      css={css`
        width: 20rem;
        margin-top: 0.5rem;
      `}
    >
      <defs>
        {/* <radialGradient id="BackgroundGradient">
          <stop offset="0%" stop-color="#005093" />
          <stop offset="100%" stop-color="#002953" />
        </radialGradient> */}

        <g id="sparkle" transform="scale(2)" stroke="white">
          <Global
            styles={css`
              .sparkle-frame6 {
                animation: ${sparkle} 0.42s linear 0.35s infinite;
              }

              .sparkle-frame5 {
                animation: ${sparkle} 0.42s linear 0.28s infinite;
              }

              .sparkle-frame4 {
                animation: ${sparkle} 0.42s linear 0.21s infinite;
              }

              .sparkle-frame3 {
                animation: ${sparkle} 0.42s linear 0.14s infinite;
              }

              .sparkle-frame2 {
                animation: ${sparkle} 0.42s linear 0.07s infinite;
              }

              .sparkle-frame1 {
                animation: ${sparkle} 0.42s linear 0s infinite;
              }
            `}
          />
          <path
            className="sparkle-frame1"
            d="M3.5 0 v2 M7 3.5 h-2 M3.5 7 v-2 M0 3.5 h2 M3 3.5 h1"
          />
          <path
            className="sparkle-frame2"
            d="M3 0.5 h1 M5 1.5 h1 M6 3.5 h1 M5 5.5 h1 M3 6.5 h1 M1 5.5 h1 M0 3.5 h1 M1 1.5 h1"
          />
          <path className="sparkle-frame3" d="M3 0.5 h1 M6 3.5 h1 M3 6.5 h1 M0 3.5 h1" />
          <path className="sparkle-frame4" d="M3 3.5 h1" />
          <path className="sparkle-frame5" d="M3 2.5 h1 M4 3.5 h1 M3 4.5 h1 M2 3.5 h1" />
          <path className="sparkle-frame6" d="M3.5 1 v2 M4 3.5 h2 M3.5 4 v2 M1 3.5 h2" />
        </g>
      </defs>
      <rect id="background" width="100%" height="100%" fill="url('#BackgroundGradient')" />

      <use href="#sparkle" id="sparkle1">
        <animateMotion dur="0.77s" repeatCount="indefinite" path="M250 10 70 10" />
      </use>
      <use href="#sparkle" id="sparkle2">
        <animateMotion begin="0.2566" dur="0.77s" repeatCount="indefinite" path="M255 23 65 23" />
      </use>
      <use href="#sparkle" id="sparkle3">
        <animateMotion begin="0.5133" dur="0.77s" repeatCount="indefinite" path="M260 36 60 36" />
      </use>
      <use href="#sparkle" id="sparkle4">
        <animateMotion begin="0.1283" dur="0.77s" repeatCount="indefinite" path="M260 130 60 130" />
      </use>
      <use href="#sparkle" id="sparkle5">
        <animateMotion begin="0.385" dur="0.77s" repeatCount="indefinite" path="M255 143 65 143" />
      </use>
      <use href="#sparkle" id="sparkle6">
        <animateMotion begin="0.6416" dur="0.77s" repeatCount="indefinite" path="M250 166 70 166" />
      </use>
      <use href="#sparkle" id="sparkle7">
        <animateMotion dur="0.84s" repeatCount="indefinite" path="M250 105 70 105" />
      </use>
      <use href="#sparkle" id="sparkle8">
        <animateMotion begin="0.28" dur="0.84s" repeatCount="indefinite" path="M250 73 70 73" />
      </use>
      <svg id="rainbow" y="58.5">
        <defs>
          <linearGradient id="RainbowGradient" gradientTransform="rotate(90)">
            <stop offset="0%" stop-color="#FD1B00" />
            <stop offset="16.66%" stop-color="#FD1B00" />
            <stop offset="16.67%" stop-color="#FD9B01" />
            <stop offset="33.33%" stop-color="#FD9B01" />
            <stop offset="33.34%" stop-color="#FDEF01" />
            <stop offset="49.99%" stop-color="#FDEF01" />
            <stop offset="50.00%" stop-color="#20DB01" />
            <stop offset="66.66%" stop-color="#20DB01" />
            <stop offset="66.67%" stop-color="#008AFC" />
            <stop offset="83.33%" stop-color="#008AFC" />
            <stop offset="83.34%" stop-color="#6D3FFC" />
            <stop offset="100%" stop-color="#6D3FFC" />
          </linearGradient>
        </defs>
        <Global
          styles={css`
            .rainbow-container {
              animation: ${rainbowLeftright} 0.42s linear infinite;
            }

            .rainbow-piece0 {
              animation: ${rainbowUpdown} 0.42s linear infinite;
            }

            .rainbow-piece1 {
              animation: ${rainbowUpdown} 0.42s linear -0.21s infinite;
            }
          `}
        />

        <g className="rainbow-container">
          <rect
            className="rainbow-piece rainbow-piece0"
            width="30"
            height="54"
            fill="url('#RainbowGradient')"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 -5; 0 -5; 0 5;  0 5"
              dur="0.42s"
              repeatCount="indefinite"
            />
          </rect>
          <rect
            className="rainbow-piece rainbow-piece1"
            x="29.5"
            width="30"
            height="54"
            fill="url('#RainbowGradient')"
          />
          <rect
            className="rainbow-piece rainbow-piece0"
            x="59"
            width="30"
            height="54"
            fill="url('#RainbowGradient')"
          />
          <rect
            className="rainbow-piece rainbow-piece1"
            x="88.5"
            width="30"
            height="54"
            fill="url('#RainbowGradient')"
          />
          <rect
            className="rainbow-piece rainbow-piece0"
            x="118"
            width="30"
            height="54"
            fill="url('#RainbowGradient')"
          />
        </g>
      </svg>

      <svg
        id="cat"
        x="120"
        y="58.5"
        width="102"
        height="73"
        viewBox="0 0 34 21"
        preserveAspectRatio="xMinYMin meet"
      >
        <Global
          styles={css`
            .cat-frame {
              opacity: 0;
            }

            #cat-frame6 {
              animation: ${catrun} 0.42s linear 0.35s infinite;
            }

            #cat-frame5 {
              animation: ${catrun} 0.42s linear 0.28s infinite;
            }

            #cat-frame4 {
              animation: ${catrun} 0.42s linear 0.21s infinite;
            }

            #cat-frame3 {
              animation: ${catrun} 0.42s linear 0.14s infinite;
            }

            #cat-frame2 {
              animation: ${catrun} 0.42s linear 0.07s infinite;
            }

            #cat-frame1 {
              animation: ${catrun} 0.42s linear 0s infinite;
            }
          `}
        />
        <g id="cat-frame1" className="cat-frame">
          <g
            transform="translate(1,0)"
            id="layer1"
            css={css`
              display: inline;
            `}
          >
            <g transform="translate(4,-1032.3622)" id="g3832">
              <path
                d="m 0,50 0,-3 1,0 0,-1 4,0 0,3 -1,0 0,1 z"
                transform="translate(0,1002.3622)"
                id="path3050"
                css={css`
                  fill: #000000;
                  fill-opacity: 1;
                  stroke: none;
                `}
              />
              <path
                d="m 1,49 0,-2 3,0 0,1 -1,0 0,1 z"
                transform="translate(0,1002.3622)"
                id="path3830"
                css={css`
                  fill: #999999;
                  fill-opacity: 1;
                  stroke: none;
                `}
              />
            </g>
            <g transform="translate(4,-1032.3622)" id="g3841">
              <path
                d="m 6,50 0,-2 4,0 0,1 -1,0 0,1 z"
                transform="translate(0,1002.3622)"
                id="path3836"
                css={css`
                  fill: #000000;
                  fill-opacity: 1;
                  stroke: none;
                `}
              />
              <path
                d="m 7,48 2,0 0,1 -2,0 z"
                transform="translate(0,1002.3622)"
                id="rect3838"
                css={css`
                  fill: #999999;
                  fill-opacity: 1;
                  stroke: none;
                `}
              />
            </g>
            <g transform="matrix(-1,0,0,1,29,-1032.3622)" id="g3935">
              <path
                d="m 6,50 0,-2 4,0 0,1 -1,0 0,1 z"
                transform="translate(0,1002.3622)"
                id="path3937"
                css={css`
                  fill: #000000;
                  fill-opacity: 1;
                  stroke: none;
                `}
              />
              <path
                d="m 7,48 2,0 0,1 -2,0 z"
                transform="translate(0,1002.3622)"
                id="path3939"
                css={css`
                  fill: #999999;
                  fill-opacity: 1;
                  stroke: none;
                `}
              />
            </g>
            <g transform="translate(0,-1032.3622)" id="g3948">
              <path
                d="m 24,49 0,-1 4,0 0,1 -1,0 0,1 -2,0 0,-1 z"
                transform="translate(0,1002.3622)"
                id="path3941"
                css={css`
                  fill: #000000;
                  fill-opacity: 1;
                  stroke: none;
                `}
              />
              <path
                d="m 25,48 2,0 0,1 -2,0 z"
                transform="translate(0,1002.3622)"
                id="rect3943"
                css={css`
                  fill: #999999;
                  fill-opacity: 1;
                  stroke: none;
                `}
              />
            </g>
            <g transform="translate(0,-1032.3622)" id="layer1-0">
              <path
                d="m 7,1033.3622 19,0 0,16 -19,0 z"
                id="rect5270"
                css={css`
                  fill: #ffcc99;
                  fill-opacity: 1;
                `}
              />
              <path
                d="m 8,1046.3622 0,-10 1,0 0,-1 1,0 0,-1 13,0 0,1 1,0 0,1 1,0 0,10 -1,0 0,1 -1,0 0,1 -13,0 0,-1 -1,0 0,-1 z"
                id="path5272"
                css={css`
                  fill: #ff99ff;
                  fill-opacity: 1;
                  stroke: none;
                `}
              />
              <path
                d="m 22,1037.3622 1,0 0,1 -1,0 z m -4,-2 1,0 0,1 -1,0 z m -3,0 1,0 0,1 -1,0 z m -1,4 1,0 0,1 -1,0 z m 1,3 1,0 0,1 -1,0 z m -2,3 1,0 0,1 -1,0 z m -2,-4 1,0 0,1 -1,0 z m -2,2 1,0 0,1 -1,0 z m 1,3 1,0 0,1 -1,0 z m 0,-10 1,0 0,1 -1,0 z"
                id="rect5030-3-6"
                css={css`
                  fill: #ff3399;
                  fill-opacity: 1;
                `}
              />
              <path
                d="m 8,1049.3622 17,0 0,1 -17,0 z m 0,-17 17,0 0,1 -17,0 z m 18,16 0,-14 1,0 0,14 z m -20,0 0,-14 1,0 0,14 z m 1,0 1,0 0,1 -1,0 z m 0,-15 1,0 0,1 -1,0 z m 18,0 1,0 0,1 -1,0 z m 0,15 1,0 0,1 -1,0 z"
                id="path5412"
                css={css`
                  fill: #000000;
                  fill-opacity: 1;
                `}
              />
            </g>
            <g transform="translate(6,0)" id="layer3">
              <g id="g5869">
                <path
                  d="m 11,15 0,-5 1,0 0,-4 2,0 0,1 1,0 0,1 1,0 0,1 4,0 0,-1 1,0 0,-1 1,0 0,-1 2,0 0,4 1,0 0,5 -1,0 0,1 -1,0 0,1 -10,0 0,-1 -1,0 0,-1 z"
                  id="path5777"
                  css={css`
                    fill: #999999;
                    fill-opacity: 1;
                    stroke: none;
                  `}
                />
                <path
                  d="m 23,16 1,0 0,1 -1,0 z m 1,-1 1,0 0,1 -1,0 z m 1,-5 1,0 0,5 -1,0 z m -1,-4 1,0 0,4 -1,0 z m -2,-1 2,0 0,1 -2,0 z m -6,3 4,0 0,1 -4,0 z m -4,-3 2,0 0,1 -2,0 z m -1,1 1,0 0,4 -1,0 z m -1,4 1,0 0,5 -1,0 z m 11,-4 1,0 0,1 -1,0 z m -1,1 1,0 0,1 -1,0 z m -5,0 1,0 0,1 -1,0 z m -1,-1 1,0 0,1 -1,0 z m -1,11 10,0 0,1 -10,0 z m -1,-1 1,0 0,1 -1,0 z m -1,-1 1,0 0,1 -1,0 z"
                  id="rect5496-38"
                  css={css`
                    fill: #000000;
                    fill-opacity: 1;
                    stroke: none;
                  `}
                />
                <path
                  d="m 12,13 2,0 0,2 -2,0 z"
                  id="rect5779"
                  css={css`
                    fill: #ff9999;
                    fill-opacity: 1;
                    stroke: none;
                  `}
                />
                <path
                  d="m 23,13 2,0 0,2 -2,0 z"
                  id="rect5781"
                  css={css`
                    fill: #ff9999;
                    fill-opacity: 1;
                    stroke: none;
                  `}
                />
                <path
                  d="m 15,16 0,-2 1,0 0,1 2,0 0,-1 1,0 0,1 2,0 0,-1 1,0 0,2 z"
                  id="path5785"
                  css={css`
                    fill: #000000;
                    fill-opacity: 1;
                    stroke: none;
                  `}
                />
                <path
                  d="m 19,12 1,0 0,1 -1,0 z"
                  id="rect5787"
                  css={css`
                    fill: #000000;
                    fill-opacity: 1;
                    stroke: none;
                  `}
                />
                <g id="g5857">
                  <path
                    d="m 21,13 0,-1 1,0 0,-1 1,0 0,2 z"
                    id="path5795"
                    css={css`
                      fill: #000000;
                      fill-opacity: 1;
                      stroke: none;
                    `}
                  />
                  <path
                    d="m 21,11 1,0 0,1 -1,0 z"
                    id="path5797"
                    css={css`
                      fill: #ffffff;
                      fill-opacity: 1;
                      stroke: none;
                    `}
                  />
                </g>
                <g transform="translate(-7,0)" id="g5861">
                  <path
                    d="m 21,13 0,-1 1,0 0,-1 1,0 0,2 z"
                    id="path5863"
                    css={css`
                      fill: #000000;
                      fill-opacity: 1;
                      stroke: none;
                    `}
                  />
                  <path
                    d="m 21,11 1,0 0,1 -1,0 z"
                    id="path5865"
                    css={css`
                      fill: #ffffff;
                      fill-opacity: 1;
                      stroke: none;
                    `}
                  />
                </g>
              </g>
            </g>
            <g id="g3486">
              <path
                d="M 0,10 0,7 4,7 4,8 5,8 5,9 6,9 6,14 5,14 5,13 3,13 3,12 2,12 2,11 1,11 1,10 z"
                id="path3954"
                css={css`
                  fill: #000000;
                  fill-opacity: 1;
                  stroke: none;
                `}
              />
              <path
                d="m 1,9 0,-1 2,0 0,1 1,0 0,1 1,0 0,1 1,0 0,1 -2,0 0,-1 -1,0 0,-1 -1,0 0,-1 z"
                id="path3956"
                css={css`
                  fill: #999999;
                  fill-opacity: 1;
                  stroke: none;
                `}
              />
            </g>
          </g>
        </g>

        <g id="cat-frame2" className="cat-frame">
          <g transform="translate(1,-1)" id="g4196">
            <g transform="translate(0,-1031.3622)" id="layer1">
              <g id="g3982">
                <path
                  d="m 5,20 0,-3 1,0 0,-1 3,0 0,3 -1,0 0,1 z"
                  transform="translate(0,1032.3622)"
                  id="path3977"
                  css={css`
                    fill: #000000;
                    fill-opacity: 1;
                    stroke: none;
                  `}
                />
                <path
                  d="m 6,17 2,0 0,2 -2,0 z"
                  transform="translate(0,1032.3622)"
                  id="rect3979"
                  css={css`
                    fill: #999999;
                    fill-opacity: 1;
                    stroke: none;
                  `}
                />
              </g>
              <g transform="matrix(-1,0,0,1,20,0)" id="g3841">
                <path
                  d="m 6,50 0,-2 4,0 0,1 -1,0 0,1 z"
                  transform="translate(0,1002.3622)"
                  id="path3836"
                  css={css`
                    fill: #000000;
                    fill-opacity: 1;
                    stroke: none;
                  `}
                />
                <path
                  d="m 7,48 2,0 0,1 -2,0 z"
                  transform="translate(0,1002.3622)"
                  id="rect3838"
                  css={css`
                    fill: #999999;
                    fill-opacity: 1;
                    stroke: none;
                  `}
                />
              </g>
              <g transform="matrix(-1,0,0,1,30,0)" id="g3935">
                <path
                  d="m 6,50 0,-2 4,0 0,1 -1,0 0,1 z"
                  transform="translate(0,1002.3622)"
                  id="path3937"
                  css={css`
                    fill: #000000;
                    fill-opacity: 1;
                    stroke: none;
                  `}
                />
                <path
                  d="m 7,48 2,0 0,1 -2,0 z"
                  transform="translate(0,1002.3622)"
                  id="path3939"
                  css={css`
                    fill: #999999;
                    fill-opacity: 1;
                    stroke: none;
                  `}
                />
              </g>
              <g id="layer1-0">
                <path
                  d="m 7,1033.3622 19,0 0,16 -19,0 z"
                  id="rect5270"
                  css={css`
                    fill: #ffcc99;
                    fill-opacity: 1;
                  `}
                />
                <path
                  d="m 8,1046.3622 0,-10 1,0 0,-1 1,0 0,-1 13,0 0,1 1,0 0,1 1,0 0,10 -1,0 0,1 -1,0 0,1 -13,0 0,-1 -1,0 0,-1 z"
                  id="path5272"
                  css={css`
                    fill: #ff99ff;
                    fill-opacity: 1;
                    stroke: none;
                  `}
                />
                <path
                  d="m 22,1037.3622 1,0 0,1 -1,0 z m -4,-2 1,0 0,1 -1,0 z m -3,0 1,0 0,1 -1,0 z m -1,4 1,0 0,1 -1,0 z m 1,3 1,0 0,1 -1,0 z m -2,3 1,0 0,1 -1,0 z m -2,-4 1,0 0,1 -1,0 z m -2,2 1,0 0,1 -1,0 z m 1,3 1,0 0,1 -1,0 z m 0,-10 1,0 0,1 -1,0 z"
                  id="rect5030-3-6"
                  css={css`
                    fill: #ff3399;
                    fill-opacity: 1;
                  `}
                />
                <path
                  d="m 8,1049.3622 17,0 0,1 -17,0 z m 0,-17 17,0 0,1 -17,0 z m 18,16 0,-14 1,0 0,14 z m -20,0 0,-14 1,0 0,14 z m 1,0 1,0 0,1 -1,0 z m 0,-15 1,0 0,1 -1,0 z m 18,0 1,0 0,1 -1,0 z m 0,15 1,0 0,1 -1,0 z"
                  id="path5412"
                  css={css`
                    fill: #000000;
                    fill-opacity: 1;
                  `}
                />
              </g>
              <g transform="translate(7,1032.3622)" id="layer3">
                <g id="g5869">
                  <path
                    d="m 11,15 0,-5 1,0 0,-4 2,0 0,1 1,0 0,1 1,0 0,1 4,0 0,-1 1,0 0,-1 1,0 0,-1 2,0 0,4 1,0 0,5 -1,0 0,1 -1,0 0,1 -10,0 0,-1 -1,0 0,-1 z"
                    id="path5777"
                    css={css`
                      fill: #999999;
                      fill-opacity: 1;
                      stroke: none;
                    `}
                  />
                  <path
                    d="m 23,16 1,0 0,1 -1,0 z m 1,-1 1,0 0,1 -1,0 z m 1,-5 1,0 0,5 -1,0 z m -1,-4 1,0 0,4 -1,0 z m -2,-1 2,0 0,1 -2,0 z m -6,3 4,0 0,1 -4,0 z m -4,-3 2,0 0,1 -2,0 z m -1,1 1,0 0,4 -1,0 z m -1,4 1,0 0,5 -1,0 z m 11,-4 1,0 0,1 -1,0 z m -1,1 1,0 0,1 -1,0 z m -5,0 1,0 0,1 -1,0 z m -1,-1 1,0 0,1 -1,0 z m -1,11 10,0 0,1 -10,0 z m -1,-1 1,0 0,1 -1,0 z m -1,-1 1,0 0,1 -1,0 z"
                    id="rect5496-38"
                    css={css`
                      fill: #000000;
                      fill-opacity: 1;
                      stroke: none;
                    `}
                  />
                  <path
                    d="m 12,13 2,0 0,2 -2,0 z"
                    id="rect5779"
                    css={css`
                      fill: #ff9999;
                      fill-opacity: 1;
                      stroke: none;
                    `}
                  />
                  <path
                    d="m 23,13 2,0 0,2 -2,0 z"
                    id="rect5781"
                    css={css`
                      fill: #ff9999;
                      fill-opacity: 1;
                      stroke: none;
                    `}
                  />
                  <path
                    d="m 15,16 0,-2 1,0 0,1 2,0 0,-1 1,0 0,1 2,0 0,-1 1,0 0,2 z"
                    id="path5785"
                    css={css`
                      fill: #000000;
                      fill-opacity: 1;
                      stroke: none;
                    `}
                  />
                  <path
                    d="m 19,12 1,0 0,1 -1,0 z"
                    id="rect5787"
                    css={css`
                      fill: #000000;
                      fill-opacity: 1;
                      stroke: none;
                    `}
                  />
                  <g id="g5857">
                    <path
                      d="m 21,13 0,-1 1,0 0,-1 1,0 0,2 z"
                      id="path5795"
                      css={css`
                        fill: #000000;
                        fill-opacity: 1;
                        stroke: none;
                      `}
                    />
                    <path
                      d="m 21,11 1,0 0,1 -1,0 z"
                      id="path5797"
                      css={css`
                        fill: #ffffff;
                        fill-opacity: 1;
                        stroke: none;
                      `}
                    />
                  </g>
                  <g transform="translate(-7,0)" id="g5861">
                    <path
                      d="m 21,13 0,-1 1,0 0,-1 1,0 0,2 z"
                      id="path5863"
                      css={css`
                        fill: #000000;
                        fill-opacity: 1;
                        stroke: none;
                      `}
                    />
                    <path
                      d="m 21,11 1,0 0,1 -1,0 z"
                      id="path5865"
                      css={css`
                        fill: #ffffff;
                        fill-opacity: 1;
                        stroke: none;
                      `}
                    />
                  </g>
                </g>
              </g>
              <g transform="matrix(-1,0,0,1,35,0)" id="g3986">
                <path
                  d="m 6,50 0,-2 4,0 0,1 -1,0 0,1 z"
                  transform="translate(0,1002.3622)"
                  id="path3988"
                  css={css`
                    fill: #000000;
                    fill-opacity: 1;
                    stroke: none;
                  `}
                />
                <path
                  d="m 7,48 2,0 0,1 -2,0 z"
                  transform="translate(0,1002.3622)"
                  id="path3990"
                  css={css`
                    fill: #999999;
                    fill-opacity: 1;
                    stroke: none;
                  `}
                />
              </g>
              <g id="g3996">
                <path
                  d="m 1,12 -1,0 0,-2 1,0 0,-1 2,0 0,1 1,0 0,1 2,0 0,4 -2,0 0,-1 -2,0 0,-1 -1,0 z"
                  transform="translate(0,1032.3622)"
                  id="path3992"
                  css={css`
                    fill: #000000;
                    stroke: none;
                  `}
                />
                <path
                  d="m 1,12 0,-2 2,0 0,2 3,0 0,2 -2,0 0,-1 -2,0 0,-1 z"
                  transform="translate(0,1032.3622)"
                  id="path3994"
                  css={css`
                    fill: #999999;
                    fill-opacity: 1;
                    stroke: none;
                  `}
                />
              </g>
            </g>
          </g>
        </g>

        <g id="cat-frame3" className="cat-frame">
          <g transform="translate(1,1)" id="g4137">
            <g id="g3806">
              <path
                d="m 6,20 0,-4 4,0 0,3 -1,0 0,1 z"
                id="path3977"
                css={css`
                  fill: #000000;
                  fill-opacity: 1;
                  stroke: none;
                `}
              />
              <path
                d="m 7,17 2,0 0,2 -2,0 z"
                id="rect3979"
                css={css`
                  fill: #999999;
                  fill-opacity: 1;
                  stroke: none;
                `}
              />
            </g>
            <g transform="matrix(-1,0,0,1,21,-1032.3622)" id="g3841">
              <path
                d="m 6,50 0,-2 4,0 0,1 -1,0 0,1 z"
                transform="translate(0,1002.3622)"
                id="path3836"
                css={css`
                  fill: #000000;
                  fill-opacity: 1;
                  stroke: none;
                `}
              />
              <path
                d="m 7,48 2,0 0,1 -2,0 z"
                transform="translate(0,1002.3622)"
                id="rect3838"
                css={css`
                  fill: #999999;
                  fill-opacity: 1;
                  stroke: none;
                `}
              />
            </g>
            <g transform="matrix(-1,0,0,1,31,-1032.3622)" id="g3935">
              <path
                d="m 6,50 0,-2 4,0 0,1 -1,0 0,1 z"
                transform="translate(0,1002.3622)"
                id="path3937"
                css={css`
                  fill: #000000;
                  fill-opacity: 1;
                  stroke: none;
                `}
              />
              <path
                d="m 7,48 2,0 0,1 -2,0 z"
                transform="translate(0,1002.3622)"
                id="path3939"
                css={css`
                  fill: #999999;
                  fill-opacity: 1;
                  stroke: none;
                `}
              />
            </g>
            <g transform="translate(0,-1032.3622)" id="layer1-0">
              <path
                d="m 7,1033.3622 19,0 0,16 -19,0 z"
                id="rect5270"
                css={css`
                  fill: #ffcc99;
                  fill-opacity: 1;
                `}
              />
              <path
                d="m 8,1046.3622 0,-10 1,0 0,-1 1,0 0,-1 13,0 0,1 1,0 0,1 1,0 0,10 -1,0 0,1 -1,0 0,1 -13,0 0,-1 -1,0 0,-1 z"
                id="path5272"
                css={css`
                  fill: #ff99ff;
                  fill-opacity: 1;
                  stroke: none;
                `}
              />
              <path
                d="m 22,1037.3622 1,0 0,1 -1,0 z m -4,-2 1,0 0,1 -1,0 z m -3,0 1,0 0,1 -1,0 z m -1,4 1,0 0,1 -1,0 z m 1,3 1,0 0,1 -1,0 z m -2,3 1,0 0,1 -1,0 z m -2,-4 1,0 0,1 -1,0 z m -2,2 1,0 0,1 -1,0 z m 1,3 1,0 0,1 -1,0 z m 0,-10 1,0 0,1 -1,0 z"
                id="rect5030-3-6"
                css={css`
                  fill: #ff3399;
                  fill-opacity: 1;
                `}
              />
              <path
                d="m 8,1049.3622 17,0 0,1 -17,0 z m 0,-17 17,0 0,1 -17,0 z m 18,16 0,-14 1,0 0,14 z m -20,0 0,-14 1,0 0,14 z m 1,0 1,0 0,1 -1,0 z m 0,-15 1,0 0,1 -1,0 z m 18,0 1,0 0,1 -1,0 z m 0,15 1,0 0,1 -1,0 z"
                id="path5412"
                css={css`
                  fill: #000000;
                  fill-opacity: 1;
                `}
              />
            </g>
            <g transform="translate(7,0)" id="layer3">
              <g id="g5869">
                <path
                  d="m 11,15 0,-5 1,0 0,-4 2,0 0,1 1,0 0,1 1,0 0,1 4,0 0,-1 1,0 0,-1 1,0 0,-1 2,0 0,4 1,0 0,5 -1,0 0,1 -1,0 0,1 -10,0 0,-1 -1,0 0,-1 z"
                  id="path5777"
                  css={css`
                    fill: #999999;
                    fill-opacity: 1;
                    stroke: none;
                  `}
                />
                <path
                  d="m 23,16 1,0 0,1 -1,0 z m 1,-1 1,0 0,1 -1,0 z m 1,-5 1,0 0,5 -1,0 z m -1,-4 1,0 0,4 -1,0 z m -2,-1 2,0 0,1 -2,0 z m -6,3 4,0 0,1 -4,0 z m -4,-3 2,0 0,1 -2,0 z m -1,1 1,0 0,4 -1,0 z m -1,4 1,0 0,5 -1,0 z m 11,-4 1,0 0,1 -1,0 z m -1,1 1,0 0,1 -1,0 z m -5,0 1,0 0,1 -1,0 z m -1,-1 1,0 0,1 -1,0 z m -1,11 10,0 0,1 -10,0 z m -1,-1 1,0 0,1 -1,0 z m -1,-1 1,0 0,1 -1,0 z"
                  id="rect5496-38"
                  css={css`
                    fill: #000000;
                    fill-opacity: 1;
                    stroke: none;
                  `}
                />
                <path
                  d="m 12,13 2,0 0,2 -2,0 z"
                  id="rect5779"
                  css={css`
                    fill: #ff9999;
                    fill-opacity: 1;
                    stroke: none;
                  `}
                />
                <path
                  d="m 23,13 2,0 0,2 -2,0 z"
                  id="rect5781"
                  css={css`
                    fill: #ff9999;
                    fill-opacity: 1;
                    stroke: none;
                  `}
                />
                <path
                  d="m 15,16 0,-2 1,0 0,1 2,0 0,-1 1,0 0,1 2,0 0,-1 1,0 0,2 z"
                  id="path5785"
                  css={css`
                    fill: #000000;
                    fill-opacity: 1;
                    stroke: none;
                  `}
                />
                <path
                  d="m 19,12 1,0 0,1 -1,0 z"
                  id="rect5787"
                  css={css`
                    fill: #000000;
                    fill-opacity: 1;
                    stroke: none;
                  `}
                />
                <g id="g5857">
                  <path
                    d="m 21,13 0,-1 1,0 0,-1 1,0 0,2 z"
                    id="path5795"
                    css={css`
                      fill: #000000;
                      fill-opacity: 1;
                      stroke: none;
                    `}
                  />
                  <path
                    d="m 21,11 1,0 0,1 -1,0 z"
                    id="path5797"
                    css={css`
                      fill: #ffffff;
                      fill-opacity: 1;
                      stroke: none;
                    `}
                  />
                </g>
                <g transform="translate(-7,0)" id="g5861">
                  <path
                    d="m 21,13 0,-1 1,0 0,-1 1,0 0,2 z"
                    id="path5863"
                    css={css`
                      fill: #000000;
                      fill-opacity: 1;
                      stroke: none;
                    `}
                  />
                  <path
                    d="m 21,11 1,0 0,1 -1,0 z"
                    id="path5865"
                    css={css`
                      fill: #ffffff;
                      fill-opacity: 1;
                      stroke: none;
                    `}
                  />
                </g>
              </g>
            </g>
            <g transform="matrix(-1,0,0,1,36,-1032.3622)" id="g3986">
              <path
                d="m 6,50 0,-2 4,0 0,1 -1,0 0,1 z"
                transform="translate(0,1002.3622)"
                id="path3988"
                css={css`
                  fill: #000000;
                  fill-opacity: 1;
                  stroke: none;
                `}
              />
              <path
                d="m 7,48 2,0 0,1 -2,0 z"
                transform="translate(0,1002.3622)"
                id="path3990"
                css={css`
                  fill: #999999;
                  fill-opacity: 1;
                  stroke: none;
                `}
              />
            </g>
            <g id="g4584">
              <path
                d="m 0,14 0,-2 2,0 0,-1 3,0 0,-1 1,0 0,4 -1,0 0,1 -4,0 0,-1 z"
                id="path3812"
                css={css`
                  fill: #000000;
                  stroke: none;
                `}
              />
              <path
                d="m 1,14 0,-1 1,0 0,-1 4,0 0,1 -2,0 0,1 z"
                id="path3814"
                css={css`
                  fill: #999999;
                  stroke: none;
                `}
              />
            </g>
          </g>
        </g>

        <g id="cat-frame4" className="cat-frame">
          <g transform="translate(1,0)" id="g4082">
            <g transform="translate(0,-1031.3622)" id="g3982">
              <path
                d="m 5,20 0,-3 1,0 0,-1 3,0 0,3 -1,0 0,1 z"
                transform="translate(0,1032.3622)"
                id="path3977-4"
                css={css`
                  fill: #000000;
                  fill-opacity: 1;
                  stroke: none;
                `}
              />
              <path
                d="m 6,17 2,0 0,2 -2,0 z"
                transform="translate(0,1032.3622)"
                id="rect3979-3"
                css={css`
                  fill: #999999;
                  fill-opacity: 1;
                  stroke: none;
                `}
              />
            </g>
            <g transform="matrix(-1,0,0,1,20,-1031.3622)" id="g3841">
              <path
                d="m 6,50 0,-2 4,0 0,1 -1,0 0,1 z"
                transform="translate(0,1002.3622)"
                id="path3836"
                css={css`
                  fill: #000000;
                  fill-opacity: 1;
                  stroke: none;
                `}
              />
              <path
                d="m 7,48 2,0 0,1 -2,0 z"
                transform="translate(0,1002.3622)"
                id="rect3838"
                css={css`
                  fill: #999999;
                  fill-opacity: 1;
                  stroke: none;
                `}
              />
            </g>
            <g transform="matrix(-1,0,0,1,30,-1031.3622)" id="g3935">
              <path
                d="m 6,50 0,-2 4,0 0,1 -1,0 0,1 z"
                transform="translate(0,1002.3622)"
                id="path3937"
                css={css`
                  fill: #000000;
                  fill-opacity: 1;
                  stroke: none;
                `}
              />
              <path
                d="m 7,48 2,0 0,1 -2,0 z"
                transform="translate(0,1002.3622)"
                id="path3939"
                css={css`
                  fill: #999999;
                  fill-opacity: 1;
                  stroke: none;
                `}
              />
            </g>
            <g transform="translate(0,-1031.3622)" id="layer1-0">
              <path
                d="m 7,1033.3622 19,0 0,16 -19,0 z"
                id="rect5270"
                css={css`
                  fill: #ffcc99;
                  fill-opacity: 1;
                `}
              />
              <path
                d="m 8,1046.3622 0,-10 1,0 0,-1 1,0 0,-1 13,0 0,1 1,0 0,1 1,0 0,10 -1,0 0,1 -1,0 0,1 -13,0 0,-1 -1,0 0,-1 z"
                id="path5272"
                css={css`
                  fill: #ff99ff;
                  fill-opacity: 1;
                  stroke: none;
                `}
              />
              <path
                d="m 22,1037.3622 1,0 0,1 -1,0 z m -4,-2 1,0 0,1 -1,0 z m -3,0 1,0 0,1 -1,0 z m -1,4 1,0 0,1 -1,0 z m 1,3 1,0 0,1 -1,0 z m -2,3 1,0 0,1 -1,0 z m -2,-4 1,0 0,1 -1,0 z m -2,2 1,0 0,1 -1,0 z m 1,3 1,0 0,1 -1,0 z m 0,-10 1,0 0,1 -1,0 z"
                id="rect5030-3-6"
                css={css`
                  fill: #ff3399;
                  fill-opacity: 1;
                `}
              />
              <path
                d="m 8,1049.3622 17,0 0,1 -17,0 z m 0,-17 17,0 0,1 -17,0 z m 18,16 0,-14 1,0 0,14 z m -20,0 0,-14 1,0 0,14 z m 1,0 1,0 0,1 -1,0 z m 0,-15 1,0 0,1 -1,0 z m 18,0 1,0 0,1 -1,0 z m 0,15 1,0 0,1 -1,0 z"
                id="path5412"
                css={css`
                  fill: #000000;
                  fill-opacity: 1;
                `}
              />
            </g>
            <g transform="translate(7,1)" id="layer3">
              <g id="g5869">
                <path
                  d="m 11,15 0,-5 1,0 0,-4 2,0 0,1 1,0 0,1 1,0 0,1 4,0 0,-1 1,0 0,-1 1,0 0,-1 2,0 0,4 1,0 0,5 -1,0 0,1 -1,0 0,1 -10,0 0,-1 -1,0 0,-1 z"
                  id="path5777"
                  css={css`
                    fill: #999999;
                    fill-opacity: 1;
                    stroke: none;
                  `}
                />
                <path
                  d="m 23,16 1,0 0,1 -1,0 z m 1,-1 1,0 0,1 -1,0 z m 1,-5 1,0 0,5 -1,0 z m -1,-4 1,0 0,4 -1,0 z m -2,-1 2,0 0,1 -2,0 z m -6,3 4,0 0,1 -4,0 z m -4,-3 2,0 0,1 -2,0 z m -1,1 1,0 0,4 -1,0 z m -1,4 1,0 0,5 -1,0 z m 11,-4 1,0 0,1 -1,0 z m -1,1 1,0 0,1 -1,0 z m -5,0 1,0 0,1 -1,0 z m -1,-1 1,0 0,1 -1,0 z m -1,11 10,0 0,1 -10,0 z m -1,-1 1,0 0,1 -1,0 z m -1,-1 1,0 0,1 -1,0 z"
                  id="rect5496-38"
                  css={css`
                    fill: #000000;
                    fill-opacity: 1;
                    stroke: none;
                  `}
                />
                <path
                  d="m 12,13 2,0 0,2 -2,0 z"
                  id="rect5779"
                  css={css`
                    fill: #ff9999;
                    fill-opacity: 1;
                    stroke: none;
                  `}
                />
                <path
                  d="m 23,13 2,0 0,2 -2,0 z"
                  id="rect5781"
                  css={css`
                    fill: #ff9999;
                    fill-opacity: 1;
                    stroke: none;
                  `}
                />
                <path
                  d="m 15,16 0,-2 1,0 0,1 2,0 0,-1 1,0 0,1 2,0 0,-1 1,0 0,2 z"
                  id="path5785"
                  css={css`
                    fill: #000000;
                    fill-opacity: 1;
                    stroke: none;
                  `}
                />
                <path
                  d="m 19,12 1,0 0,1 -1,0 z"
                  id="rect5787"
                  css={css`
                    fill: #000000;
                    fill-opacity: 1;
                    stroke: none;
                  `}
                />
                <g id="g5857">
                  <path
                    d="m 21,13 0,-1 1,0 0,-1 1,0 0,2 z"
                    id="path5795"
                    css={css`
                      fill: #000000;
                      fill-opacity: 1;
                      stroke: none;
                    `}
                  />
                  <path
                    d="m 21,11 1,0 0,1 -1,0 z"
                    id="path5797"
                    css={css`
                      fill: #ffffff;
                      fill-opacity: 1;
                      stroke: none;
                    `}
                  />
                </g>
                <g transform="translate(-7,0)" id="g5861">
                  <path
                    d="m 21,13 0,-1 1,0 0,-1 1,0 0,2 z"
                    id="path5863"
                    css={css`
                      fill: #000000;
                      fill-opacity: 1;
                      stroke: none;
                    `}
                  />
                  <path
                    d="m 21,11 1,0 0,1 -1,0 z"
                    id="path5865"
                    css={css`
                      fill: #ffffff;
                      fill-opacity: 1;
                      stroke: none;
                    `}
                  />
                </g>
              </g>
            </g>
            <g transform="matrix(-1,0,0,1,35,-1031.3622)" id="g3986">
              <path
                d="m 6,50 0,-2 4,0 0,1 -1,0 0,1 z"
                transform="translate(0,1002.3622)"
                id="path3988"
                css={css`
                  fill: #000000;
                  fill-opacity: 1;
                  stroke: none;
                `}
              />
              <path
                d="m 7,48 2,0 0,1 -2,0 z"
                transform="translate(0,1002.3622)"
                id="path3990"
                css={css`
                  fill: #999999;
                  fill-opacity: 1;
                  stroke: none;
                `}
              />
            </g>
            <g transform="matrix(1,0,0,-1,0,1058.3622)" id="g4887">
              <path
                d="m 1,12 -1,0 0,-2 1,0 0,-1 2,0 0,1 1,0 0,1 2,0 0,4 -2,0 0,-1 -2,0 0,-1 -1,0 z"
                transform="translate(0,1032.3622)"
                id="path4889"
                css={css`
                  fill: #000000;
                  stroke: none;
                `}
              />
              <path
                d="m 1,12 0,-2 2,0 0,2 3,0 0,2 -2,0 0,-1 -2,0 0,-1 z"
                transform="translate(0,1032.3622)"
                id="path4891"
                css={css`
                  fill: #999999;
                  fill-opacity: 1;
                  stroke: none;
                `}
              />
            </g>
          </g>
        </g>

        <g id="cat-frame5" className="cat-frame">
          <g transform="translate(1,0)" id="g4025">
            <g transform="translate(0,1)" id="g5089">
              <path
                d="m 3,20 0,-3 1,0 0,-1 1,0 0,-1 3,0 0,3 -1,0 0,1 -1,0 0,1 z"
                id="path5085"
                css={css`
                  fill: #000000;
                  stroke: none;
                `}
              />
              <path
                d="m 4,19 0,-2 1,0 0,-1 2,0 0,2 -1,0 0,1 z"
                id="path5087"
                css={css`
                  fill: #999999;
                  stroke: none;
                `}
              />
            </g>
            <g transform="matrix(-1,0,0,1,20,-1031.3622)" id="g3841">
              <path
                d="m 6,50 0,-2 4,0 0,1 -1,0 0,1 z"
                transform="translate(0,1002.3622)"
                id="path3836"
                css={css`
                  fill: #000000;
                  fill-opacity: 1;
                  stroke: none;
                `}
              />
              <path
                d="m 7,48 2,0 0,1 -2,0 z"
                transform="translate(0,1002.3622)"
                id="rect3838"
                css={css`
                  fill: #999999;
                  fill-opacity: 1;
                  stroke: none;
                `}
              />
            </g>
            <g transform="matrix(-1,0,0,1,28,-1031.3622)" id="g3935">
              <path
                d="m 6,50 0,-2 4,0 0,1 -1,0 0,1 z"
                transform="translate(0,1002.3622)"
                id="path3937"
                css={css`
                  fill: #000000;
                  fill-opacity: 1;
                  stroke: none;
                `}
              />
              <path
                d="m 7,48 2,0 0,1 -2,0 z"
                transform="translate(0,1002.3622)"
                id="path3939"
                css={css`
                  fill: #999999;
                  fill-opacity: 1;
                  stroke: none;
                `}
              />
            </g>
            <g transform="translate(0,-1031.3622)" id="layer1-0">
              <path
                d="m 7,1033.3622 19,0 0,16 -19,0 z"
                id="rect5270"
                css={css`
                  fill: #ffcc99;
                  fill-opacity: 1;
                `}
              />
              <path
                d="m 8,1046.3622 0,-10 1,0 0,-1 1,0 0,-1 13,0 0,1 1,0 0,1 1,0 0,10 -1,0 0,1 -1,0 0,1 -13,0 0,-1 -1,0 0,-1 z"
                id="path5272"
                css={css`
                  fill: #ff99ff;
                  fill-opacity: 1;
                  stroke: none;
                `}
              />
              <path
                d="m 22,1037.3622 1,0 0,1 -1,0 z m -4,-2 1,0 0,1 -1,0 z m -3,0 1,0 0,1 -1,0 z m -1,4 1,0 0,1 -1,0 z m 1,3 1,0 0,1 -1,0 z m -2,3 1,0 0,1 -1,0 z m -2,-4 1,0 0,1 -1,0 z m -2,2 1,0 0,1 -1,0 z m 1,3 1,0 0,1 -1,0 z m 0,-10 1,0 0,1 -1,0 z"
                id="rect5030-3-6"
                css={css`
                  fill: #ff3399;
                  fill-opacity: 1;
                `}
              />
              <path
                d="m 8,1049.3622 17,0 0,1 -17,0 z m 0,-17 17,0 0,1 -17,0 z m 18,16 0,-14 1,0 0,14 z m -20,0 0,-14 1,0 0,14 z m 1,0 1,0 0,1 -1,0 z m 0,-15 1,0 0,1 -1,0 z m 18,0 1,0 0,1 -1,0 z m 0,15 1,0 0,1 -1,0 z"
                id="path5412"
                css={css`
                  fill: #000000;
                  fill-opacity: 1;
                `}
              />
            </g>
            <g transform="translate(6,1)" id="layer3">
              <g id="g5869">
                <path
                  d="m 11,15 0,-5 1,0 0,-4 2,0 0,1 1,0 0,1 1,0 0,1 4,0 0,-1 1,0 0,-1 1,0 0,-1 2,0 0,4 1,0 0,5 -1,0 0,1 -1,0 0,1 -10,0 0,-1 -1,0 0,-1 z"
                  id="path5777"
                  css={css`
                    fill: #999999;
                    fill-opacity: 1;
                    stroke: none;
                  `}
                />
                <path
                  d="m 23,16 1,0 0,1 -1,0 z m 1,-1 1,0 0,1 -1,0 z m 1,-5 1,0 0,5 -1,0 z m -1,-4 1,0 0,4 -1,0 z m -2,-1 2,0 0,1 -2,0 z m -6,3 4,0 0,1 -4,0 z m -4,-3 2,0 0,1 -2,0 z m -1,1 1,0 0,4 -1,0 z m -1,4 1,0 0,5 -1,0 z m 11,-4 1,0 0,1 -1,0 z m -1,1 1,0 0,1 -1,0 z m -5,0 1,0 0,1 -1,0 z m -1,-1 1,0 0,1 -1,0 z m -1,11 10,0 0,1 -10,0 z m -1,-1 1,0 0,1 -1,0 z m -1,-1 1,0 0,1 -1,0 z"
                  id="rect5496-38"
                  css={css`
                    fill: #000000;
                    fill-opacity: 1;
                    stroke: none;
                  `}
                />
                <path
                  d="m 12,13 2,0 0,2 -2,0 z"
                  id="rect5779"
                  css={css`
                    fill: #ff9999;
                    fill-opacity: 1;
                    stroke: none;
                  `}
                />
                <path
                  d="m 23,13 2,0 0,2 -2,0 z"
                  id="rect5781"
                  css={css`
                    fill: #ff9999;
                    fill-opacity: 1;
                    stroke: none;
                  `}
                />
                <path
                  d="m 15,16 0,-2 1,0 0,1 2,0 0,-1 1,0 0,1 2,0 0,-1 1,0 0,2 z"
                  id="path5785"
                  css={css`
                    fill: #000000;
                    fill-opacity: 1;
                    stroke: none;
                  `}
                />
                <path
                  d="m 19,12 1,0 0,1 -1,0 z"
                  id="rect5787"
                  css={css`
                    fill: #000000;
                    fill-opacity: 1;
                    stroke: none;
                  `}
                />
                <g id="g5857">
                  <path
                    d="m 21,13 0,-1 1,0 0,-1 1,0 0,2 z"
                    id="path5795"
                    css={css`
                      fill: #000000;
                      fill-opacity: 1;
                      stroke: none;
                    `}
                  />
                  <path
                    d="m 21,11 1,0 0,1 -1,0 z"
                    id="path5797"
                    css={css`
                      fill: #ffffff;
                      fill-opacity: 1;
                      stroke: none;
                    `}
                  />
                </g>
                <g transform="translate(-7,0)" id="g5861">
                  <path
                    d="m 21,13 0,-1 1,0 0,-1 1,0 0,2 z"
                    id="path5863"
                    css={css`
                      fill: #000000;
                      fill-opacity: 1;
                      stroke: none;
                    `}
                  />
                  <path
                    d="m 21,11 1,0 0,1 -1,0 z"
                    id="path5865"
                    css={css`
                      fill: #ffffff;
                      fill-opacity: 1;
                      stroke: none;
                    `}
                  />
                </g>
              </g>
            </g>
            <g transform="matrix(-1,0,0,1,33,-1031.3622)" id="g3986">
              <path
                d="m 6,50 0,-2 4,0 0,1 -1,0 0,1 z"
                transform="translate(0,1002.3622)"
                id="path3988"
                css={css`
                  fill: #000000;
                  fill-opacity: 1;
                  stroke: none;
                `}
              />
              <path
                d="m 7,48 2,0 0,1 -2,0 z"
                transform="translate(0,1002.3622)"
                id="path3990"
                css={css`
                  fill: #999999;
                  fill-opacity: 1;
                  stroke: none;
                `}
              />
            </g>
            <g transform="translate(0,1)" id="g5097">
              <path
                d="M -1,11 -1,9 0,9 0,8 4,8 4,9 6,9 6,13 4,13 4,12 1,12 1,11 z"
                id="path5093"
                css={css`
                  fill: #000000;
                  stroke: none;
                `}
              />
              <path
                d="m 0,10 0,-1 3,0 0,1 2,0 0,1 1,0 0,1 -1,0 0,-1 -4,0 0,-1 z"
                id="path5095"
                css={css`
                  fill: #999999;
                  stroke: none;
                `}
              />
            </g>
          </g>
        </g>

        <g id="cat-frame6" className="cat-frame">
          <g transform="translate(1,0)" id="g3968">
            <g transform="translate(0,1)" id="g5089">
              <path
                d="m 3,20 0,-3 1,0 0,-1 1,0 0,-1 3,0 0,3 -1,0 0,1 -1,0 0,1 z"
                id="path5085"
                css={css`
                  fill: #000000;
                  stroke: none;
                `}
              />
              <path
                d="m 4,19 0,-2 1,0 0,-1 1,0 0,1 1,0 0,1 -1,0 0,1 z"
                id="path5087"
                css={css`
                  fill: #999999;
                  stroke: none;
                `}
              />
            </g>
            <g transform="matrix(-1,0,0,1,32,-1031.3622)" id="g3982">
              <path
                d="m 5,20 0,-3 1,0 0,-1 3,0 0,3 -1,0 0,1 z"
                transform="translate(0,1032.3622)"
                id="path3977"
                css={css`
                  fill: #000000;
                  fill-opacity: 1;
                  stroke: none;
                `}
              />
              <path
                d="m 6,17 2,0 0,2 -2,0 z"
                transform="translate(0,1032.3622)"
                id="rect3979"
                css={css`
                  fill: #999999;
                  fill-opacity: 1;
                  stroke: none;
                `}
              />
            </g>
            <g transform="translate(3,-1031.3622)" id="g3841">
              <path
                d="m 6,50 0,-2 4,0 0,1 -1,0 0,1 z"
                transform="translate(0,1002.3622)"
                id="path3836"
                css={css`
                  fill: #000000;
                  fill-opacity: 1;
                  stroke: none;
                `}
              />
              <path
                d="m 7,48 2,0 0,1 -2,0 z"
                transform="translate(0,1002.3622)"
                id="rect3838"
                css={css`
                  fill: #999999;
                  fill-opacity: 1;
                  stroke: none;
                `}
              />
            </g>
            <g transform="translate(12,-1031.3622)" id="g3935">
              <path
                d="m 6,50 0,-2 4,0 0,1 -1,0 0,1 z"
                transform="translate(0,1002.3622)"
                id="path3937"
                css={css`
                  fill: #000000;
                  fill-opacity: 1;
                  stroke: none;
                `}
              />
              <path
                d="m 7,48 2,0 0,1 -2,0 z"
                transform="translate(0,1002.3622)"
                id="path3939"
                css={css`
                  fill: #999999;
                  fill-opacity: 1;
                  stroke: none;
                `}
              />
            </g>
            <g transform="translate(0,-1031.3622)" id="layer1-0">
              <path
                d="m 7,1033.3622 19,0 0,16 -19,0 z"
                id="rect5270"
                css={css`
                  fill: #ffcc99;
                  fill-opacity: 1;
                `}
              />
              <path
                d="m 8,1046.3622 0,-10 1,0 0,-1 1,0 0,-1 13,0 0,1 1,0 0,1 1,0 0,10 -1,0 0,1 -1,0 0,1 -13,0 0,-1 -1,0 0,-1 z"
                id="path5272"
                css={css`
                  fill: #ff99ff;
                  fill-opacity: 1;
                  stroke: none;
                `}
              />
              <path
                d="m 22,1037.3622 1,0 0,1 -1,0 z m -4,-2 1,0 0,1 -1,0 z m -3,0 1,0 0,1 -1,0 z m -1,4 1,0 0,1 -1,0 z m 1,3 1,0 0,1 -1,0 z m -2,3 1,0 0,1 -1,0 z m -2,-4 1,0 0,1 -1,0 z m -2,2 1,0 0,1 -1,0 z m 1,3 1,0 0,1 -1,0 z m 0,-10 1,0 0,1 -1,0 z"
                id="rect5030-3-6"
                css={css`
                  fill: #ff3399;
                  fill-opacity: 1;
                `}
              />
              <path
                d="m 8,1049.3622 17,0 0,1 -17,0 z m 0,-17 17,0 0,1 -17,0 z m 18,16 0,-14 1,0 0,14 z m -20,0 0,-14 1,0 0,14 z m 1,0 1,0 0,1 -1,0 z m 0,-15 1,0 0,1 -1,0 z m 18,0 1,0 0,1 -1,0 z m 0,15 1,0 0,1 -1,0 z"
                id="path5412"
                css={css`
                  fill: #000000;
                  fill-opacity: 1;
                `}
              />
            </g>
            <g transform="translate(6,0)" id="layer3">
              <g id="g5869">
                <path
                  d="m 11,15 0,-5 1,0 0,-4 2,0 0,1 1,0 0,1 1,0 0,1 4,0 0,-1 1,0 0,-1 1,0 0,-1 2,0 0,4 1,0 0,5 -1,0 0,1 -1,0 0,1 -10,0 0,-1 -1,0 0,-1 z"
                  id="path5777"
                  css={css`
                    fill: #999999;
                    fill-opacity: 1;
                    stroke: none;
                  `}
                />
                <path
                  d="m 23,16 1,0 0,1 -1,0 z m 1,-1 1,0 0,1 -1,0 z m 1,-5 1,0 0,5 -1,0 z m -1,-4 1,0 0,4 -1,0 z m -2,-1 2,0 0,1 -2,0 z m -6,3 4,0 0,1 -4,0 z m -4,-3 2,0 0,1 -2,0 z m -1,1 1,0 0,4 -1,0 z m -1,4 1,0 0,5 -1,0 z m 11,-4 1,0 0,1 -1,0 z m -1,1 1,0 0,1 -1,0 z m -5,0 1,0 0,1 -1,0 z m -1,-1 1,0 0,1 -1,0 z m -1,11 10,0 0,1 -10,0 z m -1,-1 1,0 0,1 -1,0 z m -1,-1 1,0 0,1 -1,0 z"
                  id="rect5496-38"
                  css={css`
                    fill: #000000;
                    fill-opacity: 1;
                    stroke: none;
                  `}
                />
                <path
                  d="m 12,13 2,0 0,2 -2,0 z"
                  id="rect5779"
                  css={css`
                    fill: #ff9999;
                    fill-opacity: 1;
                    stroke: none;
                  `}
                />
                <path
                  d="m 23,13 2,0 0,2 -2,0 z"
                  id="rect5781"
                  css={css`
                    fill: #ff9999;
                    fill-opacity: 1;
                    stroke: none;
                  `}
                />
                <path
                  d="m 15,16 0,-2 1,0 0,1 2,0 0,-1 1,0 0,1 2,0 0,-1 1,0 0,2 z"
                  id="path5785"
                  css={css`
                    fill: #000000;
                    fill-opacity: 1;
                    stroke: none;
                  `}
                />
                <path
                  d="m 19,12 1,0 0,1 -1,0 z"
                  id="rect5787"
                  css={css`
                    fill: #000000;
                    fill-opacity: 1;
                    stroke: none;
                  `}
                />
                <g id="g5857">
                  <path
                    d="m 21,13 0,-1 1,0 0,-1 1,0 0,2 z"
                    id="path5795"
                    css={css`
                      fill: #000000;
                      fill-opacity: 1;
                      stroke: none;
                    `}
                  />
                  <path
                    d="m 21,11 1,0 0,1 -1,0 z"
                    id="path5797"
                    css={css`
                      fill: #ffffff;
                      fill-opacity: 1;
                      stroke: none;
                    `}
                  />
                </g>
                <g transform="translate(-7,0)" id="g5861">
                  <path
                    d="m 21,13 0,-1 1,0 0,-1 1,0 0,2 z"
                    id="path5863"
                    css={css`
                      fill: #000000;
                      fill-opacity: 1;
                      stroke: none;
                    `}
                  />
                  <path
                    d="m 21,11 1,0 0,1 -1,0 z"
                    id="path5865"
                    css={css`
                      fill: #ffffff;
                      fill-opacity: 1;
                      stroke: none;
                    `}
                  />
                </g>
              </g>
            </g>
            <g transform="translate(0,-1033.3622)" id="g3996">
              <path
                d="m 1,12 -1,0 0,-2 1,0 0,-1 2,0 0,1 1,0 0,1 2,0 0,4 -2,0 0,-1 -2,0 0,-1 -1,0 z"
                transform="translate(0,1032.3622)"
                id="path3992"
                css={css`
                  fill: #000000;
                  stroke: none;
                `}
              />
              <path
                d="m 1,12 0,-2 2,0 0,2 3,0 0,2 -2,0 0,-1 -2,0 0,-1 z"
                transform="translate(0,1032.3622)"
                id="path3994"
                css={css`
                  fill: #999999;
                  fill-opacity: 1;
                  stroke: none;
                `}
              />
            </g>
          </g>
        </g>
      </svg>
    </svg>
  );
};
