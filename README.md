# Hệ Thống Ôn Luyện JLPT N3 - Supabase

Ứng dụng web ôn luyện thi JLPT N3 (từ vựng, ngữ pháp, đọc hiểu) thời gian thực, kết nối trực tiếp với cơ sở dữ liệu Supabase, giao diện hiện đại và trải nghiệm ôn thi tối ưu.

## 🚀 Tính năng nổi bật

- **Kết nối Supabase trực tiếp**: Tải dữ liệu đề thi, câu hỏi và bài đọc hiểu từ Supabase theo thời gian thực dựa trên cấu hình bảo mật.
- **Phân chia phần thi chuẩn JLPT**: Hỗ trợ 3 phần thi chính bao gồm:
  - Từ vựng - Chữ hán (文字・語彙)
  - Ngữ pháp (文法)
  - Đọc hiểu (読解)
- **Luyện Quizz tổng hợp**: Lấy câu hỏi ngẫu nhiên từ database theo phần thi đã chọn, giới hạn số lượng câu hỏi, trộn câu hỏi và đáp án.
- **Trình đọc và làm bài Đọc hiểu thông minh**: Hiển thị song song bài đọc hiểu và câu hỏi trắc nghiệm tương ứng, tự động cuộn đồng bộ.
- **Bản đồ câu hỏi (Navigator Grid)**: Drawer bên trái giúp quản lý tiến độ làm bài, biết ngay câu nào đã làm, đúng hay sai.
- **Tự động lưu trạng thái (Session Restoration)**: Lưu tiến độ làm bài vào `localStorage`, giúp phục hồi bài đang làm dở khi tải lại trang.
- **Chế độ Luyện tập nâng cao**:
  - Làm lại các câu trả lời sai (Redo wrong questions).
  - Trộn ngẫu nhiên câu hỏi/đáp án bất kỳ lúc nào.
  - Xem giải thích đáp án chi tiết (💡) ngay sau khi chọn.

---

## 🛠️ Cấu trúc thư mục

```text
├── src/                  # Thư mục chứa mã nguồn của ứng dụng
│   ├── .env              # Cấu hình biến môi trường kết nối Supabase (URL & Key)
│   ├── index.html        # Giao diện chính của ứng dụng
│   ├── app.js            # Logic ứng dụng, kết nối database và xử lý bài thi
│   └── style.css         # Thiết kế giao diện (Dark/Light mode, Glassmorphism, Responsive)
├── package.json          # Quản lý thư viện phụ thuộc (Dependencies)
├── .gitignore            # Cấu hình loại bỏ các file/thư mục không cần đưa lên Git
├── File_docs/            # Thư mục tài liệu (Bị bỏ qua bởi Git)
│   └── supabase_setup.sql # Script SQL để khởi tạo bảng và dữ liệu mẫu trên Supabase
└── Slide/                # Tài liệu slide bài giảng ôn tập (Bị bỏ qua bởi Git)
```

---

## ⚙️ Hướng dẫn cài đặt và kết nối

### 1. Chuẩn bị Cơ sở dữ liệu Supabase
Chạy script SQL trong file [File_docs/supabase_setup.sql](file:///d:/Quizz/File_docs/supabase_setup.sql) trên trình soạn thảo SQL của Supabase để tạo cấu trúc bảng (`jlpt_exams`, `jlpt_passages`, `jlpt_questions`) và nạp dữ liệu đề thi JLPT N3 mẫu.

### 2. Cấu hình biến môi trường
Tạo file `.env` nằm trong thư mục `src/` với nội dung:
```env
SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_KEY=your-supabase-anon-key
```

*Lưu ý: Ứng dụng sẽ tự động tải các biến này từ file `src/.env` tại thời điểm chạy thông qua HTTP fetch.*

### 3. Chạy ứng dụng
Do ứng dụng nạp cấu hình từ `.env` bằng cơ chế fetch HTTP, bạn cần chạy ứng dụng thông qua một local server (ví dụ: Live Server trong VS Code, `http-server` của npm, hoặc bất kỳ web server nào khác) với thư mục gốc của server là thư mục `src/`.
```bash
# Ví dụ chạy với http-server trỏ vào thư mục src/
npx http-server src
```
Truy cập qua địa chỉ `http://localhost:8080` (hoặc cổng tương ứng của server).

---

## 📈 Tiến độ phát triển hiện tại

### ✅ Đã hoàn thành
1. **Giao diện & UI/UX**:
   - Thiết kế layout responsive, hiệu ứng mượt mà và giao diện tối (Dark mode) sang trọng.
   - Panel bài đọc hiển thị thông minh bên cạnh câu hỏi khi làm phần Đọc hiểu/Ngữ pháp.
2. **Quản lý trạng thái làm bài**:
   - Chức năng lưu trữ kết quả và câu hỏi đã xáo trộn để đảm bảo trạng thái không bị mất khi reload trình duyệt.
   - Thống kê tỷ lệ chính xác, số câu đúng/sai theo thời gian thực.
3. **Cấu hình & Tích hợp**:
   - Đọc thông tin Supabase động qua `.env` kết hợp với giao diện cài đặt thủ công và lưu vào `localStorage`.
   - Kết nối dữ liệu thực tế tới 3 bảng chính: `jlpt_exams`, `jlpt_passages`, `jlpt_questions`.
   - Cơ chế hiển thị lỗi mất kết nối DB trực tiếp trên màn hình menu chính giúp chẩn đoán lỗi cấu hình.
4. **Dọn dẹp mã nguồn**:
   - Loại bỏ hoàn toàn tệp dữ liệu cứng ngoại tuyến (`parsed_questions_jlpt.json` và `questions_data.js`).
5. **Đẩy câu hỏi trực tiếp lên Database (Direct Importer)**:
   - Cho phép nhập/dán văn bản câu hỏi tự nhiên từ file Word, tài liệu mà không cần tạo các file JSON cồng kềnh.
   - Trình phân tích thông minh tự động bóc tách nội dung câu hỏi, 4 phương án, đáp án đúng và giải thích.
   - Hỗ trợ tạo đề thi mới hoặc bổ sung vào đề có sẵn, kèm bài đọc ngữ cảnh (Passage).
   - Xem trước trực quan và đẩy trực tiếp vào các bảng `jlpt_exams`, `jlpt_passages`, `jlpt_questions` trên Supabase chỉ với 1 click.

### 🛠️ Kế hoạch tiếp theo (Đề xuất)
- **Hệ thống tài khoản (Auth)**: Cho phép người học đăng nhập để lưu kết quả thi lịch sử lên bảng dữ liệu Supabase cá nhân, theo dõi biểu đồ tiến bộ học tập.
- **Phần thi Nghe hiểu (Choukai)**: Tích hợp trình phát audio và câu hỏi nghe hiểu.
