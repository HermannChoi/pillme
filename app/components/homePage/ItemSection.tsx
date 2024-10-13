/* eslint-disable react-hooks/exhaustive-deps */
"use client";
/** @jsxImportSource @emotion/react */

import {
  frequencyToEnglish,
  frequencyToKorean,
} from "@/app/constant/itemFrequency";
import { toggleIsTaken } from "@/app/hooks/toggleIsTaken";
import useDateStore from "@/app/store/homePage/useDateStore";
import useFormStore from "@/app/store/homePage/useFormStore";
import useItemStore from "@/app/store/homePage/useItemStore";
import useModalStore from "@/app/store/useModalStore";
import useSettingStore from "@/app/store/useSettingStore";
import { itemSectionSt } from "@/app/style/homePage/itemSectionSt";
import { outlineSt } from "@/app/style/homePage/outlineSt";
import { itemProps, listProps } from "@/app/types/types";
import { getAllItems } from "@/app/utils/getAllItems";
import { getTotalListLength } from "@/app/utils/getToTalListLength";
import { vibrate } from "@/app/utils/vibrate";
import { motion } from "framer-motion";
import Link from "next/link";
import { SyntheticEvent, useEffect } from "react";

const ItemSection = () => {
  const {
    setIsEverythingTaken,
    previousIsEverythingTaken,
    setPreviousIsEverythingTaken,
  } = useItemStore();
  const { list, setList, focusInput } = useFormStore();
  const { setItemForModal } = useModalStore();
  const { isDateChanged, isInitialLoad, setIsInitialLoad } = useDateStore();
  const { isEnglish } = useSettingStore();

  //아이템 옵션창 토글 로직
  const clickItem = (e: SyntheticEvent, item: itemProps) => {
    e.stopPropagation();
    setItemForModal(item);
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
        setList((prev) => {
          const updatedList = {
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
          };
          localStorage.setItem("medList", JSON.stringify(updatedList));
          return updatedList;
        });
      }
    }
  }, [isDateChanged]);

  //모든 아이템 활성화 시 축하메세지 뜨는 로직
  useEffect(() => {
    const allItems = getAllItems(list);
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
    //초기 로딩 완료 후 초기 로딩 상태 초기화
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
                      <Link
                        key={i}
                        href={`/pages/item-information/${item.id}`}
                        onClick={(e) => clickItem(e, item)}
                        css={itemSectionSt.listItem(item)}
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
                        <div css={itemSectionSt.infoContainer}>
                          <p css={itemSectionSt.name}>{item.name}</p>
                          <div css={itemSectionSt.optionInfoContainer}>
                            <p css={itemSectionSt.optionInfoText}>
                              {item.date.substring(5).replaceAll("-", "/")}
                            </p>
                            <p css={itemSectionSt.optionInfoText}>|</p>
                            <p css={itemSectionSt.optionInfoText}>
                              {String(item.hours).padStart(2, "0") +
                                ":" +
                                String(item.minutes).padStart(2, "0")}
                            </p>
                            <p css={itemSectionSt.optionInfoText}>|</p>
                            <p css={itemSectionSt.optionInfoText}>
                              {isEnglish
                                ? frequencyToEnglish[item.frequency]
                                : frequencyToKorean[item.frequency]}
                            </p>
                          </div>
                        </div>
                        <div css={itemSectionSt.leftDayContainer}>
                          <p>D - {item.leftDay}</p>
                        </div>
                      </Link>
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
