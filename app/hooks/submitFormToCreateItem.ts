import { SyntheticEvent } from "react";
import { v4 as uuid } from "uuid";
import { itemProps, ItemTypes, listProps } from "../types/types";
import { vibrate } from "../utils/vibrate";

interface SubmitFormToCreateItemProps {
  e: SyntheticEvent;
  itemType?: keyof ItemTypes;
  timePeriod: keyof listProps;
  name: string;
  frequency?: number;
  list: listProps;
  addedItemNum: number;
  setList: (prev: (prev: listProps) => listProps) => void;
  setIsSubmitted: (value: boolean) => void;
  setName: (value: string) => void;
  setItemType?: (value: keyof ItemTypes) => void;
  setFrequency?: (value: number) => void;
  setErrorMsg: (value: string) => void;
  setIsErrorMsgChanged: (value: boolean) => void;
  setIsEasterEggsOn: (value: boolean) => void;
  setAddedItemNum: (value: number) => void;
  isEnglish: boolean;
}

export const submitFormToCreateItem = ({
  e,
  itemType,
  timePeriod,
  name,
  frequency,
  list,
  addedItemNum,
  setList,
  setIsSubmitted,
  setName,
  setItemType,
  setFrequency,
  setErrorMsg,
  setIsErrorMsgChanged,
  setIsEasterEggsOn,
  setAddedItemNum,
  isEnglish,
}: SubmitFormToCreateItemProps) => {
  e.preventDefault();
  //예외처리
  if (name === "") {
    return exceptionFunction({
      errorMsg: isEnglish
        ? "Please write a name of the medicine"
        : "이름을 입력해 주세요",
      setErrorMsg,
      setIsErrorMsgChanged,
    });
  }
  if (
    list[timePeriod].some((it) => {
      return it.name === name;
    })
  ) {
    return exceptionFunction({
      errorMsg: isEnglish
        ? "It already exists on the slot."
        : "이미 해당 아이템이 존재합니다",
      setErrorMsg,
      setIsErrorMsgChanged,
    });
  }
  //이스터에그
  if (name.toLocaleLowerCase() === "thank you") {
    setName("");
    setIsEasterEggsOn(true);
    return setTimeout(() => {
      setIsEasterEggsOn(false);
    }, 3000);
  }
  //생성 아이템
  const newItem: itemProps = {
    id: uuid(),
    itemType: itemType ? itemType : "Oral",
    timePeriod: timePeriod,
    date: "0000-00-00",
    name: name,
    hours: 0,
    minutes: 0,
    isTaken: false,
    frequency: frequency ? frequency : 0,
    leftDay: 0,
    takenDays: [],
    deletedDate: "",
  };
  //생성함수
  setList((prev) => {
    const updatedList = {
      ...prev,
      [timePeriod]: [...prev[timePeriod], newItem],
    };
    localStorage.setItem("medList", JSON.stringify(updatedList));
    return updatedList;
  });
  //생성 후 처리되는 함수들
  setName("");
  setItemType && setItemType("Oral");
  setFrequency && setFrequency(0);
  setIsSubmitted(true);
  setIsErrorMsgChanged(false);
  setErrorMsg(
    isEnglish ? "✓ the item got added." : "✓ 아이템이 추가되었습니다."
  );
  const newAddedItemNum = addedItemNum + 1;
  setAddedItemNum(newAddedItemNum);
  localStorage.setItem("addedItemNum", newAddedItemNum.toString());
  setTimeout(() => {
    setIsSubmitted(false);
    setErrorMsg("");
  }, 1500);

  vibrate(100);
};

interface ExceptionFunctionProps {
  errorMsg: string;
  setErrorMsg: (value: string) => void;
  setIsErrorMsgChanged: (value: boolean) => void;
}

const exceptionFunction = ({
  errorMsg,
  setErrorMsg,
  setIsErrorMsgChanged,
}: ExceptionFunctionProps) => {
  setIsErrorMsgChanged(true);
  setErrorMsg(errorMsg);
  vibrate(200);
  return setTimeout(() => {
    setErrorMsg("");
    setIsErrorMsgChanged(false);
  }, 2000);
};
