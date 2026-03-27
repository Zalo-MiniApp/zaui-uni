import React from 'react';
import { Page, Icon, useSnackbar, DatePicker, Select, Input } from 'zmp-ui';
import { configAppView } from 'zmp-sdk';
import globeGraduation from '@/assets/icons/globe-graduation.png';

interface Major {
  id: number;
  label: string;
  value: string;
}

const PROVINCES = ['Hà Nội', 'TP. Hồ Chí Minh', 'Đà Nẵng', 'Hải Phòng', 'Cần Thơ'];

const HIGH_SCHOOLS: Record<string, string[]> = {
  'Hà Nội': ['THPT Chu Văn An', 'THPT Trần Phú', 'THPT Kim Liên', 'THPT Nguyễn Gia Thiều'],
  'TP. Hồ Chí Minh': [
    'THPT Lê Hồng Phong',
    'THPT Nguyễn Thị Minh Khai',
    'THPT Trần Đại Nghĩa',
    'THPT Gia Định',
  ],
  'Đà Nẵng': ['THPT Phan Châu Trinh', 'THPT Trần Phú', 'THPT Nguyễn Thượng Hiền'],
  'Hải Phòng': ['THPT Thái Phiên', 'THPT Trần Nguyên Hãn', 'THPT Lê Quý Đôn'],
  'Cần Thơ': ['THPT Châu Văn Liêm', 'THPT Phan Ngọc Hiển', 'THPT Thốt Nốt'],
};

const MAJORS = [
  'Công nghệ thông tin',
  'Kinh tế',
  'Quản trị kinh doanh',
  'Kỹ thuật điện',
  'Y khoa',
  'Dược học',
  'Luật',
];

const ScholarshipPage: React.FC = () => {
  const [dob, setDob] = React.useState<Date | undefined>(undefined);
  const [province, setProvince] = React.useState('');
  const [majors, setMajors] = React.useState<Major[]>([
    { id: 1, label: 'Ngành học 1', value: '' },
    { id: 2, label: 'Ngành học 2', value: '' },
  ]);

  const { openSnackbar } = useSnackbar();

  React.useEffect(() => {
    configAppView({
      headerColor: '#ffffff',
      headerTextColor: 'black',
      actionBar: { hide: true },
    }).catch(() => {});
  }, []);

  const addMajor = (): void => {
    const nextId = majors.length + 1;
    setMajors([...majors, { id: nextId, label: `Ngành học ${nextId}`, value: '' }]);
  };

  const deleteMajor = (): void => {
    if (majors.length > 2) setMajors(majors.slice(0, -1));
  };

  return (
    <Page className="bg-surface relative pb-14 overflow-y-scroll h-screen">
      {/* Scrollable content */}
      <div className="relative px-3 pt-3 pb-35 flex flex-col gap-4">
        {/* Card 1: Personal Info */}
        <div className="bg-white rounded-xl px-3 py-4 flex flex-col gap-1 overflow-hidden">
          {/* Illustration */}
          <div className="flex justify-center mb-2">
            <div className="w-33 h-33 rounded-full bg-icon-bg flex items-center justify-center p-4">
              <img src={globeGraduation} alt="" className="w-25 h-25 object-contain" />
            </div>
          </div>

          {/* Họ và Tên */}
          <div className="flex flex-col gap-2 pb-4">
            <label className="text-body-md text-dark">Họ và Tên</label>
            <Input placeholder="Nhập Họ và Tên" />
          </div>

          {/* Ngày tháng năm sinh */}
          <div className="flex flex-col gap-2 pb-4">
            <label className="text-body-md text-dark">Ngày tháng năm sinh</label>
            <DatePicker
              value={dob}
              onChange={(value: Date) => setDob(value)}
              placeholder="dd/mm/yyyy"
              dateFormat="dd/mm/yyyy"
            />
          </div>

          {/* Số CCCD */}
          <div className="flex flex-col gap-2 pb-4">
            <label className="text-body-md text-dark">Số CCCD</label>
            <Input placeholder="Nhập số CCCD" />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2 pb-4">
            <label className="text-body-md text-dark">Email</label>
            <Input type="text" placeholder="Nhập email" />
          </div>

          {/* Nơi học lớp 12 */}
          <div className="flex flex-col gap-2 pb-4">
            <label className="text-body-md text-dark">Nơi học lớp 12</label>
            <Select
              value={province}
              onChange={(val) => setProvince(val as string)}
              placeholder="Chọn tỉnh/ thành phố"
              closeOnSelect
            >
              {PROVINCES.map((p) => (
                <Select.Option key={p} value={p} title={p} />
              ))}
            </Select>
          </div>

          {/* Trường THPT */}
          <div className="flex flex-col gap-2 pb-4">
            <label className="text-body-md text-dark">Trường THPT</label>
            <Select placeholder="Chọn trường THPT" disabled={!province} closeOnSelect>
              {(HIGH_SCHOOLS[province] ?? []).map((s) => (
                <Select.Option key={s} value={s} title={s} />
              ))}
            </Select>
          </div>

          {/* Địa chỉ liên hệ */}
          <div className="flex flex-col gap-2 pb-4">
            <label className="text-body-md text-dark">Địa chỉ liên hệ</label>
            <Input.TextArea
              placeholder="Nhập rõ số nhà, đường, phường/ xã, tỉnh/ thành phố"
              minLength={3}
            />
          </div>
        </div>

        {/* Card 2: Major Selection */}
        <div className="bg-white rounded-xl px-3 py-4 flex flex-col gap-1 overflow-hidden">
          <p className="text-title-lg font-medium text-deep pb-4 m-0">
            Ngành học đăng ký xét tuyển Đại học
          </p>

          {majors.map((major, index) => (
            <div key={major.id} className="flex flex-col gap-2 pb-4">
              <div className="flex items-center justify-between">
                <label className="text-body-md text-dark">{major.label}</label>
                {index === majors.length - 1 && majors.length > 2 && (
                  <button
                    className="bg-transparent border-none cursor-pointer p-0 flex items-center"
                    onClick={deleteMajor}
                  >
                    <Icon icon="zi-delete" size={16} />
                  </button>
                )}
              </div>
              <Select
                value={major.value || undefined}
                onChange={(val) =>
                  setMajors((prev) =>
                    prev.map((m) => (m.id === major.id ? { ...m, value: val as string } : m))
                  )
                }
                placeholder="Chọn ngành học"
                closeOnSelect
              >
                {MAJORS.map((m) => (
                  <Select.Option key={m} value={m} title={m} />
                ))}
              </Select>
            </div>
          ))}

          {/* Thêm ngành button */}
          <button
            className="flex items-center justify-center gap-2 p-2 bg-transparent border-none cursor-pointer text-body-lg font-medium text-brand leading-5"
            onClick={addMajor}
          >
            <Icon icon="zi-plus" size={24} style={{ color: '#0068ff' }} />
            <span>Thêm ngành</span>
          </button>
        </div>
      </div>

      {/* Sticky bottom button */}
      <div
        className="sticky bottom-0 left-0 right-0 px-4 py-3 bg-white z-10"
        onClick={() => {
          openSnackbar({
            text: 'Chức năng nhà phát triển tự tích hợp sau.',
            type: 'info',
            duration: 1500,
          });
        }}
      >
        <button className="w-full flex items-center justify-center  gap-2 px-6 py-3 bg-brand border-none rounded-[100px] cursor-pointer text-body-lg font-medium text-white leading-5">
          <span>Xác nhận</span>
        </button>
      </div>
    </Page>
  );
};

export default ScholarshipPage;
