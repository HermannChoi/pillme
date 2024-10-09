import CongratsPage from "./components/homePage/CongratsPage";
import CreateItemForm from "./components/homePage/CreateItemForm";
import Header from "./components/homePage/Header";
import InfoSection from "./components/homePage/InfoSection";
import ItemSection from "./components/homePage/ItemSection";
import UserNameSection from "./components/homePage/UserNameSection";
import ItemOptionModal from "./components/modals/ItemOptionModal";
import MessageModal from "./components/modals/MessageModal";
import ModalToChooseFrequency from "./components/modals/ModalToChooseFrequency";
import ModalToChooseModify from "./components/modals/ModalToChooseModify";
import ModalToDeleteItem from "./components/modals/ModalToDeleteItem";
import ModalToModifyDate from "./components/modals/ModalToModifyDate";
import ModalToModifyLeftDay from "./components/modals/ModalToModifyLeftDay";
import ModalToModifyTime from "./components/modals/ModalToModifyTime";
import ModalToShowLeftDay from "./components/modals/ModalToShowLeftDay";

const Home = () => {
  return (
    <main>
      <Header />
      <UserNameSection />
      <CreateItemForm />
      <InfoSection />
      <ItemSection />
      <ItemOptionModal />
      <ModalToDeleteItem />
      <ModalToChooseModify />
      <ModalToModifyTime />
      <ModalToModifyDate />
      <ModalToShowLeftDay />
      <ModalToModifyLeftDay />
      <ModalToChooseFrequency />
      <MessageModal />
      <CongratsPage />
    </main>
  );
};

export default Home;
