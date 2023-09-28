import { Injectable, NotFoundException } from '@nestjs/common';
import { CategoriesRepository } from 'src/shared/database/repositories/categories.repositories';

@Injectable()
export class ValidateCategoryOwnershipService {
  constructor(private readonly categoriesRepository: CategoriesRepository) {}
  async execute(userId: string, categoryId: string) {
    const isCategoryOwner = await this.categoriesRepository.findFirst({
      where: {
        userId,
        id: categoryId,
      },
    });

    if (!isCategoryOwner) {
      throw new NotFoundException('Category not found.');
    }
  }
}
