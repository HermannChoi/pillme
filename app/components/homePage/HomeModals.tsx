import React from "react";
import ModalToDeleteItem from "../modals/ModalToDeleteItem";
import ModalToChooseModify from "../modals/ModalToChooseModify";
import ModalToModifyTime from "../modals/ModalToModifyTime";
import ModalToModifyDate from "../modals/ModalToModifyDate";
import ModalToShowLeftDay from "../modals/ModalToShowLeftDay";
import ModalToModifyLeftDay from "../modals/ModalToModifyLeftDay";
import ModalToChooseFrequency from "../modals/ModalToChooseFrequency";
import MessageModal from "../modals/MessageModal";

const HomeModals = () => {
  return (
    <>
      <ModalToDeleteItem />
      <ModalToChooseModify />
      <ModalToModifyTime />
      <ModalToModifyDate />
      <ModalToShowLeftDay />
      <ModalToModifyLeftDay />
      <ModalToChooseFrequency />
      <MessageModal />
    </>
  );
};

export default HomeModals;
