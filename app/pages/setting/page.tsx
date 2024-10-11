import Footer from "@/app/components/layout/Footer";
import ModalToResetItem from "@/app/components/modals/ModalToResetItem";
import ModalToResetUsername from "@/app/components/modals/ModalToResetUsername";
import LanguageToggle from "@/app/components/settingPage/LanguageToggle";
import ResetButtons from "@/app/components/settingPage/ResetButtons";
import Title from "@/app/components/settingPage/Title";
import Trash from "@/app/components/settingPage/Trash";

const page = () => {
  return (
    <main>
      <Title />
      <ResetButtons />
      <LanguageToggle />
      <Trash />
      <>
        <ModalToResetUsername />
        <ModalToResetItem />
      </>
      <Footer />
    </main>
  );
};

export default page;
