import { HttpClient } from "../infra/Httpclient";


export interface SignInParams {
  email: string;
  password: string;
}

interface SignInResponse {
  accessToken: string;
}

export class SignInService {
  async execute(params: SignInParams) {
    const { data } = await HttpClient.post<SignInResponse>('/auth/sign-in', params);
    return data;
  }
}
