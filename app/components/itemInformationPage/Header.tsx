"use client";
/** @jsxImportSource @emotion/react */

import Link from "next/link";
import useSettingStore from "@/app/store/useSettingStore";
import { itemInformationPageSt } from "@/app/style/item-information/itemInformationPageSt";
import Image from "next/image";
import backArrow from "@/app/assets/svg/left-arrow.svg";

const Header = () => {
  const { isEnglish } = useSettingStore();
  return (
    <header css={itemInformationPageSt.header}>
      <Link href={"/"} css={itemInformationPageSt.backBtn}>
        <Image src={backArrow} alt="back" width={40} height={40} />
      </Link>
      <h1>{isEnglish ? `Information` : `정보`}</h1>
    </header>
  );
};

export default Header;
