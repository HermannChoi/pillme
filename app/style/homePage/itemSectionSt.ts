import { css } from "@emotion/react";
import {
  borderRadius,
  colors,
  flexCenterX2,
  flexColumnCenterX2,
} from "../commonSt";
import { emptyItemSectionAni } from "../keyframes";
import { itemProps } from "@/app/types/types";

export const itemSectionSt = {
  sectionContainer: [
    flexColumnCenterX2,
    css`
      row-gap: 1rem;
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
      border-radius: ${borderRadius.medium};
      background-color: ${colors.grey}15;

      @media (prefers-color-scheme: light) {
        background-color: #ffffff;
      }
    `,
  ],
  emptyItemSection: [
    flexCenterX2,
    css`
      width: 100%;
      height: 10rem;
      border: none;
      border-radius: ${borderRadius.medium};
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
      ${item.id === selectedItemId
        ? `border: 1px solid #80808060;
        border-bottom: none;`
        : null};
      border-radius: ${item.id === selectedItemId
        ? `10px 10px 0 0`
        : borderRadius.small};
      background-color: ${colors.darkGrey};
      transition: background-color 0.2s, border-radius 0.2s;
      cursor: pointer;
      z-index: 1;

      @media (prefers-color-scheme: light) {
        ${item.id === selectedItemId &&
        `border: 1px solid #eeeeee; border-bottom: none;`};
        background-color: #ffffff;

        &:hover {
          background-color: #eeeeee;
        }
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
      border-radius: ${borderRadius.large};
      background-color: ${isTaken ? `${colors.green}` : `#90909099`};
      cursor: pointer;
    `;
  },
  handle: css`
    width: 24px;
    height: 24px;
    background-color: white;
    border-radius: ${borderRadius.medium};
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
        gap: 0.5rem;
        width: 100%;
        height: 60px;
        padding: 5px 10px;
        ${itemId === selectedItemId
          ? `border: 1px solid #80808060;
          border-top: none;`
          : null};
        border-radius: ${itemId === selectedItemId
          ? `0 0 10px 10px`
          : borderRadius.small};
        margin-top: ${itemId === selectedItemId ? 0 : -60}px;
        background-color: ${colors.darkGrey};
        overflow: hidden;
        opacity: ${itemId === selectedItemId ? 1 : 0};
        transition: 0.2s;

        @media (prefers-color-scheme: light) {
          border: 1px solid #eeeeee;
          border-top: none;
          background-color: transparent;
        }
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
    ${flexCenterX2}
    flex: 1;
    height: 40px;
    padding: 5px;
    border: none;
    border-radius: ${borderRadius.small};
    background-color: ${colors.green}80;
    transition: 0.2s;

    &:hover {
      transform: scale(0.98);
      background-color: ${colors.green}60;
    }
  `,
  leftDayBtn: css`
    flex: 1;
    height: 40px;
    padding: 5px;
    border: none;
    border-radius: ${borderRadius.small};
    background-color: ${colors.grey}30;
    cursor: pointer;

    &:hover {
      transform: scale(0.98);
    }
  `,
  delBtn: [
    flexCenterX2,
    css`
      flex: 1;
      height: 40px;
      padding: 5px;
      border: none;
      border-radius: ${borderRadius.medium};
      background-color: ${colors.red}80;
      transition: 0.2s;

      &:hover {
        transform: scale(0.98);
        background-color: ${colors.red}60;
      }
    `,
  ],
};
