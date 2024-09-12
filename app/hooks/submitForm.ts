import { SyntheticEvent } from "react";
import { v4 as uuidv4 } from "uuid";
import { itemProps, listProps } from "../types/types";

interface SubmitFormProps {
  e: SyntheticEvent;
  time: keyof listProps;
  name: string;
  list: listProps;
  setList: (prev: (prev: listProps) => listProps) => void;
  setIsSubmitted: (value: boolean) => void;
  setName: (value: string) => void;
  setTime: (value: keyof listProps) => void;
  setErrorMsg: (value: string) => void;
  setIsErrorMsgChanged: (value: boolean) => void;
}

export const submitForm = ({
  e,
  time,
  name,
  list,
  setList,
  setIsSubmitted,
  setName,
  setTime,
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
    list[time].some((it) => {
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
    time: time,
    date: "M/D",
    name: name,
    isTaken: false,
  };
  //생성함수
  setList((prev) => {
    return {
      ...prev,
      [time]: [...prev[time], newItem],
    };
  });
  //생성 후 처리되는 함수들
  setIsSubmitted(true);
  setTimeout(() => {
    setIsSubmitted(false);
  }, 1000);

  setName("");
  setTime("Morning");
};
