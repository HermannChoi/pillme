import MessageModal from "../modals/MessageModal";
import ModalToAddTakenDays from "../modals/ModalToAddTakenDays";
import ModalToChooseFrequency from "../modals/ModalToChooseFrequency";
import ModalToChooseModify from "../modals/ModalToChooseModify";
import ModalToDeleteItem from "../modals/ModalToDeleteItem";
import ModalToDeleteTakenDays from "../modals/ModalToDeleteTakenDays";
import ModalToModifyDate from "../modals/ModalToModifyDate";
import ModalToModifyLeftDay from "../modals/ModalToModifyLeftDay";
import ModalToModifyTime from "../modals/ModalToModifyTime";

const ItemInfoPageModals = () => {
  return (
    <>
      <ModalToChooseModify />
      <ModalToModifyDate />
      <ModalToModifyTime />
      <ModalToChooseFrequency />
      <ModalToModifyLeftDay />
      <ModalToDeleteItem />
      <ModalToAddTakenDays />
      <ModalToDeleteTakenDays />
      <MessageModal />
    </>
  );
};

export default ItemInfoPageModals;
