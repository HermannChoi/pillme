"use client";
/** @jsxImportSource @emotion/react */

import {
  frequencyToEnglish,
  frequencyToKorean,
  itemFrequency,
} from "@/app/constant/itemFrequency";
import { timeOptions, timeOptionsKo } from "@/app/constant/timeOptions";
import useFormStore from "@/app/store/homePage/useFormStore";
import useSettingStore from "@/app/store/useSettingStore";
import { itemSectionSt } from "@/app/style/homePage/itemSectionSt";
import { itemCreateSt } from "@/app/style/item-create/itemCreateSt";
import Image from "next/image";

const ItemSample = () => {
  const { name, itemType, timePeriod, frequency, isSubmitted } = useFormStore();
  const { isEnglish } = useSettingStore();

  return (
    <section css={itemCreateSt.sampleSection}>
      <div css={itemCreateSt.timeContainer}>
        <div css={itemCreateSt.timeInnerContainer(timePeriod)}>
          {timeOptions.map((time) => (
            <p key={time} css={itemCreateSt.time}>
              {isEnglish ? time : timeOptionsKo[time]}
            </p>
          ))}
        </div>
      </div>
      <div css={itemCreateSt.listItem(isSubmitted)}>
        <div css={itemSectionSt.toggleContainer}>
          <button css={itemSectionSt.toggle(false)}>
            <div css={itemSectionSt.handle} />
          </button>
        </div>
        <div css={itemSectionSt.infoContainer}>
          <div css={itemSectionSt.optionInfoContainer}>
            <figure css={itemCreateSt.figure(itemType)}>
              <Image
                src={require(`@/app/assets/itemType/${itemType.toLowerCase()}.svg`)}
                alt={itemType}
                loading="lazy"
                width={13}
                height={13}
              />
            </figure>
            <p
              css={itemSectionSt.name}
              style={name === "" ? { color: "grey" } : {}}
            >
              {name === "" ? (isEnglish ? "Name" : "이름") : name}
            </p>
          </div>
          <div css={itemSectionSt.optionInfoContainer}>
            <p css={itemSectionSt.optionInfoText}>00.00</p>
            <p css={itemSectionSt.optionInfoText}>|</p>
            <p css={itemSectionSt.optionInfoText}>00:00</p>
            <p css={itemSectionSt.optionInfoText}>|</p>
            <div css={itemCreateSt.frequencyContainer}>
              <div css={itemCreateSt.frequencyInnerContainer(frequency)}>
                {itemFrequency.map((option) => {
                  return (
                    <p key={option.frequency} css={itemCreateSt.frequency}>
                      {isEnglish
                        ? frequencyToEnglish[option.frequency]
                        : frequencyToKorean[option.frequency]}
                    </p>
                  );
                })}
              </div>
            </div>
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
