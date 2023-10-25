import { TransactionType } from '../../app/types/TransactionType';
import { httpClientService } from '../httpClientService';

export interface UpdateTransactionParams {
  id: string;
  bankAccountId: string;
  categoryId: string;
  name: string;
  value: number;
  date: Date;
  type: TransactionType;
}

interface UpdateTransactionResponse {
  id: string;
  bankAccountId: string;
  categoryId: string;
  name: string;
  value: number;
  date: Date;
  type: TransactionType;
}

export class UpdateTransactioService {
  constructor(private readonly httpClient = httpClientService) {}

  async execute({ id, ...params }: UpdateTransactionParams) {
    const { data } = await this.httpClient.put<UpdateTransactionResponse>(`/transactions/${id}`, params);
    return data;
  }
}
