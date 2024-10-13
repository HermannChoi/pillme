import SettingSus from "@/app/components/settingPage/settingSuspense/SettingSus";
import dynamic from "next/dynamic";

const SettingPage = dynamic(
  () => import("@/app/components/settingPage/SettingPage"),
  {
    ssr: false,
    loading: () => <SettingSus />,
  }
);

const page = () => {
  return (
    <div className="showUpFromRight defaultOutline">
      <SettingPage />
    </div>
  );
};

export default page;
