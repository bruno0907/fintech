import { TransactionType } from './TransactionType';

export interface Transaction {
  id: string;
  bankAccountId: string;
  name: string;
  value: number;
  date: Date;
  type: TransactionType;
  category?: Category
}

interface Category {
  id: string;
  name: string;
  icon: string;
}
