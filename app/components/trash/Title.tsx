"use client";
/** @jsxImportSource @emotion/react */

import useSettingStore from "@/app/store/useSettingStore";
import { settingPageSt } from "@/app/style/settingPage/settingPageSt";
import { useEffect } from "react";
import useNavigatorStore from "@/app/store/layout/useNavigatorStore";

const Title = () => {
  const { isEnglish } = useSettingStore();
  const { setWhichPage } = useNavigatorStore();

  useEffect(() => {
    setWhichPage("Setting");
  }, [setWhichPage]);

  return <h1 css={settingPageSt.title}>{isEnglish ? `Trash` : `휴지통`}</h1>;
};

export default Title;
