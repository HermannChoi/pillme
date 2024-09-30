"use client";
/** @jsxImportSource @emotion/react */

import useModalStore from "@/app/store/useModalStore";
import { modalSt } from "@/app/style/modalSt";
import useFormStore from "@/app/store/useFormStore";
import useSettingStore from "@/app/store/useSettingStore";

const ModalToResetItem = () => {
  const { whichModal, setWhichModal } = useModalStore();
  const { setList } = useFormStore();
  const { isEnglish } = useSettingStore();

  const clickResetUserName = () => {
    setList({
      Morning: [],
      Noon: [],
      Night: [],
      Any: [],
    });
    setWhichModal(null);
  };

  return (
    <div
      onClick={() => setWhichModal(null)}
      css={modalSt.background(whichModal, "resetItems")}
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
              ? `Do you really want to reset all the items?`
              : `모든 아이템을 삭제하시겠습니까?`}
          </p>
        </div>
        <div css={modalSt.btnContainer}>
          <button onClick={() => setWhichModal(null)} css={modalSt.cancelBtn}>
            {isEnglish ? `CANCEL` : `취소`}
          </button>
          <button onClick={() => clickResetUserName()} css={modalSt.delBtn}>
            {isEnglish ? `DELETE ALL` : `전체 삭제`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalToResetItem;
