import { itemProps } from "@/app/types/types";
import { css } from "@emotion/react";
import {
  borderRadius,
  colors,
  flexCenterX2,
  flexColumnCenterX2,
} from "../commonSt";
import { emptyItemSectionAni, itemAppearAni } from "../keyframes";

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
      padding: 0.5rem;
      border: none;
      border-radius: ${borderRadius.medium};
      background-color: ${colors.darkSection};

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
      background-color: ${colors.darkSection};
      color: ${colors.grey};
      transition: 0.2s;
      animation: ${emptyItemSectionAni} 2s ease-in-out alternate infinite;

      &:hover {
        background-color: ${colors.grey}20;
        color: ${colors.green};
      }

      @media (prefers-color-scheme: light) {
        background-color: #ffffff;
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
        ? `20px 20px 0 0`
        : borderRadius.medium};
      background-color: ${colors.darkSection};
      transition: background-color 0.2s, border-radius 0.2s;
      cursor: pointer;
      z-index: 1;
      animation: ${item.date === "0000-00-00" && itemAppearAni} 0.2s ease-in-out;

      &:active {
        background-color: ${colors.grey}30;
      }

      @media (prefers-color-scheme: light) {
        ${item.id === selectedItemId &&
        `border: 1px solid #eeeeee; border-bottom: none;`};
        background-color: #ffffff;
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
  infoContainer: css`
    flex: 1;
    display: flex;
    flex-direction: column;
    row-gap: 0.2rem;
  `,
  name: css`
    flex: 1;
  `,
  optionInfoContainer: css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.3rem;
  `,
  optionInfoText: css`
    font-size: 0.8rem;
    color: ${colors.grey};
  `,
  leftDayContainer: css`
    ${flexCenterX2}
    width: 61px;
    height: fit-content;
    padding: 0.2rem 0.5rem;
    border-radius: ${borderRadius.small};
    background-color: ${colors.green}30;
    font-size: 0.8rem;
    color: ${colors.grey};
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
          ? `0 0 20px 20px`
          : borderRadius.medium};
        margin-top: ${itemId === selectedItemId ? 0 : -60}px;
        background-color: ${colors.darkSection};
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
    height: 40px;
    padding: 5px 1rem;
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
