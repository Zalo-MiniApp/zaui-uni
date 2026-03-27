import { fetchNews, fetchVideos } from './home.api';
import type { NewsItem, VideoItem } from './home.types';
import { newsMock, videosMock } from './home.mock';

const USE_MOCK = true;

export const getNews = async (): Promise<NewsItem[]> => {
  if (USE_MOCK) return newsMock;
  const { data } = await fetchNews();
  return data;
};

export const getVideos = async (): Promise<VideoItem[]> => {
  if (USE_MOCK) return videosMock;
  const { data } = await fetchVideos();
  return data;
};
