import { itemProps, listProps } from "../types/types";

export const clickDelete = (
  item: itemProps,
  setList: (prev: (prev: listProps) => listProps) => void
) => {
  setList((prev) => {
    return {
      ...prev,
      [item.timePeriod]: prev[item.timePeriod as keyof listProps].filter(
        (item) => item.id !== item.id
      ),
    };
  });
};
