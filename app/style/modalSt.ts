import { css } from "@emotion/react";
import { borderRadius, colors } from "./commonSt";
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
    border-radius: ${borderRadius.medium};
    background-color: ${colors.darkSection};
    animation: ${fadeIn} 0.5s;
    overflow: hidden;
    @media (prefers-color-scheme: light) {
      background-color: #f0f0f0;
    }
  `,
  textContainer: css`
    width: 100%;
    padding: 1rem;
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
    border-radius: ${borderRadius.small};
    margin-right: 5px;
    background-color: ${colors.green}60;
    font-size: 1.2rem;
    white-space: nowrap;
  `,
  timeInput: css`
    width: 20%;
    height: 40px;
    text-align: center;
    border: none;
    border-radius: ${borderRadius.small};
    background-color: ${colors.grey}30;
    font-size: 1.2rem;
  `,
  dateInput: css`
    width: 65%;
    height: 40px;
    text-align: center;
    border: 1px solid grey;
    border-radius: ${borderRadius.small};
    background-color: ${colors.grey}30;
    font-size: 1.2rem;
  `,
  btnContainer: css`
    display: flex;
    flex-direction: column;
    width: 100%;
  `,
  cancelBtn: css`
    height: 50px;
    padding: 5px 10px;
    border: none;
    border-top: 1px solid ${colors.grey}20;
    background-color: transparent;
    font-size: 1.2rem;
    transition: 0.2s;

    &:hover {
      background-color: ${colors.grey}20;
    }
  `,
  delBtn: css`
    height: 50px;
    padding: 5px 10px;
    border: none;
    border-top: 1px solid ${colors.grey}20;
    background-color: transparent;
    color: ${colors.red};
    font-size: 1.2rem;
    transition: 0.2s;

    &:hover {
      background-color: ${colors.red}20;
    }
  `,
  frequencyBtnContainer: css`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    width: 100%;
    padding: 0 1rem;
  `,
  frequencyBtn: (
    itemFrequency: number,
    selectedFrequency: number,
    whichFrequency: number | null
  ) => {
    return css`
      height: 3rem;
      border: ${itemFrequency === selectedFrequency
        ? `1px solid ${colors.green}`
        : `none`};
      border-radius: ${borderRadius.small};
      background-color: ${colors.green}${whichFrequency === selectedFrequency ? "bb" : 40};
      transition: 0.2s;
    `;
  },
};
