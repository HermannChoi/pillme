import { css } from "@emotion/react";
import { borderRadius, colors, flexCenterX2 } from "../commonSt";

export const itemInformationPageSt = {
  container: css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    padding-bottom: 5.5rem;
    background-color: ${colors.darkSection};

    @media (prefers-color-scheme: light) {
      background-color: #ffffff;
    }
  `,
  header: css`
    position: relative;
    ${flexCenterX2}
    width: 100%;
    height: 4rem;
    border-bottom: 1px solid ${colors.grey}20;
  `,
  backBtn: css`
    position: absolute;
    top: 0;
    left: 0;
    ${flexCenterX2}
    width: 4rem;
    height: 100%;
    padding: 5px 10px;
    border: none;
    background-color: transparent;
    font-size: 1.2rem;
    transition: 0.2s;

    &:active {
      background-color: ${colors.grey}20;
    }
  `,
  outerSection: css`
    flex: 1;
    width: 100%;
    padding: 1rem;
    overflow-y: auto;
  `,
  nameSection: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    min-height: 15%;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${colors.grey}20;
  `,
  name: css`
    font-size: 2rem;
    font-weight: bold;
  `,
  infoSection: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
  `,
  questionBtn: css`
    position: absolute;
    top: 50%;
    left: -25px;
    transform: translateY(-50%);
    ${flexCenterX2}
    width: 20px;
    height: 20px;
    padding: 5px;
    border: 1.5px solid ${colors.grey};
    border-radius: 50%;
    background-color: transparent;
    color: ${colors.grey};
  `,
  showMoreInfoBtn: css`
    width: 100%;
    height: 30px;
    border: 1px solid ${colors.grey}80;
    border-radius: ${borderRadius.small};
    background-color: transparent;
    font-size: 0.9rem;
    transition: 0.2s;

    &:active {
      background-color: ${colors.grey}20;
      transform: scale(0.98);
    }
  `,
  todayText: css`
    position: absolute;
    top: 3%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.8rem;
    font-weight: 600;
    white-space: nowrap;
  `,
  takenDot: css`
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    width: 1.2rem;
    height: 0.5rem;
    border-radius: 1rem;
    background-color: ${colors.green};
  `,
  btnContainer: css`
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    width: 100%;
    height: 6rem;
  `,
  modifyBtn: css`
    ${flexCenterX2}
    flex: 1;
    height: 40px;
    padding: 5px;
    border: none;
    border-radius: ${borderRadius.small};
    background-color: ${colors.green}80;
    transition: 0.2s;

    &:active {
      transform: scale(0.98);
      background-color: ${colors.green}60;
    }
  `,
  delBtn: [
    flexCenterX2,
    css`
      flex: 1;
      height: 40px;
      padding: 5px;
      border: none;
      border-radius: ${borderRadius.small};
      background-color: ${colors.red}80;
      transition: 0.2s;

      &:active {
        transform: scale(0.98);
        background-color: ${colors.red}60;
      }
    `,
  ],
};
