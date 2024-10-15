import dynamic from "next/dynamic";

const TrashPage = dynamic(() => import("@/app/components/trash/TrashPage"), {});

const page = () => {
  return (
    <div className="showUpFromTop defaultOutline">
      <TrashPage />
    </div>
  );
};

export default page;
