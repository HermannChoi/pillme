import { css } from "@emotion/react";
import { fadeIn } from "../keyframes";
import { colors } from "../commonSt";

export const optionModalSt = {
  optionContainer: css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-width: 360px;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-color: #191919;
    // animation: ${fadeIn} 0.5s;
    overflow: hidden;
    @media (prefers-color-scheme: light) {
      background-color: #f0f0f0;
    }
  `,
  optionCloseBtn: css`
    height: 100px;
    padding: 5px 10px 40px;
    border: none;
    border-top: 1px solid ${colors.grey}20;
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
    align-items: center;
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
    white-space: nowrap;
    font-size: 0.8rem;
    font-weight: 600;
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translateX(-50%);
  `,
  takenDot: css`
    background-color: ${colors.green};
    border-radius: 50%;
    width: 0.5rem;
    height: 0.5rem;
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
  `,
};
