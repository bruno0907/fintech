import { useHome } from '../../hooks/useHome';

export function useNewTransactionController() {
  const {
    isNewTransactionModalOpen,
    handleCloseNewTransactionModal,
    newTransactionType
  } = useHome();

  return {
    isNewTransactionModalOpen,
    handleCloseNewTransactionModal,
    newTransactionType
  };
}
