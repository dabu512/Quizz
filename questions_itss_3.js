// Auto-generated quiz dataset from ITSS_TN.docx
if (typeof allQuizSets !== 'undefined' && Array.isArray(allQuizSets)) {
  allQuizSets.push({
    "id": "itss_3",
    "title": "Trắc nghiệm ITSS - Phần 3",
    "description": "Đề ôn tập trắc nghiệm môn Kiến trúc và Thiết kế phần mềm (ITSS) - Phần 3.",
    "filename": "ITSS_TN.docx",
    "questionsCount": 22,
    "questions": [
      {
            "id": 1,
            "title": "Câu 1: Phát biểu nào sau đây đúng về mối kết hợp định tính (Qualified Associations) trên sơ đồ lớp?",
            "options": [
                  "A. Mối kết hợp định tính xác định số lượng các đối tượng có thể tham gia trong mối kết hợp tính chất khác của mối kết hợp.",
                  "B. Một lớp kết hợp đóng gói thông tin về mối kết hợp",
                  "C. Một lớp kết hợp được nối đến mối kết hợp bằng đường đứt nét. (dashed line)",
                  "D. Tất cả các câu trên đều đúng"
            ],
            "correct": [
                  0
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: A. (A. Mối kết hợp định tính xác định số lượng các đối tượng có thể tham gia trong mối kết hợp tính chất khác của mối kết hợp.)\n\n(Lưu ý: Đề bài ghi nhầm tiêu đề \"mối kết hợp định tính\" ở phần nội dung câu hỏi phía dưới, nhưng các phương án a, b, c thực chất đang mô tả về Lớp kết hợp - Association Class).\nGiải thích :\nMột lớp kết hợp (Association Class) vừa mang tính chất của một mối quan hệ kết hợp (định bản số/số lượng) vừa là một lớp thực thụ giúp đóng gói các thuộc tính riêng của mối quan hệ đó (b). Ký hiệu của nó trong UML là được nối vào đường kết hợp chính bằng một đường nét đứt (c).\nVị trí trong slide: Bài 6: Thiết kế lớp (Mục 3: Định nghĩa mối quan hệ giữa các lớp / Association Class)."
      },
      {
            "id": 2,
            "title": "Câu 2: Phát biểu nào sau đây đúng về lớp kết hợp trên sơ đồ lớp?",
            "options": [
                  "A. Một lớp kết hợp được nối đến mối kết hợp bằng đường liền nét. (solid line)",
                  "B. Một lớp kết hợp được nối đến mối kết hợp bằng đường chấm. (dotted line)",
                  "C. Một lớp kết hợp chứa các luật bắt buộc phải đảm bảo các ràng buộc của mối quan hệ.",
                  "D. Không có phát biểu nào đúng"
            ],
            "correct": [
                  0
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: A. (A. Một lớp kết hợp được nối đến mối kết hợp bằng đường liền nét. (solid line))\n\n(Lưu ý: Đáp án đánh dấu tích ✓ ở câu a trong đề bài bị sai về mặt ký hiệu UML tiêu chuẩn vì Association Class bắt buộc phải nối bằng đường đứt nét dashed/dotted line. Đáp án chuẩn xác nhất về mặt ngữ nghĩa là câu c).\nGiải thích :\nLớp kết hợp đóng vai trò ràng buộc và quản lý thông tin điều kiện giữa hai lớp kết hợp với nhau (ví dụ: lớp KếtQuảHọcTập làm lớp kết hợp giữa SinhViên và LớpHọc).\nVị trí trong slide: Bài 6: Thiết kế lớp (Mục Association Class)."
      },
      {
            "id": 3,
            "title": "Câu 3: Phát biểu nào sau đây đúng về sơ đồ trạng thái?",
            "options": [
                  "A. Sơ đồ trạng thái mô tả tất cả các trạng thái mà một đối tượng có thể có và sự chuyển dịch của các trạng thái như là kết quả của các sự kiện.",
                  "B. Sơ đồ trạng thái mô tả hành vi của nhiều đối tượng trong cùng một Use Case.",
                  "C. Sơ đồ trạng thái mô tả các loại đối tượng trong hệ thống và các loại mối quan hệ khác nhau giữa chúng.",
                  "D. Sơ đồ trạng thái thể hiện nhiều thành phần trong hệ thống và các phụ thuộc của chúng."
            ],
            "correct": [
                  0
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: A. (A. Sơ đồ trạng thái mô tả tất cả các trạng thái mà một đối tượng có thể có và sự chuyển dịch của các trạng thái như là kết quả của các sự kiện.)\n\nGiải thích :\nĐây là định nghĩa cốt lõi của sơ đồ trạng thái (State Machine Diagram). Nó theo dõi vòng đời của một đối tượng đơn lẻ sở hữu các trạng thái phức tạp và cách nó phản ứng trước ngoại lực (sự kiện).\nVị trí trong slide: Bài 6: Thiết kế lớp (Mục 4: Định nghĩa ra các trạng thái)."
      },
      {
            "id": 4,
            "title": "Câu 4: Hoàn chỉnh câu sau về thông tin (artifact) trong sơ đồ trạng thái: Một ......... liên quan đến một sự chuyển dịch và được xem như một tiến trình xuất hiện nhanh và không bị ngắt bởi một số sự kiện.",
            "options": [
                  "A. Hành động (Action)",
                  "B. Hoạt động (Activity)",
                  "C. Điều kiện che chắn (Guard)",
                  "D. Sự kiện (Event)"
            ],
            "correct": [
                  0
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: A. (A. Hành động (Action))\n\nGiải thích :\nTrong sơ đồ trạng thái, \"Action\" (Hành động) là một xử lý xảy ra trên đường chuyển dịch trạng thái (transition), có đặc tính là thực hiện rất nhanh (gần như tức thời) và không thể bị ngắt giữa chừng.\nVị trí trong slide: Bài 6: Thiết kế lớp (Mục 4: Định nghĩa ra các trạng thái)."
      },
      {
            "id": 5,
            "title": "Câu 5: Hoàn chỉnh câu sau về thông tin (artifact) trong sơ đồ trạng thái: Một ......... liên quan với một trạng thái và có thể diễn ra trong thời gian dài. Nó có thể bị ngắt bởi một số sự kiện.",
            "options": [
                  "A. Hành động (Action)",
                  "B. Hoạt động (Activity)",
                  "C. Điều kiện che chắn (Guard)",
                  "D. Sự kiện (Event)"
            ],
            "correct": [
                  1
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: B. (B. Hoạt động (Activity))\n\nGiải thích :\nNgược lại với Action, \"Activity\" (Hoạt động) trong sơ đồ trạng thái là xử lý gắn liền ở bên trong một trạng thái (do / Hoạt động). Nó có tính chất kéo dài theo thời gian và có thể bị ngắt (interrupt) nếu xuất hiện một sự kiện dịch chuyển trạng thái khác đi vào.\nVị trí trong slide: Bài 6: Thiết kế lớp (Mục 4: Định nghĩa ra các trạng thái)."
      },
      {
            "id": 6,
            "title": "Câu 6: Mệnh đề nào sau đây đúng về sơ đồ trạng thái?",
            "options": [
                  "A. Sơ đồ trạng thái là cách biểu diễn tốt hành vi của một đối tượng qua nhiều Use Cases.",
                  "B. Sơ đồ trạng thái là cách biểu diễn tốt hành vi của nhiều đối tượng qua nhiều Use Cases.",
                  "C. Sơ đồ trạng thái là cách biểu diễn tốt hành vi của nhiều đối tượng trong một Use Cases.",
                  "D. Sơ đồ trạng thái là cách biểu diễn tốt dãy các hành động cho nhiều đối tượng và Use Cases."
            ],
            "correct": [
                  0
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: A. (A. Sơ đồ trạng thái là cách biểu diễn tốt hành vi của một đối tượng qua nhiều Use Cases.)\n\nGiải thích :\nSơ đồ trạng thái tập trung mô tả hành vi động của một đối tượng duy nhất xuyên suốt vòng đời của nó qua nhiều Use Case khác nhau của hệ thống.\nVị trí trong slide: Bài 6: Thiết kế lớp (Mục 4: Định nghĩa ra các trạng thái)."
      },
      {
            "id": 7,
            "title": "Câu 7: Hoàn chỉnh câu sau: ......... là cách biểu diễn tốt để mô tả hành vi của một đối tượng qua nhiều Use Cases. Nó rất tốt để mô tả hành vi liên quan đến một số đối tượng hợp tác với nhau.",
            "options": [
                  "E. Sơ đồ trạng thái (State Diagrams)",
                  "F. Sơ đồ tuần tự (Sequence Diagrams)",
                  "G. Sơ đồ hợp tác (Collaboration Diagrams)",
                  "H. Sơ đồ hoạt động (Activity Diagrams)"
            ],
            "correct": [
                  0
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: E. (E. Sơ đồ trạng thái (State Diagrams))\n\nGiải thích :\nSơ đồ trạng thái tập trung mô tả hành vi động của một đối tượng duy nhất xuyên suốt vòng đời của nó qua nhiều Use Case khác nhau của hệ thống.\nVị trí trong slide: Bài 6: Thiết kế lớp (Mục 4: Định nghĩa ra các trạng thái)."
      },
      {
            "id": 8,
            "title": "Câu 8: Hoàn chỉnh câu sau: ......... là cách biểu diễn tốt để mô tả hành vi của nhiều đối tượng trong một Use Case",
            "options": [
                  "E. Sơ đồ trạng thái (State Diagrams)",
                  "F. Sơ đồ tương tác (Interaction Diagrams)",
                  "G. Sơ đồ hoạt động (Activity Diagrams)",
                  "H. Sơ đồ lớp (Class Diagrams)"
            ],
            "correct": [
                  1
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: F. (F. Sơ đồ tương tác (Interaction Diagrams))\n\nGiải thích :\nSơ đồ tương tác (gồm sơ đồ tuần tự và sơ đồ cộng tác) là công cụ hoàn hảo để mô tả hành vi của nhiều đối tượng tương tác qua lại bằng thông điệp nhằm hiện thực hóa luồng xử lý bên trong một Use Case.\nVị trí trong slide: Bài 3: Thiết kế kiến trúc (Mục 3: Phân phối hành vi trường hợp sử dụng)."
      },
      {
            "id": 9,
            "title": "Câu 9: Hoàn chỉnh câu sau: ......... là cách biểu diễn tốt để thể hiện dãy các hành động cho nhiều đối tượng và Use Case",
            "options": [
                  "A. Sơ đồ trạng thái (State Diagrams)",
                  "B. Sơ đồ tuần tự (Sequence Diagrams)",
                  "C. Sơ đồ hợp tác (Collaboration Diagrams)",
                  "D. Sơ đồ hoạt động (Activity Diagrams)"
            ],
            "correct": [
                  3
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: D. (D. Sơ đồ hoạt động (Activity Diagrams))\n\nGiải thích :\nSơ đồ hoạt động giống như một lưu đồ nâng cao, tập trung mô tả một chuỗi/dãy các hành động, luồng xử lý công việc liên quan đến nhiều đối tượng (qua các phân làn - swimlane) và có thể bao quát nhiều kịch bản Use Case.\nVị trí trong slide: Bài 2: Mô hình hóa yêu cầu với Use Case (Phần Sơ đồ hoạt động)."
      },
      {
            "id": 10,
            "title": "Câu 10: Ký hiệu * trong UML biểu diễn:",
            "options": [
                  "A. Biểu diễn các bước lặp lại mà không có cấu trúc vòng lặp",
                  "B. Nó chỉ ra rằng các hoạt động được thực hiện nhiều lần",
                  "C. Biểu diễn nhiều hoạt động cần cùng được thực hiện trong một vài trạng thái.",
                  "D. Câu a và b đúng"
            ],
            "correct": [
                  3
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: D. (D. Câu a và b đúng)\n\nGiải thích :\nKý hiệu dấu sao * đặt trước tên thông điệp hoặc hoạt động trong các sơ đồ động của UML (như Sơ đồ tuần tự/hoạt động) biểu thị tính chất lặp đi lặp lại (iteration) của hành động/thông điệp đó mà không cần vẽ tường minh một vòng lặp.\nVị trí trong slide: Bài 3: Thiết kế kiến trúc (Mục Sơ đồ tương tác)."
      },
      {
            "id": 11,
            "title": "Câu 11: Mục đích của kỹ thuật thiết kế bằng hợp đồng \"Design by Contract\" là:",
            "options": [
                  "A. Cung cấp định nghĩa chặt chẽ mục đích các hành vi và trạng thái hợp lệ của lớp.",
                  "B. Biểu diễn các đối tượng cộng tác trong một use case như thế nào.",
                  "C. Biểu diễn nhóm các lớp và các phụ thuộc giữa chúng",
                  "D. Cung cấp một vài kỹ thuật hữu ích cho phân tích, thiết kế và viết mã."
            ],
            "correct": [
                  0
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: A. (A. Cung cấp định nghĩa chặt chẽ mục đích các hành vi và trạng thái hợp lệ của lớp.)\n\nGiải thích :\nKỹ thuật \"Design by Contract\" (Thiết kế theo hợp đồng) sử dụng các ràng buộc Tiền điều kiện (Pre-condition), Hậu điều kiện (Post-condition) và Bất biến (Invariant) để định nghĩa cực kỳ chặt chẽ trách nhiệm và trạng thái hợp lệ của các phương thức trong lớp.\nVị trí trong slide: Bài 6: Thiết kế lớp (Mục 2: Định nghĩa ra các thao tác/phương thức)."
      },
      {
            "id": 12,
            "title": "Câu 12: Hoàn chỉnh các mệnh đề sau về mối quan hệ giữa các Use Cases: Sử dụng ......... khi chúng ta muốn giảm các bước trùng lặp giữa các use case, lấy những bước chung đó để tạo nên use case phụ.",
            "options": [
                  "E. Include",
                  "F. Generalization",
                  "G. Extend",
                  "H. Delegation"
            ],
            "correct": [
                  0
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: E. (E. Include)\n\nGiải thích :\nQuan hệ <<include>> (Bao gồm) được sử dụng khi có các bước/luồng sự kiện trùng lặp giữa nhiều Use Case. Ta trích xuất phần chung đó ra thành một Use Case phụ để tái sử dụng, giúp giảm sự trùng lặp.\nVị trí trong slide: Bài 2: Mô hình hóa yêu cầu với Use Case (Mục 2: Sơ đồ sử dụng trường hợp / Mối quan hệ giữa các Use Case)."
      },
      {
            "id": 13,
            "title": "Câu 13: Hoàn chỉnh các mệnh đề sau về mối quan hệ giữa các Use Cases: Sử dụng ......... khi chúng ta muốn tạo một use case mới bằng cách thêm một số bước vào một use case có sẵn.",
            "options": [
                  "E. Include",
                  "F. Generalization",
                  "G. Extend",
                  "H. Delegation"
            ],
            "correct": [
                  2
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: G. (G. Extend)\n\nGiải thích :\nQuan hệ <<extend>> (Mở rộng) được dùng khi ta muốn thêm các bước xử lý (thường là tùy chọn hoặc điều kiện đặc biệt) vào một Use Case nền tảng có sẵn tại một vị trí cụ thể (Extension Point) mà không làm thay đổi cấu trúc Use Case gốc.\nVị trí trong slide: Bài 2: Mô hình hóa yêu cầu với Use Case (Mục 2: Sơ đồ sử dụng trường hợp / Mối quan hệ giữa các Use Case)."
      },
      {
            "id": 14,
            "title": "Câu 14: Phát biểu nào sau đây đúng về use cases?",
            "options": [
                  "A. Use Cases biểu diễn một cách nhìn bên ngoài (external view) của hệ thống",
                  "B. Có sự tương quan giữa Use Cases và lớp bên trong hệ thống",
                  "C. Không có sự tương quan giữa Use Cases và lớp bên trong hệ thống",
                  "D. Câu a và c đúng"
            ],
            "correct": [
                  3
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: D. (D. Câu a và c đúng)\n\nGiải thích :\nUse Case đứng ở góc nhìn của tác nhân (Actor) bên ngoài nhìn vào để thấy chức năng hệ thống làm được gì (external view - a). Do đứng ở mức yêu cầu bên ngoài, ở giai đoạn này hoàn toàn chưa có sự tương quan hay ràng buộc cơ cấu với các lớp kỹ thuật bên trong hệ thống (c).\nVị trí trong slide: Bài 2: Mô hình hóa yêu cầu với Use Case (Mục 2: Sơ đồ sử dụng trường hợp)."
      },
      {
            "id": 15,
            "title": "Câu 15: Phát biểu nào sau đây đúng về Sơ đồ tuần tự?",
            "options": [
                  "E. Mỗi thông điệp được biểu diễn bằng một mũi tên giữa đường sống của hai đối tượng.",
                  "F. Mỗi thông điệp được biểu diễn bằng một đường thẳng đứng đứt nét",
                  "G. Mỗi thông điệp phải có nhãn với tên thông điệp đi kèm một con số",
                  "H. Câu a và c đúng"
            ],
            "correct": [
                  0
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: E. (E. Mỗi thông điệp được biểu diễn bằng một mũi tên giữa đường sống của hai đối tượng.)\n\nGiải thích :\nTrong sơ đồ tuần tự, thông điệp (message) luôn được vẽ dưới dạng các đường mũi tên nằm ngang (mũi tên liền nét cho thông điệp đồng bộ, đứt nét cho thông điệp phản hồi) nối giữa hai đường sinh tồn (lifeline).\nVị trí trong slide: Bài 3: Thiết kế kiến trúc (Mục Sơ đồ tuần tự)."
      },
      {
            "id": 16,
            "title": "Câu 16: Sơ đồ nào biểu diễn các thể hiện trong một hệ thống tại một thời điểm?",
            "options": [
                  "E. Sơ đồ đối tượng (Object Diagram)",
                  "F. Sơ đồ lớp (Class Diagram)",
                  "G. Sơ đồ thành phần (Component Diagram)",
                  "H. Sơ đồ hệ thống (System Diagram)"
            ],
            "correct": [
                  0
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: E. (E. Sơ đồ đối tượng (Object Diagram))\n\nGiải thích :\nSơ đồ đối tượng thể hiện cấu trúc tĩnh của các thể hiện (instance) cụ thể và các liên kết dữ liệu giữa chúng tại một thời điểm chạy snapshot xác định của hệ thống.\nVị trí trong slide: Bài 3: Thiết kế kiến trúc (Slide ví dụ phân biệt giữa Class và Link/Object)."
      },
      {
            "id": 17,
            "title": "Câu 17: Phát biểu nào đúng về sơ đồ hoạt động?",
            "options": [
                  "E. Một phân nhánh có một hoạt động đến và nhiều hoạt động đi theo điều kiện.",
                  "F. Một sự hợp nhất đồng bộ của các luồng đồng thời.",
                  "G. Cả 2 câu trên đều đúng",
                  "H. Cả 2 câu trên đều sai"
            ],
            "correct": [
                  2
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: G. (G. Cả 2 câu trên đều đúng)\n\nGiải thích :\n(Tương tự câu 18 đã giải thích) Sơ đồ hoạt động sử dụng cấu trúc rẽ nhánh (Decision node) để tạo ra nhiều hoạt động đi theo điều kiện bảo vệ (e) và sử dụng thanh đồng bộ (Join node) để gộp các luồng chạy song song (f).\nVị trí trong slide: Bài 2: Mô hình hóa yêu cầu với Use Case (Phần chi tiết Sơ đồ hoạt động)."
      },
      {
            "id": 18,
            "title": "Câu 18: Phát biểu nào đúng về sơ đồ thành phần (Component Diagrams)?",
            "options": [
                  "E. Một thành phần có thể có nhiều hơn một giao diện, nó trình bày cho một đơn vị (module) vật lý của mã lệnh",
                  "F. Một thành phần không thể có nhiều hơn một giao diện.",
                  "G. Một thành phần trình bày vài loại của đơn vị phần cứng",
                  "H. Câu a và c đúng"
            ],
            "correct": [
                  0
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: E. (E. Một thành phần có thể có nhiều hơn một giao diện, nó trình bày cho một đơn vị (module) vật lý của mã lệnh)\n\nGiải thích :\n(Tương tự câu 19 đã giải thích) Thành phần (Component) đại diện cho một khối mã nguồn vật lý có thể thay thế và tái sử dụng, đóng gói mã bên trong và giao tiếp ra ngoài qua một hoặc nhiều giao diện (Interface).\nVị trí trong slide: Bài 4: Xác định các phần tử thiết kế (Mục Ánh xạ lớp phân tích sang thành phần thiết kế)."
      },
      {
            "id": 19,
            "title": "Câu 19: Phát biểu nào đúng về Use Cases?",
            "options": [
                  "A. Những yêu cầu là những ghi nhận trước tiên trong Use Cases",
                  "B. Công việc của một lần lặp được xác định bởi việc chọn lựa một số kịch bản Use Cases hay toàn bộ Use Cases.",
                  "C. Công việc của một lần lặp được xác định bởi việc chọn lựa một số đặc trưng từ danh sách các đặc trưng hơn là việc chọn lựa một số kịch bản Use Cases hay toàn bộ Use Cases.",
                  "D. Câu a và b đúng"
            ],
            "correct": [
                  3
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: D. (D. Câu a và b đúng)\n\nGiải thích :\nCác yêu cầu chức năng của hệ thống được thu thập và mô tả đầu tiên trong các Use Case (a). Trong quy trình lặp hiện đại (như RUP), kế hoạch cho một phân đoạn lặp (iteration) được xác định bằng việc lựa chọn ra một số kịch bản Use Case trọng yếu để hiện thực hóa trước (b).\nVị trí trong slide: Bài 1: Quy trình phát triển phần mềm và Bài 2: Mô hình hóa yêu cầu với Use Case."
      },
      {
            "id": 20,
            "title": "Câu 20: Kết quả của giai đoạn tinh chế (Elaboration phase) là:",
            "options": [
                  "A. Các yêu cầu chức năng (Use Cases)",
                  "B. Nền tảng cho việc đánh giá chi phí đến cuối dự án.",
                  "C. Các yêu cầu phi chức năng trong bảng chi tiết bổ sung.",
                  "D. Tất cả các câu trên"
            ],
            "correct": [
                  3
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: D. (D. Tất cả các câu trên)\n\nGiải thích :\nMục tiêu của giai đoạn Tinh chế (Elaboration) là làm rõ phần lớn các yêu cầu chức năng Use Case (a), xác định các yêu cầu phi chức năng thông qua bản Đặc tả bổ sung (c) từ đó xây dựng được Kiến trúc nền tảng ổn định, làm cơ sở chính xác để ước lượng chi phí và thời gian cho đến cuối dự án (b).\nVị trí trong slide: Bài 1: Quy trình phát triển phần mềm (Mục Giai đoạn vòng đời phát triển phần mềm)."
      },
      {
            "id": 21,
            "title": "Câu 21: Các khái niệm về phạm vi hệ thống được tìm thấy trong:",
            "options": [
                  "E. Use Cases",
                  "F. Sơ đồ Use Cases",
                  "G. Sơ đồ tương tác (Interaction Diagrams)",
                  "H. Sơ đồ tuần tự (Sequence Diagrams)"
            ],
            "correct": [
                  0
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: E. (E. Use Cases)\n\nGiải thích :\n(Tương tự câu 20) Bản thân các tài liệu đặc tả Use Case định nghĩa rõ biên giới hệ thống (system boundary), những gì thuộc phạm vi giải quyết của hệ thống và những gì nằm ngoài.\nVị trí trong slide: Bài 2: Mô hình hóa yêu cầu với Use Case."
      },
      {
            "id": 22,
            "title": "Câu 22: Sơ đồ nào là thông tin (artifact) hữu ích nhất trong việc phân tích để tìm ra các hành vi của phần mềm được xem như là hộp đen?",
            "options": [
                  "A. Sơ đồ tuần tự hệ thống (System Sequence Diagram)",
                  "B. Sơ đồ lớp quan niệm (Conceptual Class Diagram)",
                  "C. Sơ đồ triển khai (Deployment Diagram)",
                  "D. Sơ đồ thành phần (Component Diagram)"
            ],
            "correct": [
                  0
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: A. (A. Sơ đồ tuần tự hệ thống (System Sequence Diagram))\n\nGiải thích :\nSơ đồ tuần tự hệ thống (SSD) coi toàn bộ hệ thống như một chiếc \"hộp đen\" (Black Box) duy nhất và chỉ tập trung biểu diễn các luồng sự kiện/thông điệp tương tác trực tiếp đi vào/đi ra giữa các Tác nhân (Actor) bên ngoài và Hệ thống đó.\nVị trí trong slide: Bài 2: Mô hình hóa yêu cầu với Use Case (Mục 3: Đặc tả / kịch bản ca sử dụng)."
      }
]
  });
}
