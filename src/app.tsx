import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { App, ZMPRouter, SnackbarProvider, Text, Box, BottomNavigation } from 'zmp-ui';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import HomePage from '@/pages/HomePage';
import ScholarshipPage from '@/pages/ScholarshipPage';
import CategoryPage from '@/pages/CategoryPage';
import ProfilePage from '@/pages/ProfilePage';
import ShortcutsPage from '@/pages/ShortcutsPage';
import DepartmentDetailPage from '@/pages/DepartmentDetailPage';
import NewsDetailPage from '@/pages/NewsDetailPage';
import SchedulePage from '@/pages/SchedulePage';
import {
  HomeNavIcon,
  ScholarshipNavIcon,
  CategoryNavIcon,
  UserNavIcon,
} from '@/components/CustomIcons';
import { navigateTab, getNavigationDirection } from '@/utils/navigation';
import Header from '@/components/Header';
import { PATHS, PATH_TO_TAB } from '@/constants/paths';

const queryClient = new QueryClient();

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const direction = getNavigationDirection();
  const activeTab = PATH_TO_TAB[location.pathname] || 'home';

  const handleTabChange = (key: string): void => {
    navigateTab(navigate, activeTab, key);
  };

  return (
    <div className="flex flex-col h-screen">
      {!PATH_TO_TAB[location.pathname] ? <div></div> : <Header variant="logo" />}
      <TransitionGroup
        className={`page-transition-group flex-1 ${direction === 'forward' ? 'slide-forward' : 'slide-backward'}`}
      >
        <CSSTransition key={location.pathname} classNames="page" timeout={300}>
          <Routes location={location}>
            <Route path={PATHS.HOME} element={<HomePage />} />
            <Route path={PATHS.SCHOLARSHIP} element={<ScholarshipPage />} />
            <Route path={PATHS.CATEGORY} element={<CategoryPage />} />
            <Route path={PATHS.PROFILE} element={<ProfilePage />} />
            <Route path={PATHS.SHORTCUTS} element={<ShortcutsPage />} />
            <Route path={PATHS.DEPARTMENT_DETAIL} element={<DepartmentDetailPage />} />
            <Route path={PATHS.NEWS_DETAIL} element={<NewsDetailPage />} />
            <Route path={PATHS.SCHEDULE} element={<SchedulePage />} />
            <Route
              path="*"
              element={
                <Box p={4}>
                  <Text>Page Not Found</Text>
                </Box>
              }
            />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      {!PATH_TO_TAB[location.pathname] ? null : (
        <BottomNavigation fixed activeKey={activeTab} onChange={handleTabChange}>
          <BottomNavigation.Item
            key="home"
            label="Trang chủ"
            icon={<HomeNavIcon size={24} />}
            activeIcon={<HomeNavIcon active size={24} />}
          />
          <BottomNavigation.Item
            key="scholarship"
            label="Học bổng"
            icon={<ScholarshipNavIcon size={24} />}
            activeIcon={<ScholarshipNavIcon active size={24} />}
          />
          <BottomNavigation.Item
            key="category"
            label="Ngành đào tạo"
            icon={<CategoryNavIcon size={24} />}
            activeIcon={<CategoryNavIcon active size={24} />}
          />
          <BottomNavigation.Item
            key="profile"
            label="Cá nhân"
            icon={<UserNavIcon size={24} />}
            activeIcon={<UserNavIcon active size={24} />}
          />
        </BottomNavigation>
      )}
    </div>
  );
};

const MyApp: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <App>
        <SnackbarProvider>
          <ZMPRouter>
            <AnimatedRoutes />
          </ZMPRouter>
        </SnackbarProvider>
      </App>
    </QueryClientProvider>
  );
};

export default MyApp;
