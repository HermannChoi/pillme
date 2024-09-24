import CreateItemForm from "./components/CreateItemForm";
import ErrorMsg from "./components/ErrorMsg";
import ItemSection from "./components/ItemSection";
import InfoSec from "./components/InfoSec";
import UserNameSection from "./components/UserNameSection";
import UserNameRenameBtn from "./components/UserNameRenameBtn";
import ModalToDeleteItem from "./components/modals/ModalToDeleteItem";
import ModalToModifyTime from "./components/modals/ModalToModifyTime";
import ModalToRename from "./components/modals/ModalToRename";
import ModalToModifyDate from "./components/modals/ModalToModifyDate";

const Home = () => {
  return (
    <main>
      <UserNameSection />
      <CreateItemForm />
      <ErrorMsg />
      <InfoSec />
      <ItemSection />
      <ModalToDeleteItem />
      <ModalToModifyTime />
      <UserNameRenameBtn />
      <ModalToModifyDate />
      <ModalToRename />
    </main>
  );
};

export default Home;
