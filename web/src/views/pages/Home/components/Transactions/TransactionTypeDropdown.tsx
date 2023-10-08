import { ChevronDownIcon } from "@radix-ui/react-icons";
import { FilterIcon } from "../../../../../assets/icons/FilterIcon";
import { TransactionsIcon } from "../../../../../assets/icons/TransactionsIcon";
import { DropdownMenu } from "../../../../components/DropdownMenu";
import { IncomeIcon } from "../../../../../assets/icons/IncomeIcon";
import { ExpensesIcon } from "../../../../../assets/icons/ExpensesIcon";

export function TransactionTypeDropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
      <div className="flex items-center justify-between">
        <button className="flex items-center gap-2">
          <TransactionsIcon />
          <span className="text-sm text-gray-800 tracking-[-0.5px] font-medium">Transações</span>
          <ChevronDownIcon className="text-gray-900" />
        </button>
        <button>
          <FilterIcon />
        </button>
      </div>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content side="bottom" align="start">
        <DropdownMenu.Item>
          <IncomeIcon />
          <span>Receitas</span>
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <ExpensesIcon />
          <span>Despesas</span>
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <TransactionsIcon />
          <span>Transações</span>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
