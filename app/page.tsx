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

export default function Home() {
  const [isCPGone, setIsCPGone] = useState<boolean>(false);
  const [isInitialLoad, setIsInitialLoad] = useState<boolean>(false);

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
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="add the medicne you take..."
            css={styles.input}
          />
          <select
            value={time}
            onChange={(e) => setTime(e.currentTarget.value as keyof listProps)}
          >
            {timeOptions.map((opt, i) => {
              return (
                <option key={i} value={opt}>
                  {opt}
                </option>
              );
            })}
          </select>
          <button css={styles.addBtn}>{isSubmitted ? "✓" : "💊"}</button>
        </form>
        <div css={styles.sectionContainer}>
          {Object.keys(list).map((key) => (
            <section key={key} css={styles.section}>
              {list[key as keyof listProps].length > 0 && (
                <h2 css={styles.h2}>{key}</h2>
              )}
              {list[key as keyof listProps].map((item, i) => {
                return (
                  <div
                    key={i}
                    onClick={() =>
                      toggleIsTaken({
                        time: key as keyof listProps,
                        id: item.id,
                        setList,
                      })
                    }
                    css={styles.listItem}
                  >
                    <input
                      readOnly
                      type="checkbox"
                      id={item.id}
                      checked={item.isTaken}
                      css={styles.checkBox}
                    />
                    <label htmlFor={item.id}>{item.name}</label>
                    <button
                      onClick={(e) =>
                        clickDelete(e, item.id, key as keyof listProps, setList)
                      }
                      css={styles.delBtn}
                    >
                      DEL
                    </button>
                  </div>
                );
              })}
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
