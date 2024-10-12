import ModalToResetItem from "@/app/components/modals/ModalToResetItem";
import ModalToResetUsername from "@/app/components/modals/ModalToResetUsername";
import LanguageToggle from "@/app/components/settingPage/LanguageToggle";
import ResetButtons from "@/app/components/settingPage/ResetButtons";
import Title from "@/app/components/settingPage/Title";
import Trash from "@/app/components/settingPage/Trash";
import Footer from "@/app/components/layout/Footer";
import MessageModal from "../modals/MessageModal";

const SettingPage = () => {
  return (
    <main>
      <Title />
      <ResetButtons />
      <LanguageToggle />
      <Trash />
      <>
        <ModalToResetUsername />
        <ModalToResetItem />
        <MessageModal />
      </>
      <Footer />
    </main>
  );
};

export default SettingPage;
