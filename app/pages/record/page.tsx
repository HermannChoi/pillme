import dynamic from "next/dynamic";

const RouteMainSection = dynamic(
  () => import("@/app/components/routePage/RouteMainSection")
);

const page = () => {
  return (
    <div className="defaultOutline">
      <RouteMainSection />
    </div>
  );
};

export default page;
