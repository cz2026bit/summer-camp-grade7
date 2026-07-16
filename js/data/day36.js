// ============ 第 36 关 ============
window.DAYS = window.DAYS || {};

window.DAYS[36] = {
  day: 36,
  title: "第 36 关 · 数与式总复习",
  estimate: "四科约 2~3 小时 · 共 7 道冲刺题(含 1 道 BOSS 题)",
  sections: [
    // ================== 数学 ==================
    {
      subject: "math", icon: "🔢", title: "数学 · 综合复习:数与式", minutes: 50,
      units: [
        {
          name: "动画课堂 · 有理数与整式大盘点",
          blocks: [
            { type: "lesson", title: "▶ 前五周数与式,一次串清", steps: [
              { text: "进入最后一周——模拟测评周!今晚先把「数与式」的核心知识串一遍,为模拟测试打好基础。", emoji: "🏁" },
              { text: "有理数:正负数、数轴、相反数、绝对值;运算「先乘方,后乘除,最后加减」,减负数变身、乘除定符号。", emoji: "🔢", scene: { type: "clues", items: [
                { head: "数轴", text: "右大左小" },
                { head: "绝对值", text: "距离·非负" },
                { head: "运算顺序", text: "方→乘除→加减" }
              ] } },
              { text: "易错点回顾:(−2)² = 4 但 −2² = −4;|−5| = 5;减去负数等于加正数。这些「陷阱」年年考。", emoji: "⚠️", scene: { type: "clues", items: [
                { head: "(−2)²", text: "= 4" },
                { head: "−2²", text: "= −4" },
                { head: "|−5|", text: "= 5" }
              ] } },
              { text: "整式:单项式(系数、次数)、多项式(项、次数、常数项);合并同类项、去括号(前−全变号)。", emoji: "🔤" },
              { text: "科学记数法:a×10ⁿ,a 只留一位整数。数与式是初中数学的根基,基础牢,后面才稳!", emoji: "🎯" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "下列计算正确的一项是:",
            options: [
              "−3² = 9",
              "|−4| + (−4) = 0",
              "(−2)³ = 8",
              "5 − (−3) = 2"
            ], answer: 1,
            demoSteps: [
              { text: "逐项排查易错点:注意 −3² 的负号在括外,|−4| 是距离,(−2)³ 数负号,减负数变身。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "−3²", text: "= −9" },
                { head: "|−4|+(−4)", text: "4+(−4)=0" },
                { head: "5−(−3)", text: "= 8" }
              ] } },
              { text: "一个个算,找出唯一正确的。", emoji: "🧮" }
            ],
            explain: "B 正确:|−4| = 4,4 + (−4) = 0。A 错(−3²=−9);C 错((−2)³=−8);D 错(5−(−3)=8)。",
            explainSteps: [
              { text: "A:−3² 负号在外 = −9,不是 9,错。", emoji: "❌" },
              { text: "C:(−2)³ 三个负号奇数 = −8,错;D:5−(−3)=5+3=8,错。", emoji: "❌" },
              { text: "B:|−4|=4,4+(−4)=0,正确!选 B。这些正是常错的陷阱题!", emoji: "✅" }
            ] }
        },
        {
          name: "🔥 BOSS 挑战 · 数与式综合",
          blocks: [
            { type: "text", html: "💪 <b>BOSS 战规则</b>:混合运算 + 化简求值,数与式全考!沉住气,一步步走。草稿纸准备!" }
          ],
          q: { type: "fill", points: 20, boss: true, voice: "zh",
            q: "先化简 3(a − 2) − (2a − 5),再求当 a = −1 时的值。请算出最后结果。(直接填数字,含正负号)",
            placeholder: "例如: 5",
            accept: ["-2", "−2", "负2", "负二"],
            demoSteps: [
              { text: "先去括号:3(a−2)=3a−6;−(2a−5)=−2a+5(前面减号全变号!)。", emoji: "📦", scene: { type: "clues", items: [
                { head: "3(a−2)", text: "3a−6" },
                { head: "−(2a−5)", text: "−2a+5" },
                { head: "合并", text: "a−1" }
              ] } },
              { text: "合并:3a−2a=a,−6+5=−1,化简成 a−1,再代 a=−1。", emoji: "🧹" }
            ],
            explain: "去括号:3a−6−2a+5;合并:a−1。代入 a=−1:(−1)−1 = −2。",
            explainSteps: [
              { text: "去括号:3a − 6 − 2a + 5(减号后全变号)。", emoji: "📦" },
              { text: "合并同类项:a − 1。", emoji: "🧹" },
              { text: "代入 a=−1:−1 − 1 = −2!去括号+合并+代入,数与式综合拿下!", emoji: "🏆" }
            ] }
        }
      ]
    },

    // ================== 英语 ==================
    {
      subject: "english", icon: "📚", title: "英语 · 综合复习:词汇与语法", minutes: 45,
      units: [
        {
          name: "单词大挑战 · 六周高频词回顾(点卡片听发音!)",
          blocks: [
            { type: "text", html: "🎧 六周下来学了几百个单词!抽 10 个最重要的再听一遍,为模拟测试热身。" },
            { type: "flashcards", words: [
              { word: "family", phonetic: "/ˈfæmɪli/", cn: "家庭", sentence: "I love my family." },
              { word: "study", phonetic: "/ˈstʌdi/", cn: "学习", sentence: "She studies English." },
              { word: "always", phonetic: "/ˈɔːlweɪz/", cn: "总是", sentence: "He always helps me." },
              { word: "went", phonetic: "/went/", cn: "去(过去)", sentence: "We went to the park." },
              { word: "will", phonetic: "/wɪl/", cn: "将会", sentence: "I will try my best." },
              { word: "because", phonetic: "/bɪˈkɒz/", cn: "因为", sentence: "I like it because it's fun." },
              { word: "there are", phonetic: "/ðeər ɑː/", cn: "有(复数)", sentence: "There are many books." },
              { word: "some", phonetic: "/sʌm/", cn: "一些", sentence: "I have some friends." },
              { word: "quiet", phonetic: "/ˈkwaɪət/", cn: "安静的", sentence: "Be quiet, please." },
              { word: "future", phonetic: "/ˈfjuːtʃə/", cn: "未来", sentence: "In the future, I will travel." }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 · 语法总复盘:六大板块",
          blocks: [
            { type: "lesson", title: "▶ 名词·代词·时态·句型全串起来", steps: [
              { text: "六周英语语法,可以归成六大板块。今晚一次串清,模拟测试心里有底。", emoji: "🧩" },
              { text: "名词:可数(加 s、用 many)/不可数(借容器、用 much);some 肯定、any 否定疑问。", emoji: "🔤", scene: { type: "clues", items: [
                { head: "名词", text: "可数/不可数" },
                { head: "代词", text: "人称/物主" },
                { head: "冠词", text: "a/an/the" }
              ] } },
              { text: "be 动词与时态:一般现在(原形/加 s)、现在进行(be+ing)、一般过去(过去式)、一般将来(will/be going to)。", emoji: "⏱️" },
              { text: "情态动词(can/must + 原形)、祈使句(动词原形开头)、There be(就近原则)、介词(in/on/at)。", emoji: "🔧", scene: { type: "clues", items: [
                { head: "情态动词", text: "+ 原形" },
                { head: "祈使句", text: "动词打头" },
                { head: "There be", text: "就近原则" }
              ] } },
              { text: "复习方法:每个板块记一个「口诀 + 一个例句」。板块清晰,做题时就知道考的是哪一块!", emoji: "🎯" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "选出完全正确的一句:",
            options: [
              "There are some water on the table, and she don't like it.",
              "There is some water on the table, and she doesn't like it.",
              "There are some water on the table, and she doesn't likes it.",
              "There is any water on the table, and she doesn't like it."
            ], answer: 1,
            demoSteps: [
              { text: "考三点:water 可数吗?配 is 还是 are?肯定句用 some 还是 any?三单否定怎么变?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "water", text: "不可数 → is" },
                { head: "肯定句", text: "用 some" },
                { head: "she 否定", text: "doesn't + 原形" }
              ] } },
              { text: "water 不可数配 is,肯定句用 some,she 否定用 doesn't like。", emoji: "✅" }
            ],
            explain: "B 正确:There is(water 不可数)、some(肯定句)、doesn't like(三单否定+原形)。A 的 are/don't 错;C 的 are/likes 错;D 肯定句该用 some。",
            explainSteps: [
              { text: "water 不可数,用 There is;A、C 用 are 错。", emoji: "❌" },
              { text: "肯定句用 some;D 用 any 错。三单否定 doesn't + 原形 like;C 的 likes 错。", emoji: "❌" },
              { text: "B 三处全对!选 B。多板块联动题,逐点排查最稳!", emoji: "✅" }
            ] }
        },
        {
          name: "英文名著时光 · The Lion and the Mouse(回顾)",
          blocks: [
            { type: "rule", title: "📖 名著名片", html: "<b>《伊索寓言》Aesop's Fables</b>——《狮子与老鼠》:再小的朋友,也能在关键时刻帮上大忙。" },
            { type: "reading", speakable: true, title: "The Lion and the Mouse", paragraphs: [
              "A big lion is sleeping. A little mouse runs over him and wakes him up. The lion catches the mouse in his paw. 'Please let me go,' says the mouse. 'One day I may help you.' The lion laughs — how can such a small mouse help a big lion? But he lets the mouse go.",
              "Some days later, the lion is caught in a hunter's net. He roars and roars, but he can't get free.",
              "The little mouse hears him. She runs to the net and bites the ropes with her small sharp teeth. Bit by bit, she cuts through the net.",
              "At last the lion is free! 'Thank you, little friend,' he says. 'You were right — even a small mouse can help a big lion.' Now they are good friends forever."
            ], tip: "生词提示:paw 爪子 / net 网 / roar 吼叫 / rope 绳子 / sharp 锋利的" }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "How does the little mouse help the lion?(小老鼠是怎样帮助狮子的?)",
            options: [
              "She brings other animals to help.",
              "She bites through the ropes of the net and sets the lion free.",
              "She scares the hunter away.",
              "She gives the lion some food."
            ], answer: 1,
            demoSteps: [
              { text: "狮子被网困住,小老鼠用什么帮它脱身?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "狮子", text: "被猎网困住" },
                { head: "老鼠", text: "咬断绳子" },
                { head: "结果", text: "狮子自由" }
              ] } },
              { text: "老鼠用锋利的牙齿咬断网绳。", emoji: "🐭" }
            ],
            explain: "B 正确。狮子被猎人的网困住,小老鼠用锋利的小牙一点点咬断网绳,救了狮子。",
            explainSteps: [
              { text: "狮子曾放走小老鼠,老鼠说将来会报答。", emoji: "🦁" },
              { text: "狮子落网,老鼠咬断绳子救了它,选 B!", emoji: "✅" },
              { text: "寓意:不要小看任何人,再弱小也可能在关键时刻帮上大忙。", emoji: "🎯" }
            ] }
        }
      ]
    },

    // ================== 语文 ==================
    {
      subject: "chinese", icon: "📝", title: "语文 · 综合复习:基础知识", minutes: 40,
      units: [
        {
          name: "动画课堂 · 字音·字形·成语·病句总复习",
          blocks: [
            { type: "lesson", title: "▶ 语文基础题,一网打尽", steps: [
              { text: "模拟测评周!今晚复习语文基础知识——字音、字形、成语、病句,这些都是选择题的送分点。", emoji: "🏁" },
              { text: "字音:多音字看语境(和 hé/hè)、形声字别读半边。字形:形近字辨清(戴/带、燥/躁)。", emoji: "🗣️", scene: { type: "clues", items: [
                { head: "字音", text: "多音字看语境" },
                { head: "字形", text: "形近字辨清" },
                { head: "方法", text: "结合词义" }
              ] } },
              { text: "成语:防望文生义(差强人意=大体满意)、防用错对象、防褒贬误用。", emoji: "📖" },
              { text: "病句四步法:找主谓宾,看①成分残缺②搭配不当③语序不当④重复啰嗦⑤否定不当。", emoji: "🩺", scene: { type: "clues", items: [
                { head: "成分残缺", text: "缺主语" },
                { head: "搭配不当", text: "主谓不配" },
                { head: "重复啰嗦", text: "大约…左右" }
              ] } },
              { text: "复习口诀:字音结合词义辨,字形形近要分清;成语防止望文义,病句四步来诊断!", emoji: "🎯" }
            ] }
          ],
          q: { type: "choice", points: 10, voice: "zh",
            q: "下列句子没有语病的一项是:",
            options: [
              "为了防止不再发生类似事故,学校加强了安全教育。",
              "通过这次学习,使我提高了认识。",
              "他是一位有三十多年教龄的优秀的老教师。",
              "我估计他今天一定不会来了。"
            ], answer: 2,
            demoSteps: [
              { text: "逐句诊断:A 否定叠加?B 缺主语?C 有没有病?D 前后矛盾?", emoji: "🩺", scene: { type: "clues", items: [
                { head: "A", text: "防止…不再=否定不当" },
                { head: "B", text: "通过…使…=缺主语" },
                { head: "D", text: "估计…一定=矛盾" }
              ] } },
              { text: "找出没有毛病的那一句。", emoji: "🔍" }
            ],
            explain: "C 正确,没有语病。A 否定不当(防止+不再);B 缺主语(通过+使);D 前后矛盾(估计+一定)。",
            explainSteps: [
              { text: "A:「防止不再发生」= 让它发生,否定叠加,病。", emoji: "❌" },
              { text: "B:「通过…使…」没了主语,病;D:「估计」与「一定」矛盾,病。", emoji: "❌" },
              { text: "C 句成分完整、搭配得当,没病!选 C。病句四步法,一诊一个准!", emoji: "✅" }
            ] }
        },
        {
          name: "动画课堂 · 综合性学习与语言运用",
          blocks: [
            { type: "lesson", title: "▶ 会表达、会得体", steps: [
              { text: "语文基础还包括「语言运用」:得体地说话、准确地表达。这类题越来越常考,今晚一起复习。", emoji: "💬" },
              { text: "说话要「得体」:看对象、看场合。对长辈用敬语,请人帮忙说「请」「麻烦您」,拒绝也要委婉。", emoji: "🙏", scene: { type: "clues", items: [
                { head: "看对象", text: "长辈用敬语" },
                { head: "看场合", text: "正式/随意" },
                { head: "态度", text: "礼貌·委婉" }
              ] } },
              { text: "谦敬词别用反:说自己用谦辞(拙作、寒舍、家父),说别人用敬辞(大作、府上、令尊)。", emoji: "⚖️" },
              { text: "还有仿写、拟标语、写请柬、口语交际等,都属于语言运用。核心是:准确、得体、有礼貌。", emoji: "✍️" },
              { text: "复习口诀:说话看对象看场合,谦敬用词别用反;仿写标语讲得体,礼貌准确是关键!", emoji: "🎯" }
            ] }
          ],
          q: { type: "fill", points: 10, voice: "zh",
            q: "称呼对方的父亲,应该用敬辞「令尊」;称呼自己的父亲,应该用谦辞「__________」。(填两个字)",
            placeholder: "填两个字",
            accept: ["家父", "家父。", "家严"],
            demoSteps: [
              { text: "「令尊」是敬辞称对方父亲。称自己父亲要用谦辞,以「家」字开头。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "令尊", text: "对方父亲(敬)" },
                { head: "家…", text: "自己父亲(谦)" },
                { head: "谦辞", text: "家父" }
              ] } },
              { text: "谦称自己的父亲，以「家」字开头——家父。", emoji: "🙏" }
            ],
            explain: "答案:家父。称自己的父亲用谦辞「家父」(或「家严」);称对方的父亲用敬辞「令尊」。谦敬要用对,不能反。",
            explainSteps: [
              { text: "「令尊」敬称对方父亲,「家父」谦称自己父亲。", emoji: "🙏" },
              { text: "还记得《陈太丘与友期》的「尊君」「家君」吗?一个道理!", emoji: "✅" },
              { text: "答「家父」。敬人谦己,是中华语言的礼貌智慧。", emoji: "🎯" }
            ] }
        },
        {
          name: "今日彩蛋 · 名著打卡",
          blocks: [
            { type: "rule", title: "📖 睡前 20 分钟名著时间", html: "最后一周啦!今晚把这个暑假读过的<b>《西游记》《朝花夕拾》</b>翻一翻,给它们各写一句「一句话推荐语」。<br>比如「《西游记》——一部教你坚持到底的冒险大书」。能推荐给别人,说明你真的读懂了!" }
          ],
          q: null
        }
      ]
    },

    // ================== 历史 ==================
    {
      subject: "history", icon: "🏺", title: "历史 · 历史综合复习", minutes: 25,
      units: [
        {
          name: "动画课堂 · 中国古代史时间轴",
          blocks: [
            { type: "lesson", title: "▶ 从远古到南北朝,一条线记牢", steps: [
              { text: "模拟测评周!历史今晚把这个暑假学的中国古代史串成一条「时间轴」,考试再也不会记乱。", emoji: "🕰️" },
              { text: "先秦:中华文明起源(半坡、河姆渡)→ 夏商周 → 春秋战国(争霸兼并、百家争鸣)。", emoji: "🏺", scene: { type: "clues", items: [
                { head: "起源", text: "半坡·河姆渡" },
                { head: "春秋", text: "争霸(齐桓公)" },
                { head: "战国", text: "七雄兼并" }
              ] } },
              { text: "秦汉:秦统一(前221,秦始皇,郡县制、统一文字货币)→ 汉朝(汉武帝大一统、推恩令、尊儒术、丝绸之路)。", emoji: "👑", scene: { type: "clues", items: [
                { head: "秦", text: "首次统一·中央集权" },
                { head: "汉武帝", text: "推恩令·尊儒术" },
                { head: "丝绸之路", text: "张骞·东西交流" }
              ] } },
              { text: "三国两晋南北朝:官渡→赤壁→三国鼎立(魏蜀吴);北魏孝文帝改革(汉化、促进民族交融)。", emoji: "⚔️" },
              { text: "记忆法:一条线「先秦→秦汉→三国南北朝」,每段抓一个关键人物和事件。时间轴一画,历史全通!", emoji: "🎯" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "按照时间先后顺序,下列历史事件排列正确的一项是:",
            options: [
              "秦统一中国 → 春秋争霸 → 汉武帝大一统 → 三国鼎立",
              "春秋争霸 → 秦统一中国 → 汉武帝大一统 → 三国鼎立",
              "汉武帝大一统 → 秦统一中国 → 春秋争霸 → 三国鼎立",
              "三国鼎立 → 春秋争霸 → 秦统一中国 → 汉武帝大一统"
            ], answer: 1,
            demoSteps: [
              { text: "回忆时间轴:春秋战国在秦之前,秦之后是汉,汉之后是三国。", emoji: "🕰️", scene: { type: "clues", items: [
                { head: "①", text: "春秋(先秦)" },
                { head: "②", text: "秦统一" },
                { head: "③④", text: "汉→三国" }
              ] } },
              { text: "按「先秦→秦→汉→三国」排序。", emoji: "🔍" }
            ],
            explain: "B 正确。时间顺序:春秋争霸(先秦)→ 秦统一中国 → 汉武帝大一统 → 三国鼎立。其余选项顺序都乱了。",
            explainSteps: [
              { text: "春秋战国在秦朝之前,A、C、D 都把顺序弄乱了。", emoji: "❌" },
              { text: "正确顺序:春秋 → 秦 → 汉 → 三国,选 B!", emoji: "✅" },
              { text: "历史学习的法宝就是时间轴,理清先后,再乱也不怕!", emoji: "🎯" }
            ] }
        }
      ]
    }
  ]
};
