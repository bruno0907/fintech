import { GetAllCategoriesService, CategoryResponse } from './getAllService';

class CategoryService {
  constructor(
    private readonly getAllCategoriesService = new GetAllCategoriesService(),
  ) {}

  getAll() {
    return this.getAllCategoriesService.execute();
  }
}

export type {
  CategoryResponse
};

export const categoryService = new CategoryService();
