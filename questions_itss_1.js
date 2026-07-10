// Auto-generated quiz dataset from ITSS_TN.docx
if (typeof allQuizSets !== 'undefined' && Array.isArray(allQuizSets)) {
  allQuizSets.push({
    "id": "itss_1",
    "title": "Trắc nghiệm ITSS - Phần 1",
    "description": "Đề ôn tập trắc nghiệm môn Kiến trúc và Thiết kế phần mềm (ITSS) - Phần 1.",
    "filename": "ITSS_TN.docx",
    "questionsCount": 23,
    "questions": [
      {
            "id": 1,
            "title": "Câu 1: Hoàn chỉnh câu sau: ......... là cách biểu diễn tốt để mô tả hành vi của một số đối tượng. Nó rất tốt để mô tả hành vi liên quan đến một số đối tượng hợp tác với nhau không cần biểu diễn rõ trình tự thời gian.",
            "options": [
                  "A. Sơ đồ trạng thái (State Diagrams)",
                  "B. Sơ đồ tuần tự (Sequence Diagrams)",
                  "C. Sơ đồ cộng tác (Collaboration Diagrams)",
                  "D. Sơ đồ hoạt động (Activity Diagrams)"
            ],
            "correct": [
                  2
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: C. (C. Sơ đồ cộng tác (Collaboration Diagrams))\n\nGiải thích :\nSơ đồ cộng tác (UML 2.0 gọi là Communication Diagram) tập trung vào cấu trúc tổ chức và mối quan hệ hợp tác giữa các đối tượng để thực hiện một kịch bản mà không đặt nặng trình tự thời gian (khác với sơ đồ tuần tự).\nVị trí trong slide: Bài 3: Thiết kế kiến trúc (Mục 3.3: Phân phối hành vi của trường hợp sử dụng vào các lớp học)."
      },
      {
            "id": 2,
            "title": "Câu 2: Hoàn chỉnh câu sau: ......... là cách biểu diễn tốt để mô tả luồng hoạt động trong một Use Case và thường được dùng trong mô hình nghiệp vụ.",
            "options": [
                  "A. Sơ đồ trạng thái (State Diagrams)",
                  "B. Sơ đồ tương tác (Interaction Diagrams)",
                  "C. Sơ đồ hoạt động (Activity Diagrams)",
                  "D. Sơ đồ lớp (Class Diagrams)"
            ],
            "correct": [
                  2
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: C. (C. Sơ đồ hoạt động (Activity Diagrams))\n\nGiải thích :\n(Tương tự câu 18 đã giải thích) Sơ đồ hoạt động sử dụng cấu trúc rẽ nhánh (Decision node) để tạo ra nhiều hoạt động đi theo điều kiện bảo vệ (e) và sử dụng thanh đồng bộ (Join node) để gộp các luồng chạy song song (f).\nVị trí trong slide: Bài 2: Mô hình hóa yêu cầu với Use Case (Phần chi tiết Sơ đồ hoạt động)."
      },
      {
            "id": 3,
            "title": "Câu 3: Sơ đồ hoạt động được sử dụng trong những tình huống sau:",
            "options": [
                  "A. Phân tích một use case",
                  "B. Mô tả thuật toán tuần tự phức tạp, xây dựng lưu đồ",
                  "C. Liên quan đến các ứng dụng đa luồng",
                  "D. Tất cả các câu trên đều đúng"
            ],
            "correct": [
                  3
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: D. (D. Tất cả các câu trên đều đúng)\n\nGiải thích :\nSơ đồ hoạt động vừa phân tích được luồng sự kiện Use Case (a), vừa dùng như lưu đồ thuật toán cho các logic phức tạp (b), lại vừa hỗ trợ chia nhánh/gộp luồng song song (Fork/Join) rất tốt cho ứng dụng đa luồng (c).\nVị trí trong slide: Bài 2: Mô hình hóa yêu cầu với Use Case (Phần chi tiết về Sơ đồ hoạt động)."
      },
      {
            "id": 4,
            "title": "Câu 4: Sơ đồ hoạt động được sử dụng trong những tình huống sau:",
            "options": [
                  "A. Biểu diễn các đối tượng cộng tác với nhau như thế nào.",
                  "B. Biểu diễn các hành vi của đối tượng qua thời gian sống của chúng.",
                  "C. Biểu diễn điều kiện logic phức tạp",
                  "D. Tất cả các câu trên đều sai"
            ],
            "correct": [
                  2
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: C. (C. Biểu diễn điều kiện logic phức tạp)\n\nGiải thích :\nSơ đồ hoạt động sử dụng các nút quyết định (Decision/Merge) cùng điều kiện bảo vệ (Guard Condition) để làm rõ các rẽ nhánh logic phức tạp. Câu (a) là sơ đồ tương tác, (b) là sơ đồ trạng thái.\nVị trí trong slide: Bài 2: Mô hình hóa yêu cầu với Use Case (Phần cấu trúc rẽ nhánh điều kiện)."
      },
      {
            "id": 5,
            "title": "Câu 5: Để biểu diễn các quan hệ vật lý giữa phần mềm và các thành phần phần cứng trong một hệ thống bạn sẽ dụng sơ đồ nào của UML?",
            "options": [
                  "A. Sơ đồ triển khai (Deployment Diagram)",
                  "B. Sơ đồ hoạt động (Activity Diagram)",
                  "C. Sơ đồ lớp (Class Diagram)",
                  "D. Sơ đồ trạng thái (State Diagram)"
            ],
            "correct": [
                  0
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: A. (A. Sơ đồ triển khai (Deployment Diagram))\n\nGiải thích :\nSơ đồ triển khai dùng để ánh xạ các thành phần phần mềm (artifact/component) lên các nút phần cứng vật lý (node) và cấu hình mạng của hệ thống.\nVị trí trong slide: Bài 2: Mô hình hóa yêu cầu với Use Case (Slide 2: Tổng quan 5 góc nhìn kiến trúc – Deployment View)."
      },
      {
            "id": 6,
            "title": "Câu 6: Mục đích của sơ đồ hoạt động là:",
            "options": [
                  "A. Biểu diễn hành vi với cấu trúc điều khiển. Sơ đồ hoạt động có thể biểu diễn nhiều đối tượng trong một use case.",
                  "B. Biểu diễn cấu trúc tĩnh của các khái niệm, các loại và các lớp",
                  "C. Giúp nắm được mục đích cơ bản của lớp, tốt cho việc khám phá việc cài đặt use case như thế nào.",
                  "D. Biểu diễn cách bố trí các thành phần trên các nút phần cứng"
            ],
            "correct": [
                  0
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: A. (A. Biểu diễn hành vi với cấu trúc điều khiển. Sơ đồ hoạt động có thể biểu diễn nhiều đối tượng trong một use case.)\n\nGiải thích :\nSơ đồ hoạt động tập trung vào khía cạnh hành vi/động của hệ thống, chứa các cấu trúc điều khiển luồng (vòng lặp, rẽ nhánh) và có thể bao quát hoạt động của nhiều đối tượng cùng tham gia Use Case qua các phân làn (Swimlane).\nVị trí trong slide: Bài 2: Mô hình hóa yêu cầu với Use Case."
      },
      {
            "id": 7,
            "title": "Câu 7: Mục đích của sơ đồ lớp là:",
            "options": [
                  "A. Biểu diễn hành vi với cấu trúc điều khiển. Sơ đồ hoạt động có thể biểu diễn nhiều đối tượng trong một use case.",
                  "B. Biểu diễn cấu trúc tĩnh của các khái niệm, các loại và các lớp",
                  "C. Giúp nắm được mục đích cơ bản của lớp, tốt cho việc khám phá việc cài đặt use case như thế nào.",
                  "D. Biểu diễn cách bố trí các thành phần trên các nút phần cứng"
            ],
            "correct": [
                  1
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: B. (B. Biểu diễn cấu trúc tĩnh của các khái niệm, các loại và các lớp)\n\nGiải thích :\nSơ đồ lớp (Class Diagram) là sơ đồ quan trọng nhất biểu diễn góc nhìn cấu trúc tĩnh của hệ thống, bao gồm các lớp, thuộc tính, phương thức và mối quan hệ giữa chúng.\nVị trí trong slide: Bài 3: Thiết kế kiến trúc và Bài 6: Thiết kế lớp."
      },
      {
            "id": 8,
            "title": "Câu 8: Mục đích của sơ đồ triển khai là:",
            "options": [
                  "A. Biểu diễn hành vi với cấu trúc điều khiển. Sơ đồ hoạt động có thể biểu diễn nhiều đối tượng trong một use case.",
                  "B. Biểu diễn cấu trúc tĩnh của các khái niệm, các loại và các lớp",
                  "C. Giúp nắm được mục đích cơ bản của lớp, tốt cho việc khám phá việc cài đặt use case như thế nào.",
                  "D. Biểu diễn cách bố trí các thành phần trên các nút phần cứng"
            ],
            "correct": [
                  3
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: D. (D. Biểu diễn cách bố trí các thành phần trên các nút phần cứng)\n\nGiải thích :\nĐây chính là mục đích cốt lõi của sơ đồ triển khai (Deployment Diagram), giúp kỹ sư hệ thống nắm được cấu hình cài đặt vật lý.\nVị trí trong slide: Bài 2: Mô hình hóa yêu cầu với Use Case (Mục tổng quan cấu trúc hệ thống)."
      },
      {
            "id": 9,
            "title": "Câu 9: Mục đích của sơ đồ tương tác (Interaction Diagram) là:",
            "options": [
                  "A. Cung cấp định nghĩa chặt chẽ mục đích các hành vi và trạng thái hợp lệ của lớp.",
                  "B. Biểu diễn các đối tượng cộng tác trong một use case như thế nào.",
                  "C. Biểu diễn nhóm các lớp và các hoạt động giữa chúng",
                  "D. Cung cấp một vài kỹ thuật hữu ích cho phân tích, thiết kế và viết mã."
            ],
            "correct": [
                  1
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: B. (B. Biểu diễn các đối tượng cộng tác trong một use case như thế nào.)\n\nGiải thích :\nSơ đồ tương tác (Interaction Diagram – bao gồm Sequence và Collaboration diagram) có mục đích chính là hiện thực hóa Use Case bằng cách chỉ ra các đối tượng trao đổi thông điệp với nhau như thế nào.\nVị trí trong slide: Bài 3: Thiết kế kiến trúc (Mục 3.3: Phân phối hành vi trường hợp sử dụng)."
      },
      {
            "id": 10,
            "title": "Câu 10: Mục đích của sơ đồ gói (Package Diagram) là:",
            "options": [
                  "A. Cung cấp định nghĩa chặt chẽ mục đích các hành vi và trạng thái hợp lệ của lớp.",
                  "B. Biểu diễn các đối tượng cộng tác trong một use case như thế nào.",
                  "C. Biểu diễn cho nhóm các lớp và các phụ thuộc giữa chúng",
                  "D. Cung cấp một vài kỹ thuật hữu ích cho phân tích, thiết kế và viết mã."
            ],
            "correct": [
                  2
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: C. (C. Biểu diễn cho nhóm các lớp và các phụ thuộc giữa chúng)\n\nGiải thích :\nSơ đồ gói (Package Diagram) là một sơ đồ cấu trúc tĩnh, dùng để tổ chức, gom nhóm các phần tử mô hình (như các lớp) thành các module và chỉ ra sự phụ thuộc (dependency) giữa các module đó.\nVị trí trong slide: Bài 4: Xác định các phần tử thiết kế (Phần quản lý gói phụ thuộc và tính đóng gói Package)."
      },
      {
            "id": 11,
            "title": "Câu 11: Mục đích của sơ đồ trạng thái (State Diagram) là:",
            "options": [
                  "A. Biểu diễn một đối tượng thay đổi trạng thái qua nhiều use cases.",
                  "B. Biểu diễn nhiều đối tượng thay đổi trạng thái qua nhiều use cases.",
                  "C. Biểu diễn cấu trúc tĩnh của các khái niệm, các loại và các lớp",
                  "D. Giúp cung cấp mục đích chính yếu của lớp"
            ],
            "correct": [
                  0
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: A. (A. Biểu diễn một đối tượng thay đổi trạng thái qua nhiều use cases.)\n\nGiải thích :\nSơ đồ trạng thái (State Diagram) tập trung vào việc mô tả vòng đời của một đối tượng duy nhất sở hữu hành vi phức tạp, chuyển đổi qua các trạng thái do tác động của sự kiện từ nhiều Use Case khác nhau.\nVị trí trong slide: Bài 6: Thiết kế lớp (Mục 4: Định nghĩa ra các trạng thái)."
      },
      {
            "id": 12,
            "title": "Câu 12: Mục đích của Use Case là:",
            "options": [
                  "A. Chỉ ra những yêu cầu từ phía người dùng.",
                  "B. Cung cấp một vài kỹ thuật hữu ích cho phân tích, thiết kế và viết mã.",
                  "C. Là nền tảng cho việc kiểm tra hệ thống",
                  "D. Câu a và c đúng"
            ],
            "correct": [
                  3
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: D. (D. Câu a và c đúng)\n\nGiải thích :\nUse Case sinh ra nhằm nắm bắt rõ ràng yêu cầu chức năng từ phía người dùng (a), đồng thời kịch bản/use case cũng chính là căn cứ, nền tảng cốt lõi để viết các kịch bản kiểm thử hệ thống (c).\nVị trí trong slide: Bài 2: Mô hình hóa yêu cầu với Use Case (Phần Phân tích yêu cầu phần mềm)."
      },
      {
            "id": 13,
            "title": "Câu 13: Trong giai đoạn xây dựng (Construction phase), mỗi lần lặp sẽ bao gồm:",
            "options": [
                  "A. Analysis, design, coding, testing, integration",
                  "B. Design, coding, testing, integration",
                  "C. Analysis, design, coding, testing",
                  "D. Design, coding"
            ],
            "correct": [
                  0
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: A. (A. Analysis, design, coding, testing, integration)\n\nGiải thích :\nTheo các mô hình phát triển phần mềm hiện đại (như RUP hay Agile), mỗi phân đoạn lặp (iteration) trong giai đoạn xây dựng đều là một vòng đời thu nhỏ bao gồm đầy đủ từ phân tích, thiết kế, lập trình cho đến kiểm thử và tích hợp.\nVị trí trong slide: Bài 1: Quy trình phát triển phần mềm (Mục 4: Mô hình phát triển phần mềm / Quy trình lặp)."
      },
      {
            "id": 14,
            "title": "Câu 14: Phát biểu nào đúng về sơ đồ hoạt động?",
            "options": [
                  "A. Có thể có một phân nhánh có một hoạt động đến và nhiều hoạt động đi theo điều kiện.",
                  "B. Có thể có một sự hợp nhất đồng bộ của các luồng đồng thời.",
                  "C. Cả 2 câu trên đều đúng",
                  "D. Cả 2 câu trên đều sai"
            ],
            "correct": [
                  2
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: C. (C. Cả 2 câu trên đều đúng)\n\nGiải thích :\nSơ đồ hoạt động hỗ trợ cấu trúc rẽ nhánh (Decision node): 1 luồng vào - nhiều luồng ra dựa trên điều kiện bảo vệ (a). Đồng thời nó có thanh đồng bộ Join để gộp (hợp nhất đồng bộ) các luồng chạy song song về lại 1 luồng chính (b).\nVị trí trong slide: Bài 2: Mô hình hóa yêu cầu với Use Case (Phần cú pháp Sơ đồ hoạt động)."
      },
      {
            "id": 15,
            "title": "Câu 15: Phát biểu nào đúng về sơ đồ thành phần (Component Diagrams)?",
            "options": [
                  "A. Một thành phần có thể có nhiều hơn một giao diện, nó Biểu diễn cho một đơn vị (module) vật lý của mã lệnh",
                  "B. Một thành phần không thể có nhiều hơn một giao diện.",
                  "C. Một thành phần trình bày vài loại của đơn vị phần cứng",
                  "D. Câu a và c đúng"
            ],
            "correct": [
                  0
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: A. (A. Một thành phần có thể có nhiều hơn một giao diện, nó Biểu diễn cho một đơn vị (module) vật lý của mã lệnh)\n\nGiải thích :\nThành phần (Component) là một khối mã lệnh vật lý (như file .dll, .jar, source code module). Nó đóng gói mã nguồn và cung cấp/yêu cầu dịch vụ thông qua một hoặc nhiều giao diện (Interface).\nVị trí trong slide: Bài 4: Xác định các phần tử thiết kế (Phần ánh xạ lớp phân tích sang thành phần thiết kế)."
      },
      {
            "id": 16,
            "title": "Câu 16: Các khái niệm về phạm vi hệ thống được tìm thấy trong:",
            "options": [
                  "A. Use Cases",
                  "B. Sơ đồ Use Cases",
                  "C. Sơ đồ tương tác (Interaction Diagrams)",
                  "D. Sơ đồ tuần tự (Sequence Diagrams)"
            ],
            "correct": [
                  0
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: A. (A. Use Cases)\n\nGiải thích :\nBản thân các Use Case (thông qua đặc tả phạm vi hệ thống, những gì hệ thống làm và không làm) định nghĩa chính xác ranh giới/phạm vi (system boundary) của hệ thống cần xây dựng.\nVị trí trong slide: Bài 2: Mô hình hóa yêu cầu với Use Case (Mục 2: Sơ đồ sử dụng trường hợp)."
      },
      {
            "id": 17,
            "title": "Câu 17: Việc đo \"độ mạnh\" của sự kết nối giữa hai thành phần hệ thống được biết như là:",
            "options": [
                  "E. Coupling (liên kết)",
                  "F. Cohesion (kết dính)",
                  "G. Aggregation (kết tập)",
                  "H. Bonding (sự liên kết)"
            ],
            "correct": [
                  0
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: E. (E. Coupling (liên kết))\n\nGiải thích :\nCoupling (Độ kết khối/Độ liên kết) đo lường mức độ phụ thuộc lẫn nhau giữa các module/thành phần. Thiết kế tốt yêu cầu lỏng lẻo (Low Coupling). Ngược lại, Cohesion (a) đo độ gắn kết bên trong một module.\nVị trí trong slide: Bài 4: Xác định các phần tử thiết kế (Slide minh họa vi phạm coupling giữa các tầng)."
      },
      {
            "id": 18,
            "title": "Câu 18: Biểu đồ nào sau đây không phải là biểu đồ của UML:",
            "options": [
                  "A. Component diagram",
                  "B. State-chart diagram",
                  "C. Deployment diagram",
                  "D. Relationship diagram"
            ],
            "correct": [
                  3
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: D. (D. Relationship diagram)\n\nGiải thích :\nTrong 13 sơ đồ tiêu chuẩn của UML không có sơ đồ nào tên là \"Relationship diagram\" (Sơ đồ mối quan hệ). Các sơ đồ Component, State-chart, Deployment đều là sơ đồ chuẩn của UML. (Lưu ý: Sơ đồ thực thể mối quan hệ là E-R diagram dùng trong DB, không thuộc UML).\nVị trí trong slide: Bài 2 (Tổng quan UML) và Bài 7: Mô hình hóa dữ liệu."
      },
      {
            "id": 19,
            "title": "Câu 19: Ký hiệu trong hình biểu diễn cho quan hệ:",
            "options": [
                  "I. Mở rộng (extend)",
                  "J. Bao gồm (include)",
                  "K. Kết hợp (association)",
                  "L. Tổng quát hóa (generalization)"
            ],
            "correct": [
                  2
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: K. (K. Kết hợp (association))\n\nGiải thích :\nĐường nối thẳng (không có mũi tên đứt nét kèm <<include>> hay <<extend>>, và không có hình tam giác rỗng của generalization) giữa hai phần tử trong sơ đồ UML thể hiện mối quan hệ kết hợp (Association) cơ bản.\nVị trí trong slide: Bài 3: Thiết kế kiến trúc (Slide 42: Mục Association và Link).\nDưới đây là lời giải thích ngắn gọn kèm vị trí bài học trong slide cho các câu hỏi trắc nghiệm tiếp theo:"
      },
      {
            "id": 20,
            "title": "Câu 20: Sơ đồ nào sau đây Không phải là sơ đồ của UML:",
            "options": [
                  "A. Component diagram",
                  "B. State-chart diagram",
                  "C. Deployment diagram",
                  "D. Relationship diagram"
            ],
            "correct": [
                  3
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: D. (D. Relationship diagram)\n\nGiải thích :\nTrong 13 sơ đồ tiêu chuẩn của UML không có sơ đồ nào tên là \"Relationship diagram\" (Sơ đồ mối quan hệ). Các sơ đồ Component, State-chart, Deployment đều là sơ đồ chuẩn của UML. (Lưu ý: Sơ đồ thực thể mối quan hệ là E-R diagram dùng trong DB, không thuộc UML).\nVị trí trong slide: Bài 2 (Tổng quan UML) và Bài 7: Mô hình hóa dữ liệu."
      },
      {
            "id": 21,
            "title": "Câu 21: Thành phần nào sau đây không là đặc tính của một đối tượng:",
            "options": [
                  "A. Identity",
                  "B. Behaviour",
                  "C. Action",
                  "D. State"
            ],
            "correct": [
                  2
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: C. (C. Action)\n\nGiải thích :\nMột đối tượng (Object) trong hướng đối tượng có 3 đặc tính cốt lõi: Định danh (Identity), Hành vi (Behavior) và Trạng thái (State). \"Action\" (Hành động) thường là khái niệm thuộc về sơ đồ hoạt động, không phải đặc tính định nghĩa đối tượng.\nVị trí trong slide: Bài 1: Quy trình phát triển phần mềm (Mục 3: Phân tích thiết kế hướng đối tượng / Khái niệm đối tượng)."
      },
      {
            "id": 22,
            "title": "Câu 22: Sự đóng gói được hiểu là:",
            "options": [
                  "A. Sự che dấu thông tin",
                  "B. Sự tổ chức các thành phần của một sơ đồ vào trong một gói (package)",
                  "C. Việc xây dựng một lớp cha dựa trên các thuộc tính và các hành vi chung của các lớp con",
                  "D. Việc xây dựng giao diện gồm tập các hành vi mà ta muốn sử dụng lại nhiều lần trên mô hình."
            ],
            "correct": [
                  0
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: A. (A. Sự che dấu thông tin)\n\nGiải thích :\nTính đóng gói (Encapsulation) là việc nhóm các thuộc tính và phương thức có liên quan lại với nhau và che giấu các chi tiết cài đặt bên trong (Information hiding), chỉ cho phép truy xuất qua giao diện công khai.\nVị trí trong slide: Bài 4: Xác định các phần tử thiết kế (Phần Đóng gói - Encapsulation)."
      },
      {
            "id": 23,
            "title": "Câu 23: Một lớp được mô tả là tập các đối tượng chia xẻ cùng các:",
            "options": [
                  "A. Attributes (thuộc tính), behaviour (hành vi) and operations (hành động)",
                  "B. Identity(đặc tính), behaviour and state (trạng thái)",
                  "C. Attributes, operations and relationships (mối quan hệ)",
                  "D. Relationships, operations and multiplicity (bản số)"
            ],
            "correct": [
                  2
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: C. (C. Attributes, operations and relationships (mối quan hệ))\n\nGiải thích :\nĐịnh nghĩa chuẩn của một Lớp (Class) trong UML là mô tả một tập hợp các đối tượng có chung các thuộc tính (Attributes), các thao tác/hành động (Operations) và các mối quan hệ (Relationships) với các lớp khác.\nVị trí trong slide: Bài 3: Thiết kế kiến trúc và Bài 6: Thiết kế lớp."
      }
]
  });
}
