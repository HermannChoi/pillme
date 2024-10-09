import Footer from "@/app/components/layout/Footer";
import ModalToResetItem from "@/app/components/modals/ModalToResetItem";
import ModalToResetUsername from "@/app/components/modals/ModalToResetUsername";
import MainSection from "@/app/components/settingPage/MainSection";
import Title from "@/app/components/settingPage/Title";

const page = () => {
  return (
    <main>
      <Title />
      <MainSection />
      <ModalToResetUsername />
      <ModalToResetItem />
      <Footer />
    </main>
  );
};

export default page;
