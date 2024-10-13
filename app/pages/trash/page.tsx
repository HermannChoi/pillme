import TrashSus from "@/app/components/trash/trashSuspense/TrashSus";
import dynamic from "next/dynamic";

const TrashPage = dynamic(() => import("@/app/components/trash/TrashPage"), {
  ssr: false,
  loading: () => <TrashSus />,
});

const page = () => {
  return (
    <div className="showUpFromTop defaultOutline">
      <TrashPage />
    </div>
  );
};

export default page;
