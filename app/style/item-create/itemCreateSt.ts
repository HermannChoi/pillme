import { css } from "@emotion/react";
import {
  borderRadius,
  colors,
  flexCenterX2,
  flexColumnCenterX2,
} from "../commonSt";
import { listItemCommonPart } from "../homePage/itemSectionSt";

export const itemCreateSt = {
  sampleSection: [
    flexColumnCenterX2,
    css`
      position: relative;
      row-gap: 0.3rem;
      position: sticky;
      top: 0.5rem;
      width: 100%;
      padding: 0.3rem 0;
      border-radius: ${borderRadius.medium};
      background-color: ${colors.darkSection};
      box-shadow: 0 10px 10px 0 ${colors.darkBackground};
      overflow: hidden;
      z-index: 1;

      @media (prefers-color-scheme: light) {
        background-color: #ffffff;
        box-shadow: 0 10px 10px 0 ${colors.lightGrey};
      }
    `,
  ],
  sampleTitle: css`
    position: absolute;
    top: 5px;
    left: 5px;
    ${flexCenterX2}
    width: 4.5rem;
    height: 1.5rem;
    border-radius: 15px 5px 5px 5px;
    background-color: ${colors.grey}20;
    color: ${colors.grey};
    font-size: 0.9rem;
  `,
  timeContainer: css`
    display: flex;
    width: 4.5rem;
    height: 1.5rem;
    overflow: hidden;
  `,
  timeInnerContainer: (timePeriod: string) => {
    return css`
      transform: translateX(
        -${timePeriod === "Morning" ? 0 : timePeriod === "Noon" ? 4.5 : timePeriod === "Night" ? 4.5 * 2 : 4.5 * 3}rem
      );
      ${flexCenterX2}
      height: 100%;
      transition: 0.2s;
    `;
  },
  time: css`
    ${flexCenterX2}
    flex-shrink: 0; // flex로 인한 줄어듦 방지
    width: 4.5rem;
    height: 100%;
    font-size: 1.2rem;
    font-weight: 600;
  `,
  figure: (itemType: string) => {
    return css`
      transform: rotate(
        ${itemType === "Oral" ? 0 : itemType === "Topical" ? 360 : 720}deg
      );
      ${flexCenterX2}
      width: 20px;
      height: 20px;
      border-radius: 5px;
      background-color: ${colors.green}30;
      transition: 0.2s;
    `;
  },
  check: (isSubmitted: boolean) => {
    return css`
      ${flexCenterX2}
      width: 100%;
      height: 60px;
      margin-bottom: calc(-60px - 0.3rem);
      font-size: ${isSubmitted ? 3 : 0.1}rem;
      color: ${colors.green};
      opacity: ${isSubmitted ? 1 : 0};
      transition: 0.3s;
    `;
  },
  listItem: (isSubmitted: boolean) => {
    return css`
      ${listItemCommonPart}
      transition: 0.3s;
      ${isSubmitted &&
      `transform: scale(0.5);
        background-color: ${colors.grey}80;
        opacity: 0; `}
    `;
  },
  frequencyContainer: css`
    width: 65px;
    height: 1rem;
    overflow: hidden;
  `,
  frequencyInnerContainer: (frequency: number) => {
    return css`
      transform: translateY(
        -${frequency === 0 ? 0 : frequency === 1 ? 1 : frequency === 6 ? 2 : 3}rem
      );
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      width: 100%;
      transition: 0.2s;
    `;
  },
  frequency: css`
    width: 100%;
    height: 1rem;
    font-size: 0.8rem;
    color: ${colors.grey};
  `,
  form: css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 0.8rem;
    width: 100%;
    padding: 0.5rem;
    border-radius: ${borderRadius.medium};
  `,
  section: css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 0.2rem;
    width: 100%;
    padding: 0.5rem;
    border-radius: ${borderRadius.medium};
  `,
  label: css`
    font-size: 0.9rem;
    text-indent: 0.5rem;
  `,
  input: css`
    width: 100%;
    height: 3rem;
    padding: 0.5rem 1rem;
    border: 1px solid ${colors.grey};
    border-radius: ${borderRadius.medium};
    background-color: transparent;

    &:focus {
      outline: none;
      border: 1px solid ${colors.green};
    }
  `,
  typeContainer: css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
    width: 100%;
    border-radius: ${borderRadius.medium};
  `,
  optionContainer: css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
    width: 100%;
    border-radius: ${borderRadius.medium};
  `,
  option: (option: string | number, whichOption: string | number) => {
    return css`
      height: 3rem;
      padding: 0.5rem 1rem;
      border: 1px solid ${option === whichOption ? colors.green : colors.grey}30;
      border-radius: ${borderRadius.small};
      background-color: ${option === whichOption
        ? `${colors.green}80`
        : "transparent"};
      transition: 0.2s;

      &:active {
        transform: scale(0.95);
        background-color: ${colors.green}60;
      }
    `;
  },
  submitBtn: (isNameFilledOut: boolean, errorMsg: string) => {
    return css`
      width: 100%;
      height: 3rem;
      border: none;
      border-radius: ${borderRadius.medium};
      margin-top: 2rem;
      background-color: ${colors.green}${isNameFilledOut && errorMsg === "" ? "80" : "40"};
      transition: 0.2s;
    `;
  },
};
