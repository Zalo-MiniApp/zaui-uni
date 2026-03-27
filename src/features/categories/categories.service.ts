import { fetchCategories } from './categories.api';
import type { Category } from './categories.types';
import { categoriesMock } from './categories.mock';

const USE_MOCK = true;

export const getCategories = async (): Promise<Category[]> => {
  if (USE_MOCK) return categoriesMock;
  const { data } = await fetchCategories();
  return data;
};
