import { css } from "@emotion/react";
import { borderRadius, colors } from "../commonSt";

export const trashSt = {
  container: css`
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    width: 100%;
  `,
  listContainer: css`
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    height: 4rem;
    padding: 0 1rem;
    border-radius: ${borderRadius.medium};
    background-color: ${colors.darkSection};

    @media (prefers-color-scheme: light) {
      background-color: #ffffff;
    }
  `,
  timePeriod: css`
    width: 20%;
  `,
};
