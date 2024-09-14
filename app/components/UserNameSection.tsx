"use client";
/** @jsxImportSource @emotion/react */

import { outlineSt } from "../style/outlineSt";
import useUserNameStore from "../store/useUserNameStore";

const UserNameSection = () => {
  const { userName } = useUserNameStore();

  return (
    <div css={outlineSt.userNameContainer}>
      <p>Welcome, {userName}</p>
    </div>
  );
};

export default UserNameSection;
