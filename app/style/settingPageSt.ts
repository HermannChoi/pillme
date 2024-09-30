import { css } from "@emotion/react";
import { colors } from "./commonSt";

export const settingPageSt = {
  section: css`
    width: 100%;
    padding: 1rem;
    border-radius: 10px;
    background-color: #80808020;
  `,
  listContainer: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  languageToggle: (isEnglish: boolean) => {
    return css`
      position: relative;
      display: flex;
      justify-content: ${isEnglish ? `flex-end` : `flex-start`};
      align-items: center;
      width: 60px;
      height: 30px;
      padding: 3px;
      border: 2px solid ${colors.grey};
      border-radius: 30px;
      background-color: ${isEnglish ? `${colors.blue}` : `${colors.red}`};
      cursor: pointer;

      &:before {
        content: "A";
        position: absolute;
        top: 50%;
        left: 20%;
        transform: translateY(-50%);
        font-weight: bold;
      }

      &:after {
        content: "가";
        position: absolute;
        top: 50%;
        right: 20%;
        transform: translateY(-50%);
        font-weight: bold;
      }
    `;
  },
  languageHandle: css`
    width: 24px;
    height: 24px;
    background-color: white;
    border-radius: 24px;
    z-index: 1;
  `,
};
