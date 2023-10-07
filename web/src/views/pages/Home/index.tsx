import { BankAccounts } from "./components/BankAccounts";
import { Transactions } from "./components/Transactions";

export function Home() {
  return (
    <main className="flex flex-col lg:flex-row flex-1 gap-4 overflow-x-hidden lg:overflow-y-hidden">
      <BankAccounts />
      <Transactions />
    </main>
  )
}
