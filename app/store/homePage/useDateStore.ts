import { create } from "zustand";

interface UseDateStoreProps {
  isInitialLoad: boolean;
  setIsInitialLoad: (value: boolean) => void;
  storedDateState: string;
  setStoredDateState: (value: string) => void;
  isDateChanged: boolean;
  setIsDateChanged: (value: boolean) => void;
}

const useDateStore = create<UseDateStoreProps>((set) => ({
  isInitialLoad: true,
  setIsInitialLoad: (value) => set({ isInitialLoad: value }),
  storedDateState: "",
  setStoredDateState: (value) => set({ storedDateState: value }),
  isDateChanged: false,
  setIsDateChanged: (value) => set({ isDateChanged: value }),
}));

export default useDateStore;
