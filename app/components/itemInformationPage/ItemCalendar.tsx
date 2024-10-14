/* eslint-disable react-hooks/exhaustive-deps */
"use client";
/** @jsxImportSource @emotion/react */

import { defaultItemSetup } from "@/app/constant/defaultItemSetup";
import useFormStore from "@/app/store/homePage/useFormStore";
import useModalStore from "@/app/store/useModalStore";
import useSettingStore from "@/app/store/useSettingStore";
import "@/app/style/item-information/calendarStyle.css";
import { itemInformationPageSt } from "@/app/style/item-information/itemInformationPageSt";
import { listProps } from "@/app/types/types";
import { getKoreanDate } from "@/app/utils/getKoreanDate";
import { useEffect } from "react";
import Calendar from "react-calendar";

export type Range<T> = [T, T];
type ValuePiece = Date | null;
export type Value = ValuePiece | Range<ValuePiece>;

const ItemCalendar = () => {
  const { list } = useFormStore();
  const { itemForModal, setItemForModal, whichModal, setWhichModal } =
    useModalStore();
  const { isEnglish } = useSettingStore();

  const handleDateChange = (newDate: Value) => {
    // YYYY-MM-DD 형태로 변환
    const date = new Date(String(newDate)!.split(" (")[0]);
    date.setHours(date.getHours() + 9);
    const dateToPut = date.toISOString().split("T")[0];

    const isTheDateAlreadyTaken = itemForModal.takenDays.find(
      (x) => x === dateToPut
    );

    const nowDate = new Date();
    const isNewDateToday = dateToPut === getKoreanDate();

    const hours = nowDate.getHours();
    const minutes = nowDate.getMinutes();

    setItemForModal({
      ...itemForModal,
      takenDays: isTheDateAlreadyTaken
        ? itemForModal.takenDays.filter((x) => x !== dateToPut)
        : [...itemForModal.takenDays, dateToPut],
      // 캘린더 추가 날짜가 오늘이면 토글 활성화 및 복용 날짜, 시간 추가
      isTaken: isNewDateToday
        ? isTheDateAlreadyTaken
          ? false
          : true
        : itemForModal.isTaken,
      date:
        isNewDateToday && !isTheDateAlreadyTaken
          ? dateToPut
          : itemForModal.date,
      hours:
        isNewDateToday && !isTheDateAlreadyTaken ? hours : itemForModal.hours,
      minutes:
        isNewDateToday && !isTheDateAlreadyTaken
          ? minutes
          : itemForModal.minutes,
    });
    setWhichModal(isTheDateAlreadyTaken ? "deleteTakenDays" : "addTakenDays");
  };

  useEffect(() => {
    if (whichModal === null && itemForModal !== defaultItemSetup) {
      const foundItem = list[itemForModal.timePeriod as keyof listProps].find(
        (item) => item.id === itemForModal.id
      );
      foundItem && setItemForModal(foundItem);
    }
  }, [whichModal]);

  return (
    <Calendar
      onChange={handleDateChange}
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
