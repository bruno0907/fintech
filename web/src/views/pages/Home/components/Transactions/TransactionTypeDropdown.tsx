import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import { TransactionsIcon } from '../../../../../assets/icons/TransactionsIcon';
import { DropdownMenu } from '../../../../components/DropdownMenu';
import { IncomeIcon } from '../../../../../assets/icons/IncomeIcon';
import { OutcomesIcon } from '../../../../../assets/icons/OutcomesIcon';
import { TransactionType } from '../../../../../app/types/TransactionType';

interface TransactionTypeDropdownProps {
  onSelect: (type: TransactionType | undefined) => void;
  selectedType: TransactionType | undefined
}

export function TransactionTypeDropdown({ onSelect, selectedType }: TransactionTypeDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleIsOpen() {
    setIsOpen(prevState => !prevState);
  }

  return (
    <DropdownMenu.Root open={isOpen} onOpenChange={handleIsOpen}>
      <DropdownMenu.Trigger>
        <button className="flex items-center gap-2">
          {selectedType === 'INCOME' && <IncomeIcon />}
          {selectedType === 'OUTCOME' && <OutcomesIcon />}
          {selectedType === undefined && <TransactionsIcon />}

          <span className="text-sm text-gray-800 tracking-[-0.5px] font-medium">
            {selectedType === 'INCOME' && 'Receitas'}
            {selectedType === 'OUTCOME' && 'Despesas'}
            {selectedType === undefined && 'Transações'}
          </span>
          {isOpen && <ChevronUpIcon className="text-gray-900" /> }
          {!isOpen && <ChevronDownIcon className="text-gray-900" />}
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content side="bottom" align="start" className="z-50">
        <DropdownMenu.Item onSelect={() => onSelect('INCOME')}>
          <IncomeIcon />
          <span>Receitas</span>
        </DropdownMenu.Item>
        <DropdownMenu.Item onSelect={() => onSelect('OUTCOME')}>
          <OutcomesIcon />
          <span>Despesas</span>
        </DropdownMenu.Item>
        <DropdownMenu.Item onSelect={() => onSelect(undefined)}>
          <TransactionsIcon />
          <span>Transações</span>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
