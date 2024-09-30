"use client";
import useDateStore from "@/app/store/useDateStore";
/** @jsxImportSource @emotion/react */

import useSettingStore from "@/app/store/useSettingStore";
import { settingPageSt } from "@/app/style/settingPageSt";
import { motion } from "framer-motion";
import { useEffect } from "react";

const LanguageToggle = () => {
  const { isEnglish, setIsEnglish } = useSettingStore();
  const { isInitialLoad, setIsInitialLoad } = useDateStore();

  useEffect(() => {
    if (!isEnglish && !isInitialLoad) {
      window.localStorage.setItem("isEnglish", "false");
    }
    if (isEnglish && !isInitialLoad) {
      window.localStorage.setItem("isEnglish", "true");
    }
  }, [isEnglish, setIsEnglish, isInitialLoad]);

  useEffect(() => {
    const langInLocalStorage =
      window.localStorage.getItem("isEnglish") === "true";
    setIsEnglish(langInLocalStorage);
  }, [setIsEnglish]);

  useEffect(() => {
    setTimeout(() => {
      setIsInitialLoad(false);
    }, 500);
  }, []);

  return (
    <div css={settingPageSt.listContainer}>
      <p>{isEnglish ? `Language` : `언어`}</p>
      <button
        onClick={() => setIsEnglish(!isEnglish)}
        css={settingPageSt.languageToggle(isEnglish)}
      >
        <motion.div
          css={settingPageSt.languageHandle}
          layout
          transition={{
            type: "spring",
            stiffness: 700,
            damping: 30,
          }}
        />
      </button>
    </div>
  );
};

export default LanguageToggle;
