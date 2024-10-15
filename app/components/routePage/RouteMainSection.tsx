"use client";
/** @jsxImportSource @emotion/react */

import useUserNameStore from "@/app/store/homePage/useUserNameStore";
import { routeSt } from "@/app/style/route/routeSt";
import { useEffect, useState } from "react";

const RouteMainSection = () => {
  const [isAniDone, setIsAniDone] = useState(false);

  const { userName, firstDate, setFirstDate, addedItemNum, allActivatedTime } =
    useUserNameStore();

  useEffect(() => {
    const storedFirstDate = localStorage.getItem("firstDate");
    storedFirstDate && setFirstDate(storedFirstDate);

    setTimeout(() => {
      setIsAniDone(true);
    }, 7000);
  }, [setFirstDate]);

  const getDays = () => {
    const startDate = new Date(firstDate);
    const endDate = new Date();
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <section css={routeSt.outline}>
      <p css={routeSt.check}>✓</p>
      <div css={routeSt.infoContainer}>
        <div css={routeSt.progressBarContainer}>
          <div css={routeSt.progressBar} />
        </div>
        {isAniDone && (
          <div css={routeSt.messageContainer}>
            <p css={routeSt.message}>안녕하세요, {userName}님!</p>
            <p css={routeSt.message2}>
              {userName}님은 Pillme와 {firstDate.replaceAll("-", ".")}에 만나서
              함께 한지 {getDays()}일이 되었어요!
            </p>
            <div css={routeSt.personalInfoContainer}>
              <div css={routeSt.personalInfoSection}>
                <p>모든 아이템을 활성화한 일 수 : </p>
                <p>{allActivatedTime}D</p>
              </div>
              <div css={routeSt.personalInfoSection}>
                <p>역대 아이템 추가 개수 : </p>
                <p>{addedItemNum}개</p>
              </div>
            </div>
            <p css={routeSt.message}>
              앞으로 더 열심히 도움을 드리는 Pillme가 될게요!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default RouteMainSection;
