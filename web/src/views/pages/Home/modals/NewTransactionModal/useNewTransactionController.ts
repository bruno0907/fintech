import { z } from 'zod';
import { useHome } from '../../hooks/useHome';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { queryClient } from '../../../../../app/config/queryClient';
import { useMutation } from '@tanstack/react-query';
import { transactionService } from '../../../../../services/transaction/transactionService';
import { toast } from 'react-hot-toast';
import { useBankAccounts } from '../../../../../app/hooks/useBankAccounts';
import { useCategories } from '../../../../../app/hooks/useCategories';
import { useMemo } from 'react';

const newTransactionSchema = z.object({
  value: z.string().nonempty('Informe o valor').refine(
    val => Number(val) !== 0, {
      message: 'Informe o valor'
    }
  ),
  name: z.string().nonempty('Informe o nome'),
  categoryId: z.string().nonempty('Informe a categoria'),
  bankAccountId: z.string().nonempty('Informe o tipo'),
  date: z.date()
});

type FormData = z.infer<typeof newTransactionSchema>;

export function useNewTransactionController() {

  const {
    isNewTransactionModalOpen,
    handleCloseNewTransactionModal,
    newTransactionType
  } = useHome();

  const { accounts } = useBankAccounts();
  const { categories: categoriesList } = useCategories();

  const categories = useMemo(() => {
    return categoriesList.filter(category => category.type === newTransactionType);
  }, [categoriesList, newTransactionType]);

  const { isLoading, mutateAsync } = useMutation({
    mutationFn: async (data: FormData) => transactionService.create({
      ...data,
      value: Number(data.value),
      type: newTransactionType!,
    }),
  });

  const { handleSubmit: onSubmit, register, control, reset, formState: { errors }} = useForm<FormData>({
    resolver: zodResolver(newTransactionSchema)
  });

  const handleSubmit = onSubmit(async (data: FormData) => {
    const isOutcome = newTransactionType === 'OUTCOME' ? 'Despesa' : 'Receita';

    try {
      await mutateAsync(data);
      queryClient.invalidateQueries({ queryKey: ['transactions']});
      queryClient.invalidateQueries({ queryKey: ['bank-accounts']});
      toast.success(`${isOutcome} cadastrada com sucesso!`);
      reset();
      handleCloseNewTransactionModal();
    } catch (error) {
      console.error(error);
      toast.error(`Ocorreu um erro ao cadastrar sua ${isOutcome}!`);
    }
  });

  return {
    isNewTransactionModalOpen,
    handleCloseNewTransactionModal,
    newTransactionType,
    isLoading,
    errors,
    register,
    control,
    handleSubmit,
    categories,
    accounts,
  };
}
