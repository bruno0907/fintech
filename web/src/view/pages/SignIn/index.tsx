import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignIn() {
  return (
    <div className="flex flex-col items-center gap-11">
      <header className="flex flex-col items-center gap-4">
        <h1 className="text-2xl text-gray-900 font-bold tracking-[-1px]">Entre em sua conta</h1>
        <p className="space-x-2  tracking-[-0.5px]">
          <span className="text-gray-700">Novo por aqui?</span>
          <Link to="/sign-up" className="text-teal-900 font-medium hover:text-teal-800 active:bg-teal-900 transition-all">Crie uma conta</Link>
        </p>
      </header>

      <form className="w-full flex flex-col gap-4">
        <Input
          name="email"
          type="email"
          placeholder="E-mail"
        />
        <Input
          name="password"
          type="password"
          placeholder="Senha"
        />
        <Button type="submit">Entrar</Button>
      </form>
    </div>
  )
}
