import CreateItemForm from "./components/CreateItemForm";
import ErrorMsg from "./components/ErrorMsg";
import ItemSection from "./components/ItemSection";
import UserNameSection from "./components/UserNameSection";
import UserNameRenameBtn from "./components/ResetButtons";
import ModalToDeleteItem from "./components/modals/ModalToDeleteItem";
import ModalToModifyTime from "./components/modals/ModalToModifyTime";
import ModalToModifyDate from "./components/modals/ModalToModifyDate";
import ModalToResetItem from "./components/modals/ModalToResetItem";
import ModalToResetUsername from "./components/modals/ModalToResetUsername";
import InfoSection from "./components/InfoSection";

const Home = () => {
  return (
    <main>
      <UserNameSection />
      <CreateItemForm />
      <ErrorMsg />
      <InfoSection />
      <ItemSection />
      <ModalToDeleteItem />
      <ModalToModifyTime />
      <UserNameRenameBtn />
      <ModalToModifyDate />
      <ModalToResetUsername />
      <ModalToResetItem />
    </main>
  );
};

export default Home;
