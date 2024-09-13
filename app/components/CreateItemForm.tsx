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

const CreateItemForm = () => {
  const {
    name,
    setName,
    time,
    setTime,
    isSelectOpen,
    setIsSelectOpen,
    list,
    setList,
    isSubmitted,
    setIsSubmitted,
  } = useFormStore();

  const { setErrorMsg, setIsErrorMsgChanged } = useErrorMsgStore();

  const timeOptions: (keyof listProps)[] = ["Morning", "Noon", "Night", "Any"];

  return (
    <form
      css={styles.form}
      onSubmit={(e) =>
        submitForm({
          e,
          time,
          name,
          list,
          setList,
          setIsSubmitted,
          setName,
          setTime,
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
          {time || "Select an option"}
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
                        setTime(opt as keyof listProps);
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
          <Image src={pill} alt="pill" property="true" width={30} height={30} />
        )}
      </motion.button>
    </form>
  );
};

export default CreateItemForm;
