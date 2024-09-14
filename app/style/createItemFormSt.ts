import { css } from "@emotion/react";
import { colors, flexCenterX2 } from "./commonSt";
import { twitching1 } from "./keyframes";

export const createItemFormSt = {
  form: css`
    display: flex;
    align-items: end;
    gap: 5px;
    width: 100%;
    height: 60px;
  `,
  label: css`
    margin-left: 3px;
  `,
  inputContainer: css`
    flex: 8;
  `,
  input: css`
    width: 100%;
    height: 40px;
    border: 1px solid ${colors.gray};
    border-radius: 5px;
    font-size: 1rem;
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
      height: 40px;
      border: 1px solid ${colors.gray};
      border-radius: 5px;
      background-color: ${colors.green}30;
      cursor: pointer;

      &:hover {
        border-color: ${colors.green};
      }

      @media (prefers-color-scheme: light) {
        background-color: #efefef;
      }
    `,
  ],
  optionContainer: css`
    position: absolute;
    top: 45px;
    left: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 1px solid ${colors.gray};
    border-radius: 5px;
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
      background-color: ${colors.gray}80;
    }
  `,
  addBtn: [
    flexCenterX2,
    css`
      flex: 2;
      height: 40px;
      background-color: ${colors.green};
      border: none;
      border-radius: 5px;
      font-size: 1.5rem;
    `,
  ],
  pill: () => {
    return css`
      width: 10px;
      height: 10px;
      border: 1px solid ${colors.gray};
      border-radius: 50%;
    `;
  },
  errorMsgContainer: css`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 3px;
  `,
  errorMsg: (isEMsgChanged: boolean) => {
    return css`
      color: ${isEMsgChanged && colors.red};
      animation: ${isEMsgChanged && twitching1} 0.4s;
    `;
  },
};
