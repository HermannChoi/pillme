import { create } from "zustand";

interface UseCoverPageStoreProps {
  isCoverPageGone: boolean;
  setIsCoverPageGone: (value: boolean) => void;
}

const useCoverPageStore = create<UseCoverPageStoreProps>((set) => ({
  isCoverPageGone: false,
  setIsCoverPageGone: (value) => set({ isCoverPageGone: value }),
}));

export default useCoverPageStore;
