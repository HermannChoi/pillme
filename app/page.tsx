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

const Home = () => {
  return (
    <>
      <CoverPage />
      <UserNameInput />
      <header css={outlineSt.header}>
        <h1 css={outlineSt.h1}>Take Medicine</h1>
      </header>
      <main css={outlineSt.main}>
        <UserNameSection />
        <CreateItemForm />
        <ErrorMsg />
        <InfoSec />
        <ItemSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
