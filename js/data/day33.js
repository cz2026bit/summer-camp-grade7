// ============ 第 33 关 ============
window.DAYS = window.DAYS || {};

window.DAYS[33] = {
  day: 33,
  title: "第 33 关 · 角度巧计算",
  estimate: "四科约 2~3 小时 · 共 7 道思考题(含 1 道 BOSS 题)",
  sections: [
    // ================== 数学 ==================
    {
      subject: "math", icon: "🔢", title: "数学 · 角度计算", minutes: 50,
      units: [
        {
          name: "动画课堂 1 · 度分秒:角的「60 进制」",
          blocks: [
            { type: "lesson", title: "▶ 1 度 = 60 分,1 分 = 60 秒", steps: [
              { text: "角的度量单位是度(°)、分(′)、秒(″)。和时间一样,它们是「60 进制」:1° = 60′,1′ = 60″。", emoji: "🕐" },
              { text: "换算记住:大化小乘 60,小化大除 60。0.5° = 0.5×60 = 30′;90′ = 90÷60 = 1.5° = 1°30′。", emoji: "🔄", scene: { type: "clues", items: [
                { head: "1°", text: "= 60′" },
                { head: "1′", text: "= 60″" },
                { head: "换算", text: "大→小×60" }
              ] } },
              { text: "度分秒加减也像时钟:满 60 进 1。例:30°40′ + 20°30′ = 50°70′ = 51°10′(70′ 满 60 进 1°)。", emoji: "➕", scene: { type: "clues", items: [
                { head: "分相加", text: "40′+30′=70′" },
                { head: "满 60 进 1", text: "70′=1°10′" },
                { head: "结果", text: "51°10′" }
              ] } },
              { text: "减法要「借」:像时钟不够减就借 60。40°20′ − 10°30′,分不够减,从度借 1°=60′:变 40°80′... 再减。", emoji: "➖" },
              { text: "口诀:度分秒,60 进;满 60 就进 1,不够减就借 60。和看钟表一个理儿!", emoji: "🎯" }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 2 · 巧用互余互补求角",
          blocks: [
            { type: "lesson", title: "▶ 方程思想解角度", steps: [
              { text: "角度计算常和「互余、互补」结合,还常出现「倍分关系」。用方程思想,难题变简单。", emoji: "🧮" },
              { text: "例:一个角比它的余角大 20°,求这个角。设这个角为 x,它的余角是 90°−x。", emoji: "🔑", scene: { type: "clues", items: [
                { head: "设角", text: "x" },
                { head: "余角", text: "90° − x" },
                { head: "关系", text: "x = (90−x) + 20" }
              ] } },
              { text: "「比余角大 20°」→ x = (90−x) + 20。解:x = 90 − x + 20,2x = 110,x = 55°。", emoji: "✅" },
              { text: "倍分关系:「一个角是它补角的 2 倍」。设角 x,补角 180−x,列 x = 2(180−x),解得 x = 120°。", emoji: "🔢", scene: { type: "clues", items: [
                { head: "设角", text: "x" },
                { head: "补角", text: "180° − x" },
                { head: "2 倍", text: "x = 2(180−x)" }
              ] } },
              { text: "口诀:求角用方程,余角 90 减,补角 180 减;抓住大小倍数关系,列个方程解出来!", emoji: "🎯" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "一个角的补角比它的余角大多少度?(即同一个角,补角 − 余角 = ?)",
            options: ["45°", "90°", "180°", "无法确定"], answer: 1,
            demoSteps: [
              { text: "设这个角为 x。它的补角是 180−x,余角是 90−x。求「补角 − 余角」。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "补角", text: "180 − x" },
                { head: "余角", text: "90 − x" },
                { head: "相减", text: "(180−x)−(90−x)" }
              ] } },
              { text: "(180−x) − (90−x),x 会不会抵消?算一算。", emoji: "🧮" }
            ],
            explain: "B 正确。补角 − 余角 = (180−x) − (90−x) = 180 − x − 90 + x = 90°。无论 x 是多少,差都是 90°!",
            explainSteps: [
              { text: "补角 180−x,余角 90−x。", emoji: "🧮" },
              { text: "相减:(180−x)−(90−x) = 90,x 抵消了!", emoji: "✨" },
              { text: "任何角的补角总比余角大 90°,选 B!这是个漂亮的规律。", emoji: "✅" }
            ] }
        },
        {
          name: "🔥 BOSS 挑战 · 钟面上的角",
          blocks: [
            { type: "text", html: "💪 <b>BOSS 战规则</b>:时钟里也藏着角度!算一算某时刻时针与分针的夹角。草稿纸准备!" }
          ],
          q: { type: "fill", points: 20, boss: true, voice: "zh",
            q: "钟面被 12 个数字分成 12 大格,每大格是 30°。3 点整时,时针指向 3、分针指向 12,它们之间(较小的)夹角是多少度?(直接填数字)",
            placeholder: "例如: 60",
            accept: ["90", "90°", "90度", "九十"],
            demoSteps: [
              { text: "钟面一圈 360°,分成 12 大格,每格 360÷12 = 30°。", emoji: "🕐", scene: { type: "clues", items: [
                { head: "一圈", text: "360°" },
                { head: "每大格", text: "30°" },
                { head: "3 点整", text: "相隔几格?" }
              ] } },
              { text: "3 点整:分针在 12、时针在 3,中间隔 3 个大格,3×30° = ?", emoji: "🧮" }
            ],
            explain: "每大格 30°。3 点整时,时针在 3、分针在 12,相隔 3 个大格,夹角 = 3×30° = 90°(正好是直角)。",
            explainSteps: [
              { text: "钟面每大格 360÷12 = 30°。", emoji: "🕐" },
              { text: "3 点整,时针分针相隔 3 格:3×30° = 90°。", emoji: "🧮" },
              { text: "夹角 90°,正好是直角!钟表里处处是几何,数学无处不在。", emoji: "🏆" }
            ] }
        }
      ]
    },

    // ================== 英语 ==================
    {
      subject: "english", icon: "📚", title: "英语 · 看图写话", minutes: 45,
      units: [
        {
          name: "单词训练营 · 描述图画 12 个(点卡片听发音!)",
          blocks: [
            { type: "text", html: "🎧 今天的词帮你<span class='hl'>描述一幅图</span>!看图写话就靠它们。点卡片听发音,跟读 3 遍。" },
            { type: "flashcards", words: [
              { word: "there is", phonetic: "/ðeər ɪz/", cn: "有(单数)", sentence: "There is a tree." },
              { word: "there are", phonetic: "/ðeər ɑː/", cn: "有(复数)", sentence: "There are some birds." },
              { word: "in the picture", phonetic: "/ɪn ðə ˈpɪktʃə/", cn: "在图中", sentence: "In the picture, I see a park." },
              { word: "under", phonetic: "/ˈʌndə/", cn: "在…下面", sentence: "A cat is under the tree." },
              { word: "next to", phonetic: "/nekst tuː/", cn: "在…旁边", sentence: "A dog is next to the boy." },
              { word: "some", phonetic: "/sʌm/", cn: "一些", sentence: "There are some flowers." },
              { word: "playing", phonetic: "/ˈpleɪɪŋ/", cn: "正在玩", sentence: "Children are playing." },
              { word: "beautiful", phonetic: "/ˈbjuːtɪfl/", cn: "美丽的", sentence: "The garden is beautiful." },
              { word: "happy", phonetic: "/ˈhæpi/", cn: "快乐的", sentence: "Everyone is happy." },
              { word: "sunny", phonetic: "/ˈsʌni/", cn: "晴朗的", sentence: "It is a sunny day." },
              { word: "sky", phonetic: "/skaɪ/", cn: "天空", sentence: "Birds fly in the sky." },
              { word: "together", phonetic: "/təˈɡeðə/", cn: "一起", sentence: "They play together." }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 · 看图写话三步法",
          blocks: [
            { type: "lesson", title: "▶ 看清楚、说完整、连成篇", steps: [
              { text: "看图写话就是「看着图,用英语描述」。三步走:先看清、再说完整、最后连成一段。", emoji: "🖼️" },
              { text: "第一步看清:图里有什么(人、物)?在哪(地点)?在做什么(动作)?天气怎样?", emoji: "👀", scene: { type: "clues", items: [
                { head: "有什么", text: "人 + 物" },
                { head: "在哪", text: "地点" },
                { head: "做什么", text: "动作(进行时)" }
              ] } },
              { text: "第二步说完整:描述「有什么」用 There is/are;描述「正在做」用现在进行时(be+ing)。", emoji: "🔧" },
              { text: "第三步连成篇:用 and, also, in the picture, there is/are 把句子连起来,别东一句西一句。", emoji: "🔗", scene: { type: "clues", items: [
                { head: "有什么", text: "There is/are…" },
                { head: "正在做", text: "…is/are doing" },
                { head: "连接词", text: "and, also…" }
              ] } },
              { text: "口诀:看图先看人物景,There be 说存在;进行时说在做啥,连接词串成段!", emoji: "🎯" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "描述一幅图:公园里,几个孩子正在踢足球。下列英文最恰当、最完整的一句是:",
            options: [
              "The children football.",
              "In the park, some children are playing football.",
              "The park have children.",
              "Children plays football in park yesterday."
            ], answer: 1,
            demoSteps: [
              { text: "描述图中「正在踢球」用什么时态?「公园里」怎么说?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "正在踢", text: "are playing(进行时)" },
                { head: "在公园", text: "in the park" },
                { head: "有孩子", text: "some children" }
              ] } },
              { text: "看图写「正在发生」用进行时,句子要完整、地点要清楚。", emoji: "✅" }
            ],
            explain: "B 正确:In the park(地点)+ some children are playing football(进行时,完整)。A 缺动词;C 用 have 表存在错;D 用了过去时且缺冠词,不符合「正在踢」。",
            explainSteps: [
              { text: "A:缺少动词,句子不完整。", emoji: "❌" },
              { text: "C:表存在该用 There be,不用 have;D 时态错(看图是现在)。", emoji: "❌" },
              { text: "B:地点 + 进行时 + 完整句子,选 B!看图写话首选现在进行时。", emoji: "✅" }
            ] }
        },
        {
          name: "英文名著时光 · The Wolf and the Seven Little Goats",
          blocks: [
            { type: "rule", title: "📖 名著名片", html: "<b>格林兄弟 Grimm</b>《狼和七只小羊》——妈妈不在家,聪明的小羊怎样识破大灰狼的伪装?" },
            { type: "reading", speakable: true, title: "The Wolf and the Seven Little Goats", paragraphs: [
              "Mother Goat goes out to find food. 'Be careful of the wolf,' she says to her seven little goats. 'Do not open the door for anyone!' Then she leaves.",
              "Soon, the wolf comes. 'Open the door, my children. It's Mother,' he says. But his voice is rough. 'No!' say the goats. 'Our mother's voice is soft. You are the wolf!' The wolf eats chalk to make his voice soft. He also puts white flour on his paws so they look like Mother's.",
              "This time the goats are tricked. They open the door, and the wolf rushes in! He eats six of the little goats. Only the youngest hides in the clock and is safe.",
              "When Mother Goat comes home, the youngest tells her everything. They find the sleeping wolf, cut open his stomach, and save the six goats — all still alive! Then they fill the wolf with stones. Cleverness and a mother's love save the day."
            ], tip: "生词提示:goat 山羊 / rough 粗糙的 / chalk 粉笔 / flour 面粉 / stomach 肚子" }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "How does the wolf trick the little goats into opening the door?(狼怎样骗小羊开门?)",
            options: [
              "He shows them Mother's photo.",
              "He eats chalk to soften his voice and puts flour on his paws to look white.",
              "He breaks the door open.",
              "He gives them food."
            ], answer: 1,
            demoSteps: [
              { text: "小羊第一次怎么识破狼?狼后来做了哪两件事来伪装?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "第一次", text: "声音粗被识破" },
                { head: "伪装一", text: "吃粉笔软化声音" },
                { head: "伪装二", text: "面粉涂白爪子" }
              ] } },
              { text: "狼吃粉笔变声音、涂面粉变白爪,骗过了小羊。", emoji: "🐺" }
            ],
            explain: "B 正确。狼吃粉笔让声音变柔和,又在爪子上抹白面粉伪装成羊妈妈的样子,骗小羊开了门。",
            explainSteps: [
              { text: "小羊先靠「声音粗」和「爪子」识破狼。", emoji: "🐐" },
              { text: "狼吃粉笔软化声音、涂面粉变白爪,骗过小羊,选 B!", emoji: "✅" },
              { text: "故事提醒:坏人会伪装,要多留个心眼;而妈妈的爱和最小羊的机智,最终化险为夷。", emoji: "🎯" }
            ] }
        }
      ]
    },

    // ================== 语文 ==================
    {
      subject: "chinese", icon: "📝", title: "语文 · 写作:开头与结尾", minutes: 40,
      units: [
        {
          name: "动画课堂 · 凤头:漂亮的开头",
          blocks: [
            { type: "lesson", title: "▶ 好的开头,像凤凰的头", steps: [
              { text: "古人说好文章要「凤头、猪肚、豹尾」:开头像凤头一样漂亮,主体像猪肚一样充实,结尾像豹尾一样有力。今天讲开头结尾。", emoji: "🐦" },
              { text: "开头忌讳:绕圈子、废话多、「今天我要讲一件事」这种老套。好开头要「快、新、扣题」。", emoji: "🚀", scene: { type: "clues", items: [
                { head: "开门见山", text: "直接入题" },
                { head: "设置悬念", text: "引人好奇" },
                { head: "环境描写", text: "渲染气氛" }
              ] } },
              { text: "常见好开头:①开门见山,直接点题;②设置悬念,勾起好奇;③环境描写,营造氛围;④引用名言诗句,增添文采。", emoji: "✨" },
              { text: "示范:「那把旧伞,至今还立在门后的角落里。」——一句话,既有画面,又埋下悬念,让人想读下去。", emoji: "☂️" },
              { text: "口诀:开头要像凤凰头,又快又美又扣题;开门见山设悬念,一句话就抓住人!", emoji: "🎯" }
            ] }
          ],
          q: { type: "choice", points: 10, voice: "zh",
            q: "下列作文开头,最好的一项是:",
            options: [
              "今天,我要给大家讲一件我经历过的、发生在我身上的、让我难忘的事情。",
              "那年夏天的蝉鸣里,藏着一个我一直没敢说出口的秘密。",
              "这是一篇作文,题目是《难忘的一件事》。",
              "在开始之前,我想先介绍一下我自己和我的家庭情况。"
            ], answer: 1,
            demoSteps: [
              { text: "好开头要「快、新、扣题、有味」。逐句看哪个既简洁又能吸引人。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "啰嗦重复", text: "绕圈子 ✗" },
                { head: "有画面有悬念", text: "抓人 ✓" },
                { head: "废话铺垫", text: "拖沓 ✗" }
              ] } },
              { text: "哪一句一上来就有画面、有悬念,让人想往下读?", emoji: "☂️" }
            ],
            explain: "B 正确。「蝉鸣里藏着一个秘密」有画面、有悬念,又扣题,是漂亮的「凤头」。A 啰嗦重复;C、D 是废话铺垫,拖沓无味。",
            explainSteps: [
              { text: "A:一连串定语堆砌,啰嗦。C、D:开头讲废话,拖沓。", emoji: "❌" },
              { text: "B:蝉鸣、秘密,有画面有悬念,一下抓住读者,选 B!", emoji: "✅" },
              { text: "好开头「快、新、有味」,别把宝贵的开头浪费在废话上!", emoji: "🎯" }
            ] }
        },
        {
          name: "动画课堂 · 豹尾:有力的结尾",
          blocks: [
            { type: "lesson", title: "▶ 好的结尾,像豹子的尾巴", steps: [
              { text: "结尾要「豹尾」——短小、有力、余味悠长。结尾没写好,再好的文章也会「虎头蛇尾」。", emoji: "🐆" },
              { text: "常见好结尾:①点明中心,升华主题;②首尾呼应,结构完整;③抒发感情,引发思考;④留下余味,言有尽而意无穷。", emoji: "✨", scene: { type: "clues", items: [
                { head: "点明中心", text: "升华主题" },
                { head: "首尾呼应", text: "结构完整" },
                { head: "留下余味", text: "意犹未尽" }
              ] } },
              { text: "结尾忌讳:喊口号(「我们要好好学习」)、画蛇添足(重复前面内容)、突然收尾(没结完)。", emoji: "🚫" },
              { text: "示范首尾呼应:开头「那把旧伞立在门后」,结尾「如今我也学会了,为别人撑起一把伞」——回扣开头,主题升华。", emoji: "☂️" },
              { text: "口诀:结尾要像豹子尾,短促有力有余味;点题呼应抒真情,切忌喊口号画蛇足!", emoji: "🎯" }
            ] }
          ],
          q: { type: "fill", points: 10, voice: "zh",
            q: "古人用「凤头、猪肚、豹尾」比喻好文章的三部分。其中比喻结尾要短小、有力、有余味的是「__________」。(填两个字)",
            placeholder: "填两个字",
            accept: ["豹尾", "豹尾。", "豹尾。"],
            demoSteps: [
              { text: "凤头比喻开头,猪肚比喻中间(充实),那结尾用哪个动物比喻?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "凤头", text: "开头(漂亮)" },
                { head: "猪肚", text: "中间(充实)" },
                { head: "?尾", text: "结尾(有力)" }
              ] } },
              { text: "结尾要有力,像哪种动物的尾巴?——豹子。", emoji: "🐆" }
            ],
            explain: "答案:豹尾。「凤头猪肚豹尾」中,豹尾比喻结尾要像豹子的尾巴一样短小、有力、有余味。",
            explainSteps: [
              { text: "凤头=开头漂亮,猪肚=中间充实,豹尾=结尾有力。", emoji: "🐆" },
              { text: "结尾要短促有力、余味悠长,就像豹尾,答「豹尾」!", emoji: "✅" },
              { text: "记住这三个词,写作文时对照检查开头、主体、结尾。", emoji: "🎯" }
            ] }
        },
        {
          name: "今日彩蛋 · 名著打卡",
          blocks: [
            { type: "rule", title: "📖 睡前 20 分钟名著时间", html: "继续读<b>《朝花夕拾》</b>!今晚特别留意鲁迅文章的<b>开头和结尾</b>——他是怎么开篇、怎么收尾的?<br>大作家的开头结尾,就是最好的写作范本。学一学,你的作文也能「凤头豹尾」!" }
          ],
          q: null
        }
      ]
    },

    // ================== 历史 ==================
    {
      subject: "history", icon: "🏺", title: "历史 · 北魏孝文帝改革", minutes: 25,
      units: [
        {
          name: "动画课堂 · 一场促进民族交融的改革",
          blocks: [
            { type: "lesson", title: "▶ 孝文帝的汉化改革", steps: [
              { text: "魏晋南北朝时期,北方由鲜卑族建立的北魏统一。为了更好地治理,孝文帝推行了一场著名的汉化改革。", emoji: "👑" },
              { text: "第一件大事:迁都。孝文帝把都城从偏北的平城迁到中原的洛阳,更靠近汉族文化中心,便于改革。", emoji: "🏛️", scene: { type: "clues", items: [
                { head: "迁都", text: "平城 → 洛阳" },
                { head: "目的", text: "靠近中原·便于汉化" },
                { head: "民族", text: "鲜卑族" }
              ] } },
              { text: "一系列汉化措施:说汉语、穿汉服、改汉姓(拓跋改姓元)、与汉族通婚、用汉制。全面向汉族文化学习。", emoji: "🈶", scene: { type: "clues", items: [
                { head: "语言", text: "说汉语" },
                { head: "服饰", text: "穿汉服" },
                { head: "姓氏", text: "改汉姓" }
              ] } },
              { text: "改革的意义:促进了民族交融,增强了北魏的实力,也推动了鲜卑等民族与汉族的融合。", emoji: "🤝" },
              { text: "记忆法:孝文帝改革「一迁都、四汉化」(语言、服饰、姓氏、通婚),核心作用是「促进民族交融」!", emoji: "🎯" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "北魏孝文帝改革的措施和作用,下列说法正确的一项是:",
            options: [
              "把都城从洛阳迁到平城",
              "推行说鲜卑语、穿鲜卑服,强迫汉族向鲜卑学习",
              "推行说汉语、穿汉服、改汉姓等措施,促进了民族交融",
              "改革使北魏走向分裂和衰落"
            ], answer: 2,
            demoSteps: [
              { text: "回忆:孝文帝往哪迁都?让谁学谁?改革的作用是什么?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "迁都", text: "平城→洛阳" },
                { head: "方向", text: "鲜卑学汉族" },
                { head: "作用", text: "促进民族交融" }
              ] } },
              { text: "把迁都方向、学习方向、作用都搞反的选项排除。", emoji: "🔍" }
            ],
            explain: "C 正确。A 迁都方向反了(平城→洛阳);B 是让鲜卑学汉族,不是相反;D 说反了作用(改革促进了交融和发展)。",
            explainSteps: [
              { text: "A:迁都是从平城到洛阳,不是相反,错。", emoji: "❌" },
              { text: "B:是鲜卑向汉族学习(说汉语穿汉服),不是逼汉族学鲜卑,错。", emoji: "❌" },
              { text: "D:改革促进了民族交融和发展,不是分裂衰落,错。", emoji: "❌" },
              { text: "C:说汉语、穿汉服、改汉姓,促进民族交融,正确!选 C。", emoji: "✅" }
            ] }
        }
      ]
    }
  ]
};
