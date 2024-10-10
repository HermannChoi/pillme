"use client";
/** @jsxImportSource @emotion/react */

import useDateStore from "@/app/store/homePage/useDateStore";
import useFormStore from "@/app/store/homePage/useFormStore";
import useSettingStore from "@/app/store/useSettingStore";
import { colors } from "@/app/style/commonSt";
import { itemSectionSt } from "@/app/style/homePage/itemSectionSt";
import { getKoreanDate } from "@/app/utils/getKoreanDate";
import { getTotalListLength } from "@/app/utils/getToTalListLength";
import { css } from "@emotion/react";
import { useEffect } from "react";

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
      background-color: ${colors.darkSection};
      backdrop-filter: blur(5px);
      z-index: 2;

      @media (prefers-color-scheme: light) {
        background-color: #ffffff;
      }
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
          : "현재 " + getTotalListLength(list) + "개의 아이템이 있어요."}
      </p>
    </div>
  );
};

export default InfoSection;
