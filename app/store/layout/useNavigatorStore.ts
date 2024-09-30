import { WhichPage } from "@/app/types/types";
import { create } from "zustand";

interface UseNavigatorStoreProps {
  whichPage: keyof WhichPage;
  setWhichPage: (value: keyof WhichPage) => void;
}

const useNavigatorStore = create<UseNavigatorStoreProps>((set) => ({
  whichPage: "Home",
  setWhichPage: (value: keyof WhichPage) => set({ whichPage: value }),
}));

export default useNavigatorStore;
