"use client";
/** @jsxImportSource @emotion/react */

import { useEffect } from "react";
import useDateStore from "../store/useDateStore";
import useFormStore from "../store/useFormStore";
import { getTotalListLength } from "../utils/getToTalListLength";
import { getKoreanDate } from "../utils/getKoreanDate";
import { itemSectionSt } from "../style/itemSectionSt";
import { css } from "@emotion/react";
import { colors } from "../style/commonSt";
import useSettingStore from "../store/useSettingStore";

const InfoSection = () => {
  const { list } = useFormStore();
  const { lastCheckedDate, setLastCheckedDate, setIsDateChanged } =
    useDateStore();
  const { isEnglish } = useSettingStore();

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
      background-color: ${colors.grey}20;
      backdrop-filter: blur(5px);
      z-index: 1;
    `,
  ];

  return (
    <div css={infoSectionSt}>
      <p>{lastCheckedDate?.replaceAll("-", "/")}</p>
      <p>
        {isEnglish
          ? getTotalListLength(list) +
            (getTotalListLength(list) > 1 ? " items have" : " item has") +
            " been registered."
          : getTotalListLength(list) + "개의 아이템이 등록되었습니다."}
      </p>
    </div>
  );
};

export default InfoSection;
