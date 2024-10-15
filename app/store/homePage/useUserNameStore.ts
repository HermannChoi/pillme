import { create } from "zustand";

interface UseUserNameStoreProps {
  userName: string;
  setUserName: (value: string) => void;
  isSubmitted: boolean;
  setIsSubmitted: (value: boolean) => void;
  isUserNameInputOn: boolean;
  setIsUserNameInputOn: (value: boolean) => void;
  firstDate: string;
  setFirstDate: (value: string) => void;
  addedItemNum: number;
  setAddedItemNum: (value: number) => void;
  allActivatedTime: number;
  setAllActivatedTime: (value: number) => void;
}

const useUserNameStore = create<UseUserNameStoreProps>((set) => ({
  userName: "",
  setUserName: (value: string) => set({ userName: value }),
  isSubmitted: false,
  setIsSubmitted: (value) => set({ isSubmitted: value }),
  isUserNameInputOn: false,
  setIsUserNameInputOn: (value) => set({ isUserNameInputOn: value }),
  firstDate: "",
  setFirstDate: (value: string) => set({ firstDate: value }),
  addedItemNum: 0,
  setAddedItemNum: (value: number) => set({ addedItemNum: value }),
  allActivatedTime: 0,
  setAllActivatedTime: (value: number) => set({ allActivatedTime: value }),
}));

export default useUserNameStore;
