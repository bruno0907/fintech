
import { Modal } from '../../../../components/Modal';
import { useNewBankAccountController } from './useNewBankAccountController';

export function NewBankAccountModal() {
  const {
    isNewBankAccountModalOpen,
    handleCloseNewBankAccountModal
  } = useNewBankAccountController();

  console.log({ isNewBankAccountModalOpen });

  return (
    <Modal title="Nova Conta" open={isNewBankAccountModalOpen} onClose={handleCloseNewBankAccountModal}>
      <h1>Alô!</h1>
    </Modal>
  );
}
