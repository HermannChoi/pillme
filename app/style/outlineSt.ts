import { css } from "@emotion/react";
import { colors, flexCenterX2 } from "./commonSt";

export const outlineSt = {
  header: css`
    position: sticky;
    top: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 3rem;
    background-color: #0a0a0ae6;
    backdrop-filter: blur(10px);
    z-index: 100;

    @media (prefers-color-scheme: light) {
      background-color: #ffffffe6;
    }
  `,
  h1: css`
    color: ${colors.grey}80;
    font-size: 1.8rem;
    font-weight: 700;
    letter-spacing: -1px;
  `,
  h2: css`
    margin-bottom: 10px;
    font-size: 1.8rem;
    font-weight: 500;
  `,
  userNameContainer: (isEasterEggsOn: boolean) => {
    return css`
      ${flexCenterX2}
      width: 100%;
      height: 3rem;
      border-radius: 10px;
      margin-top: 0.5rem;
      background-color: ${colors.grey}12;
      ${isEasterEggsOn && `color: green;`}
      font-size: 1.2rem;
      font-weight: 500;
    `;
  },
  resetUserNameBtn: css`
    width: 100%;
    padding: 0.2rem;
    border: none;
    border-radius: 10px;
    background-color: ${colors.red}60;
    color: ${colors.red};
    transition: 0.3s;

    &:hover {
      background-color: ${colors.red}50;
      transform: scale(0.98);
    }
  `,
  footer: [flexCenterX2],
  footerText: css`
    padding: 20px 0;
    color: ${colors.grey}80;
  `,
  Link: css`
    color: ${colors.green};
    text-decoration: underline;
  `,
};
