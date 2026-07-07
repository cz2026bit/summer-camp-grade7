// ============ 第 6 关 ============
window.DAYS = window.DAYS || {};

window.DAYS[6] = {
  day: 6,
  title: "第 6 关 · 减法变形记",
  estimate: "四科约 2~3 小时 · 共 7 道思考题(含 1 道 BOSS 题)",
  sections: [
    // ================== 数学 ==================
    {
      subject: "math", icon: "🔢", title: "数学 · 有理数减法", minutes: 50,
      units: [
        {
          name: "动画课堂 1 · 减法的变身咒语",
          blocks: [
            { type: "lesson", title: "▶ 全世界的减法都能变成加法", steps: [
              { text: "昨天练成了加法拔河术,今天更酷:把所有减法都变成加法,一招通吃!", emoji: "🪄" },
              { text: "咒语只有一句:减去一个数,等于加上它的相反数。a − b = a + (−b)。", emoji: "📜", scene: { type: "clues", items: [
                { head: "变身前", text: "a − b" },
                { head: "咒语", text: "减号变加号" },
                { head: "变身后", text: "a + (−b)" }
              ] } },
              { text: "小试牛刀:3 − 5 = 3 + (−5),拔河:负方力气大,赢 2,结果 −2。小学不敢做的「小减大」,现在轻松拿下!", emoji: "💪", scene: { type: "numberline", from: 3, to: -2 } },
              { text: "重头戏:5 − (−3) = 5 + 3 = 8。减去一个负数,等于加正数!在数轴上,你从 5 反而向右跳到了 8。", emoji: "🤯", scene: { type: "numberline", from: 5, to: 8 } },
              { text: "为什么减负数会变大?想想生活:取消一笔欠债(减去 −3),你的財富是不是变多了?数学和生活永远讲得通。", emoji: "💡" }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 2 · 温差:减法的看家本领",
          blocks: [
            { type: "lesson", title: "▶ 天气预报员的秘密武器", steps: [
              { text: "减法在生活里最常见的任务:算「差距」。温差、高度差、分数差,全是它的地盘。", emoji: "🌡️" },
              { text: "公式:温差 = 最高温 − 最低温。比如最高 8℃,最低 2℃,温差 8 − 2 = 6℃,很简单。", emoji: "📏", scene: { type: "thermo", from: 8, to: 2 } },
              { text: "有负数就要小心了:最高 3℃,最低 −4℃,温差 = 3 − (−4) = 3 + 4 = 7℃。跨过 0℃ 的时候,两段距离要加起来!", emoji: "⚠️", scene: { type: "thermo", from: 3, to: -4 } },
              { text: "数轴验证:3 和 −4 之间隔着多少格?从 −4 数到 3,正好 7 格。减法算的就是数轴上两点的距离。", emoji: "📐", scene: { type: "numberline", from: -4, to: 3 } },
              { text: "最易错点:别把 3 − (−4) 写成 3 − 4!看到「减负数」,立刻念咒语:变加法!", emoji: "🪄" }
            ] },
            { type: "numberline" }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "请判断这三句话,哪些是对的?①(−4) − (−6) = 2 ②比 −1 小 3 的数是 −4 ③两个数的差一定比被减数小",
            options: ["①②③都对", "只有①②对", "只有③对", "只有①对"], answer: 1,
            demoSteps: [
              { text: "第①句念咒语:减去 −6 等于加上什么?", emoji: "🪄", scene: { type: "clues", items: [
                { head: "原式", text: "(−4) − (−6)" },
                { head: "变身", text: "(−4) + 6" },
                { head: "拔河", text: "谁赢?赢多少?" }
              ] } },
              { text: "第②句:「比 −1 小 3」就是从 −1 向左走 3 格,走到哪?", emoji: "👈", scene: { type: "numberline", from: -1, to: -4 } },
              { text: "第③句找反例:5 − (−3) 的差比 5 大还是小?", emoji: "🧪" }
            ],
            explain: "①对:(−4) − (−6) = (−4) + 6 = 2;②对:−1 − 3 = −4;③错:减去负数时差会变大,如 5 − (−3) = 8 > 5。",
            explainSteps: [
              { text: "第①句:变身!(−4) − (−6) = (−4) + 6,拔河正方赢 2,等于 2,正确!", emoji: "✅", scene: { type: "numberline", from: -4, to: 2 } },
              { text: "第②句:比 −1 小 3,就是 −1 − 3 = −4,在数轴上从 −1 向左走 3 格,正确!", emoji: "👈", scene: { type: "numberline", from: -1, to: -4 } },
              { text: "第③句是陷阱:小学时差总比被减数小,但现在减去负数会变大!5 − (−3) = 8,比 5 还大,错!", emoji: "🤯", scene: { type: "numberline", from: 5, to: 8 } },
              { text: "答案:只有①②对。进入负数世界后,小学的很多「常识」都要重新检验——这正是数学升级的乐趣!", emoji: "🎯" }
            ] }
        },
        {
          name: "🔥 BOSS 挑战 · 珠峰与吐鲁番",
          blocks: [
            { type: "text", html: "💪 <b>BOSS 战规则</b>:真实地理数据!珠穆朗玛峰峰顶海拔约 +8849 米……好吧太大了,我们换个天气版。草稿纸准备!" }
          ],
          q: { type: "fill", points: 20, boss: true, voice: "zh",
            q: "天气实况:某日哈尔滨最高气温 5℃,最低气温 −7℃。这一天的温差是多少摄氏度?(直接填数字)",
            placeholder: "例如: 10",
            accept: ["12", "12℃", "12度", "十二"],
            demoSteps: [
              { text: "写公式:温差 = 最高温 − 最低温,把数代进去。", emoji: "📏", scene: { type: "clues", items: [
                { head: "最高温", text: "5℃" },
                { head: "最低温", text: "−7℃" },
                { head: "列式", text: "5 − (−7)" }
              ] } },
              { text: "看到「减负数」,立刻念变身咒语!", emoji: "🪄" },
              { text: "不放心就画温度计:从 −7℃ 升到 5℃,要爬多少度?先爬到 0,再往上爬。", emoji: "🌡️", scene: { type: "thermo", from: -7, to: 5 } }
            ],
            explain: "温差 = 5 − (−7) = 5 + 7 = 12℃。跨越 0℃ 时,零下的 7 度和零上的 5 度要加在一起。",
            explainSteps: [
              { text: "列式:温差 = 最高温 − 最低温 = 5 − (−7)。", emoji: "1️⃣" },
              { text: "念咒语:减去 −7 等于加 7,变成 5 + 7 = 12。", emoji: "🪄" },
              { text: "用温度计验证:从 −7 爬到 0 要 7 度,从 0 爬到 5 要 5 度,7 + 5 = 12,对上了!", emoji: "🌡️", scene: { type: "thermo", from: -7, to: 5 } },
              { text: "温差 12℃!这类题中考还会考「山顶山脚温差」「时差」,套路一模一样:差 = 大 − 小,减负变加。", emoji: "🏆" }
            ] }
        }
      ]
    },

    // ================== 英语 ==================
    {
      subject: "english", icon: "📚", title: "英语 · There be:房间里有什么", minutes: 45,
      units: [
        {
          name: "单词训练营 · 房间家具 12 个(点卡片听发音!)",
          blocks: [
            { type: "text", html: "🎧 今天的单词都在<span class='hl'>家里</span>!学完就能用英语介绍自己的房间。点卡片听发音,跟读 3 遍。" },
            { type: "flashcards", words: [
              { word: "room", phonetic: "/ruːm/", cn: "房间", sentence: "My room is small but clean." },
              { word: "bedroom", phonetic: "/ˈbedruːm/", cn: "卧室", sentence: "I sleep in my bedroom." },
              { word: "kitchen", phonetic: "/ˈkɪtʃɪn/", cn: "厨房", sentence: "Mum cooks in the kitchen." },
              { word: "bathroom", phonetic: "/ˈbɑːθruːm/", cn: "浴室", sentence: "The bathroom is upstairs." },
              { word: "sofa", phonetic: "/ˈsəʊfə/", cn: "沙发", sentence: "Dad sits on the sofa." },
              { word: "table", phonetic: "/ˈteɪbl/", cn: "桌子", sentence: "Dinner is on the table." },
              { word: "chair", phonetic: "/tʃeə/", cn: "椅子", sentence: "There are four chairs." },
              { word: "bed", phonetic: "/bed/", cn: "床", sentence: "My cat sleeps on my bed." },
              { word: "lamp", phonetic: "/læmp/", cn: "台灯", sentence: "The lamp is next to the bed." },
              { word: "window", phonetic: "/ˈwɪndəʊ/", cn: "窗户", sentence: "Open the window, please." },
              { word: "door", phonetic: "/dɔː/", cn: "门", sentence: "Close the door behind you." },
              { word: "wall", phonetic: "/wɔːl/", cn: "墙", sentence: "There is a photo on the wall." }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 · There be:英语的「有」字诀",
          blocks: [
            { type: "lesson", title: "▶ 「某地有某物」的标准说法", steps: [
              { text: "中文说「桌上有一本书」,英语不能说 The table has a book——要用 There be 句型:There is a book on the table.", emoji: "📖" },
              { text: "is 还是 are?看 be 后面的名词:一个用 is,多个用 are。There is a lamp. / There are four chairs.", emoji: "🔢", scene: { type: "match", groups: [
                { head: "There is", items: ["a lamp", "a photo"] },
                { head: "There are", items: ["four chairs", "two windows"] }
              ] } },
              { text: "大招来了——就近原则:There ___ a cat and two dogs. 空格后最近的是 a cat(单数),所以用 is!be 动词只看离它最近的那个名词。", emoji: "📍", scene: { type: "clues", items: [
                { head: "就近原则", text: "看最近的名词" },
                { head: "a cat 在前", text: "用 is" },
                { head: "two dogs 在前", text: "用 are" }
              ] } },
              { text: "否定和提问都在 be 上做文章:There isn't a TV in my room. / Is there a TV? — Yes, there is. / No, there isn't.", emoji: "🔄" },
              { text: "There be 和 have 的分工:「某地存在某物」用 There be;「某人拥有某物」才用 have。I have a lamp(我拥有)≠ There is a lamp in my room(房里存在)。", emoji: "⚖️" }
            ] },
            { type: "chant", lines: ["There be 表示「有」,", "is 还是 are 看后头;", "两样东西一起来,", "就近原则解千愁!"] }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "选出完全正确的一句:",
            options: [
              "There are a cat and two dogs in the garden.",
              "There is a cat and two dogs in the garden.",
              "There have a cat and two dogs in the garden.",
              "There is two dogs and a cat in the garden."
            ], answer: 1,
            demoSteps: [
              { text: "先排除「假 There be」:There have 这种说法存在吗?", emoji: "🚫", scene: { type: "clues", items: [
                { head: "There be", text: "表示存在" },
                { head: "have", text: "表示拥有" },
                { head: "混搭", text: "There have ❌" }
              ] } },
              { text: "剩下的句子用就近原则:be 动词后面最近的名词是单数还是复数?", emoji: "📍" }
            ],
            explain: "B 正确:be 后最近的是 a cat(单数),就近原则用 is。A 错:最近的是单数却用了 are;C 错:There have 不存在;D 错:最近的是 two dogs(复数),应用 are。",
            explainSteps: [
              { text: "C 句先淘汰:英语里没有 There have,「有」的存在感只归 There be!", emoji: "🚫" },
              { text: "A、B 句 be 后面最近的都是 a cat(单数):就近原则要用 is,所以 A 错 B 对!", emoji: "📍" },
              { text: "D 句反过来:最近的是 two dogs(复数),该用 are 却用了 is,错。", emoji: "🐕" },
              { text: "答案 B!就近原则一句话:be 动词是个「近视眼」,只看得清离它最近的名词。", emoji: "👓" },
              { text: "明天开始每天用一句 There be 描述你的房间,一周后你会脱口而出!", emoji: "🎯" }
            ] }
        },
        {
          name: "阅读侦探 · A Room with a Secret",
          blocks: [
            { type: "text", html: "🕵️ <b>侦探任务</b>:这个房间里藏着一个秘密!注意短文里每个 There is / There are 说了什么。" },
            { type: "reading", speakable: true, title: "A Room with a Secret", paragraphs: [
              "Welcome to my room! There is a bed, a desk and a small sofa in it. On the desk, there are two lamps: a big one and a small one.",
              "My friends always ask, \"Why do you need two lamps?\"",
              "Here is the secret: the small lamp is not for me. Every night, my cat Dudu sleeps in a box under my desk. The box is her little house, and the small lamp is her sun.",
              "\"Without the small lamp, Dudu can't sleep well,\" I tell my friends. They all say Dudu is the luckiest cat in the world."
            ], tip: "生词提示:secret 秘密 / without 没有 / luckiest 最幸运的" }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "推理题:Why are there TWO lamps on the desk?(桌上为什么有两盏台灯?)",
            options: [
              "Because one lamp is broken.",
              "Because the room is too dark.",
              "Because the small lamp is for the cat Dudu.",
              "Because the writer likes buying lamps."
            ], answer: 2,
            demoSteps: [
              { text: "问题问「为什么有两盏灯」,原文哪一段专门解释了 the secret?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "线索句", text: "Here is the secret" },
                { head: "小灯", text: "not for me" },
                { head: "那是给谁的?", text: "往下读" }
              ] } },
              { text: "找到「the small lamp is her sun」——her 指的是谁?", emoji: "☀️" }
            ],
            explain: "原文:the small lamp is not for me… the small lamp is her sun——小台灯是猫咪 Dudu 的「太阳」,没有它 Dudu 睡不好。两盏灯的秘密就是一盏属于猫。",
            explainSteps: [
              { text: "定位关键段:Here is the secret 之后,作者亲口揭秘。", emoji: "🔍" },
              { text: "the small lamp is not for me——小灯不是给作者用的;the small lamp is her sun——是猫咪的小太阳!", emoji: "☀️" },
              { text: "所以两盏灯 = 一盏自己用 + 一盏给猫当太阳,选 C!", emoji: "✅" },
              { text: "A 灯坏了、B 房间暗、D 爱买灯,原文统统没说——不选没有证据的选项!", emoji: "❌" },
              { text: "六关下来你已经掌握阅读三板斧:找 so/because、盯转折、看 secret/but 后面的解释句。继续保持!", emoji: "🗡️" }
            ] }
        }
      ]
    },

    // ================== 语文 ==================
    {
      subject: "chinese", icon: "📝", title: "语文 · 仿写高手与名著人物廊", minutes: 40,
      units: [
        {
          name: "动画课堂 · 仿写三步法:像不像,三分样",
          blocks: [
            { type: "lesson", title: "▶ 仿写不是抄写,是照着骨架长新肉", steps: [
              { text: "仿写题是初一作文的敲门砖:给你一个例句,照它的样子再造一句。得分秘诀是「三照」。", emoji: "✍️" },
              { text: "一照结构:例句「如果我是阳光,我将照亮所有黑暗」是「如果我是……我将……」的句式,你的句子骨架必须一样。", emoji: "🦴", scene: { type: "clues", items: [
                { head: "照结构", text: "句式一致" },
                { head: "照修辞", text: "比喻对比喻" },
                { head: "照内容", text: "主题要相配" }
              ] } },
              { text: "二照修辞:例句用了比喻,你也要用比喻;例句是排比,你也要排比。修辞是句子的「花纹」,花纹得配套。", emoji: "🎨" },
              { text: "三照内容:例句歌颂奉献,你写「如果我是蚊子,我将吸干所有血」——结构对了,画风全毁!内容的情感基调必须一致。", emoji: "🧭" },
              { text: "示范:「如果我是清泉,我将滋润干渴的土地。」结构✓ 比喻✓ 奉献主题✓——三照齐全,满分!", emoji: "💯" }
            ] }
          ],
          q: { type: "choice", points: 10, voice: "zh",
            q: "例句:「书是钥匙,能开启智慧之门。」下列仿写最恰当的一项是:",
            options: [
              "书是我最好的朋友,我很喜欢它。",
              "书是阶梯,能帮助人们登上理想的高峰。",
              "我爱读书,书让我知道了很多知识。",
              "书是垃圾,浪费我们的时间。"
            ], answer: 1,
            demoSteps: [
              { text: "先拆例句骨架:「书是××,能……」——一个比喻 + 一个作用。", emoji: "🦴", scene: { type: "clues", items: [
                { head: "骨架", text: "书是××,能……" },
                { head: "花纹", text: "比喻" },
                { head: "基调", text: "赞美书" }
              ] } },
              { text: "拿骨架逐个套选项:哪句结构、修辞、情感三样全对上?", emoji: "🔍" }
            ],
            explain: "B 正确:「书是阶梯」保持比喻,「能帮助人们登上理想的高峰」延续「能+作用」结构,情感同为赞美。A、C 丢了比喻和句式;D 结构虽像,情感却完全相反。",
            explainSteps: [
              { text: "A 句「书是我最好的朋友」有点比喻的意思,但后半句「我很喜欢它」丢了「能……」的结构,不合格。", emoji: "❌" },
              { text: "B 句:书是阶梯(比喻✓),能帮人登上高峰(结构✓),赞美书(基调✓)——三照齐全!", emoji: "✅" },
              { text: "C 句连比喻都没有,只是大白话;D 句结构最像,但把书骂了一顿,情感基调背道而驰,最具迷惑性!", emoji: "🎭" },
              { text: "记住:仿写评分看三照——结构、修辞、情感,缺一都要扣分。", emoji: "🎯" }
            ] }
        },
        {
          name: "动画课堂 · 《朝花夕拾》人物廊",
          blocks: [
            { type: "lesson", title: "▶ 一周阅读大盘点:三位改变鲁迅的人", steps: [
              { text: "恩恩这几晚已经读了大半本《朝花夕拾》!今天把书里最重要的三个人物请出来排排坐。", emoji: "🖼️" },
              { text: "一号人物长妈妈:没文化、爱唠叨、睡觉摆「大」字,却跑遍书店给鲁迅买来《山海经》。粗俗外表下,是一颗淳朴热诚的心。", emoji: "📚", scene: { type: "clues", items: [
                { head: "长妈妈", text: "保姆" },
                { head: "关键事件", text: "买《山海经》" },
                { head: "品质", text: "淳朴 热心" }
              ] } },
              { text: "二号人物藤野先生:鲁迅在日本学医时的老师,帮他逐字修改讲义,没有一点民族偏见。鲁迅把他的照片挂在书桌前激励自己一生。", emoji: "👨‍🏫", scene: { type: "clues", items: [
                { head: "藤野先生", text: "日本医学教授" },
                { head: "关键事件", text: "修改讲义" },
                { head: "品质", text: "严谨 无偏见" }
              ] } },
              { text: "三号人物寿镜吾:三味书屋的私塾先生,方正、质朴、博学,读书入神时会微笑着摇头晃脑——严厉中透着可爱。", emoji: "🎓" },
              { text: "读人物记「一人一事一品质」:名字 + 代表事件 + 性格标签,考试怎么考都不怕!", emoji: "🏷️" }
            ] }
          ],
          q: { type: "choice", points: 10, voice: "zh",
            q: "下列《朝花夕拾》人物与事件、评价搭配错误的一项是:",
            options: [
              "长妈妈——为鲁迅买来《山海经》——淳朴热心",
              "藤野先生——帮鲁迅修改讲义——治学严谨、没有民族偏见",
              "寿镜吾——命令鲁迅背书才许去看五猖会——方正质朴",
              "长妈妈——睡觉摆「大」字——有些粗俗却真诚"
            ], answer: 2,
            demoSteps: [
              { text: "调出「一人一事一品质」档案:长妈妈的事件、藤野的事件分别是什么?", emoji: "🏷️", scene: { type: "clues", items: [
                { head: "长妈妈", text: "买《山海经》" },
                { head: "藤野", text: "改讲义" },
                { head: "背书事件", text: "是谁干的?" }
              ] } },
              { text: "《五猖会》里命令背书的那个人,是私塾先生还是……再想想。", emoji: "🤔" }
            ],
            explain: "C 错:《五猖会》中命令鲁迅背完书才许去看会的是他的父亲,不是私塾先生寿镜吾。其余三项人物、事件、评价都对应正确。",
            explainSteps: [
              { text: "A、D 都是长妈妈:买《山海经》显真诚,摆「大」字显粗俗,一人两面,都正确。", emoji: "✅" },
              { text: "B 藤野先生改讲义,严谨无偏见,正确。", emoji: "✅" },
              { text: "C 项张冠李戴:逼背书的是父亲!《五猖会》批评的正是父亲那种不顾孩子天性的教育,寿镜吾是三味书屋里那位摇头晃脑的先生。", emoji: "🎭" },
              { text: "所以选 C。名著题最爱「张冠李戴」:把甲的事安到乙头上——用「一人一事一品质」档案一对照,立刻现形!", emoji: "🎯" }
            ] }
        },
        {
          name: "今日彩蛋 · 名著打卡",
          blocks: [
            { type: "rule", title: "📖 睡前 20 分钟名著时间", html: "明天是第一周的<b>周测复习日</b>!今晚不布置新篇目,把这一周读过的《朝花夕拾》篇目翻一翻:<b>《从百草园到三味书屋》《阿长与〈山海经〉》《五猖会》《藤野先生》</b>。<br>合上书问自己:每篇写了谁?发生了什么?我记住了哪个细节?——这就是最好的复习。" }
          ],
          q: null
        }
      ]
    },

    // ================== 地理 ==================
    {
      subject: "geography", icon: "🌍", title: "地理 · 给地球画格子", minutes: 25,
      units: [
        {
          name: "动画课堂 · 经线纬线:地球的座位表",
          blocks: [
            { type: "lesson", title: "▶ 怎么说清你在地球上的位置?", steps: [
              { text: "轮船在茫茫大海上求救,怎么告诉救援队自己的位置?「我在很多水的地方」可不行!人类的办法:给地球画格子。", emoji: "🆘" },
              { text: "横着画的圈叫纬线:一圈一圈都是圆,赤道是最大的一圈,越往南北两极,圈越小,到极点缩成一个点。", emoji: "🪗", scene: { type: "clues", items: [
                { head: "纬线", text: "横着的圆圈" },
                { head: "赤道", text: "最大的纬线" },
                { head: "越往两极", text: "圈越小" }
              ] } },
              { text: "竖着画的线叫经线:每一条都连接南北两极,是半个圆。神奇的是——所有经线一样长!", emoji: "🍈", scene: { type: "clues", items: [
                { head: "经线", text: "连接两极的半圆" },
                { head: "长度", text: "全部相等" },
                { head: "方向", text: "指示南北" }
              ] } },
              { text: "经线+纬线=经纬网,就像教室的座位表:「第 3 排第 5 列」能锁定一个同学,「东经 120 度、北纬 30 度」就能锁定地球上任何一点。", emoji: "🎯" },
              { text: "想一想:为什么纬线圈有大有小,经线却全部等长?提示——切西瓜:横切和竖着对半切,切面一样吗?", emoji: "🍉" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "思考题:为什么所有经线的长度都相等,而纬线的长度却不相等?",
            options: [
              "因为经线画得比较认真,纬线画得随意",
              "因为经线都是连接南北两极的半圆(大小一样),纬线是平行于赤道的圆(离赤道越远圈越小)",
              "因为地球是方的,横竖不一样",
              "这只是规定,没有原因"
            ], answer: 1,
            demoSteps: [
              { text: "想象切西瓜:竖着过「瓜蒂」对半切,每一刀的切面一样大吗?", emoji: "🍉", scene: { type: "clues", items: [
                { head: "竖切过蒂", text: "刀刀一样大" },
                { head: "横着切", text: "越靠两头越小" },
                { head: "对应", text: "经线 vs 纬线" }
              ] } },
              { text: "把西瓜换成地球:「瓜蒂」是两极,竖切的边就是经线,横切的圈就是纬线。", emoji: "🌍" }
            ],
            explain: "经线全都通过南北两极,是同样大小的「竖切面」的边,所以等长;纬线是垂直于地轴的「横切面」的圆,只有过球心的赤道最大,越靠近两极切出的圆越小,所以不等长。",
            explainSteps: [
              { text: "切西瓜实验:竖着过瓜蒂对半切,每刀都经过「最宽处」,切面一样大——所以每条经线一样长。", emoji: "🍉" },
              { text: "横着切呢?中间那刀(赤道)切面最大,越靠两头切面越小——所以纬线圈大小不一。", emoji: "🪗" },
              { text: "本质区别:经线都过球心的「最大圆」的一半;纬线里只有赤道过球心,其他都是「小圆」。选 B!", emoji: "✅" },
              { text: "地理学习的钥匙和历史一样:多问一个为什么,用生活里的模型(切西瓜!)想通它,就再也不会忘。", emoji: "🎯" }
            ] }
        }
      ]
    }
  ]
};
