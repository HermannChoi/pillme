import dynamic from "next/dynamic";
import HomePageSus from "./components/homePage/homeSuspense/HomePageSus";

const HomePage = dynamic(() => import("./components/homePage/HomePage"), {
  ssr: false,
  loading: () => <HomePageSus />,
});

const Home = () => {
  return (
    <div className="showUpFromLeft defaultOutline">
      <HomePage />
    </div>
  );
};

export default Home;
