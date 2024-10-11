import { useEffect } from "react";

const useInitialLoadChanger = (setIsInitialLoad: (value: boolean) => void) => {
  useEffect(() => {
    setIsInitialLoad(true);

    setTimeout(() => {
      setIsInitialLoad(false);
    }, 1000);
  }, [setIsInitialLoad]);
};

export default useInitialLoadChanger;
