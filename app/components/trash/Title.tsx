"use client";
/** @jsxImportSource @emotion/react */

import useToggleLanguage from "@/app/hooks/useToggleLanguage";
import useDateStore from "@/app/store/homePage/useDateStore";
import useNavigatorStore from "@/app/store/layout/useNavigatorStore";
import useSettingStore from "@/app/store/useSettingStore";
import { settingPageSt } from "@/app/style/settingPage/settingPageSt";
import { useEffect } from "react";

const Title = () => {
  const { isEnglish, setIsEnglish } = useSettingStore();
  const { setWhichPage } = useNavigatorStore();
  const { isInitialLoad } = useDateStore();

  useToggleLanguage(isEnglish, setIsEnglish, isInitialLoad);

  useEffect(() => {
    setWhichPage("Setting");
  }, [setWhichPage]);

  return <h1 css={settingPageSt.title}>{isEnglish ? `Trash` : `휴지통`}</h1>;
};

export default Title;
