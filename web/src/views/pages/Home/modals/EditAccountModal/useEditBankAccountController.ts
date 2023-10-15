import { useMutation } from '@tanstack/react-query';
import { useHome } from '../../hooks/useHome';
import { bankAccountService } from '../../../../../services/bankAccount/bankAccountService';
import { toast } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { BankAccountType } from '../../../../../app/types/BankAccountType';
import { zodResolver } from '@hookform/resolvers/zod';
import { queryClient } from '../../../../../app/config/queryClient';
import { useState } from 'react';

const updateAccountSchema = z.object({
  id: z.string().nonempty(),
  name: z.string().nonempty('Nome da conta é obrigatório'),
  initialBalance: z.union([
    z.string().nonempty('Saldo inicial é obrigatório'),
    z.number(),
  ]),
  type: z.nativeEnum(BankAccountType, {
    required_error: 'Tipo de conta inválido'
  }),
  color: z.string({ required_error: 'Cor é obrigatória' }).nonempty('Cor é obrigatória')
});

type FormData = z.infer<typeof updateAccountSchema>;

export function useEditBankAccountController() {
  const {
    isEditBankAccountModalOpen,
    handleCloseEditBankAccountModal,
    accountToEdit
  } = useHome();

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const { handleSubmit: onSubmit, register, formState, control, reset } = useForm<FormData>({
    resolver: zodResolver(updateAccountSchema),
    defaultValues: {
      id: accountToEdit?.id,
      color: accountToEdit?.color,
      initialBalance: accountToEdit?.initialBalance,
      name: accountToEdit?.name,
      type: accountToEdit?.type
    }
  });

  const { errors } = formState;

  const updateMutation = useMutation({
    mutationFn: async (data: FormData) => await bankAccountService.update({
      ...data,
      initialBalance: Number(data.initialBalance),
      id: accountToEdit!.id
    })
  });

  const handleSubmit = onSubmit(async (data) => {
    try {
      await updateMutation.mutateAsync(data);
      queryClient.invalidateQueries({ queryKey: ['bank-accounts']});
      toast.success('Conta cadastrada com sucesso!');
      reset();
      handleCloseEditBankAccountModal();

    } catch (error) {
      console.error(error);
      toast.error('Ocorreu um erro ao cadastrar sua conta!');
    }
  });



  function handleOpenDeleteModal() {
    setIsDeleteModalOpen(true);
  }

  function handleCloseDeleteModal() {
    setIsDeleteModalOpen(false);
  }

  function handleDeleteAccount() {
    console.log({ accountToEdit });
  }

  return {
    isEditBankAccountModalOpen,
    handleCloseEditBankAccountModal,
    handleSubmit,
    isUpdating: updateMutation.isLoading,
    register,
    errors,
    control,
    isDeleteModalOpen,
    handleCloseDeleteModal,
    handleOpenDeleteModal,
    handleDeleteAccount
  };
}
