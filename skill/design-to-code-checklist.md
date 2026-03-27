# Design to Code Checklist

## Mục tiêu

- Chuẩn hóa cách chuyển từ artifact design sang mã nguồn.
- Giảm thiếu sót về state, responsive và accessibility.
- Tạo checklist cố định để AI áp dụng nhất quán.

## 1) Đọc và phân tích design

- Xác định phạm vi màn hình: luồng chính, luồng phụ, edge cases.
- Liệt kê đầy đủ trạng thái UI: `default`, `hover`, `focus`, `disabled`, `loading`, `error`, `empty`.
- Ghi lại breakpoint cần hỗ trợ: mobile trước, rồi `sm`, `md`, `lg` nếu cần.

## 2) Chuyển design thành cấu trúc kỹ thuật

- Chia theo feature/domain trước khi tạo file.
- Tách component theo trách nhiệm đơn lẻ.
- Tách phần logic thành custom hooks nếu có xử lý phức tạp.
- Xác định dữ liệu nào là local state, global state (Zustand), server state (React Query/SWR).

## 3) Áp dụng design system

- Không hardcode màu chữ trong component; dùng color tokens.
- Không hardcode cỡ chữ trong component; dùng typography scale tokens.
- Ưu tiên class Tailwind dựa trên token đã cấu hình trong theme.

## 4) Triển khai UI

- Chỉ dùng Tailwind CSS để style.
- Dùng semantic HTML và bảo đảm keyboard navigation.
- Giữ layout đơn giản, dễ đọc, tránh tối ưu sớm.

## 5) Triển khai state và data

- Global/client state dùng Zustand.
- Server state dùng React Query hoặc SWR.
- Chuẩn hóa xử lý `loading/error/empty` cho mọi màn hình có dữ liệu.

## 6) Rà soát trước khi merge

- Không vi phạm Rules of Hooks.
- Không có state dư thừa (có thể derived thì không lưu state).
- Không có hằng số/config/API hardcode trong UI component.
- Đúng naming và đúng cấu trúc thư mục theo feature/domain.

## Dấu hiệu vi phạm

- Chỉ code theo layout mà không map đầy đủ trạng thái dữ liệu và trạng thái tương tác.
- Bỏ qua token design system và hardcode style trong component.
- Thiếu kiểm tra responsive hoặc keyboard navigation trước khi merge.
