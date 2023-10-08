
import { Button } from '../../../../components/Button';
import { DatePickerInput } from '../../../../components/DatePickerInput';
import { Input } from '../../../../components/Input';
import { InputCurrency } from '../../../../components/InputCurrency';
import { Modal } from '../../../../components/Modal';
import { Select } from '../../../../components/Select';
import { useNewTransactionController } from './useNewTransactionController';

export function NewTransactionModal() {
  const {
    isNewTransactionModalOpen,
    handleCloseNewTransactionModal,
    newTransactionType
  } = useNewTransactionController();

  const isExpense = newTransactionType === 'EXPENSE';

  return (
    <Modal
      title={isExpense ? 'Nova Despesa' : 'Nova Receita'}
      open={isNewTransactionModalOpen}
      onClose={handleCloseNewTransactionModal}
    >
      <form className='space-y-10'>
        <fieldset>
          <legend className='text-gray-600 tracking-[-0.5px] text-xs'>Valor {isExpense ? 'da despesa' : 'da receita'}</legend>
          <div className='w-full flex items-center justify-center gap-2'>
            <span className='text-gray-600 tracking-[-0.5px] text-md mt-1'>R$</span>
            <InputCurrency
              name='initialBalance'
            />
          </div>
        </fieldset>

        <fieldset className='space-y-4'>
          <Input
            type='text'
            name='name'
            placeholder={isExpense ? 'Nome da Despesa' : 'Nome da Receita'}
          />
          <Select
            name='category'
            placeholder='Categoria'
            options={[
              { value: 'CHECKING', label: 'Conta corrente' },
              { value: 'INVESTMENT', label: 'Investimentos' },
              { value: 'CASH', label: 'Dinheiro' },
            ]}
          />
          <Select
            name='type'
            placeholder={isExpense ? 'Pagar com' : 'Receber com'}
            options={[
              { value: 'CHECKING', label: 'Conta corrente' },
              { value: 'INVESTMENT', label: 'Investimentos' },
              { value: 'CASH', label: 'Dinheiro' },
            ]}
          />

          <DatePickerInput
            name='date'
            placeholder='Data'
          />
        </fieldset>

        <Button>Salvar</Button>
      </form>
    </Modal>
  );
}
