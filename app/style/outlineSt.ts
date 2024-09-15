import { css } from "@emotion/react";
import { colors, flexCenterX2, flexColumnCenterX2 } from "./commonSt";

export const outlineSt = {
  header: css`
    margin-top: 3rem;
  `,
  h1: css`
    font-size: 3.4rem;
  `,
  h2: css`
    margin-bottom: 10px;
    font-size: 2rem;
  `,
  main: [
    flexColumnCenterX2,
    css`
      row-gap: 5px;
      max-width: 700px;
      width: 90%;
      min-width: 360px;
    `,
  ],
  userNameContainer: css`
    ${flexCenterX2}
    gap: 10px;
    width: 100%;
    height: 30px;
    border-radius: 10px;
    background-color: ${colors.green}bb;
  `,
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
