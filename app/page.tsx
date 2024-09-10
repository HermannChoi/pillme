/* eslint-disable react-hooks/exhaustive-deps */
"use client";
/** @jsxImportSource @emotion/react */

import { SyntheticEvent, useEffect, useState } from "react";
import { styles } from "./style/style";

interface itemProps {
  id: string;
  time: string;
  name: string;
  isTaken: boolean;
}

interface listProps {
  Morning: itemProps[];
  Noon: itemProps[];
  Night: itemProps[];
}

export default function Home() {
  const [list, setList] = useState<listProps>({
    Morning: [],
    Noon: [],
    Night: [],
  });
  const [name, setName] = useState<string>("");
  const [time, setTime] = useState<keyof listProps>("Morning");
  const [isInitialLoad, setIsInitialLoad] = useState<boolean>(false);

  const timeOptions: (keyof listProps)[] = ["Morning", "Noon", "Night"];

  const submitForm = (e: SyntheticEvent) => {
    e.preventDefault();
    //
    //같은 time에 같은 이름 입력 시 예외처리 해주기
    //
    const newItem: itemProps = {
      id: name,
      time: time,
      name: name,
      isTaken: false,
    };

    setList((prev) => {
      return {
        ...prev,
        [time]: [...prev[time], newItem],
      };
    });

    setName("");
    setTime("Morning");
  };

  const toggleIsTaken = (time: keyof listProps, id: string) => {
    setList((prev) => ({
      ...prev,
      [time]: prev[time].map((item) =>
        item.id === id ? { ...item, isTaken: !item.isTaken } : item
      ),
    }));
  };

  const clickDelete = (
    e: SyntheticEvent,
    id: string,
    time: keyof listProps
  ) => {
    e.stopPropagation();
    setList((prev) => {
      return {
        ...prev,
        [time]: prev[time].filter((item) => item.id !== id),
      };
    });
  };

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
    }, 1000);
  }, []);

  return (
    <div css={styles.container}>
      <h1 css={styles.h1}>Take Medicine</h1>
      <main css={styles.main}>
        <form css={styles.form} onSubmit={submitForm}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
          <button css={styles.addBtn}>💊</button>
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
                      toggleIsTaken(key as keyof listProps, item.id)
                    }
                    css={styles.listItem}
                  >
                    <input
                      type="checkbox"
                      checked={item.isTaken}
                      css={styles.checkBox}
                    />
                    <p>{item.name}</p>
                    <button
                      onClick={(e) =>
                        clickDelete(e, item.id, key as keyof listProps)
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
