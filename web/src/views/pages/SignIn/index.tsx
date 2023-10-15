import { Link } from 'react-router-dom';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useSignInController } from './useSignInController';

export function SignIn() {
  const { handleSubmit, isLoading, register, errors } = useSignInController();

  return (
    <div className="flex flex-col items-center gap-11">
      <header className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-2xl text-gray-900 font-bold tracking-[-1px]">Entre em sua conta</h1>
        <p className="space-x-2  tracking-[-0.5px]">
          <span className="text-gray-700">Novo por aqui?</span>
          <Link to="/sign-up" className="text-teal-900 font-medium hover:text-teal-800 active:bg-teal-900 transition-all">Crie uma conta</Link>
        </p>
      </header>

      <form
        className="w-full flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <Input
          type="email"
          placeholder="E-mail"
          hasError={errors.email}
          disabled={isLoading}
          {...register('email')}
        />
        <Input
          type="password"
          placeholder="Senha"
          hasError={errors.password}
          disabled={isLoading}
          {...register('password')}
        />
        <Button type="submit" isLoading={isLoading}>Entrar</Button>
      </form>
    </div>
  );
}

