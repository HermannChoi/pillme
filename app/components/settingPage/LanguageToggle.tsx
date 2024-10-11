"use client";
/** @jsxImportSource @emotion/react */

import useToggleLanguage from "@/app/hooks/useToggleLanguage";
import useDateStore from "@/app/store/homePage/useDateStore";
import useSettingStore from "@/app/store/useSettingStore";
import { settingPageSt } from "@/app/style/settingPage/settingPageSt";
import { motion } from "framer-motion";
import { useEffect } from "react";

const LanguageToggle = () => {
  const { isEnglish, setIsEnglish } = useSettingStore();
  const { isInitialLoad, setIsInitialLoad } = useDateStore();

  useToggleLanguage(isEnglish, setIsEnglish, isInitialLoad);

  useEffect(() => {
    setTimeout(() => {
      setIsInitialLoad(false);
    }, 500);
  }, [setIsInitialLoad]);

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
