"use client";
/** @jsxImportSource @emotion/react */

import useSaveItemList from "@/app/hooks/useSaveItemList";
import useSaveTrashList from "@/app/hooks/useSaveTrashList";
import useDateStore from "@/app/store/homePage/useDateStore";
import useFormStore from "@/app/store/homePage/useFormStore";
import useTrashStore from "@/app/store/trash/useTrashStore";
import useSettingStore from "@/app/store/useSettingStore";
import { settingPageSt } from "@/app/style/settingPage/settingPageSt";
import { trashSt } from "@/app/style/trash/trashSt";
import { itemProps, listProps } from "@/app/types/types";
import { useEffect } from "react";

const TrashSection = () => {
  const { trashList, setTrashList, isTrashInitialLoad, setIsTrashInitialLoad } =
    useTrashStore();
  const { isEnglish } = useSettingStore();
  const { isInitialLoad, isDateChanged } = useDateStore();
  const { list, setList } = useFormStore();

  const clickRestoreBtn = (trash: itemProps) => {
    setTrashList(trashList.filter((item) => item.id !== trash.id));
    setList((prev) => {
      return {
        ...prev,
        [trash.timePeriod]: [
          ...prev[trash.timePeriod as keyof listProps],
          { ...trash, deletedDate: "" },
        ],
      };
    });
  };

  useSaveTrashList(trashList, isTrashInitialLoad);
  useSaveItemList(list, isInitialLoad, isDateChanged);

  useEffect(() => {
    setIsTrashInitialLoad(true);

    setTimeout(() => {
      setIsTrashInitialLoad(false);
    }, 1000);
  }, [setIsTrashInitialLoad]);

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
