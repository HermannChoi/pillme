/* eslint-disable react-hooks/exhaustive-deps */
"use client";
/** @jsxImportSource @emotion/react */

import { AnimatePresence, motion } from "framer-motion";
import { styles } from "../style/style";
import useFormStore from "../store/useFormStore";
import { listProps } from "../types/types";
import { toggleIsTaken } from "../hooks/toggleIsTaken";
import { clickDelete } from "../hooks/clickDelete";
import { useEffect } from "react";
import useDateStore from "../store/useDateStore";
import { getTotalListLength } from "../utils/getToTalListLength";

const ItemSection = () => {
  const { list, setList } = useFormStore();
  const { isDateChanged, isInitialLoad, setIsInitialLoad } = useDateStore();

  useEffect(() => {
    if (isDateChanged) {
      for (const time in list) {
        setList((prev) => ({
          ...prev,
          [time]: prev[time as keyof listProps].map((item) => {
            return item.isTaken ? { ...item, isTaken: false } : item;
          }),
        }));
      }
      localStorage.setItem("medList", JSON.stringify(list));
    }
  }, [isDateChanged]);

  useEffect(() => {
    (!isInitialLoad || isDateChanged) &&
      localStorage.setItem("medList", JSON.stringify(list));
  }, [list]);

  useEffect(() => {
    const storedList = localStorage.getItem("medList");
    if (storedList) {
      setList(JSON.parse(storedList));
    }

    setTimeout(() => {
      setIsInitialLoad(false);
    }, 1000);
  }, []);

  return (
    <AnimatePresence>
      <div css={styles.sectionContainer}>
        {getTotalListLength(list) > 0 ? (
          <AnimatePresence>
            {Object.keys(list).map(
              (timePeriod) =>
                list[timePeriod as keyof listProps].length > 0 && (
                  <motion.section
                    key={timePeriod}
                    exit={{ opacity: 0, y: 20 }}
                    css={styles.section}
                  >
                    {list[timePeriod as keyof listProps].length > 0 && (
                      <h2 css={styles.h2}>{timePeriod}</h2>
                    )}
                    {list[timePeriod as keyof listProps].map((item, i) => {
                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 60 }}
                          exit={{ opacity: 0, y: 20 }}
                          transition={{
                            type: "spring",
                            stiffness: 700,
                            damping: 20,
                          }}
                          onClick={() =>
                            toggleIsTaken({
                              timePeriod: timePeriod as keyof listProps,
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
                          <p>{item.time}</p>
                          <button
                            onClick={(e) =>
                              clickDelete(
                                e,
                                item.id,
                                timePeriod as keyof listProps,
                                setList
                              )
                            }
                            css={styles.delBtn}
                          >
                            D
                          </button>
                        </motion.div>
                      );
                    })}
                  </motion.section>
                )
            )}
          </AnimatePresence>
        ) : (
          <section css={[styles.section, `height: 80px`]}>
            <p
              css={[
                `
                color: #808080;
              `,
              ]}
            >
              Add your medicine!
            </p>
          </section>
        )}
      </div>
    </AnimatePresence>
  );
};

export default ItemSection;
