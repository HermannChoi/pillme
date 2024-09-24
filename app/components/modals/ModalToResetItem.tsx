"use client";
import useFormStore from "@/app/store/useFormStore";
/** @jsxImportSource @emotion/react */

import useModalStore from "@/app/store/useModalStore";
import { modalSt } from "@/app/style/modalSt";

const ModalToResetItem = () => {
  const { whichModal, setWhichModal } = useModalStore();
  const { setList } = useFormStore();

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
          <p css={modalSt.text}>Do you really want to reset all the items?</p>
        </div>
        <div css={modalSt.btnContainer}>
          <button onClick={() => setWhichModal(null)} css={modalSt.cancelBtn}>
            CANCEL
          </button>
          <button onClick={() => clickResetUserName()} css={modalSt.delBtn}>
            DELETE ALL
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalToResetItem;
