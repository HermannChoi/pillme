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
  setList((prev) => ({
    ...prev,
    [clickedItem.timePeriod]: prev[
      clickedItem.timePeriod as keyof listProps
    ].map((item) =>
      item.id === clickedItem.id
        ? item.isTaken
          ? //비활성화 할때는 토글 변경 및 복용 기간에서 오늘 삭제
            {
              ...item,
              isTaken: !item.isTaken,
              takenDays: item.takenDays.filter(
                (day) => day === `${year}-${month}-${day}`
              ),
            }
          : //활성화 할 때는 시간 업데이트 추가
            {
              ...item,
              isTaken: !item.isTaken,
              date: year + "-" + month + "-" + day,
              hours,
              minutes,
              takenDays: [
                ...new Set([...item.takenDays, `${year}-${month}-${day}`]),
              ],
            }
        : item
    ),
  }));
};
