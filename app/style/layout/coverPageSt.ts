import { css } from "@emotion/react";
import { flexColumnCenterX2 } from "../commonSt";
import { fadeOut } from "../keyframes";

export const coverPageSt = {
  container: (isCoverPageGone: boolean) => {
    return [
      flexColumnCenterX2,
      css`
        position: fixed;
        top: 0;
        left: 0;
        ${isCoverPageGone && `display: none;`}
        width: 100%;
        height: 100vh;
        background-color: #101010;
        animation: ${fadeOut} 0.4s 0.8s forwards;
        z-index: 1000;

        @media (prefers-color-scheme: light) {
          background-color: #ffffff;
        }
      `,
    ];
  },
  pill: css`
    width: 5rem;
    height: 5rem;
  `,
};
