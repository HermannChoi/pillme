import { create } from "zustand";

interface UseErrorMsgStoreProps {
  errorMsg: string;
  setErrorMsg: (msg: string) => void;
  isErrorMsgChanged: boolean;
  setIsErrorMsgChanged: (value: boolean) => void;
}

const useErrorMsgStore = create<UseErrorMsgStoreProps>((set) => ({
  errorMsg: "",
  setErrorMsg: (msg) => set({ errorMsg: msg }),
  isErrorMsgChanged: false,
  setIsErrorMsgChanged: (value) => set({ isErrorMsgChanged: value }),
}));

export default useErrorMsgStore;
