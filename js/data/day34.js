// ============ 第 34 关 ============
window.DAYS = window.DAYS || {};

window.DAYS[34] = {
  day: 34,
  title: "第 34 关 · 找规律",
  estimate: "四科约 2~3 小时 · 共 7 道思考题(含 1 道 BOSS 题)",
  sections: [
    // ================== 数学 ==================
    {
      subject: "math", icon: "🔢", title: "数学 · 找规律专题", minutes: 50,
      units: [
        {
          name: "动画课堂 1 · 数字规律:看差看比看位置",
          blocks: [
            { type: "lesson", title: "▶ 一列数,藏着什么规律", steps: [
              { text: "找规律是中考的常客,也是最能体现「数学眼光」的题。给你一列数,找出它的规律,写出第 n 个。", emoji: "🔍" },
              { text: "第一招看「差」:相邻两数差多少?2, 5, 8, 11...每次加 3,是等差规律,第 n 个 = 3n − 1。", emoji: "➕", scene: { type: "clues", items: [
                { head: "看差", text: "5−2=3, 8−5=3" },
                { head: "等差", text: "每次加 3" },
                { head: "第 n 个", text: "3n − 1" }
              ] } },
              { text: "第二招看「比」:相邻两数倍数关系?2, 4, 8, 16...每次乘 2,第 n 个 = 2ⁿ。", emoji: "✖️" },
              { text: "第三招看「位置」:把序号和数放一起对照。1→1, 2→4, 3→9, 4→16... 发现是序号的平方 n²!", emoji: "📊", scene: { type: "clues", items: [
                { head: "1→1", text: "1²" },
                { head: "2→4", text: "2²" },
                { head: "n→", text: "n²" }
              ] } },
              { text: "找规律口诀:先看差(加几),再看比(乘几),对照位置找关系。列个表,规律自己会「跳」出来!", emoji: "🎯" }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 2 · 图形规律:数出个数的公式",
          blocks: [
            { type: "lesson", title: "▶ 从图形到代数式", steps: [
              { text: "图形找规律:一堆火柴、一串小圆点越摆越多,问第 n 个图形有多少。方法是「数—列表—找关系」。", emoji: "🔲" },
              { text: "关键动作:数出前几个图形的数量,列成表,再看数量和序号 n 的关系。", emoji: "📋", scene: { type: "clues", items: [
                { head: "第1个", text: "数出数量" },
                { head: "第2个", text: "数出数量" },
                { head: "找关系", text: "与 n 的公式" }
              ] } },
              { text: "例:小棒摆正方形,1 个用 4 根,2 个(共边)用 7 根,3 个用 10 根...每次加 3。第 n 个 = 3n + 1。", emoji: "🔢", scene: { type: "clues", items: [
                { head: "1 个", text: "4 = 3×1+1" },
                { head: "2 个", text: "7 = 3×2+1" },
                { head: "n 个", text: "3n + 1" }
              ] } },
              { text: "验证公式:代回去看对不对。n=1 时 3×1+1=4 ✓,n=2 时 3×2+1=7 ✓,公式就对了。", emoji: "✅" },
              { text: "口诀:图形规律先数数,列个表格找关系;写出含 n 的式子,代回验证准没错!", emoji: "🎯" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "观察一列数:1, 4, 7, 10, 13, ... 按此规律,第 n 个数用含 n 的式子表示是:",
            options: ["3n", "3n − 2", "3n + 1", "n + 3"], answer: 1,
            demoSteps: [
              { text: "先看差:每次加几?再把序号和数对照列表。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "1→1", text: "第1个是 1" },
                { head: "2→4", text: "每次+3" },
                { head: "试 3n?", text: "对照修正" }
              ] } },
              { text: "每次加 3,和 3n 有关。第 1 个 3×1=3,但实际是 1,差了 2,所以 3n − 2。", emoji: "🧮" }
            ],
            explain: "B 正确。每次加 3,规律和 3n 有关。第 1 个:3×1−2=1;第 2 个:3×2−2=4;第 n 个 = 3n − 2。",
            explainSteps: [
              { text: "相邻差 3,先猜 3n;但 3×1=3 比实际的 1 大 2。", emoji: "🔍" },
              { text: "修正:3n − 2。验证:n=1→1,n=2→4,n=3→7,全对!", emoji: "✅" },
              { text: "选 B。找规律先看差定「3n」,再对照第一项修正常数,万无一失!", emoji: "🎯" }
            ] }
        },
        {
          name: "🔥 BOSS 挑战 · 摆小旗",
          blocks: [
            { type: "text", html: "💪 <b>BOSS 战规则</b>:图形找规律的经典题!数一数、列个表、找公式,再算第 100 个。草稿纸准备!" }
          ],
          q: { type: "fill", points: 20, boss: true, voice: "zh",
            q: "用棋子摆图案:第 1 个图案用 3 颗,第 2 个用 5 颗,第 3 个用 7 颗……每个比前一个多 2 颗。请问第 100 个图案用多少颗棋子?(先找规律 2n+1,再代入,直接填数字)",
            placeholder: "例如: 21",
            accept: ["201", "201颗", "二百零一"],
            demoSteps: [
              { text: "先找规律:3, 5, 7...每次加 2。第 n 个 = 2n + 1。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "第1个", text: "3 = 2×1+1" },
                { head: "第n个", text: "2n + 1" },
                { head: "第100个", text: "2×100+1" }
              ] } },
              { text: "把 n = 100 代入 2n + 1。", emoji: "🧮" }
            ],
            explain: "规律:第 n 个 = 2n + 1。第 100 个 = 2×100 + 1 = 201 颗。",
            explainSteps: [
              { text: "找规律:3=2·1+1,5=2·2+1,第 n 个 = 2n+1。", emoji: "🔍" },
              { text: "代入 n=100:2×100+1 = 201 颗!", emoji: "✅" },
              { text: "找规律的威力:不用真摆 100 个,一个公式就预言了答案。这就是代数的魔力!", emoji: "🏆" }
            ] }
        }
      ]
    },

    // ================== 英语 ==================
    {
      subject: "english", icon: "📚", title: "英语 · 写作:自我介绍 My Life", minutes: 45,
      units: [
        {
          name: "单词训练营 · 介绍自己 12 个(点卡片听发音!)",
          blocks: [
            { type: "text", html: "🎧 今天的词帮你<span class='hl'>介绍自己</span>!学完就能写一篇 My Life。点卡片听发音,跟读 3 遍。" },
            { type: "flashcards", words: [
              { word: "myself", phonetic: "/maɪˈself/", cn: "我自己", sentence: "Let me introduce myself." },
              { word: "old", phonetic: "/əʊld/", cn: "…岁的", sentence: "I am twelve years old." },
              { word: "grade", phonetic: "/ɡreɪd/", cn: "年级", sentence: "I am in Grade Seven." },
              { word: "hobby", phonetic: "/ˈhɒbi/", cn: "爱好", sentence: "My hobby is reading." },
              { word: "favourite", phonetic: "/ˈfeɪvərɪt/", cn: "最喜爱的", sentence: "My favourite subject is math." },
              { word: "family", phonetic: "/ˈfæmɪli/", cn: "家庭", sentence: "There are four people in my family." },
              { word: "dream", phonetic: "/driːm/", cn: "梦想", sentence: "My dream is to be a teacher." },
              { word: "usually", phonetic: "/ˈjuːʒuəli/", cn: "通常", sentence: "I usually get up at six." },
              { word: "enjoy", phonetic: "/ɪnˈdʒɔɪ/", cn: "喜欢;享受", sentence: "I enjoy playing football." },
              { word: "future", phonetic: "/ˈfjuːtʃə/", cn: "未来", sentence: "In the future, I want to travel." },
              { word: "good at", phonetic: "/ɡʊd æt/", cn: "擅长", sentence: "I am good at English." },
              { word: "friendly", phonetic: "/ˈfrendli/", cn: "友好的", sentence: "I am a friendly girl." }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 · 自我介绍:综合运用四时态",
          blocks: [
            { type: "lesson", title: "▶ 过去、现在、将来一起用", steps: [
              { text: "写自我介绍(My Life),正好把学过的时态都用上:过去的经历、现在的生活、将来的梦想。", emoji: "✍️" },
              { text: "现在的我:用一般现在时。My name is... I am 12 years old. I am in Grade Seven. I like reading.", emoji: "😊", scene: { type: "clues", items: [
                { head: "现在情况", text: "一般现在时" },
                { head: "过去经历", text: "一般过去时" },
                { head: "将来梦想", text: "will / be going to" }
              ] } },
              { text: "过去的我:用一般过去时。Last year, I visited Beijing. I was very happy. I learned a lot.", emoji: "⏮️" },
              { text: "将来的我:用一般将来时。In the future, I will be a teacher. I am going to work hard.", emoji: "🔮", scene: { type: "clues", items: [
                { head: "开头", text: "介绍基本信息" },
                { head: "中间", text: "爱好·经历" },
                { head: "结尾", text: "梦想·打算" }
              ] } },
              { text: "口诀:写我一生用三时,现在过去和将来;基本信息加爱好,结尾说说小梦想!", emoji: "🎯" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "在自我介绍中,要表达「将来我想成为一名医生」,下列句子正确的是:",
            options: [
              "In the future, I am a doctor.",
              "In the future, I will be a doctor.",
              "In the future, I was a doctor.",
              "In the future, I am being a doctor."
            ], answer: 1,
            demoSteps: [
              { text: "「将来想成为」讲的是哪个时态?用什么结构?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "in the future", text: "→ 将来时" },
                { head: "结构", text: "will + 原形" },
                { head: "be 的原形", text: "be" }
              ] } },
              { text: "In the future 提示将来时,用 will be。", emoji: "🔮" }
            ],
            explain: "B 正确。In the future 表将来,用 will + 动词原形:will be a doctor。A 用一般现在时;C 用过去时;D 用进行时,都不对。",
            explainSteps: [
              { text: "In the future 是将来的标志,该用将来时。", emoji: "🔮" },
              { text: "will + be(原形),I will be a doctor,选 B!", emoji: "✅" },
              { text: "自我介绍把三种时态用对,一篇好作文就成了!", emoji: "🎯" }
            ] }
        },
        {
          name: "英文名著时光 · Hansel and Gretel",
          blocks: [
            { type: "rule", title: "📖 名著名片", html: "<b>格林兄弟 Grimm</b>《糖果屋》——迷路的兄妹,一座诱人的糖果屋,和用智慧战胜女巫的故事。" },
            { type: "reading", speakable: true, title: "Hansel and Gretel", paragraphs: [
              "Hansel and Gretel are a brother and sister. Their family is very poor. One day, they get lost deep in the forest. They are hungry and afraid.",
              "Then they find a house made of bread, cake and sweets! They start to eat happily. But an old woman lives there — she is a wicked witch! She catches the children and plans to eat them.",
              "The witch locks Hansel in a cage and makes Gretel work. But the children are clever. When the witch is not looking, Gretel pushes her into the hot oven and locks the door.",
              "The children are free! They find the witch's gold and jewels and take them home to their father. Now their family is never poor again. Courage and cleverness saved the day."
            ], tip: "生词提示:lost 迷路的 / sweets 糖果 / witch 女巫 / cage 笼子 / oven 烤炉" }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "How do Hansel and Gretel escape from the witch?(兄妹俩怎样从女巫手里逃脱?)",
            options: [
              "Their father saves them.",
              "Gretel pushes the witch into the oven.",
              "They run away while the witch sleeps.",
              "The witch lets them go."
            ], answer: 1,
            demoSteps: [
              { text: "女巫抓住了兄妹,格蕾特趁女巫不注意做了什么?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "女巫", text: "关住兄妹" },
                { head: "格蕾特", text: "把女巫推进烤炉" },
                { head: "结果", text: "兄妹自由" }
              ] } },
              { text: "原文说格蕾特把女巫推进烤炉锁上门。", emoji: "🔥" }
            ],
            explain: "B 正确。聪明的格蕾特趁女巫不注意,把她推进烧热的烤炉里锁上,兄妹俩因此获救,还带走了女巫的财宝。",
            explainSteps: [
              { text: "女巫想吃掉兄妹,把哥哥关进笼子。", emoji: "🧙" },
              { text: "格蕾特机智地把女巫推进烤炉,兄妹逃脱,选 B!", emoji: "✅" },
              { text: "寓意:面对危险不慌张,用勇气和智慧就能化险为夷。", emoji: "🎯" }
            ] }
        }
      ]
    },

    // ================== 语文 ==================
    {
      subject: "chinese", icon: "📝", title: "语文 · 名著《朝花夕拾》精读", minutes: 40,
      units: [
        {
          name: "动画课堂 · 鲁迅的回忆散文集",
          blocks: [
            { type: "lesson", title: "▶ 温馨的回忆与理性的批判", steps: [
              { text: "《朝花夕拾》是鲁迅唯一的回忆性散文集,原名《旧事重提》。「朝花夕拾」意思是早晨的花到傍晚才拾起——回忆往事。", emoji: "🌸" },
              { text: "全书 10 篇,回忆了鲁迅从童年到青年的经历。既有温馨的回忆,也有对旧社会、旧教育的理性批判。", emoji: "📖", scene: { type: "clues", items: [
                { head: "温馨回忆", text: "百草园·长妈妈" },
                { head: "理性批判", text: "旧教育·旧礼教" },
                { head: "两大主题", text: "回忆 + 批判" }
              ] } },
              { text: "名篇要记牢:《从百草园到三味书屋》(童年乐园与私塾)、《阿长与〈山海经〉》(保姆长妈妈)、《藤野先生》(日本恩师)、《五猖会》(批判封建教育)。", emoji: "🏫", scene: { type: "clues", items: [
                { head: "百草园", text: "童年乐趣" },
                { head: "阿长", text: "买《山海经》" },
                { head: "五猖会", text: "父亲逼背书" }
              ] } },
              { text: "人物性格记牢:长妈妈淳朴热心、藤野先生严谨无偏见、寿镜吾方正博学。「一人一事一品质」!", emoji: "👥" },
              { text: "读《朝花夕拾》,既要感受童年的温情,也要读懂鲁迅笔下对不合理现象的批判。这是它的深刻之处。", emoji: "🎯" }
            ] }
          ],
          q: { type: "choice", points: 10, voice: "zh",
            q: "关于《朝花夕拾》,下列说法错误的一项是:",
            options: [
              "它是鲁迅的一部回忆性散文集,原名《旧事重提》",
              "《从百草园到三味书屋》《藤野先生》都收在这部集子里",
              "《朝花夕拾》是一部长篇小说,讲述一个虚构的故事",
              "书中既有温馨的回忆,也有对旧社会、旧教育的批判"
            ], answer: 2,
            demoSteps: [
              { text: "《朝花夕拾》是「散文集」还是「小说」?写的是真事还是虚构?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "体裁", text: "回忆性散文集" },
                { head: "内容", text: "鲁迅的真实经历" },
                { head: "不是", text: "虚构小说" }
              ] } },
              { text: "找出把体裁和内容说错的那一句。", emoji: "🔍" }
            ],
            explain: "C 错。《朝花夕拾》是回忆性散文集,写的是鲁迅自己的真实经历,不是长篇小说,也不是虚构故事。其余三项都正确。",
            explainSteps: [
              { text: "《朝花夕拾》是散文集,写鲁迅的真实回忆,不是小说。", emoji: "📖" },
              { text: "C 说它是「虚构的长篇小说」,体裁和内容都错,选 C!", emoji: "❌" },
              { text: "A、B、D 都对。名著题记牢「体裁、篇目、主题」三要素!", emoji: "✅" }
            ] }
        },
        {
          name: "动画课堂 · 精读一篇:《从百草园到三味书屋》",
          blocks: [
            { type: "lesson", title: "▶ 从乐园到书塾的对比", steps: [
              { text: "《从百草园到三味书屋》是《朝花夕拾》里最有名的一篇。标题就点出了两个地方、两种生活的对比。", emoji: "🏡" },
              { text: "百草园:鲁迅童年的「乐园」。有碧绿的菜畦、光滑的石井栏、鸣蝉、云雀,还有长妈妈讲的美女蛇故事、雪地捕鸟的乐趣。", emoji: "🌿", scene: { type: "clues", items: [
                { head: "百草园", text: "自由·快乐" },
                { head: "有", text: "虫鸟·故事·捕鸟" },
                { head: "象征", text: "童真乐园" }
              ] } },
              { text: "三味书屋:私塾读书的地方,规矩多、读的书枯燥。但先生寿镜吾方正博学,读书入神时摇头晃脑,也有可爱之处。", emoji: "📚", scene: { type: "clues", items: [
                { head: "三味书屋", text: "私塾·束缚" },
                { head: "先生", text: "寿镜吾·方正博学" },
                { head: "对比", text: "乐园 vs 书塾" }
              ] } },
              { text: "写法上的妙处:用百草园的「乐」反衬三味书屋的「拘束」,含蓄地表达了对封建教育束缚儿童天性的不满。", emoji: "🎭" },
              { text: "精读要点:抓住「对比」这个手法,读懂鲁迅对童年自由的怀念、对旧式教育的委婉批评。", emoji: "🎯" }
            ] }
          ],
          q: { type: "fill", points: 10, voice: "zh",
            q: "《从百草园到三味书屋》中,三味书屋的私塾先生,那位「方正、质朴、博学」、读书入神时摇头晃脑的老师,名叫__________。(填三个字)",
            placeholder: "填三个字",
            accept: ["寿镜吾", "寿镜吾。", "寿镜吾先生"],
            demoSteps: [
              { text: "回忆《朝花夕拾》人物:三味书屋里那位方正博学的私塾先生是谁?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "三味书屋", text: "私塾" },
                { head: "先生", text: "方正·博学·摇头晃脑" },
                { head: "名字", text: "寿…" }
              ] } },
              { text: "他姓寿,是三味书屋的先生。", emoji: "🎓" }
            ],
            explain: "答案:寿镜吾。他是三味书屋的私塾先生,方正、质朴、博学,读书入神时摇头晃脑,鲁迅对他很尊敬。",
            explainSteps: [
              { text: "三味书屋的私塾先生是寿镜吾。", emoji: "🎓" },
              { text: "他方正博学、读书入神,严厉中透着可爱。", emoji: "✅" },
              { text: "答「寿镜吾」。名著人物用「一人一事一品质」档案记,不会忘!", emoji: "🎯" }
            ] }
        },
        {
          name: "今日彩蛋 · 名著打卡",
          blocks: [
            { type: "rule", title: "📖 睡前 20 分钟名著时间", html: "明天是<b>第五周周测复习日</b>!今晚把<b>《朝花夕拾》</b>里读过的篇目回顾一遍,给每个重要人物做张「性格卡片」:<b>长妈妈、藤野先生、寿镜吾、父亲</b>。<br>名字 + 事件 + 性格,一张卡片记一个人,复习就这么简单!" }
          ],
          q: null
        }
      ]
    },

    // ================== 地理 ==================
    {
      subject: "geography", icon: "🌍", title: "地理 · 发展与合作", minutes: 25,
      units: [
        {
          name: "动画课堂 · 发达国家与发展中国家",
          blocks: [
            { type: "lesson", title: "▶ 国家有差异,合作促发展", steps: [
              { text: "世界上有 200 多个国家和地区。按经济发展水平,可以分成「发达国家」和「发展中国家」两类。", emoji: "🌍" },
              { text: "发达国家:经济发展水平高,如美国、日本、德国、英国、法国等,大多分布在北半球的北部。中国是最大的发展中国家。", emoji: "🏙️", scene: { type: "clues", items: [
                { head: "发达国家", text: "美·日·德·英·法" },
                { head: "发展中国家", text: "中国·印度·巴西等" },
                { head: "中国", text: "最大的发展中国家" }
              ] } },
              { text: "分布规律:发达国家大多在北半球,发展中国家大多在南半球和北半球南部。所以「南北差异」也叫「南北问题」。", emoji: "🧭", scene: { type: "clues", items: [
                { head: "发达", text: "多在北" },
                { head: "发展中", text: "多在南" },
                { head: "南北对话", text: "解决差距" }
              ] } },
              { text: "国家之间要「合作」:「南北对话」指发达国家与发展中国家的商谈;「南南合作」指发展中国家之间的互助。", emoji: "🤝" },
              { text: "记忆法:发达国家「北多」,发展中国家「南多」;南北对话(发达 vs 发展中),南南合作(发展中之间)。合作共赢是大势!", emoji: "🎯" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "关于发达国家与发展中国家,下列说法正确的一项是:",
            options: [
              "中国是发达国家",
              "发达国家大多分布在南半球",
              "发展中国家之间的互助合作称为「南南合作」",
              "所有国家的经济发展水平都一样"
            ], answer: 2,
            demoSteps: [
              { text: "回忆:中国属于哪类国家?发达国家在南还是北?南南合作指什么?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "中国", text: "最大发展中国家" },
                { head: "发达国家", text: "多在北半球" },
                { head: "南南合作", text: "发展中国家之间" }
              ] } },
              { text: "把「中国是发达国家」「发达在南」「都一样」的错误排除。", emoji: "🔍" }
            ],
            explain: "C 正确。A 错(中国是最大的发展中国家);B 错(发达国家大多在北半球);D 错(各国发展水平差异很大)。南南合作指发展中国家之间的合作。",
            explainSteps: [
              { text: "A:中国是最大的发展中国家,不是发达国家,错。", emoji: "❌" },
              { text: "B:发达国家大多在北半球,不是南半球,错。", emoji: "❌" },
              { text: "D:各国发展水平差异很大,错。", emoji: "❌" },
              { text: "C:发展中国家之间的合作叫南南合作,正确!选 C。", emoji: "✅" }
            ] }
        }
      ]
    }
  ]
};
