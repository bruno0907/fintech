import { useCallback, useState } from 'react';
import { SwiperClass } from 'swiper/react';
import { useHome } from '../../hooks/useHome';
import { useQuery } from '@tanstack/react-query';
import { transactionService } from '../../../../../services/transaction/transactionService';


export function useTransactionsController() {
  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  });

  const [isFiltersModalOpen, setFiltersIsModalOpen] = useState(false);

  const { areValuesVisible } = useHome();

  const { data: transactions, isLoading } = useQuery({
    queryFn: async () => await transactionService.getAll({ month: 8, year: 2023 }),
    queryKey: ['transactions'],
  });

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
    isLoading,
    transactions: transactions ?? [{}],
    isFiltersModalOpen,
    handleOpenFiltersModal,
    handleCloseFiltersModal
  };
}
