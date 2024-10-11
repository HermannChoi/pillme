import { create } from "zustand";

interface UseSettingStoreProps {
  isEnglish: boolean;
  setIsEnglish: (value: boolean) => void;
  isSettingInitialLoad: boolean;
  setIsSettingInitialLoad: (value: boolean) => void;
}

const useSettingStore = create<UseSettingStoreProps>((set) => ({
  isEnglish: true,
  setIsEnglish: (value: boolean) => set({ isEnglish: value }),
  isSettingInitialLoad: true,
  setIsSettingInitialLoad: (value: boolean) =>
    set({ isSettingInitialLoad: value }),
}));

export default useSettingStore;
