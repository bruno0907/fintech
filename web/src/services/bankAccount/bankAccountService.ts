import { CreateBankAccountParams, CreateBankAccountService } from './createService';
import { DeleteBankAccountService } from './deleteService';
import { GetAllBankAccountsService, BankAccountsResponse } from './getAllService';
import { UpdateBankAccountParams, UpdateBankAccountService } from './updateBankAccountService';

class BankAccountService {
  constructor(
    private readonly createBankAccountService = new CreateBankAccountService(),
    private readonly listAllBankAccountsService = new GetAllBankAccountsService(),
    private readonly updateBankAccountService = new UpdateBankAccountService(),
    private readonly deleteBankAccountService = new DeleteBankAccountService(),
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

  delete(id: string) {
    return this.deleteBankAccountService.execute(id);
  }
}

export type {
  CreateBankAccountParams,
  BankAccountsResponse,
  UpdateBankAccountParams,
};

export const bankAccountService = new BankAccountService();
