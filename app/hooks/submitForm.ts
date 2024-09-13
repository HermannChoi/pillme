import { SyntheticEvent } from "react";
import { v4 as uuidv4 } from "uuid";
import { itemProps, listProps } from "../types/types";

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
    setErrorMsg("Please write a name of the medicine");
    setIsErrorMsgChanged(true);
    return setTimeout(() => {
      setErrorMsg("");
      setIsErrorMsgChanged(false);
    }, 2000);
  }
  if (
    list[timePeriod].some((it) => {
      return it.name === name;
    })
  ) {
    setErrorMsg("It already exists on the time.");
    setIsErrorMsgChanged(true);
    return setTimeout(() => {
      setErrorMsg("");
      setIsErrorMsgChanged(false);
    }, 2000);
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
  setIsSubmitted(true);
  setTimeout(() => {
    setIsSubmitted(false);
  }, 1000);

  setName("");
};
