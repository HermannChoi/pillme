import { css } from "@emotion/react";
import { colors, flexCenterX2 } from "./commonSt";
import { fadeIn } from "./keyframes";
import { modalList } from "../types/types";

export const modalSt = {
  background: (whichModal: null | keyof modalList, modal: keyof modalList) => {
    return css`
      position: fixed;
      top: 0;
      left: 0;
      display: ${whichModal === modal ? `flex` : `none`};
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100vh;
      background-color: #00000080;
      z-index: 500;
    `;
  },
  container: css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    row-gap: 1rem;
    width: 300px;
    padding: 1rem;
    border-radius: 10px;
    background-color: #191919;
    animation: ${fadeIn} 0.5s;

    @media (prefers-color-scheme: light) {
      background-color: #ffffff;
    }
  `,
  textContainer: css`
    width: 100%;
    text-align: center;
  `,
  text: css`
    font-size: 1.2rem;
    line-height: 1.8rem;
  `,
  subText: css`
    width: 100%;
    color: ${colors.grey};
  `,
  itemName: css`
    padding: 1px 5px;
    border: 1px solid ${colors.green}80;
    border-radius: 10px;
    margin-right: 5px;
    background-color: ${colors.green}60;
    font-size: 1.2rem;
  `,
  timeInput: css`
    width: 20%;
    height: 40px;
    text-align: center;
    border: none;
    border-radius: 10px;
    background-color: ${colors.grey}30;
    font-size: 1.2rem;
  `,
  btnContainer: css`
    ${flexCenterX2}
    gap: 10px;
    width: 100%;
  `,
  cancelBtn: css`
    flex: 1;
    height: 40px;
    padding: 5px 10px;
    border: 1px solid ${colors.grey};
    border-radius: 10px;
    background-color: transparent;
    font-size: 1.2rem;
    transition: 0.2s;

    &:hover {
      transform: scale(0.99);
    }
  `,
  delBtn: css`
    flex: 1;
    height: 40px;
    padding: 5px 10px;
    border: none;
    border-radius: 10px;
    background-color: ${colors.red};
    font-size: 1.2rem;
    transition: 0.2s;

    &:hover {
      transform: scale(0.99);
      background-color: ${colors.red}b6;
    }
  `,
};
