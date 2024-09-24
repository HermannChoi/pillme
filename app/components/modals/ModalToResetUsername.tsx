"use client";
/** @jsxImportSource @emotion/react */

import useModalStore from "@/app/store/useModalStore";
import useUserNameStore from "@/app/store/useUserNameStore";
import { modalSt } from "@/app/style/modalSt";

const ModalToResetUsername = () => {
  const { userName } = useUserNameStore();
  const { whichModal, setWhichModal } = useModalStore();

  const clickResetUserName = () => {
    localStorage.removeItem("userName");
    window.location.reload();
  };

  return (
    <div
      onClick={() => setWhichModal(null)}
      css={modalSt.background(whichModal, "resetUsername")}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        css={modalSt.container}
      >
        <div css={modalSt.textContainer}>
          <p css={modalSt.text}>
            Do you really want to change your name,{" "}
            <span css={modalSt.itemName}>{userName}</span>?
          </p>
          <p css={modalSt.subText}>* the items will not be deleted.</p>
        </div>
        <div css={modalSt.btnContainer}>
          <button onClick={() => setWhichModal(null)} css={modalSt.cancelBtn}>
            CANCEL
          </button>
          <button onClick={() => clickResetUserName()} css={modalSt.delBtn}>
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalToResetUsername;
