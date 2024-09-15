import { css } from "@emotion/react";
import { colors, flexCenterX2, flexColumnCenterX2 } from "./commonSt";

export const outlineSt = {
  header: css`
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    width: 100%;
    height: 2.5rem;
    margin-top: 0.5rem;
    background-color: #0a0a0ae6;
    backdrop-filter: blur(10px);
    z-index: 100;
  `,
  h1: css`
    color: ${colors.grey};
    font-size: 1.5rem;
  `,
  h2: css`
    margin-bottom: 10px;
    font-size: 2rem;
  `,
  main: [
    flexColumnCenterX2,
    css`
      row-gap: 5px;
      width: 100%;
    `,
  ],
  userNameContainer: css`
    ${flexCenterX2}
    width: 100%;
    height: 30px;
    border-radius: 10px;
    margin-top: 0.5rem;
    background-color: ${colors.grey}20;
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
