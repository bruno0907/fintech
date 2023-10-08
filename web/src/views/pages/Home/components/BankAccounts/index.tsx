import { AccountCard } from './AccountCard';
import { SliderNav } from './SliderNav';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EyeIcon } from '../../../../../assets/icons/EyeIcon';
import { useBankAccountController } from './useBankAccountsController';
import { formatCurrency } from '../../../../../app/utils/formatCurrency';
import { cn } from '../../../../../app/utils/cn';
import 'swiper/css';
import { Spinner } from '../../../../components/Spinner';
import { PlusIcon } from '@radix-ui/react-icons';

export function BankAccounts() {
  const {
    sliderState,
    handleSlideChange,
    windowWidth,
    areValuesVisible,
    toggleValuesVisibility,
    isLoading,
    accounts,
    handleOpenNewBankAccountModal
  } = useBankAccountController();


  return (
    <section className="flex flex-col flex-1 bg-teal-900 rounded-2xl px-4 py-8 md:p-10 lg:w-1/2">
      {isLoading && (
        <div className="w-full flex-1 flex items-center justify-center">
          <Spinner className="text-teal-900 fill-gray-100" />
        </div>
      )}
      {!isLoading && (
        <>
          <div>
            <span className="text-white block">Saldo total</span>
            <div className="flex gap-2 items-center">
              <strong className={cn(
                'text-2xl tracking-[-1px] text-white transition-all',
                !areValuesVisible && 'blur-sm'
              )}>
                {formatCurrency(15000)}
              </strong>
              <button
                className="flex items-center justify-center h-8 w-8"
                onClick={toggleValuesVisibility}
              >
                <EyeIcon open={areValuesVisible} />
              </button>
            </div>
          </div>

          <div className="md:mt-auto pt-10">
            {accounts.length === 0 && (
              <>
                <div className="mb-7">
                  <strong className="text-white tracking-[-1px] text-lg">
                    Minhas contas
                  </strong>
                </div>

                <button
                  className="w-full flex flex-col flex-1 items-center justify-center gap-4 rounded-2xl border-2 border-teal-600 border-dashed p-4 h-52"
                  onClick={handleOpenNewBankAccountModal}
                >
                  <div className="p-3 rounded-full border-2 border-white border-dashed">
                    <PlusIcon className="w-6 h-6 text-white flex-shrink-0" />
                  </div>
                  <span className="text-white tracking-[-0.5px] font-medium w-32">Cadastre uma nova conta</span>
                </button>
              </>
            )}

            {accounts.length > 0 && (
              <Swiper
                spaceBetween={16}
                slidesPerView={windowWidth <= 650 ? 1.1 : 2.1 }
                onSlideChange={handleSlideChange}
              >
                <span slot="container-start">
                  <SliderNav
                    isBeginning={sliderState.isBeginning}
                    isEnd={sliderState.isEnd}
                  />
                </span>

                <SwiperSlide>
                  <AccountCard
                    color="#7950F2"
                    name="Nubank"
                    balance={5000}
                    type="CHECKING"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <AccountCard
                    color="#333"
                    name="XP"
                    balance={5000}
                    type="INVESTMENT"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <AccountCard
                    color="#2f2"
                    name="Dinheiro"
                    balance={5000}
                    type="CASH"
                  />
                </SwiperSlide>
              </Swiper>
            )}
          </div>
        </>
      )}
    </section>
  );
}
