import { css } from "@emotion/react";
import { borderRadius, colors, flexCenterX2 } from "../commonSt";
import { itemSectionSt } from "./itemSectionSt";

export const outlineSt = {
  userNameContainer: (isEasterEggsOn: boolean) => {
    return css`
      ${flexCenterX2}
      width: 100%;
      height: ${isEasterEggsOn ? `30rem` : `3.5rem`};
      border-radius: ${borderRadius.medium};
      margin-top: -15px;
      background-color: ${colors.darkSection};
      font-size: 1.2rem;
      font-weight: 500;
      transition: height 0.5s;

      @media (prefers-color-scheme: light) {
        background-color: #ffffff;
      }
    `;
  },
  infoSectionSt: [
    itemSectionSt.section,
    css`
      position: sticky;
      top: 2.3rem;
      background-color: ${colors.darkSection};
      box-shadow: 0 10px 10px 0 ${colors.darkBackground};
      z-index: 2;

      @media (prefers-color-scheme: light) {
        background-color: #ffffff;
        box-shadow: 0 10px 10px 0 ${colors.lightGrey};
      }
    `,
  ],
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
