"use client";
/** @jsxImportSource @emotion/react */

import { outlineSt } from "../style/outlineSt";
import useUserNameStore from "../store/useUserNameStore";
import useFormStore from "../store/useFormStore";

const UserNameSection = () => {
  const { userName } = useUserNameStore();
  const { isEasterEggsOn } = useFormStore();

  return (
    <div css={outlineSt.userNameContainer(isEasterEggsOn)}>
      {isEasterEggsOn ? `You are welcome :)` : `Hello, ${userName}`}
    </div>
  );
};

export default UserNameSection;
