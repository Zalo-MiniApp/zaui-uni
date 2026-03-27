import { fetchProfile } from './profile.api';
import type { Profile } from './profile.types';
import { profileMock } from './profile.mock';

const USE_MOCK = true;

export const getProfile = async (): Promise<Profile> => {
  if (USE_MOCK) return profileMock;
  const { data } = await fetchProfile();
  return data;
};
