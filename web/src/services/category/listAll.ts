import { httpClientService } from '../httpClientService';

export interface CategoryResponse {
  id: string;
  name: string;
  type: string;
  icon: string;
}

export class ListAllCategoriesService {
  constructor(private readonly httpClient = httpClientService) {}

  async execute() {
    const { data } = await this.httpClient.get<CategoryResponse[]>('/categories');
    return data;
  }
}
