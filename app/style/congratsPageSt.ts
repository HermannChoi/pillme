import { css } from "@emotion/react";
import { colors, flexColumnCenterX2 } from "./commonSt";
import { congratsBarAni, fadeInAndOut, scaleZeroTo100 } from "./keyframes";

export const congratsPageSt = {
  container: (isEverythingTaken: boolean) => {
    return css`
      position: absolute;
      top: 0;
      left: 0;
      ${flexColumnCenterX2}
      row-gap: 1.5rem;
      ${!isEverythingTaken && `display: none;`}
      width: 100vw;
      height: 100vh;
      background-color: ${colors.darkBackground};
      animation: ${fadeInAndOut} 3s forwards;
      z-index: 500;

      @media (prefers-color-scheme: light) {
        background-color: #f5f5f5;
      }
    `;
  },
  bar: css`
    width: 300px;
    height: 10px;
    border-radius: 5px;
    background-color: ${colors.green};
    opacity: 0;
    transform-origin: left;
    animation: ${congratsBarAni} 0.5s 0.2s forwards linear;
  `,
  text: css`
    font-size: 2rem;
    font-weight: bold;
    text-shadow: 0 0 20px #ffffff;
    opacity: 0;
    animation: ${scaleZeroTo100} 0.5s 0.8s forwards;
  `,
};
