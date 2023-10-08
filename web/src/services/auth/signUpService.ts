import { httpClientService } from '../httpClientService';

export interface SignUpParams {
  name: string;
  email: string;
  password: string;
}
interface SignUpResponse {
  accessToken: string;
}

export class SignUpService {
  constructor(private readonly httpClient = httpClientService) {}

  async execute(params: SignUpParams) {
    const { data } = await this.httpClient.post<SignUpResponse>('/auth/sign-up', params);
    return data;
  }
}
