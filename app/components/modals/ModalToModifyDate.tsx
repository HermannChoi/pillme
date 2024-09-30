"use client";
/** @jsxImportSource @emotion/react */

import React from "react";
import { clickModifyTime } from "@/app/hooks/clickModifyTime";
import useFormStore from "@/app/store/useFormStore";
import useModalStore from "@/app/store/useModalStore";
import { modalSt } from "@/app/style/modalSt";
import useItemStore from "@/app/store/useItemStore";
import useSettingStore from "@/app/store/useSettingStore";

const ModalToModifyDate = () => {
  const { setList } = useFormStore();
  const {
    whichModal,
    setWhichModal,
    itemForModal,
    setItemForModal,
    resetItemForModal,
  } = useModalStore();
  const { setSelectedItemId } = useItemStore();
  const { isEnglish } = useSettingStore();

  const clickModifyOnModal = () => {
    setWhichModal(null);
    clickModifyTime(itemForModal, setList);
    resetItemForModal();
    setSelectedItemId(null);
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
          <button onClick={() => setWhichModal(null)} css={modalSt.cancelBtn}>
            {isEnglish ? `CANCEL` : `취소`}
          </button>
          <button onClick={() => clickModifyOnModal()} css={modalSt.delBtn}>
            {isEnglish ? `Modify` : `수정`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalToModifyDate;
