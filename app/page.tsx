"use client";
/** @jsxImportSource @emotion/react */

import { outlineSt } from "./style/outlineSt";
import CoverPage from "./components/CoverPage";
import CreateItemForm from "./components/CreateItemForm";
import ErrorMsg from "./components/ErrorMsg";
import ItemSection from "./components/ItemSection";
import Footer from "./components/Footer";
import useCoverPageStore from "./store/useCoverPageStore";
import InfoSec from "./components/InfoSec";

export default function Home() {
  const { isCoverPageGone } = useCoverPageStore();

  return (
    <div css={outlineSt.container}>
      {!isCoverPageGone && <CoverPage />}
      <h1 css={outlineSt.h1}>Take Medicine</h1>
      <main css={outlineSt.main}>
        <CreateItemForm />
        <ErrorMsg />
        <InfoSec />
        <ItemSection />
        <Footer />
      </main>
    </div>
  );
}
