import { useEffect } from "react";
import { itemProps } from "../types/types";

const useSaveTrashList = (trashList: itemProps[], isInitialLoad: boolean) => {
  useEffect(() => {
    //쓰레기 아이템 변경사항 로컬스토레지에 저장 로직
    !isInitialLoad &&
      localStorage.setItem("trashList", JSON.stringify(trashList));
  }, [trashList, isInitialLoad]);
};

export default useSaveTrashList;
