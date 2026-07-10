// Auto-generated quiz dataset from ITSS_TN.docx
if (typeof allQuizSets !== 'undefined' && Array.isArray(allQuizSets)) {
  allQuizSets.push({
    "id": "itss_2",
    "title": "Trắc nghiệm ITSS - Phần 2",
    "description": "Đề ôn tập trắc nghiệm môn Kiến trúc và Thiết kế phần mềm (ITSS) - Phần 2.",
    "filename": "ITSS_TN.docx",
    "questionsCount": 22,
    "questions": [
      {
            "id": 1,
            "title": "Câu 1: Câu phát biểu nào sau đây đúng:",
            "options": [
                  "A. Một lớp là sự đóng gói của một đối tượng",
                  "B. Một lớp biểu diễn sự phân cấp của một đối tượng",
                  "C. Một lớp là một thể hiện của một đối tượng",
                  "D. Một lớp là một định nghĩa trừu tượng của một đối tượng"
            ],
            "correct": [
                  3
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: D. (D. Một lớp là một định nghĩa trừu tượng của một đối tượng)\n\nGiải thích :\nLớp đóng vai trò như một khuôn mẫu, một bản thiết kế định nghĩa trừu tượng, còn đối tượng là một thực thể cụ thể (thể hiện - instance) được sinh ra từ lớp đó.\nVị trí trong slide: Bài 1: Quy trình phát triển phần mềm (Mục Phân tích thiết kế hướng đối tượng)."
      },
      {
            "id": 2,
            "title": "Câu 2: Tính đa hình có thể được mô tả như là:",
            "options": [
                  "A. Che dấu nhiều cài đặt khác nhau dựa trên cùng một giao diện.",
                  "B. Các thuộc tính và phương thức khác nhau của các lớp con có cùng lớp cha.",
                  "C. Các lớp kết hợp (association class) với ràng buộc {or}",
                  "D. Sự tổng quát hoá (Generalization) các lớp con thừa kế"
            ],
            "correct": [
                  0
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: A. (A. Che dấu nhiều cài đặt khác nhau dựa trên cùng một giao diện.)\n\nGiải thích :\nTính đa hình (Polymorphism) cho phép các đối tượng khác nhau phản hồi cùng một thông điệp (giao diện gọi hàm) theo các cách cài đặt (hành vi) khác nhau.\nVị trí trong slide: Bài 1: Quy trình phát triển phần mềm (Mục Nguyên lý hướng đối tượng)."
      },
      {
            "id": 3,
            "title": "Câu 3: Cụm từ tốt nhất để biểu diễn mối quan hệ tổng quát hoá là:",
            "options": [
                  "A. “Is a part of”",
                  "B. “Is a kind of”",
                  "C. “Is a replica of”",
                  "D. “Is composed of”"
            ],
            "correct": [
                  1
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: B. (B. “Is a kind of”)\n\nGiải thích :\nMối quan hệ tổng quát hóa (Generalization / Thừa kế) thể hiện mối quan hệ \"là một loại của\" (ví dụ: Chó là một loại của Động vật). Trong khi đó \"Is a part of\" hay \"Is composed of\" là quan hệ thành phần (Aggregation/Composition).\nVị trí trong slide: Bài 4: Xác định các phần tử thiết kế (Slide ví dụ về Generalization)."
      },
      {
            "id": 4,
            "title": "Câu 4: Một lớp con thừa kế từ lớp cha các:",
            "options": [
                  "A. Attributes, links",
                  "B. Attributes, operations",
                  "C. Attributes, operations, relationships",
                  "D. Relationships, operations, links"
            ],
            "correct": [
                  2
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: C. (C. Attributes, operations, relationships)\n\nGiải thích :\nKhi thừa kế từ lớp cha, lớp con sẽ nhận lại toàn bộ cấu trúc bao gồm các thuộc tính (Attributes), các thao tác (Operations) và cả các mối quan hệ (Relationships) mà lớp cha đang có.\nVị trí trong slide: Bài 4: Xác định các phần tử thiết kế (Slide 13: Ví dụ về Generalization trong Artifacts Package)."
      },
      {
            "id": 5,
            "title": "Câu 5: Để tổ chức các phần tử (elements) vào bên trong các nhóm (groups) ta sử dụng:",
            "options": [
                  "A. Package",
                  "B. Class",
                  "C. Class và interface",
                  "D. Component"
            ],
            "correct": [
                  0
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: A. (A. Package)\n\nGiải thích :\nGói (Package) là cơ chế tổng quát của UML dùng để tổ chức các phần tử mô hình (như lớp, use case...) thành các nhóm nhằm mục đích dễ quản lý và phân cấp.\nVị trí trong slide: Bài 4: Xác định các phần tử thiết kế (Mục Sự phụ thuộc package)."
      },
      {
            "id": 6,
            "title": "Câu 6: Stereotype package có thể biểu diễn cho:",
            "options": [
                  "A. Một giao diện",
                  "B. Một sơ đồ trạng thái",
                  "C. Một tầng kiến trúc",
                  "D. Một sơ đồ use-case"
            ],
            "correct": [
                  2
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: C. (C. Một tầng kiến trúc)\n\nGiải thích :\nTrong thiết kế kiến trúc phân tầng (Layering), người ta thường dùng các Package kèm theo Stereotype (ví dụ: <<layer>> hoặc chỉ định cụ thể) để đại diện cho một tầng như Application, Business, Middleware...\nVị trí trong slide: Bài 4: Xác định các phần tử thiết kế (Slide minh họa thiết kế phân tầng hệ thống)."
      },
      {
            "id": 7,
            "title": "Câu 7: Đường sinh tồn (lifeline) của 1 đối tượng được trình bày trong sơ đồ:",
            "options": [
                  "A. Sơ đồ đối tượng",
                  "B. Sơ đồ trạng thái",
                  "C. Sơ đồ tuần tự",
                  "D. Sơ đồ triển khai"
            ],
            "correct": [
                  2
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: C. (C. Sơ đồ tuần tự)\n\nGiải thích :\nĐường sinh tồn (Lifeline) là đường đứt nét thẳng đứng biểu diễn sự tồn tại của một đối tượng theo trục thời gian, là ký hiệu đặc trưng và cốt lõi trong sơ đồ tuần tự (Sequence Diagram).\nVị trí trong slide: Bài 3: Thiết kế kiến trúc (Mục Sơ đồ tương tác / Sơ đồ tuần tự)."
      },
      {
            "id": 8,
            "title": "Câu 8: Phát biểu nào sau đây không đúng?",
            "options": [
                  "A. Sự mô tả của các use-cases đủ để tìm và phân tích các lớp cùng các đối tượng của nó.",
                  "B. Có ít nhất một boundary object cho mỗi actor hay use-case pair",
                  "C. Có một lớp điều khiển (control class) ứng với mỗi use-case",
                  "D. Các đối tượng thực thể được nhận diện bởi việc xem xét các danh từ và cụm danh từ trong use- cases"
            ],
            "correct": [
                  0
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: A. (A. Sự mô tả của các use-cases đủ để tìm và phân tích các lớp cùng các đối tượng của nó.)\n\nGiải thích :\nCâu này sai (nên đáp án chọn nó là đúng với yêu cầu \"phát biểu không đúng\"). Chỉ đọc đặc tả Use Case thôi là chưa đủ, mà cần phải phân tích kết hợp với Bảng từ điển (Glossary), Đặc tả bổ sung (Supplementary Specifications) và kiến thức miền nghiệp vụ để xác định đầy đủ các lớp.\nVị trí trong slide: Bài 3: Thiết kế kiến trúc (Mục 2: Các lớp phân tích - slide tổng quan đầu vào)."
      },
      {
            "id": 9,
            "title": "Câu 9: Phát biểu nào sau đây đúng?",
            "options": [
                  "A. Không có sự hạn chế nào trên nhiều mối kết hợp (multiple associations) giữa cùng 2 lớp. hoặc Component",
                  "B. Có thể có nhiều mối kết hợp giữa cùng 2 lớp, nhưng chúng phải mang các ý nghĩa khác nhau.",
                  "C. Không cho phép biểu diễn nhiều mối kết hợp trên cùng 2 lớp.",
                  "D. Các mối kết hợp giữa cùng 2 lớp phải được tập hợp lại thành 1 mối kết hợp"
            ],
            "correct": [
                  1
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: B. (B. Có thể có nhiều mối kết hợp giữa cùng 2 lớp, nhưng chúng phải mang các ý nghĩa khác nhau.)\n\nGiải thích :\nGiữa 2 lớp hoàn toàn có thể có nhiều đường kết hợp (Multiple associations), với điều kiện mỗi đường phải biểu diễn một vai trò (role) hoặc ngữ nghĩa nghiệp vụ hoàn toàn khác nhau (ví dụ: Người vừa là Nhân viên vừa là Trưởng phòng của một Công ty).\nVị trí trong slide: Bài 6: Thiết kế lớp (Mục 3: Định nghĩa ra mối quan hệ giữa các lớp)."
      },
      {
            "id": 10,
            "title": "Câu 10: Phát biểu nào sau đây không đúng:",
            "options": [
                  "A. Chỉ những public classes mới có thể được truy xuất từ những phần bên ngoài của package.chứa nó.",
                  "B. Không tồn tại lớp của các hệ thống con (classes of a subsystem)",
                  "C. Các gói (Packages) ở tầng (layer) thấp hơn có thể phụ thuộc vào các gói ở tầng cao hơn.",
                  "D. Giai đoạn thiết kế là sự tinh chế của giai đoạn phân tích. Nó thêm vào những chi tiết cụ thể được nhận thức trong giai đoạn thiết kế."
            ],
            "correct": [
                  0
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: A. (A. Chỉ những public classes mới có thể được truy xuất từ những phần bên ngoài của package.chứa nó.)\n\nGiải thích :\nCâu này sai về nguyên tắc kiến trúc (nên chọn nó). Trong kiến trúc phân tầng chuẩn, các tầng cao hơn mới được quyền phụ thuộc và gọi xuống các tầng thấp hơn, các tầng thấp không được phép phụ thuộc ngược lên tầng cao để tránh lỗi vòng lặp phụ thuộc (vi phạm coupling).\nVị trí trong slide: Bài 4: Xác định các phần tử thiết kế (Slide 10: Minh họa vi phạm coupling giữa các tầng)."
      },
      {
            "id": 11,
            "title": "Câu 11: Nếu ta muốn tổ chức các phần tử vào trong các nhóm được sử dụng lại với sự che dấu thông tin đầy đủ, ta có thể sử dụng một trong các cấu trúc nào của UML?",
            "options": [
                  "A. Package",
                  "B. Class",
                  "C. Class và interface",
                  "D. Subsystem hoặc Component"
            ],
            "correct": [
                  3
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: D. (D. Subsystem hoặc Component)\n\nGiải thích :\nSubsystem (Hệ thống con) và Component (Thành phần) là các cấu trúc UML cao cấp hơn Package, chúng không chỉ gom nhóm mà còn cung cấp cơ chế đóng gói và che giấu thông tin đầy đủ thông qua việc quy định Giao diện (Interface) tường minh.\nVị trí trong slide: Bài 4: Xác định các phần tử thiết kế (Mục Ánh xạ từ lớp phân tích sang thành phần thiết kế)."
      },
      {
            "id": 12,
            "title": "Câu 12: Trong giai đoạn nào của quy trình phát triển phần mềm, ta xác định chi phí và thời gian của dự án, xác định các rủi ro và môi trường hệ thống:",
            "options": [
                  "A. Khởi tạo (Inception)",
                  "B. Tinh chế (Elaboration)",
                  "C. Xây dựng (construction)",
                  "D. Chuyển giao (transition)"
            ],
            "correct": [
                  0
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: A. (A. Khởi tạo (Inception))\n\nGiải thích :\nTheo quy trình RUP (chuẩn ITSS), giai đoạn Khởi tạo tập trung vào xác định phạm vi hệ thống, môi trường, ước lượng sơ bộ chi phí/thời gian và nhận diện các rủi ro lớn của dự án.\nVị trí trong slide: Bài 1: Quy trình phát triển phần mềm (Mục 4: Giai đoạn vòng đời phát triển phần mềm)."
      },
      {
            "id": 13,
            "title": "Câu 13: Trong giai đoạn nào của quy trình phát triển phần mềm, ta đánh giá độ rủi ro, các thành phần sử dụng:",
            "options": [
                  "A. Khởi tạo (Inception)",
                  "B. Tinh chế (Elaboration)",
                  "C. Xây dựng (construction)",
                  "D. Chuyển giao (transition)"
            ],
            "correct": [
                  1
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: B. (B. Tinh chế (Elaboration))\n\nGiải thích :\nGiai đoạn Tinh chế tập trung vào việc làm mịn yêu cầu, đánh giá sâu và giảm thiểu các rủi ro kỹ thuật trọng yếu, đồng thời thiết lập nên một Kiến trúc nền tảng ổn định (Architecture Baseline) và xác định các thành phần công nghệ sẽ sử dụng.\nVị trí trong slide: Bài 1: Quy trình phát triển phần mềm."
      },
      {
            "id": 14,
            "title": "Câu 14: Trong giai đoạn nào của quy trình phát triển phần mềm, ta xây dựng hệ thống qua quá trình gồm nhiều vòng lặp theo quy trình xoắn ốc, mỗi vòng lặp là một dự án nhỏ...",
            "options": [
                  "A. Khởi tạo (Inception)",
                  "B. Tinh chế (Elaboration)",
                  "C. Xây dựng (construction)",
                  "D. Chuyển giao (transition)"
            ],
            "correct": [
                  2
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: C. (C. Xây dựng (construction))\n\nGiải thích :\nGiai đoạn Xây dựng là nơi phần lớn mã nguồn được viết, hệ thống được hiện thực hóa thông qua nhiều vòng lặp (iterations) để hoàn thiện toàn bộ các chức năng.\nVị trí trong slide: Bài 1: Quy trình phát triển phần mềm."
      },
      {
            "id": 15,
            "title": "Câu 15: Trong giai đoạn nào của quy trình phát triển phần mềm, ta thực hiện cài đặt hệ thống, thử nghiệm sản phẩm đã triển khai, thu thập các phản hồi từ phía người dùng, bảo trì hệ thống:",
            "options": [
                  "A. Khởi tạo (Inception)",
                  "B. Tinh chế (Elaboration)",
                  "C. Xây dựng (construction)",
                  "D. Chuyển giao (transition)"
            ],
            "correct": [
                  3
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: D. (D. Chuyển giao (transition))\n\nGiải thích :\nGiai đoạn Chuyển giao đưa sản phẩm đến tay người dùng cuối, bao gồm cài đặt, kiểm thử chấp nhận (beta test), tiếp nhận phản hồi, đào tạo người dùng và sửa lỗi/bảo trì ban đầu.\nVị trí trong slide: Bài 1: Quy trình phát triển phần mềm."
      },
      {
            "id": 16,
            "title": "Câu 16: Một ............. là dãy các bước mô tả sự tương tác giữa người dùng và hệ thống:",
            "options": [
                  "A. Kịch bản",
                  "B. Use case",
                  "C. Mục tiêu",
                  "D. Sự kiện"
            ],
            "correct": [
                  0
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: A. (A. Kịch bản)\n\nGiải thích :\nKịch bản (Scenario) là một thể hiện cụ thể (an instance of a use case), mô tả một dãy các bước tuần tự cụ thể trong một luồng sự kiện tương tác giữa tác nhân và hệ thống.\nVị trí trong slide: Bài 2: Mô hình hóa yêu cầu với Use Case (Mục 3: Đặc tả / kịch bản ca sử dụng)."
      },
      {
            "id": 17,
            "title": "Câu 17: Sơ đồ nào mô tả các kiểu của các đối tượng và các mối quan hệ tĩnh khác nhau giữa chúng?",
            "options": [
                  "A. Sơ đồ lớp",
                  "B. Sơ đồ tương tác",
                  "C. Sơ đồ trạng thái",
                  "D. Sơ đồ hoạt động"
            ],
            "correct": [
                  0
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: A. (A. Sơ đồ lớp)\n\nGiải thích :\nSơ đồ lớp (Class Diagram) là sơ đồ cấu trúc tĩnh chính, dùng để mô tả các kiểu đối tượng (lớp) trong hệ thống cùng các mối quan hệ tĩnh (như kết hợp, kế thừa, kết tập) giữa chúng.\nVị trí trong slide: Bài 3: Thiết kế kiến trúc và Bài 6: Thiết kế lớp."
      },
      {
            "id": 18,
            "title": "Câu 18: Phát biểu nào sau đây không đúng về mối kết hợp trong sơ đồ lớp:",
            "options": [
                  "A. Mối kết hợp biểu diễn các quan hệ giữa các thể hiện của các lớp",
                  "B. Mối kết hợp là các quy trình mà một lớp sẽ thực hiện",
                  "C. Mối kết hợp có thể vô hướng",
                  "D. Mối kết hợp có thể có cả hai hướng"
            ],
            "correct": [
                  1
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: B. (B. Mối kết hợp là các quy trình mà một lớp sẽ thực hiện)\n\nGiải thích :\nCâu này sai (nên chọn). Mối kết hợp (Association) chỉ cấu trúc liên kết dữ liệu giữa các lớp, không phải là quy trình xử lý hay hành động/phương thức thực hiện của lớp.\nVị trí trong slide: Bài 6: Thiết kế lớp (Mục Định nghĩa mối quan hệ)."
      },
      {
            "id": 19,
            "title": "Câu 19: Trong sơ đồ tuần tự ---------> biểu diễn:",
            "options": [
                  "A. Thông điệp (message)",
                  "B. Điều kiện (condition)",
                  "C. Lặp (iteration)",
                  "D. Xóa đối tượng (deletion)"
            ],
            "correct": [
                  0
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: A. (A. Thông điệp (message))\n\nGiải thích :\nMũi tên nằm ngang (--------->) trong sơ đồ tuần tự được dùng để biểu diễn việc truyền một thông điệp (gọi hàm/phương thức) từ đối tượng này sang đối tượng khác.\nVị trí trong slide: Bài 3: Thiết kế kiến trúc (Mục Sơ đồ tương tác / Thông điệp)."
      },
      {
            "id": 20,
            "title": "Câu 20: Trong sơ đồ tuần tự [some_text] biểu diễn:",
            "options": [
                  "A. Thông điệp (message)",
                  "B. Điều kiện (condition)",
                  "C. Lặp (iteration)",
                  "D. Xóa đối tượng (deletion)"
            ],
            "correct": [
                  1
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: B. (B. Điều kiện (condition))\n\nGiải thích :\nTrong sơ đồ tuần tự, văn bản đặt trong cặp dấu ngoặc vuông [some_text] được gọi là Điều kiện bảo vệ (Guard Condition) – thông điệp chỉ được gửi đi nếu điều kiện này đúng.\nVị trí trong slide: Bài 3: Thiết kế kiến trúc (Mục Sơ đồ tuần tự / Cấu trúc rẽ nhánh)."
      },
      {
            "id": 21,
            "title": "Câu 21: Trong sơ đồ tổ chức dấu * biểu diễn: ... vào một thành phần thuộc về duy nhất một tổng thể. Các thành phần này luôn luôn tồn tại và mất đi cùng với tổng thể?",
            "options": [
                  "A. aggregation",
                  "B. Composition",
                  "C. Classification",
                  "D. Generalization"
            ],
            "correct": [
                  1
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: B. (B. Composition)\n\nGiải thích :\nQuan hệ cấu thành/hợp thành (Composition) là một dạng kết tập mạnh, quy định các thành phần con chỉ thuộc về duy nhất một tổng thể, và vòng đời của chúng gắn liền với tổng thể (tổng thể mất đi thì thành phần con bị hủy theo).\nVị trí trong slide: Bài 6: Thiết kế lớp (Mục Quan hệ Aggregation và Composition)."
      },
      {
            "id": 22,
            "title": "Câu 22: Phát biểu nào sau đây đúng về mối kết hợp định tính (Qualified Associations) trên sơ đồ lớp?",
            "options": [
                  "A. Mối kết hợp định tính cung cấp chức năng tương tự như chỉ mục.",
                  "B. Đặc tính thông tin định danh (qualifier) là một thuộc tính của một lớp. Biểu tượng của nó là hình chữ nhật nhỏ kế bên class mà thực hiện việc tìm kiếm",
                  "C. Mối kết hợp định tính đơn giản hóa sự định hướng qua mối kết hợp phức tạp bằng cách cung cấp các khóa để thu hẹp việc lựa chọn các đối tượng kết hợp.",
                  "D. Các câu trên đều đúng"
            ],
            "correct": [
                  3
            ],
            "isMultiple": false,
            "explanation": "Đáp án đúng là: D. (D. Các câu trên đều đúng)\n\nGiải thích :\nMối kết hợp định tính (Qualified Association) sử dụng một thuộc tính khóa gọi là qualifier (đặt trong hình chữ nhật nhỏ) gắn vào đầu mối liên kết. Nó hoạt động giống như một chỉ mục/khóa (a), giúp thu hẹp phạm vi tìm kiếm từ quan hệ 1-nhiều xuống 1-1 (c) và qualifier này thực chất đại diện cho thông tin định danh (b).\nVị trí trong slide: Bài 6: Thiết kế lớp (Mục Các mối quan hệ nâng cao / Qualified Association)."
      }
]
  });
}
