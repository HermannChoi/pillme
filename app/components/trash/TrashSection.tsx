"use client";
/** @jsxImportSource @emotion/react */

import useFormStore from "@/app/store/homePage/useFormStore";
import useTrashStore from "@/app/store/trash/useTrashStore";
import useSettingStore from "@/app/store/useSettingStore";
import { settingPageSt } from "@/app/style/settingPage/settingPageSt";
import { trashSt } from "@/app/style/trash/trashSt";
import { itemProps, listProps } from "@/app/types/types";
import { useEffect } from "react";

const TrashSection = () => {
  const { trashList, setTrashList } = useTrashStore();
  const { isEnglish } = useSettingStore();
  const { setList } = useFormStore();

  const clickRestoreBtn = (trash: itemProps) => {
    // 쓰레기 목록에서 항목 제거
    const updatedTrashList = trashList.filter((item) => item.id !== trash.id);
    setTrashList(updatedTrashList);
    // localStorage 업데이트
    localStorage.setItem("trashList", JSON.stringify(updatedTrashList));

    // 목록 업데이트
    setList((prev) => {
      const updatedList = {
        ...prev,
        [trash.timePeriod]: [
          ...prev[trash.timePeriod as keyof listProps],
          { ...trash, deletedDate: "" },
        ],
      };
      // localStorage 업데이트
      localStorage.setItem("medList", JSON.stringify(updatedList));
      return updatedList;
    });
  };

  //로컬 스토레지에서 쓰레기 데이터 받아오는 로직
  useEffect(() => {
    const storedList = localStorage.getItem("trashList");
    if (storedList) {
      setTrashList(JSON.parse(storedList));
    }
  }, [setTrashList]);

  return (
    <div css={trashSt.container}>
      {trashList.map((item) => {
        const deletedDate = new Date(item.deletedDate);
        const diffTime = Math.abs(new Date().getTime() - deletedDate.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return (
          <div key={item.id} css={trashSt.listContainer}>
            <div css={trashSt.listLeftPart}>
              <div>
                <span>{item.timePeriod + " | "}</span>
                <span>{`D + ${diffDays}`}</span>
              </div>
              <p css={trashSt.name}>{item.name}</p>
            </div>

            <button
              onClick={() => clickRestoreBtn(item)}
              css={settingPageSt.resetButtons}
            >
              {isEnglish ? `RESTORE` : `복구`}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TrashSection;
