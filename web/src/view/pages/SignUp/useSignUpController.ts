import { useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { authService, SignUpParams } from "../../../services/auth/authService";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

interface SignUpProps {
  name: string;
  email: string;
  password: string;
}

const SignUpSchema = z.object({
  name: z.string().nonempty('Nome obrigatório'),
  email: z.string().nonempty('E-mail obrigatório').email('Digite um e-mail válido'),
  password: z.string().nonempty('Senha obrigatória').min(8, 'A senha deve ter no mínimo 8 caracteres'),
})

export function useSignUpController() {
  const { handleSubmit: onSubmit, register, formState } = useForm<SignUpProps>({
    resolver: zodResolver(SignUpSchema)
  });
  const { errors } = formState;

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async (data:SignUpParams) => await authService.signUp(data)
  })

  const handleSubmit = onSubmit(async (data) => {
    try {
      const { accessToken } = await mutateAsync(data);
      console.log({ accessToken })
    } catch (error) {
      toast.error('Ocorreu um erro no cadastro');
    }
  })

  return {
    handleSubmit,
    register,
    errors,
    isLoading
  }


}
