import { css } from "@emotion/react";
import { colors, flexColumnCenterX2 } from "./commonSt";
import { fadeOut, welcomeTextAni } from "./keyframes";

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
      animation: ${isSubmitted && fadeOut} 1s 2s;

      @media (prefers-color-scheme: light) {
        background-color: #ffffff;
      }
    `;
  },
  innerContainer: css`
    ${flexColumnCenterX2}
    row-gap: 0.5rem;
    width: 300px;
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
    border-radius: 5px;
    text-align: center;
    font-size: 1.2rem;
  `,
  button: css`
    padding: 0.5rem;
    border: 1px solid ${colors.grey};
    border-radius: 5px;
    background-color: ${colors.green}90;
    font-size: 1rem;

    &:hover {
      background-color: ${colors.green};
    }
  `,
  welcomeText: css`
    font-size: 1.2rem;
    animation: ${welcomeTextAni} 1s;
  `,
};
