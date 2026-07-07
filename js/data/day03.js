// ============ 第 3 关 ============
window.DAYS = window.DAYS || {};

window.DAYS[3] = {
  day: 3,
  title: "第 3 关 · 镜子里的数",
  estimate: "四科约 2~3 小时 · 共 7 道思考题(含 1 道 BOSS 题)",
  sections: [
    // ================== 数学 ==================
    {
      subject: "math", icon: "🔢", title: "数学 · 相反数与绝对值", minutes: 50,
      units: [
        {
          name: "动画课堂 1 · 相反数:数轴上的照镜子",
          blocks: [
            { type: "lesson", title: "▶ 每个数都有一个镜中影子", steps: [
              { text: "在数轴的原点立一面镜子:3 照出来是 −3,−5 照出来是 5。只有符号不同的两个数,互为相反数。", emoji: "🪞", scene: { type: "numberline", from: 3, to: -3 } },
              { text: "相反数的几何特征:在原点两侧,到原点的距离相等,像一对孪生兄弟。", emoji: "👬", scene: { type: "numberline", from: -5, to: 5 } },
              { text: "a 的相反数记作 −a。注意!−a 不一定是负数:a 是 −3 时,−a = 3,是正数!", emoji: "⚠️" },
              { text: "0 照镜子还是 0——0 的相反数是它自己,全世界只有它有这个特权。", emoji: "👑", scene: { type: "numberline", from: -2, to: 0 } },
              { text: "多重符号化简口诀:数负号个数,偶数个是正,奇数个是负。−(−5) 有两个负号,等于 +5。", emoji: "🔢" }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 2 · 绝对值:只问距离,不问方向",
          blocks: [
            { type: "lesson", title: "▶ 出租车司机的计费思维", steps: [
              { text: "出租车向东开 3 公里收 3 公里的钱,向西开 3 公里也收 3 公里的钱——计价器只管距离,不管方向。", emoji: "🚕" },
              { text: "绝对值就是这个思维:一个数到原点的距离,记作 |a|。|3| = 3,|−3| 也 = 3。", emoji: "📏", scene: { type: "numberline", from: -3, to: 3 } },
              { text: "距离永远不可能是负的,所以绝对值永远大于等于 0——这是绝对值最重要的脾气!", emoji: "🛡️" },
              { text: "正数的绝对值是它本身;负数的绝对值是它的相反数;0 的绝对值是 0。", emoji: "📋", scene: { type: "clues", items: [
                { head: "|正数|", text: "= 它本身" },
                { head: "|负数|", text: "= 它的相反数" },
                { head: "|0|", text: "= 0" }
              ] } },
              { text: "绝对值还能比大小:两个负数,绝对值大的反而小。因为绝对值越大,离原点越远,在数轴上就越靠左。", emoji: "💡", scene: { type: "numberline", from: -8, to: -2 } }
            ] },
            { type: "numberline" }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "请判断这三句话,哪些是对的?①−(−5) = 5 ②|−3| = −3 ③相反数等于它本身的数只有 0",
            options: ["①②③都对", "只有①③对", "只有②③对", "只有③对"], answer: 1,
            demoSteps: [
              { text: "第①句用口诀:数一数负号有几个,偶数个是正,奇数个是负。", emoji: "🔢" },
              { text: "第②句问自己:绝对值是距离,距离能是负数吗?", emoji: "📏", scene: { type: "numberline", from: -3, to: 0 } },
              { text: "第③句照镜子:哪个数照出来还是自己?", emoji: "🪞", scene: { type: "clues", items: [
                { head: "3 照镜", text: "变 −3" },
                { head: "−5 照镜", text: "变 5" },
                { head: "0 照镜", text: "还是 0" }
              ] } }
            ],
            explain: "①对:两个负号抵消,−(−5) = 5;②错:绝对值是距离,永远非负,|−3| = 3;③对:只有 0 的相反数是它自己。",
            explainSteps: [
              { text: "第①句:−(−5) 有两个负号,偶数个负号结果为正,等于 5,正确!", emoji: "✅" },
              { text: "第②句是经典陷阱:|−3| 表示 −3 到原点的距离,距离是 3,不是 −3!绝对值永远不为负。", emoji: "⚠️", scene: { type: "numberline", from: -3, to: 0 } },
              { text: "第③句:除了 0,任何数照镜子都会变号,只有 0 的相反数是自己,正确!", emoji: "🪞" },
              { text: "答案:只有①③对。记住绝对值的铁律:它是距离,永远 ≥ 0!", emoji: "🎯" }
            ] }
        },
        {
          name: "🔥 BOSS 挑战 · 绝对值三连击",
          blocks: [
            { type: "text", html: "💪 <b>BOSS 战规则</b>:三个绝对值连环出击!先把每个绝对值「拆掉」,再算加减。草稿纸准备!" }
          ],
          q: { type: "fill", points: 20, boss: true, voice: "zh",
            q: "计算:|−7| + |3| − |−2| = ?(直接填数字)",
            placeholder: "例如: 6",
            accept: ["8", "八"],
            demoSteps: [
              { text: "遇到绝对值,第一步是把「绝对值外壳」逐个拆掉,变成普通的数。", emoji: "🔨", scene: { type: "clues", items: [
                { head: "|−7|", text: "距离是?" },
                { head: "|3|", text: "距离是?" },
                { head: "|−2|", text: "距离是?" }
              ] } },
              { text: "拆壳规则:里面是正数照抄,里面是负数去掉负号。", emoji: "🔑" },
              { text: "全部拆完后,按从左到右的顺序做加减法。", emoji: "🧮" }
            ],
            explain: "|−7| = 7,|3| = 3,|−2| = 2;所以原式 = 7 + 3 − 2 = 8。",
            explainSteps: [
              { text: "拆第一个:|−7|,−7 到原点的距离是 7。", emoji: "1️⃣", scene: { type: "numberline", from: -7, to: 0 } },
              { text: "拆第二个:|3| = 3;拆第三个:|−2| = 2。所有外壳都拆掉了。", emoji: "2️⃣" },
              { text: "原式变成:7 + 3 − 2,从左到右算:7 + 3 = 10,10 − 2 = 8。", emoji: "🧮" },
              { text: "答案是 8!记住 BOSS 心法:先拆绝对值,再做加减法,两步分开,绝不慌乱。", emoji: "🏆" }
            ] }
        }
      ]
    },

    // ================== 英语 ==================
    {
      subject: "english", icon: "📚", title: "英语 · 名词的变身魔法", minutes: 45,
      units: [
        {
          name: "单词训练营 · 水果食物 12 个(点卡片听发音!)",
          blocks: [
            { type: "text", html: "🎧 今天的单词都和<span class='hl'>复数变形</span>有关,翻面时注意看例句里它们变复数的样子!" },
            { type: "flashcards", words: [
              { word: "apple", phonetic: "/ˈæpl/", cn: "苹果", sentence: "I eat two apples a day." },
              { word: "orange", phonetic: "/ˈɒrɪndʒ/", cn: "橙子", sentence: "These oranges are sweet." },
              { word: "banana", phonetic: "/bəˈnɑːnə/", cn: "香蕉", sentence: "Monkeys love bananas." },
              { word: "tomato", phonetic: "/təˈmɑːtəʊ/", cn: "西红柿", sentence: "Tomatoes are red." },
              { word: "potato", phonetic: "/pəˈteɪtəʊ/", cn: "土豆", sentence: "We grow potatoes." },
              { word: "box", phonetic: "/bɒks/", cn: "盒子", sentence: "There are three boxes here." },
              { word: "watch", phonetic: "/wɒtʃ/", cn: "手表", sentence: "He has two watches." },
              { word: "brush", phonetic: "/brʌʃ/", cn: "刷子", sentence: "The brushes are new." },
              { word: "knife", phonetic: "/naɪf/", cn: "小刀", sentence: "Be careful with knives." },
              { word: "leaf", phonetic: "/liːf/", cn: "树叶", sentence: "Leaves turn yellow in fall." },
              { word: "child", phonetic: "/tʃaɪld/", cn: "孩子", sentence: "The children are playing." },
              { word: "tooth", phonetic: "/tuːθ/", cn: "牙齿", sentence: "Brush your teeth every day." }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 · 复数变形的五条家规",
          blocks: [
            { type: "lesson", title: "▶ 一个苹果变一堆苹果,单词怎么变?", steps: [
              { text: "英语里东西多于一个,名词就要变复数。第一条家规最简单:直接加 s——apple 变 apples。", emoji: "🍎" },
              { text: "第二条:以 s、x、ch、sh 结尾的,加 es——box 变 boxes,watch 变 watches。为什么?连读时不加 e 根本读不出来!", emoji: "📦" },
              { text: "第三条:辅音字母+y 结尾,变 y 为 i 加 es——baby 变 babies。第四条:f 或 fe 结尾,变 f 为 v 加 es——knife 变 knives,leaf 变 leaves。", emoji: "🍂", scene: { type: "match", groups: [
                { head: "+s", items: ["apples", "bananas"] },
                { head: "+es", items: ["boxes", "watches"] },
                { head: "变形", items: ["knives", "babies"] }
              ] } },
              { text: "第五条:有些词天生叛逆,不守规矩——child 变 children,tooth 变 teeth,man 变 men,只能硬记!", emoji: "😈", scene: { type: "match", groups: [
                { head: "child", items: ["children"] },
                { head: "tooth", items: ["teeth"] },
                { head: "man / woman", items: ["men / women"] }
              ] } },
              { text: "特别注意:tomato、potato 这两个「土味蔬菜」要加 es——tomatoes、potatoes。记住:土豆西红柿,土里长的加 es!", emoji: "🥔" }
            ] },
            { type: "chant", lines: ["一般词尾加 s,", "s x ch sh 要加 es;", "辅音 y 变 i 加 es,", "f fe 变 v 莫忘记!"] }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "下面四个句子里,只有一句名词复数用得完全正确,把它找出来:",
            options: [
              "I bought two tomatos yesterday.",
              "She has three childs.",
              "The leaves on the tree are green.",
              "He has two watchs."
            ], answer: 2,
            demoSteps: [
              { text: "把每个复数拉出来审问:它的原形是什么?按哪条家规变形?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "tomato", text: "土里长的?" },
                { head: "child", text: "叛逆词?" },
                { head: "watch", text: "ch 结尾?" }
              ] } },
              { text: "leaf 是 f 结尾,按第四条家规该怎么变?", emoji: "🍂" }
            ],
            explain: "C 正确:leaf 按「f 变 v 加 es」变成 leaves。A 错:tomato 要加 es,是 tomatoes;B 错:child 是不规则变化,复数是 children;D 错:watch 以 ch 结尾要加 es,是 watches。",
            explainSteps: [
              { text: "A 句:tomato 是「土里长的」,必须加 es——tomatoes,少了个 e,错!", emoji: "🥫" },
              { text: "B 句:child 是叛逆词,复数是 children,根本没有 childs 这个词,错!", emoji: "😈" },
              { text: "C 句:leaf 以 f 结尾,变 f 为 v 加 es——leaves,完全正确!", emoji: "✅" },
              { text: "D 句:watch 以 ch 结尾,要加 es——watches,错。", emoji: "⌚" },
              { text: "复数口诀再背一遍:一般加 s,s/x/ch/sh 加 es,辅音 y 变 i,f/fe 变 v,叛逆词硬记!", emoji: "🎯" }
            ] }
        },
        {
          name: "阅读侦探 · The Strange Garden",
          blocks: [
            { type: "text", html: "🕵️ <b>侦探任务</b>:这篇短文里藏着好多复数名词,读的时候圈出来。最后的推理题需要你对比两个人物的态度!" },
            { type: "reading", speakable: true, title: "The Strange Garden", paragraphs: [
              "Grandpa Wang has a small garden. There are tomatoes, potatoes and two apple trees in it.",
              "One morning, he finds some strange holes near the tomatoes. \"Mice!\" he says angrily. He wants to buy a cat.",
              "But his granddaughter Amy looks at the holes carefully. She sees small footprints with five toes. \"Grandpa, mice have four toes on their front feet,\" she says. \"These footprints belong to a hedgehog, and hedgehogs eat bad insects. It is helping your garden!\"",
              "Grandpa Wang laughs. \"Then we should thank this little friend, not buy a cat.\""
            ], tip: "生词提示:holes 洞 / footprints 脚印 / toes 脚趾 / hedgehog 刺猬 / insects 昆虫 / belong to 属于" }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "推理题:Why does Grandpa Wang change his mind about buying a cat?(爷爷为什么改变了买猫的主意?)",
            options: [
              "Because cats are too expensive.",
              "Because Amy proves the visitor is a helpful hedgehog, not a mouse.",
              "Because he doesn't like cats.",
              "Because the mice run away by themselves."
            ], answer: 1,
            demoSteps: [
              { text: "先找爷爷的两个态度:一开始要买猫,最后说「谢谢这位小朋友」。中间发生了什么?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "开始", text: "生气,要买猫" },
                { head: "转折", text: "Amy 观察脚印" },
                { head: "结尾", text: "笑着说谢谢" }
              ] } },
              { text: "Amy 用什么证据说服了爷爷?数一数脚印的脚趾。", emoji: "🐾" }
            ],
            explain: "Amy 观察到脚印有五个脚趾,而老鼠前脚只有四趾,推断是刺猬;刺猬吃害虫,是花园的帮手。爷爷被证据说服,所以不买猫了。这是一个「用观察和证据改变结论」的故事。",
            explainSteps: [
              { text: "爷爷看到洞,凭经验猜是老鼠——这是没有证据的猜测。", emoji: "😠" },
              { text: "Amy 不急着下结论,先数脚印:五个脚趾。老鼠前脚只有四趾,对不上!", emoji: "🐾" },
              { text: "五趾脚印属于刺猬,而刺猬吃害虫,是花园的朋友——证据链完整,答案选 B!", emoji: "✅" },
              { text: "A、C 文中根本没提;D 说老鼠自己跑了,但根本就没有老鼠。", emoji: "❌" },
              { text: "这个故事还教了我们科学态度:先观察,再下结论——和 Amy 一样棒!", emoji: "🔬" }
            ] }
        }
      ]
    },

    // ================== 语文 ==================
    {
      subject: "chinese", icon: "📝", title: "语文 · 病句医生与秋天的旅人", minutes: 40,
      units: [
        {
          name: "动画课堂 · 病句进阶:三种隐蔽的病",
          blocks: [
            { type: "lesson", title: "▶ 这些句子看着通顺,其实有病", steps: [
              { text: "昨天学的病句一眼能看出毛病,今天这三种「隐形病」,连大人都常中招。", emoji: "🩺" },
              { text: "第一种「两面对一面」:能否取得好成绩,取决于你的努力。——「能否」是两面(能/不能),「努力」只有一面,前后对不上!", emoji: "⚖️", scene: { type: "clues", items: [
                { head: "能否", text: "两种情况" },
                { head: "努力", text: "只有一面" },
                { head: "病因", text: "两面对一面" }
              ] } },
              { text: "第二种「否定不当」:为了防止不再发生事故……——「防止」+「不再」,双重否定变肯定,意思成了「希望事故发生」!", emoji: "🔄" },
              { text: "第三种「关联词搭配错」:只有努力学习,就能进步。——「只有」必须配「才」,「只要」才配「就」,乱点鸳鸯谱就是病句。", emoji: "💑" },
              { text: "诊断秘诀:把句子拆成前后两半,一半一半对照检查,病灶自然现形。", emoji: "🔬" }
            ] }
          ],
          q: { type: "choice", points: 10, voice: "zh",
            q: "下列句子没有语病的一项是:",
            options: [
              "能否养成好习惯,关键在于坚持。",
              "为了防止溺水事故不再发生,学校加强了安全教育。",
              "只有多读多写,就能提高作文水平。",
              "坚持锻炼,是我们拥有健康体魄的重要保证。"
            ], answer: 3,
            demoSteps: [
              { text: "拿着三面「照病镜」逐句扫描:有没有两面对一面?有没有否定叠加?关联词配对了吗?", emoji: "🔬", scene: { type: "clues", items: [
                { head: "镜一", text: "两面对一面?" },
                { head: "镜二", text: "否定过头?" },
                { head: "镜三", text: "关联词乱配?" }
              ] } },
              { text: "「防止……不再发生」——把双重否定翻译成大白话,看看意思对不对。", emoji: "🔄" }
            ],
            explain: "D 正确。A 错:「能否」两面对「坚持」一面;B 错:「防止」与「不再」双重否定,意思反了,应删「不再」;C 错:「只有」应配「才」,不能配「就」。",
            explainSteps: [
              { text: "A 句:「能否养成」是两种情况,「关键在于坚持」只回答了一面,两面对一面,病!", emoji: "⚖️" },
              { text: "B 句翻译一下:防止「不再发生」= 希望「再发生」?!意思完全反了,应该删掉「不再」。", emoji: "🔄" },
              { text: "C 句:「只有」是个专一的词,它只跟「才」搭配。「只有……就」是乱点鸳鸯谱,病!", emoji: "💔" },
              { text: "D 句前后一面对一面,没有否定叠加,没有关联词,健康!", emoji: "✅" },
              { text: "记住三面照病镜:两面一面照一照,双重否定翻一翻,关联词配对查一查。", emoji: "🎯" }
            ] }
        },
        {
          name: "动画课堂 · 《天净沙·秋思》:九个名词的魔法",
          blocks: [
            { type: "lesson", title: "▶ 不用一个动词,画出天下第一愁", steps: [
              { text: "元代马致远的这首小令,只有 28 个字,却被称为「秋思之祖」。它的开头藏着一个魔法。", emoji: "🍂" },
              { text: "「枯藤老树昏鸦,小桥流水人家,古道西风瘦马。」——发现了吗?整整九个景物名词排成队,中间一个动词都没有!", emoji: "🖼️", scene: { type: "clues", items: [
                { head: "第一组", text: "枯藤 老树 昏鸦" },
                { head: "第二组", text: "小桥 流水 人家" },
                { head: "第三组", text: "古道 西风 瘦马" }
              ] } },
              { text: "再看用字:藤是「枯」的,树是「老」的,马是「瘦」的——每个字都在往「衰败凄凉」上使劲。", emoji: "🥀" },
              { text: "最狠的一笔是对比:「小桥流水人家」多温馨啊,那是别人的家。而自己呢?「断肠人在天涯」。", emoji: "💔" },
              { text: "这种只用名词排列、不加修饰串联的手法叫「白描列锦」。九个镜头剪在一起,一部游子漂泊的微电影就拍完了。", emoji: "🎬" }
            ] },
            { type: "reading", title: "天净沙·秋思 · [元] 马致远", paragraphs: [
              "枯藤老树昏鸦,",
              "小桥流水人家,",
              "古道西风瘦马。",
              "夕阳西下,",
              "断肠人在天涯。"
            ], tip: "昏鸦:黄昏归巢的乌鸦 / 断肠人:悲伤到极点的人 / 天涯:远离家乡的地方" }
          ],
          q: { type: "choice", points: 10, voice: "zh",
            q: "深度思考:「小桥流水人家」明明是温馨的画面,作者为什么要把它放进这首凄凉的秋思里?",
            options: [
              "写错了,应该删掉",
              "用别人家的温馨反衬自己漂泊无家的凄凉,越温馨越断肠",
              "作者走累了,想在这户人家休息",
              "为了凑齐九个景物,随便选的"
            ], answer: 1,
            demoSteps: [
              { text: "先把九个景物分组看:枯藤老树昏鸦是凄凉的,古道西风瘦马也是凄凉的,中间的小桥流水人家呢?", emoji: "🖼️", scene: { type: "clues", items: [
                { head: "凄凉", text: "枯藤老树昏鸦" },
                { head: "温馨?", text: "小桥流水人家" },
                { head: "凄凉", text: "古道西风瘦马" }
              ] } },
              { text: "换位思考:一个漂泊在外的人,黄昏时看到别人家亮起灯火,心里是更暖,还是更酸?", emoji: "💭" }
            ],
            explain: "这是「以乐景写哀情」的反衬手法:别人家的温馨,恰恰照出自己的孤独——家家有灯火,唯我在天涯。温馨的画面不是败笔,而是让「断肠」二字加倍锋利的磨刀石。",
            explainSteps: [
              { text: "先感受对比:两组凄凉景物中间,突然插入一幅温馨的家园图,反差极强。", emoji: "🖼️" },
              { text: "换位想象:游子牵着瘦马走在古道上,看见桥边人家炊烟升起、灯火渐亮——那是别人的团圆。", emoji: "🏮" },
              { text: "越是看到别人的温馨,越是想起自己无家可归。乐景不是冲淡了哀,而是把哀放大了十倍。", emoji: "💔" },
              { text: "这个手法叫「以乐景写哀情」,和昨天的「借景抒情」是亲戚,考试常一起出现。", emoji: "📚" },
              { text: "所以答案是 B。记住:诗里突兀的「不和谐」画面,往往是作者最用心的机关。", emoji: "🎯" }
            ] }
        },
        {
          name: "今日彩蛋 · 名著打卡",
          blocks: [
            { type: "rule", title: "📖 睡前 20 分钟名著时间", html: "昨天的彩蛋:长妈妈为鲁迅买来了他心心念念的<b>《山海经》</b>——一个不识字的保姆,跑了多少路才买到这四本书啊。<br>今晚任务:读《朝花夕拾》里的<b>《五猖会》</b>,注意一个细节:兴高采烈要去看庙会的鲁迅,为什么突然「没了兴致」?" }
          ],
          q: null
        }
      ]
    },

    // ================== 生物 ==================
    {
      subject: "biology", icon: "🌱", title: "生物 · 什么才算「活着」?", minutes: 25,
      units: [
        {
          name: "动画课堂 · 机器人和钟乳石的申请书",
          blocks: [
            { type: "lesson", title: "▶ 生物俱乐部的入会考试", steps: [
              { text: "今天开生物课!假设有个「生物俱乐部」,机器人和钟乳石都来申请入会,该不该批准?先看入会标准。", emoji: "🌱" },
              { text: "标准一:生物的生活需要营养——植物晒太阳做饭(光合作用),动物吃东西。标准二:能呼吸。标准三:能排出体内废物,比如出汗、落叶。", emoji: "🍃", scene: { type: "clues", items: [
                { head: "要吃饭", text: "需要营养" },
                { head: "要喘气", text: "进行呼吸" },
                { head: "要排废", text: "汗液、落叶" }
              ] } },
              { text: "标准四:能对外界刺激作出反应——含羞草被碰会合拢,向日葵朝着太阳转。", emoji: "🌻" },
              { text: "标准五:能生长和繁殖——小树苗长成大树,还能结种子生「娃」。标准六:有遗传和变异——种瓜得瓜,但每个瓜又不完全一样。", emoji: "🍉", scene: { type: "clues", items: [
                { head: "会长大", text: "生长" },
                { head: "会生娃", text: "繁殖" },
                { head: "像爸妈又不同", text: "遗传变异" }
              ] } },
              { text: "现在审核申请:机器人会下棋会说话,但它不吃饭不呼吸不生娃;钟乳石会「长大」,但那只是矿物质堆积。两位,抱歉,都不能入会!", emoji: "🚫" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "思考题:钟乳石会慢慢「长大」,智能机器人会说话、会学习,但它们都不是生物。判断生物最关键要看什么?",
            options: [
              "会不会动——会动的就是生物",
              "会不会长大——长大的就是生物",
              "是否同时具备营养、呼吸、繁殖等全部生命特征",
              "聪明不聪明——会思考的就是生物"
            ], answer: 2,
            demoSteps: [
              { text: "用排除法测试每个标准:植物不会跑,是生物吗?钟乳石会变大,是生物吗?", emoji: "🧪", scene: { type: "clues", items: [
                { head: "植物", text: "不会动却是生物" },
                { head: "钟乳石", text: "会变大却不是" },
                { head: "结论", text: "单一标准不够" }
              ] } },
              { text: "想一想:为什么必须「全部满足」而不是「满足一条」?", emoji: "🤔" }
            ],
            explain: "单看某一条特征都会误判:钟乳石会「长大」(矿物沉积),机器人会「反应」,但它们不需要营养、不呼吸、不能繁殖。生物必须同时具备各项生命特征,缺一不可。",
            explainSteps: [
              { text: "如果标准是「会动」:植物不会跑,难道不是生物?汽车会跑,难道是生物?这条不行。", emoji: "🚗" },
              { text: "如果标准是「会长大」:钟乳石也会变大,但那是矿物质一层层堆积,不吃饭、不呼吸。", emoji: "🪨" },
              { text: "如果标准是「聪明」:机器人会下棋,可它不用吃饭、永远不会生小机器人。", emoji: "🤖" },
              { text: "所以判断生物要看「全家福」:营养、呼吸、排废、反应、生长繁殖、遗传变异,全部具备才算活着,选 C!", emoji: "✅" },
              { text: "科学思维小结:下结论前,把所有标准都过一遍——只凭一条就拍板,最容易出错。", emoji: "🎯" }
            ] }
        }
      ]
    }
  ]
};
