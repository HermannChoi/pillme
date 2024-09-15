import { SyntheticEvent } from "react";
import { v4 as uuidv4 } from "uuid";
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
  //생성 아이템
  const newItem: itemProps = {
    id: uuidv4(),
    timePeriod: timePeriod,
    date: "M/D",
    name: name,
    time: "00:00",
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
