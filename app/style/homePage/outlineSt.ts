import { css } from "@emotion/react";
import { colors, flexCenterX2 } from "../commonSt";

export const outlineSt = {
  header: css`
    position: sticky;
    top: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 3rem;
    background-color: transparent;
    backdrop-filter: blur(15px);
    z-index: 100;
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
      background-color: ${colors.grey}15;
      color: ${isEasterEggsOn && colors.blue};
      font-size: 1.2rem;
      font-weight: 500;
    `;
  },
  footer: [
    flexCenterX2,
    css`
      margin-bottom: 5rem;
    `,
  ],
  footerText: css`
    padding: 20px 0;
    color: ${colors.grey}80;
  `,
  Link: css`
    color: ${colors.green};
    text-decoration: underline;
  `,
};
