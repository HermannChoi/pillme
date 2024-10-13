import { itemProps, listProps, modalList } from "../types/types";

interface ClickModifyOnModalProps {
  setWhichModal: (value: keyof modalList | null) => void;
  setMessage: (message: string) => void;
  isEnglish: boolean;
  clickModifyItem: (
    itemForModal: itemProps,
    setList: (prev: (prev: listProps) => listProps) => void
  ) => void;
  itemForModal: itemProps;
  setList: (prev: (prev: listProps) => listProps) => void;
}

export const clickModifyOnModal = ({
  setWhichModal,
  setMessage,
  isEnglish,
  clickModifyItem,
  itemForModal,
  setList,
}: ClickModifyOnModalProps) => {
  setWhichModal("message");
  setMessage(
    isEnglish ? "It successfully got modified." : "성공적으로 수정되었습니다."
  );
  clickModifyItem(itemForModal, setList);
};
