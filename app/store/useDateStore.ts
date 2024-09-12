import { create } from "zustand";

interface UseDateStoreProps {
  isInitialLoad: boolean;
  setIsInitialLoad: (value: boolean) => void;
  lastCheckedDate: string | null;
  setLastCheckedDate: (date: string | null) => void;
  isDateChanged: boolean;
  setIsDateChanged: (value: boolean) => void;
}

const useDateStore = create<UseDateStoreProps>((set) => ({
  isInitialLoad: true,
  setIsInitialLoad: (value) => set({ isInitialLoad: value }),
  lastCheckedDate: null,
  setLastCheckedDate: (date) => set({ lastCheckedDate: date }),
  isDateChanged: false,
  setIsDateChanged: (value) => set({ isDateChanged: value }),
}));

export default useDateStore;
