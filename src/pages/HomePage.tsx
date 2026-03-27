import React from 'react';
import { Page, Icon, useSnackbar } from 'zmp-ui';
import { configAppView, showOAWidget } from 'zmp-sdk';
import { useNavigate } from 'react-router-dom';
import { navigateForward } from '@/utils/navigation';
import { PATHS } from '@/constants/paths';
import { useNews, useVideos } from '@/features/home/home.query';

import logoImg from '@/assets/logo.png';
import bannerImg from '@/assets/banner.png';

import iconTuVan from '@/assets/icons/All shortcut/icon-shortcut-counseling.svg';
import iconTraCuu from '@/assets/icons/All shortcut/icon-shortcut-lookup.png';
import iconXeBus from '@/assets/icons/All shortcut/icon-shortcut-bus.png';
import iconGiaoTrinh from '@/assets/icons/All shortcut/icon-shortcut-textbook.png';
import iconTatCa from '@/assets/icons/icon-apps.png';

import utilLichHoc from '@/assets/icons/icon-calendar.png';
import utilGiaoTrinh from '@/assets/icons/icon-school-board.png';
import utilLichThi from '@/assets/icons/icon-shopping-list.png';
import utilHocBong from '@/assets/icons/icon-graduate-cap.png';
import utilTaiLieu from '@/assets/icons/icon-book-open.png';
import utilXeBus from '@/assets/icons/icon-school-bus.png';
import utilNghienCuu from '@/assets/icons/icon-microscope.png';
import utilCuocThi from '@/assets/icons/icon-medal.png';

import cardTraCuuHoSo from '@/assets/icons/icon-research.png';
import cardThongBao from '@/assets/icons/icon-diploma.png';

import listGioiThieu from '@/assets/icons/icon-agenda.png';
import listDangKy from '@/assets/icons/icon-student.png';

