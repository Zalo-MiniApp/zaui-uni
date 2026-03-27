# Tổ Chức Code Cơ Bản

## Mục tiêu

- Duy trì codebase rõ ràng, dễ onboarding.
- Giảm coupling giữa UI và hạ tầng.
- Tạo nền tảng ổn định cho refactor và scale feature.

## Quy tắc bắt buộc

- Toàn bộ code mới dùng TypeScript (`.ts`, `.tsx`).
- Khai báo type/interface rõ ràng ở boundary: props, API response, service contract.
- Không hardcode constants, config, endpoint, request builder trong UI component.
- Tách constants, config, API client vào module riêng theo feature/domain.

## Checklist áp dụng

1. Trước khi code component, xác định type đầu vào/đầu ra.
2. Đưa API call vào service/client trước, rồi mới nối vào UI.
3. Đưa hằng số text/status/key dùng lại nhiều nơi vào constants.
4. Kiểm tra component không chứa logic config hoặc URL endpoint.

## Dấu hiệu vi phạm

- Component chứa trực tiếp URL API hoặc logic build request.
- Dùng `any` ở các boundary chính mà không có lý do kỹ thuật rõ ràng.
- Cấu hình rải rác nhiều nơi, khó truy vết nguồn thay đổi.
