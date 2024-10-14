import { css } from "@emotion/react";
import { borderRadius, colors } from "../commonSt";

export const itemCreateSt = {
  form: css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 0.8rem;
    width: 100%;
    padding: 0.5rem;
    border-radius: ${borderRadius.medium};
  `,
  section: css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 0.2rem;
    width: 100%;
    padding: 0.5rem;
    border-radius: ${borderRadius.medium};
  `,
  label: css`
    font-size: 0.9rem;
    text-indent: 0.5rem;
  `,
  input: css`
    width: 100%;
    height: 3rem;
    padding: 0.5rem 1rem;
    border: 1px solid ${colors.grey};
    border-radius: ${borderRadius.medium};
    background-color: transparent;

    &:focus {
      outline: none;
      border: 1px solid ${colors.green};
    }
  `,
  typeContainer: css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
    width: 100%;
    border-radius: ${borderRadius.medium};
  `,
  optionContainer: css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
    width: 100%;
    border-radius: ${borderRadius.medium};
  `,
  option: (option: string | number, whichOption: string | number) => {
    return css`
      height: 3rem;
      padding: 0.5rem 1rem;
      border: 1px solid ${option === whichOption ? colors.green : colors.grey}30;
      border-radius: ${borderRadius.small};
      background-color: ${option === whichOption
        ? `${colors.green}80`
        : "transparent"};
      transition: 0.2s;

      &:active {
        transform: scale(0.95);
        background-color: ${colors.green}60;
      }
    `;
  },
  submitBtn: (isNameFilledOut: boolean) => {
    return css`
      width: 100%;
      height: 3rem;
      border: none;
      border-radius: ${borderRadius.medium};
      margin-top: 2rem;
      background-color: ${colors.green}${isNameFilledOut ? "80" : "40"};
      transition: 0.2s;
    `;
  },
};
