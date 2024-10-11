import ItemInfoSus from "@/app/components/itemInformationPage/itemInfoSuspense/ItemInfoSus";
import dynamic from "next/dynamic";

const ItemInfoPage = dynamic(
  () => import("@/app/components/itemInformationPage/ItemInfoPage"),
  {
    ssr: false,
    loading: () => <ItemInfoSus />,
  }
);

const page = () => {
  return <ItemInfoPage />;
};

export default page;
