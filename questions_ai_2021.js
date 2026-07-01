// Auto-generated quiz dataset from AI_2021.docx
if (typeof allQuizSets !== 'undefined' && Array.isArray(allQuizSets)) {
  allQuizSets.push({
  "id": "quiz_2",
  "title": "Đề thi trắc nghiệm AI 2021",
  "description": "Đề thi trắc nghiệm môn Trí tuệ Nhân tạo năm học 2020-2021 (kèm giải thích chi tiết).",
  "filename": "AI_2021.docx",
  "questionsCount": 30,
  "questions": [
    {
      "id": 1,
      "title": "Question 1: Phát biểu nào sau đây là đúng về thuật toán K-NN?",
      "options": [
        "A. Số lượng mẫu (tham số K) được sử dụng càng lớn thì độ chính xác càng cao",
        "B. Chi phí lớn nhất của thuật toán nằm ở pha học mô hình",
        "C. Càng nhiều thuộc tính được sử dụng để biểu diễn mỗi điểm dữ liệu thì càng khó thu được độ chính xác cao",
        "D. k-NN chỉ sử dụng cho phân loại"
      ],
      "correct": [
        2
      ],
      "isMultiple": false,
      "explanation": "Đáp án đúng là: C. Càng nhiều thuộc tính thừa (nhiễu) càng dễ làm méo mó hàm khoảng cách vật lý của $k$-NN."
    },
    {
      "id": 2,
      "title": "Question 2: Với phần lớn các bài toán thực tế, tìm kiếm sâu có độ phức tạp về mặt thời gian nhỏ hơn so với tìm kiếm rộng:",
      "options": [
        "A. False: tìm kiếm rộng có thời gian thực hiện bằng tìm kiếm sâu",
        "B. False: tìm kiếm rộng có thời gian thực hiện nhỏ hơn so với tìm kiếm sâu",
        "C. True"
      ],
      "correct": [
        1
      ],
      "isMultiple": false,
      "explanation": "Đáp án đúng là: B. False: BFS mở rộng theo tầng nên tiếp cận nghiệm ở độ sâu cố định nhanh hơn lũy thừa thời gian của DFS khi đi sai nhánh."
    },
    {
      "id": 3,
      "title": "Question 3: Xét bài toán tô màu các bang của Australia sao cho mỗi bang được tô bởi một trong ba màu (đỏ, lục, lam), với điều kiện ràng buộc là hai bang liền kề nhau phải có màu khác nhau.",
      "options": [
        "A. cạnh (SA → NSW) là phù hợp.",
        "B. cạnh (NT → WA) là phù hợp.",
        "C. cạnh (NSW → SA) là phù hợp.",
        "D. cạnh (NT → T) là phù hợp."
      ],
      "correct": [
        0,
        3
      ],
      "isMultiple": true,
      "explanation": "Đáp án đúng là: A, D. (Chọn nhiều) Cạnh (SA $\\rightarrow$ NSW) sai vì miền giá trị đã bị lệch. Cạnh (NT $\\rightarrow$ T) sai vì Tasmania là đảo, không có biên giới (cạnh) chung với NT."
    },
    {
      "id": 4,
      "title": "Question 4: Thời kỳ khó khăn (1966-1973: the first AI winter) sau giai đoạn đầu của ngành TTNT gặp phải các vấn đề nào sau đây?",
      "options": [
        "A. Chưa có các hệ thống mạnh để thực hiện các nhiệm vụ có độ phức tạp tính toán lớn",
        "B. Lý thuyết toán học, logic học chưa phát triển",
        "C. Thiếu các nghiên cứu về các mạng nơ-ron nhân tạo",
        "D. Thiếu các hệ thống lưu trữ dữ liệu lớn"
      ],
      "correct": [
        0,
        2,
        3
      ],
      "isMultiple": true,
      "explanation": "Đáp án đúng là: A, C, D. (Chọn nhiều) AI Winter lần 1 xảy ra do máy tính quá yếu (a), các nghiên cứu Perceptron mạng nơ-ron bị đóng băng (c) và thiếu hạ tầng lưu trữ (d)."
    },
    {
      "id": 5,
      "title": "Question 5: Tác tử được xây dựng bởi:",
      "options": [
        "A. Kiến trúc và chương trình",
        "B. Chuỗi nhận thức môi trường",
        "C. Hàm tác tử",
        "D. Kiến trúc"
      ],
      "correct": [
        0
      ],
      "isMultiple": false,
      "explanation": "Đáp án đúng là: A. Hệ thức kinh điển: $\\text{Tác tử} = \\text{Kiến trúc} + \\text{Chương trình}$."
    },
    {
      "id": 6,
      "title": "Question 6: Giả sử v(n) thể hiện giá trị ước lượng của nút n.",
      "options": [
        "A. v(n)<Alpha",
        "B. Alpha≥v(n)≥Beta",
        "C. v(n)>Beta",
        "D. Alpha≤v(n)≤Beta"
      ],
      "correct": [
        3
      ],
      "isMultiple": false,
      "explanation": "Đáp án đúng là: D. Trạng thái an toàn, nằm trong dải lọc không bị cắt tỉa: $\\alpha \\le v(n) \\le \\beta$."
    },
    {
      "id": 7,
      "title": "Question 7: Phát biểu nào sau đây là không chính xác về Naive Bayes?",
      "options": [
        "A. Thuộc tính có miền giá trị rời rạc",
        "B. Các thuộc tính phụ thuộc khi biết thông tin lớp của dữ liệu",
        "C. Các thuộc tính có vai trò ngang nhau"
      ],
      "correct": [
        0,
        1
      ],
      "isMultiple": true,
      "explanation": "Đáp án đúng là: A, B. (Chọn nhiều) Naïve Bayes xử lý được cả biến liên tục (dùng Gauss). Phát biểu (b) sai vì định lý yêu cầu các thuộc tính phải độc lập có điều kiện khi biết lớp."
    },
    {
      "id": 8,
      "title": "Question 8: Phương pháp tìm kiếm quay lui trong tìm kiếm thỏa mãn ràng buộc được trình bày dưới đây.",
      "options": [
        "A. Backtracking-Search() là tìm kiếm theo chiều rộng",
        "B. Hàm Select-Unassigned-Variable() quy định thứ tự xem xét các chữ cái (đối với các ô chữ)",
        "C. Hàm Select-Unassigned-Variable() quy định thứ tự xem xét các ô chữ",
        "D. Hàm Order-Domain-Values() quy định thứ tự xem xét các ô chữ"
      ],
      "correct": [
        2
      ],
      "isMultiple": false,
      "explanation": "Đáp án đúng là: C. Biến chưa được gán giá trị (Unassigned-Variable) trong bài toán ô chữ chính là bản thân các ô chữ trống."
    },
    {
      "id": 9,
      "title": "Question 9: Sáu bang nước Úc được biểu diễn trên đồ thị, với hai bang có chung biên giới là hai đỉnh được nối với nhau như hình vẽ.",
      "options": [
        "B. ài toán đặt ra là tô màu bản đồ các bang, mỗi bang được tô một trong ba màu (đỏ, xanh lá cây, xanh da trời), với ràng buộc hai bang có chung đường biên giới thì được tô bằng hai màu khác nhau.",
        "A. 30",
        "B. 6",
        "C. 4",
        "D. 15"
      ],
      "correct": [
        1
      ],
      "isMultiple": false,
      "explanation": "Đáp án đúng là: B. Với bài toán tô màu bản đồ Úc, đồ thị 3-màu quanh chu trình lục giác nội địa luôn có đúng 6 phương án thỏa mãn."
    },
    {
      "id": 10,
      "title": "Question 10: Amy, Betty, Cindy, và Diane đã có bữa trưa ở nhà hàng hải sản.",
      "options": [
        "A. \"Amy và Betty có món cá khác màu\": A↔(¬B)",
        "B. \"Amy và Betty có món cá khác màu\": (¬A)↔B",
        "C. \"Amy, Cindy, và Diane chỉ có 2 người có món cá màu đỏ\": ((A∧C∧(¬D))∨(A∧(¬C)∧D)∨((¬A)∧C∧D))",
        "D. \"Amy, Cindy, và Diane chỉ có 2 người có món cá màu đỏ\": ((A∨C∨(¬D))∧(A∨(¬C)∨D)∧((¬A)∨C∨D))"
      ],
      "correct": [
        2
      ],
      "isMultiple": false,
      "explanation": "Đáp án đúng là: C. Tổ hợp rời rạc biểu diễn logic chọn đúng 2 trong 3 đối tượng mang mệnh đề khẳng định."
    },
    {
      "id": 11,
      "title": "Question 11: Xét vị từ ∃x:Car(x)∧Flat(RightTyre(x)).",
      "options": [
        "A. Car(x) là phần tử (term)",
        "B. Car là ký hiệu hàm bậc 1",
        "C. x là biến",
        "D. Car là ký hiệu quan hệ bậc 1",
        "E. Car(x) là vị từ (predicate)"
      ],
      "correct": [
        2,
        3,
        4
      ],
      "isMultiple": true,
      "explanation": "Đáp án đúng là: C, D, E. (Chọn nhiều) $x$ là biến (c); Car đại diện cho quan hệ/vị từ (d); biểu thức Car(x) là cấu trúc vị từ hoàn chỉnh (e)."
    },
    {
      "id": 12,
      "title": "Question 12: Hãy chọn các phát biểu phù hợp đối với Cây quyết định",
      "options": [
        "A. Dữ liệu huấn luyện có thể chứa nhiễu",
        "B. Information gain được dùng để chọn thuộc tính tốt nhất để chia dữ liệu tại mỗi đỉnh",
        "C. Dữ liệu huấn luyện không thể thiếu các giá trị cho các thuộc tính"
      ],
      "correct": [
        0,
        1
      ],
      "isMultiple": true,
      "explanation": "Đáp án đúng là: A, B. (Chọn nhiều) Cây quyết định chống nhiễu tốt (a) và dùng độ thu hoạch thông tin (Information Gain) làm tiêu chí chia nút (b)."
    },
    {
      "id": 13,
      "title": "Question 13: Trong logic định đề, mệnh đề (P∧Q)∧¬R→¬Q là:",
      "options": [
        "A. thỏa mãn được (satisfiable)",
        "B. không thỏa mãn được (unsatisfiable)",
        "C. đúng đắn (valid)"
      ],
      "correct": [
        0
      ],
      "isMultiple": false,
      "explanation": "Đáp án đúng là: A. Satisfiable: Tồn tại ít nhất một bộ giá trị (ví dụ gán tiền đề sai) khiến toàn bộ phép kéo theo đúng."
    },
    {
      "id": 14,
      "title": "Question 14: Một trong các mục tiêu của Trí tuệ nhân tạo là:",
      "options": [
        "A. Để giải quyết các bài toán thực tế mà các phương pháp truyền thống không làm được hoặc có độ phức tạp quá cao",
        "B. Để giải thích các loại trí thông minh khác nhau",
        "C. Để tìm ra các lý do khoa học",
        "D. Để giải quyết những vấn đề nhân tạo"
      ],
      "correct": [
        0,
        1
      ],
      "isMultiple": true,
      "explanation": "Đáp án đúng là: A, B. (Chọn nhiều) Mục tiêu hành động thông minh để giải quyết bài toán phức tạp (a) và nghiên cứu bản chất các loại trí tuệ (b)."
    },
    {
      "id": 15,
      "title": "Question 15: Khoảng cách Euclid giữa 2 điểm A(-1,4) và B(3,4)?",
      "options": [
        "A. 8",
        "B. 4",
        "C. 2",
        "D. 3",
        "E. 1"
      ],
      "correct": [
        1
      ],
      "isMultiple": false,
      "explanation": "Đáp án đúng là: B. Khoảng cách: $\\sqrt{(3 - (-1))^2 + (4 - 4)^2} = \\sqrt{16} = 4$."
    },
    {
      "id": 16,
      "title": "Question 16: Ưu điểm chính của Logic vị từ bậc 1 so với logic mệnh đề trong việc biểu diễn tri thức và lập luận là gì?",
      "options": [
        "A. Logic vị từ bậc 1 cung cấp thông tin thứ tự về một vài loại tri thức",
        "B. Logic vị từ bậc 1 có thể biểu diễn tập tri thức rộng hơn so với logic mệnh đề",
        "C. Logic vị từ bậc 1 cung cấp thông tin bậc nhất về tri thức của chúng ta"
      ],
      "correct": [
        1
      ],
      "isMultiple": false,
      "explanation": "Đáp án đúng là: B. Nhờ cơ chế lượng từ ($\\forall, \\exists$) và biến số, FOL biểu diễn được tập tri thức vô hạn so với logic mệnh đề tĩnh."
    },
    {
      "id": 17,
      "title": "Question 17: Cấu trúc dữ liệu nào được sử dụng thuận tiện để triển khai DLS?",
      "options": [
        "A. Hàng đợi ưu tiên (hàng đợi được sắp xếp theo một giá trị ưu tiên của các phần tử)",
        "B. Ngăn xếp",
        "C. Hàng đợi",
        "D. Không có câu trả lời nào (ở trên/dưới) phù hợp"
      ],
      "correct": [
        1
      ],
      "isMultiple": false,
      "explanation": "Đáp án đúng là: B. Tìm kiếm giới hạn độ sâu (DLS) kế thừa hoàn toàn cơ chế hoạt động của DFS, sử dụng bộ nhớ Ngăn xếp (Stack)."
    },
    {
      "id": 18,
      "title": "Question 18: Trong các biểu thức sau đây, hãy cho biết các biểu thức nào luôn đúng?",
      "options": [
        "A. (A→B)↔(B→A)",
        "B. (A→B)↔(¬B→¬A)",
        "C. (A∨¬A)∧B",
        "D. (A∨B)→(B∨A)"
      ],
      "correct": [
        1,
        3
      ],
      "isMultiple": true,
      "explanation": "Đáp án đúng là: B, D. (Chọn nhiều) (b) là luật phản chứng (Contraposition) và (d) là tính chất giao hoán của phép Tuyển."
    },
    {
      "id": 19,
      "title": "Question 19: Hành động của tác tử phản xạ đơn giản phụ thuộc hoàn toàn vào?",
      "options": [
        "A. Hàm lợi ích",
        "B. Lịch sử nhận thức môi trường",
        "C. Nhận thức môi trường tại thời điểm hiện tại",
        "D. Lý thuyết học"
      ],
      "correct": [
        2
      ],
      "isMultiple": false,
      "explanation": "Đáp án đúng là: C. Tác tử phản xạ đơn giản (Simple reflex) hoạt động theo cơ chế phản xạ tức thì, hoàn toàn phớt lờ quá khứ."
    },
    {
      "id": 20,
      "title": "Question 20: Khi nào thuật toán leo đồi kết thúc?",
      "options": [
        "A. Đáp ứng tiêu chí dừng",
        "B. Không có hàng xóm nào có hàm mục tiêu tốt hơn hoặc bằng trạng thái hiện tại",
        "C. Đạt được cực đại, cực tiểu toàn cục",
        "D. Tất cả các câu trả lời ở trên (hay dưới) đây"
      ],
      "correct": [
        1
      ],
      "isMultiple": false,
      "explanation": "Đáp án đúng là: B. Leo đồi dừng ngay lập tức khi mọi trạng thái lân cận xung quanh đều bằng hoặc tệ hơn trạng thái hiện tại."
    },
    {
      "id": 21,
      "title": "Question 21: Xét cây tìm kiếm như trong hình vẽ.",
      "options": [
        "A. là trạng thái (nút) đầu và các trạng thái (các nút) bị đổ nền mờ (shaded) là các trạng thái đích.",
        "C. ác mũi tên thể hiện các dịch chuyển có thể giữa các trạng thái, và giá trị số thể hiện trên một mũi tên biểu diễn chi phí dịch chuyển.",
        "A. Giải thuật tìm kiếm A* trả về đường đi: A, C, G",
        "B. Giải thuật tìm kiếm A* trả về đường đi tìm được: A, B, F",
        "C. Giải thuật tìm kiếm tham lam (Greedy Best-First Search) trả về đường đi: A, D",
        "D. Giải thuật tìm kiếm tham lam (Greedy Best-First Search) trả về đường đi: A, B, F",
        "E. Giải thuật tìm kiếm theo chiều sâu (Depth-First Search) trả về đường đi: A, B, F"
      ],
      "correct": [
        5
      ],
      "isMultiple": false,
      "explanation": "Đáp án đúng là: F. Thuật toán UCS mở rộng theo chi phí thực tế $g(n)$ tăng dần nên luôn trả về đường đi tối ưu $A \\rightarrow C \\rightarrow G$."
    },
    {
      "id": 22,
      "title": "Question 22: Các thành phần chính để đánh giá chiến lược tìm kiếm là gì?",
      "options": [
        "A. Độ phức tạp về thời gian và bộ nhớ",
        "B. Tính hoàn chỉnh",
        "C. Tính tối ưu",
        "D. Tất cả các thành phần đề cập"
      ],
      "correct": [
        3
      ],
      "isMultiple": false,
      "explanation": "Đáp án đúng là: D. Bao gồm đầy đủ 4 tiêu chí: Thời gian, Bộ nhớ, Tính hoàn chỉnh, Tính tối ưu."
    },
    {
      "id": 23,
      "title": "Question 23: Hạn chế của phương pháp biểu diễn tri thức dựa trên luật là gì?",
      "options": [
        "A. Chi phí đắt khi chúng ta cần có nhiều luật theo cách thủ công",
        "B. Cần một thay đổi đáng kể đối với cơ sở luật khi thêm các luật mới",
        "C. Khó đảm bảo tính nhất quán của cơ sở luật khi thêm các luật mới",
        "D. Không thể giải thích các luật"
      ],
      "correct": [
        0,
        2
      ],
      "isMultiple": true,
      "explanation": "Đáp án đúng là: A, C. (Chọn nhiều) Rất tốn chi phí thu thập luật thủ công từ chuyên gia (a) và dễ gây mâu thuẫn hệ thống khi chèn luật mới (c)."
    },
    {
      "id": 24,
      "title": "Question 24: Nội dung nào dưới đây cung cấp phản hồi tới mô hình học của tác tử có khả năng học?",
      "options": [
        "A. Không phải các thành phần trong các câu trả lời trên",
        "B. Các bộ phận hoạt động",
        "C. Cảm biến",
        "D. Đánh giá (bình luận)"
      ],
      "correct": [
        3
      ],
      "isMultiple": false,
      "explanation": "Đáp án đúng là: D. Thành phần Đánh giá (Critic) đóng vai trò làm trọng tài chấm điểm hiệu năng để đẩy tín hiệu phản hồi ngược lại khối học."
    },
    {
      "id": 25,
      "title": "Question 25: Tìm kiếm theo chiều rộng là (có thể chọn nhiều đáp án):",
      "options": [
        "A. Hoàn chỉnh",
        "B. Tối ưu (nếu chi phí mỗi bước bằng nhau)",
        "C. Độ phức tạp về bộ nhớ nhỏ hơn tìm kiếm theo chiều sâu",
        "D. Độ phức tạp về thời gian lớn hơn tìm kiếm theo chiều sâu"
      ],
      "correct": [
        0,
        1
      ],
      "isMultiple": true,
      "explanation": "Đáp án đúng là: A, B. (Chọn nhiều) BFS luôn đảm bảo tính hoàn chỉnh (a) và đạt tính tối ưu nếu chi phí các bước đồng nhất (b)."
    },
    {
      "id": 26,
      "title": "Question 26: Trong giải thuật Alpha-Beta Pruning, các giá trị Alpha và Beta được cập nhật lúc nào (ở đâu)?",
      "options": [
        "A. Tại nút có giá trị ước lượng lớn hơn Beta và nhỏ hơn Alpha",
        "B. Dọc theo đường đi tìm kiếm (trong cây tìm kiếm)",
        "C. Tại nút đầu",
        "D. Tại bước tìm kiếm cuối cùng (kết thúc của quá trình tìm kiếm)"
      ],
      "correct": [
        1
      ],
      "isMultiple": false,
      "explanation": "Đáp án đúng là: B. Alpha (ngưỡng dưới của MAX) và Beta (ngưỡng trên của MIN) được cập nhật liên tục khi duyệt dọc các nhánh cây."
    },
    {
      "id": 27,
      "title": "Question 27: Chuyển đổi phát biểu sau sang logic vị từ: \"Everyone loves someone\", trong đó love(x,y) mô tả x yêu y.",
      "options": [
        "A. ∃x∀y:love(x,y)",
        "B. ∀x∃y:love(x,y)"
      ],
      "correct": [
        1
      ],
      "isMultiple": false,
      "explanation": "Đáp án đúng là: B. Biểu diễn chuẩn: \"Với mọi người $x$, luôn tồn tại một đối tượng $y$ để $x$ yêu $y$\"."
    },
    {
      "id": 28,
      "title": "Question 28: Tại sao tìm kiếm có thông tin hiệu quả hơn tìm kiếm cơ bản?",
      "options": [
        "A. Tìm kiếm có thông tin sử dụng thông tin có trong định nghĩa bài toán",
        "B. Tìm kiếm có thông tin khai thác tri thức cụ thể của bài toán",
        "C. Tìm kiếm có thông tin tránh xem xét tất cả các trạng thái của không gian trạng thái",
        "D. Tìm kiếm có thông tin đảm bảo tìm ra giải pháp tối ưu toàn cục"
      ],
      "correct": [
        1,
        2
      ],
      "isMultiple": true,
      "explanation": "Đáp án đúng là: B, C. (Chọn nhiều) Khai thác tri thức bổ trợ (Heuristic) cụ thể của bài toán (b) để chủ động cắt tỉa, tránh duyệt toàn bộ không gian (c)."
    },
    {
      "id": 29,
      "title": "Question 29: Phép biến đổi nào sau đây đúng?",
      "options": [
        "A. (A↔B)⊨(A∨B)",
        "B. (A↔B)⊨(A∧B)",
        "C. (A∧B)⊨(A↔B)",
        "D. (A↔B)⊨(¬A∨B)"
      ],
      "correct": [
        2,
        3
      ],
      "isMultiple": true,
      "explanation": "Đáp án đúng là: C, D. Dựa trên bảng chân trị: Phép hội (∧) kéo theo tương đương (↔) đúng; Tương đương (↔) kéo theo $(\\neg A \\lor B)$ đúng."
    },
    {
      "id": 30,
      "title": "Question 30: Trong các hệ thống lập luận dựa trên luật, quy tắc giải quyết xung đột là gì?",
      "options": [
        "A. Để sửa đổi hoặc loại bỏ các luật có thể dẫn đến kết luận mâu thuẫn từ cơ sở tri thức",
        "B. Một cải tiến hiệu quả hơn đối với phương pháp chứng minh dựa trên phương pháp hợp giải",
        "C. Khi không có các luật nào có thể áp dụng ở bước suy luận, các ràng buộc đối với các biến xung đột cần được loại bỏ.",
        "D. Khi có một luật có thể được áp dụng ở bước suy diễn, cần phải chọn một trong những luật đó để áp dụng."
      ],
      "correct": [
        3
      ],
      "isMultiple": false,
      "explanation": "Đáp án đúng là: D. Định nghĩa cơ bản của Conflict Resolution: Quyết định lựa chọn duy nhất một luật tối ưu để kích hoạt khi có nhiều luật cùng thỏa mãn."
    }
  ]
});
}
