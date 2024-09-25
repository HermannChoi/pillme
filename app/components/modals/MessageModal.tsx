"use client";
/** @jsxImportSource @emotion/react */

import useModalStore from "@/app/store/useModalStore";
import { modalSt } from "@/app/style/modalSt";

const MessageModal = () => {
  const { whichModal, setWhichModal, message, setMessage } = useModalStore();

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
          <button onClick={() => clickCloseBtn()} css={modalSt.cancelBtn}>
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageModal;
