"use client";
/** @jsxImportSource @emotion/react */

import useToggleLanguage from "@/app/hooks/useToggleLanguage";
import useSettingStore from "@/app/store/useSettingStore";
import useUserNameStore from "@/app/store/homePage/useUserNameStore";
import { useEffect, useState } from "react";
import useFormStore from "@/app/store/homePage/useFormStore";
import useDateStore from "@/app/store/homePage/useDateStore";
import { outlineSt } from "@/app/style/homePage/outlineSt";
import useNavigatorStore from "@/app/store/layout/useNavigatorStore";

const UserNameSection = () => {
  const [greeting, setGreeting] = useState("");

  const { userName } = useUserNameStore();
  const { isEasterEggsOn } = useFormStore();
  const { isEnglish, setIsEnglish } = useSettingStore();
  const { isInitialLoad } = useDateStore();
  const { setWhichPage } = useNavigatorStore();

  useEffect(() => {
    setWhichPage("Home");
  }, [setWhichPage]);

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
          : `천만에요! :)`
        : `${greeting}, ${userName}${isEnglish ? `` : `님`}`}
    </div>
  );
};

export default UserNameSection;
