# ZaUI Uni

ZaUI Uni là bộ giao diện mẫu (Template) dành cho các ứng dụng giáo dục trên nền tảng Zalo Mini App, tập trung vào trải nghiệm tra cứu thông tin học tập, đăng ký tuyển sinh.

Template này bao gồm đầy đủ các tính năng từ trang chủ tin tức, danh mục ngành đào tạo, lịch học, đăng ký học bổng cho đến hồ sơ cá nhân sinh viên.

# Demo

<img src="./docs/demo.png" alt="Demo" />

# Figma

- Link Figma: https://www.figma.com/design/Byuy8djfHcsnxousDMFSqL/-Public--Zalo-Mini-App-Templates?node-id=9-16784

# QR Code

<div style="display: flex; justify-content: center;">
  <img src="./docs/qr.jpg" alt="QR Code" width="300px" />
</div>

## Tính năng chính

- **Trang chủ**: Hiển thị banner, menu shortcut nhanh, tin tức và video nổi bật từ trường.
- **Ngành đào tạo**: Duyệt danh mục ngành học theo khoa, xem chi tiết giới thiệu, giảng viên và tiêu chí xét tuyển.
- **Đăng ký học bổng**: Form nhập thông tin cá nhân, chọn ngành xét tuyển với DatePicker và Select động.
- **Lịch học**: Xem thời khóa biểu theo môn học, có bộ lọc và chọn ngày.
- **Hồ sơ sinh viên**: Thông tin cá nhân, khoa, mã số sinh viên và địa chỉ.
- **Tất cả tiện ích**: Màn hình shortcut tổng hợp toàn bộ tính năng của ứng dụng.

## Tech stack

<p style="display: flex; flex-wrap: wrap; gap: 4px;">
  <img alt="react" src="https://img.shields.io/badge/React-%5E18.2.0-61dafb?logo=react&logoColor=white" />
  <img alt="react-router" src="https://img.shields.io/badge/React%20Router-%5E6.22.3-ca4245?logo=reactrouter&logoColor=white" />
  <img alt="react-query" src="https://img.shields.io/badge/TanStack%20Query-%5E5-ff4154?logo=reactquery&logoColor=white" />
  <img alt="axios" src="https://img.shields.io/badge/Axios-%5E1-5a29e4?logo=axios&logoColor=white" />
  <img alt="react-transition-group" src="https://img.shields.io/badge/React%20Transition%20Group-%5E4.4.5-3b3b3b" />
  <img alt="zmp-ui" src="https://img.shields.io/badge/ZMP%20UI-%5E1.11.13-1f6fff?logo=zalando&logoColor=white" />
  <img alt="zmp-sdk" src="https://img.shields.io/badge/ZMP%20SDK-%5E2.51.1-0a84ff?logo=android&logoColor=white" />
  <img alt="tailwindcss" src="https://img.shields.io/badge/Tailwind%20CSS-%5E4.2.2-38bdf8?logo=tailwindcss&logoColor=white" />
  <img alt="vite" src="https://img.shields.io/badge/Vite-%5E5.4.21-646cff?logo=vite&logoColor=white" />
  <img alt="typescript" src="https://img.shields.io/badge/TypeScript-%5E5.3.3-3178c6?logo=typescript&logoColor=white" />
</p>

Dự án sử dụng các công nghệ mới nhất:

- **Core**: React 18, ZMP SDK, ZMP UI.
- **Routing**: React Router v6 với animated transitions.
- **Data Fetching**: TanStack Query v5 + Axios.
- **Styling**: TailwindCSS v4.
- **Build Tool**: Vite 5.x.

## Hướng dẫn cài đặt và sử dụng

### Sử dụng Zalo Mini App Extension

