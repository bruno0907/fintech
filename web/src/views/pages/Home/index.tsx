import { BankAccounts } from './components/BankAccounts';
import { Fab } from './components/Fab';
import { Transactions } from './components/Transactions';
import { HomeProvider } from './contexts/HomeContext';
import { NewBankAccountModal } from './modals/NewAccountModal';
import { NewTransactionModal } from './modals/NewTransactionModal';

export function Home() {
  return (
    <HomeProvider>
      <main className="flex flex-col lg:flex-row flex-1 gap-4 sm:gap-8 overflow-x-hidden lg:overflow-y-hidden">
        <BankAccounts />
        <Transactions />
        <Fab />
        <NewBankAccountModal />
        <NewTransactionModal />
      </main>
    </HomeProvider>
  );
}
