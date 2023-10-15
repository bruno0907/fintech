import { BankAccount } from '../../app/types/BankAccount';
import { httpClientService } from '../httpClientService';

export type BankAccountsResponse = BankAccount;

export class GetAllBankAccountsService {
  constructor(private readonly httpClient = httpClientService) {}

  async execute() {
    const { data } = await this.httpClient.get<BankAccountsResponse[]>('/bank-accounts');
    return data;
  }
}
