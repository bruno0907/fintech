import { useSwiper } from "swiper/react";
import { cn } from "../../../../../app/utils/cn";

interface SliderOptionProps {
  month: string;
  isActive: boolean;
  index: number;
}

export function SliderOption({ isActive, month, index }: SliderOptionProps) {
  const swiper = useSwiper()

  return (
    <button
      className={cn(
        "w-full rounded-full h-12 px-6 flex flex-col items-center justify-center text-gray-800 font-medium text-sm tracking-[-0.5px]",
        isActive && 'bg-white'
      )}
      onClick={() => swiper.slideTo(index)}
    >
      {month}
    </button>
  )
}
