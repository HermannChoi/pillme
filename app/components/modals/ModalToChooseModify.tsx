"use client";
/** @jsxImportSource @emotion/react */

import useModalStore from "@/app/store/useModalStore";
import useSettingStore from "@/app/store/useSettingStore";
import { modalSt } from "@/app/style/modalSt";

const ModalToChooseModify = () => {
  const { whichModal, setWhichModal } = useModalStore();
  const { isEnglish } = useSettingStore();

  return (
    <div
      onClick={() => setWhichModal(null)}
      css={modalSt.background(whichModal, "chooseModify")}
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
              ? "Which one do you wanna modify?"
              : "어느 부분을 수정하시겠어요?"}
          </p>
        </div>
        <div css={modalSt.btnContainer}>
          <button
            onClick={() => setWhichModal("modifyDate")}
            css={modalSt.cancelBtn}
          >
            {isEnglish ? `DATE` : `날짜`}
          </button>
          <button
            onClick={() => setWhichModal("modifyTime")}
            css={modalSt.cancelBtn}
          >
            {isEnglish ? `TIME` : `시간`}
          </button>
          <button onClick={() => setWhichModal(null)} css={modalSt.cancelBtn}>
            {isEnglish ? `CANCEL` : `취소`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalToChooseModify;
