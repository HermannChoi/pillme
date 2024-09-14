"use client";
/** @jsxImportSource @emotion/react */

import { AnimatePresence, motion } from "framer-motion";
import { submitForm } from "../hooks/submitForm";
import useErrorMsgStore from "../store/useErrorMsgStore";
import useFormStore from "../store/useFormStore";
import { styles } from "../style/style";
import { listProps } from "../types/types";
import Image from "next/image";
import pill from "@/app/assets/svg/pill.svg";
import { timeOptions } from "../constant/timeOptions";
import { useEffect, useRef } from "react";

const CreateItemForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    name,
    setName,
    timePeriod,
    setTimePeriod,
    isSelectOpen,
    setIsSelectOpen,
    list,
    setList,
    isSubmitted,
    setIsSubmitted,
    setFocusInput,
  } = useFormStore();
  const { setErrorMsg, setIsErrorMsgChanged } = useErrorMsgStore();

  useEffect(() => {
    setFocusInput(() => {
      inputRef.current && inputRef.current.focus(); // 실제 포커스 함수
    });
  }, [setFocusInput]);

  return (
    <form
      css={styles.form}
      onSubmit={(e) =>
        submitForm({
          e,
          timePeriod,
          name,
          list,
          setList,
          setIsSubmitted,
          setName,
          setErrorMsg,
          setIsErrorMsgChanged,
        })
      }
    >
      <div css={styles.inputContainer}>
        <label htmlFor="name" css={styles.label}>
          Name
        </label>
        <input
          ref={inputRef}
          autoComplete="off"
          id="name"
          type="text"
          maxLength={20}
          value={name}
          onChange={(e) => setName(e.target.value)}
          css={styles.input}
        />
      </div>
      <div css={styles.timeSelectContainer}>
        <label htmlFor="time" css={styles.label}>
          Time
        </label>
        <motion.div
          css={styles.timeSelect}
          whileHover={{ scale: 1.05 }}
          onClick={() => setIsSelectOpen(!isSelectOpen)}
        >
          {timePeriod || "Select an option"}
          <AnimatePresence>
            {isSelectOpen && (
              <motion.ul
                id="time"
                css={styles.optionContainer}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 160 }}
                exit={{ opacity: 0, height: 0 }}
              >
                {timeOptions.map((opt, i) => {
                  return (
                    <li
                      key={i}
                      onClick={() => {
                        setTimePeriod(opt as keyof listProps);
                        setIsSelectOpen(false);
                      }}
                      css={styles.option}
                    >
                      {opt}
                    </li>
                  );
                })}
              </motion.ul>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        css={styles.addBtn}
      >
        {isSubmitted ? (
          <span>✓</span>
        ) : (
          <Image src={pill} alt="pill" priority={true} width={30} height={30} />
        )}
      </motion.button>
    </form>
  );
};

export default CreateItemForm;
