# Data và Server State

## Mục tiêu

- Quản lý dữ liệu từ server nhất quán, dễ mở rộng.
- Tối ưu trải nghiệm người dùng khi dữ liệu tải chậm hoặc lỗi.
- Tránh lặp logic fetch trong component.

## Quy tắc bắt buộc

- Ưu tiên React Query hoặc SWR cho server state.
- Không tự viết thủ công fetch lifecycle nếu không có lý do đặc biệt.
- Tận dụng cache, stale-time, retry, invalidation của thư viện.
- Mọi màn hình có dữ liệu phải xử lý đủ `loading`, `error`, `empty`.

## Checklist áp dụng

1. Đặt query key rõ ràng theo feature/domain.
2. Chuẩn hóa thông báo lỗi theo cùng pattern UI.
3. Tạo component/trình bày chung cho `loading`, `error`, `empty` nếu lặp lại nhiều nơi.
4. Tách logic gọi API ra service layer, không đặt trong UI component.

## Dấu hiệu vi phạm

- Tự quản lý `isLoading`/`error` thủ công cho mỗi component fetch data.
- Cùng một API nhưng nhiều nơi dùng query key khác nhau không có quy ước.
- Màn hình thiếu trạng thái `empty` hoặc không có hành động xử lý lỗi.
