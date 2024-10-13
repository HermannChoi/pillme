"use client";
/** @jsxImportSource @emotion/react */

import { itemInformationPageSt } from "@/app/style/item-information/itemInformationPageSt";

import BasicInfoSection from "./BasicInfoSection";
import BtnSection from "./BtnSection";
import Header from "./Header";
import ItemCalendar from "./ItemCalendar";
import ItemInfoPageModals from "./ItemInfoPageModals";

const ItemInfoPage = () => {
  return (
    <div css={itemInformationPageSt.container}>
      <Header />
      <div css={itemInformationPageSt.outerSection}>
        <BasicInfoSection />
        <ItemCalendar />
        <BtnSection />
        <ItemInfoPageModals />
      </div>
    </div>
  );
};

export default ItemInfoPage;
