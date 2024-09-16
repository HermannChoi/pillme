import { css } from "@emotion/react";
import { colors, flexCenterX2 } from "./commonSt";
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    row-gap: 0.5em;
    width: 300px;
    height: 160px;
    padding: 1rem;
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
    font-size: 1.2rem;
    text-align: center;
    line-height: 1.8rem;
  `,
  itemName: css`
    padding: 1px 5px;
    border: 1px solid ${colors.green}80;
    border-radius: 10px;
    margin-right: 5px;
    background-color: ${colors.green}60;
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
