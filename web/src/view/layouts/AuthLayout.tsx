import { Outlet } from "react-router-dom";

import Hero from '../../assets/images/hero.png'
import { Logo } from "../components/Logo";

export function AuthLayout() {
  return (
    <div className="flex h-screen p-8">

      <div className="w-full lg:w-1/2 h-full flex flex-col items-center justify-center gap-16">
        <Logo className="h-6 text-gray-500" />

        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>

      <div className="w-1/2 items-center justify-center overflow-hidden hidden lg:flex">
        <div className="flex-1 max-w-fit relative">
          <img
            src={Hero}
            alt="Illustration of a transactions list"
            className="no-select max-h-[850px]"
          />

          <div className=" bg-white max-w-[] absolute bottom-0 left-0 right-0 p-8 rounded-b-[24px]">
            <Logo className="text-teal-900 h-6" />
            <p className="text-gray-700 font-medium text-xl mt-6">Gerencie suas finanças pessoais de uma forma simples com o fincheck, e o melhor, totalmente de graça!</p>
          </div>
        </div>
      </div>
    </div>
  )
}
