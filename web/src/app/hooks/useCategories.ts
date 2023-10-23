import { useQuery } from '@tanstack/react-query';
import { categoryService } from '../../services/category/categoryService';

export function useCategories() {
  const { data, isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => categoryService.getAll(),
  });

  return {
    categories: data ?? [],
    isLoading
  };
}
