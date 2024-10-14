import { css } from "@emotion/react";
import { borderRadius, colors, flexCenterX2 } from "../commonSt";

export const settingPageSt = {
  title: css`
    ${flexCenterX2}
    width: 100%;
    height: 2rem;
  `,
  sectionOutline: css`
    display: flex;
    flex-direction: column;
    row-gap: 0.3rem;
    width: 100%;
    height: auto;
  `,
  sectionTitle: css`
    width: 100%;
    padding-left: 0.5rem;
    font-weight: 600;
  `,
  section: css`
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    width: 100%;
    padding: 0.5rem 1rem;
    border-radius: ${borderRadius.medium};
    background-color: ${colors.darkSection};

    @media (prefers-color-scheme: light) {
      background-color: #ffffff;
    }
  `,
  listContainer: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 3rem;
  `,
  resetButtons: css`
    width: 25%;
    height: 35px;
    border: none;
    border-radius: ${borderRadius.small};
    background-color: ${colors.grey}40;
    transition: 0.2s;

    &:active {
      background-color: ${colors.grey}60;
      transform: scaleX(0.98);
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
      border-radius: ${borderRadius.medium};
      background-color: ${isEnglish ? `${colors.green}` : `${colors.grey}`}40;
      color: ${colors.grey};
      font-size: 0.9rem;
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
    border-radius: ${borderRadius.medium};
    z-index: 1;
  `,
  trashButton: css`
    ${flexCenterX2}
    width: 25%;
    height: 35px;
    border: none;
    border-radius: ${borderRadius.small};
    background-color: ${colors.red}60;
    transition: 0.2s;

    &:active {
      background-color: ${colors.red}40;
      transform: scaleX(0.98);
    }
  `,
  trashIcon: css`
    width: 20px;
    height: 20px;
    fill: ${colors.red};
  `,
};
