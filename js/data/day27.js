// ============ 第 27 关 ============
window.DAYS = window.DAYS || {};

window.DAYS[27] = {
  day: 27,
  title: "第 27 关 · 追赶与相遇",
  estimate: "四科约 2~3 小时 · 共 7 道思考题(含 1 道 BOSS 题)",
  sections: [
    // ================== 数学 ==================
    {
      subject: "math", icon: "🔢", title: "数学 · 方程应用:行程问题", minutes: 50,
      units: [
        {
          name: "动画课堂 1 · 行程三兄弟:路程、速度、时间",
          blocks: [
            { type: "lesson", title: "▶ 一个公式走天下", steps: [
              { text: "行程问题是应用题里的「常客」。别怕,核心就一个公式:路程 = 速度 × 时间。", emoji: "🚗" },
              { text: "三个量互相求:路程 = 速度×时间;速度 = 路程÷时间;时间 = 路程÷速度。知道两个,就能求第三个。", emoji: "🔺", scene: { type: "clues", items: [
                { head: "路程", text: "= 速度×时间" },
                { head: "速度", text: "= 路程÷时间" },
                { head: "时间", text: "= 路程÷速度" }
              ] } },
              { text: "列方程解行程题,常用「路程」或「时间」相等来建等式。先画个线段图,关系就清楚了。", emoji: "📏" },
              { text: "两种经典模型:相遇问题(相向而行,路程之和 = 总距离)、追及问题(同向而行,快的追慢的)。", emoji: "🏃", scene: { type: "clues", items: [
                { head: "相遇", text: "路程和 = 总距离" },
                { head: "追及", text: "路程差 = 起始距离" },
                { head: "工具", text: "画线段图" }
              ] } },
              { text: "口诀:行程问题不用慌,路程速度时间忙;相遇路程加起来,追及路程减一趟!", emoji: "🎯" }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 2 · 相遇问题:两人的路程加起来",
          blocks: [
            { type: "lesson", title: "▶ 相向而行,合力缩短距离", steps: [
              { text: "相遇问题:两人从两地出发,面对面走,最后相遇。关键等量关系:两人走的路程之和 = 两地距离。", emoji: "🤝" },
              { text: "例:甲乙两地相距 300 米,恩恩和弟弟从两端同时出发相向而行,恩恩每分钟走 40 米,弟弟每分钟走 20 米。", emoji: "🚶", scene: { type: "clues", items: [
                { head: "恩恩速度", text: "40 米/分" },
                { head: "弟弟速度", text: "20 米/分" },
                { head: "两地距离", text: "300 米" }
              ] } },
              { text: "设经过 x 分钟相遇。恩恩走 40x 米,弟弟走 20x 米,两人路程之和 = 300。列方程:40x + 20x = 300。", emoji: "🔑", scene: { type: "clues", items: [
                { head: "恩恩路程", text: "40x" },
                { head: "弟弟路程", text: "20x" },
                { head: "等量关系", text: "40x + 20x = 300" }
              ] } },
              { text: "解:60x = 300,x = 5。经过 5 分钟两人相遇。相遇问题记住:两人的路程「加起来」等于总距离!", emoji: "✅" },
              { text: "小窍门:相向而行时,两人「合速度」= 40+20=60 米/分,相遇时间 = 总距离 ÷ 合速度 = 300÷60 = 5。殊途同归!", emoji: "💡" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "甲乙两地相距 240 千米,两车同时从两地相向开出,一车每小时行 60 千米,另一车每小时行 40 千米。设经过 x 小时相遇,方程应为:",
            options: ["60x − 40x = 240", "60x + 40x = 240", "60x + 40 = 240", "(60+40) = 240x"], answer: 1,
            demoSteps: [
              { text: "相遇问题的等量关系是「两车路程之和 = 总距离」。两车各走多远?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "一车路程", text: "60x" },
                { head: "另一车路程", text: "40x" },
                { head: "关系", text: "两者之和 = 240" }
              ] } },
              { text: "相向而行,路程相加等于 240。", emoji: "🤝" }
            ],
            explain: "B 正确。相遇问题路程之和 = 总距离:60x + 40x = 240。A 用了减(那是追及);C 漏了 x;D 结构错。",
            explainSteps: [
              { text: "相遇 = 路程之和 = 总距离。", emoji: "🤝" },
              { text: "一车 60x + 另一车 40x = 240,选 B!", emoji: "✅" },
              { text: "解得 100x=240,x=2.4 小时。相遇加、追及减,别记反!", emoji: "🎯" }
            ] }
        },
        {
          name: "🔥 BOSS 挑战 · 上学追及",
          blocks: [
            { type: "text", html: "💪 <b>BOSS 战规则</b>:追及问题!哥哥忘带东西,弟弟去追,几分钟追上?草稿纸准备!" }
          ],
          q: { type: "fill", points: 20, boss: true, voice: "zh",
            q: "哥哥以每分钟 50 米的速度先出门,4 分钟后弟弟发现哥哥忘带东西,以每分钟 70 米的速度去追。设弟弟出发 x 分钟追上哥哥,由「弟弟路程 = 哥哥路程」得 70x = 50x + 50×4。请解出弟弟追了多少分钟?(直接填数字)",
            placeholder: "例如: 5",
            accept: ["10", "10分钟", "十", "十分钟"],
            demoSteps: [
              { text: "哥哥先走 4 分钟,已经走了 50×4 = 200 米。弟弟出发后要补上这 200 米差距。", emoji: "🏃", scene: { type: "clues", items: [
                { head: "哥哥领先", text: "50×4 = 200 米" },
                { head: "弟弟路程", text: "70x" },
                { head: "哥哥总路程", text: "50x + 200" }
              ] } },
              { text: "追上时两人路程相等:70x = 50x + 200,移项求 x。", emoji: "🔄" }
            ],
            explain: "70x = 50x + 200;移项:70x − 50x = 200;20x = 200;x = 10。弟弟追了 10 分钟追上哥哥。",
            explainSteps: [
              { text: "哥哥先走 4 分钟,领先 50×4 = 200 米。", emoji: "🏃" },
              { text: "追上时路程相等:70x = 50x + 200 → 20x = 200 → x = 10。", emoji: "🔄" },
              { text: "弟弟追了 10 分钟!追及问题:用「路程相等」或「路程差」建方程,搞定!", emoji: "🏆" }
            ] }
        }
      ]
    },

    // ================== 英语 ==================
    {
      subject: "english", icon: "📚", title: "英语 · 阅读理解专项(应用文)", minutes: 45,
      units: [
        {
          name: "单词训练营 · 通知与海报 12 个(点卡片听发音!)",
          blocks: [
            { type: "text", html: "🎧 今天的词都在<span class='hl'>通知、海报、便条</span>里!认识它们,应用文一读就懂。点卡片听发音,跟读 3 遍。" },
            { type: "flashcards", words: [
              { word: "notice", phonetic: "/ˈnəʊtɪs/", cn: "通知", sentence: "Read the notice on the wall." },
              { word: "time", phonetic: "/taɪm/", cn: "时间", sentence: "The time is 3 p.m." },
              { word: "place", phonetic: "/pleɪs/", cn: "地点", sentence: "The place is Room 101." },
              { word: "date", phonetic: "/deɪt/", cn: "日期", sentence: "The date is May 5th." },
              { word: "free", phonetic: "/friː/", cn: "免费的;空闲的", sentence: "The show is free." },
              { word: "welcome", phonetic: "/ˈwelkəm/", cn: "欢迎", sentence: "Welcome to our party!" },
              { word: "join", phonetic: "/dʒɔɪn/", cn: "加入", sentence: "Come and join us!" },
              { word: "ticket", phonetic: "/ˈtɪkɪt/", cn: "票", sentence: "The ticket is 10 yuan." },
              { word: "meeting", phonetic: "/ˈmiːtɪŋ/", cn: "会议", sentence: "There is a meeting today." },
              { word: "club", phonetic: "/klʌb/", cn: "俱乐部;社团", sentence: "Join the English club!" },
              { word: "call", phonetic: "/kɔːl/", cn: "打电话", sentence: "Please call 123456." },
              { word: "sign", phonetic: "/saɪn/", cn: "标志;招牌", sentence: "The sign says 'No parking'." }
            ] }
          ],
          q: null
        },
        {
          name: "阅读侦探 · School Sports Day",
          blocks: [
            { type: "text", html: "🕵️ <b>侦探任务</b>:读应用文(通知、海报)要快速抓「关键信息」——什么活动?什么时间?什么地点?找信息,别逐字翻译!" },
            { type: "reading", speakable: true, title: "Notice: School Sports Day", paragraphs: [
              "NOTICE — Sunshine Middle School Sports Day",
              "Date: Friday, June 6th. Time: 8:30 a.m. – 4:00 p.m. Place: School Playground.",
              "All students must come in sports clothes. Please bring your own water. There will be running, jumping, and a fun tug-of-war!",
              "Parents are welcome to watch. For more information, please call the PE office at 8899-1234."
            ], tip: "生词提示:sports day 运动会 / playground 操场 / tug-of-war 拔河 / information 信息" }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "Where will the Sports Day be held?(运动会在哪里举行?)",
            options: [
              "In the classroom.",
              "On the school playground.",
              "In the PE office.",
              "At the students' homes."
            ], answer: 1,
            demoSteps: [
              { text: "应用文里找信息不用全读。快速扫描 'Place:' 后面写的是什么。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "Date", text: "日期" },
                { head: "Time", text: "时间" },
                { head: "Place", text: "地点 ← 看这里" }
              ] } },
              { text: "Place: School Playground,直接给出了地点。", emoji: "📍" }
            ],
            explain: "B 正确。通知里写着 Place: School Playground,运动会在学校操场举行。读应用文要学会快速定位关键信息(Place)。",
            explainSteps: [
              { text: "通知里 Place 一栏写的是 School Playground。", emoji: "📍" },
              { text: "所以运动会在学校操场举行,选 B!", emoji: "✅" },
              { text: "读通知/海报的诀窍:直奔 Date、Time、Place 等关键词,快速找答案。", emoji: "🎯" }
            ] }
        },
        {
          name: "英文名著时光 · The Goose That Laid Golden Eggs",
          blocks: [
            { type: "rule", title: "📖 名著名片", html: "<b>《伊索寓言》Aesop's Fables</b>——会下金蛋的鹅,和一个关于贪心的古老教训。" },
            { type: "reading", speakable: true, title: "The Goose That Laid Golden Eggs", paragraphs: [
              "A poor farmer has a special goose. Every morning, the goose lays one golden egg! The farmer sells the eggs and soon he is rich.",
              "But the farmer is greedy. 'One egg a day is too slow,' he thinks. 'There must be many golden eggs inside the goose. If I cut it open, I can get them all at once!'",
              "So the greedy farmer kills the goose and cuts it open. But inside, there is nothing — no gold, no eggs, just an ordinary goose.",
              "Now the farmer has no golden eggs and no goose. He is poor again. 'How foolish I was!' he cries. Greed made him lose everything he had."
            ], tip: "生词提示:goose 鹅 / lay 下(蛋) / golden 金的 / greedy 贪心的 / foolish 愚蠢的" }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "Why does the farmer become poor again?(农夫为什么又变穷了?)",
            options: [
              "Because the goose runs away.",
              "Because he is greedy and kills the goose for all the gold at once.",
              "Because someone steals his eggs.",
              "Because the golden eggs are not real gold."
            ], answer: 1,
            demoSteps: [
              { text: "农夫为什么要杀鹅?结果他得到金子了吗?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "农夫", text: "greedy 贪心" },
                { head: "做法", text: "杀鹅想一次拿光金子" },
                { head: "结果", text: "什么都没有" }
              ] } },
              { text: "他贪心杀鹅,结果鹅肚子里什么都没有。", emoji: "🪿" }
            ],
            explain: "B 正确。农夫太贪心,想一次得到所有金子,把会下金蛋的鹅杀了,结果鹅肚里什么也没有,他失去了一切。",
            explainSteps: [
              { text: "农夫嫌一天一个金蛋太慢,贪心杀鹅想一次拿光。", emoji: "🪿" },
              { text: "鹅肚子里什么都没有,金蛋也没了,选 B!", emoji: "✅" },
              { text: "寓意:贪得无厌,最终会失去已经拥有的一切。知足才能常乐。", emoji: "🎯" }
            ] }
        }
      ]
    },

    // ================== 语文 ==================
    {
      subject: "chinese", icon: "📝", title: "语文 · 写作:细节描写", minutes: 40,
      units: [
        {
          name: "动画课堂 · 慢镜头:把一瞬间写细",
          blocks: [
            { type: "lesson", title: "▶ 好细节,是作文的记忆点", steps: [
              { text: "上周学了「细节描写」是什么,今天学怎么「写」出好细节。诀窍第一条:放慢镜头。", emoji: "🎬" },
              { text: "把一个瞬间的动作,拆成好几个连续的小动作,一帧一帧地写。「他拿起笔」写成——「他握住笔,顿了顿,笔尖悬在纸上,又轻轻落下」。", emoji: "🐌", scene: { type: "clues", items: [
                { head: "粗写", text: "他拿起笔写字" },
                { head: "细写", text: "握·顿·悬·落" },
                { head: "手法", text: "放慢·拆分" }
              ] } },
              { text: "第二条:调动五感。不只写「看到」,还写听到、闻到、触到。「桂花香」比「花很香」更有画面。", emoji: "👃" },
              { text: "第三条:抓「典型细节」。选那个最能表现人物、最打动人的小动作,一个就够,不必面面俱到。", emoji: "🎯", scene: { type: "clues", items: [
                { head: "放慢镜头", text: "拆分动作" },
                { head: "调动五感", text: "看听闻触" },
                { head: "抓典型", text: "一个动人细节" }
              ] } },
              { text: "口诀:细节描写有三招——放慢镜头拆动作,调动五感添画面,抓住典型显真情。作文立刻有血有肉!", emoji: "🏅" }
            ] }
          ],
          q: { type: "choice", points: 10, voice: "zh",
            q: "下列句子中,细节描写最生动、最能打动人的一项是:",
            options: [
              "妈妈很爱我。",
              "妈妈把煮好的鸡蛋塞进我手心,又用围裙擦了擦我的书包带,轻声说:「路上慢点。」",
              "妈妈是个好人。",
              "妈妈每天都很忙。"
            ], answer: 1,
            demoSteps: [
              { text: "哪一句用了具体的、放慢镜头的小动作,而不是空泛的评价?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "空泛", text: "很爱我·好人·很忙" },
                { head: "具体", text: "塞鸡蛋·擦书包带·轻声说" },
                { head: "细节", text: "动人在细处" }
              ] } },
              { text: "「塞鸡蛋」「擦书包带」「轻声说」是一连串典型细节,把爱写活了。", emoji: "💗" }
            ],
            explain: "B 正确。「塞鸡蛋」「擦书包带」「轻声叮嘱」是具体典型的细节,把母爱写得可感可触。A、C、D 都是空泛的评价,没有细节。",
            explainSteps: [
              { text: "A、C、D 都是直接下结论(很爱我、好人、很忙),空洞。", emoji: "❌" },
              { text: "B 用一连串小动作和一句叮嘱,母爱藏在细节里,最动人,选 B!", emoji: "✅" },
              { text: "记住:少说「爱」,多写「爱的样子」。细节比评价更有力量。", emoji: "🎯" }
            ] }
        },
        {
          name: "动画课堂 · 从「说了什么」到「怎么说的」",
          blocks: [
            { type: "lesson", title: "▶ 让语言描写也有细节", steps: [
              { text: "细节不只在动作里,语言描写也能出细节。不只写「说了什么」,还写「怎么说的」——语气、神态、停顿。", emoji: "💬" },
              { text: "对比:「他说:『我没事。』」平淡。加上细节:「他别过脸,声音有点抖:『我……我没事。』」——瞬间有了情绪。", emoji: "🎭", scene: { type: "clues", items: [
                { head: "只写内容", text: "他说没事" },
                { head: "加细节", text: "别过脸·声音抖·停顿" },
                { head: "效果", text: "情绪跃然纸上" }
              ] } },
              { text: "小技巧:在人物说话前后,加一个动作或神态。「她攥着衣角,低声说」比单独一句话丰满得多。", emoji: "✍️" },
              { text: "省略号、破折号也是细节:「我……」的停顿,能写出人物的犹豫、哽咽、欲言又止。标点也会「说话」。", emoji: "⏳" },
              { text: "口诀:语言描写别干巴,加上神态和动作;语气停顿藏情感,人物开口就传神!", emoji: "🎯" }
            ] }
          ],
          q: { type: "fill", points: 10, voice: "zh",
            q: "写细节描写,常常要把一个动作放慢,拆成几个连续的小动作,一帧一帧地写,这种技巧形象地叫「放慢__________」。(填两个字)",
            placeholder: "填两个字",
            accept: ["镜头", "镜头。", "镜头。"],
            demoSteps: [
              { text: "像电影里把快动作变慢,一帧一帧展现,这叫放慢什么?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "电影术语", text: "慢动作" },
                { head: "一帧一帧", text: "放慢…" },
                { head: "两个字", text: "拍电影的那个词" }
              ] } },
              { text: "把动作像电影慢放一样拆开,叫放慢「镜头」。", emoji: "🎬" }
            ],
            explain: "答案:镜头。「放慢镜头」是细节描写的重要技巧:把一个瞬间的动作拆成连续的小动作,细细描绘,让画面清晰动人。",
            explainSteps: [
              { text: "像电影慢镜头一样把动作拆细,就是「放慢镜头」。", emoji: "🎬" },
              { text: "配合调动五感、抓典型细节,细节描写就生动了。", emoji: "✅" },
              { text: "答「镜头」。会放慢镜头,你的作文瞬间有画面感!", emoji: "🎯" }
            ] }
        },
        {
          name: "今日彩蛋 · 名著打卡",
          blocks: [
            { type: "rule", title: "📖 睡前 20 分钟名著时间", html: "继续读名著!今晚找一处你觉得特别生动的细节描写,数一数:<b>作者把这个动作拆成了几个小动作?调动了哪些感官?</b><br>好作家都是「放慢镜头」的高手。学会了,你的作文也能打动人!" }
          ],
          q: null
        }
      ]
    },

    // ================== 道法 ==================
    {
      subject: "civics", icon: "⚖️", title: "道法 · 生命的思考", minutes: 25,
      units: [
        {
          name: "动画课堂 · 敬畏生命,活出精彩",
          blocks: [
            { type: "lesson", title: "▶ 生命的可贵与价值", steps: [
              { text: "每个人的生命都只有一次,来之不易,又是不可逆的。正因如此,生命才无比珍贵,值得我们敬畏。", emoji: "🌱" },
              { text: "生命有两个特点:一是「独特」——每个人都是独一无二的,世界上没有第二个你;二是「不可逆」——生命不能重来。", emoji: "✨", scene: { type: "clues", items: [
                { head: "独特", text: "独一无二" },
                { head: "不可逆", text: "不能重来" },
                { head: "态度", text: "敬畏·珍爱" }
              ] } },
              { text: "敬畏生命,首先要爱护自己的生命——注意安全、珍惜健康;也要尊重他人的生命,善待身边的每一个生命。", emoji: "💗" },
              { text: "生命的意义不在长短,而在于我们如何活。为他人、为社会做一些有意义的事,平凡的生命也能闪光。", emoji: "🌟", scene: { type: "clues", items: [
                { head: "爱护", text: "自己的生命" },
                { head: "尊重", text: "他人的生命" },
                { head: "价值", text: "活得有意义" }
              ] } },
              { text: "记住:生命宝贵而独特,要敬畏生命、珍爱生命;更要活出生命的价值,让有限的生命焕发光彩。", emoji: "🎯" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "下列对「生命」的态度,正确的一项是:",
            options: [
              "生命是自己的,想怎么对待都行,包括做危险的事",
              "生命宝贵而独特,要敬畏和珍爱生命,也要尊重他人的生命",
              "只要自己活得好,别人的生命与我无关",
              "生命的价值只看活得长不长"
            ], answer: 1,
            demoSteps: [
              { text: "回忆:对待生命应有怎样的态度?只顾自己行吗?价值只看长短吗?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "对自己", text: "爱护·珍惜" },
                { head: "对他人", text: "尊重·善待" },
                { head: "价值", text: "在于意义" }
              ] } },
              { text: "把「任性冒险」「只顾自己」「只看长短」的说法排除。", emoji: "🔍" }
            ],
            explain: "B 正确。A 忽视了对生命的敬畏(不能拿生命冒险);C 忽视了尊重他人生命;D 把价值等同于长短。正确态度是敬畏、珍爱生命,也尊重他人,活出价值。",
            explainSteps: [
              { text: "A:拿生命做危险的事是不珍惜生命,错。", emoji: "❌" },
              { text: "C:要尊重他人的生命,不能只顾自己,错。", emoji: "❌" },
              { text: "D:生命的价值在于活得有意义,不只看长短,错。", emoji: "❌" },
              { text: "B:敬畏珍爱生命、尊重他人,正确!选 B。", emoji: "✅" }
            ] }
        }
      ]
    }
  ]
};
