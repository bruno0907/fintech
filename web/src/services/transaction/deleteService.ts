import { httpClientService } from '../httpClientService';

export class DeleteTransactionService {
  constructor(private readonly httpClient = httpClientService) {}

  async execute(id: string) {
    return await this.httpClient.delete(`/transactions/${id}`);
  }
}
