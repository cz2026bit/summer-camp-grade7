// ============ 第 29 关 ============
window.DAYS = window.DAYS || {};

window.DAYS[29] = {
  day: 29,
  title: "第 29 关 · 打折的学问",
  estimate: "四科约 2~3 小时 · 共 7 道思考题(含 1 道 BOSS 题)",
  sections: [
    // ================== 数学 ==================
    {
      subject: "math", icon: "🔢", title: "数学 · 方程应用:利润与折扣", minutes: 50,
      units: [
        {
          name: "动画课堂 1 · 三个价:进价、标价、售价",
          blocks: [
            { type: "lesson", title: "▶ 做生意的基本词汇", steps: [
              { text: "商场打折、店铺盈亏,都是方程的用武之地。先认识几个词:进价(成本)、标价(原价)、售价(实际卖出价)。", emoji: "🏪" },
              { text: "利润 = 售价 − 进价。利润率 = 利润 ÷ 进价 × 100%。赚了利润为正,亏了为负。", emoji: "💰", scene: { type: "clues", items: [
                { head: "利润", text: "售价 − 进价" },
                { head: "利润率", text: "利润÷进价" },
                { head: "亏本", text: "利润为负" }
              ] } },
              { text: "「打几折」是关键:打八折 = 按标价的 80% 卖,售价 = 标价 × 0.8;打七五折 = ×0.75。", emoji: "🏷️", scene: { type: "clues", items: [
                { head: "八折", text: "×0.8" },
                { head: "七五折", text: "×0.75" },
                { head: "几折", text: "= 十分之几" }
              ] } },
              { text: "别搞反:「打八折」是便宜了(只卖 80%),不是加价!几折就是原价的十分之几。", emoji: "⚠️" },
              { text: "核心公式串一串:售价 = 标价 × 折扣;利润 = 售价 − 进价。抓住它们,利润题不再难!", emoji: "🎯" }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 2 · 利润方程实战",
          blocks: [
            { type: "lesson", title: "▶ 设未知数,列利润方程", steps: [
              { text: "利润题常问「进价多少」「打几折」。设未知数、用「利润 = 售价 − 进价」建方程。", emoji: "🧮" },
              { text: "例:一件衣服进价 x 元,标价 200 元,打八折卖出,赚了 40 元。等量关系:售价 − 进价 = 利润。", emoji: "👕", scene: { type: "clues", items: [
                { head: "售价", text: "200×0.8 = 160" },
                { head: "进价", text: "x" },
                { head: "关系", text: "160 − x = 40" }
              ] } },
              { text: "列方程:200×0.8 − x = 40,即 160 − x = 40。解得 x = 120。进价是 120 元。", emoji: "🔑" },
              { text: "验算:进价 120,售价 160,利润 160−120=40,对!利润率 = 40÷120 ≈ 33%。", emoji: "✅" },
              { text: "口诀:先算售价(标价×折扣),再用「售价−进价=利润」列方程,解出所求。利润题一通百通!", emoji: "🏅" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "一件商品标价 150 元,打八折出售后,仍能赚 20 元。设进价为 x 元,列出的方程正确的是:",
            options: [
              "150 − x = 20",
              "150 × 0.8 − x = 20",
              "150 × 0.2 − x = 20",
              "x − 150 × 0.8 = 20"
            ], answer: 1,
            demoSteps: [
              { text: "先求售价:打八折 = 标价×0.8 = 150×0.8。等量关系是「售价 − 进价 = 利润」。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "售价", text: "150×0.8" },
                { head: "进价", text: "x" },
                { head: "利润", text: "20" }
              ] } },
              { text: "售价 − 进价 = 20,代入售价 150×0.8。", emoji: "🏷️" }
            ],
            explain: "B 正确。打八折售价 = 150×0.8,利润 = 售价 − 进价:150×0.8 − x = 20。A 忘了打折;C 折扣算错(八折是 0.8 不是 0.2);D 顺序反了。",
            explainSteps: [
              { text: "八折售价 = 150×0.8 = 120 元。", emoji: "🏷️" },
              { text: "利润 = 售价 − 进价:150×0.8 − x = 20,选 B!", emoji: "✅" },
              { text: "C 把「八折」当成 0.2(那是「打二折」),八折是留下 80%,记牢!", emoji: "🎯" }
            ] }
        },
        {
          name: "🔥 BOSS 挑战 · 老板赚了吗",
          blocks: [
            { type: "text", html: "💪 <b>BOSS 战规则</b>:一道真实的利润题!先求售价,再列方程,算出进价。草稿纸准备!" }
          ],
          q: { type: "fill", points: 20, boss: true, voice: "zh",
            q: "一双鞋标价 240 元,商店打七五折促销卖出,结果每双仍盈利 30 元。设这双鞋的进价为 x 元,由「售价 − 进价 = 利润」得 240×0.75 − x = 30。请解出进价是多少元?(直接填数字)",
            placeholder: "例如: 100",
            accept: ["150", "150元", "一百五十"],
            demoSteps: [
              { text: "先算售价:240×0.75 = 180 元(七五折 = ×0.75)。", emoji: "🏷️", scene: { type: "clues", items: [
                { head: "标价", text: "240 元" },
                { head: "七五折", text: "×0.75" },
                { head: "售价", text: "180 元" }
              ] } },
              { text: "方程变 180 − x = 30,移项求 x。", emoji: "🔄" }
            ],
            explain: "售价 = 240×0.75 = 180 元;180 − x = 30;移项:x = 180 − 30 = 150。进价 150 元。",
            explainSteps: [
              { text: "七五折售价 = 240×0.75 = 180 元。", emoji: "🏷️" },
              { text: "180 − x = 30,移项 x = 180 − 30 = 150。", emoji: "🔄" },
              { text: "进价 150 元!验算:售价 180 − 进价 150 = 利润 30,对!你已是「利润小掌柜」!", emoji: "🏆" }
            ] }
        }
      ]
    },

    // ================== 英语 ==================
    {
      subject: "english", icon: "📚", title: "英语 · 一般将来时 be going to", minutes: 45,
      units: [
        {
          name: "单词训练营 · 计划与打算 12 个(点卡片听发音!)",
          blocks: [
            { type: "text", html: "🎧 今天的词都在说<span class='hl'>将要做的事、打算</span>!点卡片听发音,跟读 3 遍。" },
            { type: "flashcards", words: [
              { word: "tomorrow", phonetic: "/təˈmɒrəʊ/", cn: "明天", sentence: "I am going to swim tomorrow." },
              { word: "plan", phonetic: "/plæn/", cn: "计划", sentence: "We have a plan for Sunday." },
              { word: "next", phonetic: "/nekst/", cn: "下一个", sentence: "She will come next week." },
              { word: "trip", phonetic: "/trɪp/", cn: "旅行", sentence: "We are going to have a trip." },
              { word: "visit", phonetic: "/ˈvɪzɪt/", cn: "参观", sentence: "I am going to visit Beijing." },
              { word: "weekend", phonetic: "/ˌwiːkˈend/", cn: "周末", sentence: "What are you going to do this weekend?" },
              { word: "future", phonetic: "/ˈfjuːtʃə/", cn: "未来", sentence: "In the future, cars will fly." },
              { word: "hope", phonetic: "/həʊp/", cn: "希望", sentence: "I hope to see you soon." },
              { word: "buy", phonetic: "/baɪ/", cn: "买", sentence: "She is going to buy a book." },
              { word: "later", phonetic: "/ˈleɪtə/", cn: "以后", sentence: "See you later!" },
              { word: "holiday", phonetic: "/ˈhɒlədeɪ/", cn: "假期", sentence: "We are going to have a holiday." },
              { word: "soon", phonetic: "/suːn/", cn: "很快", sentence: "It is going to rain soon." }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 · be going to:计划好的将来",
          blocks: [
            { type: "lesson", title: "▶ 打算做、有迹象要发生", steps: [
              { text: "一般将来时表示「将要发生的事」。第一种表达法:be going to + 动词原形。", emoji: "🔮" },
              { text: "结构:主语 + am/is/are + going to + 动词原形。I am going to visit my grandma.", emoji: "🔧", scene: { type: "clues", items: [
                { head: "I", text: "am going to" },
                { head: "he/she/it", text: "is going to" },
                { head: "you/we/they", text: "are going to" }
              ] } },
              { text: "两种用法:①表示「计划、打算」:We are going to have a party.(我们打算办派对)。", emoji: "📅" },
              { text: "②表示「根据迹象,即将发生」:Look at the dark clouds! It is going to rain.(要下雨了)。", emoji: "🌧️", scene: { type: "clues", items: [
                { head: "表打算", text: "有计划" },
                { head: "表迹象", text: "看征兆" },
                { head: "标志词", text: "tomorrow, next…" }
              ] } },
              { text: "口诀:将来打算 be going to,后面动词用原形;am is are 别用错,计划迹象都能表!", emoji: "🎯" }
            ] },
            { type: "chant", lines: ["将来打算怎么说?", "be going to 别记错;", "后面动词用原形,", "明天以后都能说!"] }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "选出完全正确的一句:",
            options: [
              "She is going to visits her aunt tomorrow.",
              "She is going to visit her aunt tomorrow.",
              "She going to visit her aunt tomorrow.",
              "She are going to visit her aunt tomorrow."
            ], answer: 1,
            demoSteps: [
              { text: "三处检查:be 动词对不对?going to 后面动词什么形式?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "She", text: "配 is" },
                { head: "going to", text: "+ 动词原形" },
                { head: "visit", text: "原形,不加 s" }
              ] } },
              { text: "She 配 is;going to 后用原形 visit,不加 s。", emoji: "✅" }
            ],
            explain: "B 正确:is going to visit(原形)。A 的 visits 多了 s;C 漏了 be 动词 is;D 的 are 与 She 不搭配。",
            explainSteps: [
              { text: "A:going to 后用原形,visits 错。", emoji: "❌" },
              { text: "C:漏了 be 动词 is。", emoji: "❌" },
              { text: "D:She 该配 is,不是 are。", emoji: "❌" },
              { text: "B:is going to visit,结构完整!选 B。", emoji: "✅" }
            ] }
        },
        {
          name: "英文名著时光 · The Nightingale",
          blocks: [
            { type: "rule", title: "📖 名著名片", html: "<b>安徒生 Andersen</b>《夜莺》——真正的歌声来自森林里的小鸟,而不是金子做的假夜莺。" },
            { type: "reading", speakable: true, title: "The Nightingale", paragraphs: [
              "In China long ago, an emperor hears about a nightingale with the most beautiful song. He asks his servants to bring the little grey bird to his palace. When the nightingale sings, everyone cries — the song is so lovely.",
              "One day, someone gives the emperor a golden nightingale full of jewels. It can sing one song again and again. The emperor is so pleased with the new toy that he forgets the real bird, and it flies back to the forest.",
              "Years later, the emperor is very ill. The golden bird is broken and cannot sing. Then, at his window, the real nightingale comes back and sings. Its song is so beautiful that it drives away the emperor's sickness.",
              "'Thank you, little bird,' says the emperor. 'You gave me your song freely, from your heart.' Now he knows: real beauty comes from the heart, not from gold and jewels."
            ], tip: "生词提示:nightingale 夜莺 / emperor 皇帝 / jewel 珠宝 / sickness 疾病 / heart 心" }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "What does the emperor learn in the end?(皇帝最后明白了什么?)",
            options: [
              "The golden bird is better than the real one.",
              "Real beauty comes from the heart, not from gold and jewels.",
              "He should buy more golden birds.",
              "The nightingale is not important."
            ], answer: 1,
            demoSteps: [
              { text: "金夜莺和真夜莺,最后哪个救了皇帝?皇帝因此懂得了什么?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "金夜莺", text: "坏了不能唱" },
                { head: "真夜莺", text: "用歌声治愈皇帝" },
                { head: "领悟", text: "美来自内心" }
              ] } },
              { text: "结尾 real beauty comes from the heart,答案在这。", emoji: "🐦" }
            ],
            explain: "B 正确。金夜莺坏了唱不出歌,真夜莺却用发自内心的歌声治好了皇帝。皇帝明白:真正的美来自内心,而非金银珠宝。",
            explainSteps: [
              { text: "金光闪闪的假夜莺坏了就哑了,真夜莺却真心歌唱。", emoji: "🐦" },
              { text: "真夜莺的歌声治愈了皇帝,他懂得真正的美源于心,选 B!", emoji: "✅" },
              { text: "寓意:朴实而真诚的东西,远比华丽的外表珍贵。", emoji: "🎯" }
            ] }
        }
      ]
    },

    // ================== 语文 ==================
    {
      subject: "chinese", icon: "📝", title: "语文 · 议论性文字初识", minutes: 40,
      units: [
        {
          name: "动画课堂 · 议论文三要素:论点、论据、论证",
          blocks: [
            { type: "lesson", title: "▶ 讲道理、摆事实、说服人", steps: [
              { text: "记叙文讲故事,说明文讲知识,议论文讲道理——它的任务是提出观点、并说服你相信。今天初识议论文。", emoji: "💬" },
              { text: "议论文有三要素:论点(作者的观点)、论据(证明观点的材料)、论证(用论据证明论点的过程)。", emoji: "🧩", scene: { type: "clues", items: [
                { head: "论点", text: "作者的观点" },
                { head: "论据", text: "证明的材料" },
                { head: "论证", text: "证明的过程" }
              ] } },
              { text: "论点是「灵魂」——是一个明确的判断句,如「勤能补拙」。它通常在标题、开头或结尾。", emoji: "🎯" },
              { text: "论据分两类:事实论据(具体事例、数据)和道理论据(名言警句、公认的道理)。", emoji: "📚", scene: { type: "clues", items: [
                { head: "事实论据", text: "事例·数据" },
                { head: "道理论据", text: "名言·公理" },
                { head: "作用", text: "证明论点" }
              ] } },
              { text: "读议论文口诀:先找论点(作者主张什么),再看论据(拿什么证明),理清论证(怎么证明的)。", emoji: "🔑" }
            ] }
          ],
          q: { type: "choice", points: 10, voice: "zh",
            q: "在一篇论证「勤奋出成果」的文章里,作者引用了「爱迪生做了上千次实验才发明电灯」这个例子。这属于:",
            options: [
              "论点",
              "事实论据",
              "道理论据",
              "论证方法的名称"
            ], answer: 1,
            demoSteps: [
              { text: "「爱迪生做上千次实验」是一个具体事例,它是观点、还是用来证明观点的材料?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "论点", text: "勤奋出成果(观点)" },
                { head: "这个例子", text: "具体事例" },
                { head: "属于", text: "事实论据" }
              ] } },
              { text: "用具体的事例来证明观点,属于哪类论据?", emoji: "📚" }
            ],
            explain: "B 正确。「爱迪生做上千次实验」是一个具体事例,用来证明「勤奋出成果」这个论点,属于事实论据。",
            explainSteps: [
              { text: "论点是「勤奋出成果」;这个例子是用来证明它的。", emoji: "🎯" },
              { text: "具体事例属于事实论据,选 B!", emoji: "✅" },
              { text: "区分:名言警句是道理论据,具体事例、数据是事实论据。", emoji: "🎯" }
            ] }
        },
        {
          name: "动画课堂 · 常见论证方法",
          blocks: [
            { type: "lesson", title: "▶ 举例·道理·对比·比喻", steps: [
              { text: "议论文用「论证方法」把论据和论点连起来。常见的有四种,考试常问「用了什么论证方法」。", emoji: "🛠️" },
              { text: "举例论证:举具体事例证明观点(爱迪生的例子)。道理论证:引用名言、讲道理来证明。", emoji: "📖", scene: { type: "clues", items: [
                { head: "举例论证", text: "摆事实" },
                { head: "道理论证", text: "讲道理·引名言" },
                { head: "作用", text: "增强说服力" }
              ] } },
              { text: "对比论证:把正反两方面对比,让观点更鲜明(勤奋的人成功、懒惰的人失败)。", emoji: "⚖️" },
              { text: "比喻论证:用比喻把抽象道理讲得生动(把知识比作大海,说明学无止境)。", emoji: "🌊", scene: { type: "clues", items: [
                { head: "对比论证", text: "正反对照" },
                { head: "比喻论证", text: "打比方说理" },
                { head: "答题", text: "方法+作用" }
              ] } },
              { text: "答题模板:「这里用了××论证,通过……,有力地证明了……的观点。」方法配作用,答题得高分!", emoji: "🎯" }
            ] }
          ],
          q: { type: "fill", points: 10, voice: "zh",
            q: "议论文中,通过举出具体的事例来证明论点的论证方法,叫做「__________论证」。(填两个字)",
            placeholder: "填两个字",
            accept: ["举例", "举例。", "事实", "例证"],
            demoSteps: [
              { text: "「举出具体事例」来证明观点,叫什么论证?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "举事例", text: "举例论证" },
                { head: "引名言", text: "道理论证" },
                { head: "填空", text: "举…论证" }
              ] } },
              { text: "举出例子来证明——两个字。", emoji: "📖" }
            ],
            explain: "答案:举例。「举例论证」通过列举具体、真实的事例来证明论点,能增强文章的说服力。",
            explainSteps: [
              { text: "举具体事例证明观点 = 举例论证。", emoji: "📖" },
              { text: "它让抽象的道理有事实支撑,更有说服力。", emoji: "✅" },
              { text: "答「举例」。四种论证方法(举例、道理、对比、比喻)要记牢!", emoji: "🎯" }
            ] }
        },
        {
          name: "今日彩蛋 · 名著打卡",
          blocks: [
            { type: "rule", title: "📖 睡前 20 分钟名著时间", html: "开始读<b>《朝花夕拾》</b>(第五周会精读)!今晚试着当回「小小评论员」:<b>给「读书有没有用」立一个观点,再想两个证明它的例子。</b><br>一个论点 + 两个论据,你就写出了一篇小议论文的骨架!" }
          ],
          q: null
        }
      ]
    },

    // ================== 历史 ==================
    {
      subject: "history", icon: "🏺", title: "历史 · 三国鼎立", minutes: 25,
      units: [
        {
          name: "动画课堂 · 魏蜀吴的天下三分",
          blocks: [
            { type: "lesson", title: "▶ 从官渡、赤壁到三国鼎立", steps: [
              { text: "东汉末年天下大乱,群雄割据。经过几场关键战役,最终形成了魏、蜀、吴三国鼎立的局面。", emoji: "⚔️" },
              { text: "两场决定性战役:官渡之战,曹操以少胜多打败袁绍,统一了北方;赤壁之战,孙刘联军以少胜多大败曹操。", emoji: "🔥", scene: { type: "clues", items: [
                { head: "官渡之战", text: "曹操胜·统一北方" },
                { head: "赤壁之战", text: "孙刘胜·奠定三分" },
                { head: "特点", text: "都是以少胜多" }
              ] } },
              { text: "赤壁之战后,曹操退回北方,三分天下的格局基本形成。随后:曹丕建魏、刘备建蜀、孙权建吴。", emoji: "🏛️", scene: { type: "clues", items: [
                { head: "魏", text: "曹丕·北方·洛阳" },
                { head: "蜀(汉)", text: "刘备·西南·成都" },
                { head: "吴", text: "孙权·东南·建业" }
              ] } },
              { text: "记忆法:官渡定北方(曹操强),赤壁定三分(曹操败);魏蜀吴,曹刘孙,洛阳成都建业。", emoji: "🗺️" },
              { text: "三国是分裂时期,但经济、文化、科技仍有发展。这段历史后来被写成了名著《三国演义》。", emoji: "📚" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "为三国鼎立局面的形成奠定基础的关键战役是:",
            options: [
              "官渡之战",
              "赤壁之战",
              "长平之战",
              "巨鹿之战"
            ], answer: 1,
            demoSteps: [
              { text: "官渡之战和赤壁之战,哪一场是「奠定三分天下」的?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "官渡之战", text: "曹操统一北方" },
                { head: "赤壁之战", text: "奠定三国鼎立" },
                { head: "区别", text: "一个统一北方·一个三分" }
              ] } },
              { text: "赤壁之战后曹操败退,三分格局才形成。", emoji: "🔥" }
            ],
            explain: "B 正确。赤壁之战中孙刘联军以少胜多打败曹操,曹操被迫退回北方,为三国鼎立局面的形成奠定了基础。官渡之战是曹操统一北方的关键。",
            explainSteps: [
              { text: "官渡之战让曹操统一了北方(不是三分)。", emoji: "⚔️" },
              { text: "赤壁之战曹操大败,退回北方,三分天下才形成,选 B!", emoji: "✅" },
              { text: "C 长平、D 巨鹿都是更早的战役。记牢:赤壁定三分!", emoji: "🎯" }
            ] }
        }
      ]
    }
  ]
};
