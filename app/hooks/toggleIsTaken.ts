import { listProps } from "../types/types";

interface ToggleIsTakeProps {
  time: keyof listProps;
  id: string;
  setList: (prev: (prev: listProps) => listProps) => void;
}

export const toggleIsTaken = ({ time, id, setList }: ToggleIsTakeProps) => {
  const today = new Date();
  setList((prev) => ({
    ...prev,
    [time]: prev[time].map((item) =>
      item.id === id
        ? {
            ...item,
            isTaken: !item.isTaken,
            date: today.getMonth() + 1 + "/" + today.getDate(),
          }
        : item
    ),
  }));
};
