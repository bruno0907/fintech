import { useMutation } from '@tanstack/react-query';
import { useHome } from '../../hooks/useHome';
import { bankAccountService } from '../../../../../services/bankAccount/bankAccountService';
import { toast } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { BankAccountType } from '../../../../../app/types/BankAccountType';
import { zodResolver } from '@hookform/resolvers/zod';

const createAccountSchema = z.object({
  name: z.string().nonempty('Nome da conta é obrigatório'),
  initialBalance: z.string().nonempty('Saldo inicial é obrigatório'),
  type: z.nativeEnum(BankAccountType, {
    required_error: 'Tipo de conta inválido'
  }),
  color: z.string({ required_error: 'Cor é obrigatória' }).nonempty('Cor é obrigatória')
});

type FormData = z.infer<typeof createAccountSchema>;

export function useNewBankAccountController() {
  const {
    isNewBankAccountModalOpen,
    handleCloseNewBankAccountModal
  } = useHome();

  const { handleSubmit: onSubmit, register, formState, control, reset } = useForm<FormData>({
    resolver: zodResolver(createAccountSchema),
  });

  const { errors } = formState;

  const { isLoading, mutateAsync } = useMutation({
    mutationFn: async (data: FormData) => await bankAccountService.create({
      ...data,
      initialBalance: Number(data.initialBalance)
    })
  });

  const handleSubmit = onSubmit(async (data) => {
    try {
      await mutateAsync(data);
      toast.success('Conta cadastrada com sucesso!');
      reset();
      handleCloseNewBankAccountModal();

    } catch (error) {
      console.error(error);
      toast.error('Ocorreu um erro ao cadastrar sua conta!');
    }
  });

  return {
    isNewBankAccountModalOpen,
    handleCloseNewBankAccountModal,
    handleSubmit,
    isLoading,
    register,
    errors,
    control,
  };
}
