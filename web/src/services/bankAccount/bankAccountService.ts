import { CreateBankAccountParams, CreateBankAccountService } from './createService';
import { ListAllBankAccountsService, BankAccountsResponse } from './listAllService';

class BankAccountService {
  constructor(
    private readonly createBankAccountService = new CreateBankAccountService(),
    private readonly listAllBankAccountsService = new ListAllBankAccountsService()
  ) {}

  create(params: CreateBankAccountParams) {
    return this.createBankAccountService.execute(params);
  }

  listAll() {
    return this.listAllBankAccountsService.execute();
  }
}

export type {
  CreateBankAccountParams,
  BankAccountsResponse
};

export const bankAccountService = new BankAccountService();
