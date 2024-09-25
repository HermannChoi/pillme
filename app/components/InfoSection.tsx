"use client";
/** @jsxImportSource @emotion/react */

import { useEffect } from "react";
import useDateStore from "../store/useDateStore";
import useFormStore from "../store/useFormStore";
import { getTotalListLength } from "../utils/getToTalListLength";
import { getKoreanDate } from "../utils/getKoreanDate";
import { itemSectionSt } from "../style/itemSectionSt";
import { css } from "@emotion/react";

const InfoSection = () => {
  const { list } = useFormStore();
  const { lastCheckedDate, setLastCheckedDate, setIsDateChanged } =
    useDateStore();

  const today = getKoreanDate();

  useEffect(() => {
    const storedDate = localStorage.getItem("lastCheckedDate");

    if (!storedDate || storedDate !== today) {
      setIsDateChanged(true);
      setLastCheckedDate(today);
      localStorage.setItem("lastCheckedDate", today);
    } else {
      setLastCheckedDate(storedDate);
    }
  }, [today, setIsDateChanged, lastCheckedDate, setLastCheckedDate]);

  const infoSectionSt = [
    itemSectionSt.section,
    css`
      position: sticky;
      top: 3rem;
      background-color: #151515e6;
      backdrop-filter: blur(5px);
      z-index: 1;

      @media (prefers-color-scheme: light) {
        background-color: #f5f5f5;
      }
    `,
  ];

  return (
    <div css={infoSectionSt}>
      <p>{lastCheckedDate?.replaceAll("-", "/")}</p>
      <p>{getTotalListLength(list) + " items has been registered."}</p>
    </div>
  );
};

export default InfoSection;
