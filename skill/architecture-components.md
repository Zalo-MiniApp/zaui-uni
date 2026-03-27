# Kiến Trúc và Component

## Mục tiêu

- Giữ code dễ mở rộng theo feature.
- Giảm phụ thuộc chéo và giảm độ phức tạp của component.
- Tăng tốc độ chuyển từ design sang code nhờ cấu trúc nhất quán.

## Quy tắc bắt buộc

- Tổ chức code theo feature/domain (ví dụ: `features/auth`, `features/billing`).
- Mỗi feature tự quản lý `components`, `hooks`, `services`, `types` liên quan.
- Tránh tổ chức technical layer toàn cục (`components/`, `hooks/`, `services/`) nếu làm mất ngữ cảnh domain.
- Chỉ dùng function component cho code mới.
- Mỗi component chỉ giải quyết 1 trách nhiệm chính.

## Checklist áp dụng khi code màn hình mới

1. Tạo thư mục theo feature trước khi tạo file.
2. Tách `container` và `presentational` nếu component bắt đầu phình to.
3. Nếu một component xử lý quá nhiều nhánh UI hoặc nhiều side-effects, tách thành component con + custom hook.
4. Đảm bảo dữ liệu đi qua props rõ ràng, tránh "god component".

## Dấu hiệu vi phạm

- Một component vừa fetch data, vừa xử lý business logic, vừa render layout lớn.
- Thêm component mới vào thư mục dùng chung dù chỉ phục vụ một feature.
- Dùng class component cho code mới.
