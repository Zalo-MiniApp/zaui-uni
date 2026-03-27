import { useQuery } from '@tanstack/react-query';
import { getNews, getVideos } from './home.service';

export const NEWS_QUERY_KEY = ['home', 'news'] as const;
export const VIDEOS_QUERY_KEY = ['home', 'videos'] as const;

export const useNews = () =>
  useQuery({
    queryKey: NEWS_QUERY_KEY,
    queryFn: getNews,
  });

export const useVideos = () =>
  useQuery({
    queryKey: VIDEOS_QUERY_KEY,
    queryFn: getVideos,
  });
