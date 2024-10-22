"use client";
/** @jsxImportSource @emotion/react */

import useModalStore from "@/app/store/useModalStore";
import useSettingStore from "@/app/store/useSettingStore";
import { modalSt } from "@/app/style/modalSt";

const ModalToShowLeftDay = () => {
  const { whichModal, setWhichModal, itemForModal } = useModalStore();
  const { isEnglish } = useSettingStore();

  return (
    <div
      onClick={() => setWhichModal(null)}
      css={modalSt.background(whichModal, "showLeftDay")}
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
              ? `Toggle button will be automatically deactivated after ${itemForModal.leftDay} days`
              : `${itemForModal.leftDay} 일 후에 토글 버튼이 자동으로 비활성화 될 예정입니다.`}
          </p>
          <p css={modalSt.subText}>D - 1 : {isEnglish ? "Tomorrow" : "내일"}</p>
        </div>
        <div css={modalSt.btnContainer}>
          <button
            onClick={() => setWhichModal("modifyLeftDay")}
            css={modalSt.redColorBtn}
          >
            {isEnglish ? `MODIFY` : `수정`}
          </button>
          <button
            onClick={() => setWhichModal(null)}
            css={modalSt.whiteColorBtn}
          >
            {isEnglish ? `CLOSE` : `닫기`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalToShowLeftDay;
