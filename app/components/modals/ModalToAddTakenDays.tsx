/* eslint-disable react-hooks/exhaustive-deps */
"use client";
/** @jsxImportSource @emotion/react */

import { clickModifyItem } from "@/app/hooks/clickModifyItem";
import { clickModifyOnModal } from "@/app/hooks/clickModifyItemOnModal";
import useFormStore from "@/app/store/homePage/useFormStore";
import useModalStore from "@/app/store/useModalStore";
import useSettingStore from "@/app/store/useSettingStore";
import { modalSt } from "@/app/style/modalSt";

const ModalToAddTakenDays = () => {
  const { setList } = useFormStore();
  const { whichModal, setWhichModal, itemForModal, setMessage } =
    useModalStore();
  const { isEnglish } = useSettingStore();

  const clickModifyBtn = () => {
    clickModifyOnModal({
      setWhichModal,
      setMessage,
      isEnglish,
      clickModifyItem,
      itemForModal,
      setList,
    });
  };

  return (
    <div
      onClick={() => setWhichModal(null)}
      css={modalSt.background(whichModal, "addTakenDays")}
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
              ? `Do you want to add a taken day on the selected date?`
              : `선택한 날짜에 복용 날을 추가하시겠습니까?`}
          </p>
        </div>
        <div css={modalSt.btnContainer}>
          <button onClick={() => clickModifyBtn()} css={modalSt.redColorBtn}>
            {isEnglish ? `ADD` : `추가`}
          </button>
          <button
            onClick={() => setWhichModal(null)}
            css={modalSt.whiteColorBtn}
          >
            {isEnglish ? `CANCEL` : `취소`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalToAddTakenDays;
