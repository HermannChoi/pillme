/* eslint-disable react-hooks/exhaustive-deps */
"use client";
/** @jsxImportSource @emotion/react */

import { motion } from "framer-motion";
import useFormStore from "../store/useFormStore";
import { itemProps, listProps } from "../types/types";
import { toggleIsTaken } from "../hooks/toggleIsTaken";
import React, { SyntheticEvent, useEffect } from "react";
import useDateStore from "../store/useDateStore";
import { getTotalListLength } from "../utils/getToTalListLength";
import { itemSectionSt } from "../style/itemSectionSt";
import { outlineSt } from "../style/outlineSt";
import { vibrate } from "../utils/vibrate";
import useModalStore from "../store/useModalStore";
import useItemStore from "../store/useItemStore";
import { clickSetWhichModal } from "../hooks/clickSetWhichModal";

const ItemSection = () => {
  const { selectedItemId, setSelectedItemId } = useItemStore();
  const { list, setList, focusInput } = useFormStore();
  const { isDateChanged, isInitialLoad, setIsInitialLoad } = useDateStore();
  const { setWhichModal, setItemForModal, setMessage } = useModalStore();

  const clickItemForOptionsWindow = (item: itemProps) => {
    if (item.date === "0000-00-00") {
      setMessage(
        "you can close the options window after activating the item once."
      );
      return setWhichModal("message");
    }

    if (selectedItemId === item.id) return setSelectedItemId(null);

    setSelectedItemId(item.id);
  };

  const clickToggle = (e: SyntheticEvent, clickedItem: itemProps) => {
    e.stopPropagation();
    toggleIsTaken({
      clickedItem,
      setList,
    });
    vibrate(100);
  };

  const clickToggleIsEveryOtherDay = (clickedItem: itemProps) => {
    setList((prev) => ({
      ...prev,
      [clickedItem.timePeriod]: prev[
        clickedItem.timePeriod as keyof listProps
      ].map((item) => {
        return item.id === clickedItem.id
          ? { ...item, isEveryOtherDay: !item.isEveryOtherDay, leftDay: 1 }
          : item;
      }),
    }));
    vibrate(100);
  };

  useEffect(() => {
    if (isDateChanged) {
      for (const timePeriod in list) {
        setList((prev) => ({
          ...prev,
          [timePeriod]: prev[timePeriod as keyof listProps].map((item) => {
            return item.isTaken
              ? item.isEveryOtherDay
                ? item.leftDay === 0
                  ? { ...item, isTaken: false, leftDay: item.leftDay + 1 }
                  : { ...item, leftDay: item.leftDay - 1 }
                : { ...item, isTaken: false }
              : item;
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
                      <div key={i} css={itemSectionSt.listItemContainer}>
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 60 }}
                          transition={{
                            duration: 3000,
                            type: "spring",
                            stiffness: 700,
                            damping: 20,
                          }}
                          onClick={() => clickItemForOptionsWindow(item)}
                          css={itemSectionSt.listItem(item.id, selectedItemId)}
                        >
                          <div
                            onClick={(e) => clickToggle(e, item)}
                            css={itemSectionSt.toggle(item.isTaken)}
                          >
                            <motion.div
                              css={itemSectionSt.handle}
                              layout
                              transition={{
                                type: "spring",
                                stiffness: 700,
                                damping: 30,
                              }}
                            />
                          </div>
                          <p>{item.date.substring(5).replaceAll("-", "/")}</p>
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
                            selectedItemId,
                            item.date
                          )}
                        >
                          <div css={itemSectionSt.optionBtnContainer}>
                            <button
                              onClick={(e) =>
                                clickSetWhichModal({
                                  e,
                                  whichModal: "modifyDate",
                                  setWhichModal,
                                  item,
                                  setItemForModal,
                                })
                              }
                              css={itemSectionSt.optionBtn}
                            >
                              Date
                            </button>
                            <button
                              onClick={(e) =>
                                clickSetWhichModal({
                                  e,
                                  whichModal: "modifyTime",
                                  setWhichModal,
                                  item,
                                  setItemForModal,
                                })
                              }
                              css={itemSectionSt.optionBtn}
                            >
                              Time
                            </button>
                          </div>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => clickToggleIsEveryOtherDay(item)}
                            css={itemSectionSt.toggle2(item.isEveryOtherDay)}
                          >
                            {item.isEveryOtherDay ? "2D" : "1D"}
                          </motion.div>
                          <button
                            onClick={(e) =>
                              clickSetWhichModal({
                                e,
                                whichModal: "deleteItem",
                                setWhichModal,
                                item,
                                setItemForModal,
                              })
                            }
                            css={itemSectionSt.delBtn}
                          >
                            DEL
                          </button>
                        </div>
                      </div>
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
