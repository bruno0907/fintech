import { Injectable, ConflictException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { hash } from 'bcryptjs';
import { UsersRepository } from 'src/shared/database/repositories/users.repositories';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(createUserDto: CreateUserDto) {
    const emailAlreadyInUse = await this.usersRepository.findUnique({
      where: {
        email: createUserDto.email,
      },
    });

    if (emailAlreadyInUse) {
      throw new ConflictException('Email already in use');
    }

    const passwordHash = await hash(createUserDto.email, 12);

    const user = this.usersRepository.create({
      data: {
        name: createUserDto.name,
        email: createUserDto.email,
        password: passwordHash,
        categories: {
          createMany: {
            data: [
              // INCOME
              { name: 'Salário', icon: 'salary', type: 'INCOME' },
              { name: 'Freelance', icon: 'freelance', type: 'INCOME' },
              { name: 'Outro', icon: 'other', type: 'INCOME' },
              // OUTCOME
              { name: 'Casa', icon: 'home', type: 'OUTCOME' },
              { name: 'Alimentação', icon: 'food', type: 'OUTCOME' },
              { name: 'Educação', icon: 'education', type: 'OUTCOME' },
              { name: 'Lazer', icon: 'fun', type: 'OUTCOME' },
              { name: 'Mercado', icon: 'grocery', type: 'OUTCOME' },
              { name: 'Roupas', icon: 'clothes', type: 'OUTCOME' },
              { name: 'Transporte', icon: 'transport', type: 'OUTCOME' },
              { name: 'Viagem', icon: 'travel', type: 'OUTCOME' },
              { name: 'Outro', icon: 'other', type: 'OUTCOME' },
            ],
          },
        },
      },
    });

    return user;
  }
}
