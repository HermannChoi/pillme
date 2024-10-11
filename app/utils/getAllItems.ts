import { listProps } from "../types/types";

export const getAllItems = (list: listProps) => {
  return [...list.Morning, ...list.Noon, ...list.Night, ...list.Any];
};
