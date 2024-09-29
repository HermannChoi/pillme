import { css } from "@emotion/react";
import { colors, flexCenterX2 } from "./commonSt";

export const navigatorSt = {
  container: css`
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 4rem;
    border-top: 1px solid #808080;
    border-radius: 20px 20px 0 0;
    background-color: #151515;
    z-index: 100;

    @media (prefers-color-scheme: light) {
      background-color: #ffffff;
    }
  `,
  link: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 3.5rem;
    height: 3.5rem;
    padding: 0.5rem;
    border-radius: 10px;
    transition: 0.2s;

    &:hover {
      background-color: ${colors.grey}30;
    }
  `,
  figure: css`
    ${flexCenterX2}
    width: 2rem;
    height: 2rem;
    background-color: transparent;
  `,
  text: css`
    font-size: 0.9rem;
  `,
};
