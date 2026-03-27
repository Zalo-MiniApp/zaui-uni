import api from '@/lib/api';
import { ENDPOINTS } from '@/constants/endpoints';
import type { ScheduleItem } from './schedule.types';

export const fetchSchedule = () => api.get<ScheduleItem[]>(ENDPOINTS.SCHEDULE);
