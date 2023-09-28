import { Injectable, NotFoundException } from '@nestjs/common';
import { TransactionsRepository } from 'src/shared/database/repositories/transactions.repositories';

@Injectable()
export class ValidateTransactionOwnershipService {
  constructor(
    private readonly transactionsRepository: TransactionsRepository,
  ) {}

  async execute(userId: string, transactionId: string) {
    const isTransactionOwner = await this.transactionsRepository.findFirst({
      where: {
        id: transactionId,
        userId,
      },
    });

    if (!isTransactionOwner) {
      throw new NotFoundException('Transaction not found');
    }
  }
}
