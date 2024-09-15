/* eslint-disable react-hooks/exhaustive-deps */
"use client";
/** @jsxImportSource @emotion/react */

import { motion } from "framer-motion";
import useFormStore from "../store/useFormStore";
import { itemProps, listProps } from "../types/types";
import { toggleIsTaken } from "../hooks/toggleIsTaken";
import { clickDelete } from "../hooks/clickDelete";
import { useEffect } from "react";
import useDateStore from "../store/useDateStore";
import { getTotalListLength } from "../utils/getToTalListLength";
import { itemSectionSt } from "../style/itemSectionSt";
import { outlineSt } from "../style/outlineSt";
import { vibrate } from "../utils/vibrate";

const ItemSection = () => {
  const { list, setList, focusInput } = useFormStore();
  const { isDateChanged, isInitialLoad, setIsInitialLoad } = useDateStore();

  const clickToggle = (timePeriod: keyof listProps, item: itemProps) => {
    toggleIsTaken({
      timePeriod: timePeriod as keyof listProps,
      id: item.id,
      setList,
    });
    vibrate(100);
  };

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
    <div css={itemSectionSt.sectionContainer}>
      {getTotalListLength(list) > 0 ? (
        <>
          {Object.keys(list).map(
            (timePeriod) =>
              list[timePeriod as keyof listProps].length > 0 && (
                <section key={timePeriod} css={itemSectionSt.section}>
                  {list[timePeriod as keyof listProps].length > 0 && (
                    <h2 css={outlineSt.h2}>{timePeriod}</h2>
                  )}
                  {list[timePeriod as keyof listProps].map((item, i) => {
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
                        css={itemSectionSt.listItem}
                      >
                        <div
                          onClick={() =>
                            clickToggle(timePeriod as keyof listProps, item)
                          }
                          css={itemSectionSt.toggle(item.isTaken)}
                        >
                          <motion.div
                            css={itemSectionSt.handle}
                            layout
                            transition={{
                              type: "spring",
                              stiffness: 700,
                              damping: 20,
                            }}
                          />
                        </div>
                        <p>{item.date}</p>
                        <p css={itemSectionSt.name}>{item.name}</p>
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
                          css={itemSectionSt.delBtn}
                        >
                          D
                        </button>
                      </motion.div>
                    );
                  })}
                </section>
              )
          )}
        </>
      ) : (
        <button
          onClick={() => focusInput()}
          css={itemSectionSt.emptyItemSection}
        >
          Add your medicine!
        </button>
      )}
    </div>
  );
};

export default ItemSection;
