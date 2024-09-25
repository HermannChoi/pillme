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
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = today.getDate();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  setList((prev) => ({
    ...prev,
    [timePeriod]: prev[timePeriod].map((item) =>
      item.id === id
        ? item.isTaken
          ? //비활성화 할때는 토글만 변경
            {
              ...item,
              isTaken: !item.isTaken,
            }
          : //활성화 할 때는 시간 업데이트 추가
            {
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
