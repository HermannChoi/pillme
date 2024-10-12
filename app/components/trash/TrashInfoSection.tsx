/* eslint-disable react-hooks/exhaustive-deps */
"use client";
/** @jsxImportSource @emotion/react */

import useTrashStore from "@/app/store/trash/useTrashStore";
import useSettingStore from "@/app/store/useSettingStore";
import { outlineSt } from "@/app/style/homePage/outlineSt";
import { getKoreanDate } from "@/app/utils/getKoreanDate";
import { useEffect } from "react";

const TrashInfoSection = () => {
  const { trashList, setTrashList } = useTrashStore();
  const { isEnglish } = useSettingStore();

  const today = getKoreanDate();

  // 7일 이내에 삭제된 아이템만 쓰레기통에 남겨두는 로직
  useEffect(() => {
    const updatedTrashList = trashList.filter((item) => {
      if (!item.deletedDate) return false; // Ensure deletedDate is defined
      const deletedDate = new Date(item.deletedDate);
      const diffTime = Math.abs(
        new Date(today).getTime() - deletedDate.getTime()
      );
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays < 7;
    });
    setTrashList(updatedTrashList);
  }, []);

  return (
    <div css={outlineSt.infoSectionSt}>
      <p>
        {isEnglish
          ? "* Items here will be removed after 7 days."
          : "* 삭제된 아이템은 7일 후에 자동으로 사라집니다."}
      </p>
    </div>
  );
};

export default TrashInfoSection;
