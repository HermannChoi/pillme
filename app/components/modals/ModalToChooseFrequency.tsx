"use client";
/** @jsxImportSource @emotion/react */

import { itemFrequency } from "@/app/constant/itemFrequency";
import useFormStore from "@/app/store/homePage/useFormStore";
import useModalStore from "@/app/store/useModalStore";
import useSettingStore from "@/app/store/useSettingStore";
import { modalSt } from "@/app/style/modalSt";
import { listProps } from "@/app/types/types";
import { useState } from "react";

const ModalToChooseFrequency = () => {
  const [whichFrequency, setWhichFrequency] = useState<number | null>(null);
  const { setList } = useFormStore();
  const { whichModal, setWhichModal, itemForModal } = useModalStore();
  const { isEnglish } = useSettingStore();

  const clickToChooseFrequency = (frequency: number) => {
    setWhichFrequency(frequency);
  };

  const clickToDecideFrequency = () => {
    setWhichModal(null);
    setList((prev) => {
      return {
        ...prev,
        [itemForModal.timePeriod]: prev[
          itemForModal.timePeriod as keyof listProps
        ].map((item) => {
          return item.id === itemForModal.id
            ? { ...item, frequency: whichFrequency, leftDay: whichFrequency }
            : item;
        }),
      };
    });
  };

  const clickCancel = () => {
    setWhichModal(null);
    setWhichFrequency(null);
  };

  return (
    <div
      onClick={() => clickCancel()}
      css={modalSt.background(whichModal, "chooseFrequency")}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        css={modalSt.container}
      >
        <div css={modalSt.textContainer}>
          <p css={modalSt.text}>
            {isEnglish
              ? `Choose frequency of the item`
              : `아이템의 빈도를 선택하세요.`}
          </p>
        </div>
        <div css={modalSt.frequencyBtnContainer}>
          {itemFrequency.map((item, i) => {
            return (
              <button
                key={i}
                onClick={() => clickToChooseFrequency(item.frequency)}
                css={modalSt.frequencyBtn(
                  itemForModal.frequency,
                  item.frequency,
                  whichFrequency
                )}
              >
                {isEnglish ? item.name : item.nameKo}
              </button>
            );
          })}
        </div>
        <div css={modalSt.btnContainer}>
          <button onClick={() => clickCancel()} css={modalSt.cancelBtn}>
            {isEnglish ? `CANCEL` : `취소`}
          </button>
          <button onClick={() => clickToDecideFrequency()} css={modalSt.delBtn}>
            {isEnglish ? `CHOOSE` : `선택`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalToChooseFrequency;
