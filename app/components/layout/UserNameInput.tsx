"use client";
/** @jsxImportSource @emotion/react */

import { SyntheticEvent, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import pill from "@/app/assets/svg/pill.svg";
import useUserNameStore from "@/app/store/homePage/useUserNameStore";
import useSettingStore from "@/app/store/useSettingStore";
import { helloItsTakeMedicine } from "@/app/style/framerMotion";
import { userNameInputSt } from "@/app/style/layout/userNameInputSt";

const UserNameInput = () => {
  const {
    userName,
    setUserName,
    isSubmitted,
    setIsSubmitted,
    isUserNameInputOn,
    setIsUserNameInputOn,
  } = useUserNameStore();
  const { isEnglish } = useSettingStore();
  const { setFirstDate } = useUserNameStore();

  const submitForm = (e: SyntheticEvent) => {
    e.preventDefault();
    localStorage.setItem("userName", userName);

    const storedFirstDate = localStorage.getItem("firstDate");
    if (!storedFirstDate) {
      const date = new Date();
      date.setHours(date.getHours() + 9);
      setFirstDate(date.toISOString().split("T")[0]);
      localStorage.setItem("firstDate", date.toISOString().split("T")[0]);
    }

    setTimeout(() => {
      setIsSubmitted(true);
    }, 300);
    setTimeout(() => {
      setIsUserNameInputOn(false);
    }, 3500);
  };

  useLayoutEffect(() => {
    const localStorageUserName = localStorage.getItem("userName");

    if (!localStorageUserName) {
      setIsUserNameInputOn(true);
    } else {
      setUserName(localStorageUserName);
    }
  }, [setIsUserNameInputOn, setUserName]);

  return (
    <div css={userNameInputSt.container(isUserNameInputOn, isSubmitted)}>
      {!isSubmitted ? (
        <div css={userNameInputSt.innerContainer(isSubmitted)}>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={helloItsTakeMedicine}
            css={userNameInputSt.formContainer}
          >
            <p>
              {isEnglish
                ? `hello, it's Pillme!`
                : `안녕하세요, 저는 Pillme에요!`}
            </p>
            <Image
              src={pill}
              alt="pill"
              priority={true}
              width={50}
              height={50}
              css={userNameInputSt.pill}
            ></Image>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3 }}
            css={userNameInputSt.formContainer}
          >
            <label htmlFor="userNameInput">
              {isEnglish ? `What is your name?` : `당신의 이름은 무엇인가요?`}
            </label>
            <form onSubmit={submitForm} css={userNameInputSt.form}>
              <input
                id="userNameInput"
                autoComplete="off"
                required
                type="text"
                maxLength={15}
                value={userName}
                onChange={(e) => setUserName(e.currentTarget.value)}
                css={userNameInputSt.input}
              />
              <button css={userNameInputSt.button}>
                {isEnglish ? "Done" : "완료"}
              </button>
            </form>
          </motion.div>
        </div>
      ) : (
        <p css={userNameInputSt.welcomeText}>
          {isEnglish ? `Welcome, ${userName}` : `반가워요, ${userName}님`}
        </p>
      )}
    </div>
  );
};

export default UserNameInput;
