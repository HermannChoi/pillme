import { useEffect } from "react";

const useToggleLanguage = (
  isEnglish: boolean,
  setIsEnglish: (value: boolean) => void,
  isInitialLoad: boolean
) => {
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
};

export default useToggleLanguage;
