import { Swiper, SwiperSlide } from 'swiper/react';
import { MONTH } from '../../../../../app/config/constants';
import { SliderOption } from './SliderOption';
import 'swiper/css';
import { useTransactionsController } from './useTransactionsController';
import { SliderNav } from './SliderNav';
import { formatCurrency } from '../../../../../app/utils/formatCurrency';
import { CategoryIcon } from '../../../../../assets/icons/categories/CategoryIcon';
import { cn } from '../../../../../app/utils/cn';
import { Spinner } from '../../../../components/Spinner';
import EmptyState from '../../../../../assets/images/emptyState.svg';
import { TransactionTypeDropdown } from './TransactionTypeDropdown';
import { FilterIcon } from '../../../../../assets/icons/FilterIcon';
import { ScrollArea } from '../../../../components/ScrollArea';
import { FiltersModal } from './FiltersModal';
import { formatDate } from '../../../../../app/utils/formatDate';
import { EditTransactionModal } from '../../modals/EditTransactionModal';

export function Transactions() {
  const {
    handleSlideChange,
    sliderState,
    areValuesVisible,
    isInitialLoading,
    isLoading,
    transactions,
    isFiltersModalOpen,
    handleOpenFiltersModal,
    handleCloseFiltersModal,
    transactionParams,
    handleChangeTransactionParams,
    handleApplyFilters,
    transactionToEdit,
    isEditTransactionModalOpen,
    handleOpenEditTransactionModal,
    handleCloseEditTransactionModal
  } = useTransactionsController();

  const hasTransactions = transactions.length > 0;

  return (
    <section className="flex flex-col flex-1 gap-2 bg-gray-100 rounded-2xl px-4 py-8 md:p-10 lg:w-1/2 lg:overflow-auto">
      {isInitialLoading && (
        <div className="w-full flex-1 flex items-center justify-center">
          <Spinner className="text-gray-100 fill-teal-900" />
        </div>
      )}

      {!isInitialLoading && (
        <>
          <header className="flex flex-col gap-6 max-w-full">
            <div className="flex items-center justify-between">
              <TransactionTypeDropdown
                onSelect={handleChangeTransactionParams('type')}
                selectedType={transactionParams.type}
              />
              <button onClick={handleOpenFiltersModal}>
                <FilterIcon />
              </button>
            </div>

            <FiltersModal
              onClose={handleCloseFiltersModal}
              open={isFiltersModalOpen}
              onApplyFilters={handleApplyFilters}
            />

            <div className="relative">
              <SliderNav
                isBeginning={sliderState.isBeginning}
                isEnd={sliderState.isEnd}
              />
              <div slot="container-start">
                <Swiper
                  spaceBetween={20}
                  slidesPerView={3}
                  centeredSlides
                  initialSlide={transactionParams.month}
                  onSlideChange={handleSlideChange}
                >
                  {MONTH.map((month, index) => (
                    <SwiperSlide key={month}>
                      {({ isActive }) => (
                        <div className="select-none">
                          <SliderOption
                            isActive={isActive}
                            month={month}
                            index={index}
                          />
                        </div>
                      )}
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </header>

          {(!hasTransactions || isLoading) && (
            <div className="flex flex-col gap-4 flex-1 items-center justify-center">
              {isLoading && <Spinner className="text-gray-100" />}
              {!isLoading && (
                <>
                  <img src={EmptyState} alt="Nenhuma transação encontrada" />
                  <p className="text-gray-700">Não encontramos nenhuma transação!</p>
                </>
              )}
            </div>
          )}

          {(hasTransactions && !isLoading) && (
            <>
              {transactionToEdit && (
                <EditTransactionModal
                  transaction={transactionToEdit}
                  isOpen={isEditTransactionModalOpen}
                  onClose={handleCloseEditTransactionModal}
                />
              )}
              <ScrollArea>
                <ul className="flex flex-col gap-2 px-4">
                  {transactions.map((transaction, i) => {
                    return (
                      <li
                        key={i}
                        className="flex align-center bg-white rounded-2xl p-4 gap-3"
                        onClick={() => handleOpenEditTransactionModal(transaction)}
                        role="button"
                      >
                        <CategoryIcon type={transaction.type} category={transaction.category?.icon} />
                        <div className="flex-1">
                          <strong className="block leading-none text-gray-800 tracking-[-0.5px]">
                            {transaction.name}
                          </strong>
                          <span className="text-sm text-gray-600 leading-none">
                            {formatDate(new Date(transaction.date))}
                          </span>
                        </div>
                        <span className={cn(
                          'my-auto font-medium tracking-[-0.5px] transition-all',
                          transaction.type === 'OUTCOME' ? 'text-red-800' : 'text-green-800',
                          !areValuesVisible && 'blur-sm'
                        )}>
                          {`${transaction.type === 'OUTCOME' ? '-' : '+'} ${formatCurrency(transaction.value)}`}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </ScrollArea>
            </>
          )}

        </>
      )}
    </section>
  );
}
