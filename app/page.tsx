import CreateItemForm from "./components/CreateItemForm";
import ErrorMsg from "./components/ErrorMsg";
import ItemSection from "./components/ItemSection";
import InfoSec from "./components/InfoSec";
import UserNameSection from "./components/UserNameSection";
import UserNameInput from "./components/UserNameInput";
import UserNameResetBtn from "./components/UserNameResetBtn";

const Home = () => {
  return (
    <main>
      <UserNameInput />
      <UserNameSection />
      <CreateItemForm />
      <ErrorMsg />
      <InfoSec />
      <ItemSection />
      <UserNameResetBtn />
    </main>
  );
};

export default Home;
