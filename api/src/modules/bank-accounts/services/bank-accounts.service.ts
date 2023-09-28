import { Injectable } from '@nestjs/common';
import { CreateBankAccountDto } from '../dto/create-bank-account.dto';
import { UpdateBankAccountDto } from '../dto/update-bank-account.dto';
import { BankAccountRepository } from 'src/shared/database/repositories/bank-account.repositories';
import { ValidateBankAccountOwnershipService } from './validate-bank-account-ownership.service';

@Injectable()
export class BankAccountsService {
  constructor(
    private readonly bankAccountRepository: BankAccountRepository,
    private readonly validateBankAccountOwnershipService: ValidateBankAccountOwnershipService,
  ) {}

  create(userId: string, createBankAccountDto: CreateBankAccountDto) {
    const { name, initialBalance, type, color } = createBankAccountDto;

    return this.bankAccountRepository.create({
      data: {
        name,
        initialBalance,
        type,
        color,
        userId,
      },
    });
  }

  findAllByUserId(userId: string) {
    return this.bankAccountRepository.findMany({
      where: {
        userId,
      },
    });
  }

  async update(
    userId: string,
    bankAccountId: string,
    updateBankAccountDto: UpdateBankAccountDto,
  ) {
    await this.validateBankAccountOwnershipService.execute(
      userId,
      bankAccountId,
    );

    const { name, initialBalance, type, color } = updateBankAccountDto;

    return this.bankAccountRepository.update({
      where: {
        userId,
        id: bankAccountId,
      },
      data: {
        name,
        initialBalance,
        type,
        color,
      },
    });
  }

  async remove(userId: string, bankAccountId: string) {
    await this.validateBankAccountOwnershipService.execute(
      userId,
      bankAccountId,
    );

    await this.bankAccountRepository.delete({
      where: {
        userId,
        id: bankAccountId,
      },
    });

    return null;
  }
}
