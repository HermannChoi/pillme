import { create } from "zustand";

interface UseLoadingStoreProps {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
}

const useLoadingStore = create<UseLoadingStoreProps>((set) => ({
  isLoading: true,
  setIsLoading: (value: boolean) => set({ isLoading: value }),
}));

export default useLoadingStore;
