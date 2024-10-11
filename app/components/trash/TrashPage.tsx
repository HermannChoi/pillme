import React from "react";
import Title from "./Title";
import TrashInfoSection from "./TrashInfoSection";
import ClearAllBtn from "./ClearAllBtn";
import TrashSection from "./TrashSection";

const TrashPage = () => {
  return (
    <main>
      <Title />
      <TrashInfoSection />
      <ClearAllBtn />
      <TrashSection />
    </main>
  );
};

export default TrashPage;
