import { create } from "zustand";
import { listProps, modalList } from "../types/types";

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
}

const useModalStore = create<UseModalStoreProps>((set) => ({
  whichModal: null,
  setWhichModal: (value) => set({ whichModal: value }),
  itemInfoToDelete: { id: "", name: "", timePeriod: "" as keyof listProps },
  setItemInfoToDelete: (itemInfo) => set({ itemInfoToDelete: itemInfo }),
}));

export default useModalStore;
