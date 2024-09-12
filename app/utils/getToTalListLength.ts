import { listProps } from "./../types/types";

export const getTotalListLength = (list: listProps) => {
  return Object.values(list).reduce((sum, array) => sum + array.length, 0);
};
