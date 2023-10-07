import { Outlet } from "react-router-dom";
import { Logo } from "../components/Logo";
import { UserMenu } from "../components/UserMenu";

export function AppLayout() {
  return (
    <div className="w-screen h-screen max-w-[1440px] mx-auto p-4 md:px-8 md:pt-7 md:pb-8 flex flex-col gap-4">
      <header className="flex items-center justify-between">
        <Logo className="h-6 text-teal-900" />
        <UserMenu />
      </header>
      <Outlet />
    </div>
  )
}
