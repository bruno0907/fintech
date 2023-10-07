import { ReactNode, createContext, useCallback, useState } from "react";

interface HomeContextValue {
  areValuesVisible: boolean;
  toggleValuesVisibility: () => void;
}

interface HomeContextProviderProps {
  children: ReactNode;
}

export const HomeContext = createContext({} as HomeContextValue);

export function HomeProvider({ children }: HomeContextProviderProps) {
  const [areValuesVisible, setAreValuesVisible] = useState(false);

  const toggleValuesVisibility = useCallback(() => {
    setAreValuesVisible(prevState => !prevState);
  }, [])

  return (
    <HomeContext.Provider value={{
      areValuesVisible,
      toggleValuesVisibility,
    }}>
      {children}
    </HomeContext.Provider>
  )
}
