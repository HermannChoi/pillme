import { itemProps, listProps } from "../types/types";

export const clickDelete = (
  itemForModal: itemProps,
  setList: (prev: (prev: listProps) => listProps) => void,
  moveToTrash: (value: itemProps) => void
) => {
  moveToTrash({
    ...itemForModal,
    deletedDate: new Date().toISOString().split("T")[0],
  });
  setList((prev) => {
    return {
      ...prev,
      [itemForModal.timePeriod]: prev[
        itemForModal.timePeriod as keyof listProps
      ].filter((item) => item.id !== itemForModal.id),
    };
  });
};
