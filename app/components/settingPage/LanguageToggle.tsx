"use client";
/** @jsxImportSource @emotion/react */

import useSettingStore from "@/app/store/useSettingStore";
import { settingPageSt } from "@/app/style/settingPage/settingPageSt";
import { motion } from "framer-motion";
import { useEffect } from "react";

const LanguageToggle = () => {
  const { isEnglish, setIsEnglish } = useSettingStore();

  const clickLanguageToggleBtn = () => {
    const newState = !isEnglish; // Use the current state directly
    setIsEnglish(newState); // Set the new state directly
    localStorage.setItem("isEnglish", JSON.stringify(newState)); // 상태 변경 시 로컬 스토리지에 저장
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("isEnglish");
    if (savedLanguage) {
      setIsEnglish(savedLanguage === "true");
    }
  }, [setIsEnglish]);

  return (
    <div css={settingPageSt.sectionOutline}>
      <h2 css={settingPageSt.sectionTitle}>
        {isEnglish ? `Preference` : `선호`}
      </h2>
      <section css={settingPageSt.section}>
        <div css={settingPageSt.listContainer}>
          <p>{isEnglish ? `Language` : `언어`}</p>
          <button
            onClick={() => clickLanguageToggleBtn()}
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
      </section>
    </div>
  );
};

export default LanguageToggle;
