import { useState } from 'react';
import { useBankAccounts } from '../../../../../../app/hooks/useBankAccounts';
import { useTransactionsController } from '../useTransactionsController';

export function useFiltersModal() {
  const [selectedBankAccountId, setSelectedBankAccountId] = useState<undefined | string>(undefined);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const { accounts, isLoading } = useBankAccounts();
  const { transactionParams } = useTransactionsController();

  function handleSelecteBankAccountId(bankAccountId: string) {
    setSelectedBankAccountId(prevState => (
      prevState === bankAccountId ? undefined : bankAccountId
    ));
  }

  function handleSelectYear(step: number) {
    setSelectedYear(prevState => prevState + step);
  }

  return {
    selectedBankAccountId,
    handleSelecteBankAccountId,
    transactionParams,
    handleSelectYear,
    selectedYear,
    accounts,
    isLoading,
  };
}
