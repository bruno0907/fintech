import { BankAccountType } from '../../app/types/BankAccountType';
import { httpClientService } from '../httpClientService';

interface CreateBankAccountResponse {
  id:  string;
	userId:  string;
	name:  string;
	initialBalance: number;
	type:  BankAccountType;
	color: string;
}

export interface CreateBankAccountParams {
  name: string;
	initialBalance: number;
	type: BankAccountType;
	color: string;
}

export class CreateBankAccountService {
  constructor(private readonly httpClient = httpClientService) {}

  async execute(params: CreateBankAccountParams) {
    const { data } = await this.httpClient.post<CreateBankAccountResponse>('/bank-accounts', params);
    return data;
  }
}
