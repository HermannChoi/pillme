/* eslint-disable react-hooks/exhaustive-deps */
"use client";
/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import { styles } from "./style/style";
import CoverPage from "./components/CoverPage";
import { listProps } from "./types/types";
import { submitForm } from "./hooks/submitForm";
import { toggleIsTaken } from "./hooks/toggleIsTaken";
import { clickDelete } from "./hooks/clickDelete";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const [isCPGone, setIsCPGone] = useState<boolean>(false);
  const [isInitialLoad, setIsInitialLoad] = useState<boolean>(false);
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const [list, setList] = useState<listProps>({
    Morning: [],
    Noon: [],
    Night: [],
    Any: [],
  });
  const [name, setName] = useState<string>("");
  const [time, setTime] = useState<keyof listProps>("Morning");

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const timeOptions: (keyof listProps)[] = ["Morning", "Noon", "Night", "Any"];

  useEffect(() => {
    isInitialLoad && localStorage.setItem("medList", JSON.stringify(list));
  }, [list]);

  useEffect(() => {
    const storedList = localStorage.getItem("medList");
    if (storedList) {
      setList(JSON.parse(storedList));
    }

    setTimeout(() => {
      setIsInitialLoad(true);
      setIsCPGone(true);
    }, 1000);
  }, []);

  return (
    <div css={styles.container}>
      {!isCPGone && <CoverPage />}
      <h1 css={styles.h1}>Take Medicine</h1>
      <main css={styles.main}>
        <form
          css={styles.form}
          onSubmit={(e) =>
            submitForm({
              e,
              time,
              name,
              setList,
              setIsSubmitted,
              setName,
              setTime,
            })
          }
        >
          <div css={styles.inputContainer}>
            <label htmlFor="name" css={styles.label}>
              name of the medicine
            </label>
            <input
              autoComplete="off"
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="add the medicne you take..."
              css={styles.input}
            />
          </div>
          <div css={styles.timeSelectContainer}>
            <label htmlFor="time" css={styles.label}>
              time
            </label>
            <motion.div
              css={styles.timeSlect}
              whileHover={{ scale: 1.05 }}
              onClick={() => setIsSelectOpen(!isSelectOpen)}
            >
              {time || "Select an option"}
              <AnimatePresence>
                {isSelectOpen && (
                  <motion.ul
                    id="time"
                    css={styles.optionContrainer}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 100 }}
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
            {isSubmitted ? "✓" : "💊"}
          </motion.button>
        </form>
        <div css={styles.sectionContainer}>
          {Object.keys(list).map((key) => (
            <section key={key} css={styles.section}>
              {list[key as keyof listProps].length > 0 && (
                <h2 css={styles.h2}>{key}</h2>
              )}
              {list[key as keyof listProps].map((item, i) => {
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 50 }}
                    transition={{
                      duration: 0.3,
                      type: "just",
                      stiffness: 700,
                      damping: 30,
                    }}
                    onClick={() =>
                      toggleIsTaken({
                        time: key as keyof listProps,
                        id: item.id,
                        setList,
                      })
                    }
                    css={styles.listItem}
                  >
                    <div id={item.id} css={styles.toggle(item.isTaken)}>
                      <motion.div
                        css={styles.handle}
                        layout
                        transition={{
                          type: "spring",
                          stiffness: 700,
                          damping: 20,
                        }}
                      />
                    </div>
                    <label htmlFor={item.id}>{item.name}</label>
                    <button
                      onClick={(e) =>
                        clickDelete(e, item.id, key as keyof listProps, setList)
                      }
                      css={styles.delBtn}
                    >
                      DEL
                    </button>
                  </motion.div>
                );
              })}
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
