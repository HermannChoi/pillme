import { css } from "@emotion/react";
import { flexColumnCenterX2 } from "./style";
import { fadeOut } from "./keyframes";

export const CPSt = {
  container: css`
    position: fixed;
    top: 0;
    left: 0;
    ${flexColumnCenterX2}
    width: 100%;
    height: 100vh;
    background-color: #101010;
    animation: ${fadeOut} 1s forwards;
    z-index: 1000;

    @media (prefers-color-scheme: light) {
      background-color: #ffffff;
    }
  `,
};
