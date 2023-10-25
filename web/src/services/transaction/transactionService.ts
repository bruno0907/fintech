import { CreateTransactionParams, CreateTransactionService } from './createService';
import { GetAllTransactionService, GetAllTransactionParams } from './getAllService';
import { UpdateTransactioService, UpdateTransactionParams } from './updateService';

class TransactionService {
  constructor(
    private readonly createTransactionService = new CreateTransactionService(),
    private readonly getAllTransactionService = new GetAllTransactionService(),
    private readonly updateTransactionService = new UpdateTransactioService(),
  ) {}

  create(params: CreateTransactionParams) {
    return this.createTransactionService.execute(params);
  }

  getAll(params: GetAllTransactionParams) {
    return this.getAllTransactionService.execute(params);
  }

  update(params: UpdateTransactionParams) {
    return this.updateTransactionService.execute(params);
  }
}

export type {
  CreateTransactionParams,
  GetAllTransactionParams,
};

export const transactionService = new TransactionService();
