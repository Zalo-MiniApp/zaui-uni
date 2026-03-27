import React from 'react';
import { Page } from 'zmp-ui';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import { configAppView } from 'zmp-sdk';
import newsImg1 from '@/assets/news-thumbnail.png';

const NewsDetailPage: React.FC = () => {
  const location = useLocation();
  const newsTitle =
    (location.state as { title?: string })?.title ||
    'Học viện Báo chí và Tuyên truyền công bố bảng quy đổi, điểm sàn xét tuyển';
  const newsImg = (location.state as { img?: string })?.img || newsImg1;

  React.useEffect(() => {
    configAppView({
      headerColor: '#ffffff',
      headerTextColor: 'black',
      actionBar: { hide: true },
    }).catch(() => {});
  }, []);

  return (
    <Page className="bg-[#f8f9fd] flex flex-col h-screen overflow-hidden">
      <Header variant="back" title="Tin tức" />

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 min-h-0">
        <p className="text-title-md font-medium text-deep leading-normal m-0">{newsTitle}</p>

        {newsImg && (
          <div className="w-full aspect-video rounded-lg overflow-hidden shrink-0">
            <img src={newsImg} alt="" className="w-full h-full object-cover block" />
          </div>
        )}

        <div className="text-body-md text-dark leading-normal">
          <p className="mb-3">
            Năm nay, theo yêu cầu của Bộ Giáo dục và Đào tạo, những trường dùng nhiều phương thức,
            tổ hợp phải quy đổi điểm tương đương.
          </p>
          <p className="mb-3">
            Thí sinh đăng ký, điều chỉnh nguyện vọng không giới hạn số lần đến 17h ngày 28/7. Các em
            có thể truy cập trang Tra cứu đại học của VnExpress, xem thông tin tuyển sinh như tổ
            hợp, học phí, biến động điểm chuẩn các năm theo ngành, trường. Hệ thống cũng đưa ra gợi
            ý nhóm ngành, trường năm ngoại có điểm chuẩn tiệm cận mức điểm thí sinh đạt được theo
            từng tổ hợp.
          </p>
          <p className="mb-3">
            Thời gian nộp lệ phí xét tuyển trực tuyến từ 29/7 đến 17h ngày 5/8. Các trường đại học
            công bố điểm chuẩn trước 17h ngày 22/8.
          </p>
          <p className="mb-3">
            Thông tin được Học viện Báo chí và Tuyên truyền công bố tối 21/7. Dù đăng ký xét tuyển
            theo phương thức nào, thí sinh phải đáp ứng yêu cầu chung là đạt điểm trung bình học bạ
            mỗi năm từ 6,5 trở lên, hạnh kiểm khá.
          </p>
          <p className="mb-3">
            Với phương thức xét điểm thi tốt nghiệp, các ngành thuộc nhóm 1 (báo chí và xuất bản), 3
            (Lịch sử) và 4 (truyền thông, quảng cáo, quan hệ quốc tế) lấy điểm sàn 25/40, trong đó
            môn chính nhân hệ số 2.
          </p>
          <p className="mb-3">
            Còn các ngành thuộc nhóm 2 (khối lý luận) có ngưỡng đầu vào 18/30. Cả hai mức sàn này
            đều không thay đổi so với năm 2024.
          </p>
          <p className="mb-3">
            Với phương thức xét tuyển kết hợp học bạ và chứng chỉ quốc tế (SAT, IELTS), thí sinh
            phải có điểm trung bình 6 học kỳ môn Văn hoặc Tiếng Anh đạt từ 7 trở lên, tùy ngành hoặc
            nhóm ngành ứng tuyển.
          </p>
          <p>
            Ngoài ra, Học viện Báo chí và Tuyên truyền công bố bảng quy đổi điểm chuẩn giữa các
            phương thức.
          </p>
        </div>
      </div>
    </Page>
  );
};

export default NewsDetailPage;
