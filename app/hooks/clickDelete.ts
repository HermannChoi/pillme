import { SyntheticEvent } from "react";
import { listProps } from "../types/types";

export const clickDelete = (
  e: SyntheticEvent,
  id: string,
  time: keyof listProps,
  setList: (prev: (prev: listProps) => listProps) => void
) => {
  e.stopPropagation();
  setList((prev) => {
    return {
      ...prev,
      [time]: prev[time].filter((item) => item.id !== id),
    };
  });
};
