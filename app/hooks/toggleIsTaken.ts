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
  const hours = String(today.getHours()).padStart(2, "0"); // 시를 2자리로 변환
  const minutes = String(today.getMinutes()).padStart(2, "0"); // 분을 2자리로 변환
  setList((prev) => ({
    ...prev,
    [timePeriod]: prev[timePeriod].map((item) =>
      item.id === id
        ? {
            ...item,
            isTaken: !item.isTaken,
            date: today.getMonth() + 1 + "/" + today.getDate(),
            time: hours + ":" + minutes,
          }
        : item
    ),
  }));
};
