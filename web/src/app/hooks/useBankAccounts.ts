import { useQuery } from '@tanstack/react-query';
import { bankAccountService } from '../../services/bankAccount/bankAccountService';

export function useBankAccounts() {
  const { data, isLoading } = useQuery({
    queryKey: ['bank-accounts'],
    queryFn: async () => bankAccountService.getAll(),
  });
  return {
    accounts: data ?? [],
    isLoading
  };
}
