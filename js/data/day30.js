// ============ 第 30 关 ============
window.DAYS = window.DAYS || {};

window.DAYS[30] = {
  day: 30,
  title: "第 30 关 · 一起干活",
  estimate: "四科约 2~3 小时 · 共 7 道思考题(含 1 道 BOSS 题)",
  sections: [
    // ================== 数学 ==================
    {
      subject: "math", icon: "🔢", title: "数学 · 方程应用:工程问题", minutes: 50,
      units: [
        {
          name: "动画课堂 1 · 工作总量看作「1」",
          blocks: [
            { type: "lesson", title: "▶ 工程问题的核心设定", steps: [
              { text: "工程问题:一件工作,几个人合作要多久?核心公式:工作总量 = 工作效率 × 工作时间。", emoji: "🔨" },
              { text: "妙招:把「工作总量」看作单位「1」(整件工作)。这样,工作效率就是「每天完成的几分之几」。", emoji: "1️⃣", scene: { type: "clues", items: [
                { head: "工作总量", text: "看作 1" },
                { head: "一人独做 a 天", text: "效率 = 1/a" },
                { head: "含义", text: "每天做 1/a" }
              ] } },
              { text: "例:一项工程,甲单独做 10 天完成,那甲每天的工作效率就是 1/10(每天完成十分之一)。", emoji: "📊" },
              { text: "合作时,效率相加:甲每天 1/10、乙每天 1/15,两人合作每天完成 1/10 + 1/15。", emoji: "🤝", scene: { type: "clues", items: [
                { head: "甲效率", text: "1/10" },
                { head: "乙效率", text: "1/15" },
                { head: "合作效率", text: "1/10 + 1/15" }
              ] } },
              { text: "口诀:工作总量看作 1,单独 a 天效率 1/a;合作效率加起来,时间用总量除效率。工程问题不再怕!", emoji: "🎯" }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 2 · 合作工程列方程",
          blocks: [
            { type: "lesson", title: "▶ 合作完成 = 各自完成之和", steps: [
              { text: "合作工程题,等量关系是:各人完成的工作量之和 = 工作总量(1)。", emoji: "🤝" },
              { text: "例:甲单独 10 天完成,乙单独 15 天完成,两人合作 x 天完成。甲做了 x/10,乙做了 x/15。", emoji: "🔨", scene: { type: "clues", items: [
                { head: "甲完成", text: "(1/10)·x = x/10" },
                { head: "乙完成", text: "(1/15)·x = x/15" },
                { head: "总量", text: "= 1" }
              ] } },
              { text: "列方程:x/10 + x/15 = 1。合作完成的量加起来等于整件工作「1」。", emoji: "🔑" },
              { text: "解:去分母两边乘 30,得 3x + 2x = 30,5x = 30,x = 6。两人合作 6 天完成。", emoji: "✅", scene: { type: "clues", items: [
                { head: "×30", text: "3x + 2x = 30" },
                { head: "合并", text: "5x = 30" },
                { head: "解", text: "x = 6" }
              ] } },
              { text: "口诀:合作时间设为 x,各自完成 x 乘效率;加起来等于 1,去分母来解方程!", emoji: "🏅" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "一项工程,甲单独做 20 天完成,乙单独做 30 天完成。两人合作 x 天完成,列出的方程正确的是:",
            options: [
              "20x + 30x = 1",
              "x/20 + x/30 = 1",
              "x/20 − x/30 = 1",
              "(20 + 30)x = 1"
            ], answer: 1,
            demoSteps: [
              { text: "甲每天效率 1/20,x 天完成 x/20;乙每天 1/30,x 天完成 x/30。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "甲完成", text: "x/20" },
                { head: "乙完成", text: "x/30" },
                { head: "关系", text: "两者之和 = 1" }
              ] } },
              { text: "合作完成的总量 = 1(整件工作)。", emoji: "🤝" }
            ],
            explain: "B 正确。甲效率 1/20、乙效率 1/30,x 天各完成 x/20、x/30,合作完成 = 1:x/20 + x/30 = 1。A 效率写反;C 用了减;D 结构错。",
            explainSteps: [
              { text: "甲每天做 1/20,x 天做 x/20;乙每天 1/30,x 天做 x/30。", emoji: "🔨" },
              { text: "两人合作完成整件工作,和为 1:x/20 + x/30 = 1,选 B!", emoji: "✅" },
              { text: "A 把效率当成了 20、30(反了),工作效率是 1/天数!", emoji: "🎯" }
            ] }
        },
        {
          name: "🔥 BOSS 挑战 · 一起打扫",
          blocks: [
            { type: "text", html: "💪 <b>BOSS 战规则</b>:真实的合作问题!把工作量看作 1,列方程解出合作时间。草稿纸准备!" }
          ],
          q: { type: "fill", points: 20, boss: true, voice: "zh",
            q: "打扫一间教室,恩恩单独做要 12 分钟,弟弟单独做要 24 分钟。两人一起打扫需要多少分钟?(把工作量看作 1,列方程 x/12 + x/24 = 1,直接填数字)",
            placeholder: "例如: 6",
            accept: ["8", "8分钟", "八", "八分钟"],
            demoSteps: [
              { text: "去分母:两边同乘 24(12 和 24 的最小公倍数)。", emoji: "✖️", scene: { type: "clues", items: [
                { head: "x/12×24", text: "2x" },
                { head: "x/24×24", text: "x" },
                { head: "1×24", text: "24" }
              ] } },
              { text: "得 2x + x = 24,合并求 x。", emoji: "🧮" }
            ],
            explain: "x/12 + x/24 = 1,两边乘 24:2x + x = 24,合并 3x = 24,x = 8。两人一起打扫需要 8 分钟。",
            explainSteps: [
              { text: "去分母乘 24:2x + x = 24。", emoji: "✖️" },
              { text: "合并 3x = 24,解得 x = 8。", emoji: "🧮" },
              { text: "8 分钟!合作比单独快很多——团结协作,效率倍增,数学也这么说!", emoji: "🏆" }
            ] }
        }
      ]
    },

    // ================== 英语 ==================
    {
      subject: "english", icon: "📚", title: "英语 · 一般将来时 will", minutes: 45,
      units: [
        {
          name: "单词训练营 · 未来与愿望 12 个(点卡片听发音!)",
          blocks: [
            { type: "text", html: "🎧 今天的词都在畅想<span class='hl'>未来</span>!点卡片听发音,跟读 3 遍。" },
            { type: "flashcards", words: [
              { word: "will", phonetic: "/wɪl/", cn: "将;会", sentence: "I will help you." },
              { word: "won't", phonetic: "/wəʊnt/", cn: "不会", sentence: "It won't rain today." },
              { word: "believe", phonetic: "/bɪˈliːv/", cn: "相信", sentence: "I believe you will win." },
              { word: "become", phonetic: "/bɪˈkʌm/", cn: "成为", sentence: "She will become a doctor." },
              { word: "world", phonetic: "/wɜːld/", cn: "世界", sentence: "The world will change." },
              { word: "robot", phonetic: "/ˈrəʊbɒt/", cn: "机器人", sentence: "Robots will help us." },
              { word: "clean", phonetic: "/kliːn/", cn: "干净的", sentence: "The air will be cleaner." },
              { word: "travel", phonetic: "/ˈtrævl/", cn: "旅行", sentence: "We will travel to space." },
              { word: "dream", phonetic: "/driːm/", cn: "梦想", sentence: "Dreams will come true." },
              { word: "hope", phonetic: "/həʊp/", cn: "希望", sentence: "I hope it will be sunny." },
              { word: "everything", phonetic: "/ˈevriθɪŋ/", cn: "一切", sentence: "Everything will be fine." },
              { word: "someday", phonetic: "/ˈsʌmdeɪ/", cn: "总有一天", sentence: "Someday I will fly a plane." }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 · will:说将来的另一种方式",
          blocks: [
            { type: "lesson", title: "▶ will + 动词原形", steps: [
              { text: "一般将来时的第二种表达:will + 动词原形。will 是情态动词,不管主语是谁,都用 will。", emoji: "🔮" },
              { text: "结构:主语 + will + 动词原形。I will go. She will help. They will come. 简单又统一!", emoji: "🔧", scene: { type: "clues", items: [
                { head: "所有主语", text: "都用 will" },
                { head: "will 后", text: "动词原形" },
                { head: "缩写", text: "I'll, she'll…" }
              ] } },
              { text: "否定:will not = won't。I won't go. 疑问:Will 提到句首。Will you help? — Yes, I will./No, I won't.", emoji: "❓", scene: { type: "clues", items: [
                { head: "肯定", text: "I will go." },
                { head: "否定", text: "I won't go." },
                { head: "疑问", text: "Will you go?" }
              ] } },
              { text: "will 和 be going to 都表将来。区别:be going to 多表「有计划、有迹象」,will 多表「临时决定、预测」。", emoji: "⚖️" },
              { text: "口诀:将来还可用 will,所有主语都能配;后跟原形否定 won't,预测决定都用它!", emoji: "🎯" }
            ] },
            { type: "chant", lines: ["will 表将来最方便,", "主语不变都用 will;", "后面动词用原形,", "否定缩写变 won't!"] }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "选出完全正确的一句:",
            options: [
              "I think it will rains tomorrow.",
              "I think it will rain tomorrow.",
              "I think it wills rain tomorrow.",
              "I think it will to rain tomorrow."
            ], answer: 1,
            demoSteps: [
              { text: "will 后面动词用什么形式?will 本身会变吗?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "will", text: "本身不变" },
                { head: "后面", text: "动词原形" },
                { head: "禁止", text: "rains/to/wills" }
              ] } },
              { text: "will 后用原形 rain,不加 s、不加 to,will 也不加 s。", emoji: "✅" }
            ],
            explain: "B 正确:will rain(原形)。A 的 rains 多了 s;C 的 wills 错(will 不变);D 多了 to。will 后面永远跟原形!",
            explainSteps: [
              { text: "A:will 后用原形,rains 错。", emoji: "❌" },
              { text: "C:will 是情态动词,本身不加 s,错。", emoji: "❌" },
              { text: "D:will 后不加 to,错。", emoji: "❌" },
              { text: "B:will rain,情态动词 + 原形,正确!选 B。", emoji: "✅" }
            ] }
        },
        {
          name: "英文名著时光 · The Fisherman and His Wife",
          blocks: [
            { type: "rule", title: "📖 名著名片", html: "<b>格林兄弟 Grimm</b>《渔夫和他的妻子》——一条会说话的比目鱼,和一个永不满足的愿望,贪心的结局是回到原点。" },
            { type: "reading", speakable: true, title: "The Fisherman and His Wife", paragraphs: [
              "A poor fisherman catches a magic fish. 'Please let me go,' says the fish, 'and I will give you a wish.' The kind fisherman lets it go and asks for nothing. But his wife is angry. 'Go back and ask for a nice house!' she says. The fish gives them a house.",
              "But the wife is not happy for long. 'Ask for a big castle!' she says. Then, 'Ask to be a queen!' Each time, the fisherman goes to the sea, and each time the fish grants the wish. But each time, the sea grows darker and rougher.",
              "At last the wife says, 'I want to rule the sun and the moon!' The fisherman goes to the sea. It is now black and full of storms. He asks for this last wish.",
              "'Go home,' says the fish. 'She is back in your old hut.' And so it is. The greedy wife has everything taken away, and they are poor again. Wanting too much can leave you with nothing."
            ], tip: "生词提示:fisherman 渔夫 / magic 魔法的 / castle 城堡 / greedy 贪心的 / hut 小屋" }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "Why do the fisherman and his wife end up poor again?(渔夫和妻子为什么最后又变穷了?)",
            options: [
              "Because the fish dies.",
              "Because the wife is too greedy and asks for too much.",
              "Because the fisherman loses the fish.",
              "Because a storm destroys their house."
            ], answer: 1,
            demoSteps: [
              { text: "妻子的要求越来越大,大海怎么变化?最后结果如何?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "妻子", text: "越要越多" },
                { head: "大海", text: "越来越黑越汹涌" },
                { head: "结局", text: "回到小破屋" }
              ] } },
              { text: "妻子贪得无厌,最后连房子都失去了。", emoji: "🐟" }
            ],
            explain: "B 正确。妻子贪得无厌,从房子要到城堡、女王,最后要主宰日月,愿望太过分,结果一切被收回,又变回穷人。",
            explainSteps: [
              { text: "妻子的胃口越来越大,大海也越来越愤怒。", emoji: "🌊" },
              { text: "最后贪心过头,一切被收回,回到小破屋,选 B!", emoji: "✅" },
              { text: "寓意:贪得无厌,最终会一无所有。知足常乐才是福。", emoji: "🎯" }
            ] }
        }
      ]
    },

    // ================== 语文 ==================
    {
      subject: "chinese", icon: "📝", title: "语文 · 《夜上受降城闻笛》", minutes: 40,
      units: [
        {
          name: "动画课堂 · 李益:一夜乡愁满边城",
          blocks: [
            { type: "lesson", title: "▶ 月色、笛声、思乡情", steps: [
              { text: "《夜上受降城闻笛》是唐代李益的边塞诗名篇。受降城是边疆要塞,一个戍边战士的夜晚,被笛声勾起了浓浓乡愁。", emoji: "🌙" },
              { text: "「回乐烽前沙似雪,受降城外月如霜。」——烽火台前的沙子白得像雪,城外的月光冷得像霜。", emoji: "❄️", scene: { type: "clues", items: [
                { head: "沙似雪", text: "比喻·凄冷" },
                { head: "月如霜", text: "比喻·清寒" },
                { head: "营造", text: "苍凉的边塞夜" }
              ] } },
              { text: "「不知何处吹芦管,一夜征人尽望乡。」——不知哪里吹起了芦笛,一夜之间戍边的将士都望着家乡的方向。", emoji: "🎶", scene: { type: "clues", items: [
                { head: "芦管", text: "笛声勾乡愁" },
                { head: "尽望乡", text: "人人思乡" },
                { head: "一夜", text: "愁绪无眠" }
              ] } },
              { text: "妙处:前两句写景(沙、月),后两句写情(笛、望乡),由景入情,层层渲染,乡愁扑面而来。", emoji: "🎭" },
              { text: "「一夜征人尽望乡」——一个「尽」字,写出所有战士的共同思念,把个人乡愁扩大成千万人的共鸣。", emoji: "💔" }
            ] }
          ],
          q: { type: "choice", points: 10, voice: "zh",
            q: "《夜上受降城闻笛》前两句「沙似雪」「月如霜」的主要作用是:",
            options: [
              "只是写夜里天气很冷",
              "用比喻描绘边塞夜晚的苍凉清冷,渲染气氛,为下文写思乡之情作铺垫",
              "说明这里经常下雪下霜",
              "表现将士们不怕冷"
            ], answer: 1,
            demoSteps: [
              { text: "「沙似雪」「月如霜」用了什么修辞?营造出怎样的气氛?和后文的乡愁有什么关系?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "比喻", text: "沙似雪·月如霜" },
                { head: "气氛", text: "苍凉清冷" },
                { head: "作用", text: "为思乡铺垫" }
              ] } },
              { text: "写景是为了后面的抒情作铺垫——这是环境描写的常见作用。", emoji: "🎭" }
            ],
            explain: "B 正确。「沙似雪」「月如霜」运用比喻,描绘出边塞夜晚的苍凉清冷,渲染气氛,为后文戍边将士的思乡之情作铺垫。",
            explainSteps: [
              { text: "「似雪」「如霜」是比喻,写出边塞夜的清冷苍凉。", emoji: "❄️" },
              { text: "这清冷的景为下文「尽望乡」的乡愁作铺垫,选 B!", emoji: "✅" },
              { text: "由景入情、以景衬情,是古诗常见的写法,记牢!", emoji: "🎯" }
            ] }
        },
        {
          name: "动画课堂 · 边塞诗:金戈铁马与思乡情",
          blocks: [
            { type: "lesson", title: "▶ 读懂一类诗", steps: [
              { text: "《夜上受降城闻笛》是「边塞诗」的代表。边塞诗是唐诗的一大类,专写边疆的风光、战争和戍边生活。", emoji: "🏔️" },
              { text: "边塞诗常见两类情感:一是保家卫国的豪情壮志,二是戍边将士的思乡之愁。有豪迈,也有柔情。", emoji: "⚔️", scene: { type: "clues", items: [
                { head: "豪情", text: "杀敌报国" },
                { head: "愁情", text: "思乡念亲" },
                { head: "本诗", text: "以思乡为主" }
              ] } },
              { text: "边塞诗的常见意象:大漠、孤城、烽火、明月、羌笛、芦管。看到这些词,多半是边塞诗。", emoji: "🈺" },
              { text: "著名边塞诗人:王昌龄、岑参、高适、李益等。他们的诗,或雄浑壮阔,或苍凉深沉。", emoji: "✍️" },
              { text: "读边塞诗口诀:抓意象(大漠孤城)、辨情感(豪情或乡愁)。本诗借笛声月色,写的正是浓浓乡愁。", emoji: "🎯" }
            ] }
          ],
          q: { type: "fill", points: 10, voice: "zh",
            q: "《夜上受降城闻笛》这类专写边疆风光、战争和戍边将士生活情感的诗,属于唐诗中的「__________诗」。(填两个字)",
            placeholder: "填两个字",
            accept: ["边塞", "边塞。", "边塞诗"],
            demoSteps: [
              { text: "这首诗写的是「边疆、戍边」的生活和情感,属于哪一类诗?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "写边疆", text: "大漠·孤城·戍守" },
                { head: "类别", text: "?诗" },
                { head: "两个字", text: "边…" }
              ] } },
              { text: "写「边」疆「塞」外的诗——两个字。", emoji: "🏔️" }
            ],
            explain: "答案:边塞。专写边疆风光、战争、戍边生活与情感的诗叫边塞诗,《夜上受降城闻笛》是其代表作。",
            explainSteps: [
              { text: "写边疆、戍边的诗 = 边塞诗。", emoji: "🏔️" },
              { text: "常见意象:大漠、孤城、烽火、羌笛、明月。", emoji: "🈺" },
              { text: "答「边塞」。会辨诗歌类别,鉴赏题就有了方向!", emoji: "🎯" }
            ] }
        },
        {
          name: "今日彩蛋 · 名著打卡",
          blocks: [
            { type: "rule", title: "📖 睡前 20 分钟名著时间", html: "继续读<b>《朝花夕拾》</b>!李益笔下的戍边战士「一夜尽望乡」。今晚背一背《夜上受降城闻笛》,再想想:<b>鲁迅在《朝花夕拾》里,又在思念着童年的什么呢?</b><br>思念,是古今相通的情感。" }
          ],
          q: null
        }
      ]
    },

    // ================== 地理 ==================
    {
      subject: "geography", icon: "🌍", title: "地理 · 聚落与环境", minutes: 25,
      units: [
        {
          name: "动画课堂 · 城市和乡村,人类的家",
          blocks: [
            { type: "lesson", title: "▶ 聚落的形成与差异", steps: [
              { text: "人们聚居在一起,形成了「聚落」。聚落分两大类:城市和乡村。它们是人类最主要的居住地。", emoji: "🏘️" },
              { text: "乡村聚落的人们主要从事农业(种地、放牧、捕鱼);城市聚落的人们主要从事工业和服务业。", emoji: "🌾", scene: { type: "clues", items: [
                { head: "乡村", text: "农业为主" },
                { head: "城市", text: "工业·服务业" },
                { head: "差异", text: "生产方式不同" }
              ] } },
              { text: "聚落的形成和自然环境关系密切。有利的条件:地形平坦、water 水源充足、气候适宜、交通便利、土壤肥沃。", emoji: "🗺️", scene: { type: "clues", items: [
                { head: "选址喜欢", text: "平坦·水源·交通好" },
                { head: "河流沿岸", text: "常形成聚落" },
                { head: "沙漠山区", text: "聚落稀少" }
              ] } },
              { text: "所以聚落多分布在河流沿岸、平原地区;而沙漠、高山、极地等环境恶劣的地方,聚落稀少。", emoji: "🏞️" },
              { text: "有些聚落还是宝贵的世界文化遗产(如丽江古城、威尼斯),要注意保护。记住:环境影响聚落的分布和形态!", emoji: "🎯" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "关于聚落与环境的关系,下列说法正确的一项是:",
            options: [
              "聚落的分布与自然环境没有关系,哪里都一样",
              "地形平坦、水源充足、交通便利的地方,往往聚落密集",
              "沙漠和高山地区因为风景好,聚落最多",
              "城市聚落的人们主要从事农业生产"
            ], answer: 1,
            demoSteps: [
              { text: "回忆:聚落喜欢在什么样的地方形成?城市和乡村从事什么?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "聚落喜欢", text: "平坦·水源·交通" },
                { head: "沙漠高山", text: "聚落稀少" },
                { head: "城市", text: "工业服务业" }
              ] } },
              { text: "把「没关系」「沙漠最多」「城市务农」的错误说法排除。", emoji: "🔍" }
            ],
            explain: "B 正确。A 错(聚落分布与自然环境关系密切);C 错(沙漠高山环境恶劣,聚落稀少);D 错(城市主要从事工业和服务业,乡村才主要务农)。",
            explainSteps: [
              { text: "A:聚落分布与自然环境密切相关,错。", emoji: "❌" },
              { text: "C:沙漠高山条件恶劣,聚落稀少,错。", emoji: "❌" },
              { text: "D:城市从事工业服务业,乡村才务农,错。", emoji: "❌" },
              { text: "B:平坦、水源足、交通便利处聚落密集,正确!选 B。", emoji: "✅" }
            ] }
        }
      ]
    }
  ]
};
