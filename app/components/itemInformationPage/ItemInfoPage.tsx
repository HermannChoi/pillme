"use client";
/** @jsxImportSource @emotion/react */

import Header from "./Header";
import ModalToDeleteItem from "../modals/ModalToDeleteItem";
import BasicInfoSection from "./BasicInfoSection";
import ItemCalendar from "./ItemCalendar";
import BtnSection from "./BtnSection";
import { itemInformationPageSt } from "@/app/style/item-information/itemInformationPageSt";
import ModalToAddTakenDay from "../modals/ModalToAddTakenDay";

const ItemInfoPage = () => {
  return (
    <div css={itemInformationPageSt.container}>
      <Header />
      <div css={itemInformationPageSt.outerSection}>
        <BasicInfoSection />
        <ItemCalendar />
        <BtnSection />
        <>
          <ModalToDeleteItem />
          <ModalToAddTakenDay />
        </>
      </div>
    </div>
  );
};

export default ItemInfoPage;
