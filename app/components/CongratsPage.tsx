"use client";
/** @jsxImportSource @emotion/react */

import useItemStore from "../store/useItemStore";
import { congratsPageSt } from "../style/congratsPageSt";

const CongratsPage = () => {
  const { isEverythingTaken } = useItemStore();

  return (
    <div css={congratsPageSt.container(isEverythingTaken)}>
      <div css={congratsPageSt.barContainer}>
        <div css={congratsPageSt.bar} />
      </div>
      <p css={congratsPageSt.text}>Good job!</p>
    </div>
  );
};

export default CongratsPage;