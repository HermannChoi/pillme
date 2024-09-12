"use client";
/** @jsxImportSource @emotion/react */

import { styles } from "./style/style";
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
    <div css={styles.container}>
      {!isCoverPageGone && <CoverPage />}
      <h1 css={styles.h1}>Take Medicine</h1>
      <main css={styles.main}>
        <CreateItemForm />
        <ErrorMsg />
        <InfoSec />
        <ItemSection />
        <Footer />
      </main>
    </div>
  );
}
