import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcryptjs';
import { SignInDto } from './dto/signin.dto';
import { SignUpDto } from './dto/signup.dto';
import { UsersRepository } from 'src/shared/database/repositories/users.repositories';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly jwtService: JwtService,
  ) {}

  async signin(signInDto: SignInDto) {
    const { email, password } = signInDto;

    const user = await this.usersRepository.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const accessToken = await this.generateAccessToken(user.id);

    return { accessToken };
  }

  async signup(signUpDto: SignUpDto) {
    const { name, email, password } = signUpDto;

    const emailAlreadyInUse = await this.usersRepository.findUnique({
      where: {
        email: signUpDto.email,
      },
    });
    if (emailAlreadyInUse) {
      throw new ConflictException('Email already in use');
    }

    const passwordHash = await hash(password, 12);

    const user = await this.usersRepository.create({
      data: {
        name,
        email,
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

    const accessToken = await this.generateAccessToken(user.id);

    return { accessToken };
  }

  private generateAccessToken(userId: string) {
    return this.jwtService.signAsync({ sub: userId });
  }
}
