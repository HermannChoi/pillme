import CreateItemForm from "./components/CreateItemForm";
import ErrorMsg from "./components/ErrorMsg";
import ItemSection from "./components/ItemSection";
import InfoSec from "./components/InfoSec";
import UserNameSection from "./components/UserNameSection";
import UserNameResetBtn from "./components/UserNameResetBtn";
import ModalToDeleteItem from "./components/ModalToDeleteItem";

const Home = () => {
  return (
    <main>
      <UserNameSection />
      <CreateItemForm />
      <ErrorMsg />
      <InfoSec />
      <ItemSection />
      <ModalToDeleteItem />
      <UserNameResetBtn />
    </main>
  );
};

export default Home;
