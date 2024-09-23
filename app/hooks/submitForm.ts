import { SyntheticEvent } from "react";
import { v4 as uuid } from "uuid";
import { itemProps, listProps } from "../types/types";
import { vibrate } from "../utils/vibrate";

interface SubmitFormProps {
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
}

export const submitForm = ({
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
}: SubmitFormProps) => {
  e.preventDefault();
  //예외처리
  if (name === "") {
    return exceptionFunction({
      errorMsg: "Please write a name of the medicine",
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
      errorMsg: "It already exists on the time.",
      setErrorMsg,
      setIsErrorMsgChanged,
    });
  }
  //이스터에그
  if (name.toLocaleLowerCase() === "thank you") {
    setIsEasterEggsOn(true);
    setTimeout(() => {
      setIsEasterEggsOn(false);
    }, 3000);
  }
  //생성 아이템
  const newItem: itemProps = {
    id: uuid(),
    timePeriod: timePeriod,
    date: "M/D",
    name: name,
    hours: 0,
    minutes: 0,
    isTaken: false,
  };
  //생성함수
  setList((prev) => {
    return {
      ...prev,
      [timePeriod]: [...prev[timePeriod], newItem],
    };
  });
  //생성 후 처리되는 함수들
  setName("");
  setIsSubmitted(true);
  setIsErrorMsgChanged(false);
  setErrorMsg("✓ the item got added.");
  setTimeout(() => {
    setIsSubmitted(false);
    setErrorMsg("");
  }, 1000);

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
