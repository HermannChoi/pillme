import { itemProps } from "@/app/types/types";
import { create } from "zustand";

interface TrashStoreProps {
  trashList: itemProps[];
  setTrashList: (value: itemProps[]) => void;
  moveToTrash: (value: itemProps | itemProps[]) => void;
  isTrashInitialLoad: boolean;
  setIsTrashInitialLoad: (value: boolean) => void;
}

const useTrashStore = create<TrashStoreProps>((set) => ({
  trashList: [],
  setTrashList: (value) => set({ trashList: value }),
  moveToTrash: (value) =>
    set((state) => ({
      trashList: Array.isArray(value)
        ? [...state.trashList, ...value]
        : [...state.trashList, value],
    })),
  isTrashInitialLoad: true,
  setIsTrashInitialLoad: (value) => set({ isTrashInitialLoad: value }),
}));

export default useTrashStore;
