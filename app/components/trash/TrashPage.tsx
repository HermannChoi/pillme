import MessageModal from "../modals/MessageModal";
import ClearAllBtn from "./ClearAllBtn";
import Title from "./Title";
import TrashInfoSection from "./TrashInfoSection";
import TrashSection from "./TrashSection";

const TrashPage = () => {
  return (
    <main>
      <Title />
      <TrashInfoSection />
      <ClearAllBtn />
      <TrashSection />
      <>
        <MessageModal />
      </>
    </main>
  );
};

export default TrashPage;
