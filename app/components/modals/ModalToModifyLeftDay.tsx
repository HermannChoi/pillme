"use client";
/** @jsxImportSource @emotion/react */

import { clickModifyItem } from "@/app/hooks/clickModifyItem";
import { clickModifyOnModal } from "@/app/hooks/clickModifyItemOnModal";
import useFormStore from "@/app/store/homePage/useFormStore";
import useModalStore from "@/app/store/useModalStore";
import useSettingStore from "@/app/store/useSettingStore";
import { modalSt } from "@/app/style/modalSt";
import React from "react";

const ModalToModifyLeftDay = () => {
  const { setList } = useFormStore();
  const {
    whichModal,
    setWhichModal,
    itemForModal,
    setItemForModal,
    setMessage,
  } = useModalStore();
  const { isEnglish } = useSettingStore();

  const clickModifyBtn = () => {
    clickModifyOnModal({
      setWhichModal,
      setMessage,
      isEnglish,
      clickModifyItem,
      itemForModal,
      setList,
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
          <button onClick={() => clickModifyBtn()} css={modalSt.redColorBtn}>
            {isEnglish ? `DONE` : `완료`}
          </button>
          <button
            onClick={() => setWhichModal(null)}
            css={modalSt.whiteColorBtn}
          >
            {isEnglish ? `CANCEL` : `취소`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalToModifyLeftDay;
