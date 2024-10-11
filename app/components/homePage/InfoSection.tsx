"use client";
/** @jsxImportSource @emotion/react */

import useDateStore from "@/app/store/homePage/useDateStore";
import useFormStore from "@/app/store/homePage/useFormStore";
import useSettingStore from "@/app/store/useSettingStore";
import { outlineSt } from "@/app/style/homePage/outlineSt";
import { getAllItems } from "@/app/utils/getAllItems";
import { getKoreanDate } from "@/app/utils/getKoreanDate";
import { useEffect } from "react";

const InfoSection = () => {
  const { list } = useFormStore();
  const { lastCheckedDate, setLastCheckedDate, setIsDateChanged } =
    useDateStore();
  const { isEnglish } = useSettingStore();

  const today = getKoreanDate();

  const numOfItemsToTake = getAllItems(list).filter(
    (item) => !item.isTaken
  ).length;

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

  return (
    <div css={outlineSt.infoSectionSt}>
      <p>{lastCheckedDate?.replaceAll("-", "/")}</p>
      <p>
        {numOfItemsToTake
          ? isEnglish
            ? "There" +
              (numOfItemsToTake > 1 ? " are " : " is ") +
              numOfItemsToTake +
              " items to take today."
            : "오늘 복용할 약이 " + numOfItemsToTake + "개 남았어요."
          : isEnglish
          ? "You have taken all your items today."
          : "오늘 약을 다 복용했어요!"}
      </p>
    </div>
  );
};

export default InfoSection;
