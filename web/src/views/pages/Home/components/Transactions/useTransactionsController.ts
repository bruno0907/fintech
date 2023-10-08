import { useCallback, useState } from "react";
import { SwiperClass } from "swiper/react";
import { useHome } from "../../hooks/useHome";

export function useTransactionsController() {
  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  })

  const { areValuesVisible } = useHome();

  const handleSlideChange = useCallback((swiper: SwiperClass) => {
    setSliderState({
      isBeginning: swiper.isBeginning,
      isEnd: swiper.isEnd
    })
  }, [])

  return {
    sliderState,
    handleSlideChange,
    areValuesVisible,
    isInitialLoading: false,
    isLoading: false,
    transactions: [{}]
  }
}
