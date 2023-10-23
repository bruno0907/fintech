import { Category } from '../../app/types/Category';
import { httpClientService } from '../httpClientService';

export type CategoryResponse = Category;

export class GetAllCategoriesService {
  constructor(private readonly httpClient = httpClientService) {}

  async execute() {
    const { data } = await this.httpClient.get<CategoryResponse[]>('/categories');
    return data;
  }
}
