"use client";
/** @jsxImportSource @emotion/react */

import useToggleLanguage from "@/app/hooks/useToggleLanguage";
import useSettingStore from "@/app/store/useSettingStore";
import { settingPageSt } from "@/app/style/settingPage/settingPageSt";
import { motion } from "framer-motion";
import { useEffect } from "react";

const LanguageToggle = () => {
  const {
    isEnglish,
    setIsEnglish,
    isSettingInitialLoad,
    setIsSettingInitialLoad,
  } = useSettingStore();

  useToggleLanguage(isEnglish, setIsEnglish, isSettingInitialLoad);

  useEffect(() => {
    setTimeout(() => {
      setIsSettingInitialLoad(false);
    }, 500);
  }, [setIsSettingInitialLoad]);

  return (
    <div css={settingPageSt.sectionOutline}>
      <h2 css={settingPageSt.sectionTitle}>
        {isEnglish ? `Preference` : `선호`}
      </h2>
      <section css={settingPageSt.section}>
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
      </section>
    </div>
  );
};

export default LanguageToggle;
