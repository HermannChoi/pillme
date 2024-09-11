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
import Link from "next/link";
import Image from "next/image";
import pill from "@/app/assets/svg/pill.svg";

export default function Home() {
  const [lastCheckedDate, setLastCheckedDate] = useState<string | null>(null);
  const [isDateChanged, setIsDateChanged] = useState<boolean>(false);
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
  const [errorMsg, setErrorMsg] = useState("");
  const [isEMsgChanged, setIsEMsgChanged] = useState(false);

  const timeOptions: (keyof listProps)[] = ["Morning", "Noon", "Night", "Any"];
  const totalMedLen = Object.values(list).reduce(
    (sum, array) => sum + array.length,
    0
  );

  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0]; // YYYY-MM-DD 형식의 날짜 반환
  };

  useEffect(() => {
    isInitialLoad && localStorage.setItem("medList", JSON.stringify(list));
  }, [list]);

  useEffect(() => {
    if (isDateChanged)
      for (const time in list) {
        setList((prev) => ({
          ...prev,
          [time]: prev[time as keyof listProps].map((item) => {
            return item.isTaken ? { ...item, isTaken: false } : item;
          }),
        }));
      }
  }, [isDateChanged]);

  useEffect(() => {
    const storedDate = localStorage.getItem("lastCheckedDate");

    if (storedDate) {
      const today = getTodayDate();

      if (storedDate !== today) {
        setIsDateChanged(true);
        setLastCheckedDate(today); // 마지막 확인한 날짜를 오늘 날짜로 업데이트
        localStorage.setItem("lastCheckedDate", today); // 로컬 스토리지에 새로운 날짜 저장
      }
    } else {
      const today = getTodayDate();
      setLastCheckedDate(today);
      localStorage.setItem("lastCheckedDate", today);
    }

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
              list,
              setList,
              setIsSubmitted,
              setName,
              setTime,
              setErrorMsg,
              setIsEMsgChanged,
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
              maxLength={20}
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              <Image
                src={pill}
                alt="pill"
                loading="lazy"
                width={30}
                height={30}
              />
            )}
          </motion.button>
        </form>
        <div css={styles.messageContainer}>
          <p css={styles.errorMessage(isEMsgChanged)}>{errorMsg}</p>
        </div>
        <div css={styles.section}>
          <p>{lastCheckedDate}</p>
          <p>{"Registered Medicine : " + totalMedLen}</p>
        </div>
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
                    animate={{ opacity: 1, height: 60 }}
                    transition={{
                      type: "spring",
                      stiffness: 700,
                      damping: 20,
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
                    <p>{item.date}</p>
                    <p css={styles.name}>{item.name}</p>
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
        <p css={styles.bottomText}>
          made by{" "}
          <Link href={"https://yunseokchoi.vercel.app/"} css={styles.Link}>
            Yunseok Choi
          </Link>
        </p>
      </main>
    </div>
  );
}
