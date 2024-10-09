import { create } from "zustand";
import { itemProps, modalList } from "../types/types";

interface UseModalStoreProps {
  whichModal: null | keyof modalList;
  setWhichModal: (value: null | keyof modalList) => void;
  itemForModal: itemProps;
  setItemForModal: (value: itemProps) => void;
  resetItemForModal: () => void;
  message: string;
  setMessage: (value: string) => void;
}

const defaultItemSetup = {
  id: "",
  timePeriod: "",
  date: "",
  name: "",
  hours: 0,
  minutes: 0,
  isTaken: false,
  frequency: 0,
  leftDay: 0,
  takenDays: [],
};

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
