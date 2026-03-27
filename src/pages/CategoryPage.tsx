import React from 'react';
import { Page, Icon, useSnackbar } from 'zmp-ui';
import { configAppView } from 'zmp-sdk';
import { useNavigate } from 'react-router-dom';
import { navigateForward } from '@/utils/navigation';
import { PATHS } from '@/constants/paths';
import { useCategories } from '@/features/categories/categories.query';

const CategoryPage: React.FC = () => {
  const navigate = useNavigate();
  const { data: categories = [] } = useCategories();
  const { openSnackbar } = useSnackbar();
  const showComingSoon = (): void => {
    openSnackbar({ text: 'Chức năng nhà phát triển tự tích hợp sau.', type: 'info', duration: 1500 });
  };
  const [activeCategory, setActiveCategory] = React.useState<number>(0);
  const sectionRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const contentRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    configAppView({
      headerColor: '#ffffff',
      headerTextColor: 'black',
      actionBar: { hide: true },
    }).catch(() => {});
  }, []);

  const handleCategoryClick = (idx: number): void => {
    setActiveCategory(idx);
    const section = sectionRefs.current[idx];
    const container = contentRef.current;
    if (section && container) {
      const containerRect = container.getBoundingClientRect();
      const sectionRect = section.getBoundingClientRect();
      const scrollTop = container.scrollTop + (sectionRect.top - containerRect.top);
      container.scrollTo({ top: scrollTop, behavior: 'smooth' });
    }
  };

  return (
    <Page>
      <div className="bg-white flex flex-col overflow-hidden" style={{ height: '90vh' }}>
        {/* Info banner */}
        <div className="flex items-center justify-between mx-4 mt-3 px-3 h-11 bg-brand/10 rounded-lg">
          <span className="text-title-sm text-deep">Bạn đang có thắc mắc</span>
          <button onClick={showComingSoon} className="bg-white border-none rounded-xl px-3 py-1 text-body-sm text-brand cursor-pointer whitespace-nowrap">
            Liên hệ với ban cố vấn
          </button>
        </div>

        {/* Search bar */}
        <div className="flex items-center gap-1.5 mx-4 mt-3 px-2 h-8.5 bg-white border border-black/10 rounded-[30px]">
          <Icon icon="zi-search" size={20} style={{ color: '#999', flexShrink: 0 }} />
          <input
            type="text"
            placeholder="Tìm khoa hoặc bệnh"
            className="flex-1 border-none outline-none bg-transparent text-body-md text-primary p-0 placeholder:text-muted"
          />
        </div>

        {/* Two-panel layout */}
        <div className="flex flex-1 mt-3 overflow-hidden mb-10 min-h-0 ">
          {/* Left sidebar */}
          <div className="w-25.75 min-w-25.75 overflow-y-auto flex flex-col items-center gap-2 py-4 px-2.75 bg-surface-card rounded-r-[14px]">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className={`text-body-md text-center cursor-pointer px-2 py-1.5 w-full ${
                  activeCategory === idx ? 'bg-brand text-white  rounded-[14px]' : 'text-neutral'
                }`}
                onClick={() => handleCategoryClick(idx)}
              >
                {cat.name}
              </div>
            ))}
          </div>

          {/* Right content */}
          <div
            className="flex-1 overflow-y-auto relative px-4 pb-5 flex flex-col gap-5 min-h-0"
            ref={contentRef}
          >
            {categories.map((cat, catIdx) => (
              <div
                key={catIdx}
                className="flex flex-col gap-3"
                ref={(el: HTMLDivElement | null) => {
                  sectionRefs.current[catIdx] = el;
                }}
              >
                <span className="font-medium text-body-lg text-secondary">{cat.name}</span>
                <div className="flex flex-wrap gap-2.25">
                  {cat.departments.map((dept, deptIdx) => (
                    <div
                      key={deptIdx}
                      className="bg-surface-card rounded-lg p-2.5 flex flex-col gap-2 min-h-15.25 cursor-pointer"
                      style={{ width: 'calc(50% - 5px)' }}
                      onClick={() =>
                        navigateForward(navigate, PATHS.DEPARTMENT_DETAIL, { categoryName: cat.name })
                      }
                    >
                      <span className="font-medium text-body-md text-secondary">{dept.name}</span>
                      <span className="text-body-sm text-muted">{dept.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Page>
  );
};

export default CategoryPage;
