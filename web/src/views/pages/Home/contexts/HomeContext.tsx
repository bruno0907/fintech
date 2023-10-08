import { ReactNode, createContext, useCallback, useState } from 'react';

interface HomeContextValue {
  areValuesVisible: boolean;
  toggleValuesVisibility: () => void;

  isNewBankAccountModalOpen: boolean;
  handleOpenNewBankAccountModal: () => void;
  handleCloseNewBankAccountModal: () => void;

  isNewTransactionModalOpen: boolean;
  handleOpenNewTransactionModal: (type:  'INCOME' | 'EXPENSE') => void;
  handleCloseNewTransactionModal: () => void;

  newTransactionType: TransactionType;
}

interface HomeContextProviderProps {
  children: ReactNode;
}

type TransactionType = null | 'INCOME' | 'EXPENSE'

export const HomeContext = createContext({} as HomeContextValue);

export function HomeProvider({ children }: HomeContextProviderProps) {
  const [areValuesVisible, setAreValuesVisible] = useState(false);
  const [isNewBankAccountModalOpen, setIsNewBankAccountModalOpen] = useState(false);
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(true);
  const [newTransactionType, setNewTransationType] = useState<TransactionType>(null);

  const toggleValuesVisibility = useCallback(() => {
    setAreValuesVisible(prevState => !prevState);
  }, []);

  const handleOpenNewBankAccountModal = useCallback(() => {
    setIsNewBankAccountModalOpen(true);
  }, []);

  const handleCloseNewBankAccountModal = useCallback(() => {
    setIsNewBankAccountModalOpen(false);
  }, []);

  const handleOpenNewTransactionModal = useCallback((type: TransactionType) => {
    setNewTransationType(type);
    setIsNewTransactionModalOpen(true);
  }, []);
  const handleCloseNewTransactionModal = useCallback(() => {
    setNewTransationType(null);
    setIsNewTransactionModalOpen(false);
  }, []);

  return (
    <HomeContext.Provider value={{
      areValuesVisible,
      toggleValuesVisibility,
      isNewBankAccountModalOpen,
      handleOpenNewBankAccountModal,
      handleCloseNewBankAccountModal,
      isNewTransactionModalOpen,
      handleOpenNewTransactionModal,
      handleCloseNewTransactionModal,
      newTransactionType,
    }}>
      {children}
    </HomeContext.Provider>
  );
}
