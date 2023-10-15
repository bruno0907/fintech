
import { Controller } from 'react-hook-form';
import { Button } from '../../../../components/Button';
import { ColorsDropdownInput } from '../../../../components/ColorsDropdownInput';
import { Input } from '../../../../components/Input';
import { InputCurrency } from '../../../../components/InputCurrency';
import { Modal } from '../../../../components/Modal';
import { Select } from '../../../../components/Select';
import { useEditBankAccountController } from './useEditBankAccountController';
import { BankAccountType } from '../../../../../app/types/BankAccountType';
import { TrashIcon } from '../../../../../assets/icons/TrashIcon';
import { ConfirmDeleteModal } from '../../../../components/ConfirmDeleteModal';


export function EditBankAccountModal() {
  const {
    isEditBankAccountModalOpen,
    handleCloseEditBankAccountModal,
    errors,
    handleSubmit,
    isUpdating,
    register,
    control,
    isDeleteModalOpen,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
    handleDeleteAccount,
    isDeleting
  } = useEditBankAccountController();

  if(isDeleteModalOpen) {
    return (
      <ConfirmDeleteModal
        onClose={handleCloseDeleteModal}
        title="Tem certeza que deseja excluir esta conta?"
        description="Ao excluir a conta, também serão excluídos todos os registros de receitas e despesas relacionados."
        onConfirm={handleDeleteAccount}
        onCancel={handleCloseDeleteModal}
        isDeleting={isDeleting}
      />
    );
  }

  return (
    <Modal
      title="Editar Conta"
      open={isEditBankAccountModalOpen}
      onClose={handleCloseEditBankAccountModal}
      rightAction={(
        <button onClick={handleOpenDeleteModal}>
          <TrashIcon className='text-red-900 h-6 w-6' />
        </button>
      )}
    >
      <form className='space-y-10' onSubmit={handleSubmit}>
        <fieldset>
          <legend className='text-gray-600 tracking-[-0.5px] text-xs'>Saldo inicial</legend>
          <div className='w-full flex justify-center gap-2'>
            <span className='text-gray-600 tracking-[-0.5px] text-md mt-1.5'>R$</span>
            <Controller
              control={control}
              name="initialBalance"
              defaultValue={0}
              render={({ field: { onChange, value }}) => (
                <InputCurrency
                  hasError={errors.initialBalance}
                  onChange={onChange}
                  value={value}
                  disabled={isUpdating}
                />
              )}
            />
          </div>
        </fieldset>

        <fieldset className='space-y-4'>
          <Input
            type='text'
            placeholder='Nome da Conta'
            hasError={errors.name}
            disabled={isUpdating}
            {...register('name')}
          />
          <Controller
            control={control}
            name="type"
            defaultValue={BankAccountType.CHECKING}
            render={({ field: { onChange, value }}) => (
              <Select
                placeholder='Tipo'
                disabled={isUpdating}
                options={[
                  { value: BankAccountType.CHECKING, label: 'Conta corrente' },
                  { value: BankAccountType.INVESTMENT, label: 'Investimentos' },
                  { value: BankAccountType.CASH, label: 'Dinheiro' },
                ]}
                hasError={errors.type}
                onChange={onChange}
                value={value}
              />
            )}
          />
          <Controller
            control={control}
            name="color"
            defaultValue=""
            render={({ field: { onChange, value }}) => (
              <ColorsDropdownInput
                placeholder='Cor'
                hasError={errors.color}
                onChange={onChange}
                value={value}
                disabled={isUpdating}
              />
            )}
          />
        </fieldset>

        <Button
          disabled={isUpdating}
          isLoading={isUpdating}
        >
          Salvar
        </Button>
      </form>
    </Modal>
  );
}
