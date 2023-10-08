import { SignInParams, SignInService } from './signInService';
import { SignUpParams, SignUpService } from './signUpService';

class AuthService {
  constructor(
    private readonly signInService = new SignInService(),
    private readonly signUpService = new SignUpService()
  ) {}

  signUp(params: SignUpParams) {
    return this.signUpService.execute(params);
  }

  signIn(params: SignInParams) {
    return this.signInService.execute(params);
  }
}

export const authService = new AuthService();

export type {
  SignInParams,
  SignUpParams
};

