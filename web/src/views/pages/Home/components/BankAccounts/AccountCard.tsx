import { BankAccountType } from '../../../../../app/types/BankAccountType';
import { cn } from '../../../../../app/utils/cn';
import { formatCurrency } from '../../../../../app/utils/formatCurrency';
import { BankAccountTypeIcon } from '../../../../../assets/icons/BankAccountTypeIcon';
import { useBankAccountController } from './useBankAccountsController';

interface AccountCardProps {
  color: string;
  name: string;
  balance:number;
  type: BankAccountType;
}

export function AccountCard({ color, name, balance, type }: AccountCardProps) {
  const { areValuesVisible } = useBankAccountController();

  return (
    <div
      className="h-[200px] bg-white rounded-2xl p-4 flex flex-col justify-between border-b-4 border-b-teal-950"
      style={{ borderBottomColor: color}}
    >
      <div>
        <BankAccountTypeIcon type={type} />
        <span className="text-gray-800 font-medium tracking-[-0.5px]">{name}</span>
      </div>

      <div>
        <span
          className={cn(
            'text-gray-800 font-medium tracking-[-0.5px] block transition-all',
            !areValuesVisible && 'blur-sm'
          )}>
          {formatCurrency(balance)}
        </span>
        <small className="text-gray-600 text-sm">Saldo atual</small>
      </div>
    </div>
  );
}
