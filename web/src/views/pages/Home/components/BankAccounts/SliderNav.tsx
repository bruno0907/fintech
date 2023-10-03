import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useSwiper } from "swiper/react";

interface SliderNavProps {
  isBeginning: boolean;
  isEnd: boolean;
}

export function SliderNav({ isBeginning, isEnd }: SliderNavProps) {
  const swiper = useSwiper()

  return (
    <div className="flex items-center justify-between mb-4">
      <strong className="text-white tracking-[-1px] text-lg">
        Minhas contas
      </strong>
      <div className="flex gap-2">
        <button
          className="p-3 rounded-full enabled:hover:bg-black/10 transition-colors disabled:opacity-40"
          onClick={() => swiper.slidePrev()}
          disabled={isBeginning}
        >
          <ChevronLeftIcon className="w-6 h-6 text-white" />
        </button>
        <button
          className="p-3 rounded-full enabled:hover:bg-black/10 transition-colors disabled:opacity-40"
          onClick={() => swiper.slideNext()}
          disabled={isEnd}
        >
          <ChevronRightIcon className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  )
}
