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
    background-color: #000;
    animation: ${fadeOut} 1s forwards;
  `,
};
