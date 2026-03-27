# Tổng Quan Về Zalo Mini App

## Zalo Mini App là gì?

Zalo Mini App là những "ứng dụng nhỏ" chạy trực tiếp trên nền tảng Zalo, tận dụng nguồn tài nguyên có sẵn với tiềm năng không giới hạn từ Zalo.

### Đặc điểm chính

- **Không yêu cầu cài đặt**: Chạy trực tiếp trên Zalo
- **Hiệu năng tốt**: Được tối ưu để chạy trên Webview Zalo
- **Tận dụng tính năng Zalo**: Chia sẻ, OA, thanh toán...
- **Nội dung đáng tin cậy**: Đã được Zalo xác thực
- **Tiếp cận người dùng lớn**: Phân phối qua nhiều kênh trên Zalo
- **Kích thước nhỏ gọn**: Tối đa 10MB cho cả app, 3MB cho mỗi file

### Công nghệ

Zalo Mini App được phát triển dựa trên:
- **HTML, CSS, JavaScript** - Web technologies tiêu chuẩn
- **React/Vue** - Các framework phổ biến được hỗ trợ
- **Vite** - Build tool mặc định
- **ZJSBridge** - JavaScript Bridge để giao tiếp với ứng dụng Zalo

## Quy trình phát triển

### 1. Tạo Mini App

```
1. Đăng ký/Sử dụng Zalo App tại https://developers.zalo.me/
2. Truy cập https://mini.zalo.me/developers/
3. Chọn Zalo App → Tạo Mini App
4. Điền thông tin và nhận Mini App ID
```

### 2. Xác thực Mini App

- **Xác thực bằng OA**: Liên kết với Official Account
- **Xác thực bằng giấy tờ**: Cung cấp giấy tờ doanh nghiệp

### 3. Xây dựng Mini App

```bash
# Cài đặt CLI
npm install -g zmp-cli

# Tạo project mới
zmp init my-app

# Chạy development server
zmp start

# Build và deploy
zmp deploy
```

### 4. Phát hành Mini App

1. Truy cập trang quản lý Mini App
2. Gửi yêu cầu xét duyệt
3. Chờ Zalo Team review
4. Publish sau khi được duyệt

## Cấu trúc Project cơ bản

```
my-mini-app/
├── app-config.json       # Cấu hình Mini App
├── package.json
├── vite.config.js        # Cấu hình Vite
├── index.html            # Entry point
├── src/
│   ├── app.jsx           # Root component
│   ├── pages/            # Các trang
│   ├── components/       # Components
│   └── css/              # Styles
└── public/               # Static assets
```

## Cài đặt ZMP SDK

```bash
npm install zmp-sdk
```

### Import và sử dụng

```javascript
import { getAccessToken, getUserInfo } from 'zmp-sdk';

// Lấy access token
const token = await getAccessToken();

// Lấy thông tin user
const userInfo = await getUserInfo();
```

## Entry Points (Điểm truy cập)

Mini App có thể được mở từ nhiều nơi:
- **QR Code**: Quét mã QR
- **Deep Link**: `https://zalo.me/s/<mini_app_id>`
- **Mini App Store**: Tìm kiếm trong store
- **Chia sẻ**: Từ tin nhắn chia sẻ
- **Official Account**: Từ menu OA
- **Shortcut**: Icon trên màn hình thiết bị

## Hosting và Caching

- **Hosting**: Mini App được đóng gói và hosting trên hệ thống Zalo CDN
- **Caching**: Tài nguyên được cache trong bộ nhớ Zalo
- **Auto-update**: Bản cập nhật được tải tự động khi có phiên bản mới

## Bảo mật

- Ứng dụng được Zalo xác thực trước khi phân phối
- Quyền truy cập cần khai báo và xét duyệt
- Secure Context: Chỉ hỗ trợ HTTPS

## Tài nguyên

- **Documentation**: https://mini.zalo.me/documents/
- **Community**: https://mini.zalo.me/community/
- **Design Guidelines**: https://mini.zalo.me/documents/intro/zalo-mini-app-design-guidelines/
- **ZaUI Components**: https://mini.zalo.me/documents/zaui/
