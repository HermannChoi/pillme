"use client";
/** @jsxImportSource @emotion/react */

import useToggleLanguage from "@/app/hooks/useToggleLanguage";
import useDateStore from "@/app/store/homePage/useDateStore";
import useFormStore from "@/app/store/homePage/useFormStore";
import useNavigatorStore from "@/app/store/layout/useNavigatorStore";
import useSettingStore from "@/app/store/useSettingStore";
import { settingPageSt } from "@/app/style/settingPage/settingPageSt";
import { useEffect } from "react";

const CreateItemTitle = () => {
  const { isEnglish, setIsEnglish } = useSettingStore();
  const { isInitialLoad } = useDateStore();
  const { setWhichPage } = useNavigatorStore();
  const { setList } = useFormStore();

  useEffect(() => {
    setWhichPage("Create");
  }, [setWhichPage]);

  useEffect(() => {
    const storedList = localStorage.getItem("medList");
    storedList && setList(JSON.parse(storedList));
  }, [setList]);

  useToggleLanguage(isEnglish, setIsEnglish, isInitialLoad);

  return (
    <h1 css={settingPageSt.title}>{isEnglish ? "Create Item" : "생성"}</h1>
  );
};

export default CreateItemTitle;
