import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react"; 

type LoadingContextType = {
  isLoading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
};

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0);

  const startLoading = () => setCount((prev) => prev + 1);
  const stopLoading = () => setCount((prev) => Math.max(prev - 1, 0));

  const value = {
    isLoading: count > 0,
    startLoading,
    stopLoading,
  };

  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context)
    throw new Error("useLoading must be used inside a LoadingProvider");
  return context;
};
