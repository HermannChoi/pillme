"use client";
/** @jsxImportSource @emotion/react */

import pill from "@/app/assets/svg/pill.svg";
import { outlineSt } from "@/app/style/homePage/outlineSt";
import { getKoreanDate } from "@/app/utils/getKoreanDate";
import Image from "next/image";

const Header = () => {
  return (
    <header css={outlineSt.header}>
      <div css={outlineSt.titleContainer}>
        <Image src={pill} alt="pill" priority={true} css={outlineSt.pillImg} />
        <h1 css={outlineSt.h1}>Pillme</h1>
      </div>
      <div>
        <p>{getKoreanDate().replaceAll("-", ".")}</p>
      </div>
    </header>
  );
};

export default Header;
