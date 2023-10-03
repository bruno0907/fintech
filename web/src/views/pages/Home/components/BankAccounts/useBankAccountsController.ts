import { useCallback, useState } from "react";
import { SwiperClass } from "swiper/react";
import { useWindowWidth } from "../../../../../app/hooks/useWindowWidth";

export function useBankAccountController() {
  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  })

  const windowWidth = useWindowWidth();

  const handleSlideChange = useCallback((swiper: SwiperClass) => {
    setSliderState({
      isBeginning: swiper.isBeginning,
      isEnd: swiper.isEnd
    })
  }, [])

  return {
    sliderState,
    handleSlideChange,
    windowWidth,
  }
}
