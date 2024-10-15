import dynamic from "next/dynamic";

const ItemCreatePage = dynamic(
  () => import("@/app/components/item-createPage/ItemCreatePage")
);

const page = () => {
  return (
    <div className="showUpFromBottom defaultOutline">
      <ItemCreatePage />
    </div>
  );
};

export default page;
