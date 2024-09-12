import { create } from "zustand";
import { listProps } from "../types/types";

interface UseFormStoreProps {
  name: string;
  setName: (value: string) => void;
  time: keyof listProps;
  setTime: (value: keyof listProps) => void;
  isSelectOpen: boolean;
  setIsSelectOpen: (value: boolean) => void;
  list: listProps;
  setList: (newList: listProps | ((prevList: listProps) => listProps)) => void;
  isSubmitted: boolean;
  setIsSubmitted: (value: boolean) => void;
}

const useFormStore = create<UseFormStoreProps>((set) => ({
  name: "",
  setName: (value) => set({ name: value }),
  time: "Morning",
  setTime: (value) => set({ time: value }),
  isSelectOpen: false,
  setIsSelectOpen: (value) => set({ isSelectOpen: value }),
  list: {
    Morning: [],
    Noon: [],
    Night: [],
    Any: [],
  },
  setList: (newList) => {
    set((state) => {
      if (typeof newList === "function") {
        return { list: newList(state.list) };
      }
      return { list: newList };
    });
  },

  isSubmitted: false,
  setIsSubmitted: (value) => set({ isSubmitted: value }),
}));

export default useFormStore;
