"use client";
/** @jsxImportSource @emotion/react */

import { AnimatePresence, motion } from "framer-motion";
import { submitForm } from "../hooks/submitForm";
import useErrorMsgStore from "../store/useErrorMsgStore";
import useFormStore from "../store/useFormStore";
import { listProps } from "../types/types";
import { timeOptions } from "../constant/timeOptions";
import { useEffect, useRef } from "react";
import { createItemFormSt } from "../style/createItemFormSt";

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
    setIsEasterEggsOn,
  } = useFormStore();
  const { setErrorMsg, setIsErrorMsgChanged } = useErrorMsgStore();

  useEffect(() => {
    setFocusInput(() => {
      inputRef.current && inputRef.current.focus(); // 실제 포커스 함수
    });
  }, [setFocusInput]);

  return (
    <form
      css={createItemFormSt.form}
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
          setIsEasterEggsOn,
        })
      }
    >
      <div css={createItemFormSt.inputContainer}>
        <label htmlFor="name" css={createItemFormSt.label}>
          Name
        </label>
        <input
          ref={inputRef}
          autoComplete="off"
          id="name"
          type="text"
          maxLength={18}
          value={name}
          onChange={(e) => setName(e.target.value)}
          css={createItemFormSt.input}
        />
      </div>
      <div css={createItemFormSt.timeSelectContainer}>
        <p css={createItemFormSt.label}>Time</p>
        <div
          css={createItemFormSt.timeSelect}
          onClick={() => setIsSelectOpen(!isSelectOpen)}
        >
          {timePeriod || "Select an option"}
          <AnimatePresence>
            {isSelectOpen && (
              <motion.ul
                id="time"
                css={createItemFormSt.optionContainer}
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
                      css={createItemFormSt.option}
                    >
                      {opt}
                    </li>
                  );
                })}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        css={createItemFormSt.addBtn}
      >
        {isSubmitted ? "✓" : "Add"}
      </motion.button>
    </form>
  );
};

export default CreateItemForm;
