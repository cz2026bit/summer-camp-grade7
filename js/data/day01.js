// ============ 第 1 天 ============
// 精讲精练:动画配音讲解 + 每科 1~2 道深度思考题(共 7 题 100 分)
// lesson 块 = 动画课堂(逐步显示 + 语音朗读)
// q.explainSteps = 答题后的动画配音讲解
window.DAYS = window.DAYS || {};

window.DAYS[1] = {
  day: 1,
  title: "第 1 关 · 开营首战",
  estimate: "四科约 2~3 小时 · 共 7 道思考题(含 1 道 BOSS 题)",
  sections: [
    // ================== 数学 ==================
    {
      subject: "math", icon: "🔢", title: "数学 · 负数的世界", minutes: 50,
      units: [
        {
          name: "动画课堂 1 · 分数运算 60 秒回顾",
          blocks: [
            { type: "lesson", title: "▶ 一分钟唤醒六年级的记忆", steps: [
              { text: "分数加减法:同分母,分母不变分子加减;异分母,先通分再加减。", emoji: "➕" },
              { text: "例如 1/2 + 1/3,通分成 3/6 + 2/6,等于 5/6。", emoji: "🧮" },
              { text: "分数乘法:分子乘分子,分母乘分母,计算前先约分。", emoji: "✖️" },
              { text: "分数除法:除以一个数,等于乘它的倒数,口诀是「除法翻个身」。", emoji: "➗" },
              { text: "记住:加减先通分,乘法先约分,除法翻个身。这是初一有理数运算的地基!", emoji: "🏗️" }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 2 · 负数的诞生(比欧洲早一千多年!)",
          blocks: [
            { type: "lesson", title: "▶ 一个让欧洲人害怕了一千年的数", steps: [
              { text: "两千年前,中国古人在《九章算术》里就开始用负数记账:卖出粮食记为正,买入记为负。", emoji: "📜" },
              { text: "而欧洲数学家直到一千多年后,还称负数为「荒谬的数」,不敢使用它。", emoji: "😨" },
              { text: "为什么需要负数?因为生活中到处是相反意义的量:零上和零下、收入和支出、地上和地下。", emoji: "⚖️" },
              { text: "只说「3」不够,必须说清楚方向:+3 还是 −3。负号,本质上是一个「方向标记」。", emoji: "🧭" },
              { text: "记住:0 既不是正数也不是负数,它是正负世界的分界线。", emoji: "🚪" }
            ] },
            { type: "thermometer" }
          ],
          q: null
        },
        {
          name: "动画课堂 3 · 数轴:给所有数安排座位",
          blocks: [
            { type: "lesson", title: "▶ 一条线管住所有的数", steps: [
              { text: "数学家想了一个绝妙的办法:画一条直线,规定原点、正方向和单位长度,这就是数轴。", emoji: "📏" },
              { text: "0 坐在原点,正数排在右边,负数排在左边,每个数都有自己唯一的座位。", emoji: "💺" },
              { text: "数轴上有一条铁律:越往右越大,越往左越小。", emoji: "👉" },
              { text: "所以 −2 比 −6 大!因为 −2 的座位在 −6 的右边。", emoji: "🤯" },
              { text: "小技巧:把负数想成欠债,欠 6 元的人比欠 2 元的人更穷。", emoji: "💸" }
            ] },
            { type: "numberline" }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "恩恩,请判断这三句话,哪些是对的?①0 既不是正数也不是负数 ②−0.5 比 −1 小,因为 0.5 比 1 小 ③气温从 −3℃ 升高 5℃ 后是 +2℃",
            options: ["①②③都对", "只有①③对", "只有①对", "只有②③对"], answer: 1,
            demoSteps: [
              { text: "先把三个判断拆开看:0 是数轴原点,它是正负数的分界线。", emoji: "🚪", scene: { type: "numberline", from: -2, to: 0 } },
              { text: "比较两个负数,不要只看数字大小,要看它们在数轴上的左右位置。越往右越大。", emoji: "📏", scene: { type: "numberline", from: -1, to: -0.5 } },
              { text: "气温升高,就是在数轴上向右走。从 −3℃ 升高 5℃,先想方向,再数格子。", emoji: "🌡️", scene: { type: "numberline", from: -3, to: 2 } }
            ],
            explain: "①对,0 是分界线;②错,−0.5 在 −1 右边,所以 −0.5 > −1,负数比大小和正数相反;③对,−3 向右走 5 格到 +2。",
            explainSteps: [
              { text: "第①句:0 既不是正数也不是负数,这是定义,正确!", emoji: "✅" },
              { text: "第②句是个大陷阱:比较 −0.5 和 −1,要看数轴上的位置。", emoji: "⚠️" },
              { text: "−0.5 在 −1 的右边,所以 −0.5 反而大!负数的世界,数字部分越大,数反而越小。", emoji: "🔄" },
              { text: "第③句:从 −3 出发向右走 5 格:−3 → −2 → −1 → 0 → 1 → 2,正好是 +2,正确!", emoji: "🚶" },
              { text: "所以答案是:只有①③对。记住负数比大小的反转规则,初一考试年年考!", emoji: "🎯" }
            ] }
        },
        {
          name: "🔥 BOSS 挑战 · 冷冻实验室",
          blocks: [
            { type: "text", html: "💪 <b>BOSS 战规则</b>:这道题需要动笔计算,拿出草稿纸,一步一步来。答对得 <b>20 XP</b>!" }
          ],
          q: { type: "fill", points: 20, boss: true, voice: "zh",
            q: "科学实验:一杯 22℃ 的水放进冷冻室后,温度每分钟下降 2℃。水降到 0℃ 时开始结冰,再继续降到 −6℃ 时被取出。请问这杯水在冷冻室里一共待了多少分钟?请直接填写数字或“几分钟”。",
            placeholder: "例如: 12分钟",
            accept: ["14", "14分钟", "十四分钟"],
            demoSteps: [
              { text: "遇到降温题,先画温度路线:从 22℃ 一路下降,会先到 0℃。", emoji: "🌡️", scene: { type: "thermo", from: 22, to: 0 } },
              { text: "到 0℃ 之后还没结束,题目说继续降到 −6℃,所以要再算第二段。", emoji: "🧊", scene: { type: "thermo", from: 0, to: -6 } },
              { text: "每分钟下降 2℃,所以每一段都用「温度差 ÷ 2」。最后把两段时间合起来。", emoji: "🧮", scene: { type: "clues", items: [
                { head: "第一段", text: "22℃ 到 0℃" },
                { head: "第二段", text: "0℃ 到 −6℃" },
                { head: "合计", text: "两段时间相加" }
              ] } }
            ],
            explain: "从 22℃ 降到 0℃ 需要 22÷2=11 分钟;从 0℃ 继续降到 −6℃ 又需要 6÷2=3 分钟;共 11+3=14 分钟。",
            explainSteps: [
              { text: "别被吓到,BOSS 题就是把简单的步骤连起来。我们分两段算。", emoji: "🧩" },
              { text: "第一段:从 22℃ 降到 0℃,一共要降 22℃,每分钟降 2℃,需要 22 除以 2 等于 11 分钟。", emoji: "1️⃣" },
              { text: "第二段:从 0℃ 降到 −6℃,注意!这段跨进了负数区,但降温幅度就是 6℃,需要 3 分钟。", emoji: "2️⃣" },
              { text: "很多同学错在第二段:0 到 −6 的距离是 6,不是别的。数轴上数格子就明白了。", emoji: "📏" },
              { text: "总时间:11 + 3 = 14 分钟。恭喜你击败第一个 BOSS!", emoji: "🏆" }
            ] }
        }
      ]
    },

    // ================== 英语 ==================
    {
      subject: "english", icon: "📚", title: "英语 · 开口说的第一步", minutes: 45,
      units: [
        {
          name: "单词训练营 · 校园词汇 12 个(点卡片听发音!)",
          blocks: [
            { type: "text", html: "🎧 <b>玩法</b>:点击卡片会<span class='hl'>自动朗读英文</span>并翻面。每个单词跟读 3 遍,学完 12 个再往下走!" },
            { type: "flashcards", words: [
              { word: "classroom", phonetic: "/ˈklɑːsruːm/", cn: "教室", sentence: "Our classroom is big and bright." },
              { word: "library", phonetic: "/ˈlaɪbrəri/", cn: "图书馆", sentence: "I read books in the library." },
              { word: "playground", phonetic: "/ˈpleɪɡraʊnd/", cn: "操场", sentence: "We play football on the playground." },
              { word: "uniform", phonetic: "/ˈjuːnɪfɔːm/", cn: "校服", sentence: "Students wear uniforms at school." },
              { word: "timetable", phonetic: "/ˈtaɪmteɪbl/", cn: "课程表", sentence: "Here is our class timetable." },
              { word: "dictionary", phonetic: "/ˈdɪkʃənri/", cn: "词典", sentence: "Look up new words in the dictionary." },
              { word: "teacher", phonetic: "/ˈtiːtʃə/", cn: "老师", sentence: "Ms. Li is my English teacher." },
              { word: "student", phonetic: "/ˈstjuːdənt/", cn: "学生", sentence: "I am a middle school student." },
              { word: "subject", phonetic: "/ˈsʌbdʒɪkt/", cn: "学科;科目", sentence: "Math is my favorite subject." },
              { word: "science", phonetic: "/ˈsaɪəns/", cn: "科学", sentence: "We have a science lab at school." },
              { word: "history", phonetic: "/ˈhɪstri/", cn: "历史", sentence: "History is very interesting." },
              { word: "homework", phonetic: "/ˈhəʊmwɜːk/", cn: "家庭作业", sentence: "I do my homework every evening." }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 · Be 动词:英语句子的心脏",
          blocks: [
            { type: "lesson", title: "▶ 为什么英语要有三个「是」?", steps: [
              { text: "中文说「我是、你是、他是」,一个「是」走天下。但英语的「是」有三张面孔:am、is、are。", emoji: "🎭" },
              { text: "规则其实很简单:我用 am;单数(他、她、它、一个东西)用 is;你、复数(我们、他们、很多东西)用 are。", emoji: "📐" },
              { text: "口诀:我用 am,你用 are,is 连着他她它;单数名词用 is,复数全部都用 are。", emoji: "🎵" },
              { text: "否定句超简单:Be 后面加 not。She is not a teacher。缩写成 isn't。", emoji: "🚫" },
              { text: "疑问句像翻跟头:把 Be 甩到句子最前面。Is she a teacher? 回答也要用 Be:Yes, she is。", emoji: "🤸" },
              { text: "最大的陷阱:主语是「A 和 B」两个人时,算复数,要用 are!比如 My brother and I are students。", emoji: "⚠️" }
            ] },
            { type: "chant", lines: ["我用 am,你用 are,", "is 连着他、她、它;", "单数名词用 is,", "复数全部都用 are。"] }
          ],
          q: { type: "fill", points: 15, voice: "en",
            q: "下面四个句子里,只有一句语法完全正确。请把完整正确句子抄写出来: ①My brother and I is students. ②The books on the desk is mine. ③Li Ming and his sister are in the library. ④She are my English teacher.",
            placeholder: "请填写完整正确句子",
            accept: ["Li Ming and his sister are in the library.", "Li Ming and his sister are in the library"],
            demoSteps: [
              { text: "做 Be 动词题,第一步不是看选项,而是抓真正的主语。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "Step 1", text: "找主语" },
                { head: "Step 2", text: "判断单数/复数" },
                { head: "Step 3", text: "配 am/is/are" }
              ] } },
              { text: "主语分好类,Be 动词就像自动归队:I 用 am,单数用 is,复数用 are。", emoji: "📦", scene: { type: "match", groups: [
                { head: "am", items: ["I"] },
                { head: "is", items: ["he / she / it", "单数名词"] },
                { head: "are", items: ["you", "we / they", "A and B"] }
              ] } },
              { text: "看到 on the desk、in the library 这类地点短语,别被带跑,它们不是主语。", emoji: "🎭", scene: { type: "clues", items: [
                { head: "真正主语", text: "The books" },
                { head: "修饰地点", text: "on the desk" },
                { head: "判断", text: "books 是复数" }
              ] } }
            ],
            explain: "正确句子是 Li Ming and his sister are in the library. Li Ming and his sister 是两个人(复数)配 are。①错:两个人要用 are;②错:主语 The books 是复数要用 are;④错:She 要用 is。",
            explainSteps: [
              { text: "这道题考的是「找主语」的真功夫,一句一句来。", emoji: "🔍" },
              { text: "A 句主语是 My brother and I,两个人,是复数,应该用 are,错!", emoji: "❌" },
              { text: "B 句有迷惑项:on the desk 只是修饰,真正的主语是 The books,复数,该用 are,错!", emoji: "🎭" },
              { text: "C 句:Li Ming and his sister,两个人用 are,完全正确!", emoji: "✅" },
              { text: "D 句:She 是单数,必须用 is,错。记住:判断 Be 动词,先揪出真正的主语!", emoji: "🎯" }
            ] }
        },
        {
          name: "阅读侦探 · My New School",
          blocks: [
            { type: "text", html: "🕵️ <b>侦探任务</b>:读完短文后有一道<span class='hl'>推理题</span>——答案不会直接写在文中,需要你像侦探一样找线索!可以点 🔊 听全文朗读。" },
            { type: "reading", speakable: true, title: "My New School", paragraphs: [
              "Hello! My name is Li Ming. I am twelve years old. In September, I will be a student at Sunshine Middle School.",
              "My new school is big and beautiful. There are thirty classrooms in the teaching building. The library is next to the playground. There are many interesting books in it. I love reading, so the library is my favorite place.",
              "My favorite subject is science, because it is fun. My sister likes history. She says history is like a time machine.",
              "At my new school, students wear blue uniforms. I think they are cool. I can't wait for the new term!"
            ], tip: "生词提示:September 九月 / teaching building 教学楼 / next to 在…旁边 / time machine 时光机 / term 学期" }
          ],
          q: { type: "fill", points: 15, voice: "en",
            q: "推理题:根据短文,Li Ming 为什么最喜欢图书馆?请用英文或中文简短回答。",
            placeholder: "例如: Because ...",
            accept: ["Because he loves reading.", "because he loves reading", "He loves reading.", "he loves reading", "因为他爱读书", "因为他喜欢阅读", "他爱读书", "他喜欢阅读"],
            mustInclude: [["love reading", "loves reading", "爱读书", "喜欢阅读"]],
            demoSteps: [
              { text: "阅读推理题要像侦探:每个选项都要回原文找证据。", emoji: "🕵️", scene: { type: "clues", items: [
                { head: "so", text: "前因后果" },
                { head: "because", text: "解释原因" },
                { head: "next to", text: "判断位置" }
              ] } },
              { text: "看见 so,就要连起来读:前一句是原因,后一句是结果。", emoji: "🔗", scene: { type: "clues", items: [
                { head: "原因", text: "I love reading" },
                { head: "结果", text: "favorite place" },
                { head: "方法", text: "因果要匹配" }
              ] } },
              { text: "不要只找相同单词,还要判断意思有没有被偷换:boring、in、doesn't like 都要核对。", emoji: "⚠️", scene: { type: "emoji", emoji: "🧭" } }
            ],
            explain: "原文说 I love reading, so the library is my favorite place——因为爱读书,所以最爱图书馆。推理题要抓住 so 连接的因果关系。",
            explainSteps: [
              { text: "推理题的秘诀:每个选项都回原文找证据,不能凭感觉。", emoji: "🕵️" },
              { text: "A 选项:原文说姐姐觉得历史像时光机,这是喜欢,不是无聊,错!", emoji: "❌" },
              { text: "B 选项:原文有一个关键词 so——I love reading, so the library is my favorite place。「因为爱读书,所以最爱图书馆」,因果关系完全吻合,对!", emoji: "🔗" },
              { text: "C 选项:原文说 The library is next to the playground,在操场旁边,不在教学楼里,错。", emoji: "📍" },
              { text: "D 选项:他说校服 cool(很酷),是喜欢,错。看到了吗?连词 so、because 就是阅读理解的藏宝图!", emoji: "🗺️" }
            ] }
        }
      ]
    },

    // ================== 语文 ==================
    {
      subject: "chinese", icon: "📝", title: "语文 · 声音与诗心", minutes: 40,
      units: [
        {
          name: "动画课堂 · 多音字的密码:据义定音",
          blocks: [
            { type: "lesson", title: "▶ 「和」字居然有 5 种读音?", steps: [
              { text: "「和」是汉语里的变音大王:和平的 hé,应和的 hè,和面的 huó,和药的 huò,还有打麻将的 hú!", emoji: "🀄" },
              { text: "怎么记?密码只有四个字:据义定音——先想意思,再定读音。", emoji: "🔑" },
              { text: "「应和」的意思是声音相互呼应,一唱一和,这时读第四声 hè。", emoji: "🎶" },
              { text: "初一还有一批易错字音:确凿的凿读 záo,菜畦的畦读 qí,酝酿的酿读 niàng,贮蓄的贮读 zhù。", emoji: "📚" },
              { text: "易错字形也用理解法记:「翻来覆去」的覆是翻转,和覆盖同字;「人声鼎沸」的鼎是大锅,人声像锅里的水沸腾。", emoji: "🍲" }
            ] }
          ],
          q: { type: "fill", points: 10, voice: "zh",
            q: "户外音乐会上,歌手唱一句,观众跟着唱一句,记者写道:「台下观众纷纷应和,人声鼎沸。」这里「和」应该读什么?请写拼音,也可以写出一个同读音词语。",
            placeholder: "例如: he / 曲高和寡",
            accept: ["hè", "he", "四声he", "第四声he", "曲高和寡"],
            demoSteps: [
              { text: "多音字不要硬背,先看意思。这个方法叫「据义定音」。", emoji: "🔑", scene: { type: "char", char: "和", pinyins: ["hé", "hè", "huó", "huò", "hú"], highlight: 1 } },
              { text: "如果是声音相互呼应、跟着唱,「和」就读 hè。", emoji: "🎵", scene: { type: "clues", items: [
                { head: "歌手唱", text: "一句" },
                { head: "观众跟", text: "一句" },
                { head: "含义", text: "呼应、跟唱" }
              ] } },
              { text: "再回到选项里找同样意思的词,读音就能锁定。", emoji: "🎯", scene: { type: "char", char: "和", pinyins: ["平和", "跟唱", "掺合", "和面"], highlight: 1 } }
            ],
            explain: "「应和」与「曲高和寡」的「和」都是「跟着唱、呼应」的意思,读 hè。据义定音:和平/风和日丽读 hé,而跟唱呼应义读 hè。",
            explainSteps: [
              { text: "先用密码「据义定音」:观众跟着歌手唱,这是呼应、跟唱的意思,所以「应和」读 hè。", emoji: "🔑" },
              { text: "再看选项:「曲高和寡」意思是曲调太高雅,能跟着唱的人很少——这个「和」也是跟唱,同样读 hè!", emoji: "🎵" },
              { text: "「和平共处」「风和日丽」的和是平和的意思,读 hé。", emoji: "🕊️" },
              { text: "「和衣而卧」指穿着衣服睡觉,读 hé。", emoji: "😴" },
              { text: "所以答案是「曲高和寡」。学多音字不用死记,想清楚意思,读音自然就对了。", emoji: "🎯" }
            ] }
        },
        {
          name: "动画课堂 · 《观沧海》:一首诗里的野心",
          blocks: [
            { type: "lesson", title: "▶ 曹操登山看海,看出了什么?", steps: [
              { text: "公元 207 年,53 岁的曹操北征乌桓得胜归来,路过碣石山,登山观海,写下这首《观沧海》。", emoji: "⛰️" },
              { text: "前面几句写实景:水何澹澹,山岛竦峙,树木丛生,秋风萧瑟,洪波涌起——大海在他眼前翻腾。", emoji: "🌊" },
              { text: "然后奇迹发生了:日月之行,若出其中;星汉灿烂,若出其里。", emoji: "🌌" },
              { text: "太阳月亮的运行、灿烂的银河,好像都从这片大海中升起——这还是眼睛看到的景象吗?不,这是想象!", emoji: "💭" },
              { text: "曹操把大海写得能吞吐日月星辰,其实是在说:我的胸怀,也装得下整个天下。这种手法叫「借景抒情」。", emoji: "❤️‍🔥" },
              { text: "记住这个公式:眼前的景 + 心中的情 = 千古名句。初中古诗鉴赏,一半都在考它。", emoji: "🧮" }
            ] },
            { type: "reading", title: "观沧海 · [东汉] 曹操", paragraphs: [
              "东临碣石,以观沧海。水何澹澹,山岛竦峙。",
              "树木丛生,百草丰茂。秋风萧瑟,洪波涌起。",
              "日月之行,若出其中;星汉灿烂,若出其里。",
              "幸甚至哉,歌以咏志。"
            ], tip: "碣石 jié shí(山名) / 澹澹 dàn dàn(水波荡漾) / 竦峙 sǒng zhì(耸立) / 星汉(银河)" }
          ],
          q: { type: "choice", points: 10, voice: "zh",
            q: "深度思考:「日月之行,若出其中」明明不是真实景象(太阳月亮不可能从这片海里升起),曹操为什么要这样写?",
            options: [
              "他年纪大了,看错了",
              "用夸张的想象表现大海的壮阔,寄托自己吞吐天下的雄心",
              "古人不懂天文,以为日月真的从海里升起",
              "为了押韵,随便写的"
            ], answer: 1,
            demoSteps: [
              { text: "古诗鉴赏先分清两层:眼前看到的景,和心里涌起的情。", emoji: "🌊", scene: { type: "sea", phase: "sun" } },
              { text: "诗人写日月星辰好像从海里出来,这是想象和夸张,不是自然课记录。", emoji: "🌌", scene: { type: "sea", phase: "stars" } },
              { text: "遇到这种句子,就问:诗人为什么要把景写得这么大?它往往在托起心中的志向。", emoji: "❤️", scene: { type: "clues", items: [
                { head: "景", text: "大海壮阔" },
                { head: "法", text: "夸张想象" },
                { head: "情", text: "胸怀志向" }
              ] } }
            ],
            explain: "这是全诗的点睛之笔:借想象中的大海吞吐日月星辰,抒发统一天下的壮志,即「借景抒情」。诗人写的不是眼睛看到的,而是心里装着的。",
            explainSteps: [
              { text: "好诗往往「说一物,指另一物」。曹操写海,真的只是写海吗?", emoji: "🤔" },
              { text: "他刚打了大胜仗,天下统一近在眼前,此刻心潮澎湃,和眼前翻腾的大海产生了共鸣。", emoji: "🌊" },
              { text: "于是他放飞想象:这片海大到能吞吐日月、容纳银河——其实是在说,我的抱负也这么大!", emoji: "🌌" },
              { text: "所以答案是 B:夸张的想象 + 借景抒情。景是外壳,情才是内核。", emoji: "🎯" },
              { text: "以后读古诗,先问自己:诗人此刻是什么处境、什么心情?读懂了人,就读懂了诗。", emoji: "❤️" }
            ] }
        },
        {
          name: "今日彩蛋 · 名著打卡",
          blocks: [
            { type: "rule", title: "📖 睡前 20 分钟名著时间", html: "初一必读第一本:<b>《朝花夕拾》</b>(鲁迅回忆童年的散文集,共 10 篇)。<br><b>今晚具体篇目:</b>《从百草园到三味书屋》。阅读目标:找出文中写童年乐趣的三个细节,明天的语文题会从这里出彩蛋。" },
            { type: "foldableReading", title: "《从百草园到三味书屋》节选 · 默认折叠", summary: "点这里展开正文",
              paragraphs: [
                "我家的后面有一个很大的园,相传叫作百草园。现在是早已并屋子一起卖给朱文公的子孙了,连那最末次的相见也已经隔了七八年,其中似乎确凿只有一些野草;但那时却是我的乐园。",
                "不必说碧绿的菜畦,光滑的石井栏,高大的皂荚树,紫红的桑椹;也不必说鸣蝉在树叶里长吟,肥胖的黄蜂伏在菜花上,轻捷的叫天子忽然从草间直窜向云霄里去了。",
                "单是周围的短短的泥墙根一带,就有无限趣味。油蛉在这里低唱,蟋蟀们在这里弹琴。翻开断砖来,有时会遇见蜈蚣;还有斑蝥,倘若用手指按住它的脊梁,便会拍的一声,从后窍喷出一阵烟雾。",
                "何首乌藤和木莲藤缠络着,木莲有莲房一般的果实,何首乌有臃肿的根。有人说,何首乌根是有像人形的,吃了便可以成仙,我于是常常拔它起来,牵连不断地拔起来,也曾因此弄坏了泥墙,却从来没有见过有一块根像人样。",
                "如果不怕刺,还可以摘到覆盆子,像小珊瑚珠攒成的小球,又酸又甜,色味都比桑椹要好得远。"
              ],
              tip: "阅读打卡:圈出 3 个表示颜色或声音的词,再写一句话:为什么鲁迅说百草园是“我的乐园”?"
            }
          ],
          q: null
        }
      ]
    },

    // ================== 历史 ==================
    {
      subject: "history", icon: "🏺", title: "历史 · 我们从哪里来", minutes: 25,
      units: [
        {
          name: "动画课堂 · 房子里藏着的大智慧",
          blocks: [
            { type: "lesson", title: "▶ 一百七十万年的故事,从一颗牙齿讲起", steps: [
              { text: "1965 年,云南元谋,考古学家挖出两颗古人类门齿——距今约 170 万年,这就是我国已知最早的古人类:元谋人。", emoji: "🦷" },
              { text: "再看北京周口店,距今约 70 万年的北京人已经会使用天然火:取暖、烧烤、驱赶野兽。", emoji: "🔥" },
              { text: "又过了几十万年,人类学会了种地,定居下来。有意思的事情来了——", emoji: "🌾" },
              { text: "长江边的河姆渡人,种水稻,住干栏式房屋:房子架在木桩上,悬空!", emoji: "🏠" },
              { text: "黄河边的半坡人,种粟(小米),住半地穴式房屋:房子挖进地下半截!", emoji: "🕳️" },
              { text: "同一个时代,为什么房子的差别这么大?先自己想 10 秒,再做下面这道题。", emoji: "🤔" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "思考题:河姆渡人把房子架空(干栏式),半坡人把房子挖进地下(半地穴式),造成这种差别的根本原因是什么?",
            options: [
              "两地人审美不同,喜欢的样式不一样",
              "河姆渡人技术更先进,会建更复杂的房子",
              "南方潮湿多雨需要防潮通风,北方寒冷干燥需要保暖防寒",
              "半坡人比较穷,建不起高房子"
            ], answer: 2,
            demoSteps: [
              { text: "历史题要追问:同一个时代,为什么生活方式不一样?先看自然环境。", emoji: "❓", scene: { type: "house" } },
              { text: "南方潮湿多雨,房子架起来更容易防潮通风;北方冬天冷,半地穴式更容易保暖。", emoji: "🏠", scene: { type: "clues", items: [
                { head: "南方", text: "潮湿多雨" },
                { head: "干栏式", text: "防潮通风" },
                { head: "北方", text: "寒冷干燥" }
              ] } },
              { text: "所以答题时不要选表面原因,要找能同时解释两种房子的根本原因。", emoji: "🔑", scene: { type: "house" } }
            ],
            explain: "自然环境决定生活方式:长江流域潮湿多雨,架空的干栏式可防潮防虫;黄河流域寒冷干燥,半地穴式冬暖夏凉。同理,南方水多种水稻,北方干旱种粟。",
            explainSteps: [
              { text: "历史不是死记硬背,而是问一个字:为什么?", emoji: "❓" },
              { text: "河姆渡在长江流域,气候潮湿多雨,房子贴地就会发霉、进水、生虫,所以架空——干栏式,通风又防潮。", emoji: "🌧️" },
              { text: "半坡在黄河流域,冬天寒冷干燥,把房子挖进地下半截,土层就像天然棉被,冬暖夏凉。", emoji: "❄️" },
              { text: "连种的粮食都是同一个道理:南方水多种水稻,北方缺水种耐旱的粟。", emoji: "🌾" },
              { text: "记住这把万能钥匙:自然环境决定生活方式。以后学地理、学历史,处处用得上!", emoji: "🔑" }
            ] }
        }
      ]
    }
  ]
};
