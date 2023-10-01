import { httpClientService } from "../httpClientService";

export interface MeServiceResponse {
  name: string;
  email: string;
}

export class MeService {
  constructor(private readonly httpClient = httpClientService) {}

  async execute() {
    const { data } = await this.httpClient.get<MeServiceResponse>('users/me');

    return data;
  }
}
