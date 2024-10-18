"use client";
/** @jsxImportSource @emotion/react */

import useToggleLanguage from "@/app/hooks/useToggleLanguage";
import useDateStore from "@/app/store/homePage/useDateStore";
import useFormStore from "@/app/store/homePage/useFormStore";
import useUserNameStore from "@/app/store/homePage/useUserNameStore";
import useNavigatorStore from "@/app/store/layout/useNavigatorStore";
import useSettingStore from "@/app/store/useSettingStore";
import { settingPageSt } from "@/app/style/settingPage/settingPageSt";
import { useEffect } from "react";

const CreateItemTitle = () => {
  const { isEnglish, setIsEnglish } = useSettingStore();
  const { isInitialLoad } = useDateStore();
  const { setWhichPage } = useNavigatorStore();
  const { setFirstDate } = useUserNameStore();
  const { setList } = useFormStore();

  useEffect(() => {
    setWhichPage("Create");
  }, [setWhichPage]);

  useEffect(() => {
    const storedFirstDate = localStorage.getItem("firstDate");
    if (!storedFirstDate) {
      const date = new Date();
      date.setHours(date.getHours() + 9);
      setFirstDate(date.toISOString().split("T")[0]);
      localStorage.setItem("firstDate", date.toISOString().split("T")[0]);
    }
    const storedList = localStorage.getItem("medList");
    storedList && setList(JSON.parse(storedList));
  }, [setFirstDate, setList]);

  useToggleLanguage(isEnglish, setIsEnglish, isInitialLoad);

  return (
    <h1 css={settingPageSt.title}>{isEnglish ? "Create Item" : "생성"}</h1>
  );
};

export default CreateItemTitle;
