import { itemProps, listProps } from "../types/types";

export const clickModifyTime = (
  itemForModal: itemProps,
  setList: (prev: (prev: listProps) => listProps) => void
) => {
  setList((prev) => {
    return {
      ...prev,
      [itemForModal.timePeriod]: prev[
        itemForModal.timePeriod as keyof listProps
      ].map((item) => {
        return item.id === itemForModal.id
          ? {
              ...item,
              hours: itemForModal.hours,
              minutes: itemForModal.minutes,
            }
          : item;
      }),
    };
  });
};
