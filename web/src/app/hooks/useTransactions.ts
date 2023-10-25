import { useQuery } from '@tanstack/react-query';
import { GetAllTransactionParams, transactionService } from '../../services/transaction/transactionService';

export function useTransactions(params: GetAllTransactionParams) {
  const { data, isFetching, isInitialLoading, refetch, isFetched } = useQuery({
    queryFn: async () => await transactionService.getAll(params),
    queryKey: ['transactions'],
  });

  return {
    transactions: data ?? [],
    isLoading: isFetching,
    isInitialLoading,
    refetchTransactions: refetch,
    isTransactionsFetched: isFetched
  };
}
