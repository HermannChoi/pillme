import dynamic from "next/dynamic";
import Header from "./components/homePage/Header";
import CreateItemFormSus from "./components/homePage/homeSuspense/CreateItemFormSus";
import InfoSectionSus from "./components/homePage/homeSuspense/InfoSectionSus";
import ItemSectionSus from "./components/homePage/homeSuspense/ItemSectionSus";
import UserNameSectionSus from "./components/homePage/homeSuspense/UserNameSectionSus";

const UserNameSection = dynamic(
  () => import("./components/homePage/UserNameSection"),
  { ssr: false, loading: () => <UserNameSectionSus /> }
);

const CreateItemForm = dynamic(
  () => import("./components/homePage/CreateItemForm"),
  { ssr: false, loading: () => <CreateItemFormSus /> }
);

const InfoSection = dynamic(() => import("./components/homePage/InfoSection"), {
  ssr: false,
  loading: () => <InfoSectionSus />,
});

const ItemSection = dynamic(() => import("./components/homePage/ItemSection"), {
  ssr: false,
  loading: () => <ItemSectionSus />,
});

const HomeModals = dynamic(() => import("./components/homePage/HomeModals"));

const Home = () => {
  return (
    <main className="showUpFromLeft">
      <Header />
      <UserNameSection />
      <CreateItemForm />
      <InfoSection />
      <ItemSection />
      <HomeModals />
    </main>
  );
};

export default Home;
