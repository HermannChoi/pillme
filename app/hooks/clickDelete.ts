import { listProps } from "../types/types";

export const clickDelete = (
  id: string,
  timePeriod: keyof listProps,
  setList: (prev: (prev: listProps) => listProps) => void
) => {
  setList((prev) => {
    return {
      ...prev,
      [timePeriod]: prev[timePeriod].filter((item) => item.id !== id),
    };
  });
};
