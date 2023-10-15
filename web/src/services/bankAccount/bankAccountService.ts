import { CreateBankAccountParams, CreateBankAccountService } from './createService';
import { GetAllBankAccountsService, BankAccountsResponse } from './getAllService';
import { UpdateBankAccountParams, UpdateBankAccountService } from './updateBankAccountService';

class BankAccountService {
  constructor(
    private readonly createBankAccountService = new CreateBankAccountService(),
    private readonly listAllBankAccountsService = new GetAllBankAccountsService(),
    private readonly updateBankAccountService = new UpdateBankAccountService(),
  ) {}

  create(params: CreateBankAccountParams) {
    return this.createBankAccountService.execute(params);
  }

  getAll() {
    return this.listAllBankAccountsService.execute();
  }

  update(params: UpdateBankAccountParams) {
    return this.updateBankAccountService.execute(params);
  }
}

export type {
  CreateBankAccountParams,
  BankAccountsResponse,
  UpdateBankAccountParams,
};

export const bankAccountService = new BankAccountService();
