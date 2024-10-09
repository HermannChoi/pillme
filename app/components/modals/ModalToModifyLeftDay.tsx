"use client";
/** @jsxImportSource @emotion/react */

import React from "react";
import { clickModifyTime } from "@/app/hooks/clickModifyTime";
import useModalStore from "@/app/store/useModalStore";
import { modalSt } from "@/app/style/modalSt";
import useItemStore from "@/app/store/homePage/useItemStore";
import useSettingStore from "@/app/store/useSettingStore";
import useFormStore from "@/app/store/homePage/useFormStore";

const ModalToModifyLeftDay = () => {
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

  const clickModifyOnModal = () => {
    setWhichModal("message");
    setMessage(
      isEnglish ? "It successfully got modified." : "성공적으로 수정되었습니다."
    );
    clickModifyTime(itemForModal, setList);
    resetItemForModal();

    setTimeout(() => {
      setSelectedItemId(null);
    }, 1000);
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
          <button onClick={() => clickModifyOnModal()} css={modalSt.delBtn}>
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
