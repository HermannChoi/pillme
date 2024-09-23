import { create } from "zustand";
import { itemProps, modalList } from "../types/types";

interface UseModalStoreProps {
  whichModal: null | keyof modalList;
  setWhichModal: (value: null | keyof modalList) => void;
  itemForModal: itemProps;
  setItemForModal: (value: itemProps) => void;
  resetItemForModal: () => void;
}

const useModalStore = create<UseModalStoreProps>((set) => ({
  whichModal: null,
  setWhichModal: (value) => set({ whichModal: value }),
  itemForModal: {
    id: "",
    timePeriod: "",
    date: "",
    name: "",
    hours: 0,
    minutes: 0,
    isTaken: false,
  },
  setItemForModal: (value) => set({ itemForModal: value }),
  resetItemForModal: () =>
    set({
      itemForModal: {
        id: "",
        timePeriod: "",
        date: "",
        name: "",
        hours: 0,
        minutes: 0,
        isTaken: false,
      },
    }),
}));

export default useModalStore;
