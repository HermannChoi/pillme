"use client";
/** @jsxImportSource @emotion/react */

import useModalStore from "@/app/store/useModalStore";
import useSettingStore from "@/app/store/useSettingStore";
import { itemSectionSt } from "@/app/style/homePage/itemSectionSt";
import { itemInformationPageSt } from "@/app/style/item-information/itemInformationPageSt";

const BtnSection = () => {
  const { setWhichModal } = useModalStore();
  const { isEnglish } = useSettingStore();

  return (
    <div css={itemInformationPageSt.btnContainer}>
      <button
        onClick={() => setWhichModal("deleteItem")}
        css={itemSectionSt.delBtn}
      >
        {isEnglish ? `DEL` : `삭제`}
      </button>
    </div>
  );
};

export default BtnSection;
