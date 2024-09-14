import { css } from "@emotion/react";
import { fadeOut } from "./keyframes";
import { flexColumnCenterX2 } from "./commonSt";

export const coverPageSt = {
  container: [
    flexColumnCenterX2,
    css`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background-color: #101010;
      animation: ${fadeOut} 1s forwards;
      z-index: 1000;

      @media (prefers-color-scheme: light) {
        background-color: #ffffff;
      }
    `,
  ],
};
