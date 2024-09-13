/* eslint-disable react-hooks/exhaustive-deps */
"use client";
/** @jsxImportSource @emotion/react */

import { useEffect } from "react";
import { CPSt } from "../style/coverPageSt";
import useCoverPageStore from "../store/useCoverPageStore";

const CoverPage = () => {
  const { setIsCoverPageGone } = useCoverPageStore();

  useEffect(() => {
    setTimeout(() => {
      setIsCoverPageGone(true);
    }, 1000);
  }, []);

  return (
    <header css={CPSt.container}>
      <h1>Take Medicine</h1>
    </header>
  );
};

export default CoverPage;
