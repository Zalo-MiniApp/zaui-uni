# Hooks và State

## Mục tiêu

- Tránh bug do vòng đời và re-render.
- Giữ state tối thiểu, dễ hiểu, dễ debug.
- Tách logic để tái sử dụng và test thuận lợi.

## Quy tắc bắt buộc

- Tuân thủ Rules of Hooks: không gọi hook trong `if`, `for`, `while`, nested function, hoặc sau `return`.
- Chỉ gọi hooks ở top-level của function component hoặc custom hook.
- Không lưu state có thể suy ra từ props/state khác.
- Đặt state gần nơi dùng nhất; chỉ lift state khi cần chia sẻ.
- Chỉ dùng `useMemo`/`useCallback` khi có bằng chứng hiệu năng.
- Tách logic phức tạp thành custom hooks (`useXxx`) với API rõ ràng.

## Checklist áp dụng

1. Kiểm tra mỗi `useState` có thực sự cần thiết hay có thể derived.
2. Kiểm tra dependency arrays của `useEffect`, `useMemo`, `useCallback`.
3. Tách side-effect và business logic lặp lại ra custom hook.
4. Tránh truyền callback qua nhiều tầng nếu có thể gom lại gần nơi sử dụng.

## Dấu hiệu vi phạm

- Dùng hook có điều kiện hoặc trong callback function.
- Lưu duplicated state dẫn đến lệch dữ liệu.
- Lạm dụng `useMemo`/`useCallback` làm code khó đọc nhưng không đo được lợi ích.
