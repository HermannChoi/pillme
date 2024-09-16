import { listProps } from "../types/types";

export const clickDelete = (
  id: string,
  time: keyof listProps,
  setList: (prev: (prev: listProps) => listProps) => void
) => {
  setList((prev) => {
    return {
      ...prev,
      [time]: prev[time].filter((item) => item.id !== id),
    };
  });
};
