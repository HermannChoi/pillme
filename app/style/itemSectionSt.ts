import { css } from "@emotion/react";
import { colors, flexCenterX2, flexColumnCenterX2 } from "./commonSt";

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
      border: 1px solid ${colors.gray};
      border-radius: 5px;
    `,
  ],
  emptyItemSection: [
    flexCenterX2,
    css`
      width: 100%;
      height: 80px;
      border: 1px solid ${colors.gray};
      border-radius: 5px;
      background-color: transparent;
      transition: 0.2s;

      &:hover {
        border-color: ${colors.green};
      }
    `,
  ],
  emptyItemSectionText: css`
    color: ${colors.gray};
  `,
  listItem: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    width: 100%;
    height: 60px;
    padding: 5px 10px;
    border: 1px solid ${colors.gray};
    border-radius: 5px;
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
      border-radius: 5px;
      background-color: ${isTaken ? `${colors.green}` : `#90909099`};
      cursor: pointer;
    `;
  },
  handle: css`
    width: 25px;
    height: 25px;
    background-color: white;
    border-radius: 5px;
  `,
  name: css`
    flex: 1;
  `,
  delBtn: [
    flexCenterX2,
    css`
      height: 35px;
      padding: 0 5px;
      border: none;
      border-radius: 5px;
      background-color: ${colors.red};
      font-size: 1rem;
      transition: 0.2s;
    `,
  ],
};
