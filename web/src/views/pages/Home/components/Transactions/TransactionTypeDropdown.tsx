import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import { TransactionsIcon } from '../../../../../assets/icons/TransactionsIcon';
import { DropdownMenu } from '../../../../components/DropdownMenu';
import { IncomeIcon } from '../../../../../assets/icons/IncomeIcon';
import { OutcomesIcon } from '../../../../../assets/icons/OutcomesIcon';
import { useState } from 'react';

export function TransactionTypeDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  function handleIsOpen() {
    setIsOpen(prevState => !prevState);
  }
  return (
    <DropdownMenu.Root open={isOpen} onOpenChange={handleIsOpen}>
      <DropdownMenu.Trigger>
        <button className="flex items-center gap-2">
          <TransactionsIcon />
          <span className="text-sm text-gray-800 tracking-[-0.5px] font-medium">Transações</span>
          {isOpen && <ChevronUpIcon className="text-gray-900" /> }
          {!isOpen && <ChevronDownIcon className="text-gray-900" />}
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content side="bottom" align="start" className="z-50">
        <DropdownMenu.Item>
          <IncomeIcon />
          <span>Receitas</span>
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <OutcomesIcon />
          <span>Despesas</span>
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <TransactionsIcon />
          <span>Transações</span>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
