"use client";
/** @jsxImportSource @emotion/react */

import { useEffect } from "react";
import ResetButtons from "./ResetButtons";
import useNavigatorStore from "@/app/store/useNavigatorStore";
import { settingPageSt } from "@/app/style/settingPageSt";
import LanguageToggle from "./LanguageToggle";
import useSettingStore from "@/app/store/useSettingStore";

const MainSection = () => {
  const { setWhichPage } = useNavigatorStore();
  const { isEnglish } = useSettingStore();

  useEffect(() => {
    setWhichPage("Setting");
  }, [setWhichPage]);

  return (
    <>
      <h2 css={settingPageSt.sectionTitle}>
        {isEnglish ? `My Info.` : `내 정보`}
      </h2>
      <section css={settingPageSt.section}>
        <ResetButtons />
      </section>
      <h2 css={settingPageSt.sectionTitle}>
        {isEnglish ? `Preference` : `선호`}
      </h2>
      <section css={settingPageSt.section}>
        <LanguageToggle />
      </section>
    </>
  );
};

export default MainSection;
