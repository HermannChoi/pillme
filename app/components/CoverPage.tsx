"use client";
/** @jsxImportSource @emotion/react */

import { useEffect } from "react";
import { coverPageSt } from "../style/coverPageSt";
import useCoverPageStore from "../store/useCoverPageStore";

const CoverPage = () => {
  const { isCoverPageGone, setIsCoverPageGone } = useCoverPageStore();

  useEffect(() => {
    setTimeout(() => {
      setIsCoverPageGone(true);
    }, 1200);
  }, [setIsCoverPageGone]);

  return (
    <div css={coverPageSt.container(isCoverPageGone)}>
      <p css={coverPageSt.text}>Take Medicine</p>
    </div>
  );
};

export default CoverPage;
