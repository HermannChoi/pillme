import CreateItemTitle from "@/app/components/item-createPage/CreateItemTitle";
import ItemSample from "@/app/components/item-createPage/ItemSample";
import MainCreateSection from "@/app/components/item-createPage/MainCreateSection";

const page = () => {
  return (
    <div className="showUpFromBottom defaultOutline">
      <main>
        <CreateItemTitle />
        <ItemSample />
        <MainCreateSection />
      </main>
    </div>
  );
};

export default page;
