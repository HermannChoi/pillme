"use client";
/** @jsxImportSource @emotion/react */

import { itemFrequency } from "@/app/constant/itemFrequency";
import { itemTypes, itemTypesKo } from "@/app/constant/itemTypes";
import { timeOptions, timeOptionsKo } from "@/app/constant/timeOptions";
import { submitFormToCreateItem } from "@/app/hooks/submitFormToCreateItem";
import useErrorMsgStore from "@/app/store/homePage/useErrorMsgStore";
import useFormStore from "@/app/store/homePage/useFormStore";
import useUserNameStore from "@/app/store/homePage/useUserNameStore";
import useSettingStore from "@/app/store/useSettingStore";
import { itemCreateSt } from "@/app/style/item-create/itemCreateSt";
import { ItemTypes } from "@/app/types/types";
import { useState } from "react";
import { createItemFormSt } from "@/app/style/homePage/createItemFormSt";

const MainCreateSection = () => {
  const [optionOrder, setOptionOrder] = useState<number>(0);

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
  const { addedItemNum, setAddedItemNum } = useUserNameStore();
  const { isEnglish } = useSettingStore();
  const { errorMsg, isErrorMsgChanged, setErrorMsg, setIsErrorMsgChanged } =
    useErrorMsgStore();

  const isNameFilledOut = name !== "";

  return (
    <form
      onSubmit={(e) => {
        if (optionOrder < 3) return e.preventDefault();
        submitFormToCreateItem({
          e,
          itemType: itemType!,
          timePeriod: timePeriod!,
          name,
          frequency,
          list,
          addedItemNum,
          setList,
          setIsSubmitted,
          setName,
          setItemType,
          setTimePeriod,
          setFrequency,
          setErrorMsg,
          setIsErrorMsgChanged,
          setIsEasterEggsOn,
          setAddedItemNum,
          setOptionOrder,
          isEnglish,
        });
      }}
      css={itemCreateSt.form}
    >
      {optionOrder > 0 && (
        <button
          type="button"
          onClick={() => setOptionOrder(optionOrder - 1)}
          css={itemCreateSt.backBtn}
        >
          {isEnglish ? `< Back` : `< 뒤로`}
        </button>
      )}
      <p css={itemCreateSt.optionTitle}>
        {optionOrder === 0
          ? `${isEnglish ? "Item Name" : "아이템 이름"}`
          : optionOrder === 1
          ? `${
              isEnglish
                ? "What is the type of this item?"
                : "이 아이템의 타입은 무엇인가요?"
            }`
          : optionOrder === 2
          ? `${
              isEnglish
                ? "When do you take it?"
                : `언제 ${itemType === "Oral" ? "복용" : "사용"}하나요?`
            }`
          : optionOrder === 3 &&
            `${
              isEnglish
                ? "How often do you take it?"
                : `얼마나 자주 ${itemType === "Oral" ? "복용" : "사용"}하나요?`
            }`}
      </p>
      {optionOrder === 0 ? (
        <>
          <section css={itemCreateSt.section}>
            <input
              autoFocus
              autoComplete="off"
              id="itemName"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              css={itemCreateSt.input}
            />
          </section>
          <button
            type="button"
            disabled={name === ""}
            onClick={() => setOptionOrder(optionOrder + 1)}
            css={itemCreateSt.optionOrderBtn(isNameFilledOut)}
          >
            다음
          </button>
        </>
      ) : optionOrder === 1 ? (
        <>
          <section css={itemCreateSt.section}>
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
          <button
            type="button"
            disabled={itemType === null}
            onClick={() => setOptionOrder(optionOrder + 1)}
            css={itemCreateSt.optionOrderBtn(itemType !== null)}
          >
            다음
          </button>
        </>
      ) : optionOrder === 2 ? (
        <>
          <section css={itemCreateSt.section}>
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
          <button
            type="button"
            disabled={timePeriod === null}
            onClick={() => setOptionOrder(optionOrder + 1)}
            css={itemCreateSt.optionOrderBtn(timePeriod !== null)}
          >
            다음
          </button>
        </>
      ) : (
        optionOrder === 3 && (
          <>
            <section css={itemCreateSt.section}>
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
            <section css={itemCreateSt.submitBtnContainer}>
              <div css={createItemFormSt.errorMsgContainer}>
                <p css={createItemFormSt.errorMsg(isErrorMsgChanged)}>
                  {errorMsg}
                </p>
              </div>
              <button
                type="submit"
                disabled={frequency === 0}
                css={itemCreateSt.optionOrderBtn(frequency !== 0)}
              >
                {isEnglish ? "Create" : "생성"}
              </button>
            </section>
          </>
        )
      )}
    </form>
  );
};

export default MainCreateSection;
