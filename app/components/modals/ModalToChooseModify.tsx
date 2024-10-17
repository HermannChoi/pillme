"use client";
/** @jsxImportSource @emotion/react */

import useModalStore from "@/app/store/useModalStore";
import useSettingStore from "@/app/store/useSettingStore";
import { modalSt } from "@/app/style/modalSt";
import { modalList } from "@/app/types/types";

const ModalToChooseModify = () => {
  const { whichModal, setWhichModal, itemForModal } = useModalStore();
  const { isEnglish } = useSettingStore();

  const modifyModalOptions = [
    { name: isEnglish ? "DATE" : "날짜", value: "modifyDate" },
    { name: isEnglish ? "TIME" : "시간", value: "modifyTime" },
    { name: isEnglish ? "TYPE" : "종류", value: "chooseItemType" },
    { name: isEnglish ? "TIME PERIOD" : "시간대", value: "chooseTimePeriod" },
    { name: isEnglish ? "FREQUENCY" : "빈도", value: "chooseFrequency" },
    {
      name: isEnglish
        ? "NEXT TAKING DATE"
        : `다음 ${itemForModal.itemType === "Oral" ? "복용" : "사용"}일`,
      value: "modifyLeftDay",
    },
    { name: isEnglish ? "CANCEL" : "취소", value: null },
  ];

  return (
    <div
      onClick={() => setWhichModal(null)}
      css={modalSt.background(whichModal, "chooseModify")}
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
              ? "Which one do you wanna modify?"
              : "어느 부분을 수정하시겠어요?"}
          </p>
        </div>
        <div css={modalSt.btnContainer}>
          {modifyModalOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setWhichModal(option.value as keyof modalList)}
              css={modalSt.whiteColorBtn}
            >
              {option.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModalToChooseModify;
