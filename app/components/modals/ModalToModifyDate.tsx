"use client";
/** @jsxImportSource @emotion/react */

import React from "react";
import useModalStore from "@/app/store/useModalStore";
import { modalSt } from "@/app/style/modalSt";
import useItemStore from "@/app/store/homePage/useItemStore";
import useSettingStore from "@/app/store/useSettingStore";
import useFormStore from "@/app/store/homePage/useFormStore";
import { clickModifyItem } from "@/app/hooks/clickModifyItem";
import { clickModifyOnModal } from "@/app/hooks/clickModifyItemOnModal";

const ModalToModifyDate = () => {
  const { setList } = useFormStore();
  const {
    whichModal,
    setWhichModal,
    itemForModal,
    setItemForModal,
    resetItemForModal,
    setMessage,
  } = useModalStore();
  const { setSelectedItemId } = useItemStore();
  const { isEnglish } = useSettingStore();

  const clickModifyBtn = () => {
    clickModifyOnModal({
      setWhichModal,
      setMessage,
      isEnglish,
      clickModifyItem,
      itemForModal,
      setList,
      resetItemForModal,
      setSelectedItemId,
    });
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemForModal({
      ...itemForModal,
      date: e.target.value,
    });
  };

  return (
    <div
      onClick={() => setWhichModal(null)}
      css={modalSt.background(whichModal, "modifyDate")}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        css={modalSt.container}
      >
        <div css={modalSt.textContainer}>
          <p css={modalSt.text}>
            {isEnglish
              ? `Modify the last time you took`
              : `마지막으로 복용(사용)한 날`}
          </p>
          <input
            type="date"
            css={modalSt.dateInput}
            value={itemForModal.date}
            onChange={(e) => handleDateChange(e)}
          />
        </div>
        <div css={modalSt.btnContainer}>
          <button onClick={() => clickModifyBtn()} css={modalSt.delBtn}>
            {isEnglish ? `Modify` : `수정`}
          </button>
          <button onClick={() => setWhichModal(null)} css={modalSt.cancelBtn}>
            {isEnglish ? `CANCEL` : `취소`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalToModifyDate;
