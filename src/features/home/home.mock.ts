import newsImg from '@/assets/news-thumbnail.png';
import videoImg1 from '@/assets/video-thumbnail-1.png';
import videoImg2 from '@/assets/video-thumbnail-2.png';
import videoImg3 from '@/assets/video-thumbnail-3.png';
import type { NewsItem, VideoItem } from './home.types';

export const newsMock: NewsItem[] = [
  {
    id: 1,
    title: 'Bộ Giáo dục: 27 điểm khối A00 ngang 25,5 điểm D01',
    desc: '(Dân trí) - Bộ Giáo dục và Đào tạo vừa công bố bách phân vị tổng điểm một số tổ hợp truyền thống...',
    img: newsImg,
  },
  {
    id: 2,
    title: 'Học viện Báo chí và Tuyên truyền công bố bảng quy đổi, điểm sàn xét tuyển',
    desc: '(Dân trí) - Bộ Giáo dục và Đào tạo vừa công bố bách phân vị tổng điểm một số tổ hợp truyền thống...',
    img: newsImg,
  },
  {
    id: 3,
    title: 'Bộ Giáo dục: 27 điểm khối A00 ngang 25,5 điểm D01',
    desc: '(Dân trí) - Bộ Giáo dục và Đào tạo vừa công bố bách phân vị tổng điểm một số tổ hợp truyền thống...',
    img: newsImg,
  },
];

export const videosMock: VideoItem[] = [
  { id: 1, views: '234', img: videoImg1 },
  { id: 2, views: '234', img: videoImg2 },
  { id: 3, views: '234', img: videoImg3 },
];
