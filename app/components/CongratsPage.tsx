"use client";
/** @jsxImportSource @emotion/react */

import useItemStore from "../store/useItemStore";
import { congratsPageSt } from "../style/congratsPageSt";

const CongratsPage = () => {
  const { isEverythingTaken } = useItemStore();

  return (
    <div css={congratsPageSt.container(isEverythingTaken)}>
      <div css={congratsPageSt.bar} />
      <p css={congratsPageSt.text}>Well done!</p>
    </div>
  );
};

export default CongratsPage;
