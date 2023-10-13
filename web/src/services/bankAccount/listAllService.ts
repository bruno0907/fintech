import { BankAccountType } from '../../app/types/BankAccountType';
import { httpClientService } from '../httpClientService';

interface Transaction {
  type: BankAccountType;
  value: number;
}

export interface BankAccountsResponse {
  id: string;
  userId: string;
  name: string;
  initialBalance: number;
  type: string;
  color: string;
  currentBalance: number;
  transactions: Transaction[];
}

export class ListAllBankAccountsService {
  constructor(private readonly httpClient = httpClientService) {}

  async execute() {
    return await this.httpClient.get<BankAccountsResponse[]>('/bank-accounts');
  }
}
