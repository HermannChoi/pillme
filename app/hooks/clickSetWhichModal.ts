import { SyntheticEvent } from "react";
import { itemProps, modalList } from "../types/types";

interface clickSetWhichModalProps {
  e: SyntheticEvent;
  whichModal: keyof modalList | null;
  setWhichModal: (value: keyof modalList | null) => void;
  item: itemProps;
  setItemForModal: (value: itemProps) => void;
}

export const clickSetWhichModal = ({
  e,
  whichModal,
  setWhichModal,
  item,
  setItemForModal,
}: clickSetWhichModalProps) => {
  e.stopPropagation();
  setWhichModal(whichModal);
  setItemForModal(item);
};
