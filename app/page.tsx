import CreateItemForm from "./components/CreateItemForm";
import ErrorMsg from "./components/ErrorMsg";
import ItemSection from "./components/ItemSection";
import ModalToDeleteItem from "./components/modals/ModalToDeleteItem";
import ModalToModifyTime from "./components/modals/ModalToModifyTime";
import ModalToModifyDate from "./components/modals/ModalToModifyDate";
import InfoSection from "./components/InfoSection";
import MessageModal from "./components/modals/MessageModal";
import CongratsPage from "./components/CongratsPage";
import Footer from "./components/Footer";
import UserNameSection from "./components/UserNameSection";

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
      <ModalToModifyDate />
      <MessageModal />
      <CongratsPage />
      <Footer />
    </main>
  );
};

export default Home;
