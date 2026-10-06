# Hệ Thống Học Tập & Luyện Quiz Theo Môn Học

Ứng dụng web học tập và ôn luyện trắc nghiệm theo môn học thời gian thực, hỗ trợ tạo môn học, tạo quiz từ file đề & đáp án `.txt`, lưu trữ và đẩy trực tiếp lên cơ sở dữ liệu Supabase.

## 🚀 Tính năng nổi bật

1. **Quản lý Môn học (Subjects)**:
   - Giao diện thẻ trực quan hiển thị danh sách các môn học do người dùng tự tạo và đặt tên.
   - Hỗ trợ thêm môn học mới với tên, mô tả và biểu tượng (icon) tùy chỉnh.
   - Thống kê số lượng bài quiz trong từng môn.
   - Bấm vào môn học để xem danh sách các bài quiz của môn đó.

2. **Quản lý Bài Quiz theo từng Môn**:
   - Mỗi môn học chứa danh sách các bài quiz riêng biệt.
   - Hiển thị số lượng câu hỏi, mô tả và nút vào làm bài.
   - Cho phép xóa quiz hoặc tạo thêm quiz mới.

3. **Tạo Quiz bằng File TXT & Đẩy lên Database**:
   - **File / Nội dung Câu hỏi**: Nhập hoặc tải file `.txt` theo cú pháp chuẩn:
     ```text
     Câu 1 : [Đề bài]
     A. [...]
     B. [...]
     C. [...]
     D. [...]
     Câu 2 : [Đề bài]
     A. [...]
     B. [...]
     C. [...]
     D. [...]
     ```
   - **File / Danh sách Đáp án riêng (Nếu có)**: Nhập hoặc tải file `.txt` đáp án:
     ```text
     1. A
     2. B
     3. C
     ```
   - Trình phân tích thông minh tự động ghép nối câu hỏi và đáp án tương ứng.
   - Cho phép **Xem trước (Preview)** trực quan và chỉnh sửa trực tiếp đáp án trước khi lưu.
   - Đẩy trực tiếp lên Supabase (`quizzes`, `questions`), kèm cơ chế offline fallback (LocalStorage) nếu chưa kết nối DB.

4. **Trải nghiệm Làm bài Quiz tương tác**:
   - Bản đồ câu hỏi (Navigator Grid) dạng ngăn kéo (drawer) bên trái giúp theo dõi tiến độ và cuộn nhanh đến câu cần làm.
   - Chấm điểm và thống kê trực tiếp: Số câu đúng, số câu sai, tỷ lệ chính xác.
   - Chế độ làm lại câu sai (Redo wrong questions), trộn câu hỏi và trộn đáp án ngẫu nhiên.
   - Giải thích chi tiết đáp án ngay sau khi chọn.

---

## 🛠️ Cấu trúc thư mục

```text
├── src/                  # Thư mục chứa mã nguồn của ứng dụng
│   ├── .env              # Cấu hình kết nối Supabase (URL & Key)
│   ├── index.html        # Giao diện chính của ứng dụng
│   ├── app.js            # Logic quản lý môn học, tạo quiz từ txt và làm bài
│   └── style.css         # Thiết kế giao diện (Dark theme, Card layout, Responsive)
├── vercel.json           # Cấu hình định tuyến (URL Rewrite) khi deploy Vercel
├── package.json          # Quản lý thư viện phụ thuộc
├── .gitignore            # Cấu hình loại bỏ các file thừa khỏi Git
└── File_docs/            # Tài liệu & SQL schema
    └── setup_subjects_db.sql # Script SQL khởi tạo bảng subjects, quizzes, questions trên Supabase
```

---

## ⚙️ Hướng dẫn cài đặt và thiết lập Database

### 1. Khởi tạo Database trên Supabase
Chạy script SQL trong file [File_docs/setup_subjects_db.sql](file:///d:/Quizz/File_docs/setup_subjects_db.sql) trên trình soạn thảo SQL của Supabase để tạo cấu trúc 3 bảng:
- `public.subjects`: Bảng môn học
- `public.quizzes`: Bảng bài quiz theo môn
- `public.questions`: Bảng câu hỏi trắc nghiệm

*(Hoặc bấm nút **"🔒 SQL Script"** ngay trên giao diện web để sao chép mã SQL).*

### 2. Cấu hình biến môi trường
Tạo file `.env` nằm trong thư mục `src/` với nội dung:
```env
SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_KEY=your-supabase-anon-key
```

### 3. Chạy ứng dụng trên máy cục bộ
```bash
npx http-server src
```
Truy cập qua địa chỉ `http://localhost:8080`.
