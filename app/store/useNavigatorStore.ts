import { create } from "zustand";
import { WhichPage } from "./../types/types";

interface UseNavigatorStoreProps {
  whichPage: keyof WhichPage;
  setWhichPage: (value: keyof WhichPage) => void;
}

const useNavigatorStore = create<UseNavigatorStoreProps>((set) => ({
  whichPage: "Home",
  setWhichPage: (value: keyof WhichPage) => set({ whichPage: value }),
}));

export default useNavigatorStore;
