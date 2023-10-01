import { MeService } from "./meService";

class UserService {
  constructor(private readonly meService = new MeService()) {}

  me(accessToken: string) {
    return this.meService.execute(accessToken);
  }
}

export const userService = new UserService();
