import { AccountCard } from "./AccountCard";
import { BankAccountSliderNav } from "./BankAccountSliderNav";
import { Swiper, SwiperSlide } from "swiper/react";
import { EyeIcon } from "../../../../assets/icons/EyeIcon";
import 'swiper/css';

export function BankAccounts() {
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

      <div className="flex flex-1 flex-col gap-4 justify-end">
        <div>
          <Swiper spaceBetween={16} slidesPerView={2.2}>
            <span slot="container-start">
              <BankAccountSliderNav  />
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
      </div>

    </section>
  )
}
