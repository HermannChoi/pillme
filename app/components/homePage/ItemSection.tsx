/* eslint-disable react-hooks/exhaustive-deps */
"use client";
/** @jsxImportSource @emotion/react */

import { toggleIsTaken } from "@/app/hooks/toggleIsTaken";
import useDateStore from "@/app/store/homePage/useDateStore";
import useFormStore from "@/app/store/homePage/useFormStore";

import useItemStore from "@/app/store/homePage/useItemStore";
import useSettingStore from "@/app/store/useSettingStore";
import { itemSectionSt } from "@/app/style/homePage/itemSectionSt";
import { outlineSt } from "@/app/style/homePage/outlineSt";

import { itemProps, listProps } from "@/app/types/types";
import { getTotalListLength } from "@/app/utils/getToTalListLength";
import { vibrate } from "@/app/utils/vibrate";
import { motion } from "framer-motion";
import { SyntheticEvent, useEffect } from "react";
import ItemOptionSection from "./ItemOptionSection";

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
  const { isEnglish } = useSettingStore();

  //아이템 옵션창 토글 로직
  const clickItemForOptionsWindow = (item: itemProps) => {
    if (selectedItemId === item.id) return setSelectedItemId(null);
    setSelectedItemId(item.id);
  };

  //아이템 활성화 토글 로직
  const clickToggle = (e: SyntheticEvent, clickedItem: itemProps) => {
    e.stopPropagation();
    toggleIsTaken({
      clickedItem,
      setList,
    });
    vibrate(100);
  };

  //다음날 지나서 아이템 비활성화 되는 로직
  useEffect(() => {
    if (isDateChanged) {
      for (const timePeriod in list) {
        setList((prev) => ({
          ...prev,
          [timePeriod]: prev[timePeriod as keyof listProps].map((item) => {
            return item.isTaken
              ? item.leftDay === 0
                ? {
                    ...item,
                    isTaken: false,
                    leftDay: item.frequency,
                  }
                : { ...item, leftDay: item.leftDay - 1 }
              : item;
          }),
        }));
      }
    }
  }, [isDateChanged]);

  useEffect(() => {
    //아이템 변경사항 로컬스토레지에 저장 로직
    (!isInitialLoad || isDateChanged) &&
      localStorage.setItem("medList", JSON.stringify(list));
    //모든 아이템 활성화 시 축하메세지 뜨는 로직
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

    if (allTaken !== previousIsEverythingTaken) {
      // 아이템의 isTaken 상태가 변경된 경우에만 동작
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
    //로컬 스토레지에서 아이템 데이터 받아오는 로직
    const storedList = localStorage.getItem("medList");
    if (storedList) {
      setList(JSON.parse(storedList));
    }

    setIsInitialLoad(true);
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
                        <ItemOptionSection item={item} />
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
