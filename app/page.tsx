import CongratsPage from "./components/homePage/CongratsPage";
import CreateItemForm from "./components/homePage/CreateItemForm";
import ErrorMsg from "./components/homePage/ErrorMsg";
import Header from "./components/homePage/Header";
import InfoSection from "./components/homePage/InfoSection";
import ItemSection from "./components/homePage/ItemSection";
import UserNameSection from "./components/homePage/UserNameSection";
import MessageModal from "./components/modals/MessageModal";
import ModalToChooseFrequency from "./components/modals/ModalToChooseFrequency";
import ModalToChooseModify from "./components/modals/ModalToChooseModify";
import ModalToDeleteItem from "./components/modals/ModalToDeleteItem";
import ModalToModifyDate from "./components/modals/ModalToModifyDate";
import ModalToModifyTime from "./components/modals/ModalToModifyTime";

const Home = () => {
  return (
    <main>
      <Header />
      <UserNameSection />
      <CreateItemForm />
      <ErrorMsg />
      <InfoSection />
      <ItemSection />
      <ModalToDeleteItem />
      <ModalToChooseModify />
      <ModalToModifyTime />
      <ModalToModifyDate />
      <ModalToChooseFrequency />
      <MessageModal />
      <CongratsPage />
    </main>
  );
};

export default Home;
