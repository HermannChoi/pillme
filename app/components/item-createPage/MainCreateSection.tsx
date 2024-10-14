"use client";
/** @jsxImportSource @emotion/react */

import { itemFrequency } from "@/app/constant/itemFrequency";
import { timeOptions, timeOptionsKo } from "@/app/constant/timeOptions";
import { submitFormToCreateItem } from "@/app/hooks/submitFormToCreateItem";
import useErrorMsgStore from "@/app/store/homePage/useErrorMsgStore";

import { itemTypes, itemTypesKo } from "@/app/constant/itemTypes";
import useFormStore from "@/app/store/homePage/useFormStore";
import useSettingStore from "@/app/store/useSettingStore";
import { itemSectionSt } from "@/app/style/homePage/itemSectionSt";
import { itemCreateSt } from "@/app/style/item-create/itemCreateSt";
import { settingPageSt } from "@/app/style/settingPage/settingPageSt";
import { ItemTypes } from "@/app/types/types";
import ErrorMsg from "../homePage/ErrorMsg";

const MainCreateSection = () => {
  const {
    name,
    setName,
    itemType,
    setItemType,
    timePeriod,
    setTimePeriod,
    frequency,
    setFrequency,
    setIsSubmitted,
    list,
    setList,
    setIsEasterEggsOn,
  } = useFormStore();
  const { isEnglish } = useSettingStore();
  const { setErrorMsg, setIsErrorMsgChanged } = useErrorMsgStore();

  const isNameFilledOut = name !== "";

  return (
    <form
      onSubmit={(e) =>
        submitFormToCreateItem({
          e,
          itemType,
          timePeriod,
          name,
          frequency,
          list,
          setList,
          setIsSubmitted,
          setName,
          setItemType,
          setFrequency,
          setErrorMsg,
          setIsErrorMsgChanged,
          setIsEasterEggsOn,
          isEnglish,
        })
      }
      css={itemSectionSt.section}
    >
      <section css={itemCreateSt.section}>
        <label htmlFor="itemName" css={settingPageSt.sectionTitle}>
          {isEnglish ? "Item Name" : "아이템 이름"}
        </label>
        <input
          autoFocus
          autoComplete="off"
          id="itemName"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          css={itemCreateSt.input}
        />
        <ErrorMsg />
      </section>
      <section css={itemCreateSt.section}>
        <p css={settingPageSt.sectionTitle}>
          {isEnglish
            ? "What is the type of this item?"
            : "이 아이템의 타입은 무엇인가요?"}
        </p>
        <div css={itemCreateSt.typeContainer}>
          {itemTypes.map((type, i) => {
            return (
              <button
                key={i}
                type="button"
                onClick={() => setItemType(type as keyof ItemTypes)}
                css={itemCreateSt.option(type, itemType)}
              >
                {isEnglish ? type : itemTypesKo[type]}
              </button>
            );
          })}
        </div>
      </section>
      <section css={itemCreateSt.section}>
        <p css={settingPageSt.sectionTitle}>
          {isEnglish
            ? "When do you take it?"
            : `언제 ${itemType === "Oral" ? "복용" : "사용"}하나요?`}
        </p>
        <div css={itemCreateSt.optionContainer}>
          {timeOptions.map((option, i) => {
            return (
              <button
                key={i}
                type="button"
                onClick={() => setTimePeriod(option)}
                css={itemCreateSt.option(option, timePeriod)}
              >
                {isEnglish ? option : timeOptionsKo[option]}
              </button>
            );
          })}
        </div>
      </section>
      <section css={itemCreateSt.section}>
        <p css={settingPageSt.sectionTitle}>
          {isEnglish
            ? "How often do you take it?"
            : `얼마나 자주 ${itemType === "Oral" ? "복용" : "사용"}하나요?`}
        </p>
        <div css={itemCreateSt.optionContainer}>
          {itemFrequency.map((option, i) => {
            return (
              <button
                key={i}
                type="button"
                onClick={() => setFrequency(option.frequency)}
                css={itemCreateSt.option(option.frequency, frequency)}
              >
                {isEnglish ? option.name : option.nameKo}
              </button>
            );
          })}
        </div>
      </section>
      <section css={itemCreateSt.section}>
        <button
          type="submit"
          disabled={!isNameFilledOut}
          css={itemCreateSt.submitBtn(isNameFilledOut)}
        >
          {isEnglish ? "Create" : "생성"}
        </button>
      </section>
    </form>
  );
};

export default MainCreateSection;
