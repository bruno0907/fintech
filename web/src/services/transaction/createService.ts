import { httpClientService } from '../httpClientService';

export interface CreateTransactionParams {
  bankAccountId: string;
	categoryId: string;
	name: string;
	value: number;
	date: Date;
	type: string;
}

interface CreateTransactionResponse {
  id: string;
  bankAccountId: string;
	categoryId: string;
	name: string;
	value: number;
	date: Date;
	type: string;
}

export class CreateTransactionService {
  constructor(private readonly httpClient = httpClientService) {}

  async execute(params: CreateTransactionParams) {
    const { data } = await this.httpClient.post<CreateTransactionResponse[]>('/transactions', params);
    return data;
  }
}
