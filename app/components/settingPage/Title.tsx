"use client";
/** @jsxImportSource @emotion/react */

import useSettingStore from "@/app/store/useSettingStore";
import { settingPageSt } from "@/app/style/settingPage/settingPageSt";

const Title = () => {
  const { isEnglish } = useSettingStore();

  return <h1 css={settingPageSt.title}>{isEnglish ? `Setting` : `설정`}</h1>;
};

export default Title;
