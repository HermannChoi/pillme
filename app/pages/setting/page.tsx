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
  return <SettingPage />;
};

export default page;
