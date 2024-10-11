"use client";
/** @jsxImportSource @emotion/react */

import useNavigatorStore from "@/app/store/layout/useNavigatorStore";
import useSettingStore from "@/app/store/useSettingStore";
import { settingPageSt } from "@/app/style/settingPage/settingPageSt";
import { useEffect } from "react";

const Title = () => {
  const { isEnglish } = useSettingStore();
  const { setWhichPage } = useNavigatorStore();

  useEffect(() => {
    setWhichPage("Setting");
  }, [setWhichPage]);

  return <h1 css={settingPageSt.title}>{isEnglish ? `Setting` : `설정`}</h1>;
};

export default Title;
