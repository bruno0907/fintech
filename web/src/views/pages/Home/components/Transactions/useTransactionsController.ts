import { useCallback, useState } from "react";
import { SwiperClass } from "swiper/react";

export function useTransactionsController() {
  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  })

  const handleSlideChange = useCallback((swiper: SwiperClass) => {
    setSliderState({
      isBeginning: swiper.isBeginning,
      isEnd: swiper.isEnd
    })
  }, [])

  return {
    sliderState,
    handleSlideChange,
  }
}
