import { css } from "@emotion/react";
import { colors, flexCenterX2 } from "../commonSt";
import { twitching1 } from "../keyframes";

export const createItemFormSt = {
  container: css`
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    width: 100%;
  `,
  form: css`
    display: flex;
    align-items: end;
    gap: 5px;
    width: 100%;
  `,
  label: css`
    margin-left: 3px;
    color: transparent;
  `,
  inputContainer: css`
    flex: 8;
  `,
  input: css`
    width: 100%;
    height: 50px;
    border: 1px solid ${colors.grey}80;
    border-radius: 10px;
    text-indent: 5px;

    &:focus {
      border-color: ${colors.green};
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
      border-radius: 10px;
      background-color: ${colors.green}30;
      transition: 0.2s;
      cursor: pointer;

      &:hover {
        background-color: ${colors.green}60;
      }

      @media (prefers-color-scheme: light) {
        background-color: #ffffff;
      }
    `,
  ],
  optionContainer: css`
    position: absolute;
    top: 55px;
    left: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    border: none;
    border-radius: 10px;
    background-color: #0a0a0a;
    overflow: hidden;
    cursor: pointer;
    z-index: 10;

    @media (prefers-color-scheme: light) {
      background-color: #efefef;
    }
  `,
  option: css`
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
    padding-left: 5px;
    &:hover {
      background-color: ${colors.green}30;
    }
  `,
  addBtn: [
    flexCenterX2,
    css`
      flex: 2;
      height: 50px;
      background-color: ${colors.green}80;
      border: none;
      border-radius: 10px;
    `,
  ],
  pill: () => {
    return css`
      width: 10px;
      height: 10px;
      border: none;
      border-radius: 50%;
    `;
  },
  errorMsgContainer: css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 30px;
    border-radius: 10px;
    background-color: ${colors.grey}15;
    text-indent: 5px;
  `,
  errorMsg: (isEMsgChanged: boolean) => {
    return css`
      color: ${isEMsgChanged ? colors.red : colors.blue};
      animation: ${isEMsgChanged && twitching1} 0.4s;
    `;
  },
};
