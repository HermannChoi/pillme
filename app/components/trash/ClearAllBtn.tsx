"use client";
/** @jsxImportSource @emotion/react */

import useTrashStore from "@/app/store/trash/useTrashStore";
import useSettingStore from "@/app/store/useSettingStore";
import { itemSectionSt } from "@/app/style/homePage/itemSectionSt";
import { trashSt } from "@/app/style/trash/trashSt";

const ClearAllBtn = () => {
  const { isEnglish } = useSettingStore();
  const { setTrashList } = useTrashStore();

  return (
    <div css={trashSt.listContainer}>
      <button onClick={() => setTrashList([])} css={itemSectionSt.delBtn}>
        {isEnglish ? `CLEAR ALL` : `전체 삭제`}
      </button>
    </div>
  );
};

export default ClearAllBtn;
