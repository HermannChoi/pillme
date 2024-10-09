"use client";
/** @jsxImportSource @emotion/react */

import Image from "next/image";
import pill from "@/app/assets/svg/pill.svg";
import { outlineSt } from "@/app/style/homePage/outlineSt";

const Header = () => {
  return (
    <header css={outlineSt.header}>
      <Image src={pill} alt="pill" priority={true} css={outlineSt.pillImg} />
      <h1 css={outlineSt.h1}>Pillme</h1>
    </header>
  );
};

export default Header;
