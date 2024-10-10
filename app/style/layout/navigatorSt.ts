import { css } from "@emotion/react";
import { borderRadius, colors, flexCenterX2 } from "../commonSt";

export const navigatorSt = {
  container: css`
    position: fixed;
    bottom: -1px;
    left: -1px;
    display: flex;
    justify-content: space-around;
    align-items: start;
    width: calc(100% + 2px);
    height: 5.3rem;
    padding: 0.3rem;
    border: 1px solid #80808020;
    border-radius: 20px 20px 0 0;
    background-color: #151515;
    z-index: 100;

    @media (prefers-color-scheme: light) {
      background-color: #ffffff;
    }
  `,
  linkContainer: css`
    border-radius: ${borderRadius.small};
  `,
  link: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 3.5rem;
    height: 3rem;
    padding: 0 0.5rem;
    transition: 0.2s;
  `,
  figure: css`
    ${flexCenterX2}
    width: 1.8rem;
    height: 1.8rem;
    background-color: transparent;
  `,
  text: (whichPage: string, itemName: string) => {
    return css`
      color: ${whichPage === itemName && colors.green};
      font-size: 0.8rem;
      font-weight: 500;
    `;
  },
};
