import ClearAllBtn from "@/app/components/trash/ClearAllBtn";
import Title from "@/app/components/trash/Title";
import TrashInfoSection from "@/app/components/trash/TrashInfoSection";
import TrashSection from "@/app/components/trash/TrashSection";

const page = () => {
  return (
    <main>
      <Title />
      <TrashInfoSection />
      <ClearAllBtn />
      <TrashSection />
    </main>
  );
};

export default page;
