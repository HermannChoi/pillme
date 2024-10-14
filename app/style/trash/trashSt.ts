import { css } from "@emotion/react";
import { borderRadius, colors, flexCenterX2 } from "../commonSt";

const trashBtn = css`
  ${flexCenterX2}
  width: 40px;
  height: 35px;
  border: none;
  border-radius: ${borderRadius.small};
  transition: 0.2s;
`;

export const trashSt = {
  container: css`
    display: flex;
    flex-direction: column;
    row-gap: 0.8rem;
    width: 100%;
  `,
  listContainer: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    height: 4rem;
    padding: 0 1rem;
    border-radius: ${borderRadius.medium};
    background-color: ${colors.darkSection};

    @media (prefers-color-scheme: light) {
      background-color: #ffffff;
    }
  `,
  listLeftPart: css`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    overflow: hidden;
  `,
  infoText: css`
    font-size: 0.8rem;
    color: ${colors.grey};
  `,
  name: css`
    font-size: 1rem;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
  restoreBtn: css`
    ${trashBtn}
    background-color: ${colors.grey}80;

    &:active {
      background-color: ${colors.grey}60;
      transform: scaleX(0.98);
    }
  `,
  deleteBtn: css`
    ${trashBtn}
    background-color: ${colors.red}80;

    &:active {
      background-color: ${colors.red}60;
      transform: scale(0.98);
    }
  `,
};
