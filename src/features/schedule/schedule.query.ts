import { useQuery } from '@tanstack/react-query';
import { getSchedule } from './schedule.service';

export const SCHEDULE_QUERY_KEY = ['schedule'] as const;

export const useSchedule = () =>
  useQuery({
    queryKey: SCHEDULE_QUERY_KEY,
    queryFn: getSchedule,
  });
