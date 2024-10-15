"use client";
/** @jsxImportSource @emotion/react */

import { defaultList } from "@/app/constant/defaultList";
import { submitFormToCreateItem } from "@/app/hooks/submitFormToCreateItem";
import useFormStore from "@/app/store/homePage/useFormStore";
import useUserNameStore from "@/app/store/homePage/useUserNameStore";
import { AnimatePresence, motion } from "framer-motion";
import _ from "lodash";
import { useRef } from "react";
import { timeOptions, timeOptionsKo } from "../../constant/timeOptions";
import useClickOutside from "../../hooks/useClickOutside";
import useErrorMsgStore from "../../store/homePage/useErrorMsgStore";
import useSettingStore from "../../store/useSettingStore";
import { createItemFormSt } from "../../style/homePage/createItemFormSt";
import { listProps } from "../../types/types";
import ErrorMsg from "./ErrorMsg";

const CreateItemForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const timePeriodButtonRef = useRef<HTMLButtonElement>(null);
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
    setIsEasterEggsOn,
  } = useFormStore();
  const { errorMsg, setErrorMsg, setIsErrorMsgChanged } = useErrorMsgStore();
  const { addedItemNum, setAddedItemNum } = useUserNameStore();
  const { isEnglish } = useSettingStore();

  const areArraysEqual = _.isEqual(list, defaultList);

  //다른 곳 누를 시에 시간대 버튼 비활성화 됨.
  useClickOutside(timePeriodButtonRef, () => setIsSelectOpen(false));

  return (
    <section css={createItemFormSt.container(areArraysEqual)}>
      <form
        css={createItemFormSt.form}
        onSubmit={(e) =>
          submitFormToCreateItem({
            e,
            timePeriod,
            name,
            list,
            addedItemNum,
            setList,
            setIsSubmitted,
            setName,
            setErrorMsg,
            setIsErrorMsgChanged,
            setIsEasterEggsOn,
            setAddedItemNum,
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
          <button
            type="button"
            ref={timePeriodButtonRef}
            css={createItemFormSt.timeSelect}
            onClick={() => setIsSelectOpen(!isSelectOpen)}
          >
            {isEnglish
              ? timePeriod || "Select an option"
              : timeOptionsKo[timePeriod]}
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
                      <button
                        type="button"
                        key={i}
                        onClick={() => {
                          setTimePeriod(opt as keyof listProps);
                          setIsSelectOpen(false);
                        }}
                        css={createItemFormSt.option}
                      >
                        {isEnglish ? opt : timeOptionsKo[opt]}
                      </button>
                    );
                  })}
                </motion.ul>
              )}
            </AnimatePresence>
          </button>
        </div>
        <motion.button
          disabled={errorMsg !== ""}
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
