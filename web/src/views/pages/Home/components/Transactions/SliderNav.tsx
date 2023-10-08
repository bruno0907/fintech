import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"
import { useSwiper } from "swiper/react"

interface SliderNavProps {
  isBeginning: boolean;
  isEnd: boolean;
}

export function SliderNav({ isBeginning, isEnd }: SliderNavProps) {
  const swiper = useSwiper()

  return(
    <>
      <button
        className="bg-gray-100 absolute p-2 left-0 top-1/2 -translate-y-1/2 rounded-full enabled:hover:bg-black/10 transition-colors disabled:opacity-40"
        onClick={() => swiper.slidePrev()}
        disabled={isBeginning}
      >
        <ChevronLeftIcon className="w-6 h-6 text-gray-800" />
      </button>
      <button
        className="bg-gray-100 absolute p-2 right-0 top-1/2 -translate-y-1/2 rounded-full enabled:hover:bg-black/10 transition-colors disabled:opacity-40"
        onClick={() => swiper.slideNext()}
        disabled={isEnd}
      >
        <ChevronRightIcon className="w-6 h-6 text-gray-800" />
      </button>
    </>
  )
}
