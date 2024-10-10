import { css } from "@emotion/react";
import { borderRadius, colors, flexCenterX2 } from "../commonSt";
import { twitching1 } from "../keyframes";

export const createItemFormSt = {
  container: css`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    width: 100%;
  `,
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
      border-top: 1px solid ${colors.grey}30;
      border-bottom: 1px solid ${colors.grey}30;
      background-color: ${colors.green}30;
      transition: 0.2s;
      cursor: pointer;

      &:hover {
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
    // border: 1px solid ${colors.grey}80;
    // border-top: none;
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
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
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
      border: 1px solid ${colors.grey}30;
      border-left: none;
      border-radius: 0 20px 20px 0;
    `,
  ],
  errorMsgContainer: css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 2.5rem;
    border-radius: ${borderRadius.medium};
    background-color: ${colors.darkSection};
    text-indent: 5px;

    @media (prefers-color-scheme: light) {
      background-color: #ffffff;
    }
  `,
  errorMsg: (isEMsgChanged: boolean) => {
    return css`
      color: ${isEMsgChanged ? colors.red : colors.blue};
      animation: ${isEMsgChanged && twitching1} 0.4s;
    `;
  },
};
