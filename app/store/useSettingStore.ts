import { create } from "zustand";

interface UseSettingStoreProps {
  isEnglish: boolean;
  setIsEnglish: (value: boolean) => void;
}

const useSettingStore = create<UseSettingStoreProps>((set) => ({
  isEnglish: true,
  setIsEnglish: (value: boolean) => set({ isEnglish: value }),
}));

export default useSettingStore;
