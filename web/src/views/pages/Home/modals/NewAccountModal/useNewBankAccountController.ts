import { useHome } from '../../hooks/useHome';

export function useNewBankAccountController() {
  const {
    isNewBankAccountModalOpen,
    handleCloseNewBankAccountModal
  } = useHome();

  return {
    isNewBankAccountModalOpen,
    handleCloseNewBankAccountModal
  };
}
