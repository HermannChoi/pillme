"use client";
/** @jsxImportSource @emotion/react */

import "@/app/style/homePage/calendarStyle.css";
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

const page = () => {
  return (
    <div css={itemInformationPageSt.optionContainer}>
      <Header />
      <div css={itemInformationPageSt.outerSection}>
        <BasicInfoSection />
        <ItemCalendar />
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
