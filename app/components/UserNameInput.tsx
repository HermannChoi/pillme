"use client";
/** @jsxImportSource @emotion/react */

import useUserNameStore from "../store/useUserNameStore";
import { userNameInputSt } from "../style/userNameInputSt";
import { SyntheticEvent, useEffect, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import pill from "@/app/assets/svg/pill.svg";
import { helloItsTakeMedicine } from "../style/framerMotion";

const UserNameInput = () => {
  const [question, setQuestion] = useState<string>("What is your name?");
  const {
    userName,
    setUserName,
    isSubmitted,
    setIsSubmitted,
    isUserNameInputOn,
    setIsUserNameInputOn,
  } = useUserNameStore();

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
            transition={helloItsTakeMedicine}
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
            transition={{ duration: 1, delay: 3 }}
            css={userNameInputSt.formContainer}
          >
            <label htmlFor="userNameInput">{question}</label>
            <form
              id="usernameForm"
              onSubmit={submitForm}
              css={userNameInputSt.form}
            >
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
                {isSubmitted ? "✓" : "Done"}
              </button>
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
