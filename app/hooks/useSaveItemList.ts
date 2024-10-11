/* eslint-disable react-hooks/exhaustive-deps */
import { listProps } from "@/app/types/types";
import { useEffect } from "react";

const useSaveItemList = (
  list: listProps,
  isInitialLoad: boolean,
  isDateChanged: boolean
) => {
  useEffect(() => {
    //아이템 변경사항 로컬스토레지에 저장 로직
    (!isInitialLoad || isDateChanged) &&
      localStorage.setItem("medList", JSON.stringify(list));
  }, [list]);
};

export default useSaveItemList;
