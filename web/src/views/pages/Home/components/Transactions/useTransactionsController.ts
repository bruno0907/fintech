import { useCallback, useEffect, useState } from 'react';
import { SwiperClass } from 'swiper/react';
import { useHome } from '../../hooks/useHome';
import { useTransactions } from '../../../../../app/hooks/useTransactions';
import { GetAllTransactionParams } from '../../../../../services/transaction/getAllService';
import { Transaction } from '../../../../../app/types/Transaction';

export interface TransactionFiltersProps {
  bankAccountId: string | undefined;
  year: number;
}

export function useTransactionsController() {
  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  });
  const [isFiltersModalOpen, setFiltersIsModalOpen] = useState(false);
  const [transactionParams, setTransactionParams] = useState<GetAllTransactionParams>({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });
  const [isEditTransactionModalOpen, setIsEditTransactionModalOpen] = useState(false);
  const [transactionToEdit, setTransactionToEdit] = useState<null | Transaction>(null);

  const { areValuesVisible } = useHome();

  const {
    isLoading,
    transactions,
    isInitialLoading,
    refetchTransactions,
    isTransactionsFetched
  } = useTransactions(transactionParams);

  const handleSlideChange = useCallback((swiper: SwiperClass) => {
    setSliderState({
      isBeginning: swiper.isBeginning,
      isEnd: swiper.isEnd
    });
    handleChangeTransactionParams('month')(swiper.realIndex);
  }, []);

  function handleOpenFiltersModal() {
    setFiltersIsModalOpen(true);
  }

  function handleCloseFiltersModal() {
    setFiltersIsModalOpen(false);
  }

  const handleOpenEditTransactionModal = useCallback((transaction: Transaction) => {
    setTransactionToEdit(transaction);
    setIsEditTransactionModalOpen(true);
  }, []);

  const handleCloseEditTransactionModal = useCallback(() => {
    setIsEditTransactionModalOpen(false);
    setTransactionToEdit(null);
  }, []);

  function handleChangeTransactionParams<TParams extends keyof GetAllTransactionParams>(param: TParams) {
    return (value: GetAllTransactionParams[TParams]) => {
      if(value === transactionParams[param]) return;
      setTransactionParams(prevState => ({
        ...prevState,
        [param]: value
      }));
    };
  }

  function handleApplyFilters({ bankAccountId, year }: TransactionFiltersProps) {
    handleChangeTransactionParams('bankAccountId')(bankAccountId);
    handleChangeTransactionParams('year')(year);
    setFiltersIsModalOpen(false);
  }

  useEffect(() => {
    if(isTransactionsFetched) return;

    refetchTransactions();

  }, [refetchTransactions, transactionParams]);

  return {
    sliderState,
    handleSlideChange,
    areValuesVisible,
    isInitialLoading,
    isLoading,
    transactions: transactions ?? [],
    isFiltersModalOpen,
    handleOpenFiltersModal,
    handleCloseFiltersModal,
    handleChangeTransactionParams,
    transactionParams,
    handleApplyFilters,
    handleOpenEditTransactionModal,
    handleCloseEditTransactionModal,
    isEditTransactionModalOpen,
    transactionToEdit
  };
}
