/* eslint-disable react-hooks/exhaustive-deps */
"use client";
/** @jsxImportSource @emotion/react */

import { useEffect } from "react";
import { CPSt } from "../style/coverPageSt";
import useDateStore from "../store/useDateStore";
import { getKoreanDate } from "../utils/getKoreanDate";
import useCoverPageStore from "../store/useCoverPageStore";

const CoverPage = () => {
  const { setIsCoverPageGone } = useCoverPageStore();

  const { setLastCheckedDate, setIsDateChanged } = useDateStore();

  const storedDate = localStorage.getItem("lastCheckedDate");
  const today = getKoreanDate();

  useEffect(() => {
    if (storedDate) {
      if (storedDate !== today) {
        setIsDateChanged(true);
        setLastCheckedDate(today);
        localStorage.setItem("lastCheckedDate", today);
      }
    } else {
      setLastCheckedDate(today);
      localStorage.setItem("lastCheckedDate", today);
    }

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
