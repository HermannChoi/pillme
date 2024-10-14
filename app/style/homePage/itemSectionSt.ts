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
      row-gap: 0.8rem;
      width: 100%;
    `,
  ],
  section: [
    flexColumnCenterX2,
    css`
      row-gap: 5px;
      width: 100%;
      padding: 0.3rem 0;
      border: none;
      border-radius: ${borderRadius.medium};
      background-color: ${colors.darkSection};

      @media (prefers-color-scheme: light) {
        background-color: #ffffff;
      }
    `,
  ],
  h2: css`
    font-size: 1.3rem;
    font-weight: 600;
  `,
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

      &:active {
        transform: scale(0.95);
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
  listItem: (item?: itemProps) => {
    return css`
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.5rem;
      width: 100%;
      height: 60px;
      padding: 5px 10px;
      border: none;
      border-radius: ${borderRadius.medium};
      background-color: ${colors.darkSection};
      transition: background-color 0.2s, border-radius 0.2s;
      cursor: pointer;
      z-index: 1;
      animation: ${item?.date === "0000-00-00" && itemAppearAni} 0.2s
        ease-in-out;
      transition: 0.1s;

      &:active {
        transform: scale(0.98);
        background-color: ${colors.grey}20;
      }

      @media (prefers-color-scheme: light) {
        background-color: #ffffff;
      }
    `;
  },
  toggleContainer: css`
    ${flexCenterX2}
    width: 55px;
    height: 100%;
  `,
  toggle: (isTaken: boolean) => {
    return css`
      display: flex;
      justify-content: ${isTaken ? `flex-end` : `flex-start`};
      align-items: center;
      width: 100%;
      height: 30px;
      padding: 3px;
      border: 2px solid ${isTaken ? colors.grey : colors.red};
      border-radius: ${borderRadius.medium};
      background-color: ${isTaken ? `${colors.green}` : `#90909099`};
      cursor: pointer;
    `;
  },
  handle: css`
    width: 24px;
    height: 24px;
    background-color: #ffffff;
    border-radius: ${borderRadius.medium};

    @media (prefers-color-scheme: dark) {
      background-color: ${colors.darkSection};
    }
  `,
  infoContainer: css`
    flex: 1;
    display: flex;
    flex-direction: column;
    row-gap: 0.2rem;
    overflow: hidden;
  `,
  figure: css`
    ${flexCenterX2}
    width: 20px;
    height: 20px;
    border-radius: 5px;
    background-color: ${colors.green}30;
  `,
  name: css`
    flex: 1;
    height: 20px;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    overflow: hidden;
  `,
  optionInfoContainer: css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.2rem;
  `,
  optionInfoText: css`
    font-size: 0.8rem;
    color: ${colors.grey};
  `,
  modifyBtn: css`
    ${flexCenterX2}
    width: 55px;
    height: 2rem;
    padding: 0.2rem 0.5rem;
    border: none;
    border-radius: ${borderRadius.small};
    margin-top: -0.5rem;
    background-color: ${colors.grey}30;
    color: #dddddd;
    font-size: 0.8rem;
    font-weight: 600;

    @media (prefers-color-scheme: light) {
      color: #404040;
    }

    &:active {
      background-color: ${colors.grey}20;
    }
  `,
};
