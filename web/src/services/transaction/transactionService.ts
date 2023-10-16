import { CreateTransactionParams, CreateTransactionService } from './createService';
import { GetAllTransactionService, GetAllTransactionParams } from './getAllService';

class TransactionService {
  constructor(
    private readonly createTransactionService = new CreateTransactionService(),
    private readonly getAllTransactionService = new GetAllTransactionService(),
  ) {}

  create(params: CreateTransactionParams) {
    return this.createTransactionService.execute(params);
  }

  getAll(params: GetAllTransactionParams) {
    return this.getAllTransactionService.execute(params);
  }
}

export type {
  CreateTransactionParams,
  GetAllTransactionParams,
};

export const transactionService = new TransactionService();
