import { User } from '../../app/types/User';
import { httpClientService } from '../httpClientService';

export type MeServiceResponse = User;

export class MeService {
  constructor(private readonly httpClient = httpClientService) {}

  async execute() {
    const { data } = await this.httpClient.get<MeServiceResponse>('users/me');

    return data;
  }
}
