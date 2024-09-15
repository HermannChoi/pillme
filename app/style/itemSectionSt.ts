import { css } from "@emotion/react";
import { colors, flexCenterX2, flexColumnCenterX2 } from "./commonSt";
import { emptyItemSectionAni } from "./keyframes";

export const itemSectionSt = {
  sectionContainer: [
    flexColumnCenterX2,
    css`
      row-gap: 5px;
      width: 100%;
    `,
  ],
  section: [
    flexColumnCenterX2,
    css`
      row-gap: 5px;
      width: 100%;
      padding: 5px;
      border: none;
      border-radius: 10px;
      background-color: ${colors.grey}12;
    `,
  ],
  emptyItemSection: [
    flexCenterX2,
    css`
      width: 100%;
      height: 80px;
      border: none;
      border-radius: 10px;
      background-color: ${colors.grey}12;
      color: ${colors.grey};
      transition: 0.2s;
      animation: ${emptyItemSectionAni} 2s ease-in-out alternate infinite;

      &:hover {
        background-color: ${colors.grey}24;
        color: ${colors.green};
      }
    `,
  ],
  listItem: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    width: 100%;
    height: fit-content;
    min-height: 60px;
    padding: 5px 10px;
    border: none;
    border-radius: 10px;
    background-color: ${colors.grey}12;
    transition: background-color 0.2s;
    overflow: hidden;

    &:hover {
      border-color: ${colors.green};
      background-color: ${colors.green}10;
    }
  `,
  toggle: (isTaken: boolean) => {
    return css`
      display: flex;
      justify-content: ${isTaken ? `flex-end` : `flex-start`};
      align-items: center;
      width: 60px;
      height: 30px;
      padding: 3px;
      border-radius: 10px;
      background-color: ${isTaken ? `${colors.green}` : `#90909099`};
      cursor: pointer;
    `;
  },
  handle: css`
    width: 25px;
    height: 25px;
    background-color: white;
    border-radius: 10px;
  `,
  name: css`
    flex: 1;
  `,
  delBtn: [
    flexCenterX2,
    css`
      width: 30px;
      height: 30px;
      padding: 0 5px;
      border: none;
      border-radius: 10px;
      background-color: ${colors.red}60;
      color: ${colors.red};
      transition: 0.2s;

      &:hover {
        transform: scale(0.98);
        background-color: ${colors.red}50;
      }
    `,
  ],
};
