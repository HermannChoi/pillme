"use client";
import { defaultItemSetup } from "@/app/constant/defaultItemSetup";
/** @jsxImportSource @emotion/react */

import {
  frequencyToEnglish,
  frequencyToKorean,
} from "@/app/constant/itemFrequency";
import { itemTypesKo } from "@/app/constant/itemTypes";
import { timeOptionsKo } from "@/app/constant/timeOptions";
import useModalStore from "@/app/store/useModalStore";
import useSettingStore from "@/app/store/useSettingStore";
import { itemInformationPageSt } from "@/app/style/item-information/itemInformationPageSt";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const BasicInfoSection = () => {
  const router = useRouter();

  const [isShowingMoreInfo, setIsShowingMoreInfo] = useState(false);

  const { itemForModal } = useModalStore();
  const { isEnglish } = useSettingStore();

  useEffect(() => {
    if (itemForModal === defaultItemSetup) router.push("/");
  }, [itemForModal, router]);

  return (
    <>
      <div css={itemInformationPageSt.nameSection}>
        <p>
          {isEnglish
            ? itemForModal.timePeriod
            : timeOptionsKo[itemForModal.timePeriod]}
        </p>
        <p css={itemInformationPageSt.name}>{itemForModal.name}</p>
      </div>
      <div css={itemInformationPageSt.infoSection}>
        <p>{isEnglish ? `Type : ` : `종류 : `}</p>
        <p>
          {isEnglish
            ? itemForModal.itemType
            : itemTypesKo[itemForModal.itemType]}
        </p>
      </div>
      <div css={itemInformationPageSt.infoSection}>
        <p>
          {isEnglish
            ? `Frequency : `
            : `${itemForModal.itemType === "Oral" ? "복용" : "사용"} 빈도 : `}
        </p>
        <p>
          {isEnglish
            ? frequencyToEnglish[itemForModal.frequency]
            : frequencyToKorean[itemForModal.frequency]}
        </p>
      </div>
      <div css={itemInformationPageSt.infoSection}>
        <p>
          {isEnglish
            ? `Number of Days to Take : `
            : `${itemForModal.itemType === "Oral" ? "복용" : "사용"} 일 수 : `}
        </p>
        <p>
          {itemForModal.takenDays.length}
          {isEnglish ? `D` : `일`}
        </p>
      </div>
      {isShowingMoreInfo ? (
        <>
          <div css={itemInformationPageSt.infoSection}>
            <p>
              {isEnglish
                ? `Last Taken Date : `
                : `마지막 ${
                    itemForModal.itemType === "Oral" ? "복용" : "사용"
                  }일 : `}
            </p>
            <p>{itemForModal.date.replaceAll("-", ".")}</p>
          </div>
          <div css={itemInformationPageSt.infoSection}>
            <p>
              {isEnglish
                ? `Last Time to Take : `
                : `마지막 ${
                    itemForModal.itemType === "Oral" ? "복용" : "사용"
                  } 시간 : `}
            </p>
            <p>
              {itemForModal.hours.toString().padStart(2, "0")} :{" "}
              {itemForModal.minutes.toString().padStart(2, "0")}
            </p>
          </div>
          <div css={itemInformationPageSt.infoSection}>
            <p>
              {isEnglish
                ? `The Next Time to Take : `
                : `다음 ${
                    itemForModal.itemType === "Oral" ? "복용" : "사용"
                  }까지 : `}
            </p>
            <p>D - {itemForModal.leftDay}</p>
          </div>
        </>
      ) : (
        <button
          onClick={() => setIsShowingMoreInfo(true)}
          css={itemInformationPageSt.showMoreInfoBtn}
        >
          더보기
        </button>
      )}
    </>
  );
};

export default BasicInfoSection;