interface MenuItem {
  id: number;
  label: string;
  icon: string;
}
interface Utility {
  id: number;
  title: string;
  icon: string;
}

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { openSnackbar } = useSnackbar();
  const showComingSoon = (): void => {
    openSnackbar({ text: 'Chức năng nhà phát triển tự tích hợp sau.', type: 'info', duration: 1500 });
  };
  const [utilitiesExpanded, setUtilitiesExpanded] = React.useState<boolean>(true);
  const { data: newsItems = [] } = useNews();
  const { data: videoItems = [] } = useVideos();

  React.useEffect(() => {
    configAppView({
      headerColor: '#ffffff',
      headerTextColor: 'black',
      actionBar: { hide: true },
    }).catch(() => {});
  }, []);

  React.useEffect(() => {
    showOAWidget({
      id: 'oaWidget',
      guidingText: 'Quan tâm OA để nhận các chương trình đặc quyền ưu đãi',
      color: '#0068FF',
      paddingTop: '12px',
      paddingBottom: '12px',
      paddingLeft: '16px',
      paddingRight: '16px',
      fontFamily: 'Roboto',
      fontSize: '15px',
      lineHeight: '20px',
    });
  }, []);

  const menuItems: MenuItem[] = [
    { id: 1, label: 'Tư vấn', icon: iconTuVan },
    { id: 2, label: 'Tra cứu', icon: iconTraCuu },
    { id: 3, label: 'Xe bus', icon: iconXeBus },
    { id: 4, label: 'Giáo trình', icon: iconGiaoTrinh },
    { id: 5, label: 'Tất cả', icon: iconTatCa },
  ];

  const utilities: Utility[] = [
    { id: 1, title: 'Lịch học', icon: utilLichHoc },
    { id: 2, title: 'Giáo trình', icon: utilGiaoTrinh },
    { id: 3, title: 'Lịch thi', icon: utilLichThi },
    { id: 4, title: 'Học bổng', icon: utilHocBong },
    { id: 5, title: 'Tài liệu', icon: utilTaiLieu },
    { id: 6, title: 'Xe bus', icon: utilXeBus },
    { id: 7, title: 'Nghiên cứu', icon: utilNghienCuu },
    { id: 8, title: 'Cuộc thi', icon: utilCuocThi },
  ];

  return (
    <Page className="bg-surface">
      {/* Content */}
      <div className="px-4 pt-3 pb-20 flex flex-col gap-3">
        {/* Banner */}
        <div className="w-full h-42.5 rounded-lg overflow-hidden">
          <img src={bannerImg} alt="banner" className="w-full h-full object-cover" />
        </div>

        {/* Search Bar */}
        <div className="flex flex-row items-center py-2 pl-4 pr-2 gap-2 bg-white rounded-[30px]">
          <Icon icon="zi-search" size={24} style={{ color: '#a9adb2', flexShrink: 0 }} />
          <input
            type="text"
            placeholder="Tìm nội dung"
            className="flex-1 border-none outline-none bg-transparent text-body-lg text-primary p-0 placeholder:text-icon"
          />
        </div>

        {/* Top Menu Grid */}
        <div className="bg-white rounded-lg py-3 px-2 flex flex-row items-center justify-between">
          {menuItems.map((item) => (
            <div
              key={item.id}
              onClick={
                item.label === 'Tất cả'
                  ? () => navigateForward(navigate, PATHS.SHORTCUTS)
                  : showComingSoon
              }
              className="w-14.5 flex flex-col items-center gap-2 cursor-pointer"
            >
              <div className="w-13 h-13 min-w-13 rounded-xl bg-icon-bg flex items-center justify-center">
                <img src={item.icon} alt={item.label} className="w-7 h-7 object-contain" />
              </div>
              <span className="text-body-sm text-secondary text-center">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Featured Cards */}
        <div className="flex flex-row gap-3">
          <div onClick={showComingSoon} className="flex-1 bg-white rounded-xl p-3 flex flex-col gap-3 cursor-pointer">
            <img src={cardTraCuuHoSo} alt="Tra cứu hồ sơ" className="w-8 h-8 object-contain" />
            <div className="flex flex-col gap-1">
              <span className="font-bold text-body-lg text-dark">Tra cứu hồ sơ</span>
              <span className="text-body-sm text-muted">Hồ sơ, điểm</span>
            </div>
          </div>
          <div onClick={showComingSoon} className="flex-1 bg-white rounded-xl p-3 flex flex-col gap-3 cursor-pointer">
            <img src={cardThongBao} alt="Thông báo" className="w-8 h-8 object-contain" />
            <div className="flex flex-col gap-1">
              <span className="font-bold text-body-lg text-dark">Thông báo</span>
              <span className="text-body-sm text-muted">Thông báo của trường</span>
            </div>
          </div>
        </div>

        {/* OA Widget */}
        <div id="oaWidget" />

        {/* Tiện ích Section */}
        <div
          className={`bg-white rounded-lg flex flex-col items-center ${utilitiesExpanded ? 'pb-5' : ''}`}
        >
          <div
            onClick={() => setUtilitiesExpanded(!utilitiesExpanded)}
            className="flex flex-row items-center justify-between px-4 py-3 w-full cursor-pointer"
          >
            <span className="text-title-md font-medium text-primary leading-5.5">Tiện ích</span>
            <Icon
              icon={utilitiesExpanded ? 'zi-chevron-up' : 'zi-chevron-down'}
              size={16}
              style={{ color: '#999' }}
            />
          </div>

          {utilitiesExpanded && (
            <div className="flex flex-col gap-3 w-full items-center">
              {/* Row 1 */}
              <div className="flex flex-row justify-between items-start px-1 w-full h-21">
                {utilities.slice(0, 4).map((util) => (
                  <div
                    key={util.id}
                    onClick={
                      util.title === 'Lịch học'
                        ? () => navigateForward(navigate, PATHS.SCHEDULE)
                        : showComingSoon
                    }
                    className="w-21.5 flex flex-col items-center gap-2 p-1 cursor-pointer"
                  >
                    <div className="w-13 h-13 min-w-13 rounded-xl bg-icon-bg flex items-center justify-center">
                      <img src={util.icon} alt={util.title} className="w-7 h-7 object-contain" />
                    </div>
                    <span className="text-body-sm text-primary text-center leading-4">
                      {util.title}
                    </span>
                  </div>
                ))}
              </div>
              {/* Row 2 */}
              <div className="flex flex-row justify-between items-start px-1 w-full h-21">
                {utilities.slice(4, 8).map((util) => (
                  <div key={util.id} onClick={showComingSoon} className="w-21.5 flex flex-col items-center gap-2 p-1 cursor-pointer">
                    <div className="w-13 h-13 min-w-13 rounded-xl bg-icon-bg flex items-center justify-center">
                      <img src={util.icon} alt={util.title} className="w-7 h-7 object-contain" />
                    </div>
                    <span className="text-body-sm text-primary text-center leading-4">
                      {util.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* List Section */}
        <div className="bg-white rounded-xl shadow-[0px_2px_0px_0px_rgba(0,0,0,0.02)] overflow-hidden py-3 flex flex-col gap-3">
          <div onClick={showComingSoon} className="bg-white px-3 py-2 flex items-center cursor-pointer">
            <div className="flex flex-row items-center gap-3 flex-1">
              <img
                src={listGioiThieu}
                alt="Giới thiệu"
                className="w-6 h-6 object-contain shrink-0"
              />
              <div className="flex flex-col gap-1 flex-1 min-w-0">
                <span className="font-medium text-body-lg text-dark leading-5">Giới thiệu</span>
                <span className="text-body-md text-meta leading-4.5 truncate">
                  Thông tin tổng thể về trường
                </span>
              </div>
              <Icon icon="zi-chevron-right" size={16} style={{ color: '#999', flexShrink: 0 }} />
            </div>
          </div>
          <div onClick={showComingSoon} className="bg-white px-3 py-2 flex items-center cursor-pointer">
            <div className="flex flex-row items-center gap-3 flex-1">
              <img
                src={listDangKy}
                alt="Đăng ký tuyển sinh"
                className="w-6 h-6 object-contain shrink-0"
              />
              <div className="flex flex-col gap-1 flex-1 min-w-0">
                <span className="font-medium text-body-lg text-dark leading-5">
                  Đăng ký tuyển sinh
                </span>
                <span className="text-body-md text-meta leading-4.5 truncate">
                  Tuyển sinh đại học cao đẳng 2025
                </span>
              </div>
              <Icon icon="zi-chevron-right" size={16} style={{ color: '#999', flexShrink: 0 }} />
            </div>
          </div>
        </div>

        {/* Tin tức Section */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-row justify-between items-center px-1">
            <span className="text-title-md font-medium text-secondary">Tin tức</span>
            <div onClick={showComingSoon} className="flex flex-row items-center gap-1 cursor-pointer">
              <span className="text-body-sm text-muted">Xem tất cả</span>
              <Icon icon="zi-chevron-right" size={13} style={{ color: '#999' }} />
            </div>
          </div>
          {newsItems.map((news) => (
            <div
              key={news.id}
              onClick={() =>
                navigateForward(navigate, PATHS.NEWS_DETAIL, { title: news.title, img: news.img })
              }
              className="bg-white rounded-lg p-4 flex flex-row gap-4 items-center cursor-pointer"
            >
              <div
                className="w-20.5 h-20.5 rounded-lg bg-[#f0f0f0] shrink-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${news.img})` }}
              />
              <div className="flex-1 flex flex-col gap-2 min-w-0">
                <span className="font-medium text-body-md text-secondary leading-4.5 line-clamp-2">
                  {news.title}
                </span>
                <span className="text-body-sm text-muted line-clamp-2">{news.desc}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-row justify-between items-center px-1">
            <span className="text-title-md font-medium text-secondary">Video</span>
            <div onClick={showComingSoon} className="flex flex-row items-center gap-1 cursor-pointer">
              <span className="text-body-sm text-muted">Xem tất cả</span>
              <Icon icon="zi-chevron-right" size={13} style={{ color: '#999' }} />
            </div>
          </div>
          <div className="flex flex-row overflow-x-auto pb-1">
            {videoItems.map((video) => (
              <div
                key={video.id}
                className="w-33 h-49.5 rounded-xl relative overflow-hidden mr-3 shrink-0 bg-contain bg-no-repeat bg-center bg-black"
                style={{ backgroundImage: `url(${video.img})` }}
              >
                <div className="absolute bottom-0 left-0 right-0 h-12.5 bg-linear-to-t from-black/60 to-transparent flex items-end p-2">
                  <div className="text-white text-caption flex items-center gap-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                    </svg>
                    <span>{video.views}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Page>
  );
};

export default HomePage;
