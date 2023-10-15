import { useCallback, useMemo, useState } from 'react';
import { SwiperClass } from 'swiper/react';
import { useWindowWidth } from '../../../../../app/hooks/useWindowWidth';
import { useHome } from '../../hooks/useHome';
import { useQuery } from '@tanstack/react-query';
import { bankAccountService } from '../../../../../services/bankAccount/bankAccountService';

export function useBankAccountController() {
  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  });

  const {
    areValuesVisible,
    toggleValuesVisibility,
    handleOpenNewBankAccountModal,
    handleOpenEditBankAccountModal
  } = useHome();

  const windowWidth = useWindowWidth();

  const { data, isLoading } = useQuery({
    queryKey: ['bank-accounts'],
    queryFn: async () => bankAccountService.getAll(),
  });

  const totalBalance = useMemo(() => {
    if(!data) return 0;

    return data.reduce((acc, account) => acc + account.currentBalance, 0);
  }, [data]);

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
    isLoading,
    accounts: data ?? [],
    handleOpenNewBankAccountModal,
    totalBalance,
    handleOpenEditBankAccountModal
  };
}
