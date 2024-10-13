import { create } from "zustand";

interface UseItemStoreProps {
  isEverythingTaken: boolean;
  setIsEverythingTaken: (value: boolean) => void;
  previousIsEverythingTaken: boolean;
  setPreviousIsEverythingTaken: (value: boolean) => void;
}

const useItemStore = create<UseItemStoreProps>((set) => ({
  isEverythingTaken: false,
  setIsEverythingTaken: (value) => set({ isEverythingTaken: value }),
  previousIsEverythingTaken: false,
  setPreviousIsEverythingTaken: (value) =>
    set({ previousIsEverythingTaken: value }),
}));

export default useItemStore;
