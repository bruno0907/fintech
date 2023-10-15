import { BankAccountType } from '../../app/types/BankAccountType';
import { httpClientService } from '../httpClientService';

interface UpdateBankAccountResponse {
  id:  string;
	userId:  string;
	name:  string;
	initialBalance: number;
	type:  BankAccountType;
	color: string;
}

export interface UpdateBankAccountParams {
  id: string;
  name: string;
	initialBalance: number;
	type: BankAccountType;
	color: string;
}

export class UpdateBankAccountService {
  constructor(private readonly httpClient = httpClientService) {}

  async execute({ id, ...params }: UpdateBankAccountParams) {
    const { data } = await this.httpClient.put<UpdateBankAccountResponse>(`/bank-accounts/${id}`, params);
    return data;
  }
}
