import { css } from "@emotion/react";
import { borderRadius, colors, flexColumnCenterX2 } from "../commonSt";
import { fadeIn, fadeOut, rotate360 } from "../keyframes";

export const userNameInputSt = {
  container: (isUserNameInputOn: boolean, isSubmitted: boolean) => {
    return css`
      position: fixed;
      display: ${isUserNameInputOn ? `flex` : `none`};
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100vh;
      background-color: ${colors.darkBackground};
      z-index: 900;
      animation: ${isSubmitted && fadeOut} 1s 2s forwards;

      @media (prefers-color-scheme: light) {
        background-color: #ffffff;
      }
    `;
  },
  innerContainer: (isSubmitted: boolean) => {
    return css`
      ${flexColumnCenterX2}
      row-gap: 0.5rem;
      width: 300px;
      margin-bottom: 5rem;
      animation ${isSubmitted && fadeOut} 0.3s;
    `;
  },
  pill: css`
    animation: ${rotate360} 5s linear infinite;
  `,
  formContainer: css`
    ${flexColumnCenterX2}
    row-gap: 0.5rem;
    width: 100%;
  `,
  form: css`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
  `,
  input: css`
    height: 2.5rem;
    border: 1px solid ${colors.grey};
    border-radius: ${borderRadius.medium};
    text-align: center;
    font-size: 1.2rem;

    &:focus {
      border-color: ${colors.green};
    }
  `,
  button: css`
    height: 2.5rem;
    padding: 0.5rem;
    border: none;
    border-radius: ${borderRadius.medium};
    background-color: ${colors.green}80;

    &:active {
      background-color: ${colors.green}60;
    }
  `,
  welcomeText: css`
    font-size: 1.2rem;
    animation: ${fadeIn} 1s;
  `,
};
