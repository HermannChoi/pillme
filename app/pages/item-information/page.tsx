import dynamic from "next/dynamic";

const ItemInfoPage = dynamic(
  () => import("@/app/components/itemInformationPage/ItemInfoPage")
);

const page = () => {
  return (
    <div className="showUpFromBottom defaultOutline">
      <ItemInfoPage />
    </div>
  );
};

export default page;
