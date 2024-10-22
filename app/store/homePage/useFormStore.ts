import { ItemTypes, listProps } from "@/app/types/types";
import { create } from "zustand";

interface UseFormStoreProps {
  name: string;
  setName: (value: string) => void;
  itemType: keyof ItemTypes;
  setItemType: (value: keyof ItemTypes) => void;
  timePeriod: keyof listProps;
  setTimePeriod: (value: keyof listProps) => void;
  frequency: number;
  setFrequency: (value: number) => void;
  isSelectOpen: boolean;
  setIsSelectOpen: (value: boolean) => void;
  list: listProps;
  setList: (newList: listProps | ((prevList: listProps) => listProps)) => void;
  isSubmitted: boolean;
  setIsSubmitted: (value: boolean) => void;
  isEasterEggsOn: boolean;
  setIsEasterEggsOn: (value: boolean) => void;
}

const useFormStore = create<UseFormStoreProps>((set) => ({
  name: "",
  setName: (value) => set({ name: value }),
  itemType: "Oral",
  setItemType: (value) => set({ itemType: value }),
  timePeriod: "Morning",
  setTimePeriod: (value) => set({ timePeriod: value }),
  frequency: 1,
  setFrequency: (value) => set({ frequency: value }),
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
  isEasterEggsOn: false,
  setIsEasterEggsOn: (value) => set({ isEasterEggsOn: value }),
}));

export default useFormStore;
