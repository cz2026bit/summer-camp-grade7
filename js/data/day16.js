// ============ 第 16 关 ============
window.DAYS = window.DAYS || {};

window.DAYS[16] = {
  day: 16,
  title: "第 16 关 · 代入求值",
  estimate: "四科约 2~3 小时 · 共 7 道思考题(含 1 道 BOSS 题)",
  sections: [
    // ================== 数学 ==================
    {
      subject: "math", icon: "🔢", title: "数学 · 代数式求值", minutes: 50,
      units: [
        {
          name: "动画课堂 1 · 代入:把字母换成数字",
          blocks: [
            { type: "lesson", title: "▶ 求值三步:代、算、写", steps: [
              { text: "代数式求值,就是把字母换成给定的数,再算出结果。像往公式里「填空」一样简单。", emoji: "🔢" },
              { text: "三步走:第一步「代」——把每个字母换成对应的数;第二步「算」——按运算顺序计算;第三步「写」——写出结果。", emoji: "📝", scene: { type: "clues", items: [
                { head: "第一步 代", text: "字母换成数" },
                { head: "第二步 算", text: "按顺序计算" },
                { head: "第三步 写", text: "写出答案" }
              ] } },
              { text: "例:当 a = 3 时,求 2a + 5。代入:2×3 + 5;计算:6 + 5 = 11。就这么简单!", emoji: "🧮" },
              { text: "关键提醒:代负数一定要加括号!当 a = −2 时,3a = 3×(−2),不能写成 3×−2 容易出错。", emoji: "⚠️", scene: { type: "clues", items: [
                { head: "a = −2", text: "代入要括号" },
                { head: "3a", text: "= 3×(−2)" },
                { head: "结果", text: "= −6" }
              ] } },
              { text: "口诀:代要加括号,算按老规矩(方→乘除→加减),写清最终值。代入求值,稳拿分!", emoji: "🎯" }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 2 · 先化简再求值:偷懒有理",
          blocks: [
            { type: "lesson", title: "▶ 能简先简,少算少错", steps: [
              { text: "有些代数式又长又复杂,直接代入数字会算到头疼。聪明的办法:先化简,再求值!", emoji: "💡" },
              { text: "例:求 3a + 2a − a 当 a = 10。先合并成 4a,再代入 4×10 = 40。比一个个算快多了!", emoji: "⚡", scene: { type: "clues", items: [
                { head: "原式", text: "3a + 2a − a" },
                { head: "化简", text: "= 4a" },
                { head: "代入", text: "4×10 = 40" }
              ] } },
              { text: "化简的好处:字母越少、项数越少,代入时出错的机会就越小。「磨刀不误砍柴工」!", emoji: "🪓" },
              { text: "但要注意:能化简的才化简。像 a² + b 这种不同类的项,不能乱合并,只能直接代入。", emoji: "🛑" },
              { text: "口诀:先看能不能化简,能简则简,再代入。少写一步,少错一处,速度正确率双丰收!", emoji: "🏅" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "当 a = −2, b = 3 时,代数式 a² − 2b 的值是:",
            options: ["−2", "10", "−10", "2"], answer: 3,
            demoSteps: [
              { text: "先代入(加括号!):a² = (−2)²,2b = 2×3。", emoji: "⚠️", scene: { type: "clues", items: [
                { head: "a²", text: "(−2)² = 4" },
                { head: "2b", text: "2×3 = 6" },
                { head: "相减", text: "4 − 6" }
              ] } },
              { text: "(−2)² 是同号相乘 = +4,再算 4 − 6。", emoji: "🧮" }
            ],
            explain: "a² = (−2)² = 4;2b = 2×3 = 6;4 − 6 = −2。选 D。",
            explainSteps: [
              { text: "代入加括号:a² = (−2)² = 4(负负得正!)。", emoji: "⚠️" },
              { text: "2b = 2×3 = 6。", emoji: "🧮" },
              { text: "a² − 2b = 4 − 6 = −2,选 D!", emoji: "✅" },
              { text: "C 错在把 (−2)² 算成了 −4。代负数记得加括号、看清乘方!", emoji: "🎯" }
            ] }
        },
        {
          name: "🔥 BOSS 挑战 · 出租车计费",
          blocks: [
            { type: "text", html: "💪 <b>BOSS 战规则</b>:生活里的代数式!先列式,再代入,算出车费。草稿纸准备!" }
          ],
          q: { type: "fill", points: 20, boss: true, voice: "zh",
            q: "某地出租车收费:3 公里以内 8 元,超过 3 公里的部分每公里 2 元。用 x 表示总路程(x>3),车费可表示为 8 + 2(x−3) 元。当 x = 10 公里时,车费是多少元?(直接填数字)",
            placeholder: "例如: 20",
            accept: ["22", "22元", "二十二"],
            demoSteps: [
              { text: "把 x = 10 代入 8 + 2(x−3),先算括号里的 x − 3。", emoji: "🚕", scene: { type: "clues", items: [
                { head: "x", text: "= 10" },
                { head: "x − 3", text: "= 7(超出部分)" },
                { head: "列式", text: "8 + 2×7" }
              ] } },
              { text: "括号里 10 − 3 = 7,再算 2×7,最后加 8。", emoji: "🧮" }
            ],
            explain: "代入 x = 10:8 + 2(10−3) = 8 + 2×7 = 8 + 14 = 22 元。",
            explainSteps: [
              { text: "先算括号:x − 3 = 10 − 3 = 7(超出 3 公里的部分)。", emoji: "🚕" },
              { text: "再算 2×7 = 14,加上起步价 8 元。", emoji: "🧮" },
              { text: "8 + 14 = 22 元!代数式让复杂的计费一目了然,这就是数学的用处。", emoji: "🏆" }
            ] }
        }
      ]
    },

    // ================== 英语 ==================
    {
      subject: "english", icon: "📚", title: "英语 · 现在进行时(用法)", minutes: 45,
      units: [
        {
          name: "单词训练营 · 场景与地点 12 个(点卡片听发音!)",
          blocks: [
            { type: "text", html: "🎧 今天的词帮你说清<span class='hl'>在哪里、正做什么</span>!点卡片听发音,跟读 3 遍。" },
            { type: "flashcards", words: [
              { word: "park", phonetic: "/pɑːk/", cn: "公园", sentence: "They are playing in the park." },
              { word: "library", phonetic: "/ˈlaɪbrəri/", cn: "图书馆", sentence: "She is reading in the library." },
              { word: "playground", phonetic: "/ˈpleɪɡraʊnd/", cn: "操场", sentence: "Boys are running on the playground." },
              { word: "kitchen", phonetic: "/ˈkɪtʃɪn/", cn: "厨房", sentence: "Mum is cooking in the kitchen." },
              { word: "river", phonetic: "/ˈrɪvə/", cn: "河", sentence: "Ducks are swimming in the river." },
              { word: "street", phonetic: "/striːt/", cn: "街道", sentence: "Cars are running on the street." },
              { word: "picture", phonetic: "/ˈpɪktʃə/", cn: "图画", sentence: "He is drawing a picture." },
              { word: "homework", phonetic: "/ˈhəʊmwɜːk/", cn: "作业", sentence: "I am doing my homework." },
              { word: "letter", phonetic: "/ˈletə/", cn: "信", sentence: "She is writing a letter." },
              { word: "song", phonetic: "/sɒŋ/", cn: "歌曲", sentence: "They are singing a song." },
              { word: "game", phonetic: "/ɡeɪm/", cn: "游戏", sentence: "We are playing a game." },
              { word: "story", phonetic: "/ˈstɔːri/", cn: "故事", sentence: "Dad is telling a story." }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 · 什么时候用现在进行时",
          blocks: [
            { type: "lesson", title: "▶ 三种情况用进行时", steps: [
              { text: "现在进行时不只表示「此刻正在做」,还有几种常见用法。今天弄清楚它的「地盘」。", emoji: "🗺️" },
              { text: "用法一:说话时正在进行的动作。Look! The baby is sleeping.(看!宝宝正在睡。)", emoji: "👀" },
              { text: "用法二:现阶段一直在做(不一定此刻)。These days I am reading a long novel.(这些天我在读一部长篇。)", emoji: "📚", scene: { type: "clues", items: [
                { head: "此刻正在", text: "now, look, listen" },
                { head: "现阶段", text: "these days" },
                { head: "标志词", text: "看到就用进行时" }
              ] } },
              { text: "标志词是好帮手:now, right now, Look!, Listen!, at the moment, these days——看到它们,多半用进行时。", emoji: "🚩" },
              { text: "否定和疑问都在 be 上做:She isn't sleeping. / Is she sleeping? — Yes, she is. 和 be 动词句一个套路。", emoji: "🔄" },
              { text: "口诀:此刻正在、现阶段;Look、Listen、now 是信号;否定疑问动 be 动词。现在进行,认准它!", emoji: "🎯" }
            ] },
            { type: "chant", lines: ["Look 和 Listen 一出现,", "现在进行时当先;", "此刻正做现阶段,", "be 加 ing 记心间!"] }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "选出最适合用现在进行时的一句:",
            options: [
              "I ___ (get) up at six every day.",
              "Look! The birds ___ (fly) in the sky.",
              "She ___ (like) music very much.",
              "We ___ (go) to school on foot usually."
            ], answer: 1,
            demoSteps: [
              { text: "找标志词:哪句里有 Look / now / Listen 这类「正在」的信号?", emoji: "🚩", scene: { type: "clues", items: [
                { head: "every day", text: "习惯 → 一般现在时" },
                { head: "Look!", text: "正在 → 进行时" },
                { head: "usually", text: "习惯 → 一般现在时" }
              ] } },
              { text: "every day、usually、like 都是习惯或状态,只有一句在讲「此刻」。", emoji: "👀" }
            ],
            explain: "B 正确:Look! 是现在进行时的标志词,表示此刻正在发生,应填 are flying。A、D 有 every day/usually 是习惯用一般现在时;C 的 like 表状态一般不用进行时。",
            explainSteps: [
              { text: "A、D:every day、usually 是习惯,用一般现在时。", emoji: "🔁" },
              { text: "C:like 表示状态,一般不用进行时。", emoji: "🚫" },
              { text: "B:Look! 提示此刻正在发生,用 are flying,选 B!", emoji: "✅" },
              { text: "看到 Look/Listen/now,几乎就是进行时的信号灯!", emoji: "🎯" }
            ] }
        },
        {
          name: "英文名著时光 · The Crow and the Pitcher",
          blocks: [
            { type: "rule", title: "📖 名著名片", html: "<b>《伊索寓言》Aesop's Fables</b>——聪明的乌鸦用石子喝到了水,办法总比困难多!" },
            { type: "reading", speakable: true, title: "The Crow and the Pitcher", paragraphs: [
              "It is a hot day. A crow is very thirsty. He is looking for water everywhere. At last he finds a pitcher. There is some water in it.",
              "But the pitcher is tall and the water is low. The crow puts his beak in, but he can't reach the water. What can he do?",
              "The crow thinks and thinks. Then he sees some small stones near the pitcher. He picks up a stone and drops it into the pitcher. Then another, and another.",
              "Slowly, the water comes up higher and higher. Now the crow can drink! 'Little by little does the trick,' he says happily. A good idea is better than strong wings."
            ], tip: "生词提示:thirsty 口渴的 / pitcher 水罐 / beak 鸟喙 / stone 石子 / drop 放入" }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "How does the crow drink the water?(乌鸦是怎么喝到水的?)",
            options: [
              "He breaks the pitcher.",
              "He drops stones into the pitcher to make the water rise.",
              "He drinks with a long straw.",
              "He asks another bird for help."
            ], answer: 1,
            demoSteps: [
              { text: "水太低够不着,乌鸦想了什么办法?它往罐里放了什么?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "问题", text: "水低够不着" },
                { head: "办法", text: "drops stones" },
                { head: "结果", text: "water comes up" }
              ] } },
              { text: "原文说它一颗颗放石子,水面慢慢升高。", emoji: "🐦" }
            ],
            explain: "B 正确。乌鸦把小石子一颗颗投进水罐,水面慢慢升高,最后就能喝到水了。",
            explainSteps: [
              { text: "水太低,乌鸦捡石子一颗颗丢进罐里。", emoji: "🪨" },
              { text: "石子占了空间,水面升高,乌鸦喝到水,选 B!", emoji: "✅" },
              { text: "寓意:遇到困难多动脑,好办法胜过蛮力。", emoji: "🎯" }
            ] }
        }
      ]
    },

    // ================== 语文 ==================
    {
      subject: "chinese", icon: "📝", title: "语文 · 《论语》十二章(下)", minutes: 40,
      units: [
        {
          name: "动画课堂 · 孔子谈修养:三省吾身",
          blocks: [
            { type: "lesson", title: "▶ 关于品德与人生的名句", steps: [
              { text: "《论语》下半部分,更多谈修养和人生。这些句子有的成了成语,有的是我们至今常说的话。", emoji: "📜" },
              { text: "「吾日三省吾身」——曾子每天多次反省自己:替人办事尽心了吗?和朋友交往诚信了吗?老师教的复习了吗?", emoji: "🪞", scene: { type: "clues", items: [
                { head: "为人谋", text: "忠(尽心)" },
                { head: "与朋友交", text: "信(诚信)" },
                { head: "传", text: "习(复习)" }
              ] } },
              { text: "「三人行,必有我师焉。」——几个人同行,里面一定有我的老师。要「择其善者而从之,其不善者而改之」。", emoji: "🚶", scene: { type: "clues", items: [
                { head: "三人行", text: "必有我师" },
                { head: "善者", text: "从之(学习)" },
                { head: "不善者", text: "改之(反省)" }
              ] } },
              { text: "「逝者如斯夫,不舍昼夜。」——时光像流水一样,日夜不停地流逝。珍惜时间的千古名句!", emoji: "🌊" },
              { text: "「三军可夺帅也,匹夫不可夺志也。」——军队可以夺去主帅,但一个人的志向不能被夺走。志向,是最强的力量。", emoji: "💪" }
            ] }
          ],
          q: { type: "choice", points: 10, voice: "zh",
            q: "「三人行,必有我师焉」这句话主要告诉我们:",
            options: [
              "走路一定要三个人一起走",
              "要善于向身边的人学习,取长补短",
              "只有老师才值得学习",
              "人多了就没有老师"
            ], answer: 1,
            demoSteps: [
              { text: "「必有我师」的「师」指什么?下文「择其善者而从之」又是什么意思?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "必有我师", text: "人人可为师" },
                { head: "善者从之", text: "学优点" },
                { head: "不善者改之", text: "改缺点" }
              ] } },
              { text: "这句强调的是一种学习态度,不是字面上的「三个人」。", emoji: "🚶" }
            ],
            explain: "B 正确。这句话强调要虚心向身边每个人学习,学习别人的优点,警惕别人的缺点,取长补短。「三人」是虚指,不是实数。",
            explainSteps: [
              { text: "「三人」是虚指「几个人」,不是非要三个人。", emoji: "🚶" },
              { text: "「必有我师」是说人人都有值得学的地方,要善于学习,选 B!", emoji: "✅" },
              { text: "配上「择善而从,不善而改」,这是一种谦虚好学的人生态度。", emoji: "🎯" }
            ] }
        },
        {
          name: "动画课堂 · 论语里的成语",
          blocks: [
            { type: "lesson", title: "▶ 两千年前的话,今天还在说", steps: [
              { text: "《论语》是成语的宝库。很多我们天天用的成语,都出自这十二章。认识它们,一举两得。", emoji: "💎" },
              { text: "「温故知新」出自「温故而知新」;「三人行必有我师」直接成了俗语;「不亦乐乎」也来自这里。", emoji: "📚", scene: { type: "clues", items: [
                { head: "温故知新", text: "复习有新得" },
                { head: "三人行…", text: "虚心求学" },
                { head: "不亦乐乎", text: "非常快乐" }
              ] } },
              { text: "「择善而从」出自「择其善者而从之」,意思是选择好的去学习、去跟从。", emoji: "🎯" },
              { text: "「逝者如斯」出自「逝者如斯夫」,比喻时光飞逝、一去不返,常用来劝人惜时。", emoji: "🌊" },
              { text: "学经典的好处:既积累了名句,又掌握了成语,还懂了做人的道理。一篇《论语》,收获满满!", emoji: "🎁" }
            ] }
          ],
          q: { type: "fill", points: 10, voice: "zh",
            q: "成语「温故知新」出自《论语》,原句是「温故而知新,__________」。(填后半句,五个字)",
            placeholder: "填五个字",
            accept: ["可以为师矣", "可以为师矣。", "可以为师"],
            demoSteps: [
              { text: "「温故而知新」之后,孔子说这样的人就可以做什么?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "温故知新", text: "复习有新得" },
                { head: "结果", text: "可以为师" },
                { head: "矣", text: "语气词「了」" }
              ] } },
              { text: "能温故知新的人,就有资格当老师了。", emoji: "👨‍🏫" }
            ],
            explain: "原句:温故而知新,可以为师矣。意思是温习旧知识能获得新体会,这样的人就可以做老师了。",
            explainSteps: [
              { text: "「可以为师矣」——就可以当老师了。", emoji: "👨‍🏫" },
              { text: "注意「可以」在文言里是「可以凭借」,「矣」是语气词。", emoji: "📖" },
              { text: "答「可以为师矣」。温故知新既是成语,也是最好的学习方法!", emoji: "✅" }
            ] }
        },
        {
          name: "今日彩蛋 · 名著打卡",
          blocks: [
            { type: "rule", title: "📖 睡前 20 分钟名著时间", html: "继续读<b>《西游记》</b>!今晚学曾子「三省吾身」,睡前问自己三个问题:<b>今天的任务尽力了吗?对家人朋友诚实了吗?学的东西复习了吗?</b><br>坚持每天反省,你会一天比一天更好。" }
          ],
          q: null
        }
      ]
    },

    // ================== 地理 ==================
    {
      subject: "geography", icon: "🌍", title: "地理 · 陆地与海洋", minutes: 25,
      units: [
        {
          name: "动画课堂 · 七分海洋,三分陆地",
          blocks: [
            { type: "lesson", title: "▶ 蓝色星球的面貌", steps: [
              { text: "从太空看地球,是一颗蓝色的星球。因为它表面绝大部分是海洋——「七分海洋,三分陆地」。", emoji: "🌍", scene: { type: "sea", phase: "sun" } },
              { text: "准确地说:海洋约占 71%,陆地约占 29%。无论怎么把地球对半分,总是海洋的面积更大。", emoji: "📊", scene: { type: "clues", items: [
                { head: "海洋", text: "约 71%" },
                { head: "陆地", text: "约 29%" },
                { head: "口诀", text: "七分海三分陆" }
              ] } },
              { text: "陆地分成七大洲:亚洲、非洲、北美洲、南美洲、南极洲、欧洲、大洋洲(按面积从大到小)。亚洲最大。", emoji: "🗺️" },
              { text: "海洋分成四大洋:太平洋、大西洋、印度洋、北冰洋(按面积从大到小)。太平洋最大最深。", emoji: "🌊", scene: { type: "clues", items: [
                { head: "最大的洲", text: "亚洲" },
                { head: "最大的洋", text: "太平洋" },
                { head: "最小的洋", text: "北冰洋" }
              ] } },
              { text: "记忆法:七大洲「亚非北南美,南极欧大洋」,四大洋「太大印北」。海洋比陆地大得多,别记反!", emoji: "🎯" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "关于地球上的海陆分布,下列说法正确的一项是:",
            options: [
              "陆地面积比海洋大,约占地球表面的 71%",
              "海洋面积约占地球表面的 71%,陆地约占 29%",
              "七大洲中面积最大的是非洲",
              "四大洋中面积最大的是大西洋"
            ], answer: 1,
            demoSteps: [
              { text: "回忆三个数字/最值:海陆比例、最大的洲、最大的洋。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "海洋", text: "71%(更大)" },
                { head: "最大洲", text: "亚洲" },
                { head: "最大洋", text: "太平洋" }
              ] } },
              { text: "把海陆说反、洲和洋说错的排除。", emoji: "🌍" }
            ],
            explain: "B 正确。海洋约 71%、陆地约 29%,海洋更大。A 把海陆说反;C 最大的洲是亚洲不是非洲;D 最大的洋是太平洋不是大西洋。",
            explainSteps: [
              { text: "A:海洋 71% 更大,陆地才 29%,A 把海陆搞反了。", emoji: "❌" },
              { text: "C:最大的洲是亚洲(非洲第二),错。", emoji: "❌" },
              { text: "D:最大的洋是太平洋(大西洋第二),错。", emoji: "❌" },
              { text: "B:海洋 71%、陆地 29%,正确!选 B。记住「七分海三分陆」。", emoji: "✅" }
            ] }
        }
      ]
    }
  ]
};
