// ============ 第 1 天 ============
// 数学:分数运算复习 & 认识负数(约 75 分钟)
// 英语:校园词汇 & Be 动词(约 75 分钟)
// 做题 + 对答案:约 40-60 分钟
window.DAYS = window.DAYS || {};

window.DAYS[1] = {
  day: 1,
  title: "第 1 天 · 开营第一课",
  estimate: "学习约 150 分钟 + 做题约 50 分钟",
  sections: [
    // ================== 数学 第一部分 ==================
    {
      subject: "math",
      icon: "🔢",
      title: "数学 Part 1 · 分数运算大复习",
      minutes: 35,
      blocks: [
        { type: "text", html: "欢迎来到暑假冲刺营的第一天!🎉 初一数学的第一章是<span class='hl'>有理数</span>,它需要非常扎实的分数运算基础。所以今天我们先把六年级最重要的分数运算复习一遍,再去认识一位新朋友——<span class='hl'>负数</span>。" },
        {
          type: "rule", title: "📌 知识点 1:分数加减法",
          html: "<div class='formula'>同分母:分母不变,分子相加减</div><div class='formula'>异分母:先通分,再相加减</div>通分就是把两个分数变成分母相同的分数,通常用两个分母的<b>最小公倍数</b>作为公分母。"
        },
        {
          type: "example",
          q: "例题 1:计算 1/2 + 1/3",
          steps: "2 和 3 的最小公倍数是 6,通分得:1/2 = 3/6,1/3 = 2/6<br>所以 1/2 + 1/3 = 3/6 + 2/6 = <b class='ex-ans'>5/6</b>"
        },
        {
          type: "example",
          q: "例题 2:计算 5/6 − 1/4",
          steps: "6 和 4 的最小公倍数是 12,通分得:5/6 = 10/12,1/4 = 3/12<br>所以 5/6 − 1/4 = 10/12 − 3/12 = <b class='ex-ans'>7/12</b>"
        },
        {
          type: "rule", title: "📌 知识点 2:分数乘除法",
          html: "<div class='formula'>乘法:分子乘分子,分母乘分母</div><div class='formula'>除法:除以一个数 = 乘这个数的倒数</div>计算前先<b>约分</b>,数字会小很多,不容易算错!"
        },
        {
          type: "example",
          q: "例题 3:计算 3/4 × 8/9",
          steps: "先约分:3 和 9 约去 3,4 和 8 约去 4<br>3/4 × 8/9 = (1×2)/(1×3) = <b class='ex-ans'>2/3</b>"
        },
        {
          type: "example",
          q: "例题 4:计算 2/5 ÷ 4/15",
          steps: "除以 4/15 等于乘 15/4:<br>2/5 × 15/4 = (2×15)/(5×4) = 30/20,约分后 = <b class='ex-ans'>3/2(即 1 又 1/2)</b>"
        },
        { type: "text", html: "💡 <b>小口诀</b>:加减先通分,乘法先约分,除法翻个身(变成乘倒数)。记住它,分数运算就不怕啦!" }
      ]
    },

    // ================== 数学 第二部分 ==================
    {
      subject: "math",
      icon: "🌡️",
      title: "数学 Part 2 · 认识负数(初一预习)",
      minutes: 40,
      blocks: [
        { type: "text", html: "生活中有很多<span class='hl'>相反意义的量</span>:零上 3℃ 和零下 3℃、收入 100 元和支出 100 元、地上 5 楼和地下 1 楼……只用我们学过的数(正数和 0)不够表达了,于是数学家发明了<span class='hl'>负数</span>。" },
        { type: "thermometer" },
        {
          type: "rule", title: "📌 知识点 1:正数与负数",
          html: "<div class='formula'>比 0 大的数叫 <b>正数</b>,如 +3、5、1.8</div><div class='formula'>在正数前面加上「−」号的数叫 <b>负数</b>,如 −3、−0.5</div><b>0 既不是正数,也不是负数</b>,它是正负数的分界线!正数前面的「+」通常省略不写,+3 和 3 是同一个数。"
        },
        {
          type: "rule", title: "📌 知识点 2:数轴",
          html: "规定了<b>原点、正方向、单位长度</b>的直线叫做<b>数轴</b>。<div class='formula'>原点右边是正数,原点左边是负数</div>在数轴上,<b>越往右的数越大,越往左的数越小</b>。所以任何负数都小于 0,也小于任何正数。"
        },
        { type: "numberline" },
        {
          type: "example",
          q: "例题 1:如果向东走 50 米记作 +50 米,那么向西走 30 米记作什么?",
          steps: "向东和向西是相反意义的量。向东为正,则向西为负。<br>向西走 30 米记作 <b class='ex-ans'>−30 米</b>"
        },
        {
          type: "example",
          q: "例题 2:比较大小:−5 和 −2 哪个大?",
          steps: "在数轴上,−2 在 −5 的右边,越往右越大。<br>所以 <b class='ex-ans'>−2 &gt; −5</b>。(小技巧:两个负数,「数字部分」越大的反而越小!)"
        },
        { type: "text", html: "💡 <b>易错提醒</b>:很多同学以为 −5 比 −2 大,因为 5 比 2 大。记住负数是「欠债」,欠 5 元比欠 2 元更穷!😄" }
      ]
    },

    // ================== 英语 第一部分 ==================
    {
      subject: "english",
      icon: "📚",
      title: "英语 Part 1 · 校园词汇 12 连发",
      minutes: 30,
      blocks: [
        { type: "text", html: "初中校园生活即将开始!先掌握 12 个<span class='hl'>校园高频单词</span>。点击卡片可以翻面查看中文和例句,每个单词大声朗读 3 遍,再试着默写一遍。" },
        {
          type: "flashcards",
          words: [
            { word: "classroom", phonetic: "/ˈklɑːsruːm/", cn: "教室", sentence: "Our classroom is big and bright." },
            { word: "teacher", phonetic: "/ˈtiːtʃə/", cn: "老师", sentence: "Ms. Li is my English teacher." },
            { word: "student", phonetic: "/ˈstjuːdənt/", cn: "学生", sentence: "I am a middle school student." },
            { word: "subject", phonetic: "/ˈsʌbdʒɪkt/", cn: "学科;科目", sentence: "Math is my favorite subject." },
            { word: "science", phonetic: "/ˈsaɪəns/", cn: "科学", sentence: "We have a science lab at school." },
            { word: "history", phonetic: "/ˈhɪstri/", cn: "历史", sentence: "History is very interesting." },
            { word: "library", phonetic: "/ˈlaɪbrəri/", cn: "图书馆", sentence: "I read books in the library." },
            { word: "playground", phonetic: "/ˈpleɪɡraʊnd/", cn: "操场", sentence: "We play football on the playground." },
            { word: "uniform", phonetic: "/ˈjuːnɪfɔːm/", cn: "校服", sentence: "Students wear uniforms at school." },
            { word: "timetable", phonetic: "/ˈtaɪmteɪbl/", cn: "课程表", sentence: "Here is our class timetable." },
            { word: "homework", phonetic: "/ˈhəʊmwɜːk/", cn: "家庭作业", sentence: "I do my homework every evening." },
            { word: "dictionary", phonetic: "/ˈdɪkʃənri/", cn: "词典", sentence: "Look up new words in the dictionary." }
          ]
        },
        { type: "text", html: "✍️ <b>学习任务</b>:在草稿纸上把 12 个单词各抄写 2 遍并默写 1 遍。默写不出来的单词,再翻卡片复习一次。等会儿做题要考哦!" }
      ]
    },

    // ================== 英语 第二部分 ==================
    {
      subject: "english",
      icon: "✨",
      title: "英语 Part 2 · Be 动词三兄弟",
      minutes: 25,
      blocks: [
        { type: "text", html: "Be 动词(am / is / are)是英语句子的「骨架」,初中英语几乎每节课都会用到。它的意思是「是;在;处于某种状态」,不同的主语要搭配不同的 Be 动词。" },
        {
          type: "rule", title: "📌 Be 动词搭配规则",
          html: "<div class='formula'>I → am&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;he / she / it / 单数名词 → is&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;you / we / they / 复数名词 → are</div>"
        },
        {
          type: "chant",
          lines: ["我用 am,你用 are,", "is 连着他、她、它;", "单数名词用 is,", "复数全部都用 are。"]
        },
        {
          type: "example",
          q: "例句观察:找出下面句子里的 Be 动词",
          steps: "I <b>am</b> a student.(我是一名学生)<br>She <b>is</b> my English teacher.(她是我的英语老师)<br>They <b>are</b> in the library.(他们在图书馆)<br>The books <b>are</b> on the desk.(书在桌子上)"
        },
        {
          type: "rule", title: "📌 否定句与疑问句",
          html: "<div class='formula'>否定句:Be 动词后面加 not</div>She is <b>not</b> (isn't) a teacher.<div class='formula'>一般疑问句:Be 动词提到句首</div><b>Is</b> she a teacher? — Yes, she is. / No, she isn't."
        },
        { type: "text", html: "💡 <b>易错提醒</b>:主语是 <b>my brother</b>(单数名词)用 is;主语是 <b>my brothers</b>(复数)就要用 are。判断 Be 动词,关键看主语是「一个」还是「多个」!" }
      ]
    },

    // ================== 英语 第三部分 ==================
    {
      subject: "english",
      icon: "📖",
      title: "英语 Part 3 · 阅读理解:My New School",
      minutes: 20,
      blocks: [
        { type: "text", html: "把刚学的单词和 Be 动词用起来!认真读下面的短文,<span class='hl'>不认识的单词先猜意思</span>,读完后等会儿做题时有 3 道阅读题。" },
        {
          type: "reading",
          title: "My New School",
          paragraphs: [
            "Hello! My name is Li Ming. I am twelve years old. In September, I will be a student at Sunshine Middle School.",
            "My new school is big and beautiful. There are thirty classrooms in the teaching building. The library is next to the playground. There are many interesting books in it. I love reading, so the library is my favorite place.",
            "My favorite subject is science, because it is fun. My sister likes history. She says history is like a time machine.",
            "At my new school, students wear blue uniforms. I think they are cool. I can't wait for the new term!"
          ],
          tip: "生词提示:September 九月 / teaching building 教学楼 / next to 在…旁边 / time machine 时光机 / term 学期"
        },
        { type: "text", html: "📝 <b>读完自查</b>:李明多大了?他最喜欢的科目是什么?图书馆在哪里?——如果都能回答上来,恭喜你,阅读过关!" }
      ]
    }
  ],

  // ================== 测验题 ==================
  quiz: [
    // ---- 数学:分数运算(每题 5 分) ----
    { subject: "math", type: "choice", points: 5,
      q: "计算:2/7 + 3/7 = ?",
      options: ["5/14", "5/7", "6/7", "1"],
      answer: 1,
      explain: "同分母分数相加,分母不变,分子相加:2 + 3 = 5,结果是 5/7。" },
    { subject: "math", type: "choice", points: 5,
      q: "计算:1/2 + 1/6 = ?",
      options: ["2/8", "1/3", "2/3", "4/6"],
      answer: 2,
      explain: "通分:1/2 = 3/6,3/6 + 1/6 = 4/6,约分后 = 2/3。" },
    { subject: "math", type: "choice", points: 5,
      q: "计算:3/5 × 5/6 = ?",
      options: ["1/2", "3/6", "8/11", "15/30"],
      answer: 0,
      explain: "先约分:5 和 5 约掉,3 和 6 约成 1 和 2,结果 = 1/2。(15/30 没约分,不是最简结果)" },
    { subject: "math", type: "choice", points: 5,
      q: "计算:4/9 ÷ 2/3 = ?",
      options: ["8/27", "2/3", "3/2", "6"],
      answer: 1,
      explain: "除以 2/3 = 乘 3/2:4/9 × 3/2 = 12/18 = 2/3。" },
    { subject: "math", type: "fill", points: 5,
      q: "计算:5/8 − 1/4 = ?(请写最简分数,格式如 3/8)",
      accept: ["3/8"],
      explain: "通分:1/4 = 2/8,5/8 − 2/8 = 3/8。" },
    // ---- 数学:负数(每题 5 分) ----
    { subject: "math", type: "choice", points: 5,
      q: "下列说法正确的是?",
      options: ["0 是正数", "0 是负数", "0 既不是正数也不是负数", "−0.5 不是负数"],
      answer: 2,
      explain: "0 是正数和负数的分界线,既不是正数也不是负数。−0.5 在 0 的左边,是负数。" },
    { subject: "math", type: "choice", points: 5,
      q: "如果收入 200 元记作 +200 元,那么支出 80 元记作?",
      options: ["+80 元", "−80 元", "80 元", "−200 元"],
      answer: 1,
      explain: "收入和支出是相反意义的量,收入为正,支出就为负,记作 −80 元。" },
    { subject: "math", type: "choice", points: 5,
      q: "下列比较正确的是?",
      options: ["−5 > −2", "−1 > 0", "−3 < −7", "−2 > −6"],
      answer: 3,
      explain: "数轴上越往右越大:−2 在 −6 的右边,所以 −2 > −6。负数比较:数字部分越大的反而越小。" },
    { subject: "math", type: "choice", points: 5,
      q: "在数轴上,位于原点左边 3 个单位长度的点表示的数是?",
      options: ["3", "−3", "+3", "0"],
      answer: 1,
      explain: "原点左边是负数,距离原点 3 个单位,表示 −3。" },
    { subject: "math", type: "fill", points: 5,
      q: "把下面各数中的负数找出来:+7,−3,0,2.5,−0.8,10(填负数的个数,如:3)",
      accept: ["2", "2个", "两个"],
      explain: "负数是带「−」号的数:−3 和 −0.8,共 2 个。0 既不是正数也不是负数。" },

    // ---- 英语:词汇(每题 4 分) ----
    { subject: "english", type: "choice", points: 4,
      q: "「图书馆」的英文是?",
      options: ["playground", "library", "classroom", "uniform"],
      answer: 1,
      explain: "library 图书馆;playground 操场;classroom 教室;uniform 校服。" },
    { subject: "english", type: "choice", points: 4,
      q: "Math is my favorite ______.(学科)",
      options: ["subject", "student", "homework", "timetable"],
      answer: 0,
      explain: "subject 学科、科目。「数学是我最喜欢的科目。」" },
    { subject: "english", type: "fill", points: 4,
      q: "根据中文写单词:校服 → u________(写出完整单词)",
      accept: ["uniform"],
      explain: "uniform /ˈjuːnɪfɔːm/ 校服。Students wear uniforms at school." },
    { subject: "english", type: "fill", points: 4,
      q: "根据中文写单词:家庭作业 → h________(写出完整单词)",
      accept: ["homework"],
      explain: "homework /ˈhəʊmwɜːk/ 家庭作业,不可数名词,没有复数形式哦。" },
    // ---- 英语:Be 动词(每题 5 分) ----
    { subject: "english", type: "choice", points: 5,
      q: "I ______ a middle school student.",
      options: ["am", "is", "are", "be"],
      answer: 0,
      explain: "主语是 I,搭配 am。口诀:我用 am。" },
    { subject: "english", type: "choice", points: 5,
      q: "She ______ my English teacher.",
      options: ["am", "is", "are", "be"],
      answer: 1,
      explain: "主语是 She(第三人称单数),搭配 is。" },
    { subject: "english", type: "choice", points: 5,
      q: "The books ______ on the desk.",
      options: ["am", "is", "are", "be"],
      answer: 2,
      explain: "主语 The books 是复数名词,搭配 are。" },
    { subject: "english", type: "choice", points: 5,
      q: "______ your sister a doctor? — No, she ______.",
      options: ["Is; is", "Is; isn't", "Are; isn't", "Am; is"],
      answer: 1,
      explain: "主语 your sister 是单数,疑问句把 Is 提到句首;回答 No 时用 isn't。" },
    { subject: "english", type: "fill", points: 5,
      q: "改为否定句:They are in the library. → They ______ in the library.(填两个单词或缩写)",
      accept: ["are not", "aren't", "arent"],
      explain: "Be 动词否定句直接在后面加 not:are not,缩写为 aren't。" },
    // ---- 英语:阅读理解(每题 3 分) ----
    { subject: "english", type: "choice", points: 3,
      q: "【阅读】How old is Li Ming?",
      options: ["Eleven.", "Twelve.", "Thirteen.", "Ten."],
      answer: 1,
      explain: "原文第一段:I am twelve years old.(我 12 岁)" },
    { subject: "english", type: "choice", points: 3,
      q: "【阅读】Where is the library?",
      options: ["Next to the playground.", "In the teaching building.", "Behind the classroom.", "Near the gate."],
      answer: 0,
      explain: "原文第二段:The library is next to the playground.(图书馆在操场旁边)" },
    { subject: "english", type: "choice", points: 3,
      q: "【阅读】What is Li Ming's favorite subject?",
      options: ["History.", "Math.", "Science.", "English."],
      answer: 2,
      explain: "原文第三段:My favorite subject is science.(他最喜欢科学,喜欢历史的是他姐姐)" }
  ]
};
