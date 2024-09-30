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
import useSettingStore from "../store/useSettingStore";

const ItemSection = () => {
  const {
    selectedItemId,
    setSelectedItemId,
    setIsEverythingTaken,
    previousIsEverythingTaken,
    setPreviousIsEverythingTaken,
  } = useItemStore();
  const { list, setList, focusInput } = useFormStore();
  const { isDateChanged, isInitialLoad, setIsInitialLoad } = useDateStore();
  const { setWhichModal, setItemForModal, setMessage } = useModalStore();
  const { isEnglish } = useSettingStore();

  const clickItemForOptionsWindow = (item: itemProps) => {
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
          ? item.isEveryOtherDay
            ? { ...item, isEveryOtherDay: false, leftDay: 0 }
            : { ...item, isEveryOtherDay: true, leftDay: 1 }
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

    const allItems = [
      ...list.Morning,
      ...list.Noon,
      ...list.Night,
      ...list.Any,
    ];
    const allTaken =
      allItems.every((item) => item.isTaken) &&
      allItems.length > 0 &&
      !isInitialLoad;

    // 아이템의 isTaken 상태가 변경된 경우에만 동작
    if (allTaken !== previousIsEverythingTaken) {
      setIsEverythingTaken(allTaken);
      setPreviousIsEverythingTaken(allTaken);

      if (allTaken) {
        setTimeout(() => {
          setIsEverythingTaken(false);
        }, 3000);
      }
    }
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
                            duration: 700,
                            type: "spring",
                            stiffness: 700,
                            damping: 20,
                          }}
                          onClick={() => clickItemForOptionsWindow(item)}
                          css={itemSectionSt.listItem(item, selectedItemId)}
                        >
                          <button
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
                          </button>
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
                              onClick={(e) => {
                                if (item.date === "0000-00-00") {
                                  setMessage(
                                    isEnglish
                                      ? "you can modify the date once after you activate the item."
                                      : "날짜 수정은 아이템 최초 일 회 활성화 이후 가능합니다."
                                  );
                                  return setWhichModal("message");
                                }
                                clickSetWhichModal({
                                  e,
                                  whichModal: "modifyDate",
                                  setWhichModal,
                                  item,
                                  setItemForModal,
                                });
                              }}
                              css={itemSectionSt.optionBtn}
                            >
                              {isEnglish ? `Date` : `날짜`}
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
                              {isEnglish ? `Time` : `시간`}
                            </button>
                          </div>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => clickToggleIsEveryOtherDay(item)}
                            css={itemSectionSt.toggle2(item.isEveryOtherDay)}
                          >
                            {isEnglish
                              ? item.isEveryOtherDay
                                ? "2D 1T"
                                : "1D 1T"
                              : item.isEveryOtherDay
                              ? "격일"
                              : "매일"}
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
                            {isEnglish ? `DEL` : `삭제`}
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
          {isEnglish ? `Add your medicine!` : `약을 추가해 보세요!`}
        </button>
      )}
    </div>
  );
};

export default ItemSection;
