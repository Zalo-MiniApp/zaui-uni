import api from '@/lib/api';
import { ENDPOINTS } from '@/constants/endpoints';
import type { NewsItem, VideoItem } from './home.types';

export const fetchNews = () => api.get<NewsItem[]>(ENDPOINTS.NEWS);
export const fetchVideos = () => api.get<VideoItem[]>(ENDPOINTS.VIDEOS);
