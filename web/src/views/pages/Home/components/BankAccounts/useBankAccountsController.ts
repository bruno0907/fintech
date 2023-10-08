import { useCallback, useState } from 'react';
import { SwiperClass } from 'swiper/react';
import { useWindowWidth } from '../../../../../app/hooks/useWindowWidth';
import { useHome } from '../../hooks/useHome';

export function useBankAccountController() {
  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  });

  const {
    areValuesVisible,
    toggleValuesVisibility,
    handleOpenNewBankAccountModal
  } = useHome();

  const windowWidth = useWindowWidth();

  const handleSlideChange = useCallback((swiper: SwiperClass) => {
    setSliderState({
      isBeginning: swiper.isBeginning,
      isEnd: swiper.isEnd
    });
  }, []);

  return {
    sliderState,
    handleSlideChange,
    windowWidth,
    areValuesVisible,
    toggleValuesVisibility,
    isLoading: false,
    accounts: [{}],
    handleOpenNewBankAccountModal,
  };
}
