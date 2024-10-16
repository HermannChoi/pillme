"use client";
/** @jsxImportSource @emotion/react */

import { clickDelete } from "@/app/hooks/clickDelete";
import useFormStore from "@/app/store/homePage/useFormStore";
import useTrashStore from "@/app/store/trash/useTrashStore";
import useModalStore from "@/app/store/useModalStore";
import useSettingStore from "@/app/store/useSettingStore";
import { modalSt } from "@/app/style/modalSt";

const ModalToDeleteItem = () => {
  const { setList } = useFormStore();
  const { whichModal, setWhichModal, itemForModal, resetItemForModal } =
    useModalStore();
  const { isEnglish } = useSettingStore();
  const { moveToTrash } = useTrashStore();

  const clickDeleteOnModal = () => {
    clickDelete(itemForModal, setList, moveToTrash);
    setWhichModal(null);
    resetItemForModal();
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
          {isEnglish ? (
            <>
              <p css={modalSt.text}>Are you sure you want to delete</p>
              <p css={modalSt.text}>
                <span css={modalSt.itemName}>{itemForModal.name}</span>
                from {itemForModal.timePeriod} list?
              </p>
            </>
          ) : (
            <>
              <p css={modalSt.text}>
                정말 {itemForModal.timePeriod}에서{" "}
                <span css={modalSt.itemName}>{itemForModal.name}</span>을(를)
                지우시겠습니까?
              </p>
            </>
          )}
        </div>
        <div css={modalSt.btnContainer}>
          <button
            onClick={() => clickDeleteOnModal()}
            css={modalSt.redColorBtn}
          >
            {isEnglish ? `DELETE` : `삭제`}
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

export default ModalToDeleteItem;
