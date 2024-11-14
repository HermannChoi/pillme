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
      <InfoSection />
      <ItemSection />
      <HomeModals />
    </main>
  );
};

export default HomePage;
