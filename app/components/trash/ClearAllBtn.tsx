"use client";
/** @jsxImportSource @emotion/react */

import useTrashStore from "@/app/store/trash/useTrashStore";
import useModalStore from "@/app/store/useModalStore";
import useSettingStore from "@/app/store/useSettingStore";
import { itemSectionSt } from "@/app/style/homePage/itemSectionSt";
import { trashSt } from "@/app/style/trash/trashSt";

const ClearAllBtn = () => {
  const { isEnglish } = useSettingStore();
  const { trashList, setTrashList } = useTrashStore();
  const { setWhichModal, setMessage } = useModalStore();

  const clickClearAllBtn = () => {
    if (trashList.length === 0) {
      setWhichModal("message");
      return setMessage(
        isEnglish ? "There is no item to delete." : "삭제할 아이템이 없습니다."
      );
    }
    setTrashList([]);
    localStorage.setItem("trashList", JSON.stringify([]));
  };

  return (
    <div css={trashSt.listContainer}>
      <button onClick={() => clickClearAllBtn()} css={itemSectionSt.delBtn}>
        {isEnglish ? `CLEAR ALL` : `전체 삭제`}
      </button>
    </div>
  );
};

export default ClearAllBtn;
