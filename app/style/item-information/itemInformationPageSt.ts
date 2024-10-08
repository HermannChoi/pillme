import { css } from "@emotion/react";
import { colors, flexCenterX2 } from "../commonSt";
import { fadeInFromBottom } from "../keyframes";

export const itemInformationPageSt = {
  optionContainer: css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    padding-bottom: 5.5rem;
    background-color: ${colors.darkSection};
    animation: ${fadeInFromBottom} 1s;

    @media (prefers-color-scheme: light) {
      background-color: #f0f0f0;
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

    &:hover {
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
    height: 15%;
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
  todayText: css`
    position: absolute;
    top: -5%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.8rem;
    font-weight: 600;
    white-space: nowrap;
  `,
  takenDot: css`
    position: absolute;
    bottom: 0%;
    left: 50%;
    transform: translateX(-50%);
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: ${colors.green};
  `,
  btnContainer: css`
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    width: 100%;
    height: 4rem;
  `,
};
