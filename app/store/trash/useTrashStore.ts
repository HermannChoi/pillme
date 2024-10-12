import { itemProps } from "@/app/types/types";
import { create } from "zustand";

interface TrashStoreProps {
  trashList: itemProps[];
  setTrashList: (value: itemProps[]) => void;
  moveToTrash: (value: itemProps | itemProps[]) => void;
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
}));

export default useTrashStore;
