import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("./components/homePage/HomePage"));

const Home = () => {
  return (
    <div className="showUpFromLeft defaultOutline">
      <HomePage />
    </div>
  );
};

export default Home;
