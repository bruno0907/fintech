import { TransactionType } from './TransactionType';

export interface Category {
  id: string;
  name: string;
  icon: string;
  type: TransactionType
}
