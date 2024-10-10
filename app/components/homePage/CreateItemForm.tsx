"use client";
/** @jsxImportSource @emotion/react */

import { AnimatePresence, motion } from "framer-motion";
import useFormStore from "@/app/store/homePage/useFormStore";
import useErrorMsgStore from "../../store/homePage/useErrorMsgStore";
import { listProps } from "../../types/types";
import { timeOptions } from "../../constant/timeOptions";
import { useEffect, useRef } from "react";
import { createItemFormSt } from "../../style/homePage/createItemFormSt";
import useClickOutside from "../../hooks/useClickOutside";
import useSettingStore from "../../store/useSettingStore";
import ErrorMsg from "./ErrorMsg";
import { submitFormToCreateItem } from "@/app/hooks/submitFormToCreateItem";

const CreateItemForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const timePeriodDivRef = useRef<HTMLDivElement>(null);
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
  const { isEnglish } = useSettingStore();

  //다른 곳 누를 시에 시간대 버튼 비활성화 됨.
  useClickOutside(timePeriodDivRef, () => setIsSelectOpen(false));

  useEffect(() => {
    setFocusInput(() => {
      inputRef.current && inputRef.current.focus(); // 실제 포커스 함수
    });
  }, [setFocusInput]);

  return (
    <section css={createItemFormSt.container}>
      <form
        css={createItemFormSt.form}
        onSubmit={(e) =>
          submitFormToCreateItem({
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
            isEnglish,
          })
        }
      >
        <div css={createItemFormSt.inputContainer}>
          <input
            ref={inputRef}
            autoComplete="off"
            id="name"
            type="text"
            maxLength={16}
            value={name}
            onChange={(e) => setName(e.target.value)}
            css={createItemFormSt.input}
          />
        </div>
        <div css={createItemFormSt.timeSelectContainer}>
          <div
            ref={timePeriodDivRef}
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
                  animate={{ opacity: 1, height: 200 }}
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
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          css={createItemFormSt.addBtn}
        >
          {isSubmitted ? "✓" : isEnglish ? "Add" : "추가"}
        </motion.button>
      </form>
      <ErrorMsg />
    </section>
  );
};

export default CreateItemForm;
