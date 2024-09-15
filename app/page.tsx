"use client";
/** @jsxImportSource @emotion/react */

import { outlineSt } from "./style/outlineSt";
import CoverPage from "./components/CoverPage";
import CreateItemForm from "./components/CreateItemForm";
import ErrorMsg from "./components/ErrorMsg";
import ItemSection from "./components/ItemSection";
import Footer from "./components/Footer";
import InfoSec from "./components/InfoSec";
import UserNameSection from "./components/UserNameSection";
import UserNameInput from "./components/UserNameInput";
import UserNameResetBtn from "./components/UserNameResetBtn";
import Header from "./components/Header";

const Home = () => {
  return (
    <>
      <CoverPage />
      <UserNameInput />
      <Header />
      <main css={outlineSt.main}>
        <UserNameSection />
        <CreateItemForm />
        <ErrorMsg />
        <InfoSec />
        <ItemSection />
        <UserNameResetBtn />
      </main>
      <Footer />
    </>
  );
};

export default Home;
