import { useQuery } from '@tanstack/react-query';
import { getProfile } from './profile.service';

export const PROFILE_QUERY_KEY = ['profile'] as const;

export const useProfile = () =>
  useQuery({
    queryKey: PROFILE_QUERY_KEY,
    queryFn: getProfile,
  });
