/* eslint-disable react-hooks/exhaustive-deps */
"use client";
/** @jsxImportSource @emotion/react */

import useSettingStore from "@/app/store/useSettingStore";
import { outlineSt } from "@/app/style/homePage/outlineSt";

const TrashInfoSection = () => {
  const { isEnglish } = useSettingStore();

  return (
    <div css={[outlineSt.infoSectionSt, `top: 0;`]}>
      <p>
        {isEnglish
          ? "* Items here will be removed after 7 days."
          : "* 삭제된 아이템은 7일 후에 자동으로 사라집니다."}
      </p>
    </div>
  );
};

export default TrashInfoSection;
