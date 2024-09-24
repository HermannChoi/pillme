import { create } from "zustand";

interface UseItemStoreProps {
  selectedItemId: null | string;
  setSelectedItemId: (value: null | string) => void;
}

const useItemStore = create<UseItemStoreProps>((set) => ({
  selectedItemId: null,
  setSelectedItemId: (value) => set({ selectedItemId: value }),
}));

export default useItemStore;
