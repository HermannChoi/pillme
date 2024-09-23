/* eslint-disable react-hooks/exhaustive-deps */
"use client";
/** @jsxImportSource @emotion/react */

import { motion } from "framer-motion";
import useFormStore from "../store/useFormStore";
import { itemProps, listProps } from "../types/types";
import { toggleIsTaken } from "../hooks/toggleIsTaken";
import { SyntheticEvent, useEffect, useState } from "react";
import useDateStore from "../store/useDateStore";
import { getTotalListLength } from "../utils/getToTalListLength";
import { itemSectionSt } from "../style/itemSectionSt";
import { outlineSt } from "../style/outlineSt";
import { vibrate } from "../utils/vibrate";
import useModalStore from "../store/useModalStore";

const ItemSection = () => {
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const { list, setList, focusInput } = useFormStore();
  const { isDateChanged, isInitialLoad, setIsInitialLoad } = useDateStore();
  const { setWhichModal, setItemForModal } = useModalStore();

  const clickItem = (itemId: string) => {
    if (selectedItemId === itemId) return setSelectedItemId(null);
    setSelectedItemId(itemId);
  };

  const clickToggle = (
    e: SyntheticEvent,
    timePeriod: keyof listProps,
    item: itemProps
  ) => {
    e.stopPropagation();
    toggleIsTaken({
      timePeriod: timePeriod as keyof listProps,
      id: item.id,
      setList,
    });
    vibrate(100);
  };

  const clickDeleteBtn = (e: SyntheticEvent, item: itemProps) => {
    e.stopPropagation();
    setWhichModal("deleteItem");
    setItemForModal(item);
  };

  const clickModifyTime = (item: itemProps) => {
    setWhichModal("modifyTime");
    setItemForModal(item);
  };

  useEffect(() => {
    if (isDateChanged) {
      for (const timePeriod in list) {
        setList((prev) => ({
          ...prev,
          [timePeriod]: prev[timePeriod as keyof listProps].map((item) => {
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
                      <>
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 60 }}
                          transition={{
                            type: "spring",
                            stiffness: 700,
                            damping: 20,
                          }}
                          onClick={() => clickItem(item.id)}
                          css={itemSectionSt.listItem(item.id, selectedItemId)}
                        >
                          <div
                            onClick={(e) =>
                              clickToggle(
                                e,
                                timePeriod as keyof listProps,
                                item
                              )
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
                          <p>
                            {String(item.hours).padStart(2, "0") +
                              ":" +
                              String(item.minutes).padStart(2, "0")}
                          </p>
                        </motion.div>
                        <div
                          css={itemSectionSt.optionContainer(
                            item.id,
                            selectedItemId
                          )}
                        >
                          <button css={itemSectionSt.optionBtn}>
                            Coming soon
                          </button>
                          <button
                            onClick={() => clickModifyTime(item)}
                            css={itemSectionSt.optionBtn}
                          >
                            Modify Time
                          </button>
                          <button
                            onClick={(e) => clickDeleteBtn(e, item)}
                            css={itemSectionSt.delBtn}
                          >
                            DEL
                          </button>
                        </div>
                      </>
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
