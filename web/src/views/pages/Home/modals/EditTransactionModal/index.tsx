
import { Controller } from 'react-hook-form';
import { Button } from '../../../../components/Button';
import { DatePickerInput } from '../../../../components/DatePickerInput';
import { Input } from '../../../../components/Input';
import { InputCurrency } from '../../../../components/InputCurrency';
import { Modal } from '../../../../components/Modal';
import { Select } from '../../../../components/Select';
import { useEditTransactionController } from './useEditTransactionController';
import { Transaction } from '../../../../../app/types/Transaction';
import { ConfirmDeleteModal } from '../../../../components/ConfirmDeleteModal';
import { TrashIcon } from '@radix-ui/react-icons';

interface EditTransactionModalProps {
  transaction: null | Transaction,
  onClose: () => void;
  isOpen: boolean;
}

export function EditTransactionModal({ transaction, onClose, isOpen }: EditTransactionModalProps) {
  const {
    handleSubmit,
    isLoading,
    errors,
    control,
    register,
    accounts,
    categories,
    isDeleteTransactionModalOpen,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
    handleDelete,
    isDeleting
  } = useEditTransactionController({ transaction, onClose });

  if(isDeleteTransactionModalOpen) {
    return (
      <ConfirmDeleteModal
        onClose={handleCloseDeleteModal}
        title="Tem certeza que deseja excluir esta conta?"
        description="Ao excluir a conta, também serão excluídos todos os registros de receitas e despesas relacionados."
        onConfirm={handleDelete}
        onCancel={handleCloseDeleteModal}
        isDeleting={isDeleting}
      />
    );
  }

  const isOutcome = transaction?.type === 'OUTCOME';

  return (
    <Modal
      title={isOutcome ? 'Editar Despesa' : 'Editar Receita'}
      open={isOpen}
      onClose={onClose}
      rightAction={(
        <button onClick={handleOpenDeleteModal}>
          <TrashIcon className='text-red-900 h-6 w-6' />
        </button>
      )}
    >
      <form className='space-y-10' onSubmit={handleSubmit}>
        <fieldset>
          <legend className='text-gray-600 tracking-[-0.5px] text-xs'>Valor {isOutcome ? 'da despesa' : 'da receita'}</legend>
          <div className='w-full flex items-center justify-center gap-2'>
            <span className='text-gray-600 tracking-[-0.5px] text-md mt-1'>R$</span>
            <Controller
              control={control}
              name="value"
              defaultValue="0"
              render={({ field: { value, onChange} }) => (
                <InputCurrency
                  value={value}
                  onChange={onChange}
                  hasError={errors.value}
                  disabled={isLoading}
                />
              )}
            />
          </div>
        </fieldset>

        <fieldset className='space-y-4'>
          <Input
            type='text'
            placeholder={isOutcome ? 'Nome da Despesa' : 'Nome da Receita'}
            {...register('name')}
          />
          <Controller
            control={control}
            name="categoryId"
            defaultValue=""
            render={({ field: { value, onChange } }) => (
              <Select
                placeholder='Categoria'
                value={value}
                onChange={onChange}
                hasError={errors.categoryId}
                disabled={isLoading}
                options={categories.map(category => ({
                  value: category.id,
                  label: category.name
                }))}
              />
            )}
          />
          <Controller
            control={control}
            name="bankAccountId"
            defaultValue=""
            render={({ field: { value, onChange} }) => (
              <Select
                placeholder={isOutcome ? 'Pagar com' : 'Receber com'}
                disabled={isLoading}
                value={value}
                onChange={onChange}
                hasError={errors.bankAccountId}
                options={accounts.map(account => ({
                  value: account.id,
                  label: account.name
                }))}
              />
            )}
          />

          <Controller
            control={control}
            name="date"
            defaultValue={new Date()}
            render={({ field: { value, onChange } }) => (
              <DatePickerInput
                name='date'
                placeholder='Data'
                hasError={errors.date}
                value={value}
                onChange={onChange}
              />
            )}
          />
        </fieldset>

        <Button disabled={isLoading} isLoading={isLoading}>Salvar</Button>
      </form>
    </Modal>
  );
}
