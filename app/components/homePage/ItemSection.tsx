/* eslint-disable react-hooks/exhaustive-deps */
"use client";
/** @jsxImportSource @emotion/react */

import {
  frequencyToEnglish,
  frequencyToKorean,
} from "@/app/constant/itemFrequency";
import { timeOptionsKo } from "@/app/constant/timeOptions";
import { toggleIsTaken } from "@/app/hooks/toggleIsTaken";
import useDateStore from "@/app/store/homePage/useDateStore";
import useFormStore from "@/app/store/homePage/useFormStore";
import useModalStore from "@/app/store/useModalStore";
import useSettingStore from "@/app/store/useSettingStore";
import { itemSectionSt } from "@/app/style/homePage/itemSectionSt";
import { itemProps, listProps } from "@/app/types/types";
import { getTotalListLength } from "@/app/utils/getToTalListLength";
import { vibrate } from "@/app/utils/vibrate";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useEffect } from "react";

const ItemSection = () => {
  const router = useRouter();
  const { list, setList } = useFormStore();
  const { setWhichModal, setItemForModal } = useModalStore();
  const { isDateChanged, setIsInitialLoad } = useDateStore();
  const { isEnglish } = useSettingStore();

  //아이템 정보 페이지 이동 로직
  const clickItem = (e: SyntheticEvent, item: itemProps) => {
    setItemForModal(item);
    router.push(`/pages/item-information/${item.id}`);
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

  const clickModifyBtn = (e: SyntheticEvent, item: itemProps) => {
    e.stopPropagation();
    router.push(`/pages/item-information/${item.id}`);
    setItemForModal(item);
    setWhichModal("chooseModify");
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
                    <h2 css={itemSectionSt.h2}>
                      {isEnglish
                        ? timePeriod.toUpperCase()
                        : timeOptionsKo[timePeriod]}
                    </h2>
                  )}
                  {list[timePeriod as keyof listProps].map((item, i) => {
                    return (
                      <div key={i} css={itemSectionSt.listItem(item)}>
                        <div
                          onClick={(e) => clickToggle(e, item)}
                          css={itemSectionSt.toggleContainer}
                        >
                          <button css={itemSectionSt.toggle(item.isTaken)}>
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
                        </div>
                        <div
                          onClick={(e) => clickItem(e, item)}
                          css={itemSectionSt.infoContainer}
                        >
                          <div css={itemSectionSt.optionInfoContainer}>
                            <figure css={itemSectionSt.figure}>
                              <Image
                                src={require(`@/app/assets/itemType/${
                                  item.itemType
                                    ? item.itemType.toLowerCase()
                                    : "Oral"
                                }.svg`)}
                                alt={item.itemType}
                                width={13}
                                height={13}
                              />
                            </figure>
                            <p css={itemSectionSt.name}>{item.name}</p>
                          </div>
                          <div css={itemSectionSt.optionInfoContainer}>
                            <p css={itemSectionSt.optionInfoText}>
                              {item.date.substring(5).replaceAll("-", ".")}
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
                        <button
                          onClick={(e) => clickModifyBtn(e, item)}
                          css={itemSectionSt.modifyBtn}
                        >
                          {isEnglish ? "Modify" : "수정"}
                        </button>
                      </div>
                    );
                  })}
                </section>
              )
          )}
        </>
      ) : (
        <button
          onClick={() => router.push("/pages/item-create")}
          css={itemSectionSt.emptyItemSection}
        >
          {isEnglish
            ? `Click me and add your medicine!`
            : `저를 클릭해서 약을 추가해 보세요!`}
        </button>
      )}
    </div>
  );
};

export default ItemSection;
