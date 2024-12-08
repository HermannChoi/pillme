/* eslint-disable react-hooks/exhaustive-deps */
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
  const { setStoredDateState, setIsDateChanged } = useDateStore();
  const { isEnglish } = useSettingStore();

  const today = getKoreanDate();
  const allItems = getAllItems(list);
  const itemsLength = allItems.length;
  const numOfItemsToTake = allItems.filter((item) => !item.isTaken).length;

  //날짜 변경 시 로직
  useEffect(() => {
    const storedDate = localStorage.getItem("lastCheckedDate");

    if (storedDate) {
      setStoredDateState(storedDate);
    }
    if (!storedDate || storedDate !== today) {
      setTimeout(() => {
        setIsDateChanged(true);
        localStorage.setItem("lastCheckedDate", today);
      }, 100);
    }
  }, []);

  return (
    <div css={outlineSt.infoSectionSt(numOfItemsToTake)}>
      <p>
        {itemsLength > 0
          ? numOfItemsToTake > 0
            ? isEnglish
              ? "There" +
                (numOfItemsToTake > 1 ? " are " : " is ") +
                numOfItemsToTake +
                (numOfItemsToTake > 1 ? " items" : " item") +
                " to activate today."
              : "오늘 활성화할 아이템이 " +
                numOfItemsToTake +
                (numOfItemsToTake > 1 ? "개" : "개") +
                " 남았어요."
            : isEnglish
            ? "Every pill for today got recorded!"
            : "오늘 약을 모두 기록했어요!"
          : isEnglish
          ? "WELCOME!"
          : "환영합니다!"}
      </p>
    </div>
  );
};

export default InfoSection;
