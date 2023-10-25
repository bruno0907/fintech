import { Transaction } from '../../app/types/Transaction';
import { TransactionType } from '../../app/types/TransactionType';
import { httpClientService } from '../httpClientService';

type TransactionResponse = Transaction;

export interface GetAllTransactionParams {
  month: number;
  year: number;
  bankAccountId?: string;
  type?: TransactionType;
  orderBy?: 'asc' | 'desc'
}

export class GetAllTransactionService {
  constructor(
    private readonly httpClient = httpClientService,
  ) {}

  async execute({ month, year, bankAccountId, type, orderBy = 'desc' }: GetAllTransactionParams) {
    const { data } = await this.httpClient.get<TransactionResponse[]>('/transactions', {
      params: {
        month,
        year,
        bankAccountId,
        type,
        orderBy
      }
    });
    return data;
  }
}
