import { useCallback, useState } from 'react';
import { SwiperClass } from 'swiper/react';
import { useHome } from '../../hooks/useHome';

export function useTransactionsController() {
  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  });

  const [isFiltersModalOpen, setFiltersIsModalOpen] = useState(false);

  const { areValuesVisible } = useHome();

  const handleSlideChange = useCallback((swiper: SwiperClass) => {
    setSliderState({
      isBeginning: swiper.isBeginning,
      isEnd: swiper.isEnd
    });
  }, []);

  function handleOpenFiltersModal() {
    setFiltersIsModalOpen(true);
  }

  function handleCloseFiltersModal() {
    setFiltersIsModalOpen(false);
  }

  return {
    sliderState,
    handleSlideChange,
    areValuesVisible,
    isInitialLoading: false,
    isLoading: false,
    transactions: [{}],
    isFiltersModalOpen,
    handleOpenFiltersModal,
    handleCloseFiltersModal
  };
}
