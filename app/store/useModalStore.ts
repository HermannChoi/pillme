import { create } from "zustand";
import { itemProps, modalList } from "../types/types";
import { defaultItemSetup } from "../constant/defaultItemSetup";

interface UseModalStoreProps {
  whichModal: null | keyof modalList;
  setWhichModal: (value: null | keyof modalList) => void;
  itemForModal: itemProps;
  setItemForModal: (value: itemProps) => void;
  resetItemForModal: () => void;
  message: string;
  setMessage: (value: string) => void;
}

const useModalStore = create<UseModalStoreProps>((set) => ({
  whichModal: null,
  setWhichModal: (value) => set({ whichModal: value }),
  itemForModal: defaultItemSetup,
  setItemForModal: (value) => set({ itemForModal: value }),
  resetItemForModal: () =>
    set({
      itemForModal: defaultItemSetup,
    }),
  message: "",
  setMessage: (value) => set({ message: value }),
}));

export default useModalStore;
