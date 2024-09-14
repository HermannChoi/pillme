import { css } from "@emotion/react";
import { colors, flexCenterX2, flexColumnCenterX2 } from "./commonSt";

export const outlineSt = {
  container: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
    row-gap: 5px;
    width: 100%;
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
  footer: [flexCenterX2, css``],
  footerText: css`
    padding: 20px 0;
    color: ${colors.gray}80;
  `,
  Link: css`
    color: ${colors.green};
    text-decoration: underline;
  `,
};
