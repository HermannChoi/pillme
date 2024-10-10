import { itemProps, listProps } from "../types/types";

interface ToggleIsTakeProps {
  clickedItem: itemProps;
  setList: (prev: (prev: listProps) => listProps) => void;
}

export const toggleIsTaken = ({ clickedItem, setList }: ToggleIsTakeProps) => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const todayString = `${year}-${month}-${day}`;

  setList((prev) => ({
    ...prev,
    [clickedItem.timePeriod]: prev[
      clickedItem.timePeriod as keyof listProps
    ].map((item) => {
      if (item.id === clickedItem.id) {
        if (item.isTaken) {
          // 비활성화 할때는 토글 변경 및 복용 기간에서 오늘 삭제
          return {
            ...item,
            isTaken: !item.isTaken,
            takenDays: item.takenDays.filter((day) => {
              return day !== todayString;
            }),
          };
        } else {
          // 활성화 할 때는 시간 업데이트 추가
          return {
            ...item,
            isTaken: !item.isTaken,
            date: year + "-" + month + "-" + day,
            hours,
            minutes,
            // new Set으로 날짜 중복 제거
            takenDays: [...new Set([...item.takenDays, todayString])],
          };
        }
      }
      return item;
    }),
  }));
};
