"use client";
/** @jsxImportSource @emotion/react */

import { itemInformationPageSt } from "@/app/style/item-information/itemInformationPageSt";
import BasicInfoSection from "@/app/components/itemInformationPage/BasicInfoSection";
import Header from "@/app/components/itemInformationPage/Header";
import ItemCalendar from "@/app/components/itemInformationPage/ItemCalendar";
import ModalToChooseFrequency from "@/app/components/modals/ModalToChooseFrequency";
import ModalToChooseModify from "@/app/components/modals/ModalToChooseModify";
import ModalToDeleteItem from "@/app/components/modals/ModalToDeleteItem";
import ModalToModifyTime from "@/app/components/modals/ModalToModifyTime";
import ModalToModifyDate from "@/app/components/modals/ModalToModifyDate";
import ModalToModifyLeftDay from "@/app/components/modals/ModalToModifyLeftDay";
import BtnSection from "@/app/components/itemInformationPage/BtnSection";

const page = () => {
  return (
    <div css={itemInformationPageSt.optionContainer}>
      <Header />
      <div css={itemInformationPageSt.outerSection}>
        <BasicInfoSection />
        <ItemCalendar />
        <BtnSection />
      </div>
      <>
        <ModalToChooseFrequency />
        <ModalToDeleteItem />
        <ModalToChooseModify />
        <ModalToModifyTime />
        <ModalToModifyDate />
        <ModalToModifyLeftDay />
        <ModalToChooseFrequency />
      </>
    </div>
  );
};

export default page;
