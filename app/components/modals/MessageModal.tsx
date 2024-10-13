"use client";
/** @jsxImportSource @emotion/react */

import useModalStore from "@/app/store/useModalStore";
import useSettingStore from "@/app/store/useSettingStore";
import { modalSt } from "@/app/style/modalSt";

const MessageModal = () => {
  const { whichModal, setWhichModal, message, setMessage } = useModalStore();
  const { isEnglish } = useSettingStore();

  const clickCloseBtn = () => {
    setWhichModal(null);
    setMessage("");
  };

  return (
    <div
      onClick={() => setWhichModal(null)}
      css={modalSt.background(whichModal, "message")}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        css={modalSt.container}
      >
        <div css={modalSt.textContainer}>
          <p css={modalSt.text}>{message}</p>
        </div>
        <div css={modalSt.btnContainer}>
          <button onClick={() => clickCloseBtn()} css={modalSt.whiteColorBtn}>
            {isEnglish ? `CLOSE` : `닫기`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageModal;
