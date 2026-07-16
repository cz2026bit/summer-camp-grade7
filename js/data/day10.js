// ============ 第 10 关 ============
window.DAYS = window.DAYS || {};

window.DAYS[10] = {
  day: 10,
  title: "第 10 关 · 除法翻个身",
  estimate: "四科约 2~3 小时 · 共 7 道思考题(含 1 道 BOSS 题)",
  sections: [
    // ================== 数学 ==================
    {
      subject: "math", icon: "🔢", title: "数学 · 有理数除法", minutes: 50,
      units: [
        {
          name: "动画课堂 1 · 除法翻个身,变成乘法",
          blocks: [
            { type: "lesson", title: "▶ 除以一个数 = 乘它的倒数", steps: [
              { text: "有理数除法有个偷懒大招:除以一个数,等于乘它的倒数。除法一翻身,就变成了我们熟悉的乘法!", emoji: "🤸" },
              { text: "什么是倒数?乘积是 1 的两个数互为倒数。3 的倒数是 1/3,−2/5 的倒数是 −5/2。", emoji: "🔁", scene: { type: "clues", items: [
                { head: "倒数", text: "乘积为 1" },
                { head: "3 的倒数", text: "1/3" },
                { head: "−2/5 的倒数", text: "−5/2" }
              ] } },
              { text: "例:(−6) ÷ 3 = (−6) × (1/3) = −2。除法一翻身,符号法则和乘法完全一样!", emoji: "🎯" },
              { text: "所以除法符号也是:同号得正,异号得负。(−12) ÷ (−4) = +3,异号 (−12) ÷ 4 = −3。", emoji: "⚖️" },
              { text: "重要红线:0 不能作除数!除以 0 没有意义,但 0 除以任何非零数都得 0。", emoji: "🚫" }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 2 · 乘除混合:统一成乘法一算到底",
          blocks: [
            { type: "lesson", title: "▶ 把除号全变乘号,再数负号", steps: [
              { text: "乘除混合运算的通关秘诀:先把所有除法翻身成乘法,整个算式只剩乘号,再一口气算完。", emoji: "🔧" },
              { text: "例:(−8) ÷ 2 × (−3)。先翻身:(−8) × (1/2) × (−3)。", emoji: "🤸", scene: { type: "clues", items: [
                { head: "原式", text: "(−8) ÷ 2 × (−3)" },
                { head: "翻身", text: "(−8) ×(1/2)×(−3)" },
                { head: "数负号", text: "2 个 → 正" }
              ] } },
              { text: "数负号:−8 和 −3 共 2 个,偶数 → 正!再算绝对值:8 × 1/2 × 3 = 12,结果 +12。", emoji: "🎲" },
              { text: "易错点:除法翻身时,只把「除数」变倒数,被除数不动!(−8) ÷ 2 是 −8 乘 1/2,不是 −1/8 乘 2。", emoji: "⚠️" },
              { text: "口诀:除号变乘号,除数取倒数,负号数一数,绝对值相乘。四步走稳!", emoji: "🏅" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "计算 (−12) ÷ (−3) × (−2) 的结果是:",
            options: ["8", "−8", "2", "−2"], answer: 1,
            demoSteps: [
              { text: "先把除法翻身:(−12) × (−1/3) × (−2)。", emoji: "🤸", scene: { type: "clues", items: [
                { head: "翻身", text: "(−12)×(−1/3)×(−2)" },
                { head: "负号个数", text: "3 个(奇数)" },
                { head: "符号", text: "负" }
              ] } },
              { text: "数负号:3 个,奇数 → 负;绝对值 12 × 1/3 × 2 = 8。", emoji: "🎲" }
            ],
            explain: "翻身后三个负因数(奇数)→ 负;绝对值 12 × 1/3 × 2 = 8,结果 −8。选 B。",
            explainSteps: [
              { text: "(−12) ÷ (−3) = +4,再 × (−2) = −8。也可数负号:3 个,负。", emoji: "🎲" },
              { text: "绝对值:12 ÷ 3 × 2 = 8,配负号 = −8,选 B!", emoji: "✅" },
              { text: "A 少数了一个负号。乘除混合按顺序从左到右,或先定符号更保险!", emoji: "🎯" }
            ] }
        },
        {
          name: "🔥 BOSS 挑战 · 分摊维修费",
          blocks: [
            { type: "text", html: "💪 <b>BOSS 战规则</b>:用除法解决生活里的「平均分」问题,注意亏损用负数!草稿纸准备!" }
          ],
          q: { type: "fill", points: 20, boss: true, voice: "zh",
            q: "小店一周亏损了 84 元,记作 −84 元。这 7 天平均每天盈亏多少元?用算式 (−84) ÷ 7 计算,结果是多少元?(直接填数字,含正负号)",
            placeholder: "例如: -10",
            accept: ["-12", "−12", "-12元", "负12", "负十二"],
            demoSteps: [
              { text: "一周亏损 −84 元,平均分到 7 天,就是 (−84) ÷ 7。", emoji: "🧮", scene: { type: "clues", items: [
                { head: "总盈亏", text: "−84 元" },
                { head: "天数", text: "7 天" },
                { head: "列式", text: "(−84) ÷ 7" }
              ] } },
              { text: "定符号:异号得负;算绝对值:84 ÷ 7 = 12。", emoji: "🎯" }
            ],
            explain: "(−84) ÷ 7:异号得负,84 ÷ 7 = 12,结果 −12 元,即平均每天亏损 12 元。",
            explainSteps: [
              { text: "总亏损 −84 平均分 7 天,列式 (−84) ÷ 7。", emoji: "🧮" },
              { text: "异号得负,84 ÷ 7 = 12,结果 −12 元。", emoji: "🎯" },
              { text: "−12 表示每天平均亏 12 元。除法就是「平均分」的数学语言!", emoji: "🏆" }
            ] }
        }
      ]
    },

    // ================== 英语 ==================
    {
      subject: "english", icon: "📚", title: "英语 · 频度副词", minutes: 45,
      units: [
        {
          name: "单词训练营 · 时间与频率 12 个(点卡片听发音!)",
          blocks: [
            { type: "text", html: "🎧 今天的词都在讲<span class='hl'>多久做一次</span>!学完就能说清自己的作息规律。点卡片听发音,跟读 3 遍。" },
            { type: "flashcards", words: [
              { word: "always", phonetic: "/ˈɔːlweɪz/", cn: "总是", sentence: "She always gets up early." },
              { word: "usually", phonetic: "/ˈjuːʒuəli/", cn: "通常", sentence: "I usually walk to school." },
              { word: "often", phonetic: "/ˈɒfn/", cn: "经常", sentence: "We often play chess." },
              { word: "sometimes", phonetic: "/ˈsʌmtaɪmz/", cn: "有时", sentence: "He sometimes cooks dinner." },
              { word: "never", phonetic: "/ˈnevə/", cn: "从不", sentence: "I never eat too much." },
              { word: "morning", phonetic: "/ˈmɔːnɪŋ/", cn: "早晨", sentence: "I read in the morning." },
              { word: "afternoon", phonetic: "/ˌɑːftəˈnuːn/", cn: "下午", sentence: "We have PE in the afternoon." },
              { word: "evening", phonetic: "/ˈiːvnɪŋ/", cn: "傍晚", sentence: "They watch TV in the evening." },
              { word: "week", phonetic: "/wiːk/", cn: "星期;周", sentence: "I swim twice a week." },
              { word: "weekend", phonetic: "/ˌwiːkˈend/", cn: "周末", sentence: "We visit grandma on weekends." },
              { word: "early", phonetic: "/ˈɜːli/", cn: "早的", sentence: "He goes to bed early." },
              { word: "late", phonetic: "/leɪt/", cn: "晚的;迟的", sentence: "Don't be late for class." }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 · 频度副词:放对位置是关键",
          blocks: [
            { type: "lesson", title: "▶ always / usually / often / sometimes / never", steps: [
              { text: "频度副词回答「多久做一次」。从高到低排队:always(100%)→ usually → often → sometimes → never(0%)。", emoji: "📊", scene: { type: "clues", items: [
                { head: "总是", text: "always 100%" },
                { head: "经常", text: "often" },
                { head: "从不", text: "never 0%" }
              ] } },
              { text: "位置口诀:「行前 be 后」——放在实义动词前面,放在 be 动词后面。", emoji: "📍", scene: { type: "match", groups: [
                { head: "实义动词前", items: ["I often read", "She always runs"] },
                { head: "be 动词后", items: ["He is never late", "They are usually happy"] }
              ] } },
              { text: "例:I always get up at six.(行前)/ She is usually busy.(be 后)。", emoji: "✅" },
              { text: "特别注意:never 本身就表示否定,不能再加 not!说 I never lie,不能说 I don't never lie。", emoji: "🚫" }
            ] },
            { type: "chant", lines: ["频度副词表次数,", "行前 be 后记心里;", "always 到 never 排一排,", "never 已否定别再 not!"] }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "选出完全正确的一句:",
            options: [
              "She always is happy on weekends.",
              "She is always happy on weekends.",
              "She is happy always on weekends.",
              "She don't never is happy."
            ], answer: 1,
            demoSteps: [
              { text: "句中的动词是 be 动词 is,频度副词该放它前面还是后面?", emoji: "📍", scene: { type: "clues", items: [
                { head: "动词是", text: "is(be 动词)" },
                { head: "规则", text: "be 动词后" },
                { head: "正确位置", text: "is always" }
              ] } },
              { text: "「be 后」——always 要放在 is 后面。", emoji: "✅" }
            ],
            explain: "B 正确:is 是 be 动词,always 放在它后面(is always)。A 放到了 is 前面;C 位置太靠后;D 双重否定且语法混乱。",
            explainSteps: [
              { text: "动词是 is(be 动词),频度副词要放在 be 后面。", emoji: "📍" },
              { text: "A 放在 is 前(应 be 后),错;C always 太靠后,别扭。", emoji: "❌" },
              { text: "D:don't never 双重否定,大错。", emoji: "❌" },
              { text: "B:is always happy,位置正确!选 B。记住「行前 be 后」。", emoji: "✅" }
            ] }
        },
        {
          name: "英文名著时光 · The Fox and the Grapes",
          blocks: [
            { type: "rule", title: "📖 名著名片", html: "<b>《伊索寓言》Aesop's Fables</b>——「酸葡萄」一词就出自这个故事!得不到就说它不好,是很多人的小毛病。" },
            { type: "reading", speakable: true, title: "The Fox and the Grapes", paragraphs: [
              "A fox walks through the forest. He is hungry. Then he sees some grapes high on a tree. They look sweet and juicy.",
              "'What lovely grapes!' says the fox. 'I want to eat them.' He jumps up, but he can't reach them. He jumps again and again, but the grapes are too high.",
              "At last the fox is tired. He can't get the grapes. He walks away and says, 'I don't want those grapes. They are green and sour anyway.'",
              "But of course, the grapes are not sour. The fox just can't reach them. It is easy to hate what we cannot have."
            ], tip: "生词提示:grapes 葡萄 / juicy 多汁的 / reach 够到 / sour 酸的" }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "Why does the fox say the grapes are sour?(狐狸为什么说葡萄是酸的?)",
            options: [
              "Because he tastes the grapes.",
              "Because the grapes are really green.",
              "Because he can't reach them and doesn't want to feel bad.",
              "Because another animal tells him so."
            ], answer: 2,
            demoSteps: [
              { text: "狐狸尝到葡萄了吗?他说酸之前发生了什么?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "狐狸", text: "can't reach the grapes" },
                { head: "他说", text: "they are sour" },
                { head: "真相", text: "grapes are not sour" }
              ] } },
              { text: "原文说 the grapes are not sour,他只是够不着。", emoji: "🦊" }
            ],
            explain: "C 正确。狐狸够不到葡萄,为了让自己好受些,就骗自己说葡萄是酸的。这就是「酸葡萄心理」。",
            explainSteps: [
              { text: "狐狸跳了又跳还是够不着,累了就走。", emoji: "🦊" },
              { text: "他说葡萄酸,其实葡萄不酸——只是找借口安慰自己,选 C!", emoji: "✅" },
              { text: "寓意:得不到就贬低它,是一种自欺。承认「我够不到」更需要勇气。", emoji: "🎯" }
            ] }
        }
      ]
    },

    // ================== 语文 ==================
    {
      subject: "chinese", icon: "📝", title: "语文 · 《世说新语·咏雪》", minutes: 40,
      units: [
        {
          name: "动画课堂 · 咏雪:才女谢道韫的比喻",
          blocks: [
            { type: "lesson", title: "▶ 一场雪,考出了千古才女", steps: [
              { text: "《世说新语》是南朝的一部笔记小说,记录名士的言谈趣事。《咏雪》讲的是一次家庭聚会里的比才。", emoji: "❄️" },
              { text: "谢太傅寒雪日内集,与儿女讲论文义。忽然雪下大了,他高兴地问:「白雪纷纷何所似?」(像什么?)", emoji: "🏠", scene: { type: "clues", items: [
                { head: "时间", text: "寒雪日" },
                { head: "人物", text: "谢太傅与儿女" },
                { head: "问题", text: "白雪像什么" }
              ] } },
              { text: "侄儿胡儿说:「撒盐空中差可拟。」(像空中撒盐)——形似,但少了美感。", emoji: "🧂" },
              { text: "侄女谢道韫说:「未若柳絮因风起。」(不如说像柳絮乘风飞舞)——既像雪的轻盈,又有春的诗意,妙!", emoji: "🍃" },
              { text: "太傅大笑,十分满意。后人因此称赞有才华的女子为「咏絮之才」。好的比喻,不只求「像」,更求「美」。", emoji: "🌸" }
            ] }
          ],
          q: { type: "choice", points: 10, voice: "zh",
            q: "《咏雪》中谢道韫用「柳絮因风起」比喻白雪,历来被认为比「撒盐空中」更好,主要原因是:",
            options: [
              "柳絮比盐更常见",
              "柳絮不仅形似雪花,还写出了雪的轻盈飘舞,更有意境美",
              "谢道韫是女孩子,大家让着她",
              "撒盐的比喻完全不对"
            ], answer: 1,
            demoSteps: [
              { text: "两个比喻都「像」雪,差别在哪?一个是死板的形似,一个多了什么?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "撒盐", text: "只求形似" },
                { head: "柳絮", text: "形似+轻盈+诗意" },
                { head: "高下", text: "意境美取胜" }
              ] } },
              { text: "想一想:盐往下掉,柳絮随风飘,哪个更像雪花飞舞的样子?", emoji: "🍃" }
            ],
            explain: "B 正确。柳絮和雪同样轻盈、随风飞舞,既形似又有春天的意境;撒盐只有形似,盐还往下坠,缺乏美感。",
            explainSteps: [
              { text: "撒盐:颜色白、形状像,但盐是往下掉的,呆板。", emoji: "🧂" },
              { text: "柳絮:轻盈、随风起舞,和雪花飘飞一模一样,还带春意,选 B!", emoji: "✅" },
              { text: "好比喻的标准:不仅「像」,还要美、要有意境。这就是谢道韫的高明之处。", emoji: "🌸" }
            ] }
        },
        {
          name: "动画课堂 · 文言词:古今异义与称谓",
          blocks: [
            { type: "lesson", title: "▶ 读文言,先过词语关", steps: [
              { text: "读懂文言文,关键在词。《咏雪》里有几个词要特别记牢,考试常考。", emoji: "📖" },
              { text: "「儿女」古义指「子侄辈的年轻人」,不是今天的「儿子女儿」——这叫古今异义。", emoji: "🔀", scene: { type: "clues", items: [
                { head: "儿女(古)", text: "子侄辈" },
                { head: "儿女(今)", text: "儿子女儿" },
                { head: "内集", text: "家庭聚会" }
              ] } },
              { text: "「差可拟」的「拟」是「相比」;「未若」是「不如、比不上」。这些是文言高频词。", emoji: "🔑" },
              { text: "古代称谓有讲究:「太傅」是官职;文中谢太傅即谢安。读文言留心人名、官名,别把它们当普通词。", emoji: "👤" },
              { text: "学文言口诀:一词一查,古今分清,称谓认准。积累多了,读起来就顺了。", emoji: "🧱" }
            ] }
          ],
          q: { type: "fill", points: 10, voice: "zh",
            q: "《咏雪》「与儿女讲论文义」中的「儿女」,古义指的是__________,与今义不同。(填四个字,如「子侄晚辈」)",
            placeholder: "填四个字",
            accept: ["子侄晚辈", "子侄辈", "子侄辈的人", "晚辈子侄", "小辈子侄"],
            demoSteps: [
              { text: "今天的「儿女」指儿子女儿,但古文里范围更大。", emoji: "🔀", scene: { type: "clues", items: [
                { head: "今义", text: "儿子女儿" },
                { head: "古义", text: "包括侄辈" },
                { head: "谢道韫", text: "是侄女" }
              ] } },
              { text: "谢道韫是谢安的侄女也算「儿女」,可见古义指子侄一辈的晚辈。", emoji: "👧" }
            ],
            explain: "古义指「子侄辈的晚辈」(子侄晚辈),范围比今天的「儿女」大,谢道韫作为侄女也在其中。这是典型的古今异义。",
            explainSteps: [
              { text: "文中谢道韫是侄女,也被称作「儿女」,说明古义包括侄辈。", emoji: "👧" },
              { text: "所以「儿女」古义 = 子侄晚辈,和今义「儿子女儿」不同。", emoji: "✅" },
              { text: "古今异义是文言必考点,遇到熟词别急,先想它古代什么意思。", emoji: "🎯" }
            ] }
        },
        {
          name: "今日彩蛋 · 名著打卡",
          blocks: [
            { type: "rule", title: "📖 睡前 20 分钟名著时间", html: "继续读<b>《西游记》</b>!今晚也学谢道韫,给身边的东西打个漂亮的比喻:<b>看看窗外的月亮、灯光、树影,像什么?</b><br>写下一句最美的比喻,明天读给家人听——好比喻,是能写好作文的秘密武器。" }
          ],
          q: null
        }
      ]
    },

    // ================== 历史 ==================
    {
      subject: "history", icon: "🏺", title: "历史 · 春秋战国的纷争", minutes: 25,
      units: [
        {
          name: "动画课堂 · 大动荡里的大变革",
          blocks: [
            { type: "lesson", title: "▶ 春秋争霸与战国七雄", steps: [
              { text: "周王室衰落后,天下进入春秋战国。这是一个「乱」的时代,却也是思想和技术大爆发的时代。", emoji: "⚔️" },
              { text: "春秋时期,诸侯争当「霸主」,先后有齐桓公、晋文公等「春秋五霸」。齐桓公任用管仲改革,「尊王攘夷」最先称霸。", emoji: "👑", scene: { type: "clues", items: [
                { head: "春秋", text: "争霸称雄" },
                { head: "首霸", text: "齐桓公" },
                { head: "口号", text: "尊王攘夷" }
              ] } },
              { text: "到了战国,大国吞小国,只剩齐、楚、燕、韩、赵、魏、秦——史称「战国七雄」。", emoji: "🗺️", scene: { type: "clues", items: [
                { head: "战国七雄", text: "齐楚燕韩赵魏秦" },
                { head: "特点", text: "兼并战争激烈" },
                { head: "最终", text: "秦国胜出" }
              ] } },
              { text: "乱世也是变革世:铁农具和牛耕推广,生产力大发展,各国纷纷变法图强,为统一埋下伏笔。", emoji: "🐂" },
              { text: "记忆法:春秋「争霸」(称老大),战国「兼并」(灭对方)。一个抢面子,一个抢地盘。", emoji: "🎯" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "关于春秋战国时期,下列说法正确的一项是:",
            options: [
              "春秋时期第一个称霸的是秦始皇",
              "「战国七雄」指齐、楚、燕、韩、赵、魏、秦七个国家",
              "这一时期铁农具和牛耕仍未出现",
              "春秋战国是一个和平安定的时期"
            ], answer: 1,
            demoSteps: [
              { text: "回忆关键词:首霸是谁?七雄是哪七个?生产工具有何变化?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "首霸", text: "齐桓公" },
                { head: "七雄", text: "齐楚燕韩赵魏秦" },
                { head: "工具", text: "铁农具+牛耕" }
              ] } },
              { text: "把时间错乱、工具说错、性质说反的排除掉。", emoji: "🔍" }
            ],
            explain: "B 正确。A 错:首霸是齐桓公,秦始皇是几百年后统一中国的人;C 错:此时铁农具牛耕已推广;D 错:这是战争频繁的动荡时期。",
            explainSteps: [
              { text: "A:秦始皇晚了几百年,春秋首霸是齐桓公,错。", emoji: "❌" },
              { text: "C:铁农具、牛耕正是这时推广的,大大提高了生产力,错。", emoji: "❌" },
              { text: "D:春秋争霸、战国兼并,战争不断,绝不安定,错。", emoji: "❌" },
              { text: "B:战国七雄「齐楚燕韩赵魏秦」,正确!选 B。", emoji: "✅" }
            ] }
        }
      ]
    }
  ]
};
