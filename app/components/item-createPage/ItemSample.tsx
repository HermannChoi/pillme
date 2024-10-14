"use client";
/** @jsxImportSource @emotion/react */

import {
  frequencyToEnglish,
  frequencyToKorean,
} from "@/app/constant/itemFrequency";
import { timeOptionsKo } from "@/app/constant/timeOptions";
import useFormStore from "@/app/store/homePage/useFormStore";
import useSettingStore from "@/app/store/useSettingStore";
import { itemSectionSt } from "@/app/style/homePage/itemSectionSt";

const ItemSample = () => {
  const { name, timePeriod, frequency } = useFormStore();
  const { isEnglish } = useSettingStore();

  return (
    <section css={itemSectionSt.section}>
      <h2 css={itemSectionSt.h2}>
        {isEnglish ? timePeriod.toUpperCase() : timeOptionsKo[timePeriod]}
      </h2>

      <div css={itemSectionSt.listItem()}>
        <button css={itemSectionSt.toggle(false)}>
          <div css={itemSectionSt.handle} />
        </button>
        <div css={itemSectionSt.infoContainer}>
          <p css={itemSectionSt.name}>{name}</p>
          <div css={itemSectionSt.optionInfoContainer}>
            <p css={itemSectionSt.optionInfoText}>00.00</p>
            <p css={itemSectionSt.optionInfoText}>|</p>
            <p css={itemSectionSt.optionInfoText}>00:00</p>
            <p css={itemSectionSt.optionInfoText}>|</p>
            <p css={itemSectionSt.optionInfoText}>
              {isEnglish
                ? frequencyToEnglish[frequency]
                : frequencyToKorean[frequency]}
            </p>
          </div>
        </div>
        <button css={itemSectionSt.modifyBtn}>
          {isEnglish ? "Modify" : "수정"}
        </button>
      </div>
    </section>
  );
};

export default ItemSample;
