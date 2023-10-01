import { HttpClient } from "../infra/Httpclient";

export interface SignUpParams {
  name: string;
  email: string;
  password: string;
}
interface SignUpResponse {
  accessToken: string;
}

export class SignUpService {
  async execute(params: SignUpParams) {
    const { data } = await HttpClient.post<SignUpResponse>('/auth/sign-up', params);
    return data;
  }
}
