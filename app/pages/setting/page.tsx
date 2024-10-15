import dynamic from "next/dynamic";

const SettingPage = dynamic(
  () => import("@/app/components/settingPage/SettingPage")
);

const page = () => {
  return (
    <div className="showUpFromRight defaultOutline">
      <SettingPage />
    </div>
  );
};

export default page;
