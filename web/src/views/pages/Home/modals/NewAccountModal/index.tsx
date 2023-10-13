
import { Controller } from 'react-hook-form';
import { Button } from '../../../../components/Button';
import { ColorsDropdownInput } from '../../../../components/ColorsDropdownInput';
import { Input } from '../../../../components/Input';
import { InputCurrency } from '../../../../components/InputCurrency';
import { Modal } from '../../../../components/Modal';
import { Select } from '../../../../components/Select';
import { useNewBankAccountController } from './useNewBankAccountController';
import { BankAccountType } from '../../../../../app/types/BankAccountType';

export function NewBankAccountModal() {
  const {
    isNewBankAccountModalOpen,
    handleCloseNewBankAccountModal,
    errors,
    handleSubmit,
    isLoading,
    register,
    control
  } = useNewBankAccountController();

  return (
    <Modal title="Nova Conta" open={isNewBankAccountModalOpen} onClose={handleCloseNewBankAccountModal}>
      <form className='space-y-10' onSubmit={handleSubmit}>
        <fieldset>
          <legend className='text-gray-600 tracking-[-0.5px] text-xs'>Saldo inicial</legend>
          <div className='w-full flex justify-center gap-2'>
            <span className='text-gray-600 tracking-[-0.5px] text-md mt-1.5'>R$</span>
            <Controller
              control={control}
              name="initialBalance"
              defaultValue="0"
              render={({ field: { onChange, value }}) => (
                <InputCurrency
                  hasError={errors.initialBalance}
                  onChange={onChange}
                  value={value}
                  disabled={isLoading}
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
            disabled={isLoading}
            {...register('name')}
          />
          <Controller
            control={control}
            name="type"
            defaultValue={BankAccountType.CHECKING}
            render={({ field: { onChange, value }}) => (
              <Select
                placeholder='Tipo'
                disabled={isLoading}
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
                disabled={isLoading}
              />
            )}
          />
        </fieldset>

        <Button
          disabled={isLoading}
          isLoading={isLoading}
        >
          Salvar
        </Button>
      </form>
    </Modal>
  );
}
