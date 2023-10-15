import { httpClientService } from '../httpClientService';

export class DeleteBankAccountService {
  constructor(private readonly httpClient = httpClientService) {}

  async execute(id: string) {
    return await this.httpClient.delete(`/bank-accounts/${id}`);
  }
}
