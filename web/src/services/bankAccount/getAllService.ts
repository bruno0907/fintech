import { BankAccountType } from '../../app/types/BankAccountType';
import { httpClientService } from '../httpClientService';

export interface BankAccountsResponse {
  id: string;
  name: string;
  initialBalance: number;
  type: BankAccountType;
  color: string;
  currentBalance: number;
}

export class GetAllBankAccountsService {
  constructor(private readonly httpClient = httpClientService) {}

  async execute() {
    const { data } = await this.httpClient.get<BankAccountsResponse[]>('/bank-accounts');
    return data;
  }
}
