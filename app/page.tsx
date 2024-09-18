import CreateItemForm from "./components/CreateItemForm";
import ErrorMsg from "./components/ErrorMsg";
import ItemSection from "./components/ItemSection";
import InfoSec from "./components/InfoSec";
import UserNameSection from "./components/UserNameSection";
import ModalToDeleteItem from "./components/ModalToDeleteItem";
import UserNameRenameBtn from "./components/UserNameRenameBtn";
import ModalToRename from "./components/ModalToRename";

const Home = () => {
  return (
    <main>
      <UserNameSection />
      <CreateItemForm />
      <ErrorMsg />
      <InfoSec />
      <ItemSection />
      <ModalToDeleteItem />
      <UserNameRenameBtn />
      <ModalToRename />
    </main>
  );
};

export default Home;
