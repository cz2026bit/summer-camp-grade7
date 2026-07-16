// ============ 第 31 关 ============
window.DAYS = window.DAYS || {};

window.DAYS[31] = {
  day: 31,
  title: "第 31 关 · 走进几何世界",
  estimate: "四科约 2~3 小时 · 共 7 道思考题(含 1 道 BOSS 题)",
  sections: [
    // ================== 数学 ==================
    {
      subject: "math", icon: "🔢", title: "数学 · 几何图形初步", minutes: 50,
      units: [
        {
          name: "动画课堂 1 · 点线面体:几何的积木",
          blocks: [
            { type: "lesson", title: "▶ 从立体到平面", steps: [
              { text: "从这一关起,我们进入「几何」的世界。先认识最基本的元素:点、线、面、体。", emoji: "📐" },
              { text: "关系很奇妙:点动成线,线动成面,面动成体!笔尖(点)划过成线,直线平移成面,长方形上升成长方体。", emoji: "✨", scene: { type: "clues", items: [
                { head: "点动成线", text: "点→线" },
                { head: "线动成面", text: "线→面" },
                { head: "面动成体", text: "面→体" }
              ] } },
              { text: "几何体分两类:柱体、锥体、球等。长方体、正方体、圆柱是柱体;圆锥、棱锥是锥体。", emoji: "🧊" },
              { text: "面有平的、有曲的:长方体的面都是平面;圆柱的侧面是曲面。「面与面相交成线,线与线相交成点」。", emoji: "🔷", scene: { type: "clues", items: [
                { head: "面面相交", text: "成线" },
                { head: "线线相交", text: "成点" },
                { head: "平面/曲面", text: "都存在" }
              ] } },
              { text: "记住这条链:点→线→面→体,越来越「高级」;相交时反过来:体的面相交成线,线相交成点。", emoji: "🎯" }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 2 · 直线、射线、线段:三兄弟",
          blocks: [
            { type: "lesson", title: "▶ 有没有端点,能不能延长", steps: [
              { text: "几何里有三条「线」,长得像却大不同:直线、射线、线段。区别就看「端点」和「能否延伸」。", emoji: "📏" },
              { text: "直线:没有端点,两端都能无限延伸,不能度量长度。射线:有一个端点,一端无限延伸。", emoji: "➡️", scene: { type: "clues", items: [
                { head: "直线", text: "无端点·两端无限" },
                { head: "射线", text: "一个端点·一端无限" },
                { head: "线段", text: "两个端点·有长度" }
              ] } },
              { text: "线段:有两个端点,长度固定,可以度量。手电筒的光是射线,一根木棍是线段。", emoji: "🔦" },
              { text: "两条重要性质:①两点确定一条直线(为什么钉木条要钉两颗钉子);②两点之间,线段最短(为什么抄近道)。", emoji: "💡", scene: { type: "clues", items: [
                { head: "两点定直线", text: "钉两颗钉" },
                { head: "线段最短", text: "两点间" },
                { head: "生活", text: "抄近道走直线" }
              ] } },
              { text: "口诀:直线无端两头长,射线一端射出光,线段两端量长短;两点定线,线段最短!", emoji: "🎯" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "关于直线、射线、线段,下列说法正确的一项是:",
            options: [
              "线段有两个端点,可以度量长度",
              "射线没有端点",
              "直线只能向一个方向无限延伸",
              "线段可以向两端无限延长而长度不变"
            ], answer: 0,
            demoSteps: [
              { text: "从「端点个数」和「能否延伸」两方面对照三种线。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "直线", text: "0 端点·两端无限" },
                { head: "射线", text: "1 端点·一端无限" },
                { head: "线段", text: "2 端点·有长度" }
              ] } },
              { text: "只有一句完全符合,逐个排查。", emoji: "🔍" }
            ],
            explain: "A 正确。线段有两个端点,长度固定可度量。B 错(射线有一个端点);C 错(直线向两个方向都能延伸);D 错(线段不能无限延长)。",
            explainSteps: [
              { text: "B:射线有 1 个端点,不是没有,错。", emoji: "❌" },
              { text: "C:直线两端都能无限延伸,不是一个方向,错。", emoji: "❌" },
              { text: "D:线段两端固定,不能无限延长,错。", emoji: "❌" },
              { text: "A:线段有两端点、可度量,正确!选 A。", emoji: "✅" }
            ] }
        },
        {
          name: "🔥 BOSS 挑战 · 数线段",
          blocks: [
            { type: "text", html: "💪 <b>BOSS 战规则</b>:一条直线上有几个点,能数出几条线段?找规律,别数乱!草稿纸准备!" }
          ],
          q: { type: "fill", points: 20, boss: true, voice: "zh",
            q: "一条线段上,除两个端点外,中间再取 2 个点,一共 4 个点。这 4 个点之间一共可以数出多少条线段?(提示:每两点确定一条,直接填数字)",
            placeholder: "例如: 3",
            accept: ["6", "6条", "六", "六条"],
            demoSteps: [
              { text: "数线段有规律:n 个点,线段条数 = n×(n−1)÷2(每两点连一条)。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "点数", text: "4 个" },
                { head: "公式", text: "n(n−1)/2" },
                { head: "代入", text: "4×3÷2" }
              ] } },
              { text: "也可以老实数:以每个点为左端往右数,3+2+1 = 6。", emoji: "🧮" }
            ],
            explain: "4 个点,每两点确定一条线段:4×3÷2 = 6 条。或按顺序数:从第一个点起 3 条,第二个点 2 条,第三个点 1 条,共 3+2+1 = 6 条。",
            explainSteps: [
              { text: "公式法:n(n−1)/2 = 4×3÷2 = 6。", emoji: "🧮" },
              { text: "数数法:3+2+1 = 6,两法结果一致!", emoji: "✅" },
              { text: "6 条!数线段、数角都能用这个规律,几何找规律,妙不可言!", emoji: "🏆" }
            ] }
        }
      ]
    },

    // ================== 英语 ==================
    {
      subject: "english", icon: "📚", title: "英语 · 四大时态大比拼", minutes: 45,
      units: [
        {
          name: "单词训练营 · 时态信号词 12 个(点卡片听发音!)",
          blocks: [
            { type: "text", html: "🎧 今天的词都是<span class='hl'>判断时态</span>的信号灯!认准它们,选时态不再慌。点卡片听发音,跟读 3 遍。" },
            { type: "flashcards", words: [
              { word: "usually", phonetic: "/ˈjuːʒuəli/", cn: "通常(一般现在)", sentence: "I usually read at night." },
              { word: "now", phonetic: "/naʊ/", cn: "现在(进行时)", sentence: "She is reading now." },
              { word: "yesterday", phonetic: "/ˈjestədeɪ/", cn: "昨天(过去时)", sentence: "I read a book yesterday." },
              { word: "tomorrow", phonetic: "/təˈmɒrəʊ/", cn: "明天(将来时)", sentence: "I will read tomorrow." },
              { word: "every day", phonetic: "/ˈevri deɪ/", cn: "每天", sentence: "He runs every day." },
              { word: "look", phonetic: "/lʊk/", cn: "看(进行)", sentence: "Look! He is running." },
              { word: "last week", phonetic: "/lɑːst wiːk/", cn: "上周", sentence: "We met last week." },
              { word: "next week", phonetic: "/nekst wiːk/", cn: "下周", sentence: "We will meet next week." },
              { word: "ago", phonetic: "/əˈɡəʊ/", cn: "以前", sentence: "I saw him two days ago." },
              { word: "soon", phonetic: "/suːn/", cn: "很快", sentence: "It will start soon." },
              { word: "always", phonetic: "/ˈɔːlweɪz/", cn: "总是", sentence: "She always helps." },
              { word: "at the moment", phonetic: "/ət ðə ˈməʊmənt/", cn: "此刻", sentence: "I am busy at the moment." }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 · 四大时态一张表",
          blocks: [
            { type: "lesson", title: "▶ 一般现在·现在进行·一般过去·一般将来", steps: [
              { text: "到现在,我们已经学了四大时态!今天把它们放在一张表里比一比,看信号词选时态。", emoji: "📊" },
              { text: "一般现在时:讲习惯,动词原形/加 s。信号词 usually/every day/always。", emoji: "🔁", scene: { type: "match", groups: [
                { head: "一般现在", items: ["every day", "usually"] },
                { head: "现在进行", items: ["now", "Look!"] }
              ] } },
              { text: "现在进行时:讲此刻正在,be + ing。信号词 now/Look!/at the moment。", emoji: "⏱️" },
              { text: "一般过去时:讲过去,was/were 或动词过去式。信号词 yesterday/last.../ago。", emoji: "⏮️", scene: { type: "match", groups: [
                { head: "一般过去", items: ["yesterday", "ago"] },
                { head: "一般将来", items: ["tomorrow", "next week"] }
              ] } },
              { text: "一般将来时:讲将来,will + 原形 或 be going to。信号词 tomorrow/next.../soon。", emoji: "🔮" },
              { text: "口诀:每天经常一般时,此刻正在进行时;昨天以前用过去,明天以后用将来。看信号,选时态!", emoji: "🎯" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "根据信号词选出时态搭配正确的一句:",
            options: [
              "Look! The boy is playing football now.",
              "Yesterday I will go to the park.",
              "She is reading every day.",
              "Tomorrow I played basketball."
            ], answer: 0,
            demoSteps: [
              { text: "看每句的信号词,再看它配的时态对不对。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "Look!/now", text: "→ 进行时" },
                { head: "yesterday", text: "→ 过去时" },
                { head: "tomorrow", text: "→ 将来时" }
              ] } },
              { text: "找信号词和时态完全匹配的那一句。", emoji: "✅" }
            ],
            explain: "A 正确:Look!/now 配现在进行时 is playing。B 的 yesterday 该用过去时;C 的 every day 该用一般现在时(reads);D 的 tomorrow 该用将来时。",
            explainSteps: [
              { text: "B:yesterday 是过去,不能用 will,错。", emoji: "❌" },
              { text: "C:every day 是习惯,该用一般现在时 reads,不用进行时,错。", emoji: "❌" },
              { text: "D:tomorrow 是将来,不能用过去式 played,错。", emoji: "❌" },
              { text: "A:Look!/now 配 is playing,信号和时态完美匹配!选 A。", emoji: "✅" }
            ] }
        },
        {
          name: "英文名著时光 · The Selfish Giant",
          blocks: [
            { type: "rule", title: "📖 名著名片", html: "<b>王尔德 Oscar Wilde</b>《自私的巨人》——当巨人学会分享,春天就回到了他的花园。" },
            { type: "reading", speakable: true, title: "The Selfish Giant", paragraphs: [
              "A giant has a beautiful garden. Children love to play there. But the giant is selfish. 'This is my garden!' he shouts, and he builds a high wall to keep the children out.",
              "Then something strange happens. In the giant's garden, it is always winter — cold, with snow and ice. But everywhere else, spring comes with flowers and birds. The giant does not understand why.",
              "One day, the giant sees children playing in his garden through a small hole in the wall. Where the children play, spring returns! Then he understands: his selfishness kept the spring away.",
              "The giant knocks down the wall. 'The garden is yours now, children,' he says. From that day, the children play there every day, and the garden is full of flowers and joy. Sharing brought back the spring."
            ], tip: "生词提示:giant 巨人 / garden 花园 / selfish 自私的 / wall 墙 / spring 春天" }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "Why does spring come back to the giant's garden?(春天为什么回到了巨人的花园?)",
            options: [
              "Because the giant builds a higher wall.",
              "Because the giant stops being selfish and lets the children play.",
              "Because winter finally ends by itself.",
              "Because the giant plants new flowers."
            ], answer: 1,
            demoSteps: [
              { text: "巨人自私时花园是什么季节?他做了什么改变后春天才回来?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "自私时", text: "永远是冬天" },
                { head: "改变", text: "推倒墙·让孩子玩" },
                { head: "结果", text: "春天回来" }
              ] } },
              { text: "巨人推倒墙、不再自私,春天就回来了。", emoji: "🌸" }
            ],
            explain: "B 正确。巨人自私地把孩子关在外面时,花园里永远是冬天。当他推倒围墙、不再自私,让孩子们进来玩,春天就回来了。",
            explainSteps: [
              { text: "巨人自私筑墙,花园一直是寒冬。", emoji: "❄️" },
              { text: "他推倒墙、乐于分享,春天和欢乐都回来了,选 B!", emoji: "✅" },
              { text: "寓意:自私让人内心寒冷,分享才能带来温暖和快乐。", emoji: "🎯" }
            ] }
        }
      ]
    },

    // ================== 语文 ==================
    {
      subject: "chinese", icon: "📝", title: "语文 · 综合性学习:传统文化", minutes: 40,
      units: [
        {
          name: "动画课堂 · 传统节日里的文化",
          blocks: [
            { type: "lesson", title: "▶ 每个节日都是一个故事", steps: [
              { text: "综合性学习常考「传统文化」。我们的传统节日,每一个都藏着习俗、故事和情感。今天梳理一遍。", emoji: "🏮" },
              { text: "春节(农历正月初一):贴春联、放鞭炮、吃饺子、拜年,辞旧迎新,是最重要的节日。", emoji: "🧧", scene: { type: "clues", items: [
                { head: "春节", text: "贴春联·守岁" },
                { head: "元宵", text: "赏灯·吃汤圆" },
                { head: "清明", text: "扫墓·踏青" }
              ] } },
              { text: "端午(五月初五):赛龙舟、吃粽子,纪念爱国诗人屈原。中秋(八月十五):赏月、吃月饼,象征团圆。", emoji: "🥮", scene: { type: "clues", items: [
                { head: "端午", text: "粽子·龙舟·屈原" },
                { head: "中秋", text: "月饼·团圆" },
                { head: "重阳", text: "登高·敬老" }
              ] } },
              { text: "重阳(九月初九):登高、赏菊、敬老。(还记得岑参的《行军九日思长安故园》吗?就写在重阳节!)", emoji: "🌼" },
              { text: "传统文化还包括诗词、书法、京剧、剪纸、二十四节气等。了解、热爱、传承传统文化,是我们的责任!", emoji: "🎯" }
            ] }
          ],
          q: { type: "choice", points: 10, voice: "zh",
            q: "下列传统节日与习俗、寓意搭配错误的一项是:",
            options: [
              "春节——贴春联、吃饺子——辞旧迎新",
              "端午——吃粽子、赛龙舟——纪念屈原",
              "中秋——赏月、吃月饼——象征团圆",
              "清明——赏灯、吃汤圆——象征喜庆热闹"
            ], answer: 3,
            demoSteps: [
              { text: "赏灯、吃汤圆是哪个节日的习俗?清明的习俗又是什么?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "赏灯汤圆", text: "元宵节" },
                { head: "清明", text: "扫墓·踏青" },
                { head: "别搞混", text: "节日与习俗" }
              ] } },
              { text: "找出节日和习俗对不上的那一项。", emoji: "🎭" }
            ],
            explain: "D 错。赏灯、吃汤圆是元宵节的习俗;清明节的习俗是扫墓、踏青,寓意缅怀先人。其余三项都正确。",
            explainSteps: [
              { text: "赏灯、吃汤圆是元宵节的习俗,不是清明。", emoji: "🏮" },
              { text: "清明节扫墓踏青、缅怀先人,D 张冠李戴,错!", emoji: "❌" },
              { text: "A、B、C 都对。选 D。传统节日的习俗和寓意,要记准!", emoji: "✅" }
            ] }
        },
        {
          name: "动画课堂 · 对联:传统文化的语言艺术",
          blocks: [
            { type: "lesson", title: "▶ 上联下联,讲究对仗", steps: [
              { text: "对联(春联)是中国独有的语言艺术,综合性学习常考。写好、贴对对联,都有讲究。", emoji: "🧧" },
              { text: "对联的基本要求:字数相等、词性相对(名词对名词)、结构相应、内容相关。上下联要「对仗工整」。", emoji: "⚖️", scene: { type: "clues", items: [
                { head: "字数", text: "相等" },
                { head: "词性", text: "相对" },
                { head: "内容", text: "相关" }
              ] } },
              { text: "怎么分上下联?看最后一个字的声调:上联末字是「仄声」(三声、四声),下联末字是「平声」(一声、二声)。", emoji: "🎵", scene: { type: "clues", items: [
                { head: "上联末字", text: "仄声(三四声)" },
                { head: "下联末字", text: "平声(一二声)" },
                { head: "口诀", text: "仄起平收" }
              ] } },
              { text: "贴对联:面对大门,上联贴右边,下联贴左边,横批从右往左读(这是传统格式)。", emoji: "🚪" },
              { text: "口诀:对联对仗要工整,字数词性都相应;仄起平收分上下,右上左下贴门庭!", emoji: "🎯" }
            ] }
          ],
          q: { type: "fill", points: 10, voice: "zh",
            q: "对联要求上下联「对仗工整」,即字数相等、词性相对。判断上下联时,末字是仄声(三、四声)的是「__________联」。(填「上」或「下」)",
            placeholder: "填一个字",
            accept: ["上", "上。", "上联"],
            demoSteps: [
              { text: "口诀「仄起平收」:仄声(三四声)结尾的是上联还是下联?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "仄起", text: "上联末字仄声" },
                { head: "平收", text: "下联末字平声" },
                { head: "填空", text: "仄声结尾是?联" }
              ] } },
              { text: "「仄起」——仄声开头(结尾)的是上联。", emoji: "🎵" }
            ],
            explain: "答案:上。对联「仄起平收」,末字是仄声(三、四声)的是上联,末字是平声(一、二声)的是下联。",
            explainSteps: [
              { text: "口诀「仄起平收」:仄声(三四声)结尾 = 上联。", emoji: "🎵" },
              { text: "平声(一二声)结尾 = 下联。", emoji: "✅" },
              { text: "答「上」。贴对联时上联贴右、下联贴左,别贴反!", emoji: "🎯" }
            ] }
        },
        {
          name: "今日彩蛋 · 名著打卡",
          blocks: [
            { type: "rule", title: "📖 睡前 20 分钟名著时间", html: "继续读<b>《朝花夕拾》</b>!里面写了不少旧时的年节、习俗。今晚找一处和「传统文化」有关的内容,想一想:<b>鲁迅小时候过节,和你现在过节有什么相同、有什么不同?</b><br>传统文化,就在这些生活细节里代代相传。" }
          ],
          q: null
        }
      ]
    },

    // ================== 生物 ==================
    {
      subject: "biology", icon: "🌱", title: "生物 · 生物圈中的绿色植物", minutes: 25,
      units: [
        {
          name: "动画课堂 · 绿色植物:地球的生产者",
          blocks: [
            { type: "lesson", title: "▶ 光合作用的伟大意义", steps: [
              { text: "绿色植物是地球上最重要的生物之一。它们通过「光合作用」,养活了几乎所有的生命。", emoji: "🌳" },
              { text: "光合作用:绿色植物利用光能,在叶绿体里把二氧化碳和水,转化成有机物(储存能量)并释放氧气。", emoji: "☀️", scene: { type: "clues", items: [
                { head: "原料", text: "二氧化碳 + 水" },
                { head: "条件", text: "光 + 叶绿体" },
                { head: "产物", text: "有机物 + 氧气" }
              ] } },
              { text: "两大意义:①制造有机物,是几乎所有生物的食物和能量来源(生产者);②释放氧气,维持大气中氧和二氧化碳的平衡。", emoji: "🫁", scene: { type: "clues", items: [
                { head: "意义一", text: "制造有机物·养活万物" },
                { head: "意义二", text: "释放氧气·净化空气" },
                { head: "地位", text: "生产者" }
              ] } },
              { text: "所以说,绿色植物是生物圈中的「生产者」——它们把无机物变成有机物,是食物链的起点。", emoji: "🔗" },
              { text: "保护绿色植物、爱护森林,就是保护我们自己的食物和空气。记住:绿色植物,地球的生命之基!", emoji: "🎯" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "关于绿色植物的光合作用,下列说法正确的一项是:",
            options: [
              "光合作用消耗氧气,释放二氧化碳",
              "光合作用利用光能,把二氧化碳和水合成有机物,并释放氧气",
              "光合作用在夜里进行",
              "光合作用不需要叶绿体"
            ], answer: 1,
            demoSteps: [
              { text: "回忆光合作用的原料、条件、产物,以及它和呼吸的区别。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "原料", text: "CO₂ + 水" },
                { head: "产物", text: "有机物 + O₂" },
                { head: "条件", text: "光 + 叶绿体" }
              ] } },
              { text: "把「放二氧化碳」「夜里进行」「不需叶绿体」的错误排除。", emoji: "🔍" }
            ],
            explain: "B 正确。A 说反了(光合作用吸收二氧化碳、释放氧气);C 错(需要光,主要在白天);D 错(必须在叶绿体中进行)。",
            explainSteps: [
              { text: "A:光合作用吸收 CO₂、释放 O₂,A 正好说反,错。", emoji: "❌" },
              { text: "C:光合作用需要光,主要在白天进行,错。", emoji: "❌" },
              { text: "D:光合作用必须有叶绿体,错。", emoji: "❌" },
              { text: "B:光能 + CO₂ + 水 → 有机物 + O₂,正确!选 B。", emoji: "✅" }
            ] }
        }
      ]
    }
  ]
};
