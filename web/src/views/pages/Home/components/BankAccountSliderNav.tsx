import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useSwiper } from "swiper/react";

export function BankAccountSliderNav() {
  const slider = useSwiper()

  return (
    <div className="flex items-center justify-between mb-4">
      <strong className="text-white tracking-[-1px] text-lg">
        Minhas contas
      </strong>
      <div className="flex gap-2">
        <button
          className="p-3 rounded-full enabled:hover:bg-black/10 transition-colors disabled:opacity-40"
          onClick={() => slider.slidePrev()}
        >
          <ChevronLeftIcon className="w-6 h-6 text-white" />
        </button>
        <button
          className="p-3 rounded-full enabled:hover:bg-black/10 transition-colors disabled:opacity-40"
          onClick={() => slider.slideNext()}
        >
          <ChevronRightIcon className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  )
}
