import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signin.dto';
import { SignUpDto } from './dto/signup.dto';
import { IsPublic } from 'src/shared/decorators/IsPublic';

@IsPublic()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-in')
  async signin(@Body() signInDto: SignInDto) {
    return await this.authService.signin(signInDto);
  }

  @Post('sign-up')
  async signup(@Body() signupDto: SignUpDto) {
    return await this.authService.signup(signupDto);
  }
}
