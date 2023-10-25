import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { queryClient } from '../../../../../app/config/queryClient';
import { useMutation } from '@tanstack/react-query';
import { transactionService } from '../../../../../services/transaction/transactionService';
import { toast } from 'react-hot-toast';
import { useBankAccounts } from '../../../../../app/hooks/useBankAccounts';
import { useCategories } from '../../../../../app/hooks/useCategories';
import { useMemo, useState,  } from 'react';
import { Transaction } from '../../../../../app/types/Transaction';

const editTransactionSchema = z.object({
  id: z.string(),
  value: z.union([
    z.string().nonempty('Informe o valor'),
    z.number().nonnegative('Informe o valor'),
  ]),
  name: z.string().nonempty('Informe o nome'),
  categoryId: z.string().nonempty('Informe a categoria'),
  bankAccountId: z.string().nonempty('Informe o tipo'),
  date: z.date()
});

type FormData = z.infer<typeof editTransactionSchema>;

interface Props {
  transaction: null | Transaction;
  onClose: () => void;
}
export function useEditTransactionController({ transaction, onClose }: Props) {
  const [isDeleteTransactionModalOpen, setIsDeletingTransactionModalOpen] = useState(false);
  const { accounts } = useBankAccounts();
  const { categories: categoriesList } = useCategories();

  const categories = useMemo(() => {
    return categoriesList.filter(category => category.type === transaction!.type);
  }, [categoriesList, transaction]);

  const updateMutation = useMutation({
    mutationFn: async (data: FormData) => transactionService.update({
      id: data.id,
      bankAccountId: data.bankAccountId,
      categoryId: data.categoryId,
      date: data.date,
      name: data.name,
      type: transaction!.type,
      value: Number(data.value),
    }),
  });

  const { handleSubmit: onSubmit, register, control, reset, formState: { errors }} = useForm<FormData>({
    resolver: zodResolver(editTransactionSchema),
    defaultValues: {
      id: transaction!.id,
      bankAccountId: transaction!.bankAccountId,
      categoryId: transaction!.category?.id,
      name: transaction!.name,
      date: new Date(transaction!.date),
      value: transaction!.value
    }
  });

  const handleSubmit = onSubmit(async (data: FormData) => {
    const isOutcome = transaction!.type === 'OUTCOME' ? 'Despesa' : 'Receita';

    try {
      await updateMutation.mutateAsync(data);
      queryClient.invalidateQueries({ queryKey: ['transactions']});
      queryClient.invalidateQueries({ queryKey: ['bank-accounts']});
      toast.success(`${isOutcome} atualizada com sucesso!`);
      reset();
      onClose();
    } catch (error) {
      console.error(error);
      toast.error(`Ocorreu um erro ao atualizar sua ${isOutcome}!`);
    }
  });

  const deleteMutation = useMutation({
    mutationFn: async () => await transactionService.delete(transaction!.id)
  });

  async function handleDelete() {
    try {
      await deleteMutation.mutateAsync();
      queryClient.invalidateQueries(['transactions']);
      queryClient.invalidateQueries(['bank-accounts']);
      toast.success('Transação excluída com sucesso!');
      handleCloseDeleteModal();
      onClose();
    } catch (error) {
      console.error(error);
      toast.error('Ocorreu um erro com a exclusão a transação');
    }
  }

  function handleOpenDeleteModal() {
    setIsDeletingTransactionModalOpen(true);
  }

  function handleCloseDeleteModal() {
    setIsDeletingTransactionModalOpen(false);
  }

  return {
    isLoading: updateMutation.isLoading,
    errors,
    register,
    control,
    handleSubmit,
    categories,
    accounts,
    isDeleteTransactionModalOpen,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
    handleDelete,
    isDeleting: deleteMutation.isLoading
  };
}
