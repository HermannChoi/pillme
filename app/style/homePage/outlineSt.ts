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
  header: css`
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 2.5rem;
    background-color: #141414;
    z-index: 100;
  `,
  titleContainer: css`
    display: flex;
    height: 100%;
  `,
  pillImg: css`
    filter: grayscale(1);
    width: 2.3rem;
    height: 2.3rem;
  `,
  h1: css`
    color: #80808080;
    font-size: 1.8rem;
    font-weight: 700;
    letter-spacing: -1px;
  `,
  infoSectionSt: (numOfItemsToTake?: number) => {
    return [
      itemSectionSt.section,
      css`
        position: sticky;
        top: 2.3rem;
        height: 3rem;
        background-color: ${numOfItemsToTake
          ? colors.darkSection
          : `${colors.green}aa`};
        font-weight: ${!numOfItemsToTake && `bold`};
        box-shadow: 0 10px 10px 0 ${colors.darkBackground};
        z-index: 2;

        @media (prefers-color-scheme: light) {
          background-color: #ffffff;
          box-shadow: 0 10px 10px 0 ${colors.lightGrey};
        }
      `,
    ];
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
