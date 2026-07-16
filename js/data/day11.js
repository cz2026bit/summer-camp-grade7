// ============ 第 11 关 ============
window.DAYS = window.DAYS || {};

window.DAYS[11] = {
  day: 11,
  title: "第 11 关 · 乘方的魔力",
  estimate: "四科约 2~3 小时 · 共 7 道思考题(含 1 道 BOSS 题)",
  sections: [
    // ================== 数学 ==================
    {
      subject: "math", icon: "🔢", title: "数学 · 乘方的意义", minutes: 50,
      units: [
        {
          name: "动画课堂 1 · 乘方:相同因数的乘法简写",
          blocks: [
            { type: "lesson", title: "▶ 一个小小的右上角数字", steps: [
              { text: "2×2×2×2×2……写起来又长又累。数学家发明了乘方:把相同因数相乘,写成「底数的指数次方」。", emoji: "✍️" },
              { text: "2⁵ 读作「2 的 5 次方」,表示 5 个 2 相乘 = 32。底数 2 是「被乘的数」,指数 5 是「乘的次数」。", emoji: "🔢", scene: { type: "clues", items: [
                { head: "底数", text: "2(相同因数)" },
                { head: "指数", text: "5(个数)" },
                { head: "意义", text: "5 个 2 相乘" }
              ] } },
              { text: "别混淆:2⁵ 是「5 个 2 相乘」= 32,不是「2×5=10」!乘方是乘法的重复,不是乘法本身。", emoji: "⚠️" },
              { text: "特别地:a² 读「a 的平方」,a³ 读「a 的立方」。它们来自正方形面积和正方体体积。", emoji: "🟦" },
              { text: "记住:乘方是「重复乘法的简写」。底数是谁在乘,指数是乘了几次,别把它俩的角色搞反!", emoji: "🎯" }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 2 · 负数的乘方:看指数的奇偶",
          blocks: [
            { type: "lesson", title: "▶ 负号在不在括号里,天差地别", steps: [
              { text: "负数乘方最容易错。第一步永远是:看清楚负号在不在括号里!", emoji: "🔍" },
              { text: "(−2)³ 表示 3 个 (−2) 相乘:(−2)×(−2)×(−2)。数负号 3 个,奇数 → 负,结果 −8。", emoji: "🎲", scene: { type: "clues", items: [
                { head: "(−2)³", text: "整个 −2 做底数" },
                { head: "负号 3 个", text: "奇数 → 负" },
                { head: "结果", text: "−8" }
              ] } },
              { text: "(−2)⁴ 呢?4 个 (−2) 相乘,负号 4 个,偶数 → 正,结果 +16。负数乘方:指数偶正奇负!", emoji: "⚖️" },
              { text: "但 −2⁴ 不一样!这里底数只是 2,负号在外面:先算 2⁴=16,再取负 = −16。括号决定一切!", emoji: "❗", scene: { type: "clues", items: [
                { head: "(−2)⁴", text: "= +16" },
                { head: "−2⁴", text: "= −16" },
                { head: "关键", text: "看括号" }
              ] } },
              { text: "口诀:负数带括号,指数定符号(偶正奇负);负号在括外,先乘方再取负。", emoji: "🏅" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "下列计算正确的一项是:",
            options: [
              "(−3)² = −9",
              "−3² = −9",
              "(−2)³ = 8",
              "−2³ = 8"
            ], answer: 1,
            demoSteps: [
              { text: "逐个看括号:(−3)² 的底数是 −3;−3² 的底数是 3,负号在外。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "(−3)²", text: "(−3)×(−3)=+9" },
                { head: "−3²", text: "−(3×3)=−9" },
                { head: "关键", text: "看括号" }
              ] } },
              { text: "再看指数奇偶,一个个判断符号。", emoji: "🎲" }
            ],
            explain: "B 正确:−3² 先算 3²=9 再取负 = −9。A 错(应 +9);C 错(应 −8);D 错(−2³ 先算 8 再取负 = −8)。",
            explainSteps: [
              { text: "A:(−3)² = (−3)×(−3) = +9,不是 −9,错。", emoji: "❌" },
              { text: "C:(−2)³ 负号 3 个奇数 → −8,不是 8,错。", emoji: "❌" },
              { text: "D:−2³ = −(2³) = −8,不是 8,错。", emoji: "❌" },
              { text: "B:−3² = −(3²) = −9,负号在括外,正确!选 B。", emoji: "✅" }
            ] }
        },
        {
          name: "🔥 BOSS 挑战 · 折纸上珠峰",
          blocks: [
            { type: "text", html: "💪 <b>BOSS 战规则</b>:一张薄纸不断对折,厚度会以乘方疯长!感受乘方的可怕威力。草稿纸准备!" }
          ],
          q: { type: "fill", points: 20, boss: true, voice: "zh",
            q: "一张纸对折 1 次变 2 层,对折 2 次变 4 层,对折 3 次变 8 层……照这样,对折 6 次一共是多少层?(即 2⁶,直接填数字)",
            placeholder: "例如: 16",
            accept: ["64", "64层", "六十四"],
            demoSteps: [
              { text: "每对折一次层数翻倍:对折 n 次就是 2ⁿ 层。对折 6 次即 2⁶。", emoji: "📄", scene: { type: "clues", items: [
                { head: "1 次", text: "2 层" },
                { head: "n 次", text: "2ⁿ 层" },
                { head: "6 次", text: "2⁶ = ?" }
              ] } },
              { text: "一步步乘 2:2、4、8、16、32、64。", emoji: "🔢" }
            ],
            explain: "2⁶ = 2×2×2×2×2×2 = 64 层。乘方增长极快,若纸够大对折 30 次就能超过珠峰!",
            explainSteps: [
              { text: "对折 6 次 = 2⁶ = 64 层。", emoji: "📄" },
              { text: "逐步:2→4→8→16→32→64,每次翻倍。", emoji: "🔢" },
              { text: "这就是「指数爆炸」:开始不起眼,后面快得吓人。乘方的威力,记一辈子!", emoji: "🏆" }
            ] }
        }
      ]
    },

    // ================== 英语 ==================
    {
      subject: "english", icon: "📚", title: "英语 · 疑问词 what/where/when/who", minutes: 45,
      units: [
        {
          name: "单词训练营 · 提问与回答 12 个(点卡片听发音!)",
          blocks: [
            { type: "text", html: "🎧 今天的词帮你<span class='hl'>问问题、找信息</span>!学完就能用英语打听事情。点卡片听发音,跟读 3 遍。" },
            { type: "flashcards", words: [
              { word: "what", phonetic: "/wɒt/", cn: "什么", sentence: "What is your name?" },
              { word: "where", phonetic: "/weə/", cn: "哪里", sentence: "Where is my bag?" },
              { word: "when", phonetic: "/wen/", cn: "什么时候", sentence: "When do you get up?" },
              { word: "who", phonetic: "/huː/", cn: "谁", sentence: "Who is that boy?" },
              { word: "why", phonetic: "/waɪ/", cn: "为什么", sentence: "Why are you late?" },
              { word: "how", phonetic: "/haʊ/", cn: "怎样", sentence: "How do you go to school?" },
              { word: "name", phonetic: "/neɪm/", cn: "名字", sentence: "My name is Tom." },
              { word: "time", phonetic: "/taɪm/", cn: "时间", sentence: "What time is it?" },
              { word: "answer", phonetic: "/ˈɑːnsə/", cn: "回答", sentence: "Please answer my question." },
              { word: "question", phonetic: "/ˈkwestʃən/", cn: "问题", sentence: "I have a question." },
              { word: "know", phonetic: "/nəʊ/", cn: "知道", sentence: "I don't know his name." },
              { word: "here", phonetic: "/hɪə/", cn: "这里", sentence: "The books are here." }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 · 特殊疑问句:用对疑问词",
          blocks: [
            { type: "lesson", title: "▶ 问什么,就用哪个 wh- 词", steps: [
              { text: "想问具体信息(不是 yes/no),就用特殊疑问句,句首放一个 wh- 疑问词。", emoji: "❓" },
              { text: "对应关系记牢:what 问事物、who 问人、where 问地点、when 问时间、why 问原因、how 问方式。", emoji: "🎯", scene: { type: "match", groups: [
                { head: "问人/事", items: ["who 谁", "what 什么"] },
                { head: "问时/地", items: ["when 何时", "where 何地"] }
              ] } },
              { text: "结构:疑问词 + 一般疑问句。Where do you live? / What does she like? / When is the party?", emoji: "🔧", scene: { type: "clues", items: [
                { head: "疑问词", text: "Where" },
                { head: "+助动词", text: "do / does" },
                { head: "+主语动词", text: "you live" }
              ] } },
              { text: "回答特殊疑问句不能用 Yes/No,要给出具体信息:Where do you live? — I live in Beijing.", emoji: "💬" },
              { text: "口诀:疑问词开头,助动词跟后,主语动词接着走,答句给信息别 Yes/No!", emoji: "🚦" }
            ] },
            { type: "chant", lines: ["what 问物 who 问人,", "where 问地 when 问辰;", "疑问词放句子头,", "答句具体别点头!"] }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "选出问句与答句搭配完全正确的一项:",
            options: [
              "Where do you go to school? — Yes, I do.",
              "When do you get up? — I get up at six.",
              "Who is your teacher? — In the classroom.",
              "What does she like? — She like music."
            ], answer: 1,
            demoSteps: [
              { text: "先看疑问词问的是什么,再看答句给的信息对不对得上。", emoji: "🎯", scene: { type: "clues", items: [
                { head: "when", text: "问时间" },
                { head: "答句", text: "该给时间" },
                { head: "at six", text: "正是时间" }
              ] } },
              { text: "特殊疑问句不能用 Yes/No 回答,先排除这类。", emoji: "🚫" }
            ],
            explain: "B 正确:When 问时间,答 at six 是时间。A 特殊疑问句不能用 Yes 回答;C 问人却答地点;D 的 she like 少了 s。",
            explainSteps: [
              { text: "A:Where 是特殊疑问句,不能用 Yes/No,错。", emoji: "❌" },
              { text: "C:Who 问人,却回答地点 In the classroom,答非所问,错。", emoji: "❌" },
              { text: "D:she 是三单,应 likes,少了 s,错。", emoji: "❌" },
              { text: "B:When(问时间)→ at six(给时间),完美对应!选 B。", emoji: "✅" }
            ] }
        },
        {
          name: "英文名著时光 · The Little Match Girl",
          blocks: [
            { type: "rule", title: "📖 名著名片", html: "<b>安徒生 Andersen</b>《卖火柴的小女孩》——一个寒冷的除夕夜,一个善良女孩的梦,让无数人落泪。" },
            { type: "reading", speakable: true, title: "The Little Match Girl", paragraphs: [
              "It is New Year's Eve. It is very cold and dark. A poor little girl walks in the street. She has no shoes and she is cold and hungry. She sells matches, but nobody buys them.",
              "She sits down in a corner. To keep warm, she lights a match. In the light, she sees a warm fire! Then the match goes out and the fire is gone.",
              "She lights another match. This time she sees good food on a table. She lights more matches and sees a beautiful tree and her kind grandmother.",
              "'Grandma, take me with you!' she says. The next morning, people find the little girl. She is not moving, but there is a smile on her face. She is with her grandmother now, where there is no cold and no hunger."
            ], tip: "生词提示:match 火柴 / corner 角落 / light 点燃 / hunger 饥饿" }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "What does the little girl see when she lights the matches?(小女孩点燃火柴时看到了什么?)",
            options: [
              "She sees her friends playing.",
              "She sees a fire, good food, a tree and her grandmother.",
              "She sees people buying her matches.",
              "She sees a new pair of shoes."
            ], answer: 1,
            demoSteps: [
              { text: "每划一根火柴,女孩就看到一个画面。数一数她看到了哪些?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "第一根", text: "a warm fire" },
                { head: "第二根", text: "good food" },
                { head: "更多", text: "a tree, grandma" }
              ] } },
              { text: "原文一根根列出了火光中的幻象。", emoji: "🕯️" }
            ],
            explain: "B 正确。火柴的光里,女孩依次看到温暖的火、丰盛的食物、美丽的圣诞树和慈爱的祖母——都是她渴望而没有的。",
            explainSteps: [
              { text: "第一根火柴:火炉;第二根:美食;后面:圣诞树和祖母。", emoji: "🕯️" },
              { text: "这些都是她最渴望的温暖,选 B!", emoji: "✅" },
              { text: "火柴的光越美,现实越冷。安徒生用美丽的幻象,写出了最深的同情。", emoji: "🎯" }
            ] }
        }
      ]
    },

    // ================== 语文 ==================
    {
      subject: "chinese", icon: "📝", title: "语文 · 《陈太丘与友期》", minutes: 40,
      units: [
        {
          name: "动画课堂 · 元方:七岁孩子的一堂礼仪课",
          blocks: [
            { type: "lesson", title: "▶ 守信与懂礼,缺一不可", steps: [
              { text: "《陈太丘与友期》也出自《世说新语》。主角元方只有七岁,却给一个失信的大人上了一课。", emoji: "👦" },
              { text: "故事:陈太丘和朋友约定中午同行,过了中午朋友还没来,陈太丘就先走了。朋友来后,问元方父亲在不在。", emoji: "⏰", scene: { type: "clues", items: [
                { head: "约定", text: "日中(中午)" },
                { head: "友人", text: "过中不至" },
                { head: "太丘", text: "舍去(先走了)" }
              ] } },
              { text: "友人一听就骂:「非人哉!与人期行,相委而去!」(不是人啊!约好了却丢下我走了!)", emoji: "😡" },
              { text: "元方回敬:「君与家君期日中。日中不至,则是无信;对子骂父,则是无礼。」——一句话点出对方两大错:无信、无礼。", emoji: "🎯", scene: { type: "clues", items: [
                { head: "过中不至", text: "无信" },
                { head: "对子骂父", text: "无礼" },
                { head: "元方", text: "有理有据" }
              ] } },
              { text: "友人惭愧,下车拉他,元方却「入门不顾」(进门不再回头)。做人:守信、懂礼、有骨气,一个七岁孩子全做到了。", emoji: "🚪" }
            ] }
          ],
          q: { type: "choice", points: 10, voice: "zh",
            q: "元方反驳友人「无信」「无礼」,分别指的是友人的哪两件事?",
            options: [
              "迟到 / 先走了",
              "过了中午还不来(失约)/ 当着儿子的面骂人家父亲",
              "骂人 / 不下车",
              "不守时 / 不认识元方"
            ], answer: 1,
            demoSteps: [
              { text: "「无信」和守约有关,「无礼」和态度有关。分别对应友人做的哪件事?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "无信", text: "过中不至=失约" },
                { head: "无礼", text: "对子骂父" },
                { head: "元方原话", text: "两点都说了" }
              ] } },
              { text: "回到元方的原话:「日中不至则是无信,对子骂父则是无礼」。", emoji: "📖" }
            ],
            explain: "B 正确。「无信」指友人过了约定的中午还不来,失约在先;「无礼」指他当着元方的面辱骂元方的父亲。",
            explainSteps: [
              { text: "无信:约定中午,过了中午还不到,是友人先失约。", emoji: "⏰" },
              { text: "无礼:当着儿子的面骂人家父亲,极其失礼。", emoji: "😡" },
              { text: "元方抓住这两点有理有据地反驳,选 B!守信懂礼,是做人的根本。", emoji: "✅" }
            ] }
        },
        {
          name: "动画课堂 · 文言称谓:君 · 家君 · 尊君",
          blocks: [
            { type: "lesson", title: "▶ 古人说话,称呼有讲究", steps: [
              { text: "文言里的称谓,是理解句子的钥匙。《陈太丘与友期》里三个称呼最典型,考试常考。", emoji: "🔑" },
              { text: "「尊君」是敬辞,指「对方的父亲」;「家君」是谦辞,指「自己的父亲」;「君」是对对方的尊称,相当于「您」。", emoji: "👤", scene: { type: "clues", items: [
                { head: "尊君", text: "对方的父亲(敬)" },
                { head: "家君", text: "自己的父亲(谦)" },
                { head: "君", text: "您(尊称)" }
              ] } },
              { text: "友人问「尊君在不?」是问「你父亲在吗」;元方说「家君」是说「我父亲」。称呼一变,谁是谁一目了然。", emoji: "🎭" },
              { text: "古代称谓有「敬称」和「谦称」两套:说别人用敬称(尊、令),说自己用谦称(家、敝、鄙)。", emoji: "⚖️" },
              { text: "记忆法:「尊」「令」抬举别人,「家」「敝」放低自己。这是中国人「谦以待己,敬以待人」的礼貌智慧。", emoji: "🙇" }
            ] }
          ],
          q: { type: "fill", points: 10, voice: "zh",
            q: "《陈太丘与友期》中,「尊君」指的是__________的父亲。(填「对方」或「自己」)",
            placeholder: "填两个字",
            accept: ["对方", "对方。", "别人", "友人"],
            demoSteps: [
              { text: "「尊」是抬举、敬重的意思,用来称呼谁?自己还是对方?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "尊 = 敬", text: "抬举别人" },
                { head: "尊君", text: "对方的父亲" },
                { head: "家君", text: "自己的父亲" }
              ] } },
              { text: "敬辞用于对方,谦辞用于自己。「尊君」带「尊」,是敬辞。", emoji: "🙇" }
            ],
            explain: "「尊君」是敬辞,指对方的父亲;与之相对,「家君」是谦辞,指自己的父亲。",
            explainSteps: [
              { text: "「尊」是敬辞,抬举对方,所以「尊君」= 对方的父亲。", emoji: "🙇" },
              { text: "「家」是谦辞,放低自己,「家君」= 自己的父亲。", emoji: "✅" },
              { text: "敬称对方、谦称自己,这套礼貌称谓文言中反复出现,记牢不吃亏!", emoji: "🎯" }
            ] }
        },
        {
          name: "今日彩蛋 · 名著打卡",
          blocks: [
            { type: "rule", title: "📖 睡前 20 分钟名著时间", html: "继续读<b>《西游记》</b>!今晚想一想:元方七岁就守信懂礼,<b>孙悟空又是怎样从任性顽劣一步步学会担当的?</b><br>好的故事都在讲「成长」——包括你自己的每一天。" }
          ],
          q: null
        }
      ]
    },

    // ================== 地理 ==================
    {
      subject: "geography", icon: "🌍", title: "地理 · 地图三要素", minutes: 25,
      units: [
        {
          name: "动画课堂 · 看懂地图的三把钥匙",
          blocks: [
            { type: "lesson", title: "▶ 比例尺 · 方向 · 图例", steps: [
              { text: "地图是把大大的地表「缩小」画在纸上。想看懂它,要掌握三把钥匙:比例尺、方向、图例。", emoji: "🗺️" },
              { text: "第一把·比例尺:图上距离和实际距离的比。比例尺越大,表示范围越小、内容越详细。", emoji: "📏", scene: { type: "clues", items: [
                { head: "比例尺", text: "图上 : 实地" },
                { head: "大比例尺", text: "范围小·更详细" },
                { head: "小比例尺", text: "范围大·较粗略" }
              ] } },
              { text: "第二把·方向:一般「上北下南,左西右东」;有指向标的看指向标;有经纬网的用经纬线定方向。", emoji: "🧭", scene: { type: "clues", items: [
                { head: "一般地图", text: "上北下南" },
                { head: "有指向标", text: "按箭头" },
                { head: "有经纬网", text: "经线定南北" }
              ] } },
              { text: "第三把·图例:地图上各种符号的「说明书」。铁路、河流、城市各有符号,看图先看图例。", emoji: "🔣" },
              { text: "记忆法:比例尺管「多大」,方向管「哪边」,图例管「是啥」。三把钥匙一齐用,地图不再看不懂!", emoji: "🔑" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "关于地图三要素,下列说法正确的一项是:",
            options: [
              "所有地图都是「上北下南、左西右东」,没有例外",
              "比例尺越大,地图表示的实际范围越小、内容越详细",
              "图例就是地图的名字",
              "看地图不需要注意方向"
            ], answer: 1,
            demoSteps: [
              { text: "回忆三把钥匙的作用:比例尺、方向、图例分别管什么?", emoji: "🔑", scene: { type: "clues", items: [
                { head: "比例尺", text: "管大小详略" },
                { head: "方向", text: "有多种定法" },
                { head: "图例", text: "符号说明书" }
              ] } },
              { text: "把「绝对化」「张冠李戴」「忽视方向」的说法排除。", emoji: "🔍" }
            ],
            explain: "B 正确。A 错:有指向标或经纬网时不一定上北下南;C 错:图例是符号说明,不是地图名;D 错:方向是三要素之一,很重要。",
            explainSteps: [
              { text: "A:有指向标、经纬网时方向另有判断,不能一概而论,错。", emoji: "❌" },
              { text: "C:图例是符号的说明书,不是地图名字,错。", emoji: "❌" },
              { text: "D:方向正是三要素之一,怎能不注意,错。", emoji: "❌" },
              { text: "B:比例尺越大,范围越小越详细,正确!选 B。", emoji: "✅" }
            ] }
        }
      ]
    }
  ]
};
