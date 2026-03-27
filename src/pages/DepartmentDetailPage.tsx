import React from 'react';
import { Page } from 'zmp-ui';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import { configAppView } from 'zmp-sdk';
import deptImage from '@/assets/icons/dept-detail-image.png';
import { useSnackbar } from 'zmp-ui';

type TabType = 'intro' | 'teachers' | 'criteria';

const DepartmentDetailPage: React.FC = () => {
  const location = useLocation();
  const categoryName = (location.state as { categoryName?: string })?.categoryName || 'Dược học';
  const [activeTab, setActiveTab] = React.useState<TabType>('intro');
  const {openSnackbar} = useSnackbar();
  React.useEffect(() => {
    configAppView({
      headerColor: '#ffffff',
      headerTextColor: 'black',
      actionBar: { hide: true },
    }).catch(() => {});
  }, []);

  return (
    <Page className="bg-[#f8f9fd] flex flex-col h-screen overflow-hidden">
      <Header variant="back" title={categoryName} />

      {/* Tabs */}
      <div className="flex items-center justify-center gap-8.5 px-4 py-4 bg-white shrink-0">
        {(
          [
            { key: 'intro', label: 'Giới thiệu' },
            { key: 'teachers', label: 'Giảng viên' },
            { key: 'criteria', label: 'Tiêu chí xét tuyển' },
          ] as { key: TabType; label: string }[]
        ).map((tab) => (
          <div
            key={tab.key}
            className={`relative pb-1.5 cursor-pointer text-center text-body-lg ${
              activeTab === tab.key ? ' text-brand' : ' text-muted'
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
            {activeTab === tab.key && (
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.75 bg-brand rounded-sm" />
            )}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-4 py-3 pb-20 min-h-0">
        {activeTab === 'intro' && (
          <div className="flex flex-col gap-4">
            <h3 className="text-title-md font-medium text-deep leading-normal m-0">
              Ngành {categoryName}
            </h3>
            <p className="text-body-md text-dark leading-normal m-0">
              Để có thể theo đuổi ngành Dược và thành công trong các lĩnh vực liên quan, bạn cần có
              những tố chất và kỹ năng sau:
            </p>
            <div className="w-full h-50 rounded-lg overflow-hidden">
              <img src={deptImage} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="text-body-md text-dark leading-normal">
              <p className="mb-2">
                Kiến thức khoa học: Ngành Dược học đòi hỏi kiến thức vững vàng về hóa học, sinh học
                và các nguyên lý y học cơ bản. Sự hiểu biết sâu về các khái niệm và nguyên lý này là
                cần thiết để hiểu và áp dụng chúng trong các công việc liên quan đến thuốc.
              </p>
              <p className="mb-2">
                Kỹ năng phân tích và quan sát: Học viên Dược học cần có khả năng sử dụng các phương
                pháp phân tích để xác định thành phần và tính chất của các loại thuốc. Họ cũng cần
                có khả năng quan sát kỹ lưỡng và chính xác để nhận biết các chi tiết nhỏ và sự khác
                biệt trong các loại thuốc.
              </p>
              <p className="mb-2">
                Trách nhiệm và sự tỉ mỉ: Ngành Dược học yêu cầu sự tỉ mỉ và chính xác cao trong công
                việc. Việc pha chế và đóng gói thuốc yêu cầu sự cẩn thận và chính xác để đảm bảo an
                toàn và hiệu quả trong việc sử dụng thuốc.
              </p>
              <p className="mb-2">
                Kỹ năng giao tiếp và tư vấn: Dược sĩ cần có khả năng giao tiếp tốt để tư vấn bệnh
                nhân về cách sử dụng thuốc và giải đáp các câu hỏi liên quan. Sự thông cảm và khả
                năng lắng nghe cũng là những phẩm chất cần thiết để tương tác hiệu quả với bệnh
                nhân.
              </p>
              <p>
                Đạo đức nghề nghiệp: Ngành Dược học có một vai trò quan trọng trong việc chăm sóc
                sức khỏe của con người. Đạo đức nghề nghiệp là yếu tố không thể thiếu, bao gồm sự
                trung thực, tôn trọng và đảm bảo an toàn và chất lượng của thuốc.
              </p>
            </div>
          </div>
        )}
        {activeTab === 'teachers' && (
          <div className="flex flex-col gap-4">
            <h3 className="text-title-md font-medium text-deep leading-normal m-0">Giảng viên</h3>
            <p className="text-body-md text-dark leading-normal m-0">Đang cập nhật...</p>
          </div>
        )}
        {activeTab === 'criteria' && (
          <div className="flex flex-col gap-4">
            <h3 className="text-title-md font-medium text-deep leading-normal m-0">
              Tiêu chí xét tuyển
            </h3>
            <p className="text-body-md text-dark leading-normal m-0">Đang cập nhật...</p>
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="shrink-0 px-4 pt-2 fixed bottom-0 w-full left-0 bg-[#f8f9fd]">
        <button
          className="w-full h-12 bg-brand text-white border-none rounded-3xl text-title-md cursor-pointer"
          onClick={() => {
          openSnackbar({
            text: 'Chức năng nhà phát triển tự tích hợp sau.',
            type: 'info',
            duration: 1500,
          });
        }}
        >
          Đăng ký xét tuyển
        </button>
      </div>
    </Page>
  );
};

export default DepartmentDetailPage;
