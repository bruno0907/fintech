import { ReactNode, createContext, useCallback, useState } from 'react';

interface HomeContextValue {
  areValuesVisible: boolean;
  toggleValuesVisibility: () => void;
  isNewBankAccountModalOpen: boolean;
  handleOpenNewBankAccountModal: () => void;
  handleCloseNewBankAccountModal: () => void;
}

interface HomeContextProviderProps {
  children: ReactNode;
}

export const HomeContext = createContext({} as HomeContextValue);

export function HomeProvider({ children }: HomeContextProviderProps) {
  const [areValuesVisible, setAreValuesVisible] = useState(false);
  const [isNewBankAccountModalOpen, setIsNewBankAccountModalOpen] = useState(true);

  const toggleValuesVisibility = useCallback(() => {
    setAreValuesVisible(prevState => !prevState);
  }, []);

  const handleOpenNewBankAccountModal = useCallback(() => {
    console.log('abriu');
    setIsNewBankAccountModalOpen(true);
  }, []);

  const handleCloseNewBankAccountModal = useCallback(() => {
    console.log('fechou');
    setIsNewBankAccountModalOpen(false);
  }, []);

  return (
    <HomeContext.Provider value={{
      areValuesVisible,
      toggleValuesVisibility,
      isNewBankAccountModalOpen,
      handleOpenNewBankAccountModal,
      handleCloseNewBankAccountModal,
    }}>
      {children}
    </HomeContext.Provider>
  );
}
