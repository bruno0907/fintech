import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useSignUpController } from "./useSignUpController";

export function SignUp() {
  const { handleSubmit, register, isLoading, errors } = useSignUpController();

  return (
    <div className="flex flex-col items-center gap-11">
      <header className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-2xl text-gray-900 font-bold tracking-[-1px]">Crie sua conta</h1>
        <p className="text-gray-700 space-x-2 tracking-[-0.5px]">
          <span>Já possui uma conta?</span>
          <Link to="/sign-in" className="text-teal-900 font-medium hover:text-teal-800 active:bg-teal-900 transition-all">Entre aqui!</Link>
        </p>
      </header>

      <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
        <Input
        type="text"
        placeholder="Nome completo"
        hasError={errors.name}
        {...register('name')}
        />
        <Input
          type="email"
          placeholder="Seu melhor e-mail"
          hasError={errors.email}
          {...register('email')}
        />
        <Input
          type="password"
          placeholder="Senha"
          hasError={errors.password}
          {...register('password')}
        />
        <Button type="submit" isLoading={isLoading}>Criar conta</Button>
      </form>
    </div>
  )
}
