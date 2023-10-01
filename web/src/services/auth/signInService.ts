import { httpClientService } from "../httpClientService";

export interface SignInParams {
  email: string;
  password: string;
}

interface SignInResponse {
  accessToken: string;
}

export class SignInService {
  constructor(private readonly httpClient = httpClientService) {}

  async execute(params: SignInParams) {
    const { data } = await this.httpClient.post<SignInResponse>('/auth/sign-in', params);
    return data;
  }
}
