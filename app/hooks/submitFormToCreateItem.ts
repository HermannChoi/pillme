import { SyntheticEvent } from "react";
import { v4 as uuid } from "uuid";
import { itemProps, listProps } from "../types/types";
import { vibrate } from "../utils/vibrate";

interface SubmitFormToCreateItemProps {
  e: SyntheticEvent;
  timePeriod: keyof listProps;
  name: string;
  list: listProps;
  setList: (prev: (prev: listProps) => listProps) => void;
  setIsSubmitted: (value: boolean) => void;
  setName: (value: string) => void;
  setErrorMsg: (value: string) => void;
  setIsErrorMsgChanged: (value: boolean) => void;
  setIsEasterEggsOn: (value: boolean) => void;
  isEnglish: boolean;
}

export const submitFormToCreateItem = ({
  e,
  timePeriod,
  name,
  list,
  setList,
  setIsSubmitted,
  setName,
  setErrorMsg,
  setIsErrorMsgChanged,
  setIsEasterEggsOn,
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
    timePeriod: timePeriod,
    date: "0000-00-00",
    name: name,
    hours: 0,
    minutes: 0,
    isTaken: false,
    frequency: 0,
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
  setIsSubmitted(true);
  setIsErrorMsgChanged(false);
  setErrorMsg(
    isEnglish ? "✓ the item got added." : "✓ 아이템이 추가되었습니다."
  );
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
