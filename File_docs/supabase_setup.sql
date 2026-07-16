-- ======================================================
-- Supabase Schema & Data Seed for JLPT Practice App
-- ======================================================

-- 1. Create jlpt_exams Table
CREATE TABLE IF NOT EXISTS jlpt_exams (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    level TEXT NOT NULL,
    year INTEGER NOT NULL,
    month INTEGER NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Create jlpt_passages Table
CREATE TABLE IF NOT EXISTS jlpt_passages (
    id TEXT PRIMARY KEY,
    exam_id INTEGER REFERENCES jlpt_exams(id) ON DELETE CASCADE,
    part TEXT NOT NULL, -- 'grammar', 'reading'
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Create jlpt_questions Table
CREATE TABLE IF NOT EXISTS jlpt_questions (
    id TEXT PRIMARY KEY,
    exam_id INTEGER REFERENCES jlpt_exams(id) ON DELETE CASCADE,
    part TEXT NOT NULL, -- 'vocabulary', 'grammar', 'reading'
    question_number INTEGER NOT NULL,
    section_title TEXT NOT NULL,
    passage_id TEXT REFERENCES jlpt_passages(id) ON DELETE SET NULL,
    question_text TEXT NOT NULL,
    options TEXT[] NOT NULL,
    correct_option INTEGER NOT NULL,
    explanation TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS) for public reads
ALTER TABLE jlpt_exams ENABLE ROW LEVEL SECURITY;
ALTER TABLE jlpt_passages ENABLE ROW LEVEL SECURITY;
ALTER TABLE jlpt_questions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access on jlpt_exams" ON jlpt_exams FOR SELECT USING (true);
CREATE POLICY "Allow public read access on jlpt_passages" ON jlpt_passages FOR SELECT USING (true);
CREATE POLICY "Allow public read access on jlpt_questions" ON jlpt_questions FOR SELECT USING (true);

-- 4. Seed Exam Metadata
INSERT INTO jlpt_exams (id, name, level, year, month) 
VALUES (1, 'JLPT N3 - 12/2024', 'N3', 2024, 12)
ON CONFLICT (id) DO NOTHING;


-- 5. Seed Passages
INSERT INTO jlpt_passages (id, exam_id, part, title, content) VALUES ('passage_grammar_1', 1, 'grammar', '夏休みの思い出', '以下は、留学生の作文である。

夏休みに私は初めて日本人の家に泊まりました。日本人の友達が（ 19 ）。友達は、お父さん、お母さん、中学生の妹さんと住んでいます。日本人の家に泊まるのは初めてだったので、行く前は少し不安な気持ちもありました。（ 20 ）、行ってみたらとても楽しかったです。

印象に残っているのは、庭の畑で育てた野菜を使って、みんなで料理を作ったことです。友達のお母さんは、畑でいろいろな野菜を育てていました。私たちは、その野菜をみんなで料理をしました。私は、お店で売られている野菜（ 21 ）食べたことがありませんでした。家で育てた野菜を食べたのは初めてでしたが、とてもおいしかったです。友達に「私も野菜を育ててみたいけど、庭がないから育てられない。」と言ったら、それを聞いていたお母さんが、家の中でも育てることができる野菜について教えてくれました。

お母さんに教えてもらったやり方で、私も野菜を（ 22 ）。今、2種類の野菜を育てています。野菜の世話をしながら、楽しかった夏休みのことをいつも思い出しています。') ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content = EXCLUDED.content;
INSERT INTO jlpt_passages (id, exam_id, part, title, content) VALUES ('passage_reading_23', 1, 'reading', '(1) 今川さんからミゲルさんへのメール', 'ミゲルさん

メールをありがとう。同じ会社で働くことになって、うれしいです。

住む所についてアドバイスをくださいと書いてあったので、お答えします。

会社まで歩いて行きたいと書いてありましたが、会社の周りはオフィスばかりで、アパートはほとんどありません。電車通勤になりますが、私が以前住んでいた緑野という町はいいですよ。緑野駅から会社のある北園駅まで電車で15分だし、いろいろなお店があって便利です。

いい所が見つかるといいですね。会えるのを楽しみにしています。') ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content = EXCLUDED.content;
INSERT INTO jlpt_passages (id, exam_id, part, title, content) VALUES ('passage_reading_24', 1, 'reading', '(2) 友達のマキについて', '友達のマキは、いいことがあったという話をよくする。だから私は、マキは運がいいのだと思っていた。しかし、最近、そうではないと気づいた。

先日二人で出かけたとき、事故で電車が止まっていて、何キロも歩いて帰ることになった。嫌だなと思っている私に、マキは「知らない町を散歩できるね。」とうれしそうに言った。こんなことでも、マキは楽しめてしまうのだ。今まで私が聞いた話も、マキだから「いいこと」だと感じたのだろうと思う。') ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content = EXCLUDED.content;
INSERT INTO jlpt_passages (id, exam_id, part, title, content) VALUES ('passage_reading_25', 1, 'reading', '(3) 原口課長からミンさんへのメモ', 'ミンさん

子どもが熱を出したので、早退します。午後、明日の会議の進行について確認する約束だったのに、すみません。午後の話し合いのために予約していた小会議室はキャンセルしてくれますか。席に戻ったら、すぐお願いします。会議の進行については、明日の朝、最初に確認して、そのあとに会議室の準備をしましょう。

それから、ミンさんの作った資料ですが、問題ないので、今日中に8人分印刷しておいてください。

よろしくお願いします。

9月8日 12：10 原口') ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content = EXCLUDED.content;
INSERT INTO jlpt_passages (id, exam_id, part, title, content) VALUES ('passage_reading_26', 1, 'reading', '(4) 日本のファミリーレストランについて', '日本のファミリーレストランは、店の壁やソファーなどに、赤やオレンジ色のような暖かさを感じさせる色、つまり、暖色を使うことが多い。

暖色には食欲を感じさせる効果があるので、暖色に囲まれていると、料理がおいしそうに見える。また、暖色は、時間を実際より長く感じさせる効果もある。客は、店にいた時間が短くても、ゆっくりできたように感じるのだ。

暖色を多く使うのは、ファミリーレストランの経営の工夫の一つなのである。') ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content = EXCLUDED.content;
INSERT INTO jlpt_passages (id, exam_id, part, title, content) VALUES ('passage_reading_med_1', 1, 'reading', '(1) 留学中の出来事', '日本に留学に来る前、母が持っていきなさいと言って、私の国でよく売っている粉の香辛料をくれました。私が普段あまり使わないものでしたが、役に立つかもしれないと母が言うので、荷物に入れました。最近、それが本当に役に立ちました。

先月、(①ちょっと困ったことがありました)。ある留学生交流会に、国の料理を何か作ってきてほしいと言われたのです。私にも得意な料理はあるのですが、日本では買えない材料を使うので作れません。そのとき、私はあの香辛料を思い出したのです。

私は、肉と卵を使ってチャーハンを作り、香辛料をかけてみました。すると、日本によくある普通のチャーハンが、私の国らしい味と香りの(②特別なチャーハン)になったのです。交流会でも、みんな、おいしいおいしいと言って食べてくれて、安心しました。

あのとき、母はこういうことを予想していたのでしょうか。明日電話するので、(③母に聞いてみようと思います)。 ') ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content = EXCLUDED.content;
INSERT INTO jlpt_passages (id, exam_id, part, title, content) VALUES ('passage_reading_med_2', 1, 'reading', '(2) 海のごみとファッション', '今、世界中の海でごみが増え続けている。特にプラスチックごみは長期間海に残るので、環境に重大な影響が出ている。このような問題に関心を持つ企業や消費者は、日本でも海外でも増えている。

服や靴を作っている、ある海外のファッションの会社が始めた活動がある。まず、漁師たち、つまり魚をとって生活している人たちに頼んで、魚をとるときに一緒にとれるごみを、港に持ち帰ってもらう。そして、会社がそのごみを回収、分別し、その中のプラスチックを繊維に変え、服や靴にして売るというリサイクル活動である。

実は、以前、漁師たちはごみがとれても海に戻していた。港に持ち帰ると捨てるのにお金がかかるからだ。この活動は、漁師にとっても、自分のお金を使わずに海をきれいにできる良さがあるのだ。

これらの服や靴は、最近日本でも売られ始めた。デザインも悪くない。消費者の意識が変化している今、日本でもきっと受け入れられるだろう。

(注1) 分別する：種類ごとに分ける

(注2) 繊維：ここでは、糸の原料') ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content = EXCLUDED.content;
INSERT INTO jlpt_passages (id, exam_id, part, title, content) VALUES ('passage_reading_long', 1, 'reading', '古民家について', '最近、日本では古民家、つまり昔から伝わる建築方法で作られた古い家を、直して住む人が増えている。ただ、少し前までは、古民家を直した家に住む人は少なかった。

しかし、その良さに30年も前に気づいていた外国人がいる。ドイツ人の建築家、Kさんだ。

冬にたくさんの雪が降るT村には、30年前、住む人のいない壊れた古民家がたくさんあった。あるとき、偶然T村を訪ねたKさんは、一軒の古民家をとても気に入ってすぐに買い、自分が住むために直し始めた。日本の古民家には、丈夫で立派な木の材料が使われている。それを利用して直せば、長く住めるいい家になると考えたのだ。 

Kさんの直し方はこうだ。まず、家を一度バラバラにする。そして、材料の悪くなっている部分は取り替えるが、そのまま使える材料はできるだけ使って、前と同じように組み立てる。直しながら壁の色を変えたり、最新の暖房を入れたりもする。この方法なら、古民家が時代に合った住みやすい家になるのだ。 

Kさんは、家を直して住み始めたあと、T村にあるほかの古民家もそのままにしておくのはもったいないと思い、友人にお感を借りて直し始めた。自分のように古民家を直した家の良さがわかり、買ってくれる人がいるはずだと信じていたのだ。実際、すぐに(そのような人)は見つかった。そして、その後、直した古民家を見学しに全国各地の人がT村に来るようになった。

日本では、古い家を直するより新しい家を建てたほうがいいという考えが、まだまだ強い。Kさんの行動は、日本人に（ ）を教えてくれているのだと思う。') ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content = EXCLUDED.content;
INSERT INTO jlpt_passages (id, exam_id, part, title, content) VALUES ('passage_reading_info', 1, 'reading', '園内活動の協力者を募集します', '東山公園内の活動に、4月から新しく協力してくださる方を募集します。一緒に公園で活動しませんか。

【活動の種類／活動日・時間／活動場所・内容】

① 花や木の世話

毎週火曜日 9時〜11時

園内で、花や木の世話をします。花の世話が初めての方も歓迎します。

② ホームページ作り

毎週水曜日 9時〜11時

公園の事務所で、ホームページの記事を書きます。※パソコンが扱える方にお願いします。

③ 公園の掃除

毎週木曜日 14時〜16時

園内で、ごみ拾いなどをします。多くの方の協力が必要な活動です。

④ 公園の案内

毎月第2日曜日 9時〜11時

園内を歩いて、公園を案内します。

【応募できる方】

東山市に住んでいる18歳以上の方で、説明会に参加できる方

※4つの活動に分けて募集していますが、複数の活動への応募も可能です。

【説明会】

以下のAかBのどちらかに参加してください（AとBの内容は同じです）。参加希望日の前日までに、事務所へ電話で連絡してください。

A: 3月15日（火）10時（約30分）｜ 場所: 東山文化センター 2階会議室

B: 3月19日（土）14時（約30分）｜ 場所: 東山文化センター 2階会議室

【応募方法】

説明会でお渡しする応募用紙に必要な情報を書いて、事務所へ持参、または郵送してください。

【応募の前に活動に参加してみたい方】

①〜④の活動に参加してみたい方は、それぞれの活動日・時間に直接事務所に来てください。特に事前の連絡は必要ありません。

東山公園 事務所

〒166-0113 東山市花田町 13-5

電話：0685-65-9877（9：00〜17：00）') ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, content = EXCLUDED.content;

-- 6. Seed Questions
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('vocab_1', 1, 'vocabulary', 1, '問題 1: ＿＿＿のことばの読み方として最もよいものを、１・２・３・４から一つえらびなさい。', NULL, '山d田さんがちらしを(配った)。', ARRAY['ひろった', 'くばった', 'やぶった', 'はった'], 2, 'Đáp án đúng là: くばった') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('vocab_2', 1, 'vocabulary', 2, '問題 1: ＿＿＿のことばの読み方として最もよいものを、１・２・３・４から一つえらびなさい。', NULL, '私の国は(石油)を輸入しています。', ARRAY['いしゅ', 'せきう', 'せきゆ', 'いしう'], 3, 'Đáp án đúng là: せきゆ') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('vocab_3', 1, 'vocabulary', 3, '問題 1: ＿＿＿のことばの読み方として最もよいものを、１・２・３・４から一つえらびなさい。', NULL, '卒業式には生徒の(父母)もたくさん来ていた。', ARRAY['ふば', 'ふぼ', 'ふうぼ', 'ふうば'], 2, 'Đáp án đúng là: ふぼ') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('vocab_4', 1, 'vocabulary', 4, '問題 1: ＿＿＿のことばの読み方として最もよいものを、１・２・３・４から一つえらびなさい。', NULL, 'この町の(主要)な産業は何ですか。', ARRAY['じゅうおう', 'しゅおう', 'じゅうよう', 'しゅよう'], 4, 'Đáp án đúng là: しゅよう') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('vocab_5', 1, 'vocabulary', 5, '問題 1: ＿＿＿のことばの読み方として最もよいものを、１・２・３・４から一つえらびなさい。', NULL, 'これは(加熱)して食べてください。', ARRAY['かねつ', 'かあつ', 'かいねつ', 'かいあつ'], 1, 'Đáp án đúng là: かねつ') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('vocab_6', 1, 'vocabulary', 6, '問題 1: ＿＿＿のことばの読み方として最もよいものを、１・２・３・４から一つえらびなさい。', NULL, '川はあの辺りで(深く)なっている。', ARRAY['ふかく', 'あさく', 'ひろく', 'せまく'], 1, 'Đáp án đúng là: ふかく') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('vocab_7', 1, 'vocabulary', 7, '問題 1: ＿＿＿のことばの読み方として最もよいものを、１・２・３・４から一つえらびなさい。', NULL, '文句を言われたので、つい(感情的)になってしまった。', ARRAY['がんじょうてき', 'かんしょうてき', 'かんじょうてき', 'がんしょうてき'], 3, 'Đáp án đúng là: かんじょうてき') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('vocab_8', 1, 'vocabulary', 8, '問題 1: ＿＿＿のことばの読み方として最もよいものを、１・２・３・４から一つえらびなさい。', NULL, 'これは(残さないで)ください。', ARRAY['なくさないで', 'よごさないで', 'こぼさないで', 'のこさないで'], 4, 'Đáp án đúng là: のこさないで') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('vocab_9', 1, 'vocabulary', 9, '問題 2: ＿＿＿のことばを漢字で書くとき、最もよいものを、１・２・３・４から一つえらびなさい。', NULL, 'ここから(じゅんばん)に見てください。', ARRAY['順番', '項番', '順審', '項審'], 1, 'Đáp án đúng là: 順番') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('vocab_10', 1, 'vocabulary', 10, '問題 2: ＿＿＿のことばを漢字で書くとき、最もよいものを、１・２・３・４から一つえらびなさい。', NULL, '父は銀行に(つとめて)います。', ARRAY['勧めて', '働めて', '仕めて', '勤めて'], 4, 'Đáp án đúng là: 勤めて') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('vocab_11', 1, 'vocabulary', 11, '問題 2: ＿＿＿のことばを漢字で書くとき、最もよいものを、１・２・３・４から一つえらびなさい。', NULL, 'ポケットが(さゆう)にあるんですね。', ARRAY['裏表', '右左', '表裏', '左右'], 4, 'Đáp án đúng là: 左右') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('vocab_12', 1, 'vocabulary', 12, '問題 2: ＿＿＿のことばを漢字で書くとき、最もよいものを、１・２・３・４から一つえらびなさい。', NULL, '昨日の試合は(まけて)しまいました。', ARRAY['退けて', '負けて', '失けて', '欠けて'], 2, 'Đáp án đúng là: 負けて') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('vocab_13', 1, 'vocabulary', 13, '問題 2: ＿＿＿のことばを漢字で書くとき、最もよいものを、１・２・３・４から一つえらびなさい。', NULL, '(かこ)の例も調べてみましょう。', ARRAY['適去', '過古', '過去', '適古'], 3, 'Đáp án đúng là: 過去') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('vocab_14', 1, 'vocabulary', 14, '問題 2: ＿＿＿のことばを漢字で書くとき、最もよいものを、１・２・３・４から一つえらびなさい。', NULL, 'この資料はページが(ぎゃく)になっていますよ。', ARRAY['違', '変', '逆', '別'], 3, 'Đáp án đúng là: 逆') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('vocab_15', 1, 'vocabulary', 15, '問題 3: （ ）に入れるのに最もよいものを、１・２・３・４から一つえらびなさい。', NULL, '大雪で朝から電車が（ ）している。', ARRAY['縮小', '滞在', '延期', '運休'], 4, 'Đáp án đúng là: 運休') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('vocab_16', 1, 'vocabulary', 16, '問題 3: （ ）に入れるのに最もよいものを、１・２・３・４から一つえらびなさい。', NULL, '今日は暑かったので、シャツが（ ）でぬれてしまった。', ARRAY['いびき', 'あくび', 'あせ', 'いき'], 3, 'Đáp án đúng là: あせ') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('vocab_17', 1, 'vocabulary', 17, '問題 3: （ ）に入れるのに最もよいものを、１・２・３・４から一つえらびなさい。', NULL, '皆さんに声がよく聞こえるように、（ ）を使って話してください。', ARRAY['サイレン', 'エンジン', 'ノック', 'マイク'], 4, 'Đáp án đúng là: マイク') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('vocab_18', 1, 'vocabulary', 18, '問題 3: （ ）に入れるのに最もよいものを、１・２・３・４から一つえらびなさい。', NULL, '昨日は早く寝たが、夜中に大きな音がして目が（ ）しまった。', ARRAY['嫌がって', '覚めて', '驚いて', '怖がって'], 2, 'Đáp án đúng là: 覚めて') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('vocab_19', 1, 'vocabulary', 19, '問題 3: （ ）に入れるのに最もよいものを、１・２・３・４から一つえらびなさい。', NULL, '林さんはいつも冗談ばかり言うので、その話も本当かどうか（ ）。', ARRAY['あやしい', 'おそろしい', 'にくらしい', 'まずしい'], 1, 'Đáp án đúng là: あやしい') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('vocab_20', 1, 'vocabulary', 20, '問題 3: （ ）に入れるのに最もよいものを、１・２・３・４から一つえらびなさい。', NULL, '本日の面接の結果は、1週間以内にメールで（ ）します。', ARRAY['広告', '合図', '通知', '伝言'], 3, 'Đáp án đúng là: 通知') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('vocab_21', 1, 'vocabulary', 21, '問題 3: （ ）に入れるのに最もよいものを、１・２・３・４から一つえらびなさい。', NULL, '兄はいつも（ ）シャツを着ているので、遠くにいてもすぐに見つかる。', ARRAY['派手な', '盛んな', 'わがままな', '身近な'], 1, 'Đáp án đúng là: 派手な') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('vocab_22', 1, 'vocabulary', 22, '問題 3: （ ）に入れるのに最もよいものを、１・２・３・４から一つえらびなさい。', NULL, 'ここに車を止めることは規則で（ ）されていますから、すぐに移動してください。', ARRAY['支配', '失敗', '禁止', '批判'], 3, 'Đáp án đúng là: 禁止') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('vocab_23', 1, 'vocabulary', 23, '問題 3: （ ）に入れるのに最もよいものを、１・２・３・４から一つえらびなさい。', NULL, 'このコートは古いがまだ着られるので、捨ててしまうのは（ ）。', ARRAY['もったいない', 'しかたない', 'かわいらしい', 'こいしい'], 1, 'Đáp án đúng là: もったいない') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('vocab_24', 1, 'vocabulary', 24, '問題 3: （ ）に入れるのに最もよいものを、１・２・３・４から一つえらびなさい。', NULL, '弟への誕生日プレゼントは、誕生日まで弟に見つからないように、たんすの奥に（ ）。', ARRAY['包んだ', '隠した', '囲んだ', '閉じた'], 2, 'Đáp án đúng là: 隠した') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('vocab_25', 1, 'vocabulary', 25, '問題 3: （ ）に入れるのに最もよいものを、１・２・３・４から一つえらびなさい。', NULL, '山口さんは今度のパーティーには来られないかもしれないが、（ ）誘うつもりだ。', ARRAY['十分', '一応', 'けっこう', 'たいてい'], 2, 'Đáp án đúng là: 一応') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('vocab_26', 1, 'vocabulary', 26, '問題 4: ＿＿＿に意味が最も近いものを、１・２・３・４から一つえらびなさい。', NULL, 'あしたまでに(検討して)おきます。', ARRAY['よく考えて', 'よく探して', 'よく読んで', 'よく数えて'], 1, 'Đáp án đúng là: よく考えて') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('vocab_27', 1, 'vocabulary', 27, '問題 4: ＿＿＿に意味が最も近いものを、１・２・３・４から一つえらびなさい。', NULL, '来週、ここで(企業)の説明会があります。', ARRAY['旅行', '会社', '大学', '建物'], 2, 'Đáp án đúng là: 会社') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('vocab_28', 1, 'vocabulary', 28, '問題 4: ＿＿＿に意味が最も近いものを、１・２・３・４から一つえらびなさい。', NULL, 'ちょっと(バックして)ください。', ARRAY['前に進んで', '後ろに下がって', '横に動いて', 'そこで止まって'], 2, 'Đáp án đúng là: 後ろに下がって') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('vocab_29', 1, 'vocabulary', 29, '問題 4: ＿＿＿に意味が最も近いものを、１・２・３・４から一つえらびなさい。', NULL, '鈴木さんは(一流の)選手です。', ARRAY['かっこいい', '普通の', '人気がある', '素晴らしい'], 4, 'Đáp án đúng là: 素晴らしい') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('vocab_30', 1, 'vocabulary', 30, '問題 4: ＿＿＿に意味が最も近いものを、１・２・３・４から一つえらびなさい。', NULL, '田中さんが(ようやく)来てくれました。', ARRAY['本当に', 'すぐに', 'やっと', '初めて'], 3, 'Đáp án đúng là: やっと') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('vocab_31', 1, 'vocabulary', 31, '問題 5: つぎのことばの使い方として最もよいものを、１・２・３・４から一つえらびなさい。', NULL, '内容', ARRAY['修理のため、エアコンの内容を一度取り出します。', '鍋の中にカレーの内容を入れて、1時間くらい煮てください。', '古い財布から新しい財布へ内容を移しました。', 'この手紙の内容は、ほかの人には秘密にしてください。 '], 4, 'Đáp án đúng là: この手紙の内容は、ほかの人には秘密にしてください。 ') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('vocab_32', 1, 'vocabulary', 32, '問題 5: つぎのことばの使い方として最もよいものを、１・２・３・４から一つえらびなさい。', NULL, '活動', ARRAY['彼は有名なロック歌手だったが、今は活動していない。', '山に登ると、新鮮な空気が活動していて気持ちがいい。', 'さっきまで活動していたパソコンが、急に動かなくなった。', '駅前のコンビニは24時間活動しているので便利だ。 '], 1, 'Đáp án đúng là: 彼は有名なロック歌手だったが、今は活動していない。') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('vocab_33', 1, 'vocabulary', 33, '問題 5: つぎのことばの使い方として最もよいものを、１・２・３・４から一つえらびなさい。', NULL, '落ち着く', ARRAY['この辺りは、冬になると雪が落ち着いて、春になるまで溶けません。', 'シャツにしみが落ち着いてしまって、洗ってもきれいになりません。', 'あそこの木の上に美しい鳥が落ち着いています。', '大好きなこの曲を聞くと、いつも気持ちが落ち着きます。 '], 4, 'Đáp án đúng là: 大好きなこの曲を聞くと、いつも気持ちが落ち着きます。 ') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('vocab_34', 1, 'vocabulary', 34, '問題 5: つぎのことばの使い方として最もよいものを、１・２・３・４から一つえらびなさい。', NULL, 'ぐっすり', ARRAY['遠慮しないで、ぐっすり食べてください。', '優勝できたのは、毎日ぐっすり練習したからだと思う。', '今日は疲れているので、朝までぐっすり眠れそうだ。', '古い友人と久しぶりに会って、ぐっすりおしゃべりした。 '], 3, 'Đáp án đúng là: 今日は疲れているので、朝までぐっすり眠れそうだ。') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('vocab_35', 1, 'vocabulary', 35, '問題 5: つぎのことばの使い方として最もよいものを、１・２・３・４から一つえらびなさい。', NULL, '性格', ARRAY['日本の古い性格に興味があるので、神社やお寺によく行きます。 ', '森さんはおとなしい性格で、自分の意見はあまり言いません。 ', '値段が高くても、安全で性格のいい車を買うつもりです。 ', '音楽の性格を伸ばすために、5歳から専門家の指導を受けました'], 2, 'Đáp án đúng là: 森さんはおとなしい性格で、自分の意見はあまり言いません。 ') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('grammar_1', 1, 'grammar', 1, '問題 1: つぎの文の（ ）に入れるのに最もよいものを、１・２・３・４から一つえらびなさい。', NULL, '私は、自分の作ったパンをたくさんの人（ ）食べてほしいと思って、パン屋を始めた。', ARRAY['は', 'に', 'まで', 'なら'], 2, 'Đáp án đúng là: に') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('grammar_2', 1, 'grammar', 2, '問題 1: つぎの文の（ ）に入れるのに最もよいものを、１・２・３・４から一つえらびなさい。', NULL, '（研究室で）
学生「先生、今、よろしいですか。来週の発表（ ）、ちょっとご相談したいのですが。」
先生「ええ、いいですよ。」', ARRAY['にとって', 'によると', 'のことで', 'のほか'], 3, 'Đáp án đúng là: のことで') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('grammar_3', 1, 'grammar', 3, '問題 1: つぎの文の（ ）に入れるのに最もよいものを、１・２・３・４から一つえらびなさい。', NULL, 'いつもは宿題に2時間以上かかるが、今日は1時間（ ）終わりそうだ。', ARRAY['ごろに', 'ごろで', 'ぐらいに', 'ぐらいで'], 4, 'Đáp án đúng là: ぐらいで') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('grammar_4', 1, 'grammar', 4, '問題 1: つぎの文の（ ）に入れるのに最もよいものを、１・２・３・４から一つえらびなさい。', NULL, '息子「ねえ、お母さん、おなかすいた。」
母「えっ、（ ）ご飯食べたばかりなのに、もうおなかすいたの？」', ARRAY['そろそろ', 'だんだん', 'さっき', 'ずっと'], 3, 'Đáp án đúng là: さっき') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('grammar_5', 1, 'grammar', 5, '問題 1: つぎの文の（ ）に入れるのに最もよいものを、１・２・３・４から一つえらびなさい。', NULL, '大事なレシートをズボンのポケットに（ ）洗濯してしまった。', ARRAY['入れたまま', '入ったまま', '入れている間', '入っている間'], 1, 'Đáp án đúng là: 入れたまま') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('grammar_6', 1, 'grammar', 6, '問題 1: つぎの文の（ ）に入れるのに最もよいものを、１・２・３・４から一つえらびなさい。', NULL, '（駅の近くで）
A「急げば、9時の電車に間に合うかもしれないよ。走ろうか。」
B「いや、（ ）もう間に合わないと思うよ。次の電車にしよう。」', ARRAY['走ってて', '走ったって', '走らなきゃ', '走っちゃって'], 2, 'Đáp án đúng là: 走ったって') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('grammar_7', 1, 'grammar', 7, '問題 1: つぎの文の（ ）に入れるのに最もよいものを、１・２・３・４から一つえらびなさい。', NULL, '私はよくインターネットで買い物をするが、洋服は買わない。実際に（ ）買いたいからだ。', ARRAY['着てみないと', '着ておかないと', '着てみてから', '着ておいてから'], 3, 'Đáp án đúng là: 着てみてから') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('grammar_8', 1, 'grammar', 8, '問題 1: つぎの文の（ ）に入れるのに最もよいものを、１・２・３・４から一つえらびなさい。', NULL, '（林さんの家で）
山下「おいしそうなお料理ですね。」
林「どうぞたくさん（ ）ください。」
山下「ありがとうございます。いただきます。」', ARRAY['なさって', 'おっしゃって', 'めしあがって', 'いらっしゃって'], 3, 'Đáp án đúng là: めしあがって') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('grammar_9', 1, 'grammar', 9, '問題 1: つぎの文の（ ）に入れるのに最もよいものを、１・２・３・４から一つえらびなさい。', NULL, 'A「最近、寒くなって（ ）ね。」
B「ええ。今日は特に冷えますね。」', ARRAY['いました', 'ありました', 'いきました', 'きました'], 4, 'Đáp án đúng là: きました') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('grammar_10', 1, 'grammar', 10, '問題 1: つぎの文の（ ）に入れるのに最もよいものを、１・２・３・４から一つえらびなさい。', NULL, '（大学で）
A「日曜日の留学生交流会、どうだった？」
B「楽しかったよ。初めてだったからちょっと緊張したけど、新しい友達もできたし、（ ）。」', ARRAY['行ってよかったよ', '行こうかと思うよ', '行きたかったなあ', '行けたらいいなあ'], 1, 'Đáp án đúng là: 行ってよかったよ') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('grammar_11', 1, 'grammar', 11, '問題 1: つぎの文の（ ）に入れるのに最もよいものを、１・２・３・４から一つえらびなさい。', NULL, '（大学の事務所で）
学生「すみません。ペンを（ ）。」
事務所の人「あ、はい。これを使ってください。」', ARRAY['お貸しできますか', 'お貸しいたしますか', '貸したらいかがですか', '貸していただけませんか'], 4, 'Đáp án đúng là: 貸していただけませんか') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('grammar_12', 1, 'grammar', 12, '問題 1: つぎの文の（ ）に入れるのに最もよいものを、１・２・３・４から一つえらびなさい。', NULL, '（家で）
娘「ちょっと駅前の本屋に行ってくるね。」
父「雨が降っているし、車で（ ）？」
娘「いいの？ ありがとう。」', ARRAY['送ってこない', '送ってこようか', '送ってあげない', '送ってあげようか'], 4, 'Đáp án đúng là: 送ってあげようか') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('grammar_13', 1, 'grammar', 13, '問題 1: つぎの文の（ ）に入れるのに最もよいものを、１・２・３・４から一つえらびなさい。', NULL, '（会社で）
南「中山さん、今、ちょっといいですか。」
中山「あ、これからABC銀行に（ ）。戻ってきてからでもいいですか。」', ARRAY['行くところだからです', '行くところなんです', '行っているところだからです', '行っているところなんです'], 2, 'Đáp án đúng là: 行くところなんです') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('grammar_14', 1, 'grammar', 14, '問題 2: つぎの文の ★ に入れる最もよいものを、１・２・３・４から一つえらびなさい。', NULL, '山川大学では、新入生が ＿＿＿ ＿＿＿ ★ ＿＿＿ について、毎年4月にアンケート調査を行っている。', ARRAY['大学生活', '持っている', 'に対して', 'イメージ'], 2, 'Đáp án đúng là: 持っている') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('grammar_15', 1, 'grammar', 15, '問題 2: つぎの文の ★ に入れる最もよいものを、１・２・３・４から一つえらびなさい。', NULL, '来週の夫の誕生日には、＿＿＿ ＿＿＿ ★ ＿＿＿ つもりだ。', ARRAY['最近', 'プレゼントする', 'かばんを', '欲しがっている'], 3, 'Đáp án đúng là: かばんを') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('grammar_16', 1, 'grammar', 16, '問題 2: つぎの文の ★ に入れる最もよいものを、１・２・３・４から一つえらびなさい。', NULL, '私は、健康の ＿＿＿ ＿＿＿ ★ ＿＿＿ 。', ARRAY['している', 'ために', '毎日8時間以上寝る', 'ように'], 4, 'Đáp án đúng là: ように') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('grammar_17', 1, 'grammar', 17, '問題 2: つぎの文の ★ に入れる最もよいものを、１・２・３・４から一つえらびなさい。', NULL, '部長が ＿＿＿ ＿＿＿ ★ ＿＿＿ クッキーがとてもおいしいので、私も東京に行くことがあったら、買おうと思う。', ARRAY['たびに', '買ってきてくれる', 'お土産の', '東京へ出張に行く'], 3, 'Đáp án đúng là: お土産の') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('grammar_18', 1, 'grammar', 18, '問題 2: つぎの文の ★ に入れる最もよいものを、１・２・３・４から一つえらびなさい。', NULL, '私はこの図書館が好きだ。広くて本の数が多い ＿＿＿ ＿＿＿ ★ ＿＿＿ いい。', ARRAY['景色を楽しみながら', '大きな窓から海が見えて', 'だけでなく', '読書ができるのも'], 1, 'Đáp án đúng là: 景色を楽しみながら') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('grammar_19', 1, 'grammar', 19, '問題 3: つぎの文章を読んで、文章全体の内容を考えて、19から22の中に入る最もよいものを、１・２・３・４から一つえらびなさい。', 'passage_grammar_1', '', ARRAY['招待してくれたのです', '招待してくれたはずです', '招待してくれたばかりです', '招待してくれたそうです'], 1, 'Đáp án đúng là: 招待してくれたのです') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('grammar_20', 1, 'grammar', 20, '問題 3: つぎの文章を読んで、文章全体の内容を考えて、19から22の中に入る最もよいものを、１・２・３・４から一つえらびなさい。', 'passage_grammar_1', '', ARRAY['それで', 'でも', '実は', 'また'], 2, 'Đáp án đúng là: でも') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('grammar_21', 1, 'grammar', 21, '問題 3: つぎの文章を読んで、文章全体の内容を考えて、19から22の中に入る最もよいものを、１・２・３・４から一つえらびなさい。', 'passage_grammar_1', '', ARRAY['は', 'などを', 'しか', 'だけ'], 3, 'Đáp án đúng là: しか') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('grammar_22', 1, 'grammar', 22, '問題 3: つぎの文章を読んで、文章全体の内容を考えて、19から22の中に入る最もよいものを、１・２・３・４から一つえらびなさい。', 'passage_grammar_1', '', ARRAY['育ててみてほしいです', '育ててみてもいいです', '育ててみようとしました', '育ててみることにしました'], 4, 'Đáp án đúng là: 育ててみることにしました') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('reading_23', 1, 'reading', 23, '問題 4: つぎの(1)から(4)の文章を読んで、質問に答えなさい。答えは、１・２・３・４から最もよいものを一つえらびなさい。', 'passage_reading_23', '今川さんは、ミゲルさんの住む所について、どんなアドバイスをしているか。', ARRAY['生活に便利な所より、通勤のしやすい所にしたらどうか。', '会社に歩いて行きたいなら、緑野にしたらどうか。', '北園駅まで電車で15分で行けるし、店も多いので、緑野にしたらどうか。', 'いろいろな店があって便利なので、北園駅の近くにしたらどうか。'], 3, 'Đáp án đúng là: 北園駅まで電車で15分で行けるし、店も多いので、緑野にしたらどうか。') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('reading_24', 1, 'reading', 24, '問題 4: つぎの(1)から(4)の文章を読んで、質問に答えなさい。答えは、１・２・３・４から最もよいものを一つえらびなさい。', 'passage_reading_24', '最近、「私」はマキのことをどのような人だと思うようになったか。', ARRAY['「いいこと」ばかりが起きる、運がいい人', '「私」と一緒に経験したことは、何でも「いいこと」だと思える人', 'ほかの人に起こった「いいこと」を一緒に喜んであげられる人', 'ほかの人が「いいこと」だと思わないことも「いいこと」だと思える人'], 4, 'Đáp án đúng là: ほかの人が「いいこと」だと思わないことも「いいこと」だと思える人') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('reading_25', 1, 'reading', 25, '問題 4: つぎの(1)から(4)の文章を読んで、質問に答えなさい。答えは、１・２・３・４から最もよいものを一つえらびなさい。', 'passage_reading_25', 'このメモを読んで、ミンさんはまず何をしなければならないか。', ARRAY['会議の進行について原口課長と確認する。', '小会議室をキャンセルする。', '会議室の準備をする。', '会議の資料を8人分印刷する。'], 2, 'Đáp án đúng là: 小会議室をキャンセルする。') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('reading_26', 1, 'reading', 26, '問題 4: つぎの(1)から(4)の文章を読んで、質問に答えなさい。答えは、１・２・３・４から最もよいものを一つえらびなさい。', 'passage_reading_26', '日本のファミリーレストランが、暖色を多く使うのはなぜか。', ARRAY['店の暖房にあまりお金がかからないようにするため', '客に、店の料理と店で過ごす時間にいい印象を持ってもらうため', '店をおしゃれに見せて、客に店に入りたいと思ってもらうため', '客に長く店にいてもらって、料理をたくさん注文してもらうため'], 2, 'Đáp án đúng là: 客に、店の料理と店で過ごす時間にいい印象を持ってもらうため') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('reading_27', 1, 'reading', 27, '問題 5: つぎの(1)と(2)の文章を読んで、質問に答えなさい。答えは、１・２・３・４から最もよいものを一つえらびなさい。', 'passage_reading_med_1', '(①ちょっと困ったことがありました)とあるが、「私」が困ったのはなぜか。', ARRAY['母に、普段あまり使わない香辛料を持っていくように言われたから', '得意な料理がないのに、国の料理を作ってきてほしいと言われたから', '国の料理を作ってきてほしいと言われたが、日本では得意な料理が作れないから', 'チャーハンが作れないのに、チャーハンを作ってきてほしいと言われたから'], 3, 'Đáp án đúng là: 国の料理を作ってきてほしいと言われたが、日本では得意な料理が作れないから') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('reading_28', 1, 'reading', 28, '問題 5: つぎの(1)と(2)の文章を読んで、質問に答えなさい。答えは、１・２・３・４から最もよいものを一つえらびなさい。', 'passage_reading_med_1', '(②特別なチャーハン)とは、どのようなチャーハンか。', ARRAY['日本で売っている材料でチャーハンを作って、国の香辛料をかけたもの', '日本で売っている材料でチャーハンを作って、日本の香辛料をかけたもの', '国から持ってきた材料でチャーハンを作って、国の香辛料をかけたもの', '国から持ってきた材料でチャーハンを作って、日本の香辛料をかけたもの'], 1, 'Đáp án đúng là: 日本で売っている材料でチャーハンを作って、国の香辛料をかけたもの') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('reading_29', 1, 'reading', 29, '問題 5: つぎの(1)と(2)の文章を読んで、質問に答えなさい。答えは、１・２・３・４から最もよいものを一つえらびなさい。', 'passage_reading_med_1', '(③母に聞いてみようと思います)とあるが、「私」はどのようなことを聞くと考えられるか。', ARRAY['国の香辛料がどうして日本で役に立つと思ったのか。', 'どんな料理を作るときに国の香辛料を使えばいいのか。', '「私」が日本に留学することを予想していたかどうか。', '次の留学生交流会に、どんな料理を持っていけばいいと思うか。'], 1, 'Đáp án đúng là: 国の香辛料がどうして日本で役に立つと思ったのか。') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('reading_30', 1, 'reading', 30, '問題 5: つぎの(1)と(2)の文章を読んで、質問に答えなさい。答えは、１・２・３・４から最もよいものを一つえらびなさい。', 'passage_reading_med_2', '「海外のファッションの会社」がしていることとして、合っているのはどれか。', ARRAY['漁師たちと一緒に、海にごみを取りに行っている。', '漁師たちから海でごみを受け取って、港に持ち帰っている。', '漁師たちがプラスチックごみから服や靴を作るのを助けて、それを売っている。', '漁師たちが海でとったプラスチックごみを利用して、服や靴を作っている。'], 4, 'Đáp án đúng là: 漁師たちが海でとったプラスチックごみを利用して、服や靴を作っている。') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('reading_31', 1, 'reading', 31, '問題 5: つぎの(1)と(2)の文章を読んで、質問に答えなさい。答えは、１・２・３・４から最もよいものを一つえらびなさい。', 'passage_reading_med_2', '漁師たちは、なぜ「海外のファッションの会社」が始めた活動に参加するのか。', ARRAY['ほかの漁師たちとの協力関係ができるから', '自分たちのお金をかけずに、海のごみを減らすことができるから', '魚をとるためにかかっていたお金を減らすことができるから', '自分たちが少しお金を出すだけで、海をきれいにしてもらえるから'], 2, 'Đáp án đúng là: 自分たちのお金をかけずに、海のごみを減らすことができるから') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('reading_32', 1, 'reading', 32, '問題 5: つぎの(1)と(2)の文章を読んで、質問に答えなさい。答えは、１・２・３・４から最もよいものを一つえらびなさい。', 'passage_reading_med_2', 'この文章を書いた人は、日本で売られ始めた「海外のファッションの会社」の服や靴について、どのように考えているか。', ARRAY['海外のファッションに関心を持つ人が増えているので、売れるだろう。', '環境問題に関心を持つ人が増えているし、デザインも悪くないので、売れるだろう。', 'デザインの良さで製品を選ぶ人が増えているので、値段が高くても売れるだろう。', '製品のデザインが日本の消費者には合わないので、あまり売れないだろう。'], 2, 'Đáp án đúng là: 環境問題に関心を持つ人が増えているし、デザインも悪くないので、売れるだろう。') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('reading_33', 1, 'reading', 33, '問題 6: つぎの文章を読んで、質問に答えなさい。答えは、１・２・３・４から最もよいものを一つえらびなさい。', 'passage_reading_long', 'Kさんが住む前のT村は、どのような状態だったか。', ARRAY['ほとんど壊れていないのに、誰も住んでいない古民家がたくさんあった。', '住みやすいように直されているのに、誰も住んでいない古民家がたくさんあった。', '壊れたまま直さずに人が住んでいる古民家がたくさんあった。', '誰も住んでいない壊れた古民家がたくさんあった。'], 4, 'Đáp án đúng là: 誰も住んでいない壊れた古民家がたくさんあった。') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('reading_34', 1, 'reading', 34, '問題 6: つぎの文章を読んで、質問に答えなさい。答えは、１・２・３・４から最もよいものを一つえらびなさい。', 'passage_reading_long', 'Kさんの直し方で直した古民家は、どのような家になるか。', ARRAY['新しい材料をできるだけ使っていて、壁の色や暖房も新しく変えた家', '新しい材料をできるだけ使っているが、壁の色や暖房は昔と変わらない家', '古い材料をできるだけ使っていて、壁の色や暖房も昔と変わらない家', '古い材料をできるだけ使っているが、壁の色や暖房は新しく変えた家'], 4, 'Đáp án đúng là: 古い材料をできるだけ使っているが、壁の色や暖房は新しく変えた家') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('reading_35', 1, 'reading', 35, '問題 6: つぎの文章を読んで、質問に答えなさい。答えは、１・２・３・４から最もよいものを一つえらびなさい。', 'passage_reading_long', '(そのような人)とあるが、どのような人か。', ARRAY['Kさんが直して住み始めた古民家を買ってくれる人', 'T村の古民家を直そうとするKさんに、お金を貸してくれる人', 'T村にある壊れた古民家を買って、Kさんに直してもらおうとする人', '古民家を直した家の良さがKさんのようにわかって、買ってくれる人'], 4, 'Đáp án đúng là: 古民家を直した家の良さがKさんのようにわかって、買ってくれる人') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('reading_36', 1, 'reading', 36, '問題 6: つぎの文章を読んで、質問に答えなさい。答えは、１・２・３・４から最もよいものを一つえらびなさい。', 'passage_reading_long', '（ ）に入れるのに最もよいものはどれか。', ARRAY['古い家を自分で直すことの面白さ', '古い家にはない、新しい家の素晴らしさ', '古い家を利用し、直して使っていくことの良さ', '古い家を変えずに、そのまま残していくことの価値'], 3, 'Đáp án đúng là: 古い家を利用し、直して使っていくことの良さ') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('reading_37', 1, 'reading', 37, '問題 7: 下のページは、ある公園の掲示板にはってあるポスターである。これを読んで、下の質問に答えなさい。答えは、１・２・３・４から最もよいものを一つえらびなさい。', 'passage_reading_info', 'コウさんは、園内活動のどれかに応募したいと思っている。午前中に事務所で行われる活動で、毎週参加できるものがいい。コウさんの希望に合うのはどれか。', ARRAY['①', '②', '③', '④'], 2, 'Đáp án đúng là: ②') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;
INSERT INTO jlpt_questions (id, exam_id, part, question_number, section_title, passage_id, question_text, options, correct_option, explanation) VALUES ('reading_38', 1, 'reading', 38, '問題 7: 下のページは、ある公園の掲示板にはってあるポスターである。これを読んで、下の質問に答えなさい。答えは、１・２・３・４から最もよいものを一つえらびなさい。', 'passage_reading_info', '園内活動の協力者になりたいと思っている人が、気をつけなければならないことはどれか。', ARRAY['複数の活動に応募することはできない。', '説明会は、AとBの両方に参加しなければならない。', '説明会に参加するために、参加希望日の前日までに電話で連絡しなければならない。', '応募用紙は、必要な情報を書いて、事務所に持参しなければならない。'], 3, 'Đáp án đúng là: 説明会に参加するために、参加希望日の前日までに電話で連絡しなければならない。') ON CONFLICT (id) DO UPDATE SET question_text = EXCLUDED.question_text, options = EXCLUDED.options, correct_option = EXCLUDED.correct_option, explanation = EXCLUDED.explanation;

-- 7. Grant SELECT permissions to anon role
GRANT SELECT ON public.jlpt_exams TO anon;
GRANT SELECT ON public.jlpt_passages TO anon;
GRANT SELECT ON public.jlpt_questions TO anon;
