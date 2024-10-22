"use client";
/** @jsxImportSource @emotion/react */

import restore from "@/app/assets/svg/restore.svg";
import trash from "@/app/assets/svg/trash.svg";
import useFormStore from "@/app/store/homePage/useFormStore";
import useTrashStore from "@/app/store/trash/useTrashStore";
import useSettingStore from "@/app/store/useSettingStore";
import { trashSt } from "@/app/style/trash/trashSt";
import { itemProps, listProps } from "@/app/types/types";
import { getKoreanDate } from "@/app/utils/getKoreanDate";
import Image from "next/image";
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
    setList(() => {
      const parsedStoredList = JSON.parse(
        localStorage.getItem("medList") || "{}"
      );
      const updatedList = {
        ...parsedStoredList,
        [trash.timePeriod]: [
          ...parsedStoredList[trash.timePeriod as keyof listProps],
          { ...trash, deletedDate: "" },
        ],
      };
      // localStorage 업데이트
      localStorage.setItem("medList", JSON.stringify(updatedList));
      return updatedList;
    });
  };

  const clickDeleteBtn = (trash: itemProps) => {
    // 쓰레기 목록에서 항목 제거
    const updatedTrashList = trashList.filter((item) => item.id !== trash.id);
    setTrashList(updatedTrashList);
    // localStorage 업데이트
    localStorage.setItem("trashList", JSON.stringify(updatedTrashList));
  };

  //로컬 스토레지에서 쓰레기 데이터 받아오는 로직
  useEffect(() => {
    const storedList = localStorage.getItem("trashList");

    if (storedList) {
      const parsedStoredList: itemProps[] = JSON.parse(storedList);
      const updatedTrashList = parsedStoredList.filter((item) => {
        if (!item.deletedDate) return false; // Ensure deletedDate is defined
        const deletedDate = new Date(item.deletedDate);
        const diffTime = Math.abs(
          new Date(getKoreanDate()).getTime() - deletedDate.getTime()
        );
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays <= 7;
      });
      localStorage.setItem("trashList", JSON.stringify(updatedTrashList));
      setTrashList(updatedTrashList);
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
              <p css={trashSt.infoText}>
                <span css={trashSt.infoText}>{item.timePeriod}</span>
                <span css={trashSt.infoText}>{" | "}</span>
                <span css={trashSt.infoText}>
                  {isEnglish
                    ? `${8 - diffDays} days left to be deleted`
                    : `${8 - diffDays} 일 후 삭제 예정`}
                </span>
              </p>
              <p css={trashSt.name}>{item.name}</p>
            </div>
            <button
              onClick={() => clickRestoreBtn(item)}
              css={trashSt.restoreBtn}
            >
              <Image src={restore} alt="restore" width={15} height={15} />
            </button>
            <button
              onClick={() => clickDeleteBtn(item)}
              css={trashSt.deleteBtn}
            >
              <Image src={trash} alt="restore" width={15} height={15} />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TrashSection;
