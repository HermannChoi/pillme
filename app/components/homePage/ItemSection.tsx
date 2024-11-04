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
import useLoadingStore from "@/app/store/homePage/useLoadingStore";
import useUserNameStore from "@/app/store/homePage/useUserNameStore";
import useModalStore from "@/app/store/useModalStore";
import useSettingStore from "@/app/store/useSettingStore";
import { itemSectionSt } from "@/app/style/homePage/itemSectionSt";
import { itemProps, listProps } from "@/app/types/types";
import { getTotalListLength } from "@/app/utils/getToTalListLength";
import { vibrate } from "@/app/utils/vibrate";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useEffect } from "react";
import Loading from "./Loading";
import { getKoreanDate } from "@/app/utils/getKoreanDate";

const ItemSection = () => {
  const router = useRouter();
  const { list, setList } = useFormStore();
  const { setWhichModal, setItemForModal } = useModalStore();
  const { storedDateState, isDateChanged, isInitialLoad, setIsInitialLoad } =
    useDateStore();
  const { isEnglish } = useSettingStore();
  const { activatedTime, setActivatedTime } = useUserNameStore();
  const { isLoading } = useLoadingStore();

  //아이템 활성화 토글 로직
  const clickToggle = (e: SyntheticEvent, clickedItem: itemProps) => {
    e.stopPropagation();
    toggleIsTaken({
      clickedItem,
      activatedTime,
      setList,
      setActivatedTime,
    });
    vibrate(100);
  };

  const clickModifyBtn = (e: SyntheticEvent, item: itemProps) => {
    e.stopPropagation();
    router.push(`/pages/item-information`);
    setItemForModal(item);
    setWhichModal("chooseModify");
  };

  //다음날 지나서 아이템 비활성화 되는 로직
  useEffect(() => {
    if (isDateChanged && isInitialLoad) {
      const currentDateGetTime = new Date(getKoreanDate()).getTime();
      const storedDateGetTime = new Date(storedDateState).getTime();
      const aDayLongNumber: number = 1000 * 60 * 60 * 24;

      for (const timePeriod in list) {
        setList((prev) => {
          const updatedList = {
            ...prev,
            [timePeriod]: prev[timePeriod as keyof listProps].map((item) => {
              return item.isTaken
                ? item.leftDay === 1
                  ? {
                      ...item,
                      isTaken: false,
                      leftDay: item.frequency,
                    }
                  : //유저가 앱에 2일 이상 접속 안 했을 때
                  Math.ceil(currentDateGetTime - storedDateGetTime) /
                      aDayLongNumber >
                    2
                  ? //미접속 일 수가 아이템 leftDay보다 길 때
                    Math.ceil(currentDateGetTime - storedDateGetTime) /
                      aDayLongNumber >
                    item.leftDay
                    ? {
                        ...item,
                        isTaken: false,
                        leftDay: item.frequency,
                      }
                    : {
                        ...item,
                        leftDay:
                          item.leftDay -
                          Math.ceil(currentDateGetTime - storedDateGetTime) /
                            aDayLongNumber,
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
  }, [isDateChanged, storedDateState]);

  useEffect(() => {
    if (isInitialLoad) {
      //로컬 스토레지에서 아이템 데이터 받아오는 로직
      const storedList = localStorage.getItem("medList");
      storedList && setList(JSON.parse(storedList));

      //초기 로딩 완료 후 초기 로딩 상태 초기화
      setTimeout(() => {
        setIsInitialLoad(false);
      }, 500);
    }
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
                        <Link
                          href={`/pages/item-information`}
                          onClick={() => setItemForModal(item)}
                          css={itemSectionSt.infoContainer}
                        >
                          <div css={itemSectionSt.optionInfoContainer}>
                            <figure css={itemSectionSt.figure}>
                              <Image
                                src={require(`@/app/assets/itemType/${
                                  item.itemType
                                    ? item.itemType.toLowerCase()
                                    : "oral"
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
                        </Link>
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
      ) : isLoading ? (
        <div css={itemSectionSt.emptyItemSection}>
          <Loading />
        </div>
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
