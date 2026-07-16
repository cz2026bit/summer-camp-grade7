// ============ 第 20 关 ============
window.DAYS = window.DAYS || {};

window.DAYS[20] = {
  day: 20,
  title: "第 20 关 · 整式加减总攻",
  estimate: "四科约 2~3 小时 · 共 7 道思考题(含 1 道 BOSS 题)",
  sections: [
    // ================== 数学 ==================
    {
      subject: "math", icon: "🔢", title: "数学 · 整式加减综合", minutes: 50,
      units: [
        {
          name: "动画课堂 1 · 整式加减:去括号 + 合并",
          blocks: [
            { type: "lesson", title: "▶ 两大招合体", steps: [
              { text: "整式加减,其实就是这几天学的两大招合体:先去括号,再合并同类项。没有新东西,全是老本领!", emoji: "🤝" },
              { text: "标准流程:第一步去括号(注意括号前符号),第二步找同类项,第三步合并。三步走稳,答案不错。", emoji: "📋", scene: { type: "clues", items: [
                { head: "第一步", text: "去括号" },
                { head: "第二步", text: "找同类项" },
                { head: "第三步", text: "合并" }
              ] } },
              { text: "例:(2x + 3) + (x − 1)。去括号(前面都是+):2x + 3 + x − 1;合并:3x + 2。", emoji: "🧮" },
              { text: "两个易错点:一是括号前是减号时要全变号,二是合并时字母指数不变。这两处最容易丢分!", emoji: "⚠️", scene: { type: "clues", items: [
                { head: "易错一", text: "减号全变号" },
                { head: "易错二", text: "指数不变" },
                { head: "对策", text: "慢一点·细一点" }
              ] } },
              { text: "口诀:整式加减不用慌,去括号来合并忙;减号变号别偷懒,指数不变记心上!", emoji: "🎯" }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 2 · 求「A − B」型:先加括号再去",
          blocks: [
            { type: "lesson", title: "▶ 用一个整式减去另一个", steps: [
              { text: "常见题型:「求 A 与 B 的差」或「A − B」。这里 A、B 是整个多项式,减的时候一定要给它们加括号!", emoji: "📦" },
              { text: "例:A = 3x + 2,B = x − 5,求 A − B。先写成 (3x+2) − (x−5),千万别漏了括号!", emoji: "🔑", scene: { type: "clues", items: [
                { head: "A − B", text: "(3x+2) − (x−5)" },
                { head: "加括号", text: "把 B 整体括起来" },
                { head: "再去括号", text: "全变号" }
              ] } },
              { text: "去括号:(3x+2) − (x−5) = 3x + 2 − x + 5。括号前是减号,x−5 里每项变号!", emoji: "🔄" },
              { text: "合并:3x − x + 2 + 5 = 2x + 7。如果不加括号,写成 3x+2−x−5 就全错了!", emoji: "⚠️" },
              { text: "口诀:整式相减,先加括号;后去括号,减号变号。这一步的括号,是满分的保险!", emoji: "🛡️" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "已知 A = 2x − 3,B = x + 4,求 A − B 的结果是:",
            options: ["3x + 1", "x − 7", "x + 1", "3x − 7"], answer: 1,
            demoSteps: [
              { text: "A − B 要给 B 加括号:(2x − 3) − (x + 4)。", emoji: "📦", scene: { type: "clues", items: [
                { head: "A − B", text: "(2x−3) − (x+4)" },
                { head: "去括号", text: "x → −x,+4 → −4" },
                { head: "得", text: "2x − 3 − x − 4" }
              ] } },
              { text: "括号前减号,x+4 变成 −x−4,再合并同类项。", emoji: "🔄" }
            ],
            explain: "A − B = (2x−3) − (x+4) = 2x − 3 − x − 4 = (2x−x) + (−3−4) = x − 7。选 B。",
            explainSteps: [
              { text: "加括号:(2x−3) − (x+4)。", emoji: "📦" },
              { text: "去括号变号:2x − 3 − x − 4。", emoji: "🔄" },
              { text: "合并:x − 7,选 B!", emoji: "✅" },
              { text: "A 忘了给 B 变号(最常见错),记住:整式相减先加括号、再全变号!", emoji: "🎯" }
            ] }
        },
        {
          name: "🔥 BOSS 挑战 · 周长的代数式",
          blocks: [
            { type: "text", html: "💪 <b>BOSS 战规则</b>:用整式表示图形周长!列式、化简一气呵成。草稿纸准备!" }
          ],
          q: { type: "fill", points: 20, boss: true, voice: "zh",
            q: "一个长方形,长是 (2a + 3),宽是 (a − 1)。它的周长 = 2×(长 + 宽)。请化简出周长的最简整式。(格式如 6a+4)",
            placeholder: "例如: 6a+4",
            accept: ["6a+4", "6a + 4", "4+6a", "6a＋4", "(6a+4)"],
            demoSteps: [
              { text: "周长 = 2×(长 + 宽)。先算括号里的「长 + 宽」。", emoji: "📐", scene: { type: "clues", items: [
                { head: "长+宽", text: "(2a+3)+(a−1)" },
                { head: "合并", text: "3a + 2" },
                { head: "再×2", text: "2(3a+2)" }
              ] } },
              { text: "长+宽 = 2a+3+a−1 = 3a+2,再乘 2。乘 2 时括号里每项都乘!", emoji: "🧮" }
            ],
            explain: "长+宽 = (2a+3)+(a−1) = 3a+2;周长 = 2(3a+2) = 6a+4。",
            explainSteps: [
              { text: "长 + 宽 = 2a+3+a−1 = 3a+2。", emoji: "📐" },
              { text: "周长 = 2×(3a+2) = 6a+4(2 乘进括号,每项都乘)。", emoji: "🧮" },
              { text: "结果 6a+4!用字母表示周长,长宽变了公式照样用——代数的威力再次显现!", emoji: "🏆" }
            ] }
        }
      ]
    },

    // ================== 英语 ==================
    {
      subject: "english", icon: "📚", title: "英语 · 介词 in / on / at", minutes: 45,
      units: [
        {
          name: "单词训练营 · 时间与地点 12 个(点卡片听发音!)",
          blocks: [
            { type: "text", html: "🎧 今天的词配上 in/on/at 就能说清<span class='hl'>何时何地</span>!点卡片听发音,跟读 3 遍。" },
            { type: "flashcards", words: [
              { word: "morning", phonetic: "/ˈmɔːnɪŋ/", cn: "早晨", sentence: "I read in the morning." },
              { word: "night", phonetic: "/naɪt/", cn: "夜晚", sentence: "We sleep at night." },
              { word: "Monday", phonetic: "/ˈmʌndeɪ/", cn: "星期一", sentence: "We have a test on Monday." },
              { word: "summer", phonetic: "/ˈsʌmə/", cn: "夏天", sentence: "It is hot in summer." },
              { word: "birthday", phonetic: "/ˈbɜːθdeɪ/", cn: "生日", sentence: "My birthday is on May 1st." },
              { word: "wall", phonetic: "/wɔːl/", cn: "墙", sentence: "The map is on the wall." },
              { word: "table", phonetic: "/ˈteɪbl/", cn: "桌子", sentence: "The book is on the table." },
              { word: "box", phonetic: "/bɒks/", cn: "盒子", sentence: "The toy is in the box." },
              { word: "school", phonetic: "/skuːl/", cn: "学校", sentence: "I am at school now." },
              { word: "home", phonetic: "/həʊm/", cn: "家", sentence: "She is at home." },
              { word: "bus stop", phonetic: "/bʌs stɒp/", cn: "公交站", sentence: "Wait at the bus stop." },
              { word: "weekend", phonetic: "/ˌwiːkˈend/", cn: "周末", sentence: "We relax on the weekend." }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 · in / on / at:大中小三层收纳",
          blocks: [
            { type: "lesson", title: "▶ 时间和地点的三兄弟", steps: [
              { text: "in、on、at 是最常用的三个介词,像三个大小不同的收纳盒:in 装大的,at 装小的,on 居中。", emoji: "📦" },
              { text: "表时间:in 用于较长时段(年、月、季节、上午下午晚上);on 用于具体某天;at 用于时刻。", emoji: "🕐", scene: { type: "clues", items: [
                { head: "in", text: "in 2024 / in summer / in the morning" },
                { head: "on", text: "on Monday / on May 1st" },
                { head: "at", text: "at six / at night" }
              ] } },
              { text: "表地点:in 用于大范围(城市、国家、盒子里面);on 用于表面(墙上、桌上);at 用于某一点(车站、门口)。", emoji: "📍", scene: { type: "match", groups: [
                { head: "in(里面/大)", items: ["in the box", "in China"] },
                { head: "on(表面)", items: ["on the wall", "on the desk"] }
              ] } },
              { text: "几个要记牢的固定搭配:in the morning/afternoon/evening,但 at night(夜里用 at!)、at noon。", emoji: "🌙" },
              { text: "口诀:年月季节上午晚用 in,具体某天用 on,几点钟和夜晚用 at。大范围 in,表面 on,一点 at!", emoji: "🎯" }
            ] },
            { type: "chant", lines: ["年月季节大范围用 in,", "某天日期表面用 on;", "时刻一点用 at 来,", "at night 夜晚要记牢!"] }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "选出介词全部正确的一句:",
            options: [
              "I get up at six in Monday morning.",
              "I get up at six on Monday morning.",
              "I get up on six in Monday morning.",
              "I get up in six at Monday morning."
            ], answer: 1,
            demoSteps: [
              { text: "拆三处:「六点」用什么?「星期一早上」用什么?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "six(时刻)", text: "at six" },
                { head: "Monday morning(具体某天的早上)", text: "on" },
                { head: "规则", text: "具体某天用 on" }
              ] } },
              { text: "六点是时刻用 at;具体某一天的早上(Monday morning)整体用 on。", emoji: "✅" }
            ],
            explain: "B 正确:at six(时刻)、on Monday morning(具体某天的早上用 on,而非 in)。A 用了 in Monday;C、D 时刻介词错。",
            explainSteps: [
              { text: "六点是时刻,用 at six。", emoji: "🕐" },
              { text: "「星期一早上」是具体某天,整体用 on Monday morning(不是 in!)。", emoji: "📅" },
              { text: "B 两处都对!选 B。特例:具体某天的早晚用 on,不用 in。", emoji: "✅" }
            ] }
        },
        {
          name: "英文名著时光 · Jack and the Beanstalk",
          blocks: [
            { type: "rule", title: "📖 名著名片", html: "<b>英国经典童话</b>《杰克与豆茎》——几颗神奇豆子长成通天巨藤,勇敢的杰克爬上云端历险。" },
            { type: "reading", speakable: true, title: "Jack and the Beanstalk", paragraphs: [
              "Jack and his mother are poor. They have only one cow. Jack takes the cow to sell it, but he meets a man who gives him five magic beans for it. His mother is angry and throws the beans out of the window.",
              "In the morning, a huge beanstalk grows up to the sky! Jack climbs and climbs. At the top, he finds a giant's castle. In the castle there is a hen that lays golden eggs.",
              "The giant comes home. 'Fee, fi, fo, fum!' he shouts. Jack hides. When the giant sleeps, Jack takes the golden hen and runs to the beanstalk.",
              "The giant wakes up and runs after him. Jack climbs down fast and cuts the beanstalk with an axe. The giant falls, and Jack and his mother are safe. With the golden hen, they are never poor again."
            ], tip: "生词提示:bean 豆子 / beanstalk 豆茎 / giant 巨人 / hen 母鸡 / axe 斧头" }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "What does Jack take from the giant's castle?(杰克从巨人城堡里拿走了什么?)",
            options: [
              "A magic sword.",
              "A hen that lays golden eggs.",
              "Five magic beans.",
              "The giant's gold crown."
            ], answer: 1,
            demoSteps: [
              { text: "杰克在城堡里发现了什么宝贝?趁巨人睡着他拿走了什么?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "城堡里", text: "会下金蛋的母鸡" },
                { head: "巨人睡着", text: "Jack takes the hen" },
                { head: "结果", text: "不再贫穷" }
              ] } },
              { text: "原文说 there is a hen that lays golden eggs,杰克把它拿走了。", emoji: "🐔" }
            ],
            explain: "B 正确。杰克在巨人城堡里发现一只会下金蛋的母鸡,趁巨人睡着时拿走了它,从此不再贫穷。",
            explainSteps: [
              { text: "城堡里有只会下金蛋的母鸡。", emoji: "🐔" },
              { text: "杰克趁巨人睡觉拿走母鸡,选 B!", emoji: "✅" },
              { text: "杰克机智又勇敢,靠自己改变了命运。勇气和智慧,是最好的宝物。", emoji: "🎯" }
            ] }
        }
      ]
    },

    // ================== 语文 ==================
    {
      subject: "chinese", icon: "📝", title: "语文 · 名著《西游记》导读", minutes: 40,
      units: [
        {
          name: "动画课堂 · 一部神魔小说的大世界",
          blocks: [
            { type: "lesson", title: "▶ 作者、情节、主题一次看懂", steps: [
              { text: "《西游记》是明代吴承恩写的长篇神魔小说,四大名著之一。讲唐僧师徒四人西天取经、历经八十一难的故事。", emoji: "🐒" },
              { text: "四位主角性格鲜明:孙悟空神通广大、嫉恶如仇;猪八戒憨厚贪吃、爱耍小聪明;沙僧忠厚老实;唐僧慈悲坚定。", emoji: "👥", scene: { type: "clues", items: [
                { head: "孙悟空", text: "神通·嫉恶如仇" },
                { head: "猪八戒", text: "憨厚·贪吃" },
                { head: "沙僧", text: "忠厚老实" }
              ] } },
              { text: "经典情节要记牢:大闹天宫、三打白骨精、真假美猴王、三借芭蕉扇、女儿国……个个精彩。", emoji: "🔥", scene: { type: "clues", items: [
                { head: "大闹天宫", text: "反抗天庭" },
                { head: "三打白骨精", text: "火眼金睛" },
                { head: "三借芭蕉扇", text: "过火焰山" }
              ] } },
              { text: "主题:表面是神魔斗法,深层歌颂了不畏艰险、勇往直前的精神,也讽刺了社会的种种弊病。", emoji: "🎯" },
              { text: "读名著三抓:抓作者朝代、抓主要人物性格、抓经典情节。这是名著阅读题的必考「三件套」!", emoji: "📚" }
            ] }
          ],
          q: { type: "choice", points: 10, voice: "zh",
            q: "关于《西游记》,下列说法错误的一项是:",
            options: [
              "作者是明代的吴承恩,是四大名著之一",
              "「三打白骨精」中,是猪八戒用火眼金睛识破了妖怪",
              "孙悟空的性格特点是神通广大、嫉恶如仇",
              "小说讲的是唐僧师徒西天取经、历经八十一难的故事"
            ], answer: 1,
            demoSteps: [
              { text: "「火眼金睛」是谁的本领?识破白骨精的是孙悟空还是猪八戒?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "火眼金睛", text: "孙悟空独有" },
                { head: "三打白骨精", text: "悟空识破" },
                { head: "八戒", text: "反而常受骗" }
              ] } },
              { text: "找出人物张冠李戴的那一句。", emoji: "🎭" }
            ],
            explain: "B 错。「火眼金睛」是孙悟空的本领,识破白骨精的是孙悟空,不是猪八戒。其余三项都正确。",
            explainSteps: [
              { text: "火眼金睛是孙悟空在八卦炉里炼出来的独门本领。", emoji: "🐒" },
              { text: "三打白骨精中是悟空识破妖怪,八戒反而被骗还进谗言,B 张冠李戴!", emoji: "❌" },
              { text: "A 作者、C 性格、D 情节都对。选 B。名著题最爱考「人物与事件的对应」!", emoji: "✅" }
            ] }
        },
        {
          name: "动画课堂 · 名著阅读方法:精读与跳读",
          blocks: [
            { type: "lesson", title: "▶ 厚厚一本书,怎么读才高效", steps: [
              { text: "《西游记》那么厚,一字不落地读太慢。名著阅读要学会「精读」和「跳读」结合。", emoji: "📖" },
              { text: "精读:对精彩的、重要的章节仔细读,品味语言、揣摩人物。比如「三打白骨精」就值得精读。", emoji: "🔬", scene: { type: "clues", items: [
                { head: "精读", text: "精彩章节细品" },
                { head: "跳读", text: "次要内容略过" },
                { head: "结合", text: "有详有略" }
              ] } },
              { text: "跳读:对不太重要或重复的内容(比如反复的打斗描写),可以快速略过,抓住主要情节。", emoji: "⏭️" },
              { text: "读名著还要做点「小动作」:做批注、写读书笔记、给人物列性格卡片,读完印象更深。", emoji: "✍️" },
              { text: "口诀:精读品细节,跳读抓主干;边读边批注,收获才丰满。这样读名著,又快又有味!", emoji: "🎯" }
            ] }
          ],
          q: { type: "fill", points: 10, voice: "zh",
            q: "阅读《西游记》这样的长篇名著,对精彩重要的章节要仔细品读,这种读法叫做__________。(填两个字)",
            placeholder: "填两个字",
            accept: ["精读", "精读。", "细读"],
            demoSteps: [
              { text: "对「精彩重要」的内容「仔细」读,叫什么读法?和「跳读」相对。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "仔细读", text: "精读" },
                { head: "略过读", text: "跳读" },
                { head: "填空", text: "仔细的那种" }
              ] } },
              { text: "「精」细地读——两个字。", emoji: "🔬" }
            ],
            explain: "答案:精读。对精彩、重要的章节仔细品读叫精读;对次要内容快速略过叫跳读。二者结合,读名著又快又有收获。",
            explainSteps: [
              { text: "仔细品读精彩章节 = 精读。", emoji: "🔬" },
              { text: "与之相对的是「跳读」(略读次要内容)。", emoji: "⏭️" },
              { text: "答「精读」。精读+跳读结合,是读厚书的好方法!", emoji: "✅" }
            ] }
        },
        {
          name: "今日彩蛋 · 名著打卡",
          blocks: [
            { type: "rule", title: "📖 睡前 20 分钟名著时间", html: "明天是<b>第三周周测复习日</b>!今晚给<b>《西游记》</b>里你最喜欢的一个人物做张「性格卡片」:<b>名字 + 三个性格词 + 一个代表情节</b>。<br>比如「孙悟空:神通广大、嫉恶如仇、有点急躁——代表情节:三打白骨精」。这就是最好的名著复习!" }
          ],
          q: null
        }
      ]
    },

    // ================== 地理 ==================
    {
      subject: "geography", icon: "🌍", title: "地理 · 天气与气候", minutes: 25,
      units: [
        {
          name: "动画课堂 · 天气和气候,别再傻傻分不清",
          blocks: [
            { type: "lesson", title: "▶ 一个看当下,一个看长期", steps: [
              { text: "「今天真冷」说的是天气,「昆明四季如春」说的是气候。这俩最容易混,今天彻底分清!", emoji: "🌤️" },
              { text: "天气:某地短时间内的大气状况(阴晴、风雨、冷热)。特点是「多变」——早上晴,下午可能就下雨。", emoji: "⛅", scene: { type: "clues", items: [
                { head: "天气", text: "短时间" },
                { head: "特点", text: "多变" },
                { head: "例", text: "今天有雨" }
              ] } },
              { text: "气候:某地多年的天气平均状况。特点是「稳定」——一个地方的气候一般年年相似,不会突然改变。", emoji: "🌡️", scene: { type: "clues", items: [
                { head: "气候", text: "多年平均" },
                { head: "特点", text: "相对稳定" },
                { head: "例", text: "热带雨林全年高温多雨" }
              ] } },
              { text: "一句话区分:天气是「短时、多变」(今天怎样),气候是「长期、稳定」(常年怎样)。", emoji: "⚖️" },
              { text: "判断技巧:句子里有「今天、明天、刚才」多是天气;有「常年、四季、多年」多是气候。看时间词!", emoji: "🎯" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "下列描述中,属于「气候」而不是「天气」的一项是:",
            options: [
              "今天风和日丽,适合出游",
              "明天有雷阵雨,记得带伞",
              "我们这里常年温和湿润,四季分明",
              "刚才下了一阵大雨"
            ], answer: 2,
            demoSteps: [
              { text: "找时间词:哪句讲的是「短时间的当下」,哪句讲的是「长期的常态」?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "今天/明天/刚才", text: "→ 天气" },
                { head: "常年/四季", text: "→ 气候" },
                { head: "看时间词", text: "定天气或气候" }
              ] } },
              { text: "「常年」「四季分明」说的是长期稳定的状况,是天气还是气候?", emoji: "🌡️" }
            ],
            explain: "C 正确。「常年温和湿润、四季分明」是多年的平均状况,属于气候。A、B、D 都带「今天/明天/刚才」,是短时的天气。",
            explainSteps: [
              { text: "A「今天」、B「明天」、D「刚才」都是短时间,是天气。", emoji: "⛅" },
              { text: "C「常年」「四季分明」是长期稳定的状况,是气候,选 C!", emoji: "✅" },
              { text: "记住看时间词:短时多变是天气,长期稳定是气候。", emoji: "🎯" }
            ] }
        }
      ]
    }
  ]
};
