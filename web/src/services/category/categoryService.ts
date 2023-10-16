import { ListAllCategoriesService, CategoryResponse } from './listAll';

class CategoryService {
  constructor(
    private readonly listAllCategoriesService = new ListAllCategoriesService(),
  ) {}

  listAll() {
    return this.listAllCategoriesService.execute();
  }
}

export type {
  CategoryResponse
};

export const categoryService = new CategoryService();
