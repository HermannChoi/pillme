import MessageModal from "../modals/MessageModal";
import ModalToAddTakenDays from "../modals/ModalToAddTakenDays";
import ModalToChooseFrequency from "../modals/ModalToChooseFrequency";
import ModalToChooseItemType from "../modals/ModalToChooseItemType";
import ModalToChooseModify from "../modals/ModalToChooseModify";
import ModalToChooseTimePeriod from "../modals/ModalToChooseTimePeriod";
import ModalToDeleteItem from "../modals/ModalToDeleteItem";
import ModalToDeleteTakenDays from "../modals/ModalToDeleteTakenDays";
import ModalToModifyDate from "../modals/ModalToModifyDate";
import ModalToModifyLeftDay from "../modals/ModalToModifyLeftDay";
import ModalToModifyTime from "../modals/ModalToModifyTime";
import ModalToShowLeftDay from "../modals/ModalToShowLeftDay";

const ItemInfoPageModals = () => {
  return (
    <>
      <ModalToChooseModify />
      <ModalToModifyDate />
      <ModalToModifyTime />
      <ModalToChooseItemType />
      <ModalToChooseTimePeriod />
      <ModalToChooseFrequency />
      <ModalToModifyLeftDay />
      <ModalToDeleteItem />
      <ModalToAddTakenDays />
      <ModalToDeleteTakenDays />
      <ModalToShowLeftDay />
      <MessageModal />
    </>
  );
};

export default ItemInfoPageModals;
