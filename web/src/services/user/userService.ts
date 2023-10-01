import { MeService, MeServiceResponse } from "./meService";

class UserService {
  constructor(private readonly meService = new MeService()) {}

  me() {
    return this.meService.execute();
  }
}

export const userService = new UserService();

export type {
  MeServiceResponse
}
