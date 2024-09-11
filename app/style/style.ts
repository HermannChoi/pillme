import { css } from "@emotion/react";
import { twitching1 } from "./keyframes";

const colors = {
  gray: "#808080",
  green: "#00d5a5",
  red: "#ff3939",
};

export const flexColumnCenterX2 = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const flexCenterX2 = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
    row-gap: 5px;
    width: 100%;
  `,
  h1: css`
    font-size: 4rem;

    @media (max-width: 430px) {
      font-size: 3rem;
    }
  `,
  h2: css`
    margin-bottom: 10px;
    font-size: 2rem;
  `,
  main: css`
    ${flexColumnCenterX2}
    row-gap: 5px;
    max-width: 700px;
    width: 50%;
    min-width: 360px;
  `,
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
  timeSlect: css`
    position: relative;
    ${flexCenterX2}
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
  optionContrainer: css`
    position: absolute;
    top: 45px;
    left: 0;
    width: 100%;
    border: 1px solid ${colors.gray};
    border-radius: 5px;
    background-color: #0a0a0a;
    overflow: hidden;
    cursor: pointer;

    @media (prefers-color-scheme: light) {
      background-color: #efefef;
    }
  `,
  option: css`
    width: 100%;
    height: 25px;
    padding-left: 5px;
    &:hover {
      background-color: ${colors.gray}80;
    }
  `,
  addBtn: css`
    ${flexCenterX2}
    flex: 2;
    height: 40px;
    background-color: ${colors.green};
    border: none;
    border-radius: 5px;
    font-size: 1.5rem;
  `,
  messageContainer: css`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 3px;
  `,
  errorMessage: (isEMsgChanged: boolean) => {
    return css`
      color: ${isEMsgChanged && colors.red};
      animation: ${isEMsgChanged && twitching1} 0.4s;
    `;
  },
  pill: () => {
    return css`
      width: 10px;
      height: 10px;
      border: 1px solid ${colors.gray};
      border-radius: 50%;
    `;
  },
  sectionContainer: css`
    ${flexColumnCenterX2}
    row-gap: 5px;
    width: 100%;
  `,
  section: css`
    ${flexColumnCenterX2}
    row-gap: 5px;
    width: 100%;
    padding: 5px;
    border: 1px solid ${colors.gray};
    border-radius: 5px;
    transition: 0.3s;
  `,
  listItem: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    padding: 5px 10px;
    border: 1px solid ${colors.gray};
    border-radius: 5px;
    transition: background-color 0.2s;
    overflow: hidden;

    &:hover {
      border-color: ${colors.green};
      background-color: ${colors.green}10;
    }
  `,
  toggle: (isTaken: boolean) => {
    return css`
      display: flex;
      justify-content: ${isTaken ? `flex-end` : `flex-start`};
      align-items: center;
      width: 60px;
      height: 30px;
      border-radius: 5px;
      padding: 3px;
      background-color: ${isTaken ? `${colors.green}` : `#90909099`};
      cursor: pointer;
    `;
  },
  handle: css`
    width: 25px;
    height: 25px;
    background-color: white;
    border-radius: 5px;

    @media (prefers-color-scheme: light) {
      background-color: #303030;
    }
  `,
  name: css`
    width: 50%;
    font-size: 1.2rem;
  `,
  delBtn: css`
    height: 35px;
    padding: 0 5px;
    border: none;
    border-radius: 5px;
    background-color: ${colors.red}d9;
    font-size: 1rem;
    transition: 0.2s;

    &:hover {
      background-color: ${colors.red};
    }
  `,
  bottomText: css`
    padding: 20px 0;
    color: ${colors.gray}80;
  `,
  Link: css`
    color: ${colors.green};
    text-decoration: underline;
  `,
};
