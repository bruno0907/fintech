import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { authService, SignInParams } from '../../../services/auth/authService';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { useAuth } from '../../../app/hooks/useAuth';

interface SignInProps {
  email: string;
  password: string;
}

const SignInSchema = z.object({
  email: z.string().nonempty('E-mail obrigatório').email('Digite um e-mail válido'),
  password: z.string().nonempty('Senha obrigatória').min(8, 'A senha deve ter no mínimo 8 caracteres'),
});

export function useSignInController() {
  const { handleSubmit: onSubmit, register, formState } = useForm<SignInProps>({
    resolver: zodResolver(SignInSchema)
  });
  const { errors } = formState;

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async (data:SignInParams) => await authService.signIn(data)
  });

  const { handleSignIn } = useAuth();

  const handleSubmit = onSubmit(async (data) => {
    try {
      const { accessToken } = await mutateAsync(data);
      handleSignIn(accessToken);
    } catch (error) {
      toast.error('Usuário ou senha inválidos!');
    }
  });

  return {
    handleSubmit,
    register,
    isLoading,
    errors,
  };
}
