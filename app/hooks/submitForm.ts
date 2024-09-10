import { Dispatch, SetStateAction, SyntheticEvent } from "react";
import { v4 as uuidv4 } from "uuid";
import { itemProps, listProps } from "../types/types";

interface SubmitFormProps {
  e: SyntheticEvent;
  time: keyof listProps;
  name: string;
  setList: (prev: (prev: listProps) => listProps) => void;
  setIsSubmitted: Dispatch<SetStateAction<boolean>>;
  setName: Dispatch<SetStateAction<string>>;
  setTime: Dispatch<SetStateAction<keyof listProps>>;
}

export const submitForm = ({
  e,
  time,
  name,
  setList,
  setIsSubmitted,
  setName,
  setTime,
}: SubmitFormProps) => {
  e.preventDefault();
  //
  //같은 time에 같은 이름 입력 시 예외처리 해주기
  //
  const newItem: itemProps = {
    id: uuidv4(),
    time: time,
    name: name,
    isTaken: false,
  };

  setList((prev) => {
    return {
      ...prev,
      [time]: [...prev[time], newItem],
    };
  });

  setIsSubmitted(true);
  setTimeout(() => {
    setIsSubmitted(false);
  }, 1000);

  setName("");
  setTime("Morning");
};
