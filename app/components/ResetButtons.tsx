"use client";
/** @jsxImportSource @emotion/react */

import useModalStore from "../store/useModalStore";
import useSettingStore from "../store/useSettingStore";
import { outlineSt } from "../style/outlineSt";

const ResetButtons = () => {
  const { setWhichModal } = useModalStore();
  const { isEnglish } = useSettingStore();

  return (
    <div css={outlineSt.resetBtnContainer}>
      <button
        onClick={() => setWhichModal("resetUsername")}
        css={outlineSt.resetUserNameBtn}
      >
        {isEnglish ? `Rename Username` : `이름 재설정`}
      </button>
      <button
        onClick={() => setWhichModal("resetItems")}
        css={outlineSt.resetItemNameBtn}
      >
        {isEnglish ? `Reset Items` : `아이템 초기화`}
      </button>
    </div>
  );
};

export default ResetButtons;
