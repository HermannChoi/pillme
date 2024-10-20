import { itemProps, listProps } from "../types/types";

interface ToggleIsTakeProps {
  clickedItem: itemProps;
  activatedTime: number;
  setList: (prev: (prev: listProps) => listProps) => void;
  setActivatedTime: (value: number) => void;
}

export const toggleIsTaken = ({
  clickedItem,
  activatedTime,
  setList,
  setActivatedTime,
}: ToggleIsTakeProps) => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const todayString = `${year}-${month}-${day}`;

  setList((prev) => {
    const updatedList = {
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
            // 활성화 할 때 활성화 횟수 업데이트
            const storedActivatedTime: number | null = localStorage.getItem(
              "activatedTime"
            )
              ? parseInt(localStorage.getItem("activatedTime")!)
              : null;
            const newActivatedTime = storedActivatedTime
              ? storedActivatedTime + 1
              : activatedTime + 1;
            setActivatedTime(newActivatedTime);
            localStorage.setItem("activatedTime", newActivatedTime.toString());

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
    };
    localStorage.setItem("medList", JSON.stringify(updatedList));
    return updatedList;
  });
};
