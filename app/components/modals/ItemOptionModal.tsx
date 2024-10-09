"use client";
/** @jsxImportSource @emotion/react */

import {
  frequencyToEnglish,
  frequencyToKorean,
} from "@/app/constant/itemFrequency";
import useModalStore from "@/app/store/useModalStore";
import useSettingStore from "@/app/store/useSettingStore";
import { optionModalSt } from "@/app/style/homePage/optionModalSt";
import { modalSt } from "@/app/style/modalSt";
import Calendar from "react-calendar";
import "@/app/style/homePage/calendarStyle.css";

const ItemOptionModal = () => {
  const { whichModal, setWhichModal, itemForModal } = useModalStore();
  const { isEnglish } = useSettingStore();

  return (
    <div
      onClick={() => setWhichModal(null)}
      css={modalSt.background(whichModal, "itemOption")}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        css={optionModalSt.optionContainer}
      >
        <div css={optionModalSt.outerSection}>
          <div css={optionModalSt.nameSection}>
            <p css={optionModalSt.name}>{itemForModal.name}</p>
          </div>
          <div css={optionModalSt.infoSection}>
            <p>{isEnglish ? `Time Period : ` : `시간대 : `}</p>
            <p>{itemForModal.timePeriod}</p>
          </div>
          <div css={optionModalSt.infoSection}>
            <p>
              {isEnglish
                ? `Recent Date You Took : `
                : `마지막 복용(사용) 날짜 : `}
            </p>
            <p>{itemForModal.date}</p>
          </div>
          <div css={optionModalSt.infoSection}>
            <p>
              {isEnglish
                ? `Recent Time You Took : `
                : `마지막 복용(사용) 시간 : `}
            </p>
            <p>
              {itemForModal.hours.toString().padStart(2, "0") +
                ":" +
                itemForModal.minutes.toString().padStart(2, "0")}
            </p>
          </div>

          <div css={optionModalSt.infoSection}>
            <p>{isEnglish ? `Frequency : ` : `복용(사용) 빈도 : `}</p>
            <p>
              {isEnglish
                ? frequencyToEnglish[itemForModal.frequency]
                : frequencyToKorean[itemForModal.frequency]}
            </p>
          </div>
          <div css={optionModalSt.infoSection}>
            <p>
              {isEnglish
                ? `The Next Time to Take : `
                : `다음 복용(사용)까지 : `}
            </p>
            <p>D - {itemForModal.leftDay}</p>
          </div>
          <div css={optionModalSt.infoSection}>
            <p>
              {isEnglish ? `Number of Days to Take : ` : `복용(사용) 일 수 : `}
            </p>
            <p>
              {itemForModal.takenDays.length}
              {isEnglish ? `D` : `일`}
            </p>
          </div>
          <Calendar
            formatDay={(_, date) => date.getDate().toString()} // 일 제거 숫자만 보이게
            formatYear={(_, date) => date.getFullYear().toString()} // 네비게이션 눌렀을때 숫자 년도만 보이게
            formatMonthYear={(_, date) =>
              date.getFullYear().toString() +
              "." +
              (date.getMonth() + 1).toString()
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
                  <div key={"today"} css={optionModalSt.todayText}>
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
                  <div key={formattedDate} css={optionModalSt.takenDot} />
                );
              }
              return <>{html}</>;
            }}
          />
        </div>
        <div css={modalSt.btnContainer}>
          <button
            onClick={() => setWhichModal(null)}
            css={optionModalSt.optionCloseBtn}
          >
            {isEnglish ? `DONE` : `완료`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemOptionModal;
