"use client";
/** @jsxImportSource @emotion/react */

import useModalStore from "../store/useModalStore";
import useSettingStore from "../store/useSettingStore";
import { outlineSt } from "../style/outlineSt";
import { settingPageSt } from "../style/settingPageSt";

const ResetButtons = () => {
  const { setWhichModal } = useModalStore();
  const { isEnglish } = useSettingStore();

  return (
    <>
      <div css={settingPageSt.listContainer}>
        <p>{isEnglish ? `Rename Username` : `이름 재설정`}</p>
        <button
          onClick={() => setWhichModal("resetUsername")}
          css={settingPageSt.resetUserNameBtn}
        >
          {isEnglish ? `Rename` : `재설정`}
        </button>
      </div>
      <div css={settingPageSt.listContainer}>
        <p> {isEnglish ? `Reset Items` : `아이템 초기화`}</p>
        <button
          onClick={() => setWhichModal("resetUsername")}
          css={settingPageSt.resetItemBtn}
        >
          {isEnglish ? `Reset` : `초기화`}
        </button>
      </div>
    </>
  );
};

export default ResetButtons;
