"use client";
/** @jsxImportSource @emotion/react */

import Header from "./Header";
import ModalToDeleteItem from "../modals/ModalToDeleteItem";
import BasicInfoSection from "./BasicInfoSection";
import ItemCalendar from "./ItemCalendar";
import BtnSection from "./BtnSection";
import { itemInformationPageSt } from "@/app/style/item-information/itemInformationPageSt";
import MessageModal from "../modals/MessageModal";
import ModalToAddTakenDays from "../modals/ModalToAddTakenDays";
import ModalToDeleteTakenDays from "../modals/ModalToDeleteTakenDays";

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
          <ModalToAddTakenDays />
          <ModalToDeleteTakenDays />
          <MessageModal />
        </>
      </div>
    </div>
  );
};

export default ItemInfoPage;
