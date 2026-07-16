// ============ 第 25 关 ============
window.DAYS = window.DAYS || {};

window.DAYS[25] = {
  day: 25,
  title: "第 25 关 · 甩掉分母",
  estimate: "四科约 2~3 小时 · 共 7 道思考题(含 1 道 BOSS 题)",
  sections: [
    // ================== 数学 ==================
    {
      subject: "math", icon: "🔢", title: "数学 · 解方程:去分母", minutes: 50,
      units: [
        {
          name: "动画课堂 1 · 两边同乘,分母消失",
          blocks: [
            { type: "lesson", title: "▶ 带分数的方程,先去分母", steps: [
              { text: "方程里带分数,看着就头大。有个大招能一秒清爽:去分母!让讨厌的分母统统消失。", emoji: "🧹" },
              { text: "方法:方程两边同时乘以所有分母的「最小公倍数」。分母被约掉,方程就没有分数了。", emoji: "✖️", scene: { type: "clues", items: [
                { head: "找分母", text: "各项分母" },
                { head: "求最小公倍数", text: "作为乘数" },
                { head: "两边同乘", text: "分母消失" }
              ] } },
              { text: "例:x/2 + 1 = 3。分母是 2,两边同乘 2:x + 2 = 6。分母没了,变成简单方程!", emoji: "🎯", scene: { type: "clues", items: [
                { head: "原式", text: "x/2 + 1 = 3" },
                { head: "×2", text: "x + 2 = 6" },
                { head: "解", text: "x = 4" }
              ] } },
              { text: "最容易错的地方:乘的时候,每一项都要乘,包括没有分母的项!x/2+1=3 的「1」和「3」也要乘 2。", emoji: "⚠️" },
              { text: "口诀:去分母,乘公倍;不漏项,别忘整数也要乘。分母一去,方程立刻变清爽!", emoji: "🏅" }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 2 · 去分母的两个大坑",
          blocks: [
            { type: "lesson", title: "▶ 漏乘项 & 忘加括号", steps: [
              { text: "去分母是方程里最容易出错的一步。两个大坑,今天绕开它们。", emoji: "🕳️" },
              { text: "大坑一:漏乘不含分母的项。(2x−1)/3 = 5,两边乘 3 时,右边 5 也要乘,得 2x−1 = 15,别忘右边!", emoji: "⚠️", scene: { type: "clues", items: [
                { head: "原式", text: "(2x−1)/3 = 5" },
                { head: "×3", text: "2x−1 = 15" },
                { head: "别漏", text: "右边 5 也乘" }
              ] } },
              { text: "大坑二:分子是多项式,去分母后要加括号!x/2 − (x−1)/3 中,(x−1) 是一个整体,乘完要括起来。", emoji: "📦" },
              { text: "例:(x−1)/3 乘 6 = 2(x−1),而不是 2x−1!分子当作整体,去掉分母线相当于加了括号。", emoji: "🔑", scene: { type: "clues", items: [
                { head: "分子多项式", text: "(x−1)" },
                { head: "去分母后", text: "加括号 2(x−1)" },
                { head: "再去括号", text: "2x−2" }
              ] } },
              { text: "口诀:去分母,项项乘,整数也别落;分子若是多项式,记得给它加括号!", emoji: "🎯" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "解方程 x/2 + x/3 = 5,去分母时两边应同乘的最小公倍数以及去分母后的方程是:",
            options: [
              "乘 5,得 x + x = 25",
              "乘 6,得 3x + 2x = 30",
              "乘 6,得 3x + 2x = 5",
              "乘 6,得 x + x = 30"
            ], answer: 1,
            demoSteps: [
              { text: "分母是 2 和 3,它们的最小公倍数是几?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "分母", text: "2 和 3" },
                { head: "最小公倍数", text: "6" },
                { head: "两边×6", text: "每项都乘" }
              ] } },
              { text: "两边乘 6:x/2×6=3x,x/3×6=2x,右边 5×6=30。别漏了右边的 5!", emoji: "✖️" }
            ],
            explain: "B 正确。2 和 3 的最小公倍数是 6。两边乘 6:x/2×6=3x,x/3×6=2x,5×6=30,得 3x + 2x = 30。C 漏乘右边;A 公倍数错;D 左边约错。",
            explainSteps: [
              { text: "最小公倍数是 6,两边同乘 6。", emoji: "✖️" },
              { text: "x/2×6 = 3x,x/3×6 = 2x,5×6 = 30。", emoji: "🧮" },
              { text: "得 3x + 2x = 30,选 B!C 忘了右边的 5 也要乘 6,最常见的坑!", emoji: "✅" }
            ] }
        },
        {
          name: "🔥 BOSS 挑战 · 分蛋糕",
          blocks: [
            { type: "text", html: "💪 <b>BOSS 战规则</b>:用带分数的方程解决实际问题!去分母、解出来。草稿纸准备!" }
          ],
          q: { type: "fill", points: 20, boss: true, voice: "zh",
            q: "一块蛋糕,恩恩吃了它的一半(x/2),弟弟吃了它的三分之一(x/3),最后还剩 1 块。若整块蛋糕是 x 块,可列方程 x/2 + x/3 + 1 = x。请解出整块蛋糕原来是多少块?(直接填数字)",
            placeholder: "例如: 6",
            accept: ["6", "6块", "六", "六块"],
            demoSteps: [
              { text: "去分母:两边同乘 6(2 和 3 的最小公倍数),每项都乘!", emoji: "✖️", scene: { type: "clues", items: [
                { head: "x/2×6", text: "3x" },
                { head: "x/3×6", text: "2x" },
                { head: "1×6, x×6", text: "6, 6x" }
              ] } },
              { text: "得 3x + 2x + 6 = 6x,再移项合并。", emoji: "🔄" }
            ],
            explain: "两边乘 6:3x + 2x + 6 = 6x;合并 5x + 6 = 6x;移项 6 = 6x − 5x = x,所以 x = 6。整块蛋糕 6 块。",
            explainSteps: [
              { text: "去分母乘 6:3x + 2x + 6 = 6x。", emoji: "✖️" },
              { text: "合并移项:5x + 6 = 6x → 6 = x。", emoji: "🔄" },
              { text: "整块蛋糕 6 块!验算:吃 3 块+2 块+剩 1 块=6 块,对!", emoji: "🏆" }
            ] }
        }
      ]
    },

    // ================== 英语 ==================
    {
      subject: "english", icon: "📚", title: "英语 · 过去时疑问句与否定句", minutes: 45,
      units: [
        {
          name: "单词训练营 · 提问回顾 12 个(点卡片听发音!)",
          blocks: [
            { type: "text", html: "🎧 今天的词帮你<span class='hl'>问过去、答过去</span>!点卡片听发音,跟读 3 遍。" },
            { type: "flashcards", words: [
              { word: "did", phonetic: "/dɪd/", cn: "助动词(过去)", sentence: "Did you see him?" },
              { word: "didn't", phonetic: "/ˈdɪdnt/", cn: "没有(过去)", sentence: "I didn't go out." },
              { word: "weekend", phonetic: "/ˌwiːkˈend/", cn: "周末", sentence: "What did you do last weekend?" },
              { word: "trip", phonetic: "/trɪp/", cn: "旅行", sentence: "We had a nice trip." },
              { word: "zoo", phonetic: "/zuː/", cn: "动物园", sentence: "Did you go to the zoo?" },
              { word: "beach", phonetic: "/biːtʃ/", cn: "海滩", sentence: "They played on the beach." },
              { word: "movie", phonetic: "/ˈmuːvi/", cn: "电影", sentence: "Did you watch a movie?" },
              { word: "homework", phonetic: "/ˈhəʊmwɜːk/", cn: "作业", sentence: "I didn't finish my homework." },
              { word: "fun", phonetic: "/fʌn/", cn: "乐趣", sentence: "We had great fun." },
              { word: "tired", phonetic: "/ˈtaɪəd/", cn: "累的", sentence: "I was tired last night." },
              { word: "visit", phonetic: "/ˈvɪzɪt/", cn: "参观", sentence: "Did you visit your grandma?" },
              { word: "yesterday", phonetic: "/ˈjestədeɪ/", cn: "昨天", sentence: "It rained yesterday." }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 · 过去时的否定与疑问:请出 did",
          blocks: [
            { type: "lesson", title: "▶ did 一出场,动词变原形", steps: [
              { text: "实义动词的一般过去时,变否定、变疑问时,要请出助动词 did(do 的过去式)来帮忙。", emoji: "🦸" },
              { text: "否定句:主语 + didn't + 动词原形。I didn't go.(注意:go 变回原形,不是 went!)", emoji: "🚫", scene: { type: "clues", items: [
                { head: "肯定", text: "I went home." },
                { head: "否定", text: "I didn't go home." },
                { head: "关键", text: "went → 变回 go" }
              ] } },
              { text: "疑问句:Did + 主语 + 动词原形?Did you go home? — Yes, I did. / No, I didn't.", emoji: "❓", scene: { type: "clues", items: [
                { head: "疑问", text: "Did you go?" },
                { head: "肯定答", text: "Yes, I did." },
                { head: "否定答", text: "No, I didn't." }
              ] } },
              { text: "黄金规则:did / didn't 已经表示过去了,所以后面的动词必须变回原形!这是最容易错的地方。", emoji: "⚠️" },
              { text: "口诀:过去否定 didn't,疑问 Did 提句前;did 一出手,动词回原形。牢记这一条,不再丢分!", emoji: "🎯" }
            ] },
            { type: "chant", lines: ["过去疑问 Did 打头,", "否定 didn't 跟其后;", "did 一出动词变原形,", "went 变 go 别忘记!"] }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "选出完全正确的一句:",
            options: [
              "Did you went to the park yesterday?",
              "Did you go to the park yesterday?",
              "Do you went to the park yesterday?",
              "Did you goed to the park yesterday?"
            ], answer: 1,
            demoSteps: [
              { text: "疑问句里已经有 Did 了,后面的动词应该用什么形式?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "Did", text: "已表示过去" },
                { head: "后面动词", text: "用原形 go" },
                { head: "不能", text: "went / goed" }
              ] } },
              { text: "Did 已经表示过去,go 要用原形,不能再用 went。", emoji: "⚠️" }
            ],
            explain: "B 正确:Did + 主语 + 动词原形 go。A 用了 went(应原形);C 用 Do 表过去错;D 的 goed 拼错。did 后面动词一律原形!",
            explainSteps: [
              { text: "A:Did 后面用了 went,应变回原形 go,错。", emoji: "❌" },
              { text: "C:过去时用 Did 不用 Do,错。", emoji: "❌" },
              { text: "D:goed 不存在,错。", emoji: "❌" },
              { text: "B:Did you go...? 助动词表过去、动词用原形,完美!选 B。", emoji: "✅" }
            ] }
        },
        {
          name: "英文名著时光 · King Midas and the Golden Touch",
          blocks: [
            { type: "rule", title: "📖 名著名片", html: "<b>希腊神话</b>《点石成金》——贪心的国王想把一切变成黄金,却险些失去最珍贵的东西。" },
            { type: "reading", speakable: true, title: "King Midas and the Golden Touch", paragraphs: [
              "King Midas loves gold more than anything. One day a god says, 'I will give you a wish.' Midas says, 'I wish everything I touch turns to gold!' The god grants his wish.",
              "At first, Midas is very happy. He touches a chair — it turns to gold! He touches a flower, a table, a door — all gold! 'I am the richest king in the world!' he laughs.",
              "But then he tries to eat. The bread turns to gold in his hand. The water turns to gold. He can't eat or drink anything! Worse still, when his little daughter runs to hug him, she turns into a gold statue.",
              "Midas cries, 'Take back my wish! Gold is not everything!' The god feels sorry for him and takes the golden touch away. His daughter comes back to life, and Midas learns that love is worth more than all the gold in the world."
            ], tip: "生词提示:gold 黄金 / wish 愿望 / touch 触摸 / statue 雕像 / worth 值得" }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "What does King Midas learn at the end?(米达斯国王最后明白了什么?)",
            options: [
              "Gold is the most important thing.",
              "Love is worth more than gold.",
              "He should touch more things.",
              "The god is unkind to him."
            ], answer: 1,
            demoSteps: [
              { text: "国王失去了什么才明白过来?他最后觉得什么最珍贵?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "点金术", text: "食物女儿都变金" },
                { head: "国王", text: "后悔·哭喊" },
                { head: "领悟", text: "love > gold" }
              ] } },
              { text: "结尾说 love is worth more than gold,答案就在这。", emoji: "👑" }
            ],
            explain: "B 正确。米达斯因贪心几乎失去女儿和生命,最后明白爱比世上所有的黄金都珍贵。",
            explainSteps: [
              { text: "点金术让他吃不了饭,还把女儿变成金像。", emoji: "👑" },
              { text: "他后悔请求收回愿望,懂得了爱比黄金珍贵,选 B!", emoji: "✅" },
              { text: "寓意:贪心会让人失去真正重要的东西。别被金钱蒙住双眼。", emoji: "🎯" }
            ] }
        }
      ]
    },

    // ================== 语文 ==================
    {
      subject: "chinese", icon: "📝", title: "语文 · 说明文阅读入门", minutes: 40,
      units: [
        {
          name: "动画课堂 · 说明文:把事物讲清楚",
          blocks: [
            { type: "lesson", title: "▶ 说明对象与说明顺序", steps: [
              { text: "记叙文写「事」,说明文讲「知识」——它的任务是把一个事物或事理,清楚、准确地介绍给读者。", emoji: "📘" },
              { text: "读说明文先抓「说明对象」:这篇文章在介绍什么?是一种事物(如中国石拱桥),还是一个事理(如为什么天会下雨)。", emoji: "🎯", scene: { type: "clues", items: [
                { head: "说明对象", text: "介绍什么" },
                { head: "事物说明文", text: "介绍具体物" },
                { head: "事理说明文", text: "讲清道理" }
              ] } },
              { text: "再抓「说明顺序」:时间顺序(按先后)、空间顺序(按方位)、逻辑顺序(按因果、主次、由表及里)。", emoji: "🧭", scene: { type: "clues", items: [
                { head: "时间顺序", text: "从古到今" },
                { head: "空间顺序", text: "从上到下" },
                { head: "逻辑顺序", text: "由因到果" }
              ] } },
              { text: "介绍事物构造多用空间顺序;介绍事物发展多用时间顺序;讲事理多用逻辑顺序。", emoji: "🔀" },
              { text: "读说明文口诀:先找说明对象(说什么),再理说明顺序(怎么说)。抓住这两点,文章一目了然!", emoji: "🎯" }
            ] }
          ],
          q: { type: "choice", points: 10, voice: "zh",
            q: "一篇介绍「赵州桥」的文章,先说桥的位置和历史,再按从整体到局部的方位介绍它的桥身、大拱、小拱。它主要采用的说明顺序是:",
            options: [
              "只有时间顺序",
              "空间顺序为主(从整体到局部、按方位介绍构造)",
              "没有顺序,想到哪说到哪",
              "只有逻辑顺序"
            ], answer: 1,
            demoSteps: [
              { text: "文章介绍桥的「桥身、大拱、小拱」,是按什么来安排的?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "介绍构造", text: "桥身·大拱·小拱" },
                { head: "按方位", text: "整体到局部" },
                { head: "顺序", text: "空间顺序" }
              ] } },
              { text: "介绍一个物体的各个部分、按方位展开,是哪种顺序?", emoji: "🧭" }
            ],
            explain: "B 正确。介绍桥的构造(桥身、大拱、小拱),按从整体到局部的方位展开,是典型的空间顺序。",
            explainSteps: [
              { text: "介绍事物的构造、各部分的位置,用的是空间顺序。", emoji: "🧭" },
              { text: "「桥身→大拱→小拱」从整体到局部,正是空间顺序,选 B!", emoji: "✅" },
              { text: "记住:介绍构造多用空间顺序,介绍发展多用时间顺序。", emoji: "🎯" }
            ] }
        },
        {
          name: "动画课堂 · 说明方法:讲清楚的小妙招",
          blocks: [
            { type: "lesson", title: "▶ 举例子·列数字·打比方·作比较", steps: [
              { text: "为了把事物说清楚,说明文常用一些「说明方法」。认识它们,是说明文阅读的必考点。", emoji: "🛠️" },
              { text: "举例子:举具体例子,让抽象变具体。列数字:用准确的数据,让说明更精确、更有说服力。", emoji: "🔢", scene: { type: "clues", items: [
                { head: "举例子", text: "举具体例子" },
                { head: "列数字", text: "用准确数据" },
                { head: "作用", text: "具体·精确" }
              ] } },
              { text: "打比方:用比喻把陌生事物说得形象生动。作比较:拿两个事物比,让特点更突出。", emoji: "⚖️", scene: { type: "clues", items: [
                { head: "打比方", text: "比喻·生动形象" },
                { head: "作比较", text: "对比·突出特点" },
                { head: "还有", text: "分类别·下定义" }
              ] } },
              { text: "答题模板:「这句用了××说明方法,××地说明了……的特点。」如「列数字,准确说明了桥的长度」。", emoji: "📐" },
              { text: "常考搭配记牢:举例子→具体,列数字→准确,打比方→生动,作比较→突出。方法+作用,答题满分!", emoji: "🎯" }
            ] }
          ],
          q: { type: "fill", points: 10, voice: "zh",
            q: "「赵州桥非常雄伟,全长 50.82 米,两端宽 9.6 米。」这句话主要运用的说明方法是「__________」。(填三个字)",
            placeholder: "填三个字",
            accept: ["列数字", "列数字。", "列数据"],
            demoSteps: [
              { text: "句中「50.82 米」「9.6 米」是什么?用具体数据说明,叫什么方法?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "50.82 米", text: "数据" },
                { head: "9.6 米", text: "数据" },
                { head: "方法", text: "?数字" }
              ] } },
              { text: "用准确的数字来说明,叫「列数字」——三个字。", emoji: "🔢" }
            ],
            explain: "答案:列数字。用「50.82 米」「9.6 米」等准确数据来说明桥的大小,是列数字,能使说明更准确、更有说服力。",
            explainSteps: [
              { text: "「50.82 米」「9.6 米」都是具体数据,用数据说明就是列数字。", emoji: "🔢" },
              { text: "列数字的作用:准确、有说服力地说明事物特点。", emoji: "✅" },
              { text: "答「列数字」。方法+作用一起记,说明文阅读稳拿分!", emoji: "🎯" }
            ] }
        },
        {
          name: "今日彩蛋 · 名著打卡",
          blocks: [
            { type: "rule", title: "📖 睡前 20 分钟名著时间", html: "继续读名著!今晚换换口味,找一段介绍知识的说明性文字(比如书里介绍某种兵器、某个地方),想一想:<b>它用了举例子、列数字还是打比方?</b><br>读懂说明方法,科普文章也能读得津津有味!" }
          ],
          q: null
        }
      ]
    },

    // ================== 地理 ==================
    {
      subject: "geography", icon: "🌍", title: "地理 · 世界的人口与人种", minutes: 25,
      units: [
        {
          name: "动画课堂 · 人口与人种知多少",
          blocks: [
            { type: "lesson", title: "▶ 人口分布与三大人种", steps: [
              { text: "地球上住着 80 多亿人。但人口分布很不均匀:有的地方挤满了人,有的地方几乎没有人。", emoji: "👥" },
              { text: "人口稠密区多在:亚洲东部和南部、欧洲西部、北美洲东部——这些地方气候温暖湿润、平原广阔、交通便利。", emoji: "🏙️", scene: { type: "clues", items: [
                { head: "稠密区", text: "亚洲东南部·欧洲西部" },
                { head: "共同点", text: "气候好·平原·沿海" },
                { head: "稀疏区", text: "沙漠·雨林·高原·极地" }
              ] } },
              { text: "人口稀疏区:干旱的沙漠、湿热的雨林、寒冷的高纬度地区、地势高峻的高原,环境恶劣,人烟稀少。", emoji: "🏜️" },
              { text: "按体质特征,世界人口分三大人种:黄色人种、白色人种、黑色人种。三大人种没有优劣之分,一律平等。", emoji: "🤝", scene: { type: "clues", items: [
                { head: "黄种人", text: "亚洲东部为主" },
                { head: "白种人", text: "欧洲等地" },
                { head: "黑种人", text: "非洲等地" }
              ] } },
              { text: "重要观念:不同人种、不同民族一律平等,没有高低贵贱。这是现代文明的基本共识。记牢分布规律和「三大人种平等」!", emoji: "🎯" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "关于世界人口与人种,下列说法正确的一项是:",
            options: [
              "世界人口分布很均匀,各地人口一样多",
              "亚洲东部和南部、欧洲西部等地气候适宜,人口稠密",
              "白色人种比其他人种更优秀",
              "沙漠、雨林地区因为条件好,所以人口最多"
            ], answer: 1,
            demoSteps: [
              { text: "回忆:人口分布均匀吗?哪些地方人多?人种有优劣吗?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "分布", text: "很不均匀" },
                { head: "稠密", text: "气候好·平原·沿海" },
                { head: "人种", text: "一律平等" }
              ] } },
              { text: "把「均匀」「人种有优劣」「沙漠雨林人最多」的错误说法排除。", emoji: "🔍" }
            ],
            explain: "B 正确。A 错(分布很不均匀);C 错(人种一律平等,无优劣);D 错(沙漠雨林环境恶劣,人口稀疏)。",
            explainSteps: [
              { text: "A:人口分布极不均匀,有的地方挤有的地方空,错。", emoji: "❌" },
              { text: "C:三大人种一律平等,没有优劣之分,这是原则性错误!", emoji: "❌" },
              { text: "D:沙漠、雨林条件恶劣,人口稀疏,错。", emoji: "❌" },
              { text: "B:亚洲东南部、欧洲西部气候好、人口稠密,正确!选 B。", emoji: "✅" }
            ] }
        }
      ]
    }
  ]
};
