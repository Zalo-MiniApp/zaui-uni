# Design Tokens với Tailwind

## Mục tiêu

- Dùng token để đồng bộ giữa design và code.
- Tránh hardcode màu chữ và cỡ chữ trong component.
- Duy trì khả năng scale và refactor giao diện.

## Quy tắc bắt buộc

- Chỉ dùng Tailwind CSS để style.
- Màu chữ phải đi qua color tokens trong theme.
- Font size phải đi qua typography scale trong theme.
- Không dùng class tùy ý kiểu `text-[#xxxxxx]` hoặc `text-[15px]` trong code production.

## Gợi ý token semantic

- Màu chữ: `text-primary`, `text-secondary`, `text-muted`, `text-danger`
- Cỡ chữ: `text-body-sm`, `text-body-md`, `text-body-lg`, `text-title-sm`, `text-title-md`, `text-title-lg`

## Mapping từ design sang code

1. Đọc token trong design (màu, cỡ chữ, line-height, weight).
2. Map về token semantic trong hệ thống.
3. Nếu chưa có token phù hợp: bổ sung vào theme trước, không hardcode trong component.
4. Dùng utility class theo token để implement UI.

## Ví dụ

- Design yêu cầu màu chữ chính + cỡ chữ body: `text-primary text-body-md`
- Design yêu cầu tiêu đề: `text-primary text-title-lg font-semibold`

## Kiểm tra nhanh

- Có class hardcode màu hex không?
- Có class hardcode pixel cho font-size không?
- Token mới có tên semantic, dễ hiểu, đúng ngữ cảnh không?
