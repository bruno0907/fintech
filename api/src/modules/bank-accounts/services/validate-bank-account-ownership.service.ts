import { Injectable, NotFoundException } from '@nestjs/common';
import { BankAccountRepository } from 'src/shared/database/repositories/bank-account.repositories';

@Injectable()
export class ValidateBankAccountOwnershipService {
  constructor(private readonly bankAccountRepository: BankAccountRepository) {}
  async execute(userId: string, bankAccountId: string) {
    const isBankAccountOwner = await this.bankAccountRepository.findFirst({
      where: {
        userId,
        id: bankAccountId,
      },
    });

    if (!isBankAccountOwner) {
      throw new NotFoundException('Bank account not found.');
    }
  }
}
