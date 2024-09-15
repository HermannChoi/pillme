"use client";
/** @jsxImportSource @emotion/react */

import { outlineSt } from "../style/outlineSt";
import Image from "next/image";
import pill from "@/app/assets/svg/pill.svg";

const Header = () => {
  return (
    <header css={outlineSt.header}>
      <Image src={pill} alt="pill" priority={true} width={30} height={30} />
      <h1 css={outlineSt.h1}>Take Medicine</h1>
    </header>
  );
};

export default Header;
