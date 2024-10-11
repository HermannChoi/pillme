"use client";
/** @jsxImportSource @emotion/react */

import { itemInformationPageSt } from "@/app/style/item-information/itemInformationPageSt";
import BasicInfoSection from "@/app/components/itemInformationPage/BasicInfoSection";
import Header from "@/app/components/itemInformationPage/Header";
import ItemCalendar from "@/app/components/itemInformationPage/ItemCalendar";
import ModalToDeleteItem from "@/app/components/modals/ModalToDeleteItem";
import BtnSection from "@/app/components/itemInformationPage/BtnSection";

const page = () => {
  return (
    <div css={itemInformationPageSt.container}>
      <Header />
      <div css={itemInformationPageSt.outerSection}>
        <BasicInfoSection />
        <ItemCalendar />
        <BtnSection />
      </div>
      <>
        <ModalToDeleteItem />
      </>
    </div>
  );
};

export default page;
