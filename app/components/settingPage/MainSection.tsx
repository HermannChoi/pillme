"use client";
/** @jsxImportSource @emotion/react */

import { useEffect } from "react";
import ResetButtons from "../ResetButtons";
import useNavigatorStore from "@/app/store/useNavigatorStore";
import { settingPageSt } from "@/app/style/settingPageSt";
import LanguageToggle from "./LanguageToggle";

const MainSection = () => {
  const { setWhichPage } = useNavigatorStore();

  useEffect(() => {
    setWhichPage("Setting");
  }, [setWhichPage]);

  return (
    <>
      <section css={settingPageSt.section}>
        <ResetButtons />
      </section>
      <section css={settingPageSt.section}>
        <LanguageToggle />
      </section>
    </>
  );
};

export default MainSection;
