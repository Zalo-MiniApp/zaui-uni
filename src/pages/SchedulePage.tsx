import React from 'react';
import { Page, Icon, useSnackbar } from 'zmp-ui';
import Header from '@/components/Header';
import DaySelector from '@/components/DaySelector';
import { configAppView } from 'zmp-sdk';
import { useSchedule } from '@/features/schedule/schedule.query';

const SchedulePage: React.FC = () => {
  const { data: scheduleData = [] } = useSchedule();
  const { openSnackbar } = useSnackbar();
  const showComingSoon = (): void => {
    openSnackbar({ text: 'Chức năng nhà phát triển tự tích hợp sau.', type: 'info', duration: 1500 });
  };
  const [selectedDate, setSelectedDate] = React.useState<Date>(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  });

  React.useEffect(() => {
    configAppView({
      headerColor: '#ffffff',
      headerTextColor: 'black',
      actionBar: { hide: true },
    }).catch(() => {});
  }, []);

  return (
    <Page className="flex flex-col h-screen bg-surface">
      <Header variant="back" title="Lịch học" />

      {/* Filter section */}
      <div className="shrink-0 bg-white px-4 py-4 flex flex-col gap-1">
        {/* Dropdown */}
        <div className="flex flex-col gap-2 pb-4">
          <span className="text-body-md text-dark leading-4.5">Môn học</span>
          <div onClick={showComingSoon} className="flex items-center justify-between h-12 px-3 border border-black/15 rounded-lg bg-white cursor-pointer">
            <span className="text-title-md text-dark leading-5.5">Tất cả</span>
            <Icon icon="zi-chevron-down" size={16} style={{ color: '#0d0d0d' }} />
          </div>
        </div>

        {/* Day selector */}
        <DaySelector value={selectedDate} onChange={setSelectedDate} />
      </div>

      {/* Schedule cards */}
      <div className="flex-1 overflow-y-auto px-3 py-4 flex flex-col gap-3">
        {scheduleData.map((item) => (
          <div key={item.id} className="bg-white rounded-[10px] p-4 flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <span className="text-body-lg font-medium text-deep leading-6">{item.course}</span>
              <span className="text-title-sm font-medium text-dark">{item.dateLabel}</span>
            </div>
            <div className="h-px bg-divider" />
            <div className="flex flex-col gap-4">
              <span className="text-body-lg font-medium text-deep">{item.lesson}</span>
              <div className="flex flex-col text-body-md text-meta leading-4.5">
                <span>{item.room}</span>
                <span>{item.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Page>
  );
};

export default SchedulePage;
