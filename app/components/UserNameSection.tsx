"use client";
/** @jsxImportSource @emotion/react */

import { outlineSt } from "../style/outlineSt";
import useUserNameStore from "../store/useUserNameStore";
import useFormStore from "../store/useFormStore";
import { useEffect, useState } from "react";
import useSettingStore from "../store/useSettingStore";
import useToggleLanguage from "../hooks/useToggleLanguage";
import useDateStore from "../store/useDateStore";

const UserNameSection = () => {
  const [greeting, setGreeting] = useState("");
  const { userName } = useUserNameStore();
  const { isEasterEggsOn } = useFormStore();
  const { isEnglish, setIsEnglish } = useSettingStore();
  const { isInitialLoad } = useDateStore();

  useToggleLanguage(isEnglish, setIsEnglish, isInitialLoad);

  useEffect(() => {
    const hours = new Date().getHours();

    if (hours >= 0 && hours < 5)
      setGreeting(isEnglish ? "Good Dawn" : `좋은 새벽이에요`);
    else if (hours >= 5 && hours < 12)
      setGreeting(isEnglish ? "Good Morning" : `좋은 아침이에요`);
    else if (hours >= 12 && hours < 18)
      setGreeting(isEnglish ? "Good Afternoon" : `좋은 오후에요`);
    else setGreeting(isEnglish ? "Good Evening" : `좋은 저녁이에요`);
  }, [setGreeting, isEnglish]);

  return (
    <div css={outlineSt.userNameContainer(isEasterEggsOn)}>
      {isEasterEggsOn
        ? isEnglish
          ? `You are welcome :)`
          : `감사합니다 :)`
        : `${greeting}, ${userName}  ${isEnglish ? `` : `님`}`}
    </div>
  );
};

export default UserNameSection;
