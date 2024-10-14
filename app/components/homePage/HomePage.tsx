import CreateItemForm from "./CreateItemForm";
import Header from "./Header";
import HomeModals from "./HomeModals";
import InfoSection from "./InfoSection";
import ItemSection from "./ItemSection";
import UserNameSection from "./UserNameSection";

const HomePage = () => {
  return (
    <main>
      <Header />
      <UserNameSection />
      <CreateItemForm />
      <InfoSection />
      <ItemSection />
      <HomeModals />
    </main>
  );
};

export default HomePage;
