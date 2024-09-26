import { create } from "zustand";

interface UseItemStoreProps {
  selectedItemId: null | string;
  setSelectedItemId: (value: null | string) => void;
  isEverythingTaken: boolean;
  setIsEverythingTaken: (value: boolean) => void;
  previousIsEverythingTaken: boolean;
  setPreviousIsEverythingTaken: (value: boolean) => void;
}

const useItemStore = create<UseItemStoreProps>((set) => ({
  selectedItemId: null,
  setSelectedItemId: (value) => set({ selectedItemId: value }),
  isEverythingTaken: false,
  setIsEverythingTaken: (value) => set({ isEverythingTaken: value }),
  previousIsEverythingTaken: false,
  setPreviousIsEverythingTaken: (value) =>
    set({ previousIsEverythingTaken: value }),
}));

export default useItemStore;
