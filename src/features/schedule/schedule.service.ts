import { fetchSchedule } from './schedule.api';
import type { ScheduleItem } from './schedule.types';
import { scheduleMock } from './schedule.mock';

const USE_MOCK = true;

export const getSchedule = async (): Promise<ScheduleItem[]> => {
  if (USE_MOCK) return scheduleMock;
  const { data } = await fetchSchedule();
  return data;
};
