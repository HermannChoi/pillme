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

const ModalToModifyLeftDay = () => {
  const { setList } = useFormStore();
  const {
    whichModal,
    setWhichModal,
    itemForModal,
    setItemForModal,
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
      setSelectedItemId,
    });
  };

  const handleChangeLeftDay = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemForModal({
      ...itemForModal,
      leftDay: Number(e.target.value),
    });
  };

  return (
    <div
      onClick={() => setWhichModal(null)}
      css={modalSt.background(whichModal, "modifyLeftDay")}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        css={modalSt.container}
      >
        <div css={modalSt.textContainer}>
          <p css={modalSt.text}>
            {isEnglish ? `Modify the left days` : `남은 일수를 수정해 주세요.`}
          </p>
          <span css={[`font-size: 1.5rem;`]}>D - </span>
          <input
            name="modifyLeftDay"
            type="number"
            css={modalSt.timeInput}
            value={itemForModal.leftDay}
            onChange={(e) => handleChangeLeftDay(e)}
          />
        </div>
        <div css={modalSt.btnContainer}>
          <button onClick={() => clickModifyBtn()} css={modalSt.delBtn}>
            {isEnglish ? `DONE` : `완료`}
          </button>
          <button onClick={() => setWhichModal(null)} css={modalSt.cancelBtn}>
            {isEnglish ? `CANCEL` : `취소`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalToModifyLeftDay;
