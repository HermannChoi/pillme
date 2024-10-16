import { css } from "@emotion/react";
import { colors, flexColumnCenterX2 } from "../commonSt";
import {
  checkAni,
  fadeIn,
  progressBarAni,
  routeMessageAni,
} from "../keyframes";

const animationTime = 6;

export const routeSt = {
  outline: css`
    ${flexColumnCenterX2}
    width: 100%;
    height: calc(100vh - 85px);
  `,
  infoContainer: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 5rem;
    height: 5rem;
    border: 1px solid ${colors.green};
    border-radius: 1rem;
    background-color: ${colors.darkSection};
    animation: ${routeMessageAni} ${animationTime}s ease-in-out forwards;
    overflow: hidden;
    z-index: 1;

    @media (prefers-color-scheme: light) {
      background-color: #ffffff;
    }
  `,
  progressBarContainer: css`
    flex-shrink: 0;
    width: 100%;
    height: 2rem;
  `,
  progressBar: css`
    width: 0%;
    height: 100%;
    background-color: ${colors.green};
    transition: width 0.5s ease-in-out;
    animation: ${progressBarAni} ${animationTime}s ease-in-out forwards;
  `,
  check: css`
    font-size: 3rem;
    color: ${colors.green};
    animation: ${checkAni} ${animationTime}s ease-in-out forwards;
  `,
  messageContainer: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 1rem;
    opacity: 0;
    animation: ${fadeIn} 1s ease-in-out forwards;
  `,
  message: css`
    font-size: 1.2rem;
    font-weight: 600;
    color: ${colors.green};
    text-align: center;
  `,
  message2: css`
    width: 100%;
    white-space: pre-wrap;
    font-size: 1rem;
    text-align: center;
  `,
  personalInfoContainer: css`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    width: 100%;
    padding: 1rem 0;
    border-top: 1px solid ${colors.grey}60;
    border-bottom: 1px solid ${colors.grey}60;
  `,
  personalInfoSection: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  `,
};
