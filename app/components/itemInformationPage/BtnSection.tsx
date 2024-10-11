"use client";
import useInitialLoadChanger from "@/app/hooks/useInitialLoadChanger";
import useSaveTrashList from "@/app/hooks/useSaveTrashList";
import useDateStore from "@/app/store/homePage/useDateStore";
import useTrashStore from "@/app/store/trash/useTrashStore";
/** @jsxImportSource @emotion/react */

import useModalStore from "@/app/store/useModalStore";
import useSettingStore from "@/app/store/useSettingStore";
import { itemSectionSt } from "@/app/style/homePage/itemSectionSt";
import { itemInformationPageSt } from "@/app/style/item-information/itemInformationPageSt";

const BtnSection = () => {
  const { setWhichModal } = useModalStore();
  const { isEnglish } = useSettingStore();
  const { trashList } = useTrashStore();
  const { isInitialLoad, setIsInitialLoad } = useDateStore();

  //useEffect
  useSaveTrashList(trashList, isInitialLoad);
  useInitialLoadChanger(setIsInitialLoad);

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
