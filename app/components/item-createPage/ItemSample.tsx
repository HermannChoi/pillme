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
import Image from "next/image";

const ItemSample = () => {
  const { name, itemType, timePeriod, frequency } = useFormStore();
  const { isEnglish } = useSettingStore();

  return (
    <section css={itemSectionSt.section}>
      <h2 css={itemSectionSt.h2}>
        {isEnglish ? timePeriod.toUpperCase() : timeOptionsKo[timePeriod]}
      </h2>

      <div css={itemSectionSt.listItem()}>
        <div css={itemSectionSt.toggleContainer}>
          <button css={itemSectionSt.toggle(false)}>
            <div css={itemSectionSt.handle} />
          </button>
        </div>
        <div css={itemSectionSt.infoContainer}>
          <div css={itemSectionSt.optionInfoContainer}>
            <figure css={itemSectionSt.figure}>
              <Image
                src={require(`@/app/assets/itemType/${itemType}.svg`)}
                alt={itemType}
                width={13}
                height={13}
              />
            </figure>
            <p css={itemSectionSt.name}>{name === "" ? "..." : name}</p>
          </div>
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
