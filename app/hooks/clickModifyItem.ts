import { itemProps, listProps } from "../types/types";

export const clickModifyItem = (
  itemForModal: itemProps,
  setList: (prev: (prev: listProps) => listProps) => void
) => {
  setList((prev) => {
    const updatedList = {
      ...prev,
      [itemForModal.timePeriod]: prev[
        itemForModal.timePeriod as keyof listProps
      ].map((item) => {
        return item.id === itemForModal.id ? itemForModal : item;
      }),
    };
    localStorage.setItem("medList", JSON.stringify(updatedList));
    return updatedList;
  });
};
