import { useCallback, useMemo, useState } from 'react';
import { SwiperClass } from 'swiper/react';
import { useWindowWidth } from '../../../../../app/hooks/useWindowWidth';
import { useHome } from '../../hooks/useHome';
import { useBankAccounts } from '../../../../../app/hooks/useBankAccounts';

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

  const { accounts, isLoading } = useBankAccounts();

  const totalBalance = useMemo(() => {
    if(!accounts) return 0;

    return accounts.reduce((acc, account) => acc + account.currentBalance, 0);
  }, [accounts]);

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
    accounts,
    handleOpenNewBankAccountModal,
    totalBalance,
    handleOpenEditBankAccountModal
  };
}
