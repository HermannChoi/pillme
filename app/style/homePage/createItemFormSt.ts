import { css } from "@emotion/react";
import { colors, flexCenterX2 } from "../commonSt";
import { twitching1 } from "../keyframes";

export const createItemFormSt = {
  container: (areArraysEqual: boolean) => {
    return css`
      display: ${areArraysEqual ? "none" : "flex"};
      flex-direction: column;
      width: 100%;
    `;
  },
  form: css`
    display: flex;
    align-items: end;
    width: 100%;
  `,
  inputContainer: css`
    flex: 8;
  `,
  input: css`
    width: 100%;
    height: 50px;
    border: 1px solid ${colors.grey}30;
    border-right: none;
    border-radius: 20px 0 0 20px;
    background-color: ${colors.darkSection};
    text-indent: 15px;

    &:focus {
      border-right: 1px solid ${colors.green};
      border-color: ${colors.green};
    }

    @media (prefers-color-scheme: light) {
      background-color: #ffffff;
    }
  `,
  timeSelectContainer: css`
    flex: 3;
    bottom: 0;
  `,
  timeSelect: [
    flexCenterX2,
    css`
      position: relative;
      width: 100%;
      height: 50px;
      border: none;
      border-top: 1px solid ${colors.grey}30;
      border-bottom: 1px solid ${colors.grey}30;
      background-color: ${colors.green}30;
      transition: 0.2s;
      cursor: pointer;

      &:active {
        background-color: ${colors.green}60;
      }
    `,
  ],
  optionContainer: css`
    position: absolute;
    top: 49px;
    left: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 0 0 20px 20px;
    background-color: #0a0a0a;
    overflow: hidden;
    cursor: pointer;
    z-index: 10;

    @media (prefers-color-scheme: light) {
      background-color: #efefef;
    }
  `,
  option: css`
    flex: 1;
    ${flexCenterX2}
    width: 100%;
    height: 40px;
    padding-left: 5px;
    border: none;

    background-color: transparent;

    &:active,
    &:focus {
      background-color: ${colors.green}30;
    }
  `,
  addBtn: [
    flexCenterX2,
    css`
      flex: 2;
      height: 50px;
      background-color: ${colors.green}80;
      border: 1px solid ${colors.grey}30;
      border-left: none;
      border-radius: 0 20px 20px 0;
    `,
  ],
  errorMsgContainer: css`
    display: flex;
    align-items: center;
    width: 100%;
    height: 1rem;
    text-indent: 10px;
    transition: 0.1s;

    @media (prefers-color-scheme: light) {
      background-color: #ffffff;
    }
  `,
  errorMsg: (isEMsgChanged: boolean) => {
    return css`
      font-size: 0.9rem;
      color: ${isEMsgChanged ? colors.red : colors.blue};
      animation: ${isEMsgChanged && twitching1} 0.4s;
    `;
  },
};
