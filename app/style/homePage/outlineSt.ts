import { css } from "@emotion/react";
import { borderRadius, colors, flexCenterX2 } from "../commonSt";
import { itemSectionSt } from "./itemSectionSt";

export const outlineSt = {
  header: css`
    position: sticky;
    top: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 2.5rem;
    background-color: ${colors.darkBackground};
    z-index: 100;

    @media (prefers-color-scheme: light) {
      background-color: #eeeeee;
    }
  `,
  h1: css`
    color: ${colors.grey}80;
    font-size: 1.8rem;
    font-weight: 700;
    letter-spacing: -1px;
  `,
  pillImg: css`
    filter: grayscale(1);
    width: 2.3rem;
    height: 2.3rem;
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
      height: ${isEasterEggsOn ? `30rem` : `4rem`};
      border-radius: ${borderRadius.medium};
      margin-top: -15px;
      background-color: ${colors.darkSection};
      font-size: 1.2rem;
      font-weight: 500;
      transition: height 1s;

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
      backdrop-filter: blur(5px);
      z-index: 2;

      @media (prefers-color-scheme: light) {
        background-color: #ffffff;
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
