import ItemCreateSus from "@/app/components/item-createPage/itemCreateSus/ItemCreateSus";
import dynamic from "next/dynamic";

const ItemCreatePage = dynamic(
  () => import("@/app/components/item-createPage/ItemCreatePage"),
  { ssr: false, loading: () => <ItemCreateSus /> }
);

const page = () => {
  return (
    <div className="showUpFromBottom defaultOutline">
      <ItemCreatePage />
    </div>
  );
};

export default page;
