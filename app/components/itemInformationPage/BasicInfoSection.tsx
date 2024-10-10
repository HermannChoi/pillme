"use client";
import { defaultItemSetup } from "@/app/constant/defaultItemSetup";
/** @jsxImportSource @emotion/react */

import {
  frequencyToEnglish,
  frequencyToKorean,
} from "@/app/constant/itemFrequency";
import useModalStore from "@/app/store/useModalStore";
import useSettingStore from "@/app/store/useSettingStore";
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
        <p>{itemForModal.timePeriod}</p>
        <p css={itemInformationPageSt.name}>{itemForModal.name}</p>
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
