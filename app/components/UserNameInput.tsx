"use client";
import { SyntheticEvent, useLayoutEffect, useState } from "react";
/** @jsxImportSource @emotion/react */

import useUserNameStore from "../store/useUserNameStore";
import { userNameInputSt } from "../style/userNameInputSt";

const UserNameInput = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { userName, setUserName, isUserNameInputOn, setIsUserNameInputOn } =
    useUserNameStore();

  const submitForm = (e: SyntheticEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    localStorage.setItem("userName", userName);
    setTimeout(() => {
      setIsUserNameInputOn(false);
    }, 3000);
  };

  useLayoutEffect(() => {
    const localStorageUserName = localStorage.getItem("userName");

    if (localStorageUserName) {
      setIsUserNameInputOn(false);
      setUserName(localStorageUserName);
    }
  }, [setIsUserNameInputOn, setUserName]);

  return (
    <div css={userNameInputSt.container(isUserNameInputOn, isSubmitted)}>
      {!isSubmitted ? (
        <div css={userNameInputSt.innerContainer}>
          <h2>What is your name?</h2>
          <form onSubmit={submitForm} css={userNameInputSt.form}>
            <input
              autoFocus
              required
              type="text"
              maxLength={8}
              value={userName}
              onChange={(e) => setUserName(e.currentTarget.value)}
              css={userNameInputSt.input}
            />
            <button css={userNameInputSt.button}>완료</button>
          </form>
        </div>
      ) : (
        <p css={userNameInputSt.welcomeText}>Welcome, {userName}</p>
      )}
    </div>
  );
};

export default UserNameInput;
