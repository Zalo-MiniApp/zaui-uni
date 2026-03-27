# Công cụ phát triển Zalo Mini App

## Zalo Mini App CLI

### Cài đặt

```bash
npm install -g zmp-cli
```

Kiểm tra cài đặt:

```bash
zmp --help
```

### Các lệnh chính

#### Đăng nhập

```bash
zmp login
```

Mở trình duyệt để đăng nhập với tài khoản Zalo.

#### Tạo project mới

```bash
zmp init my-app
```

Tạo project Mini App mới với template mặc định.

#### Chạy Development Server

```bash
zmp start
```

Khởi động development server với hot reload.

#### Deploy

```bash
# Deploy lên Development
zmp deploy

# Deploy lên Testing
zmp deploy --testing
```

### Cấu hình môi trường

File `.env`:

```env
MINI_APP_ID=your_mini_app_id
```

## Zalo Mini App Extension (VS Code)

### Cài đặt

1. Mở VS Code
2. Tìm "Zalo Mini App" trong Extensions
3. Cài đặt extension

### Tính năng

- **Project management**: Quản lý nhiều Mini App projects
- **Quick deploy**: Deploy nhanh từ VS Code
- **Device mode**: Test trực tiếp trên điện thoại
- **Simulator**: Xem preview trên máy tính
- **Console logs**: Xem logs debug

### Device Mode

Device Mode cho phép test Mini App trực tiếp trên điện thoại với code từ máy tính:

1. Mở Mini App Extension
2. Chọn "Device" tab
3. Quét QR code từ điện thoại
4. Code sẽ được sync real-time

#### Kết nối trực tiếp (Direct Connection)

Yêu cầu:
- Android Debug Bridge (adb) đã cài đặt
- Điện thoại Android kết nối USB

```bash
# Kiểm tra adb
adb --version

# Liệt kê thiết bị
adb devices
```

## Cấu trúc Project

### Template React

```
my-mini-app/
├── app-config.json         # Cấu hình Mini App
├── package.json
├── vite.config.js          # Cấu hình Vite
├── index.html              # Entry point
├── src/
│   ├── app.jsx             # Root component
│   ├── pages/
│   │   ├── index.jsx       # Trang chủ
│   │   └── ...
│   ├── components/
│   │   └── ...
│   └── css/
│       └── app.css
└── public/
    └── ...
```

### vite.config.js

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './',
  base: './',
  build: {
    target: 'es2015',  // Target ES2015 cho tương thích
    outDir: 'dist',
    cssCodeSplit: false
  }
});
```

## Testing & Debugging

### Debug trên Live version

Thêm param `zDebug=true` vào deeplink:

```
https://zalo.me/s/<mini_app_id>/?zDebug=true
```

Sẽ hiển thị icon Debug để xem:
- Console logs
- Network requests
- Element inspector

### Remote Debugging (Android)

1. Bật USB Debugging trên điện thoại
2. Kết nối điện thoại với máy tính
3. Mở Chrome và truy cập `chrome://inspect`
4. Tìm webview của Mini App
5. Click "Inspect"

### Logs trong Development

```javascript
// Console logs sẽ hiển thị trong Extension/CLI
console.log('Debug info:', data);
console.error('Error:', error);
console.warn('Warning:', message);
```

## CI/CD Integration

### Setup với GitHub Actions

```yaml
# .github/workflows/deploy.yml
name: Deploy Mini App

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Mini App
        env:
          ZALO_APP_ID: ${{ secrets.ZALO_APP_ID }}
          ZALO_APP_SECRET: ${{ secrets.ZALO_APP_SECRET }}
          ZALO_REFRESH_TOKEN: ${{ secrets.ZALO_REFRESH_TOKEN }}
          MINI_APP_ID: ${{ secrets.MINI_APP_ID }}
        run: |
          npx zmp-developer-token login $ZALO_APP_ID $ZALO_APP_SECRET $ZALO_REFRESH_TOKEN
          npx zmp-developer-token deploy $MINI_APP_ID
```

### Environment Variables

| Variable | Mô tả |
|----------|-------|
| `ZALO_APP_ID` | ID của Zalo App |
| `ZALO_APP_SECRET` | Secret key của Zalo App |
| `ZALO_REFRESH_TOKEN` | Refresh token (lấy từ Zalo for Developers) |
| `MINI_APP_ID` | ID của Mini App |

**Lưu ý**: `MINI_APP_ID` khác với `ZALO_APP_ID`

## Performance Optimization

### Bundle Size

Giới hạn:
- **Tổng app**: 10MB
- **Mỗi file**: 3MB

### Code Splitting

```javascript
// vite.config.js
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          utils: ['lodash', 'dayjs']
        }
      }
    }
  }
});
```

### Lazy Loading

```javascript
import { lazy, Suspense } from 'react';

const ProductDetail = lazy(() => import('./pages/ProductDetail'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <ProductDetail />
    </Suspense>
  );
}
```

### Image Optimization

```javascript
// Sử dụng import để bundle images
import logo from './assets/logo.png';

// Hoặc host trên CDN
<img src="https://cdn.example.com/logo.png" />
```

## Deployment Limits

| Môi trường | Quota/tháng |
|------------|-------------|
| Development | 300 lần |
| Testing | 60 lần |

## Troubleshooting DevTools

### Extension không hoạt động

1. Reload VS Code window: `Developer: Reload Window`
2. Kiểm tra version extension mới nhất
3. Đăng nhập lại Zalo account

### Device Mode không kết nối

1. Kiểm tra điện thoại và máy tính cùng WiFi
2. Tắt VPN nếu có
3. Thử scan lại QR code

### adb không tìm thấy

```bash
# macOS
export PATH=$PATH:~/Library/Android/sdk/platform-tools

# Windows
set PATH=%PATH%;C:\Users\<username>\AppData\Local\Android\Sdk\platform-tools

# Linux
export PATH=$PATH:~/Android/Sdk/platform-tools
```

### Deploy thất bại

1. Kiểm tra đúng Mini App ID
2. Verify token còn hạn
3. Kiểm tra quota deploy
4. Xem chi tiết lỗi trong terminal
