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
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate() + 1;
  const hours = today.getHours();
  const minutes = today.getMinutes();
  setList((prev) => ({
    ...prev,
    [timePeriod]: prev[timePeriod].map((item) =>
      item.id === id
        ? {
            ...item,
            isTaken: !item.isTaken,
            date: year + "-" + month + "-" + day,
            hours,
            minutes,
          }
        : item
    ),
  }));
};
