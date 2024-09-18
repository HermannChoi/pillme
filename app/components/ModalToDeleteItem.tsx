"use client";
/** @jsxImportSource @emotion/react */

import { clickDelete } from "../hooks/clickDelete";
import useFormStore from "../store/useFormStore";
import useModalStore from "../store/useModalStore";
import { modalSt } from "../style/modalSt";

const ModalToDeleteItem = () => {
  const { setList } = useFormStore();
  const { whichModal, setWhichModal, itemInfoToDelete } = useModalStore();

  const clickDeleteOnModal = () => {
    clickDelete(itemInfoToDelete.id, itemInfoToDelete.timePeriod, setList);
    setWhichModal(null);
  };

  return (
    <div
      onClick={() => setWhichModal(null)}
      css={modalSt.background(whichModal, "deleteItem")}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        css={modalSt.container}
      >
        <div css={modalSt.textContainer}>
          <p css={modalSt.text}>Are you sure you want to delete</p>
          <p css={modalSt.text}>
            <span css={modalSt.itemName}>{itemInfoToDelete.name}</span>
            from {itemInfoToDelete.timePeriod} list?
          </p>
        </div>
        <div css={modalSt.btnContainer}>
          <button onClick={() => setWhichModal(null)} css={modalSt.cancelBtn}>
            CANCEL
          </button>
          <button onClick={() => clickDeleteOnModal()} css={modalSt.delBtn}>
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalToDeleteItem;
