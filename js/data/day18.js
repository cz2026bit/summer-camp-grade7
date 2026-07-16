// ============ 第 18 关 ============
window.DAYS = window.DAYS || {};

window.DAYS[18] = {
  day: 18,
  title: "第 18 关 · 同类项归队",
  estimate: "四科约 2~3 小时 · 共 7 道思考题(含 1 道 BOSS 题)",
  sections: [
    // ================== 数学 ==================
    {
      subject: "math", icon: "🔢", title: "数学 · 合并同类项", minutes: 50,
      units: [
        {
          name: "动画课堂 1 · 什么是同类项",
          blocks: [
            { type: "lesson", title: "▶ 字母相同,指数也相同", steps: [
              { text: "整式化简的第一大招:合并同类项。先弄清什么是「同类项」。", emoji: "👯" },
              { text: "同类项的两个条件:所含字母相同,并且相同字母的指数也相同。两个条件都满足才是同类项。", emoji: "✅", scene: { type: "clues", items: [
                { head: "条件一", text: "字母相同" },
                { head: "条件二", text: "指数相同" },
                { head: "缺一", text: "不是同类项" }
              ] } },
              { text: "例:3x² 和 −5x² 是同类项(都是 x²);但 3x² 和 3x³ 不是(指数不同),3x 和 3y 也不是(字母不同)。", emoji: "🔍", scene: { type: "match", groups: [
                { head: "是同类项", items: ["3x² 与 −5x²", "2ab 与 7ab"] },
                { head: "不是同类项", items: ["3x² 与 3x³", "3x 与 3y"] }
              ] } },
              { text: "重要:同类项和系数无关!3x² 和 −100x² 系数差很多,照样是同类项。只看字母和指数。", emoji: "💡" },
              { text: "还有:所有的常数项(如 5、−3)都是同类项,可以合并。判断同类项,盯字母、盯指数,别看系数!", emoji: "🎯" }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 2 · 合并:系数相加,字母不变",
          blocks: [
            { type: "lesson", title: "▶ 同类项手拉手,合成一项", steps: [
              { text: "找到同类项后,就可以「合并」——把它们的系数相加,字母和指数保持不变。", emoji: "🤝" },
              { text: "口诀:系数相加减,字母指数不变。例:3x + 5x = (3+5)x = 8x。就像 3 个苹果 + 5 个苹果 = 8 个苹果!", emoji: "🍎", scene: { type: "clues", items: [
                { head: "3x + 5x", text: "系数相加" },
                { head: "= (3+5)x", text: "字母不变" },
                { head: "= 8x", text: "合成一项" }
              ] } },
              { text: "带负号要小心:7a − 10a = (7−10)a = −3a。系数运算就是有理数加减,别丢符号!", emoji: "⚠️" },
              { text: "化简步骤:先找出所有同类项(可以画不同记号分组),再分别合并,不同类的照抄。", emoji: "🧹", scene: { type: "clues", items: [
                { head: "第一步", text: "分组(找同类项)" },
                { head: "第二步", text: "各组合并" },
                { head: "第三步", text: "不同类照抄" }
              ] } },
              { text: "口诀:同类项,系数并;字母指数原样跟;不同类,不能合。合并同类项,化简第一功!", emoji: "🎯" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "化简 5x² − 3x + 2x² + 4x − 1 的结果是:",
            options: ["7x² + x − 1", "7x² + 7x − 1", "8x⁴ + x − 1", "7x² − x − 1"], answer: 0,
            demoSteps: [
              { text: "先分组:x² 一组(5x²、2x²),x 一组(−3x、4x),常数一组(−1)。", emoji: "🧹", scene: { type: "clues", items: [
                { head: "x² 组", text: "5x² + 2x²" },
                { head: "x 组", text: "−3x + 4x" },
                { head: "常数", text: "−1" }
              ] } },
              { text: "各组合并:系数相加,字母指数不变。", emoji: "🤝" }
            ],
            explain: "5x²+2x²=7x²;−3x+4x=x;常数 −1。合起来 7x² + x − 1。选 A。",
            explainSteps: [
              { text: "x² 组:5+2=7,得 7x²(指数不变,不是 x⁴!)。", emoji: "⚠️" },
              { text: "x 组:−3+4=1,得 x;常数项 −1。", emoji: "🤝" },
              { text: "合并 = 7x² + x − 1,选 A!", emoji: "✅" },
              { text: "C 错在把指数也加了(x²·x²≠x⁴);合并时字母指数绝不改变!", emoji: "🎯" }
            ] }
        },
        {
          name: "🔥 BOSS 挑战 · 化简求值二合一",
          blocks: [
            { type: "text", html: "💪 <b>BOSS 战规则</b>:先合并同类项,再代入求值!这是中考最爱的题型,一步都不能错。草稿纸准备!" }
          ],
          q: { type: "fill", points: 20, boss: true, voice: "zh",
            q: "先化简,再求值:2a + 3a − 4a + 5,其中 a = −3。请算出最后的值。(直接填数字,含正负号)",
            placeholder: "例如: 5",
            accept: ["2", "+2", "二"],
            demoSteps: [
              { text: "第一步化简:把含 a 的同类项合并。2a + 3a − 4a = ?", emoji: "🧹", scene: { type: "clues", items: [
                { head: "同类项", text: "2a+3a−4a" },
                { head: "系数", text: "2+3−4=1" },
                { head: "化简", text: "a + 5" }
              ] } },
              { text: "化简成 a + 5,再代入 a = −3(加括号!)。", emoji: "⚠️" }
            ],
            explain: "化简:2a+3a−4a = a,原式 = a + 5。代入 a = −3:(−3) + 5 = 2。",
            explainSteps: [
              { text: "合并同类项:2+3−4=1,得 a,原式 = a + 5。", emoji: "🧹" },
              { text: "代入 a = −3:(−3) + 5 = 2!", emoji: "🧮" },
              { text: "先化简再求值,又快又不易错——这正是「磨刀不误砍柴工」。BOSS 拿下!", emoji: "🏆" }
            ] }
        }
      ]
    },

    // ================== 英语 ==================
    {
      subject: "english", icon: "📚", title: "英语 · 情态动词 can / must", minutes: 45,
      units: [
        {
          name: "单词训练营 · 能力与规则 12 个(点卡片听发音!)",
          blocks: [
            { type: "text", html: "🎧 今天的词都在讲<span class='hl'>能不能、该不该</span>!点卡片听发音,跟读 3 遍。" },
            { type: "flashcards", words: [
              { word: "can", phonetic: "/kæn/", cn: "能;会", sentence: "I can swim." },
              { word: "must", phonetic: "/mʌst/", cn: "必须", sentence: "You must be careful." },
              { word: "may", phonetic: "/meɪ/", cn: "可以;可能", sentence: "May I come in?" },
              { word: "should", phonetic: "/ʃʊd/", cn: "应该", sentence: "You should sleep early." },
              { word: "ride", phonetic: "/raɪd/", cn: "骑", sentence: "I can ride a bike." },
              { word: "climb", phonetic: "/klaɪm/", cn: "爬", sentence: "Monkeys can climb trees." },
              { word: "speak", phonetic: "/spiːk/", cn: "说(语言)", sentence: "She can speak English." },
              { word: "rule", phonetic: "/ruːl/", cn: "规则", sentence: "We must follow the rules." },
              { word: "quiet", phonetic: "/ˈkwaɪət/", cn: "安静的", sentence: "You must be quiet here." },
              { word: "careful", phonetic: "/ˈkeəfl/", cn: "小心的", sentence: "Be careful on the road." },
              { word: "wait", phonetic: "/weɪt/", cn: "等待", sentence: "You must wait here." },
              { word: "help", phonetic: "/help/", cn: "帮助", sentence: "Can you help me?" }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 · 情态动词:后面永远跟原形",
          blocks: [
            { type: "lesson", title: "▶ can 表能力,must 表必须", steps: [
              { text: "情态动词表示「能力、许可、义务」等语气。最常用的是 can(能/会)和 must(必须)。", emoji: "💪" },
              { text: "铁律:情态动词后面永远跟动词原形!can swim(不是 can swims/swimming),must go(不是 must goes)。", emoji: "🔩", scene: { type: "clues", items: [
                { head: "can", text: "+ 动词原形" },
                { head: "must", text: "+ 动词原形" },
                { head: "不能", text: "加 s / ing / to" }
              ] } },
              { text: "can 表能力「会做」:I can swim. 也表请求:Can you help me? must 表义务「必须」:You must be quiet.", emoji: "⚖️", scene: { type: "match", groups: [
                { head: "can 能力/请求", items: ["I can sing", "Can you help?"] },
                { head: "must 必须", items: ["You must wait", "We must follow rules"] }
              ] } },
              { text: "否定:can't(不能)、mustn't(禁止,语气强)。情态动词否定直接加 not,不用 don't!", emoji: "🚫" },
              { text: "疑问:把情态动词提到句首。Can you swim? — Yes, I can. / No, I can't. 一套走天下!", emoji: "❓" }
            ] },
            { type: "chant", lines: ["情态动词有本领,", "后面动词用原形;", "can 表能力 must 必须,", "否定加 not 别用 do!"] }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "选出完全正确的一句:",
            options: [
              "She can sings and must to dance.",
              "She can sing and must dance.",
              "She cans sing and musts dance.",
              "She can singing and must dancing."
            ], answer: 1,
            demoSteps: [
              { text: "情态动词后面跟什么形式?能不能加 s / to / ing?", emoji: "🔩", scene: { type: "clues", items: [
                { head: "can / must", text: "本身不变" },
                { head: "后接", text: "动词原形" },
                { head: "禁止", text: "sings / to / ing" }
              ] } },
              { text: "情态动词本身不加 s,后面动词用原形,不加 to 不加 ing。", emoji: "✅" }
            ],
            explain: "B 正确:can sing、must dance,情态动词后跟原形。A 的 sings、must to 错;C 的 cans、musts 错;D 的 singing、dancing 错。",
            explainSteps: [
              { text: "A:can sings(多 s)、must to(多 to),错。", emoji: "❌" },
              { text: "C:cans、musts 情态动词本身不加 s,错。", emoji: "❌" },
              { text: "D:后面用了 ing 形式,错。", emoji: "❌" },
              { text: "B:can sing、must dance,后跟原形,全对!选 B。", emoji: "✅" }
            ] }
        },
        {
          name: "英文名著时光 · Cinderella",
          blocks: [
            { type: "rule", title: "📖 名著名片", html: "<b>格林/佩罗经典童话</b>《灰姑娘》——一只水晶鞋,一场午夜魔法,善良终会被看见。" },
            { type: "reading", speakable: true, title: "Cinderella", paragraphs: [
              "Cinderella is a kind girl. Her stepmother and stepsisters are unkind to her. They make her do all the work. When there is a ball at the palace, they go, but Cinderella must stay home.",
              "Then a fairy comes. 'You can go to the ball,' she says. With magic, she gives Cinderella a beautiful dress and glass shoes. 'But you must come home before midnight,' says the fairy.",
              "At the ball, the prince likes Cinderella very much. But at midnight, she must run home. As she runs, she loses one glass shoe on the stairs.",
              "The prince looks for the girl who fits the glass shoe. He tries it on many girls. At last he comes to Cinderella's house. The shoe fits her perfectly! And so the kind girl and the prince live happily ever after."
            ], tip: "生词提示:stepmother 继母 / ball 舞会 / fairy 仙女 / midnight 午夜 / fit 合适" }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "How does the prince find Cinderella?(王子是怎么找到灰姑娘的?)",
            options: [
              "She tells him her name.",
              "The glass shoe fits her foot perfectly.",
              "The fairy shows him the way.",
              "Her stepsisters help him."
            ], answer: 1,
            demoSteps: [
              { text: "灰姑娘跑走时留下了什么?王子用它做什么?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "午夜", text: "loses a glass shoe" },
                { head: "王子", text: "试鞋找人" },
                { head: "结果", text: "shoe fits her" }
              ] } },
              { text: "原文说王子挨家试鞋,鞋刚好合灰姑娘的脚。", emoji: "👠" }
            ],
            explain: "B 正确。灰姑娘午夜逃跑时丢了一只水晶鞋,王子拿着鞋一家家试,最后发现鞋子正好合灰姑娘的脚。",
            explainSteps: [
              { text: "灰姑娘赶在午夜前跑回家,楼梯上掉了一只水晶鞋。", emoji: "👠" },
              { text: "王子拿鞋寻人,鞋子唯独合灰姑娘的脚,选 B!", emoji: "✅" },
              { text: "善良的灰姑娘终于被看见。善良和真诚,总会有回报。", emoji: "🎯" }
            ] }
        }
      ]
    },

    // ================== 语文 ==================
    {
      subject: "chinese", icon: "📝", title: "语文 · 写作:审题与立意", minutes: 40,
      units: [
        {
          name: "动画课堂 · 审题:写作文的第一步",
          blocks: [
            { type: "lesson", title: "▶ 看清题目,别跑题", steps: [
              { text: "作文最惨的失分是「跑题」——写得再好也白搭。防跑题的第一关就是「审题」:把题目看懂、看透。", emoji: "🔍" },
              { text: "审题三看:一看题眼(关键词),二看范围(时间、对象、数量),三看要求(文体、字数、有没有限制)。", emoji: "👀", scene: { type: "clues", items: [
                { head: "看题眼", text: "关键词" },
                { head: "看范围", text: "时间对象" },
                { head: "看要求", text: "文体字数" }
              ] } },
              { text: "抓题眼:《难忘的一件事》题眼是「难忘」和「一件」——必须写一件事(不是多件),而且要突出「难忘」。", emoji: "🎯" },
              { text: "看限制词:《一次难忘的旅行》有「旅行」限定内容;《成长路上》的「路上」提示要写过程、有变化。", emoji: "🚧" },
              { text: "口诀:题眼圈出来,范围划清楚,要求记心头。审题多花两分钟,下笔就不跑题!", emoji: "⏱️" }
            ] }
          ],
          q: { type: "choice", points: 10, voice: "zh",
            q: "以《那一次,我真高兴》为题写作,审题时最需要注意的是:",
            options: [
              "尽量多写几件高兴的事,内容才丰富",
              "扣住「那一次」和「高兴」,写一件让自己真正高兴的事,并突出高兴的心情",
              "只要写得字数够多就行",
              "写别人高兴的事也可以"
            ], answer: 1,
            demoSteps: [
              { text: "圈题眼:「那一次」限定几件事?「我」限定谁?「高兴」限定什么情感?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "那一次", text: "一件事" },
                { head: "我", text: "写自己" },
                { head: "高兴", text: "突出这种心情" }
              ] } },
              { text: "三个词都是限制条件,哪个选项全扣住了?", emoji: "🎯" }
            ],
            explain: "B 正确。「那一次」限定写一件事,「我」限定写自己,「高兴」限定情感基调。三个关键词都要扣住。A、D 跑题,C 只顾字数。",
            explainSteps: [
              { text: "「那一次」= 只写一件事(不能写好几件),A 错。", emoji: "❌" },
              { text: "「我」= 写自己的经历,D 写别人,跑题。", emoji: "❌" },
              { text: "B 扣住「一件事+自己+高兴」,还突出心情,选 B!审题就是抠住每个关键词。", emoji: "✅" }
            ] }
        },
        {
          name: "动画课堂 · 立意:文章要有个「灵魂」",
          blocks: [
            { type: "lesson", title: "▶ 立意高远,文章才有分量", steps: [
              { text: "审完题,要「立意」——确定文章想表达的中心思想。立意就是文章的灵魂,决定了文章的高度。", emoji: "💫" },
              { text: "立意三要求:正确(积极健康)、集中(一篇一个中心)、深刻(能给人启发)。", emoji: "🎯", scene: { type: "clues", items: [
                { head: "正确", text: "积极健康" },
                { head: "集中", text: "一个中心" },
                { head: "深刻", text: "有启发" }
              ] } },
              { text: "由浅入深的技巧:从「一件小事」写出「一点感悟」。写「奶奶补衣服」,立意可升华为「平凡中的深爱」。", emoji: "🪡" },
              { text: "立意忌「大而空」:不要动辄「我要报效祖国」。从身边小事写出真情实感,反而更打动人、更深刻。", emoji: "🌱" },
              { text: "口诀:立意要正、要集中、要深一层。以小见大,从小事里悟出道理,文章就有了灵魂。", emoji: "🎯" }
            ] }
          ],
          q: { type: "fill", points: 10, voice: "zh",
            q: "写作文时,确定文章所要表达的中心思想,这一步叫做__________。(填两个字)",
            placeholder: "填两个字",
            accept: ["立意", "立意。", "确立中心", "定中心"],
            demoSteps: [
              { text: "审题之后,确定文章「想说什么中心」的这一步,叫什么?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "审题", text: "看懂题目" },
                { head: "?", text: "确定中心思想" },
                { head: "两个字", text: "立…" }
              ] } },
              { text: "「立」起文章的中心「意」思——两个字。", emoji: "💫" }
            ],
            explain: "答案:立意。立意就是确定文章的中心思想,它是文章的灵魂,要求正确、集中、深刻。",
            explainSteps: [
              { text: "确定「想表达什么中心」= 立意。", emoji: "💫" },
              { text: "立意是文章的灵魂,要正确、集中、深刻。", emoji: "🎯" },
              { text: "答「立意」。审题+立意做好了,作文就成功了一半!", emoji: "✅" }
            ] }
        },
        {
          name: "今日彩蛋 · 名著打卡",
          blocks: [
            { type: "rule", title: "📖 睡前 20 分钟名著时间", html: "继续读<b>《西游记》</b>!今晚想一想:如果让你以<b>《取经路上》</b>为题写篇作文,你会怎样审题、立什么意?<br>比如立意可以是「坚持到底才能取得真经」——一部名著,就是一座作文素材宝库!" }
          ],
          q: null
        }
      ]
    },

    // ================== 道法 ==================
    {
      subject: "civics", icon: "⚖️", title: "道法 · 友谊的天空", minutes: 25,
      units: [
        {
          name: "动画课堂 · 呵护友谊,慎交朋友",
          blocks: [
            { type: "lesson", title: "▶ 什么是真正的友谊", steps: [
              { text: "进入初中,朋友越来越重要。友谊是一盏灯,照亮我们的成长。但友谊也需要用心经营和呵护。", emoji: "🤝" },
              { text: "真正的友谊是平等、双向的:朋友之间要相互接纳、相互关心、彼此信任,而不是一方付出、一方索取。", emoji: "⚖️", scene: { type: "clues", items: [
                { head: "平等", text: "地位相当" },
                { head: "双向", text: "相互付出" },
                { head: "信任", text: "彼此真诚" }
              ] } },
              { text: "友谊不是没有原则的「哥们义气」。当朋友做错事时,真正的朋友会劝阻,而不是盲目跟从、包庇。", emoji: "🛑" },
              { text: "呵护友谊要学会:用心关怀、正确处理冲突、学会宽容,也要坚持原则、守住底线。", emoji: "💗", scene: { type: "clues", items: [
                { head: "会关怀", text: "多为对方着想" },
                { head: "会沟通", text: "化解冲突" },
                { head: "有原则", text: "不讲哥们义气" }
              ] } },
              { text: "记住:友谊要真诚、平等、有原则。为朋友两肋插刀不等于纵容错误——那不是友谊,是害了对方。", emoji: "🎯" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "小明的好朋友想抄袭作业,叫小明帮忙打掩护。作为真正的朋友,小明恰当的做法是:",
            options: [
              "为了「义气」,帮朋友打掩护",
              "劝说朋友不要抄袭,并帮他一起弄懂题目",
              "从此不再理这个朋友",
              "也跟着一起抄袭"
            ], answer: 1,
            demoSteps: [
              { text: "回忆:真正的友谊是「讲义气」还是「有原则」?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "哥们义气", text: "盲目包庇 ✗" },
                { head: "真友谊", text: "劝阻+帮助 ✓" },
                { head: "底线", text: "不纵容错误" }
              ] } },
              { text: "既要坚持原则(不打掩护),又要关心朋友(帮他真正学会)。", emoji: "💗" }
            ],
            explain: "B 正确。真正的友谊有原则,既要劝阻朋友做错事,又要真心帮助他解决困难。A、D 是纵容,C 太冷漠,都不可取。",
            explainSteps: [
              { text: "A、D:帮着抄、一起抄,是「哥们义气」,害了朋友也害了自己。", emoji: "❌" },
              { text: "C:直接绝交太冷漠,也不是朋友该做的。", emoji: "❌" },
              { text: "B:劝阻 + 帮他弄懂题目,既守原则又显关心,选 B!这才是真友谊。", emoji: "✅" }
            ] }
        }
      ]
    }
  ]
};
