import { ReactNode, createContext, useCallback, useState } from 'react';
import { BankAccount } from '../../../../app/types/BankAccount';

interface HomeContextValue {
  areValuesVisible: boolean;
  toggleValuesVisibility: () => void;

  isNewBankAccountModalOpen: boolean;
  handleOpenNewBankAccountModal: () => void;
  handleCloseNewBankAccountModal: () => void;

  isNewTransactionModalOpen: boolean;
  handleOpenNewTransactionModal: (type:  'INCOME' | 'OUTCOME') => void;
  handleCloseNewTransactionModal: () => void;

  newTransactionType: TransactionType;

  isEditBankAccountModalOpen: boolean;
  handleOpenEditBankAccountModal: (bankAccount: BankAccount) => void;
  handleCloseEditBankAccountModal: () => void;
  accountToEdit: null | BankAccount;

}

interface HomeContextProviderProps {
  children: ReactNode;
}

type TransactionType = null | 'INCOME' | 'OUTCOME'

export const HomeContext = createContext({} as HomeContextValue);

export function HomeProvider({ children }: HomeContextProviderProps) {
  const [areValuesVisible, setAreValuesVisible] = useState(false);
  const [isNewBankAccountModalOpen, setIsNewBankAccountModalOpen] = useState(false);
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  const [newTransactionType, setNewTransationType] = useState<TransactionType>(null);
  const [isEditBankAccountModalOpen, setIsEditBankAccountModalOpen] = useState(false);
  const [accountToEdit, setAccountToEdit] = useState<null | BankAccount>(null);

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

  const handleOpenEditBankAccountModal = useCallback((bankAccount: BankAccount) => {
    setAccountToEdit(bankAccount);
    setIsEditBankAccountModalOpen(true);
  }, []);

  const handleCloseEditBankAccountModal = useCallback(() => {
    setIsEditBankAccountModalOpen(false);
    setAccountToEdit(null);
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
      isEditBankAccountModalOpen,
      handleOpenEditBankAccountModal,
      handleCloseEditBankAccountModal,
      accountToEdit
    }}>
      {children}
    </HomeContext.Provider>
  );
}
