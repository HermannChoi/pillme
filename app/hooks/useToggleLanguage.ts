import { useEffect } from "react";

const useToggleLanguage = (
  isEnglish: boolean,
  setIsEnglish: (value: boolean) => void,
  isSettingInitialLoad: boolean
) => {
  useEffect(() => {
    if (!isEnglish && !isSettingInitialLoad) {
      window.localStorage.setItem("isEnglish", "false");
    }
    if (isEnglish && !isSettingInitialLoad) {
      window.localStorage.setItem("isEnglish", "true");
    }
  }, [isEnglish, setIsEnglish, isSettingInitialLoad]);

  useEffect(() => {
    const langInLocalStorage =
      window.localStorage.getItem("isEnglish") === "true";
    setIsEnglish(langInLocalStorage);
  }, [setIsEnglish]);
};

export default useToggleLanguage;
