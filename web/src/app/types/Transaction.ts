import { BankAccountType } from './BankAccountType';

export interface Transaction {
  type: BankAccountType;
  value: number;
}
