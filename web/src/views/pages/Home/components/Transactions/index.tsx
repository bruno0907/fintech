import { ChevronDownIcon } from "@radix-ui/react-icons";
import { TransactionsIcon } from "../../../../../assets/icons/TransactionsIcon";
import { FilterIcon } from "../../../../../assets/icons/FilterIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import { MONTH } from "../../../../../app/config/constants";
import { SliderOption } from "./SliderOption";
import 'swiper/css';
import { useTransactionsController } from "./useTransactionsController";
import { SliderNav } from "./SliderNav";
import { formatCurrency } from "../../../../../app/utils/formatCurrency";
import { CategoryIcon } from "../../../../../assets/icons/categories/CategoryIcon";
import { cn } from "../../../../../app/utils/cn";

export function Transactions() {
  const { handleSlideChange, sliderState } = useTransactionsController();

  return (
    <section className="flex flex-col flex-1 gap-2 bg-gray-100 rounded-2xl px-4 py-8 md:p-10 lg:w-1/2">
      <header className="flex flex-col gap-6 max-w-full">
        <div className="flex items-center justify-between">
          <button className="flex items-center gap-2">
            <TransactionsIcon />
            <span className="text-sm text-gray-800 tracking-[-0.5px] font-medium">Transações</span>
            <ChevronDownIcon className="text-gray-900" />
          </button>
          <button>
            <FilterIcon />
          </button>
        </div>

        <div className="relative">
          <SliderNav
            isBeginning={sliderState.isBeginning}
            isEnd={sliderState.isEnd}
          />
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            centeredSlides
            onSlideChange={handleSlideChange}
          >
            {MONTH.map((month, index) => (
              <SwiperSlide key={month}>
                {({ isActive }) => (
                  <SliderOption
                    isActive={isActive}
                    month={month}
                    index={index}
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </header>

      <div className="flex-1 py-2 overflow-y-auto">
        <ul className="flex flex-col gap-2">
          {Array.from({ length: 20 }).map((_, i) => {
            const type = i % 2 === 0 ? 'expense' : 'income'
            return (
              <li key={i} className="flex align-center bg-white rounded-2xl p-4 gap-3">
                <CategoryIcon type={type} />
                <div className="flex-1">
                  <strong className="block leading-none text-gray-800 tracking-[-0.5px]">Almoço</strong>
                  <span className="text-sm text-gray-600 leading-none">04/06/2023</span>
                </div>
                <span className={cn(
                  "my-auto font-medium tracking-[-0.5px]",
                  type === 'expense' ? 'text-red-800' : 'text-green-800'
                )}>
                  {`${type === 'expense' ? '-' : ''} ${formatCurrency(1000)}`}
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
