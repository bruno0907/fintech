import { Button } from '../../../../../components/Button';
import { Modal } from '../../../../../components/Modal';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { cn } from '../../../../../../app/utils/cn';
import { useFiltersModal } from './useFiltersModal';
import { TransactionFiltersProps } from '../useTransactionsController';

interface FiltersModalProps {
  open: boolean;
  onClose: () => void;
  onApplyFilters: (params: TransactionFiltersProps) => void;
}

export function FiltersModal({ onClose, open, onApplyFilters }: FiltersModalProps) {
  const {
    selectedBankAccountId,
    handleSelecteBankAccountId,
    handleSelectYear,
    accounts,
    selectedYear
  } = useFiltersModal();

  return (
    <Modal title="Filtros" open={open} onClose={onClose}>
      <div className="space-y-10">

        <div className="space-y-2">
          <span className="text-lg tracking-[-1px] font-bold text-gray-800">
            Conta
          </span>

          <ul className="space-y-2">
            {accounts.map(account => {
              return (
                <li key={account.id}>
                  <button
                    className={cn(
                      'p-2 rounded-2xl w-full hover:bg-gray-100 text-gray-800',
                      selectedBankAccountId === account.id && 'bg-gray-200'
                    )}
                    onClick={() => handleSelecteBankAccountId(account.id)}
                  >
                    {account.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="space-y-2">
          <span className="text-lg tracking-[-1px] font-bold text-gray-800">
            Ano
          </span>
          <div className="w-52 text-gray-800 flex items-center justify-between gap-2">
            <button
              className="w-12 h-12 flex items-center justify-center"
              onClick={() => handleSelectYear(-1)}
            >
              <ChevronLeftIcon className="w-6 h-6 "/>
            </button>
            <span className="text-lg flex-1 text-center tracking-[-1px] font-medium text-gray-800">
              {selectedYear}
            </span>
            <button
              className="w-12 h-12 flex items-center justify-center"
              onClick={() => handleSelectYear(+1)}
            >
              <ChevronRightIcon className="w-6 h-6"/>
            </button>
          </div>
        </div>

        <Button onClick={() => onApplyFilters({
          bankAccountId: selectedBankAccountId,
          year: selectedYear
        })}>
          Aplicar filtros
        </Button>
      </div>
    </Modal>
  );
}
