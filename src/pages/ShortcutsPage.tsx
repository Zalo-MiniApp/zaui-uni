import React from 'react';
import { Page, useSnackbar } from 'zmp-ui';
import Header from '@/components/Header';

import iconTuVan from '@/assets/icons/All shortcut/icon-shortcut-counseling.svg';
import iconTraCuu from '@/assets/icons/All shortcut/icon-shortcut-lookup.png';
import iconGopY from '@/assets/icons/All shortcut/icon-shortcut-feedback.png';
import iconXeBus from '@/assets/icons/All shortcut/icon-shortcut-bus.png';
import iconGiaoTrinh from '@/assets/icons/All shortcut/icon-shortcut-textbook.png';
import iconItem1 from '@/assets/icons/All shortcut/icon-shortcut-item-1.png';
import iconItem2 from '@/assets/icons/All shortcut/icon-shortcut-item-2.png';
import iconItem3 from '@/assets/icons/All shortcut/icon-shortcut-item-3.png';
import iconItem4 from '@/assets/icons/All shortcut/icon-shortcut-item-4.png';
import iconItem5 from '@/assets/icons/All shortcut/icon-shortcut-textbook.png';

interface ShortcutItem {
  id: number;
  title: string;
  icon: string;
}

const ShortcutsPage: React.FC = () => {
  const { openSnackbar } = useSnackbar();
  const showComingSoon = (): void => {
    openSnackbar({ text: 'Chức năng nhà phát triển tự tích hợp sau.', type: 'info', duration: 1500 });
  };
  const shortcuts: ShortcutItem[] = [
    { id: 1, title: 'Tư vấn', icon: iconTuVan },
    { id: 2, title: 'Tra cứu', icon: iconTraCuu },
    { id: 3, title: 'Góp ý', icon: iconGopY },
    { id: 4, title: 'Xe bus', icon: iconXeBus },
    { id: 5, title: 'Giáo trình', icon: iconGiaoTrinh },
    { id: 6, title: 'Item', icon: iconItem1 },
    { id: 7, title: 'Item', icon: iconItem2 },
    { id: 8, title: 'Item', icon: iconItem3 },
    { id: 9, title: 'Item', icon: iconItem4 },
    { id: 10, title: 'Item', icon: iconItem5 },
  ];

  return (
    <Page className="bg-surface">
      <Header variant="back" title="Tất cả" />

      {/* Grid content */}
      <div className="p-4">
        <div className="bg-white rounded-xl py-4 px-2">
          <div className="flex flex-wrap gap-y-4">
            {shortcuts.map((item) => (
              <div key={item.id} onClick={showComingSoon} className="w-1/5 flex flex-col items-center gap-2 px-0.5 cursor-pointer">
                <div className="w-13 h-13 min-w-13 rounded-xl bg-icon-bg flex items-center justify-center">
                  <img src={item.icon} alt={item.title} className="w-7 h-7 object-contain" />
                </div>
                <span className="text-body-sm text-primary text-center leading-4">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Page>
  );
};

export default ShortcutsPage;
