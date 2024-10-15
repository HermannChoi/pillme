"use client";
/** @jsxImportSource @emotion/react */

import useUserNameStore from "@/app/store/homePage/useUserNameStore";
import useNavigatorStore from "@/app/store/layout/useNavigatorStore";
import useSettingStore from "@/app/store/useSettingStore";
import { routeSt } from "@/app/style/route/routeSt";
import { useEffect, useState } from "react";

const RecordMainSection = () => {
  const [isAniDone, setIsAniDone] = useState(false);

  const {
    userName,
    firstDate,
    setFirstDate,
    addedItemNum,
    activatedTime,
    setActivatedTime,
    setAddedItemNum,
  } = useUserNameStore();
  const { setWhichPage } = useNavigatorStore();
  const { isEnglish, setIsEnglish } = useSettingStore();

  useEffect(() => {
    const storedFirstDate = localStorage.getItem("firstDate");
    storedFirstDate && setFirstDate(storedFirstDate);

    const storedActivatedTime = localStorage.getItem("activatedTime");
    storedActivatedTime && setActivatedTime(Number(storedActivatedTime));

    const storedAddedItemNum = localStorage.getItem("addedItemNum");
    storedAddedItemNum && setAddedItemNum(Number(storedAddedItemNum));

    setWhichPage("Record");
    setIsEnglish(localStorage.getItem("isEnglish") === "true");

    setTimeout(() => {
      setIsAniDone(true);
    }, 6000);
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
            <p css={routeSt.message}>
              {isEnglish ? `Hello, ${userName}!` : `안녕하세요, ${userName}님!`}
            </p>
            <p css={routeSt.message2}>
              {isEnglish
                ? `${userName} and Pillme met on ${firstDate.replaceAll(
                    "-",
                    "."
                  )} and have been together for ${getDays()} days!`
                : `${userName}님은 Pillme와 ${firstDate.replaceAll(
                    "-",
                    "."
                  )}에 만나
              함께 한지 ${getDays()}일이 되었어요!`}
            </p>
            <div css={routeSt.personalInfoContainer}>
              <div css={routeSt.personalInfoSection}>
                <p>
                  {isEnglish
                    ? "Total Activation Time : "
                    : "역대 아이템 활성화 횟수 : "}
                </p>
                <p>
                  {activatedTime.toLocaleString()} {isEnglish ? "times" : "번"}
                </p>
              </div>
              <div css={routeSt.personalInfoSection}>
                <p>
                  {isEnglish
                    ? "Total item added : "
                    : "역대 아이템 추가 개수 : "}
                </p>
                <p>
                  {addedItemNum.toLocaleString()} {isEnglish ? "items" : "개"}
                </p>
              </div>
            </div>
            <p css={routeSt.message}>
              {isEnglish
                ? `I will work harder to help you more!`
                : `앞으로 더 열심히 도움을 드리는 Pillme가 될게요!`}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default RecordMainSection;
