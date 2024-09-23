import { listProps } from "../types/types";

interface ToggleIsTakeProps {
  timePeriod: keyof listProps;
  id: string;
  setList: (prev: (prev: listProps) => listProps) => void;
}

export const toggleIsTaken = ({
  timePeriod,
  id,
  setList,
}: ToggleIsTakeProps) => {
  const today = new Date();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  setList((prev) => ({
    ...prev,
    [timePeriod]: prev[timePeriod].map((item) =>
      item.id === id
        ? {
            ...item,
            isTaken: !item.isTaken,
            date: today.getMonth() + 1 + "/" + today.getDate(),
            hours,
            minutes,
          }
        : item
    ),
  }));
};
