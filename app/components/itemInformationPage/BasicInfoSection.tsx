"use client";
import { defaultItemSetup } from "@/app/constant/defaultItemSetup";
/** @jsxImportSource @emotion/react */

import {
  frequencyToEnglish,
  frequencyToKorean,
} from "@/app/constant/itemFrequency";
import useModalStore from "@/app/store/useModalStore";
import useSettingStore from "@/app/store/useSettingStore";
import "@/app/style/homePage/calendarStyle.css";
import { itemInformationPageSt } from "@/app/style/item-information/itemInformationPageSt";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const BasicInfoSection = () => {
  const router = useRouter();

  const { itemForModal } = useModalStore();
  const { isEnglish } = useSettingStore();

  useEffect(() => {
    if (itemForModal === defaultItemSetup) router.push("/");
  }, [itemForModal, router]);

  return (
    <>
      <div css={itemInformationPageSt.nameSection}>
        <p css={itemInformationPageSt.name}>{itemForModal.name}</p>
      </div>
      <div css={itemInformationPageSt.infoSection}>
        <p>{isEnglish ? `Time Period : ` : `시간대 : `}</p>
        <p>{itemForModal.timePeriod}</p>
      </div>
      <div css={itemInformationPageSt.infoSection}>
        <p>
          {isEnglish ? `Recent Date You Took : ` : `마지막 복용(사용) 날짜 : `}
        </p>
        <p>{itemForModal.date}</p>
      </div>
      <div css={itemInformationPageSt.infoSection}>
        <p>
          {isEnglish ? `Recent Time You Took : ` : `마지막 복용(사용) 시간 : `}
        </p>
        <p>
          {itemForModal.hours.toString().padStart(2, "0") +
            ":" +
            itemForModal.minutes.toString().padStart(2, "0")}
        </p>
      </div>
      <div css={itemInformationPageSt.infoSection}>
        <p>{isEnglish ? `Frequency : ` : `복용(사용) 빈도 : `}</p>
        <p>
          {isEnglish
            ? frequencyToEnglish[itemForModal.frequency]
            : frequencyToKorean[itemForModal.frequency]}
        </p>
      </div>
      <div css={itemInformationPageSt.infoSection}>
        <p>
          {isEnglish ? `The Next Time to Take : ` : `다음 복용(사용)까지 : `}
        </p>
        <p>D - {itemForModal.leftDay}</p>
      </div>
      <div css={itemInformationPageSt.infoSection}>
        <p>{isEnglish ? `Number of Days to Take : ` : `복용(사용) 일 수 : `}</p>
        <p>
          {itemForModal.takenDays.length}
          {isEnglish ? `D` : `일`}
        </p>
      </div>
    </>
  );
};

export default BasicInfoSection;
