const allQuizSets = [
  {
    "id": "quiz_1",
    "title": "Trắc nghiệm UI/UX - Bộ 1 (50 câu)",
    "description": "Bộ 50 câu trắc nghiệm lý thuyết nền tảng môn Giao diện & Trải nghiệm Người dùng.",
    "filename": "UI_UX_1-50.docx",
    "questionsCount": 50,
    "questions": [
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
    ]
  },
  {
    "id": "quiz_2",
    "title": "Trắc nghiệm UI/UX - Bộ 2 (40 câu)",
    "description": "Bộ 40 câu trắc nghiệm ứng dụng thực tế, quy trình thiết kế & kiểm thử giao diện.",
    "filename": "TN_UIUX.docx",
    "questionsCount": 40,
    "questions": [
      {
        "id": 1,
        "title": "Câu 1 : Khi thiết kế điều hướng cho một trang web , điều nào sau đây là cách tốt nhất để tăng trải nghiệm người dùng ? ( When designing navigation for a website , which of the following is the best way to enhance the user experience ? )",
        "options": [
          "A. Sử dụng menu ẩn hoàn toàn trên mọi thiết bị",
          "B. Tạo menu với nhiều cấp độ con để hiển thị đầy đủ thông tin",
          "C. Sử dụng biểu tượng mà không có nhãn để tiết kiệm không gian",
          "D. Thêm hiệu ứng động vào thanh điều hướng để thu hút sự chú ý",
          "E. Cung cấp thanh điều hướng dễ truy cập và rõ ràng ở mọi trang"
        ],
        "correct": [
          4
        ],
        "isMultiple": false,
        "explanation": "Thanh điều hướng (Navigation Bar) rõ ràng, nhất quán và dễ truy cập trên mọi trang là yếu tố cốt lõi giúp người dùng định vị và chuyển đổi giữa các mục dễ dàng."
      },
      {
        "id": 2,
        "title": "Câu 2 : Đánh giá thông qua phản hồi của người dùng chủ yếu tập trung vào điều gì ? ( What does evaluation through User Feedback primarily focus on ? )",
        "options": [
          "A. Quan sát người dùng",
          "B. Nỗ lực của người dùng để đi tới kết quả đúng",
          "C. Thu thập dữ liệu từ người dùng",
          "D. Cảm nhận của người dùng về hệ thống",
          "E. Thực hiện nhiệm vụ của người dùng"
        ],
        "correct": [
          2
        ],
        "isMultiple": false,
        "explanation": "Phương pháp đánh giá qua phản hồi của người dùng (User Feedback) tập trung vào việc thu thập các dữ liệu ý kiến, cảm nhận và đóng góp trực tiếp từ người dùng."
      },
      {
        "id": 3,
        "title": "Câu 3 : Khi tạo lập chân dung người dùng cần trả lời câu hỏi nào sau đây ? ( Which questions need to be answered when creating user personas ? )",
        "options": [
          "A. Người dùng U phản ứng với nhiệm vụ T như thế nào ?",
          "B. Người dùng U sẽ thực hiện nhiệm vụ T như thế nào ?",
          "C. Người dùng U sẽ học thực hiện nhiệm vụ T như thế nào ?",
          "D. Người dùng U nói về nhiệm vụ T như thế nào ?",
          "E. Người dùng U sẽ hiểu nhiệm vụ T như thế nào ?"
        ],
        "correct": [
          1
        ],
        "isMultiple": false,
        "explanation": "Khi xây dựng chân dung người dùng (User Persona), câu hỏi trọng tâm là dự đoán và xác định người dùng U sẽ thực hiện nhiệm vụ T như thế nào trong thực tế."
      },
      {
        "id": 4,
        "title": "Câu 4 : Trong thiết kế bàn phím ảo trên màn hình cảm ứng , nguyên tắc công thái học nào cần được áp dụng ? ( What ergonomic principles should be applied in the design of virtual keyboards for touchscreens ? )",
        "options": [
          "A. Sử dụng nền hoặc phông chữ khác biệt để làm nổi bật giao diện bàn phím",
          "B. Sử dụng các phím nhỏ để tiết kiệm không gian",
          "C. Đặt các phím thường dùng ở góc trên cùng của bàn phím",
          "D. Đảm bảo các phím được bố trí hợp lý để dễ gõ và hạn chế lỗi",
          "E. Tăng khoảng cách giữa các phím để giảm mật độ giao diện"
        ],
        "correct": [
          3
        ],
        "isMultiple": false,
        "explanation": "Công thái học trên bàn phím ảo ưu tiên việc bố trí các phím bấm hợp lý về kích thước và khoảng cách để người dùng dễ thao tác bằng ngón tay và giảm thiểu tỷ lệ gõ nhầm."
      },
      {
        "id": 5,
        "title": "Câu 5 : Trong các ngôn ngữ thiết kế sau , ngôn ngữ thiết kế nào tập trung vào việc sử dụng các hiệu ứng bóng đổ và chuyển động để tạo cảm giác về không gian và chiều sâu , đồng thời sử dụng các nguyên tắc về màu sắc , lưới và hình học ? ( Which of the following design languages focuses on using shadow effects and motion to create a sense of space and depth while adhering to principles of color , grid , and geometry ? )",
        "options": [
          "A. Minimalist design",
          "B. Flat design",
          "C. Metro ( Modern ) design",
          "D. Material design",
          "E. Skeuomorph design"
        ],
        "correct": [
          4
        ],
        "isMultiple": false,
        "explanation": "Skeuomorphism là phong cách thiết kế mô phỏng các vật thể trong đời thực (hiệu ứng chất liệu, bóng đổ, chiều sâu), kết hợp các nguyên tắc màu sắc và khối học."
      },
      {
        "id": 6,
        "title": "Câu 6 : Trong thiết kế trải nghiệm người dùng , chân dung người dùng nên được tạo ra như thế nào ? ( How should user personas be created in UX design ? )",
        "options": [
          "A. Từ phản hồi của nhóm thiết kế",
          "B. Từ những giả định về người dùng",
          "C. Từ quan sát về người dùng thực sự",
          "D. Từ các xu hướng thiết kế mới nhất",
          "E. Từ các tài liệu hướng dẫn người dùng của các hệ thống tương tự"
        ],
        "correct": [
          1
        ],
        "isMultiple": false,
        "explanation": "Chân dung người dùng (User Persona) ban đầu được xây dựng dựa trên những giả định và kết quả nghiên cứu/thống kê về tập người dùng mục tiêu."
      },
      {
        "id": 7,
        "title": "Câu 7 : Khi nào cần chuyển từ mẫu thử độ tin cậy thấp sang mẫu thử độ tin cậy cao ? ( When should you transition from a low - fidelity prototype to a high - fidelity prototype ? )",
        "options": [
          "A. Ngay từ khi bắt đầu dự án",
          "B. Khi cần trình bày với các nhà đầu tư hoặc lãnh đạo",
          "C. Khi ý tưởng tổng quan đã được kiểm tra và xác nhận",
          "D. Khi nhận được phản hồi tiêu cực từ người dùng về giao diện",
          "E. Khi cần kiểm tra tốc độ tải giao diện"
        ],
        "correct": [
          2
        ],
        "isMultiple": false,
        "explanation": "Mẫu thử độ tin cậy cao (High-fidelity prototype) tốn nhiều thời gian hoàn thiện, do đó chỉ nên chuyển sang khi các ý tưởng tổng quan ở mẫu thử độ tin cậy thấp đã được kiểm tra và xác nhận."
      },
      {
        "id": 8,
        "title": "Câu 8 : Tại sao việc tạo mẫu thử quan trọng trong phát triển sản phẩm mới ? ( Why is prototyping important in new product development ? )",
        "options": [
          "A. Để sau này không phải kiểm thử sản phẩm",
          "B. Để sử dụng sản phẩm thực tế trước khi thử nghiệm .",
          "C. Để mô phỏng sản phẩm cuối cùng và thử nghiệm trước khi dành nguồn lực để xây dựng sản phẩm thực tế .",
          "D. Để tăng chi phí phát triển sản phẩm .",
          "E. Để tạo ra một phiên bản hoàn chỉnh của sản phẩm ngay từ đầu ."
        ],
        "correct": [
          2
        ],
        "isMultiple": false,
        "explanation": "Tạo mẫu thử (Prototyping) giúp mô phỏng hình dáng và luồng hoạt động của sản phẩm để kiểm thử với người dùng trước khi đầu tư nhiều chi phí và nguồn lực lập trình sản phẩm thật."
      },
      {
        "id": 9,
        "title": "Câu 9 : Trong bối cảnh thiết kế trải nghiệm người dùng , thuật ngữ nào dưới đây mô tả trạng thái của hệ thống mà người dùng muốn hoàn thành ? ( In user experience design , which term describes the system state the user wants to achieve ? )",
        "options": [
          "A. Lựa chọn ( Selection )",
          "B. Công cụ ( Tool )",
          "C. Mục đích ( Goal )",
          "D. Hành động ( Action )",
          "E. Nhiệm vụ ( Task )"
        ],
        "correct": [
          2
        ],
        "isMultiple": false,
        "explanation": "Mục đích (Goal) trong UX đại diện cho trạng thái kết quả cuối cùng mà người dùng muốn hoàn thành hoặc đạt được khi sử dụng hệ thống."
      },
      {
        "id": 10,
        "title": "Câu 10 : GOMS giúp các nhà phân tích có thể : ( GOMS enables analysts to : )",
        "options": [
          "A. Ước tính các nhu cầu khác nhau của người dùng",
          "B. Ước tính số màu sắc cần sử dụng",
          "C. Ước tính một tương tác cụ thể và tính toán thời gian thực hiện nó một cách nhanh chóng và dễ dàng",
          "D. Ước tính số lượng người dùng",
          "E. Ước tính nhiều tương tác cùng một lúc"
        ],
        "correct": [
          2
        ],
        "isMultiple": false,
        "explanation": "Mô hình GOMS (Goals, Operators, Methods, Selection rules) giúp các nhà phân tích ước tính và tính toán thời gian thực hiện một tương tác cụ thể một cách nhanh chóng."
      },
      {
        "id": 11,
        "title": "Câu 11 : Bạn đang thiết kế một ứng dụng đặt vé xem phim . Tính năng nào sau đây nên được kiểm tra đầu tiên trong mẫu thử tương tác ? ( You are designing a movie ticket booking application . Which feature should be tested first in the interactive prototype ? )",
        "options": [
          "A. Hiển thị thông tin chi tiết về từng bộ phim",
          "B. Thiết kế đồ họa của trang chủ",
          "C. Khả năng chọn ghế trong sơ đồ rạp chiếu phim",
          "D. Hiệu ứng chuyển động khi người dùng thay đổi lựa chọn"
        ],
        "correct": [
          2
        ],
        "isMultiple": false,
        "explanation": "Khả năng chọn ghế trên sơ đồ rạp chiếu phim là luồng nghiệp vụ cốt lõi và phức tạp nhất của ứng dụng đặt vé, nên cần được tạo mẫu thử và kiểm thử tương tác đầu tiên."
      },
      {
        "id": 12,
        "title": "Câu 12 : Việc sử dụng các biểu tượng quen thuộc hoặc nhãn theo các mẫu thiết kế chung có tác dụng gì trong cải thiện trải nghiệm người dùng ? ( How does using familiar icons or labels based on common design patterns enhance the user experience ? )",
        "options": [
          "A. Không có tác động đáng kể đến khả năng nhớ lại ( recall ) và nhận diện ( recognition )",
          "B. Tăng khả năng nhớ lại ( recall ) nhưng làm giảm khả năng nhận diện ( recognition )",
          "C. Tăng khả năng nhớ lại ( recall ) và nhận diện ( recognition )",
          "D. Giảm khả năng nhớ lại ( recall ) và nhận diện ( recognition )",
          "E. Giảm khả năng nhớ lại ( recall ) nhưng tăng khả năng nhận diện ( recognition )"
        ],
        "correct": [
          2
        ],
        "isMultiple": false,
        "explanation": "Sử dụng biểu tượng và nhãn quen thuộc giúp tăng cả khả năng nhớ lại (Recall) và nhận diện (Recognition) của người dùng nhờ tận dụng các mô hình tâm lý (Mental models) sẵn có."
      },
      {
        "id": 13,
        "title": "Câu 13 : Trong quá trình phân tích nhiệm vụ , nếu phát hiện người dùng gặp khó khăn khi hiểu cách sử dụng ứng dụng , bạn nên làm gì ? ( What should you do during task analysis if you find users struggling to understand how to use the application ? )",
        "options": [
          "A. Tạo các biểu tượng dễ nhận biết hơn",
          "B. Thêm nhiều tính năng để giải thích chức năng ứng dụng",
          "C. Thiết kế giao diện trực quan hơn",
          "D. Rút ngắn các luồng nhiệm vụ phức tạp",
          "E. Cung cấp hướng dẫn sử dụng hoặc video giới thiệu"
        ],
        "correct": [
          2
        ],
        "isMultiple": false,
        "explanation": "Nếu người dùng gặp khó khăn trong phân tích nhiệm vụ, giải pháp căn bản là thiết kế lại giao diện theo hướng trực quan và dễ hiểu hơn."
      },
      {
        "id": 14,
        "title": "Câu 14 : Nguyên tắc trong thiết kế UI - UX đại diện cho cái gì ? ( What do principles in UI - UX design represent ? )",
        "options": [
          "A. Các công nghệ mới nhất",
          "B. Các bước thực hiện chi tiết",
          "C. Các quy định bắt buộc phải tuân theo",
          "D. Các điểm định hướng chung",
          "E. Các tiêu chuẩn kỹ thuật"
        ],
        "correct": [
          3
        ],
        "isMultiple": false,
        "explanation": "Các nguyên tắc (Principles) trong thiết kế UI/UX đóng vai trò là các tiêu chuẩn kỹ thuật và định hướng chung giúp nhà thiết kế đưa ra quyết định đúng đắn."
      },
      {
        "id": 15,
        "title": "Câu 15 : Loại tế bào nào trên võng mạc nhạy cảm với ánh sáng yếu và cho phép nhìn thấy đối tượng trong điều kiện ánh sáng yếu ? ( Which type of retinal cell is sensitive to low light and enables vision in dim lighting conditions ? )",
        "options": [
          "A. Tế bào hình nón",
          "B. Tế bào thị giác",
          "C. Tế bào thần kinh",
          "D. Tế bào hình thang",
          "E. Tế bào hình que"
        ],
        "correct": [
          4
        ],
        "isMultiple": false,
        "explanation": "Tế bào hình que (Rods) trên võng mạc có độ nhạy cảm cao với ánh sáng yếu, giúp con người nhìn rõ trong điều kiện thiếu sáng/ban đêm."
      },
      {
        "id": 16,
        "title": "Câu 16 : Đâu không phải là nội dung nên được để trong các nút / thông báo có dạng viền bo tròn ? ( What content should not be included in buttons / notifications with rounded corners ? )",
        "options": [
          "A. Hình ảnh",
          "B. Cung cấp thông tin",
          "C. Biểu đồ",
          "D. Kêu gọi người dùng hành động ( Call - to - action )",
          "E. Cảnh báo"
        ],
        "correct": [
          2
        ],
        "isMultiple": false,
        "explanation": "Các nút bo tròn (Cards/Badges) phù hợp để chứa thông tin, cảnh báo hoặc lời gọi hành động (CTA), không phù hợp để chứa toàn bộ hình ảnh."
      },
      {
        "id": 17,
        "title": "Câu 17 : Người dùng thao tác với một ứng dụng thông qua những phần tử nào của giao diện dạng WIMP ? ( Through which elements of a WIMP interface does a user interact with an application ? )",
        "options": [
          "A. Trang web , phím tắt , con trỏ",
          "B. Trang web , phím chức năng , thực đơn",
          "C. Thư mục , tập tin , ứng dụng",
          "D. Cửa sổ , phím tắt , con trỏ",
          "E. Cửa sổ , biểu tượng , con trỏ"
        ],
        "correct": [
          4
        ],
        "isMultiple": false,
        "explanation": "Giao diện WIMP (Windows, Icons, Menus, Pointer) cho phép người dùng tương tác thông qua Cửa sổ (Windows), Biểu tượng (Icons) và Con trỏ (Pointer)."
      },
      {
        "id": 18,
        "title": "Câu 18 : Tính dùng được cho phép : ( Usability allows : )",
        "options": [
          "A. Xác định cách sử dụng sản phẩm",
          "B. Xác định cách mà con người quan sát và đánh giá sản phẩm",
          "C. Xác định xem có nên đồng ý trả tiền cho sản phẩm hay không",
          "D. Xác định cách thức người phát triển dùng sản phẩm",
          "E. Xác định cách thức người dùng sử dụng sản phẩm"
        ],
        "correct": [
          4
        ],
        "isMultiple": false,
        "explanation": "Tính dùng được (Usability) là thuộc tính cho phép xác định và đánh giá hiệu quả cách thức người dùng sử dụng sản phẩm để đạt mục tiêu."
      },
      {
        "id": 19,
        "title": "Câu 19 : Điều nào sau đây là một ví dụ về \" Thiết kế lấy người dùng làm trung tâm \" ? ( Which of the following is an example of \" User - Centered Design \" ? )",
        "options": [
          "A. Thiết kế dựa trên phản hồi của người dùng",
          "B. Thiết kế chỉ tập trung vào một phần nhỏ của sản phẩm",
          "C. Thiết kế dựa trên sự lựa chọn của nhà phát triển",
          "D. Thiết kế dựa trên xu hướng thị trường",
          "E. Thiết kế dựa trên yêu cầu của doanh nghiệp"
        ],
        "correct": [
          0
        ],
        "isMultiple": false,
        "explanation": "Thiết kế lấy người dùng làm trung tâm (UCD) đặt phản hồi, nhu cầu và hành vi của người dùng làm căn cứ chính cho mọi quyết định thiết kế."
      },
      {
        "id": 20,
        "title": "Câu 20 : Phần mềm nào dưới đây thường được sử dụng để thiết kế giao diện người dùng cho các ứng dụng di động và web ? ( Which of the following software is commonly used for designing user interfaces for mobile and web applications ? )",
        "options": [
          "A. Visual Code Studio",
          "B. Figma",
          "C. Microsoft Word",
          "D. Oracle Database",
          "E. Adobe Photoshop"
        ],
        "correct": [
          1
        ],
        "isMultiple": false,
        "explanation": "Figma hiện là phần mềm tiêu chuẩn phổ biến nhất được sử dụng để thiết kế giao diện (UI) và trải nghiệm người dùng (UX) cho web và di động."
      },
      {
        "id": 21,
        "title": "Câu 21 : Trong thiết kế lặp , mục đích của các chu kỳ lặp lại là gì ? ( In iterative design , what is the purpose of the repeated cycles ? )",
        "options": [
          "A. Giảm chi phí phát triển",
          "B. Bổ sung các tính năng mới",
          "C. Tạo ra các phiên bản sản phẩm tạm thời để thử nghiệm với người dùng",
          "D. Cải thiện sản phẩm dựa trên phản hồi từ người dùng và thử nghiệm",
          "E. Đảm bảo rằng sản phẩm được phát triển nhanh chóng"
        ],
        "correct": [
          3
        ],
        "isMultiple": false,
        "explanation": "Trong thiết kế lặp (Iterative Design), các chu kỳ lặp lại giúp liên tục cải thiện sản phẩm dựa trên phản hồi thực tế từ người dùng qua từng phiên thử nghiệm."
      },
      {
        "id": 22,
        "title": "Câu 22 : Mục tiêu chính của phương pháp duyệt nhận thức là gì ? ( What is the main objective of the Cognitive Walkthrough method ? )",
        "options": [
          "A. Đánh giá chi phí đầu tư vào sản phẩm đầu cuối của người dùng để sử dụng hệ thống",
          "B. Đánh giá mức độ dễ hiểu , dễ học của hệ thống với người dùng mới",
          "C. Đánh giá tốc độ của hệ thống",
          "D. Đánh giá bảo mật của hệ thống",
          "E. Đánh giá tính thẩm mỹ của giao diện hệ thống"
        ],
        "correct": [
          1
        ],
        "isMultiple": false,
        "explanation": "Phương pháp Duyệt nhận thức (Cognitive Walkthrough) tập trung đánh giá mức độ dễ học, dễ hiểu của hệ thống đối với người dùng mới lần đầu tiếp xúc."
      },
      {
        "id": 23,
        "title": "Câu 23 : Trong thiết kế di động , mục tiêu chính của Định luật Fitts là gì ? ( What is the main goal of Fitts's Law in mobile design ? )",
        "options": [
          "A. Tăng số lượng tính năng để đáp ứng nhu cầu người dùng",
          "B. Tăng tốc độ điều hướng giữa các trang",
          "C. Tối ưu hóa màu sắc và hình ảnh trên màn hình",
          "D. Giảm thời gian tải ứng dụng",
          "E. Tăng kích thước các phần tử giao diện để dễ thao tác"
        ],
        "correct": [
          4
        ],
        "isMultiple": false,
        "explanation": "Định luật Fitts chỉ ra rằng thời gian chạm tới mục tiêu phụ thuộc vào khoảng cách và kích thước mục tiêu; trên di động, việc tăng kích thước các nút giúp người dùng dễ thao tác hơn."
      },
      {
        "id": 24,
        "title": "Câu 24 : Khi thiết kế hệ thống giám sát sản xuất trong một nhà máy , bối cảnh sử dụng sẽ ảnh hưởng đến điều gì ? ( What aspects of a production monitoring system in a factory are affected by its context of use ? )",
        "options": [
          "A. Tốc độ xử lý dữ liệu của hệ thống , giúp cập nhật thông tin thời gian thực cho các thiết bị và máy móc trong dây chuyền sản xuất",
          "B. Số lượng người dùng có thể truy cập cùng một lúc , đảm bảo hệ thống hỗ trợ hiệu quả trong môi trường có nhiều công nhân hoặc kỹ thuật viên sử dụng",
          "C. Thiết kế đồ họa theo phong cách hiện đại , nhằm tạo sự hấp dẫn và tăng trải nghiệm thẩm mỹ cho người sử dụng",
          "D. Cách người dùng lựa chọn các tùy chọn nâng cao , tối ưu cho việc thực hiện các lệnh phức tạp hoặc điều chỉnh hệ thống",
          "E. Kích thước và vị trí các nút điều khiển trên giao diện , đảm bảo chúng dễ dàng truy cập và thao tác ngay cả khi người dùng đeo găng tay hoặc trong môi trường nhiều tiếng ồn"
        ],
        "correct": [
          4
        ],
        "isMultiple": false,
        "explanation": "Bối cảnh sử dụng trong nhà máy (nhiều tiếng ồn, công nhân đeo găng tay) quyết định trực tiếp đến kích thước và vị trí các nút điều khiển trên giao diện để đảm bảo thao tác chính xác."
      },
      {
        "id": 25,
        "title": "Câu 25 : Khi thiết kế tính năng nhắc nhở thanh toán hóa đơn của một ứng dụng ví điện tử , điều nào sau đây là quan trọng nhất ? ( What is the most important factor when designing a bill payment reminder feature for a digital wallet application ? )",
        "options": [
          "A. Tích hợp với lịch cá nhân của người dùng",
          "B. Tự động ghi hóa đơn vào danh sách giao dịch",
          "C. Cho phép tùy chỉnh thời gian nhắc nhở",
          "D. Đưa ra lời khuyên tài chính liên quan đến hóa đơn",
          "E. Gửi thông báo qua nhiều kênh ( email , app )"
        ],
        "correct": [
          2
        ],
        "isMultiple": false,
        "explanation": "Với ứng dụng ví điện tử, việc gửi thông báo nhắc nhở qua nhiều kênh (như ứng dụng, email, SMS) là yếu tố quan trọng nhất giúp người dùng không bỏ lỡ hạn thanh toán."
      },
      {
        "id": 26,
        "title": "Câu 26 : Đâu là một trong những nguyên tắc khai thác quy luật thị giác trong thiết kế UI dựa trên nguyên lý Gestalt ? ( What is one principle of leveraging visual perception laws in UI design based on Gestalt principles ? )",
        "options": [
          "A. Ánh xạ ( Mapping )",
          "B. Phản hồi thông tin ( Feedback )",
          "C. Tối giản ( Minimalism )",
          "D. Tính nhất quán ( Consistency )",
          "E. Tính gần nhau ( Proximity )"
        ],
        "correct": [
          4
        ],
        "isMultiple": false,
        "explanation": "Tính nhất quán (Consistency) là một trong những nguyên tắc quan trọng khai thác quy luật thị giác, giúp người dùng dễ dàng dự đoán và nhận biết thành phần giao diện."
      },
      {
        "id": 27,
        "title": "Câu 27 : Tính dùng được là gì trong bối cảnh thiết kế giao diện người dùng ? ( What is usability in the context of user interface design ? )",
        "options": [
          "A. Tính năng bảo mật của hệ thống để bảo vệ dữ liệu người dùng",
          "B. Lợi ích mà người dùng nhận được từ việc sử dụng hệ thống",
          "C. Mức độ dễ dàng mà người dùng có thể sử dụng hệ thống để đạt được mục tiêu cụ thể",
          "D. Khả năng của hệ thống để thực hiện nhiều chức năng khác nhau",
          "E. Tốc độ mà hệ thống có thể xử lý và phản hồi các yêu cầu của người dùng"
        ],
        "correct": [
          2
        ],
        "isMultiple": false,
        "explanation": "Tính dùng được (Usability) đo lường mức độ dễ dàng và hiệu quả mà người dùng có thể đạt được mục tiêu cụ thể khi sử dụng hệ thống."
      },
      {
        "id": 28,
        "title": "Câu 28 : Trong thiết kế giao diện cho phần mềm doanh nghiệp sử dụng lâu dài , nguyên tắc công thái học nào cần được ưu tiên ? ( Which ergonomic principles should be prioritized when designing interfaces for enterprise software intended for long-term use ? )",
        "options": [
          "A. Sử dụng giao diện tươi sáng để tăng năng lượng làm việc",
          "B. Thiết kế giao diện bắt mắt với nhiều hiệu ứng chuyển động",
          "C. Bỏ qua công thái học vì người dùng đã quen với công việc",
          "D. Tăng số lượng tính năng trên một màn hình để giảm thao tác chuyển màn hình",
          "E. Giảm tải thông tin trên màn hình để tránh căng thẳng mắt"
        ],
        "correct": [
          4
        ],
        "isMultiple": false,
        "explanation": "Đối với phần mềm doanh nghiệp dùng lâu dài, việc giảm tải mật độ thông tin trên màn hình là nguyên tắc công thái học quan trọng để tránh gây mỏi mắt và căng thẳng cho người dùng."
      },
      {
        "id": 29,
        "title": "Câu 29 : Khi nào thì người thiết kế nên sử dụng mẫu thử độ tin cậy thấp ? ( When should designers use low-fidelity prototypes ? )",
        "options": [
          "A. Khi cần phát triển một sản phẩm hoàn chỉnh",
          "B. Khi cần đảm bảo giao diện mẫu thử giống y hệt giao diện sản phẩm thực tế",
          "C. Khi cần thu thập phản hồi sớm từ người dùng",
          "D. Khi cần kiểm tra các tính năng cụ thể của giao diện người dùng",
          "E. Khi cần xác định các yêu cầu chức năng"
        ],
        "correct": [
          2
        ],
        "isMultiple": false,
        "explanation": "Mẫu thử độ tin cậy thấp (Low-fidelity prototypes như phác thảo giấy) nên được sử dụng ở giai đoạn đầu để nhanh chóng xác định các yêu cầu chức năng và luồng ý tưởng."
      },
      {
        "id": 30,
        "title": "Câu 30 : Trong hiện tượng ảo ảnh Ponzo , điều gì tạo ra cảm giác hai vật thể có cùng kích thước thực lại trông khác nhau về kích thước ? ( What causes the perception that two objects of the same actual size appear to differ in size in the Ponzo illusion ? )",
        "options": [
          "A. Sự khác biệt về màu sắc khiến não bộ có xu hướng nhận định kích thước của các vật thể được đặt trên các nền sáng hoặc tối khác nhau dựa trên sự tương phản màu sắc",
          "B. Hiệu ứng ánh sáng tạo ra cảm giác rằng một vật thể sáng hơn hoặc rõ ràng hơn sẽ trông lớn hơn so với một vật thể khác cùng kích thước",
          "C. Hiệu ứng chuyển động khiến não bộ đánh giá sai kích thước của một vật thể di chuyển ( hoặc đặt trên một nền di chuyển ) so với kích thước của một vật thể khác đứng yên",
          "D. Ảnh hưởng của góc nhìn , sự biến dạng do phối cảnh làm người quan sát cảm nhận sai về kích thước thực của vật thể",
          "E. Hiệu ứng của đường dẫn hội tụ khi các đường song song ( như đường ray ) hội tụ lại ở một điểm , tạo cảm giác vật thể ở xa lớn hơn vật thể ở gần"
        ],
        "correct": [
          4
        ],
        "isMultiple": false,
        "explanation": "Ảo ảnh Ponzo xảy ra do các đường dẫn hội tụ (tạo phối cảnh chiều sâu) đánh lừa não bộ khiến vật thể nằm gần điểm hội tụ trông lớn hơn vật thể ở gần."
      },
      {
        "id": 31,
        "title": "Câu 31 : Vùng 4 (trong hình ảnh bản đồ thấu cảm) là :",
        "options": [
          "A. Thinks",
          "B. Feels",
          "C. Likes",
          "D. Says",
          "E. Does"
        ],
        "correct": [
          1
        ],
        "isMultiple": false,
        "explanation": "Bản đồ thấu cảm (Empathy Map) gồm các vùng chính đại diện cho tâm lý người dùng, trong đó Vùng 4 tương ứng với suy nghĩ (Thinks)."
      },
      {
        "id": 32,
        "title": "Câu 32 : Hình này biểu diễn những loại nội dung nào ( chọn 2 )?",
        "options": [
          "A. User story",
          "B. User persona",
          "C. User flow",
          "D. User scenario",
          "E. Empathy map"
        ],
        "correct": [
          1,
          4
        ],
        "isMultiple": true,
        "explanation": "Hình ảnh biểu diễn kết hợp cả Chân dung người dùng (User Persona) và Bản đồ thấu cảm (Empathy Map)."
      },
      {
        "id": 33,
        "title": "Câu 33 : Trong biểu đồ trên đây (Task Flow), ký hiệu nào tương ứng với các điểm quyết định của người dùng :",
        "options": [
          "A. Mũi tên màu xanh lá cây",
          "B. Hình thoi màu cam",
          "C. Ô chữ nhật màu xanh lam",
          "D. Ô chữ nhật màu vàng",
          "E. Mũi tên màu đỏ"
        ],
        "correct": [
          3
        ],
        "isMultiple": false,
        "explanation": "Trong sơ đồ luồng nhiệm vụ (Task Flow), các ô hình chữ nhật màu vàng thường đại diện cho các điểm quyết định hoặc lựa chọn của người dùng."
      },
      {
        "id": 34,
        "title": "Câu 34 : Người dùng muốn quay về màn hình số 1. Tuy nhiên , khi bấm vào nút Calendar hoặc refresh trang , người dùng vẫn ở màn hình n . Hãy cho biết , thiết kế trên vi phạm nguyên tắc gì .",
        "options": [
          "A. Tính ánh xạ",
          "B. Tính trực quan",
          "C. Tính ràng buộc",
          "D. Tính thế chỗ",
          "E. Tính phản hồi"
        ],
        "correct": [
          4
        ],
        "isMultiple": false,
        "explanation": "Việc người dùng không thể chuyển hướng trở lại màn hình mong muốn khi thao tác vi phạm tính thế chỗ (Replaceability) / khả năng điều hướng tự do của giao diện."
      },
      {
        "id": 35,
        "title": "Câu 35 : Biểu đồ sau đây thuộc loại gì ?",
        "options": [
          "A. Navigation flow",
          "B. Site map",
          "C. Interface elements",
          "D. Wireframe",
          "E. Task flow"
        ],
        "correct": [
          3
        ],
        "isMultiple": false,
        "explanation": "Sơ đồ khung dây (Wireframe) biểu diễn cấu trúc bố cục và vị trí các phần tử trên giao diện mà chưa đi vào chi tiết đồ họa."
      },
      {
        "id": 36,
        "title": "Câu 36 : Chọn phát biểu phù hợp nhất về thiết kế giao diện của website bên dưới .",
        "options": [
          "A. Liệt kê đầy đủ các tính năng được sẽ hỗ trợ việc tương tác tốt hơn",
          "B. Thiết kế website cần nhất quán",
          "C. Giao diện bắt mắt sẽ thu hút sự quan tâm của người dùng",
          "D. Thông tin thể hiện trên trang cần đầy đủ và bố cục hợp lý",
          "E. Sự sáng tạo trong thiết kế mang lại thú vị cho người dùng"
        ],
        "correct": [
          3
        ],
        "isMultiple": false,
        "explanation": "Một giao diện website tốt cần liệt kê đầy đủ và bố trí hợp lý các tính năng để hỗ trợ quá trình tương tác của người dùng diễn ra thuận lợi nhất."
      },
      {
        "id": 37,
        "title": "Câu 37 : Biểu đồ sau thuộc loại gì?",
        "options": [
          "A. Site map",
          "B. Task flow",
          "C. Interface elements",
          "D. Wireframe",
          "E. Navigation flow"
        ],
        "correct": [
          3
        ],
        "isMultiple": false,
        "explanation": "Biểu đồ liệt kê và phân loại các thành phần giao diện (Interface elements)."
      },
      {
        "id": 38,
        "title": "Câu 38 : Để kiểm thử tính dùng được của giao diện nói trên , câu hỏi sau đây được đặt ra cho người dùng : “ Theo quý vị , phần tử giao diện tương ứng với ô “ no task found ” sẽ hiện thị những thông tin gì ? ” Các câu trả lời thu được từ người dùng bao gồm :",
        "options": [
          "A. Question-asking protocol",
          "B. Remote testing",
          "C. Teaching method",
          "D. Thinking Aloud",
          "E. Co-discovery learning"
        ],
        "correct": [
          0
        ],
        "isMultiple": false,
        "explanation": "Phương pháp Thinking Aloud (Nghĩ thành lời) yêu cầu người dùng diễn đạt liên tục những suy nghĩ, nhận định của họ trong quá trình thao tác kiểm thử giao diện."
      },
      {
        "id": 39,
        "title": "Câu 39 : Điều nào sau đây là không phù hợp với việc thiết kế giao diện trên các thiết bị khác nhau ( chọn 4 )",
        "options": [
          "A. Quan tâm đến các nền tảng của người dùng .",
          "B. Chú ý đến các tính năng trước .",
          "C. Ưu tiên thiết kế trước giao diện trên thiết bị di động .",
          "D. Lựa chọn nền tảng nhiều người dùng .",
          "E. Nên lựa chọn các thành tố quan trọng ."
        ],
        "correct": [
          1,
          2,
          3,
          4
        ],
        "isMultiple": true,
        "explanation": "Các đáp án B, C, D, E đại diện cho các quan niệm hoặc cách làm không phù hợp trong quy trình thiết kế giao diện đa nền tảng."
      },
      {
        "id": 40,
        "title": "Câu 40 : Cho biết website bên dưới cần chú ý điều gì nhất ?",
        "options": [
          "A. Cần cung cấp thêm những thông tin cần thiết",
          "B. Chưa đảm bảo tính nhất quán",
          "C. Chưa tạo được điểm nhấn",
          "D. Cần có thêm khoảng trắng"
        ],
        "correct": [
          3
        ],
        "isMultiple": false,
        "explanation": "Giao diện website cần được thiết kế có thêm khoảng trắng (White space) hợp lý để tạo sự thông thoáng, dễ đọc và tránh gây ngợp cho người xem."
      }
    ]
  }
];
const quizQuestions = allQuizSets[0].questions;
