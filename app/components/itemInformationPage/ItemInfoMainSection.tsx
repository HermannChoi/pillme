"use client";
/** @jsxImportSource @emotion/react */

import { itemInformationPageSt } from "@/app/style/item-information/itemInformationPageSt";
import BasicInfoSection from "./BasicInfoSection";
import BtnSection from "./BtnSection";
import ItemCalendar from "./ItemCalendar";

const ItemInfoMainSection = () => {
  return (
    <div css={itemInformationPageSt.outerSection}>
      <BasicInfoSection />
      <ItemCalendar />
      <BtnSection />
    </div>
  );
};

export default ItemInfoMainSection;
