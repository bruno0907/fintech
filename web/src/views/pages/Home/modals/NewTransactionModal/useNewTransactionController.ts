import { z } from 'zod';
import { useHome } from '../../hooks/useHome';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { queryClient } from '../../../../../app/config/queryClient';
import { useMutation, useQuery } from '@tanstack/react-query';
import { categoryService } from '../../../../../services/category/categoryService';
import { transactionService } from '../../../../../services/transaction/transactionService';
import { toast } from 'react-hot-toast';
import { useBankAccounts } from '../../../../../app/hooks/useBankAccounts';

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

  const { data: categories } = useQuery({
    queryFn: async () => categoryService.listAll(),
    queryKey: ['categories']
  });

  const { accounts } = useBankAccounts();

  const { isLoading, mutateAsync } = useMutation({
    mutationFn: async (data: FormData) => transactionService.create({
      ...data,
      value: Number(data.value),
      type: newTransactionType!
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
    categories: categories ?? [],
    accounts,
  };
}
