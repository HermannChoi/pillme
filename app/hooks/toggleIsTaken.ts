import { listProps } from "../types/types";

interface ToggleIsTakeProps {
  time: keyof listProps;
  id: string;
  setList: (prev: (prev: listProps) => listProps) => void;
}

export const toggleIsTaken = ({ time, id, setList }: ToggleIsTakeProps) => {
  setList((prev) => ({
    ...prev,
    [time]: prev[time].map((item) =>
      item.id === id ? { ...item, isTaken: !item.isTaken } : item
    ),
  }));
};
