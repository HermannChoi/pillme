import { css } from "@emotion/react";
import { colors, flexCenterX2, flexColumnCenterX2 } from "./commonSt";
import { fadeIn } from "./keyframes";

export const modalSt = {
  background: (isModalOn: boolean) => {
    return css`
      position: absolute;
      top: 0;
      left: 0;
      ${flexCenterX2}
      ${!isModalOn && `display: none;`}
      width: 100%;
      height: 100vh;
      background-color: #00000030;
      z-index: 500;
    `;
  },
  container: css`
    ${flexColumnCenterX2}
    row-gap: 0.5em;
    width: 300px;
    padding: 0.5em;
    border-radius: 10px;
    background-color: ${colors.darkBackground};
    box-shadow: 0px 0px 10px gray;
    animation: ${fadeIn} 0.5s;

    @media (prefers-color-scheme: light) {
      background-color: #ffffff;
    }
  `,
  text: css`
    width: 100%;
    text-align: center;
    line-height: 1.5rem;
  `,
  itemName: css`
    padding: 1px 5px;
    border: 1px solid ${colors.green}80;
    border-radius: 10px;
    margin-right: 5px;
    background-color: ${colors.green}60;
  `,
  btnContainer: css`
    ${flexCenterX2}
    gap: 10px;
  `,
  cancelBtn: css`
    padding: 5px 10px;
    border: 1px solid ${colors.grey};
    border-radius: 10px;
    background-color: transparent;
    transition: 0.2s;

    &:hover {
      transform: scale(0.98);
    }
  `,
  delBtn: css`
    padding: 5px 10px;
    border: none;
    border-radius: 10px;
    background-color: ${colors.red};
    transition: 0.2s;

    &:hover {
      transform: scale(0.98);
      background-color: ${colors.red}b6;
    }
  `,
};
