import { AccountCard } from "./AccountCard";
import { SliderNav } from "./SliderNav";
import { Swiper, SwiperSlide } from "swiper/react";
import { EyeIcon } from "../../../../../assets/icons/EyeIcon";
import { useBankAccountController } from "./useBankAccountsController";
import 'swiper/css';

export function BankAccounts() {
  const { sliderState, handleSlideChange, windowWidth } = useBankAccountController()

  return (
    <section className="flex flex-col flex-1 bg-teal-900 rounded-2xl px-4 py-8 md:p-10 lg:w-1/2">
      <div>
        <span className="text-white block">Saldo total</span>
        <div className="flex gap-2 items-center">
          <strong className="text-2xl tracking-[-1px] text-white">R$ 1000,00</strong>
          <button className="flex items-center justify-center h-8 w-8">
            <EyeIcon open />
          </button>
        </div>
      </div>

      <div className="md:mt-auto pt-10">
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
      </div>
    </section>
  )
}
