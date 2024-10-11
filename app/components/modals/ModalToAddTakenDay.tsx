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

const ModalToAddTakenDay = () => {
  const { setList } = useFormStore();
  const {
    whichModal,
    setWhichModal,
    itemForModal,
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

  return (
    <div
      onClick={() => setWhichModal(null)}
      css={modalSt.background(whichModal, "modifyTakenDay")}
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
              ? `Do you want to add a taken day on the selected date?`
              : `선택한 날짜에 복용 날을 추가하시겠습니까?`}
          </p>
        </div>
        <div css={modalSt.btnContainer}>
          <button onClick={() => clickModifyBtn()} css={modalSt.delBtn}>
            {isEnglish ? `ADD` : `추가`}
          </button>
          <button onClick={() => setWhichModal(null)} css={modalSt.cancelBtn}>
            {isEnglish ? `CANCEL` : `취소`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalToAddTakenDay;
