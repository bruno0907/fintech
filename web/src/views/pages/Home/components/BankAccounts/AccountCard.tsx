import { BankAccount } from '../../../../../app/types/BankAccount';
import { cn } from '../../../../../app/utils/cn';
import { formatCurrency } from '../../../../../app/utils/formatCurrency';
import { BankAccountTypeIcon } from '../../../../../assets/icons/BankAccountTypeIcon';
import { useBankAccountController } from './useBankAccountsController';

interface AccountCardProps {
  account: BankAccount;
}

export function AccountCard({ account }: AccountCardProps) {
  const {
    areValuesVisible,
    handleOpenEditBankAccountModal
  } = useBankAccountController();

  return (
    <div
      role="button"
      className="h-[200px] bg-white rounded-2xl p-4 flex flex-col justify-between border-b-4 border-b-teal-950"
      style={{ borderBottomColor: account.color}}
      onClick={() => handleOpenEditBankAccountModal(account)}
    >
      <div>
        <BankAccountTypeIcon type={account.type} />
        <span className="text-gray-800 font-medium tracking-[-0.5px]">{account.name}</span>
      </div>

      <div>
        <span
          className={cn(
            'text-gray-800 font-medium tracking-[-0.5px] block transition-all',
            !areValuesVisible && 'blur-sm'
          )}>
          {formatCurrency(account.currentBalance)}
        </span>
        <small className="text-gray-600 text-sm">Saldo atual</small>
      </div>
    </div>
  );
}
