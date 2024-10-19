import { create } from "zustand";

interface UseDateStoreProps {
  isInitialLoad: boolean;
  setIsInitialLoad: (value: boolean) => void;

  isDateChanged: boolean;
  setIsDateChanged: (value: boolean) => void;
}

const useDateStore = create<UseDateStoreProps>((set) => ({
  isInitialLoad: true,
  setIsInitialLoad: (value) => set({ isInitialLoad: value }),
  isDateChanged: false,
  setIsDateChanged: (value) => set({ isDateChanged: value }),
}));

export default useDateStore;
