export const PATHS = {
  HOME: '/',
  SCHOLARSHIP: '/scholarship',
  CATEGORY: '/category',
  PROFILE: '/profile',
  SHORTCUTS: '/shortcuts',
  DEPARTMENT_DETAIL: '/department-detail',
  NEWS_DETAIL: '/news-detail',
  SCHEDULE: '/schedule',
} as const;

export const TAB_PATHS: Record<string, string> = {
  home: PATHS.HOME,
  scholarship: PATHS.SCHOLARSHIP,
  category: PATHS.CATEGORY,
  profile: PATHS.PROFILE,
};

export const PATH_TO_TAB: Record<string, string> = {
  [PATHS.HOME]: 'home',
  [PATHS.SCHOLARSHIP]: 'scholarship',
  [PATHS.CATEGORY]: 'category',
  [PATHS.PROFILE]: 'profile',
};
