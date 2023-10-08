
import { Button } from '../../../../components/Button';
import { ColorsDropdownInput } from '../../../../components/ColorsDropdownInput';
import { Input } from '../../../../components/Input';
import { InputCurrency } from '../../../../components/InputCurrency';
import { Modal } from '../../../../components/Modal';
import { Select } from '../../../../components/Select';
import { useNewBankAccountController } from './useNewBankAccountController';

export function NewBankAccountModal() {
  const {
    isNewBankAccountModalOpen,
    handleCloseNewBankAccountModal
  } = useNewBankAccountController();

  return (
    <Modal title="Nova Conta" open={isNewBankAccountModalOpen} onClose={handleCloseNewBankAccountModal}>
      <form className='space-y-10'>
        <fieldset>
          <legend className='text-gray-600 tracking-[-0.5px] text-xs'>Saldo</legend>
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
            placeholder='Nome da Conta'
          />
          <Select
            name='type'
            placeholder='Tipo'
            options={[
              { value: 'CHECKING', label: 'Conta corrente' },
              { value: 'INVESTMENT', label: 'Investimentos' },
              { value: 'CASH', label: 'Dinheiro' },
            ]}
          />
          <ColorsDropdownInput
            name='color'
            placeholder='Cor'
          />
        </fieldset>

        <Button>Salvar</Button>
      </form>
    </Modal>
  );
}
