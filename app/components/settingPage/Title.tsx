"use client";
/** @jsxImportSource @emotion/react */

import useSettingStore from "@/app/store/useSettingStore";

const Title = () => {
  const { isEnglish } = useSettingStore();

  return <h1>{isEnglish ? `Setting` : `설정`}</h1>;
};

export default Title;
