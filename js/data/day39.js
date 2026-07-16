// ============ 第 39 关 ============
window.DAYS = window.DAYS || {};

window.DAYS[39] = {
  day: 39,
  title: "第 39 关 · 模拟测试(二)",
  estimate: "四科约 2~3 小时 · 共 7 道测试题(含 1 道 BOSS 题)",
  sections: [
    // ================== 数学 ==================
    {
      subject: "math", icon: "🔢", title: "数学 · 模拟测试(二)", minutes: 50,
      units: [
        {
          name: "考前提醒 · 冲刺再叮嘱",
          blocks: [
            { type: "lesson", title: "▶ 最后一次模拟,查漏补缺", steps: [
              { text: "模拟测试第二场!这是结营大考前最后的练兵。把最容易错的地方再叮嘱一遍。", emoji: "📝" },
              { text: "符号是命门:−2² = −4、(−2)² = 4;减负数变加;去括号前是减号要全变号。这几处最爱丢分。", emoji: "⚠️", scene: { type: "clues", items: [
                { head: "乘方符号", text: "看括号内外" },
                { head: "去括号", text: "前−全变号" },
                { head: "移项", text: "变号搬" }
              ] } },
              { text: "解方程五步别跳步,应用题记得写「设」和「答」。几何题先画图,标已知。", emoji: "📐" },
              { text: "时间分配:先做有把握的,难题先跳过,回头再攻。会做的一分都别丢!", emoji: "⏱️" },
              { text: "你已经闯过 38 关,基础扎实。放松心态,认真审题,发挥出真实水平!", emoji: "💪" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "解方程 2(x + 1) − 3(x − 2) = 4,x 的值是:",
            options: ["x = 4", "x = −4", "x = 0", "x = 8"], answer: 0,
            demoSteps: [
              { text: "先去括号(数字乘每项,注意 −3 乘 (x−2)):2(x+1)=2x+2,−3(x−2)=−3x+6。", emoji: "📦", scene: { type: "clues", items: [
                { head: "2(x+1)", text: "2x+2" },
                { head: "−3(x−2)", text: "−3x+6" },
                { head: "合并", text: "−x+8=4" }
              ] } },
              { text: "得 2x+2−3x+6=4,合并 −x+8=4,移项求 x。", emoji: "🔄" }
            ],
            explain: "去括号:2x+2−3x+6=4;合并:−x+8=4;移项:−x=4−8=−4,x=4。选 A。",
            explainSteps: [
              { text: "去括号:2x+2−3x+6=4(−3 乘 (x−2) 得 −3x+6)。", emoji: "📦" },
              { text: "合并:−x+8=4;移项:−x=−4,x=4。", emoji: "🔄" },
              { text: "选 A!验算:2(5)−3(2)=10−6=4,对!去括号变号、化系数,都对了!", emoji: "✅" }
            ] }
        },
        {
          name: "🔥 BOSS 挑战 · 行程压轴",
          blocks: [
            { type: "text", html: "💪 <b>BOSS 战规则</b>:模拟测试压轴行程题!画线段图、找等量关系。草稿纸准备!" }
          ],
          q: { type: "fill", points: 20, boss: true, voice: "zh",
            q: "甲、乙两地相距 300 千米,一辆快车和一辆慢车同时从两地相向开出。快车每小时行 65 千米,慢车每小时行 35 千米。设经过 x 小时两车相遇,由「快车路程 + 慢车路程 = 总距离」得 65x + 35x = 300。请解出经过多少小时相遇?(直接填数字)",
            placeholder: "例如: 2",
            accept: ["3", "3小时", "三", "三小时"],
            demoSteps: [
              { text: "相遇问题:两车路程之和 = 总距离。快车 65x,慢车 35x。", emoji: "🤝", scene: { type: "clues", items: [
                { head: "快车", text: "65x" },
                { head: "慢车", text: "35x" },
                { head: "方程", text: "65x+35x=300" }
              ] } },
              { text: "合并:100x = 300,除以 100。", emoji: "🧮" }
            ],
            explain: "65x + 35x = 300,合并 100x = 300,系数化 1:x = 3。经过 3 小时两车相遇。",
            explainSteps: [
              { text: "合并同类项:65x+35x=100x,方程变 100x=300。", emoji: "🧮" },
              { text: "两边除以 100:x = 3,经过 3 小时相遇!", emoji: "✅" },
              { text: "验算:快车 195 + 慢车 105 = 300,对!相遇路程相加,BOSS 拿下!", emoji: "🏆" }
            ] }
        }
      ]
    },

    // ================== 英语 ==================
    {
      subject: "english", icon: "📚", title: "英语 · 模拟测试(二)", minutes: 45,
      units: [
        {
          name: "考前提醒 · 语法与写作要点",
          blocks: [
            { type: "lesson", title: "▶ 最后叮嘱", steps: [
              { text: "英语模拟测试第二场!把最爱考、最爱错的点再过一遍。", emoji: "📝" },
              { text: "时态:一般现在(三单加 s)、现在进行(be+ing)、一般过去(过去式)、一般将来(will/be going to)。看信号词!", emoji: "⏱️", scene: { type: "clues", items: [
                { head: "三单", text: "动词加 s" },
                { head: "进行时", text: "be + ing" },
                { head: "过去时", text: "did + 原形(疑问否定)" }
              ] } },
              { text: "名词单复数、可数不可数、some/any、情态动词后跟原形、祈使句动词打头——这些小点都要看仔细。", emoji: "🔍" },
              { text: "写作(如自我介绍):现在过去将来三时态都用上;句子简单但要正确;首字母大写、句末标点别忘。", emoji: "✍️" },
              { text: "先做有把握的,不会的先跳过。相信自己六周的积累,加油!", emoji: "💪" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "综合选择,完全正确的一句是:",
            options: [
              "There are some milk in the cup, and I will drinks it.",
              "There is some milk in the cup, and I will drink it.",
              "There are some milk in the cup, and I will drink it.",
              "There is any milk in the cup, and I will drinks it."
            ], answer: 1,
            demoSteps: [
              { text: "三处:milk 可数吗?配 is/are?肯定句 some/any?will 后动词形式?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "milk", text: "不可数 → is" },
                { head: "肯定句", text: "some" },
                { head: "will", text: "+ 原形 drink" }
              ] } },
              { text: "milk 不可数配 is、肯定句 some、will 后用原形 drink。", emoji: "✅" }
            ],
            explain: "B 正确:There is(milk 不可数)、some(肯定句)、will drink(will+原形)。A、C 用 are 错;D 用 any 且 drinks 错。",
            explainSteps: [
              { text: "milk 不可数,用 There is;A、C 用 are 错。", emoji: "❌" },
              { text: "肯定句用 some(D 用 any 错);will 后用原形 drink(A、D 的 drinks 错)。", emoji: "❌" },
              { text: "B 三处全对!选 B。多考点联动题,逐点排查最稳!", emoji: "✅" }
            ] }
        },
        {
          name: "阅读理解测试 · A Letter to a Friend",
          blocks: [
            { type: "text", html: "🕵️ <b>阅读任务</b>:读这封信,注意时间和事件,答案都在信里。" },
            { type: "reading", speakable: true, title: "A Letter to a Friend", paragraphs: [
              "Dear Mike,",
              "How are you? I had a wonderful weekend. On Saturday, I went to the museum with my father. We saw many old things and I learned a lot about history.",
              "On Sunday, I stayed at home and read a book about space. It was very interesting. In the evening, my mother made a big dinner for us.",
              "Next weekend, I am going to visit my grandparents in the countryside. I will help them on the farm. I can't wait! What are you going to do next weekend? Please write back soon. Your friend, Tom"
            ], tip: "生词提示:museum 博物馆 / space 太空 / countryside 乡下 / write back 回信" }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "What is Tom going to do next weekend?(汤姆下周末打算做什么?)",
            options: [
              "Go to the museum with his father.",
              "Read a book about space at home.",
              "Visit his grandparents and help on the farm.",
              "Make a big dinner for his family."
            ], answer: 2,
            demoSteps: [
              { text: "题目问「下周末(next weekend)」,注意区分过去(上周末)和将来。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "上周末", text: "博物馆·读书(过去)" },
                { head: "next weekend", text: "看外公外婆·帮农活(将来)" },
                { head: "看时态", text: "am going to / will" }
              ] } },
              { text: "next weekend 后用了 am going to visit、will help,是将来的计划。", emoji: "🔮" }
            ],
            explain: "C 正确。信中说 next weekend 汤姆 am going to visit 外公外婆,并 will help 他们干农活。A、B、D 都是上个周末(过去)做的事。",
            explainSteps: [
              { text: "上周末:去博物馆、读书(过去时 went/read)。", emoji: "⏮️" },
              { text: "下周末:看外公外婆、帮农活(将来时 am going to/will),选 C!", emoji: "✅" },
              { text: "注意区分过去和将来:看时态和时间词,别把两段时间搞混!", emoji: "🎯" }
            ] }
        }
      ]
    },

    // ================== 语文 ==================
    {
      subject: "chinese", icon: "📝", title: "语文 · 模拟测试(二)", minutes: 40,
      units: [
        {
          name: "考前提醒 · 综合题拿分技巧",
          blocks: [
            { type: "lesson", title: "▶ 阅读与古诗文冲刺", steps: [
              { text: "语文模拟测试第二场!重点在阅读理解和古诗文。记住几个拿分技巧。", emoji: "📝" },
              { text: "阅读概括题:谁+做什么+结果。词句理解:本义+语境义+效果。赏析题:方法+作用。", emoji: "🔑", scene: { type: "clues", items: [
                { head: "概括", text: "谁+做什么+结果" },
                { head: "理解词句", text: "本义+语境+效果" },
                { head: "赏析", text: "方法+作用" }
              ] } },
              { text: "环境描写作用:交代时地、渲染气氛、烘托心情、推动情节。标题作用:概括、主旨、线索、悬念、修辞。", emoji: "🏞️" },
              { text: "古诗文:默写一字不错;理解性默写抓题干关键词;文言实词多义、通假、古今异义要记牢。", emoji: "📖" },
              { text: "分点作答、序号清晰、书写工整。会做的规范答,能多拿好几分!加油冲刺!", emoji: "💪" }
            ] }
          ],
          q: { type: "choice", points: 10, voice: "zh",
            q: "「他一把夺过我手里的伞,自己却淋在雨里,把伞紧紧举在我头顶。」这句话主要通过什么描写表现人物?",
            options: [
              "语言描写,表现他爱说话",
              "动作描写,通过「夺」「举」等动作,表现他对『我』的关爱与保护",
              "外貌描写,写他的样子",
              "环境描写,写雨很大"
            ], answer: 1,
            demoSteps: [
              { text: "「夺」「淋」「举」是什么?这些动作表现了人物怎样的情感?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "夺·举", text: "动作" },
                { head: "自己淋雨", text: "为『我』" },
                { head: "情感", text: "关爱·保护" }
              ] } },
              { text: "一连串动作,表现他宁愿自己淋雨也要护着『我』。", emoji: "💗" }
            ],
            explain: "B 正确。「夺」「举」是动作描写,通过他抢过伞、自己淋雨、把伞举在『我』头顶的动作,生动表现了他对『我』的关爱和保护。",
            explainSteps: [
              { text: "「夺」「举」都是动作,属于动作描写。", emoji: "🏃" },
              { text: "自己淋雨也要护着『我』,表现深深的关爱,选 B!", emoji: "✅" },
              { text: "赏析题:方法(动作描写)+ 作用(表现关爱)。规范作答!", emoji: "🎯" }
            ] }
        },
        {
          name: "古诗文测试 · 名句默写",
          blocks: [
            { type: "text", html: "✍️ <b>默写任务</b>:这些都是这个暑假的重点名句,考试常考。写的时候注意易错字!" },
            { type: "rule", title: "📜 名句回顾", html: "本次考查《论语》名句。<b>《论语》十二章</b>中,阐述「学习」与「思考」辩证关系的句子广为流传——静下心,回忆一下你背过的内容。" }
          ],
          q: { type: "fill", points: 10, voice: "zh",
            q: "默写:《论语》中阐述学习与思考必须结合的句子是「学而不思则罔,__________」。(填后半句,六个字)",
            placeholder: "填六个字",
            accept: ["思而不学则殆", "思而不学则殆。", "思而不学则殆,"],
            demoSteps: [
              { text: "上句「学而不思则罔」讲只学不思会迷惑;下句对称,讲只思不学会怎样?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "学而不思", text: "则罔(迷惑)" },
                { head: "思而不学", text: "则殆(疑惑)" },
                { head: "对称", text: "结构一致" }
              ] } },
              { text: "「思而不学则殆」——注意「殆」字的写法。", emoji: "✍️" }
            ],
            explain: "答案:思而不学则殆。「学而不思则罔,思而不学则殆」出自《论语》,强调学习与思考缺一不可,注意「殆」字。",
            explainSteps: [
              { text: "下句「思而不学则殆」,与上句结构对称。", emoji: "📖" },
              { text: "易错字「殆」(dài,疑惑),别写错。", emoji: "⚠️" },
              { text: "答对了!《论语》名句是默写高频考点,记得牢牢的!", emoji: "✅" }
            ] }
        },
        {
          name: "今日彩蛋 · 名著打卡",
          blocks: [
            { type: "rule", title: "📖 睡前 20 分钟名著时间", html: "明天就是<b>结营总测评</b>啦!今晚早点休息,让大脑好好整理这个暑假的收获。<br>睡前默背一遍《诫子书》:「非淡泊无以明志,非宁静无以致远。」——用它给自己的暑假画一个漂亮的句号。明天,全力以赴!" }
          ],
          q: null
        }
      ]
    },

    // ================== 道法 ==================
    {
      subject: "civics", icon: "⚖️", title: "道法 · 道法综合复习", minutes: 25,
      units: [
        {
          name: "动画课堂 · 道法知识总盘点",
          blocks: [
            { type: "lesson", title: "▶ 成长·学习·关系·生命,一次串清", steps: [
              { text: "模拟测评周!道法今晚把这个暑假学的知识串一遍,考试从容应对。", emoji: "⚖️" },
              { text: "成长与学习:中学时代要立新目标;学习伴随一生(知识+本领+做人);正确认识自己(全面客观,扬长补短)。", emoji: "🌱", scene: { type: "clues", items: [
                { head: "中学时代", text: "新起点" },
                { head: "学会学习", text: "主动·有方法" },
                { head: "认识自己", text: "全面·客观" }
              ] } },
              { text: "人际关系:友谊要真诚平等有原则(不讲哥们义气);理解老师、教学相长;亲情可贵,亲子冲突靠沟通化解。", emoji: "🤝", scene: { type: "clues", items: [
                { head: "友谊", text: "真诚·有原则" },
                { head: "师生", text: "理解·沟通" },
                { head: "亲情", text: "沟通·换位思考" }
              ] } },
              { text: "生命教育:生命宝贵而独特,不可逆;要敬畏生命、珍爱生命，也尊重他人生命,活出生命价值。", emoji: "🌟" },
              { text: "复习口诀:成长要立志会学习,人际真诚讲原则;冲突沟通换位想,敬畏生命活精彩!", emoji: "🎯" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "下列关于道德与法治知识的说法,正确的一项是:",
            options: [
              "为了「义气」,应该帮朋友隐瞒错误",
              "真正的友谊要真诚、平等,也要坚持原则",
              "认识自己就是只看到自己的优点",
              "和父母有冲突时,应该用冷战和对抗来解决"
            ], answer: 1,
            demoSteps: [
              { text: "回忆:友谊讲不讲原则?认识自己要不要接纳不足?冲突怎么解决?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "友谊", text: "真诚·有原则" },
                { head: "认识自己", text: "优点+不足" },
                { head: "冲突", text: "沟通·换位" }
              ] } },
              { text: "把「哥们义气」「只看优点」「冷战对抗」的错误排除。", emoji: "🔍" }
            ],
            explain: "B 正确。A 是没有原则的哥们义气;C 认识自己既要看优点也要接纳不足;D 冷战对抗会激化矛盾。真正的友谊真诚、平等、有原则。",
            explainSteps: [
              { text: "A:帮朋友隐瞒错误是害了他,不是真友谊,错。", emoji: "❌" },
              { text: "C:认识自己要全面(优点+不足),错;D:冷战对抗激化矛盾,错。", emoji: "❌" },
              { text: "B:友谊真诚、平等、有原则,正确!选 B。", emoji: "✅" }
            ] }
        }
      ]
    }
  ]
};
