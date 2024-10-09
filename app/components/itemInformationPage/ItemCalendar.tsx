"use client";
/** @jsxImportSource @emotion/react */

import "@/app/style/item-information/calendarStyle.css";
import useModalStore from "@/app/store/useModalStore";
import useSettingStore from "@/app/store/useSettingStore";
import Calendar from "react-calendar";
import { itemInformationPageSt } from "@/app/style/item-information/itemInformationPageSt";

const ItemCalendar = () => {
  const { itemForModal } = useModalStore();
  const { isEnglish } = useSettingStore();

  return (
    <Calendar
      formatDay={(_, date) => date.getDate().toString()} // 일 제거 숫자만 보이게
      formatYear={(_, date) => date.getFullYear().toString()} // 네비게이션 눌렀을때 숫자 년도만 보이게
      formatMonthYear={(_, date) =>
        date.getFullYear().toString() + "." + (date.getMonth() + 1).toString()
      } // 네비게이션에서 2023. 12 이렇게 보이도록 설정
      calendarType="gregory" // 일요일 부터 시작
      showNeighboringMonth={false} // 전달, 다음달 날짜 숨기기
      next2Label={null} // +1년 & +10년 이동 버튼 숨기기
      prev2Label={null} // -1년 & -10년 이동 버튼 숨기기
      minDetail="year" // 10년단위 년도 숨기기
      tileContent={({ date, view }) => {
        const html = [];
        if (
          view === "month" &&
          date.getMonth() === new Date().getMonth() &&
          date.getDate() === new Date().getDate()
        ) {
          html.push(
            <div key={"today"} css={itemInformationPageSt.todayText}>
              {isEnglish ? "Today" : "오늘"}
            </div>
          );
        }
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0"); // 월을 2자리로 맞추기
        const day = String(date.getDate()).padStart(2, "0"); // 일을 2자리로 맞추기

        const formattedDate = `${year}-${month}-${day}`; // YYYY-MM-DD 형식
        if (itemForModal.takenDays.find((x) => x === formattedDate)) {
          html.push(
            <div key={formattedDate} css={itemInformationPageSt.takenDot} />
          );
        }
        return <>{html}</>;
      }}
    />
  );
};

export default ItemCalendar;
