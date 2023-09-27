import { BadRequestException, Injectable } from '@nestjs/common';

import { UsersRepository } from 'src/shared/database/repositories/users.repositories';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async getUserById(userId: string) {
    const user = await this.usersRepository.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new BadRequestException('User not found');
    }

    return {
      name: user.name,
      email: user.email,
    };
  }
}
