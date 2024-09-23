import { create } from "zustand";
import { itemProps, listProps, modalList } from "../types/types";

interface itemInfoToDelete {
  id: string;
  name: string;
  timePeriod: keyof listProps;
}

interface UseModalStoreProps {
  whichModal: null | keyof modalList;
  setWhichModal: (value: null | keyof modalList) => void;
  itemInfoToDelete: itemInfoToDelete;
  setItemInfoToDelete: (itemInfo: itemInfoToDelete) => void;
  itemForModal: itemProps;
  setItemForModal: (value: itemProps) => void;
}

const useModalStore = create<UseModalStoreProps>((set) => ({
  whichModal: null,
  setWhichModal: (value) => set({ whichModal: value }),
  itemInfoToDelete: { id: "", name: "", timePeriod: "" as keyof listProps },
  setItemInfoToDelete: (itemInfo) => set({ itemInfoToDelete: itemInfo }),
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
}));

export default useModalStore;
