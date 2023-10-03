import { ChevronDownIcon } from "@radix-ui/react-icons";
import { TransactionsIcon } from "../../../../../assets/icons/TransactionsIcon";
import { FilterIcon } from "../../../../../assets/icons/FilterIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import { MONTH } from "../../../../../app/config/constants";
import { SliderOption } from "./SliderOption";
import 'swiper/css';
import { useTransactionsController } from "./useTransactionsController";
import { SliderNav } from "./SliderNav";

export function Transactions() {
  const { handleSlideChange, sliderState } = useTransactionsController();

  return (
    <section className="flex flex-col flex-1 gap-4 bg-gray-100 rounded-2xl px-4 py-8 md:p-10 lg:w-1/2">
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

      <div className="bg-red-300">
        content
      </div>
    </section>
  )
}
