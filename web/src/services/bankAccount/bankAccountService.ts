import { CreateBankAccountParams, CreateBankAccountService } from './createService';
import { GetAllBankAccountsService, BankAccountsResponse } from './getAllService';

class BankAccountService {
  constructor(
    private readonly createBankAccountService = new CreateBankAccountService(),
    private readonly listAllBankAccountsService = new GetAllBankAccountsService()
  ) {}

  create(params: CreateBankAccountParams) {
    return this.createBankAccountService.execute(params);
  }

  getAll() {
    return this.listAllBankAccountsService.execute();
  }
}

export type {
  CreateBankAccountParams,
  BankAccountsResponse
};

export const bankAccountService = new BankAccountService();
