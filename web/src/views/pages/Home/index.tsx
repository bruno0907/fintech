import { BankAccounts } from './components/BankAccounts';
import { Fab } from './components/Fab';
import { Transactions } from './components/Transactions';
import { HomeContext, HomeProvider } from './contexts/HomeContext';
import { EditBankAccountModal } from './modals/EditAccountModal';
import { NewBankAccountModal } from './modals/NewAccountModal';
import { NewTransactionModal } from './modals/NewTransactionModal';

export function Home() {
  return (
    <HomeProvider>
      <HomeContext.Consumer>
        {({ accountToEdit }) => (
          <main className="flex flex-col lg:flex-row flex-1 gap-4 sm:gap-8 overflow-x-hidden lg:overflow-y-hidden">
            <BankAccounts />
            <Transactions />
            <Fab />
            <NewBankAccountModal />
            <NewTransactionModal />
            {accountToEdit && <EditBankAccountModal />}
          </main>
        )}
      </HomeContext.Consumer>
    </HomeProvider>
  );
}
