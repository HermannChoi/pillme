"use client";
/** @jsxImportSource @emotion/react */

import { settingPageSt } from "@/app/style/settingPage/settingPageSt";
import useModalStore from "../../store/useModalStore";
import useSettingStore from "../../store/useSettingStore";

const ResetButtons = () => {
  const { setWhichModal } = useModalStore();
  const { isEnglish } = useSettingStore();

  return (
    <>
      <h2 css={settingPageSt.sectionTitle}>
        {isEnglish ? `My Info.` : `내 정보`}
      </h2>
      <section css={settingPageSt.section}>
        <div css={settingPageSt.listContainer}>
          <p>{isEnglish ? `Rename Username` : `이름 재설정`}</p>
          <button
            onClick={() => setWhichModal("resetUsername")}
            css={settingPageSt.resetButtons}
          >
            {isEnglish ? `Rename` : `재설정`}
          </button>
        </div>
        <div css={settingPageSt.listContainer}>
          <p> {isEnglish ? `Reset Items` : `아이템 초기화`}</p>
          <button
            onClick={() => setWhichModal("resetItems")}
            css={settingPageSt.resetButtons}
          >
            {isEnglish ? `Reset` : `초기화`}
          </button>
        </div>
      </section>
    </>
  );
};

export default ResetButtons;
