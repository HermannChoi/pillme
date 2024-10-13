"use client";
/** @jsxImportSource @emotion/react */

import useUserNameStore from "@/app/store/homePage/useUserNameStore";
import useModalStore from "@/app/store/useModalStore";
import useSettingStore from "@/app/store/useSettingStore";
import { modalSt } from "@/app/style/modalSt";
import { useRouter } from "next/navigation";

const ModalToResetUsername = () => {
  const router = useRouter();

  const { userName } = useUserNameStore();
  const { whichModal, setWhichModal } = useModalStore();
  const { isEnglish } = useSettingStore();

  const clickResetUserName = () => {
    localStorage.removeItem("userName");
    router.push("/");
    setTimeout(() => {
      window.location.reload();
    }, 100);
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
              정말 당신의 이름, <span css={modalSt.itemName}>{userName}</span>
              을(를) 재설정 하시겠습니까?
            </p>
            <p css={modalSt.subText}>* 등록된 아이템들은 삭제되지 않습니다.</p>
          </div>
        )}
        <div css={modalSt.btnContainer}>
          <button
            onClick={() => clickResetUserName()}
            css={modalSt.redColorBtn}
          >
            {isEnglish ? `CHANGE` : `재설정`}
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

export default ModalToResetUsername;
