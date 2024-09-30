import ModalToResetItem from "@/app/components/modals/ModalToResetItem";
import ModalToResetUsername from "@/app/components/modals/ModalToResetUsername";
import MainSection from "@/app/components/settingPage/MainSection";

const page = () => {
  return (
    <main>
      <h1>Setting</h1>
      <MainSection />
      <ModalToResetUsername />
      <ModalToResetItem />
    </main>
  );
};

export default page;
