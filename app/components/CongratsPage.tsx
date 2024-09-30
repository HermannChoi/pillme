"use client";
/** @jsxImportSource @emotion/react */

import useItemStore from "../store/useItemStore";
import useSettingStore from "../store/useSettingStore";
import { congratsPageSt } from "../style/congratsPageSt";

const CongratsPage = () => {
  const { isEverythingTaken } = useItemStore();
  const { isEnglish } = useSettingStore();

  return (
    <div css={congratsPageSt.container(isEverythingTaken)}>
      <div css={congratsPageSt.barContainer}>
        <div css={congratsPageSt.bar} />
      </div>
      <p css={congratsPageSt.text}>
        {isEnglish ? `Good job!` : `잘 하셨어요!`}
      </p>
    </div>
  );
};

export default CongratsPage;
