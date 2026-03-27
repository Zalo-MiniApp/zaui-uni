import { useQuery } from '@tanstack/react-query';
import { getCategories } from './categories.service';

export const CATEGORIES_QUERY_KEY = ['categories'] as const;

export const useCategories = () =>
  useQuery({
    queryKey: CATEGORIES_QUERY_KEY,
    queryFn: getCategories,
  });
