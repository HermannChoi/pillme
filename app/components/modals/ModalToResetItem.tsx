"use client";
/** @jsxImportSource @emotion/react */

import { defaultList } from "@/app/constant/defaultList";
import useFormStore from "@/app/store/homePage/useFormStore";
import useModalStore from "@/app/store/useModalStore";
import useSettingStore from "@/app/store/useSettingStore";
import { modalSt } from "@/app/style/modalSt";
import { getAllItems } from "@/app/utils/getAllItems";

const ModalToResetItem = () => {
  const { whichModal, setWhichModal, setMessage } = useModalStore();
  const { list } = useFormStore();
  const { isEnglish } = useSettingStore();

  const clickResetUserName = () => {
    const savedTrashList = JSON.parse(
      localStorage.getItem("trashList") || "[]"
    );
    const itemsOnTheList = getAllItems(list);

    if (itemsOnTheList.length === 0) {
      setWhichModal("message");
      return setMessage(
        isEnglish ? "There is no item to delete." : "삭제할 아이템이 없습니다."
      );
    }

    localStorage.setItem(
      "trashList",
      JSON.stringify(
        Array.isArray(savedTrashList)
          ? [...savedTrashList, ...itemsOnTheList]
          : [...itemsOnTheList]
      )
    );

    localStorage.setItem("medList", JSON.stringify(defaultList));

    setWhichModal("message");
    setMessage(
      isEnglish
        ? `All items have been deleted.`
        : `모든 아이템이 삭제되었습니다.`
    );
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
          <button
            onClick={() => clickResetUserName()}
            css={modalSt.redColorBtn}
          >
            {isEnglish ? `DELETE ALL` : `전체 삭제`}
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

export default ModalToResetItem;