1. Cài đặt [Visual Studio Code](https://code.visualstudio.com/download) và [Zalo Mini App Extension](https://miniapp.zaloplatforms.com/documents/devtools).
2. Nhấp vào **Create Project** > Chọn template **ZaUI Uni** > Đợi khởi tạo dự án.
3. Cấu hình **App ID** và **Install Dependencies**, sau đó vào bảng **Run** > chọn **Start** để bắt đầu phát triển 🚀

### Sử dụng Zalo Mini App CLI

1. [Cài đặt Node JS](https://nodejs.org/en/download/).
2. [Cài đặt Mini App DevTools CLI](https://miniapp.zaloplatforms.com/documents/devtools/cli/intro/).
3. Tải xuống hoặc clone repository này.
4. Cài đặt thư viện:
   ```bash
   npm install
   ```
5. Chạy dev server:
   ```bash
   zmp start
   ```
6. Mở `localhost:3000` trên trình duyệt 🔥

## Triển khai (Deployment)

1. Tạo Mini App ID mới (Tham khảo [Hướng dẫn tạo Mini App](https://miniapp.zaloplatforms.com/documents/tutorial/coffee-shop)).
2. Triển khai code lên Zalo bằng ID vừa tạo.

   Nếu dùng `zmp-cli`:

   ```bash
   zmp login
   zmp deploy
   ```

3. Quét mã QR bằng Zalo để xem trước phiên bản đã deploy.

## Cấu trúc & Tùy biến (Usage)

Repository này chứa sẵn các UI components và cấu trúc logic cần thiết cho một ứng dụng giáo dục. Bạn có thể tích hợp API nội bộ hoặc sửa đổi code theo nhu cầu.

**Cấu trúc thư mục:**

```
src/
├── assets/               # Hình ảnh, icon và tài nguyên tĩnh
├── components/           # Components tái sử dụng (Header, DaySelector, CustomIcons...)
├── constants/
│   ├── endpoints.ts      # Tất cả API endpoint URLs
│   └── paths.ts          # Tất cả route paths của ứng dụng
├── features/             # Logic theo từng tính năng (feature-based)
│   ├── categories/
│   │   ├── categories.types.ts    # TypeScript interfaces / types
│   │   ├── categories.api.ts      # Gọi API với Axios
│   │   ├── categories.mock.ts     # Dữ liệu mock (hardcoded)
│   │   ├── categories.service.ts  # Điều phối mock / API thật
│   │   └── categories.query.ts    # TanStack Query hooks
│   ├── schedule/         # (cấu trúc tương tự)
│   ├── profile/          # (cấu trúc tương tự)
│   └── home/             # Tin tức + Video cho trang chủ
├── lib/
│   └── api.ts            # Axios instance (base URL, timeout, headers)
├── pages/                # Các màn hình chính
│   ├── HomePage.tsx
│   ├── CategoryPage.tsx
│   ├── SchedulePage.tsx
│   ├── ProfilePage.tsx
│   ├── ScholarshipPage.tsx
│   ├── DepartmentDetailPage.tsx
│   ├── NewsDetailPage.tsx
│   └── ShortcutsPage.tsx
├── utils/
│   └── navigation.ts     # Điều hướng có animation
└── app.tsx               # Root — routes, bottom navigation, QueryClientProvider
```

- **`app-config.json`**: [Cấu hình Zalo Mini App](https://miniapp.zaloplatforms.com/documents/intro/getting-started/app-config/).

## Hướng dẫn tích hợp (Recipes)

### Kiến trúc Data Fetching

Mỗi tính năng trong `src/features/` tuân theo cấu trúc 4 file:

| File           | Vai trò                                              |
| -------------- | ---------------------------------------------------- |
| `*.types.ts`   | TypeScript interfaces và types của feature           |
| `*.api.ts`     | Định nghĩa hàm gọi HTTP bằng Axios                   |
| `*.mock.ts`    | Dữ liệu hardcoded dùng khi chưa có backend           |
| `*.service.ts` | Điều phối giữa mock và API thật qua flag `USE_MOCK`  |
| `*.query.ts`   | TanStack Query hooks dùng trực tiếp trong components |

**Luồng dữ liệu:**

```
Component → *.query.ts (useQuery) → *.service.ts → *.mock.ts (mock)
                                                 ↘ *.api.ts → Axios → Backend (thật)
```

---

### 1. Chuyển từ mock sang API thật

Khi backend sẵn sàng, chỉ cần sửa một dòng trong `*.service.ts` của feature tương ứng:

```ts
// src/features/categories/categories.service.ts
const USE_MOCK = false; // Đổi từ true → false
```

Dữ liệu sẽ được lấy từ endpoint khai báo trong `src/constants/endpoints.ts` thông qua Axios instance tại `src/lib/api.ts`.

---

### 2. Thêm base URL cho API thật

Cập nhật `src/lib/api.ts`:

```ts
const api = axios.create({
  baseURL: 'https://your-real-api.com', // Thay bằng URL thật
  timeout: 10000,
});
```

---

### 3. Thêm tính năng mới

Tạo thư mục `src/features/<tên-feature>/` với 5 file theo cấu trúc chuẩn. Ví dụ `notifications`:

1. **`endpoints.ts`** — thêm `NOTIFICATIONS: '/api/notifications'`
2. **`notifications.types.ts`** — định nghĩa interface
3. **`notifications.api.ts`** — `fetchNotifications()` dùng Axios
4. **`notifications.mock.ts`** — dữ liệu hardcoded, import type từ `.types.ts`
5. **`notifications.service.ts`** — `getNotifications()` với `USE_MOCK` flag
6. **`notifications.query.ts`** — `useNotifications()` hook với TanStack Query

Dùng trong component:

```tsx
const { data: notifications = [] } = useNotifications();
```

---

### 4. Tích hợp form đăng ký học bổng

Form trong `ScholarshipPage.tsx` đang dùng state cục bộ. Để gửi dữ liệu lên server:

```ts
import api from '../lib/api';

const handleSubmit = async () => {
  await api.post('/api/scholarship', { name, dob, majors });
};
```

---

### 5. Lịch học động theo ngày

`SchedulePage.tsx` có sẵn `DaySelector` và `selectedDate`. Để lọc theo ngày, cập nhật `schedule.query.ts`:

```ts
export const useSchedule = (date: Date) =>
  useQuery({
    queryKey: ['schedule', date.toISOString()],
    queryFn: () => getSchedule(date),
  });
```

## Design Disclaimer

**Lưu ý:**

- Nội dung thiết kế, hình ảnh minh họa và ví dụ trong bài viết này chỉ mang tính chất tham khảo nhằm phục vụ mục đích nghiên cứu, minh họa và thử nghiệm.

- Zalo Group không chịu trách nhiệm cho bất kỳ việc sử dụng, triển khai hoặc diễn giải nào phát sinh từ nội dung này trong môi trường thực tế hoặc thương mại.

## License

Copyright (c) Zalo Group and its affiliates. All rights reserved.

The examples provided by Zalo Group are for non-commercial testing and evaluation
purposes only. Zalo Group reserves all rights not expressly granted.
