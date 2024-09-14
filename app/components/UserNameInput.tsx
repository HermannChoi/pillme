"use client";
/** @jsxImportSource @emotion/react */

import useUserNameStore from "../store/useUserNameStore";
import { userNameInputSt } from "../style/userNameInputSt";
import { SyntheticEvent, useEffect, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import pill from "@/app/assets/svg/pill.svg";

const UserNameInput = () => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [question, setQuestion] = useState<string>("What is your name?");
  const { userName, setUserName, isUserNameInputOn, setIsUserNameInputOn } =
    useUserNameStore();

  const submitForm = (e: SyntheticEvent) => {
    e.preventDefault();
    localStorage.setItem("userName", userName);
    setTimeout(() => {
      setIsSubmitted(true);
    }, 300);
    setTimeout(() => {
      setIsUserNameInputOn(false);
    }, 3500);
  };

  useLayoutEffect(() => {
    const localStorageUserName = localStorage.getItem("userName");

    if (localStorageUserName) {
      setIsUserNameInputOn(false);
      setUserName(localStorageUserName);
    }
  }, [setIsUserNameInputOn, setUserName]);

  useEffect(() => {
    userName.length > 0
      ? setQuestion("That's a great name!")
      : setQuestion("What is your name?");
  }, [userName, setQuestion]);

  return (
    <div css={userNameInputSt.container(isUserNameInputOn, isSubmitted)}>
      {!isSubmitted ? (
        <div css={userNameInputSt.innerContainer(isSubmitted)}>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.5,
              type: "spring",
              stiffness: 500,
              damping: 20,
            }}
            css={userNameInputSt.formContainer}
          >
            <p>{`hello, it's Take Medicine!`}</p>
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
            transition={{ duration: 1, delay: 3.5 }}
            css={userNameInputSt.formContainer}
          >
            <h2>{question}</h2>
            <form onSubmit={submitForm} css={userNameInputSt.form}>
              <input
                autoFocus
                required
                type="text"
                maxLength={15}
                value={userName}
                onChange={(e) => setUserName(e.currentTarget.value)}
                css={userNameInputSt.input}
              />
              <button css={userNameInputSt.button}>완료</button>
            </form>
          </motion.div>
        </div>
      ) : (
        <p css={userNameInputSt.welcomeText}>Welcome, {userName}</p>
      )}
    </div>
  );
};

export default UserNameInput;
