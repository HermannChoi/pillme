"use client";
import useUserNameStore from "../store/useUserNameStore";
/** @jsxImportSource @emotion/react */

import { outlineSt } from "../style/outlineSt";

const UserNameResetBtn = () => {
  const { setUserName, setIsSubmitted, setIsUserNameInputOn } =
    useUserNameStore();

  const clickResetUserName = () => {
    localStorage.removeItem("userName");
    setIsUserNameInputOn(true);
    setIsSubmitted(false);
    setUserName("");
  };

  return (
    <button
      onClick={() => clickResetUserName()}
      css={outlineSt.resetUserNameBtn}
    >
      Rename Username
    </button>
  );
};

export default UserNameResetBtn;
