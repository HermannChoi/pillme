"use client";
import { defaultItemSetup } from "@/app/constant/defaultItemSetup";
/** @jsxImportSource @emotion/react */

import { timeOptions, timeOptionsKo } from "@/app/constant/timeOptions";
import useFormStore from "@/app/store/homePage/useFormStore";
import useModalStore from "@/app/store/useModalStore";
import useSettingStore from "@/app/store/useSettingStore";
import { modalSt } from "@/app/style/modalSt";
import { listProps } from "@/app/types/types";
import { useState } from "react";

const ModalToChooseTimePeriod = () => {
  const [whichTimePeriod, setWhichTimePeriod] = useState<string | null>(null);

  const { setList } = useFormStore();
  const {
    whichModal,
    setWhichModal,
    itemForModal,
    setItemForModal,
    setMessage,
  } = useModalStore();
  const { isEnglish } = useSettingStore();

  const clickToDecideTimePeriod = () => {
    setWhichTimePeriod(null);

    if (whichTimePeriod === null) {
      setMessage(
        isEnglish ? "Please select a time period" : "시간대를 선택하세요."
      );
      return setWhichModal("message");
    } else {
      setWhichModal("message");
      setMessage(
        isEnglish
          ? "It successfully got modified."
          : "성공적으로 수정되었습니다."
      );
    }

    setList((prev) => {
      const updatedList = {
        ...prev,
        // 새로운 시간대에 아이템 추가
        [whichTimePeriod]: [
          ...prev[whichTimePeriod as keyof listProps],
          { ...itemForModal, timePeriod: whichTimePeriod },
        ],
        // 기존 시간대에서 아이템 제거
        [itemForModal.timePeriod]: prev[
          itemForModal.timePeriod as keyof listProps
        ].filter((item) => {
          return item.id !== itemForModal.id;
        }),
      };

      localStorage.setItem("medList", JSON.stringify(updatedList));
      return updatedList;
    });

    setItemForModal(defaultItemSetup);
  };

  const clickCancel = () => {
    setWhichModal(null);
    setWhichTimePeriod(null);
  };

  return (
    <div
      onClick={() => clickCancel()}
      css={modalSt.background(whichModal, "chooseTimePeriod")}
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
              ? `Choose a type of the item`
              : `아이템의 종류를 선택하세요.`}
          </p>
        </div>
        <div css={modalSt.frequencyBtnContainer}>
          {timeOptions.map((item, i) => {
            return (
              <button
                key={i}
                onClick={() => setWhichTimePeriod(item)}
                css={modalSt.optionBtn(
                  itemForModal.timePeriod,
                  item,
                  whichTimePeriod
                )}
              >
                {isEnglish ? item : timeOptionsKo[item]}
              </button>
            );
          })}
        </div>
        <div css={modalSt.btnContainer}>
          <button
            onClick={() => clickToDecideTimePeriod()}
            css={modalSt.redColorBtn}
          >
            {isEnglish ? `CHOOSE` : `선택`}
          </button>
          <button onClick={() => clickCancel()} css={modalSt.whiteColorBtn}>
            {isEnglish ? `CANCEL` : `취소`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalToChooseTimePeriod;
