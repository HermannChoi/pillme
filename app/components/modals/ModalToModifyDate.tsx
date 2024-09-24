"use client";
/** @jsxImportSource @emotion/react */

import React from "react";
import { clickModifyTime } from "@/app/hooks/clickModifyTime";
import useFormStore from "@/app/store/useFormStore";
import useModalStore from "@/app/store/useModalStore";
import { modalSt } from "@/app/style/modalSt";
import useItemStore from "@/app/store/useItemStore";

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
          <p css={modalSt.text}>Modify the last time you took</p>
          <input
            type="date"
            css={modalSt.dateInput}
            value={itemForModal.date}
            onChange={(e) => handleDateChange(e)}
          />
        </div>
        <div css={modalSt.btnContainer}>
          <button onClick={() => setWhichModal(null)} css={modalSt.cancelBtn}>
            CANCEL
          </button>
          <button onClick={() => clickModifyOnModal()} css={modalSt.delBtn}>
            Modify
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalToModifyDate;