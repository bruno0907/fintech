import { HttpClient } from "../infra/Httpclient";

interface MeServiceResponse {
  name: string;
  email: string;
}

export class MeService {
  constructor(private readonly httpClient = HttpClient) {}

  execute(accessToken: string) {
    return this.httpClient.get<MeServiceResponse>('users/me', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
  }
}
