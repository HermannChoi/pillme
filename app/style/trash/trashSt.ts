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
    gap: 0.5rem;
    width: 100%;
    height: 4.5rem;
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
  `,
  name: css`
    font-size: 1.2rem;
    font-weight: 600;
  `,
  timePeriod: css``,
};
