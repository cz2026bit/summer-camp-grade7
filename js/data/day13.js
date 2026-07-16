// ============ 第 13 关 ============
window.DAYS = window.DAYS || {};

window.DAYS[13] = {
  day: 13,
  title: "第 13 关 · 给大数瘦身",
  estimate: "四科约 2~3 小时 · 共 7 道思考题(含 1 道 BOSS 题)",
  sections: [
    // ================== 数学 ==================
    {
      subject: "math", icon: "🔢", title: "数学 · 科学记数法", minutes: 50,
      units: [
        {
          name: "动画课堂 1 · 把大数写成 a×10ⁿ",
          blocks: [
            { type: "lesson", title: "▶ 给一长串 0 减肥", steps: [
              { text: "光速约 300000000 米/秒,一堆 0 又难写又易错。科学记数法帮大数「瘦身」:写成 a × 10ⁿ。", emoji: "💡" },
              { text: "规则:a 是「1 到 10 之间」的数(1 ≤ a < 10),n 是正整数。300000000 = 3 × 10⁸。", emoji: "🔢", scene: { type: "clues", items: [
                { head: "a", text: "1 ≤ a < 10" },
                { head: "n", text: "10 的指数" },
                { head: "例", text: "3×10⁸" }
              ] } },
              { text: "怎么定 n?数一数小数点要向左移几位。300000000 的小数点从末尾移到 3 后面,移了 8 位,n = 8。", emoji: "👈" },
              { text: "小窍门:对于整数,n = 原数的位数 − 1。300000000 有 9 位,n = 9 − 1 = 8。一秒定 n!", emoji: "⚡", scene: { type: "clues", items: [
                { head: "位数", text: "9 位" },
                { head: "n", text: "9 − 1 = 8" },
                { head: "结果", text: "3×10⁸" }
              ] } },
              { text: "记住:a 只能有一位整数(1~9),多了少了都不规范。5600 = 5.6 × 10³,不能写成 56 × 10²!", emoji: "🎯" }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 2 · 定 a、定 n,不出错",
          blocks: [
            { type: "lesson", title: "▶ 两个关键:a 只留一位,n 数准位", steps: [
              { text: "写科学记数法,盯紧两件事:a 部分只保留一位整数;n 数准了。", emoji: "🔍" },
              { text: "例:把 12500 写成科学记数法。a 只能是 1.25(小数点放在第一个数字后),不是 12.5!", emoji: "✍️", scene: { type: "clues", items: [
                { head: "原数", text: "12500" },
                { head: "a", text: "1.25(只一位整数)" },
                { head: "移位", text: "移 4 位 → n=4" }
              ] } },
              { text: "n 就是小数点移动的位数:12500 → 1.2500,小数点左移了 4 位,所以 n = 4,结果 1.25 × 10⁴。", emoji: "👈" },
              { text: "验算法:把 1.25 × 10⁴ 还原,小数点右移 4 位 = 12500,对上了就没错。", emoji: "✅" },
              { text: "口诀:第一个非零数字后点小数点(定 a),数点搬了几位就是 n。多练几个,张口就来!", emoji: "🏅" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "把 45000 用科学记数法表示,正确的是:",
            options: [
              "45 × 10³",
              "4.5 × 10⁴",
              "4.5 × 10³",
              "0.45 × 10⁵"
            ], answer: 1,
            demoSteps: [
              { text: "先定 a:小数点放在第一个数字 4 后面,得 4.5(只一位整数)。", emoji: "✍️", scene: { type: "clues", items: [
                { head: "a", text: "4.5" },
                { head: "45000", text: "5 位数" },
                { head: "n", text: "5 − 1 = 4" }
              ] } },
              { text: "再定 n:45000 是 5 位数,n = 5 − 1 = 4。", emoji: "⚡" }
            ],
            explain: "B 正确:a = 4.5(1~10 之间),45000 是 5 位数,n = 5 − 1 = 4,即 4.5 × 10⁴。",
            explainSteps: [
              { text: "A:45 不在 1~10 之间,a 不规范,错。", emoji: "❌" },
              { text: "C:n 应为 4 不是 3(4.5×10³=4500,太小),错。", emoji: "❌" },
              { text: "D:0.45 小于 1,a 不规范,错。", emoji: "❌" },
              { text: "B:4.5 × 10⁴ = 45000,a 规范 n 正确!选 B。", emoji: "✅" }
            ] }
        },
        {
          name: "🔥 BOSS 挑战 · 一天的心跳",
          blocks: [
            { type: "text", html: "💪 <b>BOSS 战规则</b>:用科学记数法表示身边的大数!先算出总数,再瘦身。草稿纸准备!" }
          ],
          q: { type: "fill", points: 20, boss: true, voice: "zh",
            q: "人的心脏大约每分钟跳 70 次。一小时有 60 分钟,那么一小时心跳约 4200 次。请把 4200 用科学记数法表示。(格式如 4.2×10³,填写 a 和 n,例如答 4.2×10^3)",
            placeholder: "例如: 4.2×10^3",
            accept: ["4.2×10³", "4.2×10^3", "4.2*10^3", "4.2x10^3", "4.2×10的3次方", "4.2乘10的3次方"],
            demoSteps: [
              { text: "先定 a:小数点放在第一个数字 4 后 → 4.2(只留一位整数)。", emoji: "✍️", scene: { type: "clues", items: [
                { head: "原数", text: "4200" },
                { head: "a", text: "4.2" },
                { head: "位数", text: "4 位" }
              ] } },
              { text: "定 n:4200 是 4 位数,n = 4 − 1 = 3。", emoji: "⚡" }
            ],
            explain: "4200 = 4.2 × 10³。a = 4.2(在 1~10 之间),4200 是 4 位数,n = 4 − 1 = 3。",
            explainSteps: [
              { text: "a:第一个数字 4 后点小数点 → 4.2。", emoji: "✍️" },
              { text: "n:4200 共 4 位,n = 4 − 1 = 3。", emoji: "⚡" },
              { text: "所以 4200 = 4.2 × 10³。生活中处处是大数,科学记数法让它们清清爽爽!", emoji: "🏆" }
            ] }
        }
      ]
    },

    // ================== 英语 ==================
    {
      subject: "english", icon: "📚", title: "英语 · some / any 的用法", minutes: 45,
      units: [
        {
          name: "单词训练营 · 购物场景 12 个(点卡片听发音!)",
          blocks: [
            { type: "text", html: "🎧 今天的词都在<span class='hl'>商店里</span>!学完就能用英语买东西。点卡片听发音,跟读 3 遍。" },
            { type: "flashcards", words: [
              { word: "some", phonetic: "/sʌm/", cn: "一些", sentence: "I want some apples." },
              { word: "any", phonetic: "/ˈeni/", cn: "任何;一些", sentence: "Do you have any milk?" },
              { word: "buy", phonetic: "/baɪ/", cn: "买", sentence: "I buy some bread." },
              { word: "shop", phonetic: "/ʃɒp/", cn: "商店", sentence: "The shop is near my home." },
              { word: "money", phonetic: "/ˈmʌni/", cn: "钱", sentence: "I have some money." },
              { word: "price", phonetic: "/praɪs/", cn: "价格", sentence: "What is the price?" },
              { word: "cheap", phonetic: "/tʃiːp/", cn: "便宜的", sentence: "These apples are cheap." },
              { word: "dear", phonetic: "/dɪə/", cn: "昂贵的", sentence: "That coat is too dear." },
              { word: "want", phonetic: "/wɒnt/", cn: "想要", sentence: "I want a cup of tea." },
              { word: "need", phonetic: "/niːd/", cn: "需要", sentence: "We need some eggs." },
              { word: "sell", phonetic: "/sel/", cn: "卖", sentence: "They sell fruit here." },
              { word: "pay", phonetic: "/peɪ/", cn: "付款", sentence: "I pay ten yuan." }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 · some 和 any:一对好搭档",
          blocks: [
            { type: "lesson", title: "▶ 肯定用 some,否定疑问用 any", steps: [
              { text: "some 和 any 都表示「一些」,可数不可数都能用。区别在于用在什么句子里。", emoji: "🤝" },
              { text: "基本规则:肯定句用 some;否定句和疑问句用 any。", emoji: "⚖️", scene: { type: "match", groups: [
                { head: "some(肯定)", items: ["I have some milk.", "There are some eggs."] },
                { head: "any(否定/疑问)", items: ["I don't have any milk.", "Do you have any eggs?"] }
              ] } },
              { text: "例:I have some bread.(肯定)/ I don't have any bread.(否定)/ Do you have any bread?(疑问)", emoji: "🍞" },
              { text: "特例:表示「请求」或「邀请」的疑问句,还用 some,显得更礼貌。Would you like some tea?", emoji: "☕", scene: { type: "clues", items: [
                { head: "一般疑问", text: "any" },
                { head: "请求/邀请", text: "some(礼貌)" },
                { head: "例", text: "Would you like some…?" }
              ] } },
              { text: "口诀:肯定 some,否定疑问 any;请客邀请还用 some。掌握这条,选词不再纠结!", emoji: "🎯" }
            ] },
            { type: "chant", lines: ["some 用在肯定句,", "any 否定疑问里;", "请客邀请要客气,", "还得请出 some 来!"] }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "选出完全正确的一句:",
            options: [
              "I have any apples, but I don't have some bananas.",
              "There aren't any eggs, but there is some milk.",
              "Do you have some money? No, I don't.",
              "She wants any water and some rice."
            ], answer: 1,
            demoSteps: [
              { text: "逐句判断句型:肯定?否定?疑问?再看 some/any 用得对不对。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "肯定句", text: "用 some" },
                { head: "否定句", text: "用 any" },
                { head: "疑问句", text: "一般用 any" }
              ] } },
              { text: "找出所有 some/any 都放对位置的那一句。", emoji: "✅" }
            ],
            explain: "B 正确:否定句 aren't any、肯定句 is some,都对。A 肯定用 any 错;C 一般疑问句宜用 any;D 肯定句用 any 错。",
            explainSteps: [
              { text: "A:肯定句 have 后该用 some,否定句该用 any,全反了,错。", emoji: "❌" },
              { text: "C:一般疑问句(非请求)该用 any,错。", emoji: "❌" },
              { text: "D:wants 是肯定,water 前该用 some 而非 any,错。", emoji: "❌" },
              { text: "B:aren't any(否定用 any)、is some(肯定用 some),全对!选 B。", emoji: "✅" }
            ] }
        },
        {
          name: "英文名著时光 · The Golden Goose",
          blocks: [
            { type: "rule", title: "📖 名著名片", html: "<b>格林兄弟 Grimm</b>《金鹅》——善良的傻小子得到一只金鹅,引出一连串好笑又温暖的故事。" },
            { type: "reading", speakable: true, title: "The Golden Goose", paragraphs: [
              "A kind young man shares his food with an old man in the forest. 'You are kind,' says the old man. 'Now cut down this tree.' Under the tree, there is a goose with feathers of gold!",
              "The young man takes the golden goose to an inn. Three girls want a golden feather. One girl touches the goose — and her hand sticks to it! The second girl touches the first, and the third touches the second. Now all three stick together.",
              "The young man walks on, and the three girls must follow. More and more people touch them and stick on: a man, a woman, even a dog! What a funny line of people!",
              "In the town, there is a princess who never laughs. When she sees the long line of people running after the goose, she laughs and laughs. And so the kind young man wins the friendship of the princess."
            ], tip: "生词提示:share 分享 / feather 羽毛 / stick 粘住 / follow 跟随 / princess 公主" }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "Why does the young man get the golden goose?(小伙子为什么得到了金鹅?)",
            options: [
              "Because he buys it at the inn.",
              "Because he is kind and shares his food with the old man.",
              "Because he steals it from the tree.",
              "Because the princess gives it to him."
            ], answer: 1,
            demoSteps: [
              { text: "小伙子在得到金鹅之前做了什么好事?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "小伙子", text: "shares his food" },
                { head: "老人说", text: "You are kind" },
                { head: "奖励", text: "cut the tree → goose" }
              ] } },
              { text: "老人因为他的善良,才告诉他树下有金鹅。", emoji: "🪿" }
            ],
            explain: "B 正确。小伙子把食物分给森林里的老人,老人因他的善良,让他砍树得到了金鹅。善良带来好运。",
            explainSteps: [
              { text: "小伙子善良地分享食物,老人被打动。", emoji: "🪿" },
              { text: "老人指点他砍树,树下正是金鹅,选 B!", emoji: "✅" },
              { text: "A、C、D 都不符原文。寓意:善良的人,总会遇到好运气。", emoji: "🎯" }
            ] }
        }
      ]
    },

    // ================== 语文 ==================
    {
      subject: "chinese", icon: "📝", title: "语文 · 《峨眉山月歌》与默写", minutes: 40,
      units: [
        {
          name: "动画课堂 · 峨眉山月歌:一路的月与思念",
          blocks: [
            { type: "lesson", title: "▶ 李白笔下的一江流月", steps: [
              { text: "《峨眉山月歌》是李白年轻时离开家乡时写的。短短四句,藏着五个地名,却一点不乱,反显思乡情长。", emoji: "🌙" },
              { text: "「峨眉山月半轮秋,影入平羌江水流。」——秋夜半月挂峨眉,月影倒映在平羌江里,随水流动。", emoji: "🌊", scene: { type: "sea", phase: "stars" } },
              { text: "「夜发清溪向三峡,思君不见下渝州。」——夜里从清溪出发驶向三峡,想念友人却见不到,只能顺流去渝州。", emoji: "🚣", scene: { type: "clues", items: [
                { head: "地名", text: "峨眉·平羌·清溪" },
                { head: "又", text: "三峡·渝州" },
                { head: "五地名", text: "串起旅程" }
              ] } },
              { text: "妙处:一句一景,月亮始终相伴。月是故乡的象征,月在,思念就在。", emoji: "💭" },
              { text: "这首诗被誉为「五地名而不觉堆砌」的典范:地名串起旅程,月光串起乡愁。李白的功力,就在这份自然。", emoji: "🏆" }
            ] }
          ],
          q: { type: "choice", points: 10, voice: "zh",
            q: "《峨眉山月歌》连用五个地名却不显堆砌,主要因为:",
            options: [
              "李白喜欢写地名",
              "这些地名串起了诗人的旅程,又始终以「月」贯穿,情景交融、自然流畅",
              "地名越多诗越好",
              "为了凑够字数"
            ], answer: 1,
            demoSteps: [
              { text: "五个地名靠什么串成一条线?又是什么贯穿始终、寄托感情?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "地名", text: "串起旅程" },
                { head: "月", text: "贯穿全诗" },
                { head: "效果", text: "情景交融" }
              ] } },
              { text: "地名标出行踪,月光承载思念,二者结合就不觉堆砌。", emoji: "🌙" }
            ],
            explain: "B 正确。五个地名标示旅程的推进,一轮秋月始终相伴、寄托思念,情景交融,读来自然,毫无堆砌之感。",
            explainSteps: [
              { text: "地名不是随便堆的,而是顺着「峨眉→平羌→清溪→三峡→渝州」的旅程展开。", emoji: "🚣" },
              { text: "月亮贯穿全诗,承载着乡愁,情景交融,选 B!", emoji: "✅" },
              { text: "好诗的地名是有作用的:既写行踪，又生情感,一举两得。", emoji: "🎯" }
            ] }
        },
        {
          name: "动画课堂 · 默写通关:书写规范三查",
          blocks: [
            { type: "lesson", title: "▶ 名句默写,一分不能丢", steps: [
              { text: "古诗文默写是中考的「送分题」,但也是「送命题」——错一个字就零分。今天练默写的规范。", emoji: "✍️" },
              { text: "三查法:一查错别字(易错字重点记),二查漏字添字,三查串句(别把这首的句子接到那首上)。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "一查", text: "错别字" },
                { head: "二查", text: "漏字添字" },
                { head: "三查", text: "串句" }
              ] } },
              { text: "《峨眉山月歌》易错字:「半轮」的「轮」、「平羌」的「羌」、「渝州」的「渝」,都要写对。", emoji: "⚠️" },
              { text: "理解性默写更要读懂题干:「表现思念友人的句子」是「思君不见下渝州」,不能张冠李戴。", emoji: "🎯" },
              { text: "写完一定回读一遍!很多分不是不会,是看错、漏写。三查一读,默写满分稳稳的。", emoji: "✅" }
            ] }
          ],
          q: { type: "fill", points: 10, voice: "zh",
            q: "默写:《峨眉山月歌》中写月影映入江水、随江流动的句子是「峨眉山月半轮秋,__________」。(填后半句)",
            placeholder: "填七个字",
            accept: ["影入平羌江水流", "影入平羌江水流。", "影入平羌江水流,"],
            demoSteps: [
              { text: "上句写「半轮秋月」,下句该写月影怎么样了?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "上句", text: "峨眉山月半轮秋" },
                { head: "下句", text: "写月影入江" },
                { head: "易错字", text: "平羌" }
              ] } },
              { text: "月影倒映在平羌江中随水流动——注意「羌」字别写错。", emoji: "✍️" }
            ],
            explain: "答案:影入平羌江水流。写半轮秋月的影子倒映在平羌江中,随江水缓缓流动,注意「羌」字。",
            explainSteps: [
              { text: "下句「影入平羌江水流」,月影随江水流动。", emoji: "🌊" },
              { text: "易错字「羌」(qiāng),多写几遍记牢。", emoji: "⚠️" },
              { text: "默写记住三查一读,把送分题稳稳收下!", emoji: "✅" }
            ] }
        },
        {
          name: "今日彩蛋 · 名著打卡",
          blocks: [
            { type: "rule", title: "📖 睡前 20 分钟名著时间", html: "明天是<b>第二周周测复习日</b>!今晚把这周读的<b>《西游记》</b>回顾一下,顺便背一背《峨眉山月歌》和《咏雪》。<br>李白一路带着月亮思念友人,你也可以想想:这个暑假,你最想念谁?" }
          ],
          q: null
        }
      ]
    },

    // ================== 道法 ==================
    {
      subject: "civics", icon: "⚖️", title: "道法 · 认识自己", minutes: 25,
      units: [
        {
          name: "动画课堂 · 正确认识自己,悦纳成长",
          blocks: [
            { type: "lesson", title: "▶ 我是一个怎样的人?", steps: [
              { text: "「我是谁?我是怎样的人?」进入青春期,我们越来越关注自己。正确认识自己,是成长的重要一课。", emoji: "🪞" },
              { text: "认识自己有两条途径:一是自我评价(自己看自己),二是他人评价(别人眼中的我)。两面镜子一起照,更全面。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "途径一", text: "自我评价" },
                { head: "途径二", text: "他人评价" },
                { head: "态度", text: "全面·客观" }
              ] } },
              { text: "对待他人评价要理性:既不能盲从(别人说啥信啥),也不能忽视(充耳不闻)。有则改之,无则加勉。", emoji: "⚖️" },
              { text: "认识自己既要看到优点,也要接纳不足。人无完人,接纳真实的自己,才能更好地发展自己。", emoji: "🌱" },
              { text: "记住:认识自己不是为了自卑或自负,而是为了「扬长补短」,做更好的自己。", emoji: "💪" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "关于正确认识自己,下列做法恰当的一项是:",
            options: [
              "只相信自己的评价,别人说什么都不听",
              "别人说什么就是什么,完全按别人的评价改变自己",
              "既重视他人评价,又能理性分析,有则改之、无则加勉",
              "认识到缺点就自卑,认为自己一无是处"
            ], answer: 2,
            demoSteps: [
              { text: "回忆认识自己的两条途径和对待评价的正确态度。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "两途径", text: "自我+他人" },
                { head: "对他评", text: "既不盲从也不忽视" },
                { head: "对缺点", text: "接纳并改进" }
              ] } },
              { text: "把「太自我」「太盲从」「太自卑」的排除,选理性全面的。", emoji: "⚖️" }
            ],
            explain: "C 正确。既重视他人评价又理性分析,有则改之无则加勉,这是对待评价的正确态度。A 太自我,B 太盲从,D 太自卑,都不可取。",
            explainSteps: [
              { text: "A:只信自己、不听别人,容易固执,错。", emoji: "❌" },
              { text: "B:完全盲从别人,失去自我,错。", emoji: "❌" },
              { text: "D:一有缺点就自卑,人无完人,应接纳改进,错。", emoji: "❌" },
              { text: "C:重视又理性,有则改之无则加勉,正确!选 C。", emoji: "✅" }
            ] }
        }
      ]
    }
  ]
};
