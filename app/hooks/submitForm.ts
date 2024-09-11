import { Dispatch, SetStateAction, SyntheticEvent } from "react";
import { v4 as uuidv4 } from "uuid";
import { itemProps, listProps } from "../types/types";

interface SubmitFormProps {
  e: SyntheticEvent;
  time: keyof listProps;
  name: string;
  list: listProps;
  setList: (prev: (prev: listProps) => listProps) => void;
  setIsSubmitted: Dispatch<SetStateAction<boolean>>;
  setName: Dispatch<SetStateAction<string>>;
  setTime: Dispatch<SetStateAction<keyof listProps>>;
  setErrorMsg: Dispatch<SetStateAction<string>>;
  setIsEMsgChanged: Dispatch<SetStateAction<boolean>>;
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
  setIsEMsgChanged,
}: SubmitFormProps) => {
  e.preventDefault();
  if (name === "") {
    setErrorMsg("Please write a name of the medicine");
    setIsEMsgChanged(true);
    return setTimeout(() => {
      setErrorMsg("Here your medicine");
      setIsEMsgChanged(false);
    }, 2000);
  }
  if (
    list[time].some((it) => {
      return it.name === name;
    })
  ) {
    setErrorMsg("It already exists on the time.");
    setIsEMsgChanged(true);
    return setTimeout(() => {
      setErrorMsg("Here your medicine");
      setIsEMsgChanged(false);
    }, 2000);
  }
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
