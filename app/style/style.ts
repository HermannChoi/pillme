import { css } from "@emotion/react";

const colors = {
  gray: "#808080",
  green: "#3cffd399",
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
    margin-top: 15vw;
    row-gap: 5px;
    width: 100%;
    height: 100vh;
  `,
  h1: css`
    font-size: 4rem;
  `,
  h2: css`
    margin-bottom: 10px;
    font-size: 2rem;
  `,
  main: css`
    ${flexColumnCenterX2}
    row-gap: 5px;
    width: 410px;
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
    background-color: #0a0a0a;
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
    flex: 2;
    height: 40px;
    background-color: ${colors.green};
    border: none;
    border-radius: 5px;
    font-size: 1.5rem;
  `,
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
    height: 50px;
    padding: 5px 10px;
    border: 1px solid ${colors.gray};
    border-radius: 5px;
    transition: 0.2s;

    &:hover {
      border-color: ${colors.green};
      background-color: #3cffd359;
    }
  `,
  toggle: (isTaken: boolean) => {
    return css`
      width: 60px;
      height: 30px;
      background-color: ${isTaken ? `${colors.green}` : `#90909099`};
      display: flex;
      justify-content: ${isTaken ? `flex-end` : `flex-start`};
      align-items: center;
      border-radius: 50px;
      padding: 0 5px;
      cursor: pointer;
    `;
  },
  handle: css`
    width: 25px;
    height: 25px;
    background-color: white;
    border-radius: 40px;

    @media (prefers-color-scheme: light) {
      background-color: #303030;
    }
  `,
  delBtn: css`
    height: 30px;
    padding: 0 5px;
    border: none;
    border-radius: 5px;
    transition: 0.2s;

    &:hover {
      transform: scale(1.1);
      background-color: #ff3939;
    }
  `,
};
