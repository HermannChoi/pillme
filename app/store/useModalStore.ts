import { create } from "zustand";
import { listProps } from "../types/types";

interface itemInfoToDelete {
  id: string;
  name: string;
  timePeriod: keyof listProps;
}

interface UseModalStoreProps {
  isModalOn: boolean;
  setIsModalOn: (value: boolean) => void;
  itemInfoToDelete: itemInfoToDelete;
  setItemInfoToDelete: (itemInfo: itemInfoToDelete) => void;
}

const useModalStore = create<UseModalStoreProps>((set) => ({
  isModalOn: false,
  setIsModalOn: (value) => set({ isModalOn: value }),
  itemInfoToDelete: { id: "", name: "", timePeriod: "" as keyof listProps },
  setItemInfoToDelete: (itemInfo) => set({ itemInfoToDelete: itemInfo }),
}));

export default useModalStore;
