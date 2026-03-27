import api from '@/lib/api';
import { ENDPOINTS } from '@/constants/endpoints';
import type { Category } from './categories.types';

export const fetchCategories = () => api.get<Category[]>(ENDPOINTS.CATEGORIES);
