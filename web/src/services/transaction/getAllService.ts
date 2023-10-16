import { TransactionType } from '../../app/types/TransactionType';
import { httpClientService } from '../httpClientService';

interface TransactionResponse {
  id: string;
  userId: string;
  bankAccountId: string;
  categoryId: string;
  name: string;
  value: number;
  date: Date;
  type: TransactionType;
}

export interface GetAllTransactionParams {
  month: number;
  year: number;
}

export class GetAllTransactionService {
  constructor(
    private readonly httpClient = httpClientService,
  ) {}

  async execute({ month, year }: GetAllTransactionParams) {
    const { data } = await this.httpClient.get<TransactionResponse[]>(`/transactions?month=${month}&year=${year}`);
    return data;
  }
}
