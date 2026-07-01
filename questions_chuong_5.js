// Auto-generated quiz dataset from Chương 5.docx
if (typeof allQuizSets !== 'undefined' && Array.isArray(allQuizSets)) {
  allQuizSets.push({
  "id": "quiz_2",
  "title": "Trắc nghiệm Chương 5",
  "description": "Bộ câu hỏi trắc nghiệm ôn tập Chương 5 (Phần Học máy, k-NN, Naïve Bayes) môn Trí tuệ Nhân tạo.",
  "filename": "Chương 5.docx",
  "questionsCount": 30,
  "questions": [
    {
      "id": 1,
      "title": "Câu 1:Những nhận định nào sau đây là đúng về ứng dụng của Naïve Bayes trong thực tế? (chọn hai đáp án đúng)(Nhiều đáp án)(1 điểm)",
      "options": [
        "A. Rất hiệu quả cho bài toán phân loại văn bản (như lọc thư rác, phân loại tin tức).",
        "B. Luôn yêu cầu bộ nhớ cực lớn để lưu trữ toàn bộ các ví dụ học giống như k-NN.",
        "C. Có khả năng làm việc tốt với dữ liệu có nhiều chiều (nhiều thuộc tính).",
        "D. Không thể xử lý được các bài toán có nhiều hơn 2 nhãn lớp.",
        "E. Chỉ hoạt động ổn định khi các thuộc tính trong thực tế hoàn toàn độc lập với nhau."
      ],
      "correct": [
        0,
        2
      ],
      "isMultiple": true,
      "explanation": "Đáp án đúng là: A, C."
    },
    {
      "id": 2,
      "title": "Câu 2:Để dự đoán một sinh viên có mua máy tính hay không bằng Naïve Bayes, hệ thống sẽ chọn nhãn lớp c* thỏa mãn điều kiện nào?(Một đáp án)(1 điểm)",
      "options": [
        "A. Nhãn lớp có giá trị xác suất tiên nghiệm P(ci) lớn nhất.",
        "B. Nhãn lớp có tổng các xác suất có điều kiện P(xj|ci) nhỏ nhất.",
        "C. Nhãn lớp cực đại hóa tích của xác suất tiên nghiệm và các xác suất có điều kiện của thuộc tính.",
        "D. Nhãn lớp có khoảng cách Euclid đến ví dụ mới là ngắn nhất.",
        "E. Nhãn lớp xuất hiện đầu tiên trong danh sách các nhãn lớp của tập học."
      ],
      "correct": [
        2
      ],
      "isMultiple": true,
      "explanation": "Đáp án đúng là: C."
    },
    {
      "id": 3,
      "title": "Câu 3:Điểm khác biệt giữa phương pháp MAP (Maximum a posteriori) và MLE (Maximum likelihood estimation) là gì? (chọn hai đáp án đúng)(Nhiều đáp án)(1 điểm)",
      "options": [
        "A. MLE tìm giả thiết cực đại hóa P(D|h), trong khi MAP cực đại hóa P(D|h)P(h).",
        "B. MLE giả định rằng tất cả các giả thiết đều có xác suất tiên nghiệm P(h) như nhau.",
        "C. MAP luôn cho kết quả kém chính xác hơn MLE khi tập dữ liệu huấn luyện rất lớn.",
        "D. MLE yêu cầu phải biết trước xác suất của dữ liệu P(D), còn MAP thì không.",
        "E. Cả hai đều là các phương pháp học không giám sát dùng để phân cụm."
      ],
      "correct": [
        0,
        1
      ],
      "isMultiple": true,
      "explanation": "Đáp án đúng là: A, B."
    },
    {
      "id": 4,
      "title": "Câu 4:Trong bài toán phân loại văn bản bằng Naïve Bayes, giả thuyết quan trọng về vị trí của từ khóa là gì?(Một đáp án)(1 điểm)",
      "options": [
        "A. Những từ xuất hiện ở tiêu đề văn bản có trọng số gấp đôi các từ ở thân bài.",
        "B. Xác suất một từ xuất hiện trong văn bản phụ thuộc chặt chẽ vào từ đứng trước nó.",
        "C. Chỉ những danh từ mới được coi là có giá trị xác suất khác 0.",
        "D. Từ khóa càng đứng gần cuối văn bản thì càng mang ít thông tin về nhãn lớp.",
        "E. Xác suất từ khóa tj xuất hiện đối với lớp ci là độc lập đối với vị trí của nó trong văn bản."
      ],
      "correct": [
        4
      ],
      "isMultiple": false,
      "explanation": "Đáp án đúng là: E."
    },
    {
      "id": 5,
      "title": "Câu 5:Tại sao trong giai đoạn phân lớp Naïve Bayes, người ta thường sử dụng hàm lôgarit (log) cho các giá trị xác suất? (chọn hai đáp án đúng)(Nhiều đáp án)(1 điểm)",
      "options": [
        "A. Để tăng tốc độ tính toán vì máy tính xử lý phép nhân nhanh hơn phép cộng.",
        "B. Để chuyển các xác suất hậu nghiệm về miền giá trị từ 0 đến +vô cùng.",
        "C. Để tránh lỗi giới hạn độ chính xác (underflow) khi nhân nhiều số xác suất nhỏ hơn 1 với nhau.",
        "D. Để biến đổi biểu thức tích các xác suất thành biểu thức tổng các lôgarit của xác suất.",
        "E. Để đảm bảo xác suất tiên nghiệm P(ci) luôn lớn hơn 0."
      ],
      "correct": [
        2,
        3
      ],
      "isMultiple": true,
      "explanation": "Đáp án đúng là: C, D."
    },
    {
      "id": 6,
      "title": "Câu 6:Trong Naïve Bayes, nếu một giá trị thuộc tính xj chưa bao giờ xuất hiện cùng với lớp ci trong tập học, dẫn đến P(xj|ci) = 0. Giải pháp nào thường được sử dụng để khắc phục?(Một đáp án)(1 điểm)",
      "options": [
        "A. Loại bỏ thuộc tính xj ra khỏi quá trình tính toán của tất cả các lớp.",
        "B. Sử dụng phương pháp ước lượng Bayes (như Laplacian smoothing) để bổ sung thêm các mẫu giả định.",
        "C. Gán mặc định xác suất đó bằng 1 để không làm triệt tiêu tích số.",
        "D. Chuyển sang sử dụng giải thuật k-NN cho ví dụ cụ thể đó.",
        "E. Tăng kích thước tập học lên gấp đôi bằng cách sao chép các ví dụ cũ."
      ],
      "correct": [
        1
      ],
      "isMultiple": false,
      "explanation": "Đáp án đúng là: B."
    },
    {
      "id": 7,
      "title": "Câu 7:Đặc điểm nào sau đây đúng với phương pháp phân lớp Naïve Bayes? (chọn hai đáp án đúng)(Nhiều đáp án)(1 điểm)",
      "options": [
        "A. Là phương pháp học phân lớp có giám sát dựa trên mô hình xác suất.",
        "B. Không yêu cầu dữ liệu huấn luyện phải được gán nhãn lớp trước.",
        "C. Việc phân loại dựa trên việc so sánh các xác suất hậu nghiệm của các khả năng xảy ra.",
        "D. Luôn cho kết quả chính xác hơn k-NN trong mọi bài toán thực tế.",
        "E. Chỉ có thể làm việc với các thuộc tính là số thực, không làm việc được với văn bản."
      ],
      "correct": [
        0,
        2
      ],
      "isMultiple": true,
      "explanation": "Đáp án đúng là: A, C."
    },
    {
      "id": 8,
      "title": "Câu 8:Khi sử dụng phương pháp xác suất hậu nghiệm cực đại (MAP) để phân lớp cho ví dụ z, tại sao ta có thể bỏ qua thành phần xác suất P(z) trong công thức tính?(Một đáp án)(1 điểm)",
      "options": [
        "A. Vì P(z) luôn bằng 1 đối với mọi tập dữ liệu quan sát.",
        "B. Vì P(z) vô cùng nhỏ nên không ảnh hưởng đến độ chính xác của máy tính.",
        "C. Vì P(z) tỷ lệ thuận với xác suất tiên nghiệm của nhãn lớp.",
        "D. Vì P(z) là hằng số (như nhau) đối với tất cả các giả thiết nhãn lớp khác nhau.",
        "E. Vì trong bài toán phân lớp, dữ liệu z luôn được coi là biến độc lập."
      ],
      "correct": [
        3
      ],
      "isMultiple": false,
      "explanation": "Đáp án đúng là: D."
    },
    {
      "id": 9,
      "title": "Câu 9:Trong định lý Bayes, thành phần P(h|D) được gọi là gì và có ý nghĩa như thế nào? (chọn hai đáp án đúng)(Nhiều đáp án)(1 điểm)",
      "options": [
        "A. Xác suất tiên nghiệm (prior probability) của giả thiết h.",
        "B. Xác suất hậu nghiệm (posterior probability) của giả thiết h khi đã quan sát được dữ liệu D.",
        "C. Thể hiện mức độ tin tưởng vào giả thiết h sau khi có thêm bằng chứng từ dữ liệu D.",
        "D. Khả năng xảy ra của dữ liệu D nếu biết giả thiết h là đúng (likelihood).",
        "E. Xác suất biên của việc quan sát được dữ liệu D bất kể giả thiết nào."
      ],
      "correct": [
        1,
        2
      ],
      "isMultiple": true,
      "explanation": "Đáp án đúng là: B, C."
    },
    {
      "id": 10,
      "title": "Câu 10:Giả thuyết \"ngây thơ\" (naive assumption) quan trọng nhất trong phương pháp phân lớp Naïve Bayes là gì?(Một đáp án)(1 điểm)",
      "options": [
        "A. Tất cả các nhãn lớp đều có xác suất tiên nghiệm P(ci) bằng nhau.",
        "B. Dữ liệu huấn luyện hoàn toàn không chứa nhiễu hoặc các giá trị thiếu.",
        "C. Các thuộc tính là độc lập có điều kiện đối với nhãn lớp.",
        "D. Xác suất hậu nghiệm P(c|z) luôn tuân theo phân phối chuẩn.",
        "E. Mỗi ví dụ học chỉ có duy nhất một thuộc tính có giá trị khác 0."
      ],
      "correct": [
        2
      ],
      "isMultiple": false,
      "explanation": "Đáp án đúng là: C."
    },
    {
      "id": 11,
      "title": "Câu 11:Để xác định trọng số (wi) cho từng thuộc tính trong hàm khoảng cách, chuyên gia có thể dựa vào những yếu tố nào? (chọn hai đáp án đúng)(Nhiều đáp án)(1 điểm)",
      "options": [
        "A. Tri thức cụ thể của bài toán để chỉ định mức độ quan trọng của từng đặc trưng.",
        "B. Số lượng ví dụ học có trong tập dữ liệu huấn luyện.",
        "C. Sử dụng một quá trình tối ưu hóa (học) bộ trọng số dựa trên một tập huấn luyện mẫu.",
        "D. Mặc định gán trọng số bằng 0 cho các thuộc tính kiểu nhị phân.",
        "E. Dựa vào giá trị trung bình của nhãn lớp trong tập học. PHẦN 3: PHÂN LỚP NAÏVE BAYES (L14)"
      ],
      "correct": [
        0,
        2
      ],
      "isMultiple": true,
      "explanation": "Đáp án đúng là: A, C."
    },
    {
      "id": 12,
      "title": "Câu 12:Khoảng cách Minkowski (p-norm) sẽ trở thành khoảng cách Manhattan khi tham số p nhận giá trị nào?(Một đáp án)(1 điểm)",
      "options": [],
      "correct": [
        1
      ],
      "isMultiple": false,
      "explanation": "Đáp án đúng là: B."
    },
    {
      "id": 13,
      "title": "Câu 13:Nhược điểm chính của giải thuật k-NN khi áp dụng cho các tập dữ liệu cực lớn là gì? (chọn hai đáp án đúng)(Nhiều đáp án)(1 điểm)",
      "options": [
        "A. Thời gian huấn luyện mô hình quá lâu do phải xây dựng cây quyết định phức tạp.",
        "B. Chi phí tính toán (thời gian) cao tại thời điểm thực hiện phân loại/dự đoán.",
        "C. Tốn nhiều không gian bộ nhớ để lưu trữ toàn bộ tập dữ liệu huấn luyện.",
        "D. Không thể áp dụng được cho các bài toán có thuộc tính là số thực.",
        "E. Giải thuật bị hội tụ chậm và thường xuyên rơi vào cực trị địa phương."
      ],
      "correct": [
        1,
        2
      ],
      "isMultiple": true,
      "explanation": "Đáp án đúng là: B, C."
    },
    {
      "id": 14,
      "title": "Câu 14:Khi thực hiện k-NN cho bài toán hồi quy (Regression), giá trị đầu ra dự đoán cho ví dụ mới z thường được tính như thế nào?(Một đáp án)(1 điểm)",
      "options": [
        "A. Là nhãn lớp xuất hiện nhiều nhất trong số k láng giềng gần nhất.",
        "B. Là giá trị của láng giềng gần nhất tuyệt đối (1-NN).",
        "C. Là tổng tất cả các giá trị đầu ra của k láng giềng.",
        "D. Là trung bình cộng của các giá trị đầu ra của k láng giềng gần nhất.",
        "E. Là giá trị lớn nhất trong miền giá trị của tập huấn luyện."
      ],
      "correct": [
        3
      ],
      "isMultiple": false,
      "explanation": "Đáp án đúng là: D."
    },
    {
      "id": 15,
      "title": "Câu 15:Trong biến thể k-NN có sử dụng trọng số theo khoảng cách, các láng giềng nên có mức độ ảnh hưởng như thế nào? (chọn hai đáp án đúng)(Nhiều đáp án)(1 điểm)",
      "options": [
        "A. Các láng giềng có khoảng cách càng xa thì trọng số đóng góp càng lớn.",
        "B. Mức độ ảnh hưởng (v) của mỗi láng giềng tỷ lệ nghịch với khoảng cách của nó đến điểm cần dự đoán.",
        "C. Tất cả các láng giềng trong tập NB(z) luôn có ảnh hưởng như nhau để đảm bảo tính khách quan.",
        "D. Trọng số có thể được tính bằng công thức v(x,z) = 1 / d(x,z) hoặc các hàm suy giảm khác.",
        "E. Trọng số chỉ phụ thuộc vào nhãn lớp của láng giềng mà không phụ thuộc vào vị trí không gian."
      ],
      "correct": [
        1,
        3
      ],
      "isMultiple": true,
      "explanation": "Đáp án đúng là: B, D."
    },
    {
      "id": 16,
      "title": "Câu 16:Tại sao việc chuẩn hóa miền giá trị các thuộc tính (ví dụ đưa về đoạn [0, 1]) lại quan trọng trong k-NN?(Một đáp án)(1 điểm)",
      "options": [
        "A. Để giảm dung lượng lưu trữ của tập huấn luyện trong bộ nhớ.",
        "B. Để tránh trường hợp một thuộc tính có miền giá trị lớn quyết định hoàn toàn giá trị khoảng cách.",
        "C. Để giúp thuật toán có thể làm việc được với các nhãn lớp kiểu số thực.",
        "D. Để chuyển đổi các thuộc tính định tính sang thuộc tính định lượng.",
        "E. Để đảm bảo hàm khoảng cách Euclid luôn cho kết quả là một số nguyên."
      ],
      "correct": [
        1
      ],
      "isMultiple": false,
      "explanation": "Đáp án đúng là: B."
    },
    {
      "id": 17,
      "title": "Câu 17:Những đặc điểm nào sau đây là ưu điểm của phương pháp k-NN? (chọn hai đáp án đúng)(Nhiều đáp án)(1 điểm)",
      "options": [
        "A. Chi phí huấn luyện rất thấp vì chỉ việc lưu lại các ví dụ học.",
        "B. Chi phí tính toán và bộ nhớ tại thời điểm dự đoán rất thấp.",
        "C. Hoạt động tốt với các bài toán phân loại nhiều lớp (multi-class).",
        "D. Không bị ảnh hưởng bởi các thuộc tính không liên quan trong dữ liệu.",
        "E. Tự động xác định được trọng số tối ưu cho từng thuộc tính mà không cần can thiệp."
      ],
      "correct": [
        0,
        2
      ],
      "isMultiple": true,
      "explanation": "Đáp án đúng là: A, C."
    },
    {
      "id": 18,
      "title": "Câu 18:Đối với một bài toán có các thuộc tính đầu vào là kiểu nhị phân (binary), hàm tính khoảng cách nào sau đây là phù hợp nhất?(Một đáp án)(1 điểm)",
      "options": [
        "A. Khoảng cách Euclid (p = 2).",
        "B. Khoảng cách Manhattan (p = 1).",
        "C. Khoảng cách Chebyshev (p = vô cùng).",
        "D. Khoảng cách Hamming.",
        "E. Khoảng cách Minkowski tổng quát."
      ],
      "correct": [
        3
      ],
      "isMultiple": false,
      "explanation": "Đáp án đúng là: D."
    },
    {
      "id": 19,
      "title": "Câu 19:Trong k-NN cho bài toán phân lớp, việc lựa chọn giá trị k có ảnh hưởng như thế nào đến kết quả? (chọn hai đáp án đúng)(Nhiều đáp án)(1 điểm)",
      "options": [
        "A. Nếu k = 1, hệ thống có xu hướng bị ảnh hưởng mạnh bởi lỗi hoặc nhiễu trong dữ liệu.",
        "B. Giá trị k càng lớn thì mô hình càng trở nên phức tạp và dễ bị overfitting.",
        "C. Nếu k quá lớn, ranh giới giữa các lớp bị mờ nhạt và cấu trúc tiềm ẩn trong dữ liệu bị phá vỡ.",
        "D. Giá trị k tối ưu luôn là số chẵn để đảm bảo tính công bằng khi bỏ phiếu."
      ],
      "correct": [
        0,
        2
      ],
      "isMultiple": true,
      "explanation": "Đáp án đúng là: A, C."
    },
    {
      "id": 20,
      "title": "Câu 20:Tại sao giải thuật K-láng giềng gần (k-NN) lại được gọi là phương pháp \"Học lười\" (Lazy learning)?(Một đáp án)(1 điểm)",
      "options": [
        "A. Vì nó không cần tập dữ liệu huấn luyện để bắt đầu quá trình học.",
        "B. Vì nó luôn chọn láng giềng gần nhất để đưa ra phán đoán mà không tính toán các láng giềng khác.",
        "C. Vì nó hoãn việc tính toán cho đến khi nhận được yêu cầu dự đoán cho một quan sát mới.",
        "D. Vì nó chỉ lưu lại một phần nhỏ dữ liệu huấn luyện để tiết kiệm bộ nhớ.",
        "E. Vì nó sử dụng hàm khoảng cách đơn giản nhất có thể."
      ],
      "correct": [
        2
      ],
      "isMultiple": false,
      "explanation": "Đáp án đúng là: C."
    },
    {
      "id": 21,
      "title": "Câu 21:Những yếu tố nào sau đây ảnh hưởng trực tiếp đến khả năng học (learnability) của một hệ thống? (chọn hai đáp án đúng)(Nhiều đáp án)(1 điểm)",
      "options": [
        "A. Khả năng biểu diễn của hàm mục tiêu (tuyến tính hay phi tuyến).",
        "B. Độ phức tạp của giải thuật và quá trình huấn luyện.",
        "C. Màu sắc và giao diện hiển thị của hệ thống học máy.",
        "D. Thời điểm trong ngày thực hiện việc thu thập dữ liệu.",
        "E. Thứ tự các ví dụ học được đưa vào hệ thống trong quá trình huấn luyện. PHẦN 2: K LÁNG GIỀNG GẦN (L13)"
      ],
      "correct": [
        0,
        1
      ],
      "isMultiple": true,
      "explanation": "Đáp án đúng là: A, B."
    },
    {
      "id": 22,
      "title": "Câu 22:Để tránh vấn đề Overfitting do tập huấn luyện có nhiều lỗi (nhiễu), giải pháp nào sau đây là phù hợp?(Một đáp án)(1 điểm)",
      "options": [
        "A. Tăng độ phức tạp của hàm mục tiêu để bao phủ toàn bộ các điểm nhiễu.",
        "B. Giảm kích thước tập thử nghiệm để tăng kích thước tập huấn luyện.",
        "C. Sử dụng các hàm dự đoán đơn giản hơn có khả năng khái quát hóa cao.",
        "D. Chỉ sử dụng các ví dụ lỗi làm tập huấn luyện để hệ thống làm quen.",
        "E. Chuyển từ học có giám sát sang học không giám sát."
      ],
      "correct": [
        2
      ],
      "isMultiple": false,
      "explanation": "Đáp án đúng là: C."
    },
    {
      "id": 23,
      "title": "Câu 23:Trong hai bài toán học máy cơ bản, điểm khác biệt giữa Phân loại (Classification) và Hồi quy (Regression) là gì? (chọn hai đáp án đúng)(Nhiều đáp án)(1 điểm)",
      "options": [
        "A. Phân loại dự đoán giá trị đầu ra thuộc một tập rời rạc (nhãn lớp).",
        "B. Hồi quy dự đoán giá trị đầu ra là một số thực liên tục.",
        "C. Phân loại là học không giám sát, trong khi Hồi quy là học có giám sát.",
        "D. Phân loại chỉ làm việc với dữ liệu số, Hồi quy làm việc với dữ liệu văn bản.",
        "E. Cả hai đều yêu cầu dữ liệu đầu vào phải được gắn nhãn trong quá trình huấn luyện."
      ],
      "correct": [
        0,
        1
      ],
      "isMultiple": true,
      "explanation": "Đáp án đúng là: A, B."
    },
    {
      "id": 24,
      "title": "Câu 24:Mục tiêu quan trọng nhất của một giải thuật học máy sau khi kết thúc quá trình huấn luyện là gì?(Một đáp án)(1 điểm)",
      "options": [
        "A. Khả năng ghi nhớ chính xác các ví dụ trong tập học.",
        "B. Tối ưu hóa thời gian tính toán trên tập dữ liệu lớn.",
        "C. Đạt được sai số xấp xỉ bằng 0 trên mọi tập dữ liệu đầu vào.",
        "D. Khả năng biểu diễn hàm mục tiêu dưới dạng phức tạp để đạt độ chính xác cao.",
        "E. Khả năng tổng quát hóa (generalization) tốt với các dữ liệu mới trong tương lai."
      ],
      "correct": [
        4
      ],
      "isMultiple": false,
      "explanation": "Đáp án đúng là: E."
    },
    {
      "id": 25,
      "title": "Câu 25:Hiện tượng quá khớp (Overfitting) xảy ra khi nào trong học máy? (chọn hai đáp án đúng)(Nhiều đáp án)(1 điểm)",
      "options": [
        "A. Mô hình quá đơn giản nên không học được cấu trúc của dữ liệu huấn luyện.",
        "B. Mô hình đạt độ chính xác rất cao trên tập học nhưng đạt độ chính xác thấp trên tập thử nghiệm.",
        "C. Số lượng các ví dụ học quá nhỏ, không đại diện được cho toàn bộ phân bố dữ liệu.",
        "D. Hàm dự đoán học được quá phức tạp và bị ảnh hưởng bởi nhiễu trong tập huấn luyện.",
        "E. Hệ thống tự động thay đổi biểu diễn bên trong để cải thiện khả năng khái quát hóa."
      ],
      "correct": [
        1,
        3
      ],
      "isMultiple": true,
      "explanation": "Đáp án đúng là: B, D."
    },
    {
      "id": 26,
      "title": "Câu 26:Khi thiết kế một hệ thống học máy để nhận dạng khuôn mặt, việc lựa chọn \"Hàm đa thức\" hoặc \"Mạng nơ-ron nhân tạo\" thuộc về bước nào trong quá trình thiết kế?(Một đáp án)(1 điểm)",
      "options": [
        "A. Lựa chọn các ví dụ học đại diện.",
        "B. Xác định hàm mục tiêu cần học.",
        "C. Lựa chọn cách biểu diễn cho hàm mục tiêu.",
        "D. Lựa chọn tiêu chí đánh giá hiệu năng P.",
        "E. Thu thập tri thức chuyên gia cho bài toán."
      ],
      "correct": [
        2
      ],
      "isMultiple": true,
      "explanation": "Đáp án đúng là: C."
    },
    {
      "id": 27,
      "title": "Câu 27:Trong quá trình phát triển một hệ thống học máy, tập dữ liệu tối ưu (Validation set) được sử dụng nhằm mục đích gì? (chọn hai đáp án đúng)(Nhiều đáp án)(1 điểm)",
      "options": [
        "A. Dùng để huấn luyện các trọng số cơ bản của mô hình.",
        "B. Đánh giá cuối cùng về khả năng tổng quát hóa của hệ thống đã học.",
        "C. Tối ưu hóa các tham số (hyperparameters) của giải thuật.",
        "D. Kiểm tra xem mô hình có bị hiện tượng quá khớp (overfitting) hay không trước khi thử nghiệm cuối cùng.",
        "E. Thu thập thêm các ví dụ thực tế từ môi trường hoạt động để bổ sung vào tập học."
      ],
      "correct": [
        2,
        3
      ],
      "isMultiple": true,
      "explanation": "Đáp án đúng là: C, D."
    },
    {
      "id": 28,
      "title": "Câu 28:Một hệ thống dự đoán rủi ro tài chính cho các khoản vay dựa trên dữ liệu lịch sử của khách hàng thường được phân loại vào nhóm bài toán nào?(Một đáp án)(1 điểm)",
      "options": [
        "A. Học không giám sát (Unsupervised Learning).",
        "B. Phân cụm dữ liệu (Clustering).",
        "C. Phát hiện cộng đồng (Community detection).",
        "D. Học có giám sát (Supervised Learning).",
        "E. Học tăng cường (Reinforcement Learning)."
      ],
      "correct": [
        3
      ],
      "isMultiple": false,
      "explanation": "Đáp án đúng là: D."
    },
    {
      "id": 29,
      "title": "Câu 29:Những đặc điểm nào sau đây mô tả đúng về bài toán học có giám sát (Supervised Learning)? (chọn hai đáp án đúng)(Nhiều đáp án)(1 điểm)",
      "options": [
        "A. Hệ thống học một hàm y = f(x) từ tập dữ liệu chỉ gồm các quan sát x1, x2, ..., xN.",
        "B. Dữ liệu huấn luyện bao gồm cả đầu vào và đầu ra mong muốn tương ứng cho mỗi ví dụ.",
        "C. Mục tiêu là phát hiện các cấu trúc ẩn hoặc phân cụm dữ liệu mà không cần nhãn lớp.",
        "D. Bài toán hồi quy là một dạng của học có giám sát khi đầu ra y là một số thực.",
        "E. Hệ thống tự cải thiện hiệu suất mà không cần bất kỳ thông tin hướng dẫn nào từ tập học."
      ],
      "correct": [
        1,
        3
      ],
      "isMultiple": true,
      "explanation": "Đáp án đúng là: B, D."
    },
    {
      "id": 30,
      "title": "Câu 30:Trong bài toán nhận dạng chữ viết tay để phân loại các từ trong ảnh, thành phần \"Kinh nghiệm (E)\" của hệ thống được xác định là gì?(Một đáp án)(1 điểm)",
      "options": [
        "A. Tỷ lệ phần trăm các từ được nhận dạng và phân loại chính xác.",
        "B. Một tập các ảnh chữ viết, trong đó mỗi ảnh đã được gán một định danh của một chữ.",
        "C. Thuật toán tối ưu hóa tiêu chí hiệu suất dựa trên kinh nghiệm quá khứ.",
        "D. Ánh xạ từ các điểm ảnh sang một tập nhãn lớp rời rạc.",
        "E. Khả năng tự động thay đổi cấu trúc bên trong để thích nghi với từ mới."
      ],
      "correct": [
        1
      ],
      "isMultiple": false,
      "explanation": "Đáp án đúng là: B."
    }
  ]
});
}
