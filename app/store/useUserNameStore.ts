import { create } from "zustand";

interface UseUserNameStoreProps {
  userName: string;
  setUserName: (value: string) => void;
  isSubmitted: boolean;
  setIsSubmitted: (value: boolean) => void;
  isUserNameInputOn: boolean;
  setIsUserNameInputOn: (value: boolean) => void;
}

const useUserNameStore = create<UseUserNameStoreProps>((set) => ({
  userName: "",
  setUserName: (value: string) => set({ userName: value }),
  isSubmitted: false,
  setIsSubmitted: (value) => set({ isSubmitted: value }),
  isUserNameInputOn: true,
  setIsUserNameInputOn: (value) => set({ isUserNameInputOn: value }),
}));

export default useUserNameStore;
