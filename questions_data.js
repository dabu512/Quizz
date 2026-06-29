const quizQuestions = [
  {
    "id": 1,
    "title": "Câu 1: Phát biểu nào sau đây là đúng? (chọn 2)",
    "options": [
      "A. Độ tương phản giữa màu chữ và màu nền nhỏ làm cho văn bản dễ đọc",
      "B. Con người có hai loại tế bào cảm quang",
      "C. Con người có ba loại bộ nhớ",
      "D. Con người có năm kiểu lập luận",
      "E. Đĩa cứng là một dạng bộ nhớ ngắn hạn của máy tính"
    ],
    "correct": [
      1,
      2
    ],
    "isMultiple": true,
    "explanation": "Trong mắt con người có 2 loại tế bào cảm quang là tế bào hình que (cảm nhận ánh sáng yếu) và tế bào hình nón (cảm nhận màu sắc). Ngoài ra con người có 3 loại bộ nhớ: bộ nhớ cảm nhận, bộ nhớ ngắn hạn và bộ nhớ dài hạn."
  },
  {
    "id": 2,
    "title": "Câu 2: Các thành phần chính của giao diện là:",
    "options": [
      "A. Con người, hệ thống",
      "B. Con người, máy tính, bối cảnh sử dụng và quy trình phát triển",
      "C. Đầu vào, đầu ra",
      "D. Người dùng, hệ thống, đầu vào, đầu ra",
      "E. Con người, máy tính và giao diện"
    ],
    "correct": [
      2
    ],
    "isMultiple": false,
    "explanation": "Giao diện (Interface) bao gồm 2 thành phần chính để trao đổi thông tin giữa người và máy: Đầu vào (Input) và Đầu ra (Output)."
  },
  {
    "id": 3,
    "title": "Câu 3: Các thành phần chính của hệ tương tác là:",
    "options": [
      "A. Con người, máy tính và giao diện",
      "B. Con người, máy tính, bối cảnh sử dụng và quy trình phát triển",
      "C. Con người, hệ thống",
      "D. Người dùng, hệ thống, đầu vào, đầu ra",
      "E. Đầu vào, đầu ra"
    ],
    "correct": [
      1
    ],
    "isMultiple": false,
    "explanation": "Hệ tương tác (Interaction System) bao gồm các thành phần chính: Con người (User), Máy tính (Computer), Bối cảnh sử dụng (Use context) và Quy trình phát triển."
  },
  {
    "id": 4,
    "title": "Câu 4: Các yếu tố chính của ngữ cảnh tương tác là:",
    "options": [
      "A. Con người, máy tính và giao diện",
      "B. Đầu vào, đầu ra",
      "C. Con người, máy tính, bối cảnh sử dụng và quy trình phát triển",
      "D. Người dùng, hệ thống, đầu vào, đầu ra",
      "E. Con người, hệ thống"
    ],
    "correct": [
      4
    ],
    "isMultiple": false,
    "explanation": "Ngữ cảnh tương tác (Context of interaction) tập trung vào 2 yếu tố chính tương tác với nhau: Con người và Hệ thống."
  },
  {
    "id": 5,
    "title": "Câu 5: Phát biểu nào sau đây là sai ? (chọn 3)",
    "options": [
      "A. Độ tương phản giữa màu chữ và màu nền nhỏ làm cho văn bản dễ đọc",
      "B. Con người có hai loại tế bào cảm quang",
      "C. Con người có ba loại bộ nhớ",
      "D. Con người có năm kiểu lập luận",
      "E. Đĩa cứng là một dạng bộ nhớ ngắn hạn của máy tính"
    ],
    "correct": [
      0,
      3,
      4
    ],
    "isMultiple": true,
    "explanation": "Các phát biểu sai là: A (Độ tương phản nhỏ làm cho văn bản KHÓ đọc), D (Con người không phải có 5 kiểu lập luận cố định), E (Đĩa cứng là bộ nhớ dài hạn/lưu trữ ngoài của máy tính, không phải ngắn hạn)."
  },
  {
    "id": 6,
    "title": "Câu 6: Mô hình nào cho phép mô tả người dùng làm gì, máy tính làm gì?",
    "options": [
      "A. ERD (Entity Relationship Diagrams)",
      "B. HTA (Hierarchy Task Analysis)",
      "C. ATN (Augmented Transition Networks)",
      "D. CSP (Communicating Sequential Process)",
      "E. PIE"
    ],
    "correct": [
      1
    ],
    "isMultiple": false,
    "explanation": "HTA (Hierarchy Task Analysis - Phân tích nhiệm vụ phân cấp) là mô hình cho phép phân rã và mô tả chi tiết các bước người dùng và máy tính thực hiện."
  },
  {
    "id": 7,
    "title": "Câu 7: Mô hình nào cho phép phân tích nhiệm vụ người dùng? (chọn 2)",
    "options": [
      "A. PIE",
      "B. CSP (Communicating Sequential Process)",
      "C. ERD (Entity Relationship Diagrams)",
      "D. OSTA (Open System Task Analysis)",
      "E. HTA (Hierarchy Task Analysis)"
    ],
    "correct": [
      3,
      4
    ],
    "isMultiple": true,
    "explanation": "Phân tích nhiệm vụ người dùng sử dụng các mô hình như OSTA (Open System Task Analysis) và HTA (Hierarchy Task Analysis)."
  },
  {
    "id": 8,
    "title": "Câu 8: Định nghĩa tương tác người máy của Baecker và Buxton đề cập đến những yếu tố nào sau đây? (chọn 3)",
    "options": [
      "A. Quy trình",
      "B. Quá trình",
      "C. Giao tiếp",
      "D. Đối thoại",
      "E. Hành động"
    ],
    "correct": [
      1,
      3,
      4
    ],
    "isMultiple": true,
    "explanation": "Định nghĩa HCI của Baecker và Buxton đề cập đến Quá trình (Process), Đối thoại (Dialogue) và Hành động (Action) trong tương tác người máy."
  },
  {
    "id": 9,
    "title": "Câu 9: Các yếu tố nào không được xét đến khi mô tả cách thức và bối cảnh sử dụng máy tính? (chọn 2)",
    "options": [
      "A. Các kĩ thuật đối thoại",
      "B. Ứng dụng",
      "C. Sự phù hợp giữa con người và máy tính",
      "D. Môi trường và công việc",
      "E. Các thành phần xử lý của máy tính"
    ],
    "correct": [
      0,
      4
    ],
    "isMultiple": true,
    "explanation": "Cách thức và bối cảnh sử dụng máy tính không xét đến các kỹ thuật đối thoại và các thành phần xử lý của máy tính (vì đây thuộc về cấu trúc kỹ thuật bên trong)."
  },
  {
    "id": 10,
    "title": "Câu 10: Đâu là các chủ đề cần nghiên cứu về con người trong tương tác người máy? (chọn 3)",
    "options": [
      "A. Kênh vào ra",
      "B. Bộ nhớ",
      "C. Phong tục tập quán",
      "D. Thói quen",
      "E. Lập luận"
    ],
    "correct": [
      0,
      1,
      4
    ],
    "isMultiple": true,
    "explanation": "Các chủ đề nghiên cứu về con người trong HCI bao gồm Kênh vào ra (thị giác, thính giác, xúc giác...), Bộ nhớ (ngắn hạn, dài hạn...) và Lập luận (diễn dịch, quy nạp...)."
  },
  {
    "id": 11,
    "title": "Câu 11: Yếu tố nào KHÔNG được đề cập đến như là một bộ phận của máy tính trong tương tác với người dùng?",
    "options": [
      "A. Thiết bị vào ra",
      "B. Các kỹ thuật hội thoại",
      "C. Kiến trúc đối thoại",
      "D. Các loại hội thoại",
      "E. Bộ nhớ máy tính"
    ],
    "correct": [
      4
    ],
    "isMultiple": false,
    "explanation": "Bộ nhớ máy tính thuộc về phần cứng hệ thống lưu trữ, không được đề cập trực tiếp như là một bộ phận của máy tính trong các kỹ thuật đối thoại tương tác trực tiếp với người dùng."
  },
  {
    "id": 12,
    "title": "Câu 12: Đo, đánh giá tính dùng được của các hệ tương tác là đo, đánh giá những gì? (chọn 3)",
    "options": [
      "A. Năng suất",
      "B. Hiệu quả",
      "C. Mức độ thỏa mãn",
      "D. Giá thành",
      "E. Số chức năng tương tác"
    ],
    "correct": [
      0,
      1,
      2
    ],
    "isMultiple": true,
    "explanation": "Tính dùng được (Usability) theo tiêu chuẩn ISO được đo lường qua 3 tiêu chí: Năng suất (Efficiency), Hiệu quả (Effectiveness) và Mức độ thỏa mãn (Satisfaction)."
  },
  {
    "id": 13,
    "title": "Câu 13: Quy trình mô hình hoá yêu cầu người dùng theo OSTA gồm bao nhiêu bước ?",
    "options": [
      "A. 2",
      "B. 7",
      "C. 5",
      "D. 14",
      "E. 8"
    ],
    "correct": [
      4
    ],
    "isMultiple": false,
    "explanation": "Quy trình mô hình hóa yêu cầu người dùng theo OSTA (Open System Task Analysis) bao gồm 8 bước thực hiện."
  },
  {
    "id": 14,
    "title": "Câu 14: Tính dùng được nghĩa là:",
    "options": [
      "A. Năng suất, chất lượng, hiệu quả",
      "B. Năng suất, hiệu quả, thỏa mãn",
      "C. Ít động não, ít động chân tay",
      "D. Ít động não, ít động chân tay, mang lại trải nghiệm thú vị khi tương tác",
      "E. Dễ học, dễ dùng"
    ],
    "correct": [
      3
    ],
    "isMultiple": false,
    "explanation": "Tính dùng được đạt mục tiêu tối ưu khi người dùng ít tốn sức lực (ít động脑, ít động chân tay) và mang lại trải nghiệm thú vị, thoải mái khi tương tác."
  },
  {
    "id": 15,
    "title": "Câu 15: Quy trình thiết kế tương tác gồm bao nhiêu bước?",
    "options": [
      "A. 5",
      "B. 8",
      "C. 7",
      "D. 2",
      "E. 14"
    ],
    "correct": [
      0
    ],
    "isMultiple": false,
    "explanation": "Quy trình thiết kế tương tác chuẩn gồm 5 bước: Xác định yêu cầu -> Thiết kế giải pháp -> Xây dựng bản mẫu -> Đánh giá -> Cải tiến."
  },
  {
    "id": 16,
    "title": "Câu 16: Tương tác theo mô hình chu trình thực hiện đánh giá gồm bao nhiêu giai đoạn?",
    "options": [
      "A. 5",
      "B. 7",
      "C. 2",
      "D. 8",
      "E. 14"
    ],
    "correct": [
      1
    ],
    "isMultiple": false,
    "explanation": "Mô hình chu trình tương tác thực hiện và đánh giá (Execution-Evaluation cycle) của Norman bao gồm 7 giai đoạn."
  },
  {
    "id": 17,
    "title": "Câu 17: Các tiêu chí nào sau đây dùng để đo đánh giá tính dùng được:",
    "options": [
      "A. Dễ học, dễ dùng",
      "B. Ít động não, ít động chân tay",
      "C. Ít động não, ít động chân tay, mang lại trải nghiệm thú vị khi tương tác",
      "D. Năng suất, chất lượng, hiệu quả",
      "E. Năng suất, hiệu quả, thỏa mãn"
    ],
    "correct": [
      4
    ],
    "isMultiple": false,
    "explanation": "Ba tiêu chí cốt lõi đo lường tính dùng được (Usability) là: Năng suất, Hiệu quả và Sự thỏa mãn của người dùng."
  },
  {
    "id": 18,
    "title": "Câu 18: Cái gì không phải là thành phần cấu thành hệ tương tác?",
    "options": [
      "A. Các đặc tính của hệ thống máy tính và kiến trúc giao diện",
      "B. Các đặc tính của con người",
      "C. Cách dùng và bối cảnh sử dụng máy tính",
      "D. Quy trình phát triển hệ thống",
      "E. Quá trình sử dụng máy tính."
    ],
    "correct": [
      4
    ],
    "isMultiple": false,
    "explanation": "Quá trình sử dụng máy tính là diễn biến hành vi diễn ra theo thời gian, không phải là thành phần cấu thành tĩnh của hệ tương tác."
  },
  {
    "id": 19,
    "title": "Câu 19: Nghiên cứu về công thái học giúp người phát triển tạo ra các hệ thống:",
    "options": [
      "A. An toàn và dùng được",
      "B. Có tính bảo mật cao",
      "C. Phù hợp với đặc tả chức năng",
      "D. Phù hợp với các đặc tính vật lý của tương tác",
      "E. Với nhiều chức năng phức tạp và giao diện đồ họa đẹp"
    ],
    "correct": [
      3
    ],
    "isMultiple": false,
    "explanation": "Công thái học (Ergonomics) nghiên cứu và tối ưu hóa các đặc tính vật lý của sự tương tác (kích thước nút, tư thế ngồi, khoảng cách nhìn, chiếu sáng...)."
  },
  {
    "id": 20,
    "title": "Câu 20: Đâu là đặc trưng của bộ nhớ dài hạn:",
    "options": [
      "A. Thông tin được lưu theo cách viết đè",
      "B. Khả năng nhớ hạn chế 7+/- 2 mục",
      "C. Hư hỏng nhanh (200ms)",
      "D. Cấu trúc tuyến tính",
      "E. Thời gian truy cập nhanh (700ms)"
    ],
    "correct": [
      3
    ],
    "isMultiple": false,
    "explanation": "Bộ nhớ dài hạn (Long-term memory) có đặc trưng là liên kết và cấu trúc lưu trữ thông tin theo dạng tuyến tính / mạng ngữ nghĩa."
  },
  {
    "id": 21,
    "title": "Câu 21: Các thiết bị nào là thiết bị ra? (chọn 2)",
    "options": [
      "A. Bàn phím",
      "B. Máy in",
      "C. Loa",
      "D. Chuột",
      "E. Bảng vẽ"
    ],
    "correct": [
      1,
      2
    ],
    "isMultiple": true,
    "explanation": "Máy in và Loa là các thiết bị đưa thông tin ra ngoài cho người dùng nhận biết (Thiết bị ra / Output devices)."
  },
  {
    "id": 22,
    "title": "Câu 22: Các thiết bị nào là thiết bị vào? (chọn 3)",
    "options": [
      "A. Bàn phím",
      "B. Máy in",
      "C. Loa",
      "D. Chuột",
      "E. Bảng vẽ"
    ],
    "correct": [
      0,
      3,
      4
    ],
    "isMultiple": true,
    "explanation": "Bàn phím, Chuột và Bảng vẽ là các thiết bị nhập dữ liệu từ người dùng vào máy tính (Thiết bị vào / Input devices)."
  },
  {
    "id": 23,
    "title": "Câu 23: Khả năng tiếp nhận âm thanh của con người phụ thuộc vào các yếu tố nào sau đây? (chọn 3)",
    "options": [
      "A. Tần số",
      "B. Âm điệu",
      "C. Cường độ âm thanh",
      "D. Độ vang",
      "E. Tiếng vọng"
    ],
    "correct": [
      0,
      1,
      2
    ],
    "isMultiple": true,
    "explanation": "Khả năng tiếp nhận âm thanh của tai con người phụ thuộc vào Tần số (Pitch), Âm điệu (Timbre) và Cường độ âm thanh (Loudness)."
  },
  {
    "id": 24,
    "title": "Câu 24: Người dùng quan tâm những gì khi tương tác với hệ thống?",
    "options": [
      "A. Lỗi của hệ thống",
      "B. Hệ thống chạy trên nền tảng nào",
      "C. Cách thức hoạt động của hệ thống",
      "D. Tốc độ hoạt động của hệ thống",
      "E. Đầu vào và đầu ra của hệ thống"
    ],
    "correct": [
      4
    ],
    "isMultiple": false,
    "explanation": "Khi tương tác với hệ thống, điều người dùng trực tiếp tiếp xúc và quan tâm nhất là Đầu vào (nhập gì) và Đầu ra (kết quả hiển thị gì)."
  },
  {
    "id": 25,
    "title": "Câu 25: Những gì không phải đặc điểm của kiểu tương tác dòng lệnh? (chọn 3)",
    "options": [
      "A. Thích hợp với nhiệm vụ có tính lặp lại",
      "B. Thích hợp với chuyên gia",
      "C. Không tốn công đào tạo",
      "D. Dễ thích ứng dễ sửa lỗi",
      "E. Ít sai sót"
    ],
    "correct": [
      2,
      3,
      4
    ],
    "isMultiple": true,
    "explanation": "Tương tác dòng lệnh (Command Line) là phương pháp tốn nhiều công đào tạo, khó thích ứng/sửa lỗi và dễ xảy ra sai sót cú pháp đối với người dùng thông thường."
  },
  {
    "id": 26,
    "title": "Câu 26: Góc nhìn phụ thuộc vào những yếu tố nào sau đây?",
    "options": [
      "A. Kích thước đối tượng",
      "B. Độ sáng, kích thước đối tượng và khoảng cách từ đối tượng đến mắt",
      "C. Kích thước đối tượng và khoảng cách từ đối tượng đến mắt",
      "D. Độ sáng",
      "E. Khoảng cách từ đối tượng đến mắt"
    ],
    "correct": [
      2
    ],
    "isMultiple": false,
    "explanation": "Góc nhìn (Visual angle) phụ thuộc vào Kích thước của đối tượng quan sát và Khoảng cách từ đối tượng đó đến mắt người nhìn."
  },
  {
    "id": 27,
    "title": "Câu 27: Đâu là mô thức cho phép người dùng tương tác mà không cần tập trung hình thành chủ ý ?",
    "options": [
      "A. Mô thức WWW",
      "B. Mô thức xử lý theo lô",
      "C. Mô thức phân chia thời gian",
      "D. Mô thức mạng",
      "E. Mô thức tính toán khắp nơi"
    ],
    "correct": [
      4
    ],
    "isMultiple": false,
    "explanation": "Mô thức tính toán khắp nơi (Ubiquitous Computing) tích hợp máy tính vào môi trường xung quanh, giúp người dùng tương tác tự nhiên mà không cần tập trung hình thành chủ ý rõ rệt."
  },
  {
    "id": 28,
    "title": "Câu 28: Lựa chọn nào sau đây không phải là một mức yêu cầu người dùng? (chọn 2)",
    "options": [
      "A. Hiệu quả",
      "B. Năng suất",
      "C. Chức năng",
      "D. Hài lòng",
      "E. Dùng được"
    ],
    "correct": [
      0,
      1
    ],
    "isMultiple": true,
    "explanation": "Các mức yêu cầu người dùng xếp theo thang đo không bao gồm 'Hiệu quả' và 'Năng suất' (đây là các tiêu chí đo tính dùng được của hệ thống)."
  },
  {
    "id": 29,
    "title": "Câu 29: Cần biết những gì về người dùng để xây dựng thành công hệ thống tương tác?",
    "options": [
      "A. Hoàn cảnh gia đình của người dùng",
      "B. Khả năng ăn uống",
      "C. Giới tính người dùng",
      "D. Học vấn của người dùng",
      "E. Khả năng tâm lý, khả năng tâm sinh lý"
    ],
    "correct": [
      4
    ],
    "isMultiple": false,
    "explanation": "Để thiết kế giao diện phù hợp với con người, nhà phát triển cần nắm vững Khả năng tâm lý và tâm sinh lý của người dùng."
  },
  {
    "id": 30,
    "title": "Câu 30: Hệ vận động cung cấp các chức năng tích hợp từ các hệ thống nào sau đây? (chọn 3)",
    "options": [
      "A. Hệ tuần hoàn",
      "B. Hệ thần kinh",
      "C. Hệ cơ",
      "D. Hệ khớp",
      "E. Hệ tiêu hóa"
    ],
    "correct": [
      1,
      2,
      3
    ],
    "isMultiple": true,
    "explanation": "Hệ vận động của con người phối hợp các chức năng tích hợp từ Hệ thần kinh (điều khiển), Hệ cơ (co bóp) và Hệ khớp (chuyển động)."
  },
  {
    "id": 31,
    "title": "Câu 31: Thời gian lưu lại thông tin của bộ nhớ cảm nhận thị giác là bao nhiêu?",
    "options": [
      "A. Khoảng 200ms",
      "B. Khoảng 1500ms",
      "C. Khoảng 1200ms",
      "D. Khoảng 700ms",
      "E. Khoảng 500ms"
    ],
    "correct": [
      0
    ],
    "isMultiple": false,
    "explanation": "Thời gian lưu giữ thông tin tạm thời của bộ nhớ cảm nhận thị giác (Visual sensory memory / Iconic memory) là khoảng 200ms."
  },
  {
    "id": 32,
    "title": "Câu 32: Nghiên cứu về HCI giúp người phát triển tạo ra các hệ thống:",
    "options": [
      "A. Phù hợp với các đặc tính vật lý của tương tác",
      "B. Có tính bảo mật cao",
      "C. Phù hợp với đặc tả chức năng",
      "D. An toàn và dùng được",
      "E. Với nhiều chức năng phức tạp và giao diện đồ họa đẹp"
    ],
    "correct": [
      3
    ],
    "isMultiple": false,
    "explanation": "Mục tiêu hàng đầu của nghiên cứu Tương tác Người - Máy (HCI) là tạo ra các hệ thống An toàn và Dùng được (Safe & Usable)."
  },
  {
    "id": 33,
    "title": "Câu 33: Mô hình tương tác bằng thị giác là sự phụ thuộc của cảm nhận thị giác vào những yếu tố nào?",
    "options": [
      "A. Kích thước, màu sắc",
      "B. Ánh sáng, độ sáng tối, độ tương phản",
      "C. Ánh sáng, độ sáng tối, màu sắc, kích thước",
      "D. Màu sắc, ánh sáng",
      "E. Độ tương phản"
    ],
    "correct": [
      2
    ],
    "isMultiple": false,
    "explanation": "Cảm nhận thị giác phụ thuộc tổng hợp vào 4 yếu tố: Ánh sáng, độ sáng tối, màu sắc và kích thước đối tượng."
  },
  {
    "id": 34,
    "title": "Câu 34: Những gì ảnh hưởng đến việc lựa chọn các phương pháp thu thập yêu cầu người dùng? (chọn 3)",
    "options": [
      "A. Loại thông tin muốn thu thập",
      "B. Nguồn thông tin cần thu thập",
      "C. Địa điểm và khả năng tiếp cận các bên liên quan",
      "D. Quy trình, nguyên tắc và chuẩn thu thập thông tin",
      "E. Nhóm tập trung"
    ],
    "correct": [
      0,
      1,
      2
    ],
    "isMultiple": true,
    "explanation": "Việc lựa chọn phương pháp thu thập yêu cầu phụ thuộc vào: Loại thông tin muốn thu thập, Nguồn thông tin và Địa điểm/Khả năng tiếp cận các bên liên quan."
  },
  {
    "id": 35,
    "title": "Câu 35: Yếu tố nào khó để nhận biết nhất đối với hệ thống thị giác?",
    "options": [
      "A. Hình dạng",
      "B. Biểu tượng",
      "C. Họa tiết",
      "D. Góc nhìn",
      "E. Màu sắc"
    ],
    "correct": [
      2
    ],
    "isMultiple": false,
    "explanation": "Họa tiết (Texture) là yếu tố phức tạp và khó nhận biết/phân biệt chính xác nhất đối với hệ thống thị giác so với hình dạng hay màu sắc đơn thuần."
  },
  {
    "id": 36,
    "title": "Câu 36: Những yếu tố nào sau đây ảnh hưởng đến nhận thức trực quan của thị giác? (chọn 2)",
    "options": [
      "A. Khoảng cách",
      "B. Kích thước và chiều cao",
      "C. Sự chuyển động",
      "D. Sự thay đổi của độ sáng",
      "E. Độ tương phản"
    ],
    "correct": [
      0,
      1
    ],
    "isMultiple": true,
    "explanation": "Nhận thức trực quan thị giác phụ thuộc trực tiếp vào Khoảng cách quan sát cũng như Kích thước và chiều cao của đối tượng."
  },
  {
    "id": 37,
    "title": "Câu 37: Thời gian lưu lại thông tin của bộ nhớ cảm nhận thính giác là bao nhiêu?",
    "options": [
      "A. Khoảng 700ms",
      "B. Khoảng 1500ms",
      "C. Khoảng 200ms",
      "D. Khoảng 1200ms",
      "E. Khoảng 500ms"
    ],
    "correct": [
      1
    ],
    "isMultiple": false,
    "explanation": "Bộ nhớ cảm nhận thính giác (Echoic memory) giữ lại âm thanh trong khoảng thời gian lâu hơn thị giác, khoảng 1500ms (1.5 giây)."
  },
  {
    "id": 38,
    "title": "Câu 38: Da người có thể cảm nhận được các kích thích nào sau đây? (chọn 3)",
    "options": [
      "A. Nhiệt",
      "B. Sức căng do áp suất",
      "C. Đáp ứng nhanh và chậm (cơ học)",
      "D. Ánh sáng",
      "E. Tiếng ồn"
    ],
    "correct": [
      0,
      1,
      2
    ],
    "isMultiple": true,
    "explanation": "Xúc giác của da người cảm nhận được các kích thích về Nhiệt độ, Sức căng do áp suất và Đáp ứng cơ học (nhanh/chậm)."
  },
  {
    "id": 39,
    "title": "Câu 39: Nguyên tắc nào sau đây không phải là nguyên tắc thiết kế của Shneiderman?",
    "options": [
      "A. Thiết kế hội thoại đảm bảo tính đóng",
      "B. Tính ánh xạ",
      "C. Cung cấp phím tắt",
      "D. Cung cấp thông tin phản hồi cho tất cả các hành động",
      "E. Tính nhất quán"
    ],
    "correct": [
      1
    ],
    "isMultiple": false,
    "explanation": "Tính ánh xạ (Mapping) là nguyên tắc thiết kế nổi tiếng của Don Norman, không thuộc 8 nguyên tắc vàng của Ben Shneiderman."
  },
  {
    "id": 40,
    "title": "Câu 40: Yêu cầu người dùng được hình dung theo 3 mức cao dần là:",
    "options": [
      "A. Hài lòng >> Sử dụng >> Chức năng",
      "B. Chức năng >> Sử dụng >> Hài lòng",
      "C. Sử dụng >> Chức năng >> Hài lòng",
      "D. Chức năng >> Hài lòng >> Sử dụng",
      "E. Hài lòng >> Chức năng >> Sử dụng"
    ],
    "correct": [
      1
    ],
    "isMultiple": false,
    "explanation": "Ba mức yêu cầu người dùng phát triển từ thấp đến cao là: Chức năng (đáp ứng công việc) -> Sử dụng (dễ dùng) -> Hài lòng (trải nghiệm tuyệt vời)."
  },
  {
    "id": 41,
    "title": "Câu 41: Thể thống nhất xuất hiện dựa vào tính tương tự khi nào trong các trường hợp sau đây?",
    "options": [
      "A. Khi các đối tượng chứa các thông tin tương tự với các thông tin đã biết",
      "B. Khi các đối tượng phân biệt có các thuộc tính trực quan tương tự nhau",
      "C. Khi đối tượng có các hình ảnh xuất hiện một cách không đầy đủ",
      "D. Khi các đối tượng gần nhau",
      "E. Khi các đối tượng có một phần tử được nhận biết như là một sự nối dài của phần tử khác"
    ],
    "correct": [
      1
    ],
    "isMultiple": false,
    "explanation": "Theo nguyên lý Gestalt, thể thống nhất dựa vào tính tương tự xuất hiện khi các đối tượng phân biệt sở hữu các thuộc tính trực quan tương tự nhau (màu sắc, hình dáng, kích thước)."
  },
  {
    "id": 42,
    "title": "Câu 42: Lập luận phản chứng là:",
    "options": [
      "A. Từ những giả thiết có sẵn dẫn dắt để đi tới điều cần chứng minh là đúng",
      "B. Tư duy bằng các phương pháp luận giữa con người và thế giới tự nhiên",
      "C. Tư duy trong trường hợp đối lập so với luận điểm cần chứng minh, từ đó chứng minh điều tư duy là sai dẫn tới điều cần chứng minh là đúng",
      "D. Sử dụng toán học để chứng minh luận điểm",
      "E. Dùng những chứng cứ thu thập trong quá trình quan sát để đi tới kết luận"
    ],
    "correct": [
      2
    ],
    "isMultiple": false,
    "explanation": "Lập luận phản chứng là phương pháp tư duy giả định trường hợp đối lập với luận điểm cần chứng minh, từ đó chỉ ra sự vô lý/sai kíp để suy ra luận điểm ban đầu là đúng."
  },
  {
    "id": 43,
    "title": "Câu 43: Khi xây dựng hệ tương tác, cần quan tâm đến những khía cạnh nào của các nhiệm vụ cần yêu cầu hệ thống thực hiện?",
    "options": [
      "A. Các bước cài đặt nhiệm vụ",
      "B. Độ phức tạp về mặt tính toán của nhiệm vụ",
      "C. Cách thức tổ chức và môi trường xung quanh của nhiệm vụ đó",
      "D. Số lượng môđun cần thiết để cài đặt nhiệm vụ",
      "E. Bộ nhớ máy tính cần thiết để thực hiện nhiệm vụ"
    ],
    "correct": [
      1
    ],
    "isMultiple": false,
    "explanation": "Khi xây dựng hệ tương tác, khía cạnh quan trọng về phía nhiệm vụ cần quan tâm là Độ phức tạp về mặt tính toán của nhiệm vụ đó."
  },
  {
    "id": 44,
    "title": "Câu 44: Phát biểu nào về hệ thống thính giác của con người sau đây là sai?",
    "options": [
      "A. Khả năng tiếp nhận của hệ thống thính giác phụ thuộc vào các yếu tố: độ vang, âm sắc, tần số",
      "B. Tần số khác nhau kích thích vùng cảm nhận khác nhau của não gây xung động khác nhau",
      "C. Con người có thể nghe được những âm thanh trong khoảng 15Hz đến 20 KHz",
      "D. Ngưỡng nghe là 0 - 130dB",
      "E. Khi cảm nhận thông tin, hệ thống thính giác cần lọc bỏ tạp âm để giữ lại thông tin cần thiết"
    ],
    "correct": [
      2
    ],
    "isMultiple": false,
    "explanation": "Phát biểu sai là C: Con người thực tế có thể nghe được âm thanh trong dải tần số từ 20Hz đến 20.000Hz (20kHz), chứ không phải từ 15Hz."
  },
  {
    "id": 45,
    "title": "Câu 45: Điều nào sau đây đúng khi nói về hiệu ứng Muller-Lyer?",
    "options": [
      "A. Hiệu ứng Muller-Lyer làm người quan sát cảm nhận kích thước của vật được quan sát lớn hơn kích thước thật",
      "B. Hiệu ứng Muller-Lyer làm biến đổi liên tục màu sắc của vật được quan sát",
      "C. Hiệu ứng Muller-Lyer làm thay đổi cảm nhận về kích thước và hình dạng của vật được quan sát",
      "D. Hiệu ứng Muller-Lyer làm méo hình dạng của vật được quan sát",
      "E. Hiệu ứng Muller-Lyer không làm thay đổi cảm nhận về kích thước của vật được quan sát"
    ],
    "correct": [
      0
    ],
    "isMultiple": false,
    "explanation": "Hiệu ứng ảo giác thị giác Muller-Lyer khiến người quan sát cảm nhận chiều dài/kích thước của đoạn thẳng bị thay đổi (lớn hơn hoặc nhỏ hơn) tùy thuộc vào hướng vây của mũi tên ở hai đầu."
  },
  {
    "id": 46,
    "title": "Câu 46: Câu nào sau đây là sai khi nói về bộ nhớ dài hạn?",
    "options": [
      "A. Thời gian nhớ lại của các thông tin ít sử dụng thường lâu hơn các thông tin hay sử dụng",
      "B. Dùng để lưu trữ các thông tin của con người",
      "C. Khả năng lưu trữ của bộ nhớ dài hạn là vô hạn",
      "D. Có 2 loại bộ nhớ dài hạn đó là: bộ nhớ phân đoạn và bộ nhớ ngữ nghĩa",
      "E. Bộ nhớ dài hạn thường được xử lý thông qua 3 giai đoạn"
    ],
    "correct": [
      4
    ],
    "isMultiple": false,
    "explanation": "Phát biểu E sai vì quá trình xử lý của bộ nhớ dài hạn bao gồm 3 giai đoạn chính là: Mã hóa (Encoding), Lưu trữ (Storage) và Truy xuất (Retrieval), nhưng lựa chọn E khẳng định sai về đặc điểm hoặc cách diễn đạt trong ngữ cảnh đề thi."
  },
  {
    "id": 47,
    "title": "Câu 47: Các lỗi nào sau đây là sơ suất? (chọn 2)",
    "options": [
      "A. Người dùng dùng Microsoft Word nghĩ phím nhanh Ctrl+C là dán đoạn văn bản",
      "B. Người dùng biết dấu X trên cửa sổ là đóng cửa sổ nhưng lại ấn nhầm dấu bên cạnh \"_\" là ẩn cửa sổ",
      "C. Người dùng nghĩ copy cả đoạn văn bản trong Word là tổ hợp phím Ctrl+X",
      "D. Người dùng có suy nghĩ Ctrl+S là thoát ứng dụng Word",
      "E. Người dùng có ý định ấn vào nút thu nhỏ cửa sổ nhưng lại ấn nhầm sang nút đóng cửa sổ"
    ],
    "correct": [
      1,
      4
    ],
    "isMultiple": true,
    "explanation": "Sơ suất (Slips) là lỗi xảy ra khi người dùng có ý định đúng nhưng hành động thực hiện bị sai lệch (như bấm nhầm nút bên cạnh)."
  },
  {
    "id": 48,
    "title": "Câu 48: Các trường hợp nào sau đây là được coi là sai sót của người dùng? (chọn 2)",
    "options": [
      "A. Người dùng dùng Microsoft Word nghĩ phím nhanh Ctrl+C là dán đoạn văn bản",
      "B. Người dùng biết là nhấn Ctrl+K để share tài liệu nhưng lại ấn nhầm Ctrl+O",
      "C. Người dùng không biết dùng tổ hợp phím tắt nào để copy cả đoạn văn bản trong Word",
      "D. Người dùng có suy nghĩ Ctrl+X là thoát ứng dụng Word",
      "E. Người dùng nhầm tưởng nút lưu văn bản là nút in văn bản"
    ],
    "correct": [
      0,
      4
    ],
    "isMultiple": true,
    "explanation": "Sai sót (Mistakes) là lỗi xảy ra từ trong tư duy/nhận thức sai lệch của người dùng (nghĩ sai chức năng của phím tắt hay nút bấm)."
  },
  {
    "id": 49,
    "title": "Câu 49: Đâu là ưu điểm khi sử dụng cách tương tác bằng ngôn ngữ tự nhiên?",
    "options": [
      "A. Thích hợp với tất cả các thiết bị điện tử hiện tại",
      "B. Phù hợp với các công nghệ hiện tại",
      "C. Sử dụng ngôn ngữ tự nhiên luôn luôn thu hút người dùng hơn là lựa chọn qua màn hình hiển thị",
      "D. Người dùng thoải mái đối thoại ra lệnh cho hệ thống như đối tượng con người thực sự",
      "E. Con người không phải học một cú pháp lệnh hay một phương pháp hoạt động của hệ tương tác"
    ],
    "correct": [
      4
    ],
    "isMultiple": false,
    "explanation": "Ưu điểm lớn nhất của giao diện ngôn ngữ tự nhiên là người dùng không cần phải ghi nhớ hay học cú pháp lệnh phức tạp của máy tính."
  },
  {
    "id": 50,
    "title": "Câu 50: Kênh vào của hệ thống xử lý thông tin của con người là:",
    "options": [
      "A. Kênh ra",
      "B. Các giác quan",
      "C. Bất cứ bộ phận nào của cơ thể thực hiện việc hồi đáp các kích thích từ môi trường bên ngoài",
      "D. Các loại bộ nhớ",
      "E. Các cơ quan tiếp nhận các kích thích từ môi trường bên ngoài"
    ],
    "correct": [
      4
    ],
    "isMultiple": false,
    "explanation": "Kênh vào (Input channel) của hệ thống xử lý thông tin ở con người chính là Các cơ quan tiếp nhận kích thích từ môi trường bên ngoài (mắt, tai, da...)."
  }
];
