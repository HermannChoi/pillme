import { css } from "@emotion/react";
import { colors, flexCenterX2, flexColumnCenterX2 } from "../commonSt";
import { emptyItemSectionAni } from "../keyframes";
import { itemProps } from "@/app/types/types";

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
      background-color: ${colors.grey}15;
    `,
  ],
  emptyItemSection: [
    flexCenterX2,
    css`
      width: 100%;
      height: 10rem;
      border: none;
      border-radius: 10px;
      background-color: ${colors.grey}15;
      color: ${colors.grey};
      transition: 0.2s;
      animation: ${emptyItemSectionAni} 2s ease-in-out alternate infinite;

      &:hover {
        background-color: ${colors.grey}20;
        color: ${colors.green};
      }
    `,
  ],
  listItemContainer: css`
    width: 100%;
  `,
  listItem: (item: itemProps, selectedItemId: string | null) => {
    return css`
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      width: 100%;
      height: 60px;
      padding: 5px 10px;
      border: none;
      border-radius: ${item.id === selectedItemId ? `10px 10px 0 0` : `10px`};
      background-color: ${colors.darkGrey};
      transition: background-color 0.2s, border-radius 0.2s;
      cursor: pointer;
      z-index: 1;

      @media (prefers-color-scheme: light) {
        background-color: ${colors.lightGrey};
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
      border: 2px solid ${isTaken ? colors.grey : colors.red};
      border-radius: 30px;
      background-color: ${isTaken ? `${colors.green}` : `#90909099`};
      cursor: pointer;
    `;
  },
  handle: css`
    width: 24px;
    height: 24px;
    background-color: white;
    border-radius: 24px;
  `,
  name: css`
    flex: 1;
  `,
  optionContainer: (itemId: string, selectedItemId: string | null) => {
    return [
      css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 60px;
        padding: 5px 10px 5px;
        border-radius: ${itemId === selectedItemId ? `0 0 10px 10px` : `10px`};
        margin-top: ${itemId === selectedItemId ? 0 : -60}px;
        background-color: ${colors.grey}30;
        overflow: hidden;
        opacity: ${itemId === selectedItemId ? 1 : 0};
        transition: 0.2s;
      `,
    ];
  },
  optionBtnContainer: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    width: fit-content;
    height: 100%;
  `,
  optionBtn: css`
    height: 40px;
    padding: 5px 10px;
    border: none;
    border-radius: 10px;
    background-color: ${colors.green}80;
    transition: 0.2s;

    &:hover {
      transform: scale(0.98);
      background-color: ${colors.green}60;
    }
  `,
  toggle2: (isTaken: boolean) => {
    return css`
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: fit-content;
      height: 40px;
      padding: 5px 10px;
      border-radius: 10px;
      background-color: ${isTaken ? `${colors.green}50` : `#90909050`};
      cursor: pointer;
    `;
  },
  delBtn: [
    flexCenterX2,
    css`
      height: 40px;
      padding: 0 5px;
      border: none;
      border-radius: 10px;
      background-color: ${colors.red}60;
      transition: 0.2s;

      &:hover {
        transform: scale(0.98);
        background-color: ${colors.red}50;
      }
    `,
  ],
};
