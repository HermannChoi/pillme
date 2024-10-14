"use client";
/** @jsxImportSource @emotion/react */

import { itemTypes, itemTypesKo } from "@/app/constant/itemTypes";
import useFormStore from "@/app/store/homePage/useFormStore";
import useModalStore from "@/app/store/useModalStore";
import useSettingStore from "@/app/store/useSettingStore";
import { modalSt } from "@/app/style/modalSt";
import { listProps } from "@/app/types/types";
import { useState } from "react";

const ModalToChooseItemType = () => {
  const [whichType, setWhichType] = useState<string | null>(null);

  const { setList } = useFormStore();
  const { whichModal, setWhichModal, itemForModal, setMessage } =
    useModalStore();
  const { isEnglish } = useSettingStore();

  const clickToDecideItemType = () => {
    setWhichType(null);

    if (whichType === null) {
      setMessage(
        isEnglish
          ? "Please select a type of the item"
          : "아이템의 종류를 선택하세요."
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
        [itemForModal.timePeriod]: prev[
          itemForModal.timePeriod as keyof listProps
        ].map((item) => {
          return item.id === itemForModal.id
            ? { ...item, itemType: whichType }
            : item;
        }),
      };

      localStorage.setItem("medList", JSON.stringify(updatedList));
      return updatedList;
    });
  };

  const clickCancel = () => {
    setWhichModal(null);
    setWhichType(null);
  };

  return (
    <div
      onClick={() => clickCancel()}
      css={modalSt.background(whichModal, "chooseItemType")}
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
          {itemTypes.map((item, i) => {
            return (
              <button
                key={i}
                onClick={() => setWhichType(item)}
                css={modalSt.optionBtn(itemForModal.itemType, item, whichType)}
              >
                {isEnglish ? item : itemTypesKo[item]}
              </button>
            );
          })}
        </div>
        <div css={modalSt.btnContainer}>
          <button
            onClick={() => clickToDecideItemType()}
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

export default ModalToChooseItemType;
