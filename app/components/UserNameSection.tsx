"use client";
/** @jsxImportSource @emotion/react */

import { outlineSt } from "../style/outlineSt";
import useUserNameStore from "../store/useUserNameStore";
import useFormStore from "../store/useFormStore";
import { useEffect, useState } from "react";

const UserNameSection = () => {
  const [greeting, setGreeting] = useState("");
  const { userName } = useUserNameStore();
  const { isEasterEggsOn } = useFormStore();

  useEffect(() => {
    const hours = new Date().getHours();

    if (hours >= 0 && hours < 5) setGreeting("Good Dawn");
    else if (hours >= 5 && hours < 9) setGreeting("Good Morning");
    else if (hours >= 9 && hours < 17) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");
  }, [setGreeting]);

  return (
    <div css={outlineSt.userNameContainer(isEasterEggsOn)}>
      {isEasterEggsOn ? `You are welcome :)` : `${greeting}, ${userName}`}
    </div>
  );
};

export default UserNameSection;
