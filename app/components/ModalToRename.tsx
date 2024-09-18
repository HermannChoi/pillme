"use client";
/** @jsxImportSource @emotion/react */

import { modalSt } from "../style/modalSt";
import useUserNameStore from "../store/useUserNameStore";
import useModalStore from "../store/useModalStore";

const ModalToRename = () => {
  const { userName, setUserName, setIsSubmitted, setIsUserNameInputOn } =
    useUserNameStore();
  const { whichModal, setWhichModal } = useModalStore();

  const clickResetUserName = () => {
    localStorage.removeItem("userName");
    setIsUserNameInputOn(true);
    setIsSubmitted(false);
    setUserName("");
    setWhichModal(null);
  };

  return (
    <div
      onClick={() => setWhichModal(null)}
      css={modalSt.background(whichModal, "renameUsername")}
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

export default ModalToRename;
