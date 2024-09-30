"use client";
/** @jsxImportSource @emotion/react */

import useModalStore from "@/app/store/useModalStore";
import useSettingStore from "@/app/store/useSettingStore";
import useUserNameStore from "@/app/store/useUserNameStore";
import { modalSt } from "@/app/style/modalSt";

const ModalToResetUsername = () => {
  const { userName } = useUserNameStore();
  const { whichModal, setWhichModal } = useModalStore();
  const { isEnglish } = useSettingStore();

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
        {isEnglish ? (
          <div css={modalSt.textContainer}>
            <p css={modalSt.text}>
              Do you really want to change your name,{" "}
              <span css={modalSt.itemName}>{userName}</span>?
            </p>
            <p css={modalSt.subText}>* the items will not be deleted.</p>
          </div>
        ) : (
          <div css={modalSt.textContainer}>
            <p css={modalSt.text}>
              정말 당신의 이름, <span css={modalSt.itemName}>{userName}</span>을
              재설정 하시겠습니까?
            </p>
            <p css={modalSt.subText}>* 등록된 아이템들은 삭제되지 않습니다.</p>
          </div>
        )}
        <div css={modalSt.btnContainer}>
          <button onClick={() => setWhichModal(null)} css={modalSt.cancelBtn}>
            {isEnglish ? `CANCEL` : `취소`}
          </button>
          <button onClick={() => clickResetUserName()} css={modalSt.delBtn}>
            {isEnglish ? `CHANGE` : `재설정`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalToResetUsername;
