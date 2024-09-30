import { css } from "@emotion/react";
import { colors } from "../commonSt";

export const settingPageSt = {
  title: css`
    margin-top: 1rem;
  `,
  sectionTitle: css`
    width: 100%;
    padding-left: 0.5rem;
    margin-bottom: -0.3rem;
  `,
  section: css`
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    width: 100%;
    padding: 0.5rem;
    border-radius: 10px;
    background-color: #80808020;
  `,
  listContainer: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 3rem;
  `,
  resetUserNameBtn: css`
    min-width: 25%;
    height: 35px;
    padding: 0.2rem;
    border: none;
    border-radius: 10px;
    background-color: ${colors.green}80;
    transition: 0.2s;

    &:hover {
      background-color: ${colors.green}60;
      transform: scale(0.98);
    }
  `,
  resetItemBtn: css`
    min-width: 25%;
    height: 35px;
    padding: 0.2rem;
    border: none;
    border-radius: 10px;
    background-color: ${colors.red}80;
    transition: 0.2s;

    &:hover {
      background-color: ${colors.red}60;
      transform: scale(0.98);
    }
  `,
  languageToggle: (isEnglish: boolean) => {
    return css`
      position: relative;
      display: flex;
      justify-content: ${isEnglish ? `flex-end` : `flex-start`};
      align-items: center;
      width: 25%;
      height: 35px;
      padding: 3px;
      border: none;
      border-radius: 20px;
      background-color: ${isEnglish ? `${colors.green}` : `${colors.red}`}80;
      cursor: pointer;

      &:before {
        content: "ENG";
        position: absolute;
        top: 50%;
        left: 10%;
        transform: translateY(-50%);
        ${!isEnglish && `display: none;`}
        font-weight: bold;
      }

      &:after {
        content: "한글";
        position: absolute;
        top: 50%;
        right: 10%;
        transform: translateY(-50%);
        ${isEnglish && `display: none;`}
        font-weight: bold;
      }
    `;
  },
  languageHandle: css`
    width: 40%;
    height: 100%;
    background-color: white;
    border-radius: 20px;
    z-index: 1;
  `,
};
