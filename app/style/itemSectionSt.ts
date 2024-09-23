import { css } from "@emotion/react";
import { colors, flexCenterX2, flexColumnCenterX2 } from "./commonSt";
import { emptyItemSectionAni, toBottom } from "./keyframes";

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
  listItem: (itemId: string, selectedItemId: string | null) => {
    return css`
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      width: 100%;
      height: fit-content;
      min-height: 60px;
      padding: 5px 10px;
      border: none;
      border-radius: ${itemId === selectedItemId ? `10px 10px 0 0` : `10px`};
      background-color: ${itemId === selectedItemId
        ? colors.green
        : colors.grey}12;
      transition: background-color 0.2s, border-radius 0.2s;
      cursor: pointer;
      z-index: 1;

      &:hover {
        border-color: ${colors.green};
        background-color: ${colors.green}10;
      }
    `;
  },
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
  optionContainer: (itemId: string, selectedItemId: string | null) => {
    return [
      css`
        transform-origin: top;
        display: ${itemId === selectedItemId ? `flex` : `none`};
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 50px;
        padding: 5px 10px 5px;
        border-radius: 0 0 10px 10px;
        margin-top: -5px;
        background-color: ${colors.grey}30;
        animation: ${toBottom} 0.2s;
      `,
    ];
  },
  optionBtn: css`
    padding: 5px 10px;
    border: none;
    border-radius: 10px;
    background-color: ${colors.grey}80;
    transition: 0.2s;

    &:hover {
      background-color: ${colors.grey}70;
    }
  `,
};
