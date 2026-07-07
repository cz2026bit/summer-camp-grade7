// ============ 第 2 关 ============
window.DAYS = window.DAYS || {};

window.DAYS[2] = {
  day: 2,
  title: "第 2 关 · 数轴上的世界",
  estimate: "四科约 2~3 小时 · 共 7 道思考题(含 1 道 BOSS 题)",
  sections: [
    // ================== 数学 ==================
    {
      subject: "math", icon: "🔢", title: "数学 · 有理数与数轴", minutes: 50,
      units: [
        {
          name: "动画课堂 1 · 有理数大家族",
          blocks: [
            { type: "lesson", title: "▶ 给所有认识的数发身份证", steps: [
              { text: "昨天认识了负数,今天给所有数排家谱。第一大家族:整数,包括正整数、0 和负整数。", emoji: "🔢" },
              { text: "第二大家族:分数,所有能写成分数的数都算,比如 1/2、−0.5、3.25,小数也是分数变的装。", emoji: "🧩" },
              { text: "整数和分数合在一起,有一个响亮的名字——有理数。初一第一章的主角就是它!", emoji: "👑", scene: { type: "clues", items: [
                { head: "整数", text: "正整数、0、负整数" },
                { head: "分数", text: "含小数,如 −0.5" },
                { head: "有理数", text: "整数 + 分数" }
              ] } },
              { text: "考试最爱挖的坑:0 是整数,也是有理数,但它既不是正数也不是负数。", emoji: "⚠️" },
              { text: "再挖一个坑:−0.5 是负数,也是分数,所以它也是有理数。负数可不只有负整数哦!", emoji: "🕳️" }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 2 · 数轴:有理数的家",
          blocks: [
            { type: "lesson", title: "▶ 每个有理数都有一个座位", steps: [
              { text: "昨天我们认识了数轴的三要素:原点、正方向、单位长度,三个缺一不可。", emoji: "📏", scene: { type: "numberline", from: 0, to: 3 } },
              { text: "不光整数,分数和小数也能在数轴上找到座位。比如 −2.5,就住在 −2 和 −3 的正中间。", emoji: "🏠", scene: { type: "numberline", from: 0, to: -2.5 } },
              { text: "反过来,数轴上每一个点,都对应着一个数。点和数,一一对应,这是数轴最了不起的地方。", emoji: "🤝" },
              { text: "在数轴上移动就是加减法的雏形:向右走数变大,向左走数变小。记住这个感觉,后面学加减法就轻松了。", emoji: "🚶", scene: { type: "numberline", from: -4, to: 4 } }
            ] },
            { type: "numberline" }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "请判断这三句话,哪些是对的?①所有整数都是有理数 ②0.5 不是有理数,因为它不是整数 ③数轴上,原点右边 2.5 个单位长度的点表示 +2.5",
            options: ["①②③都对", "只有①③对", "只有②对", "只有①对"], answer: 1,
            demoSteps: [
              { text: "先画有理数的家谱:整数和分数,合起来才是有理数。", emoji: "🌳", scene: { type: "clues", items: [
                { head: "有理数", text: "一个大家族" },
                { head: "成员一", text: "整数" },
                { head: "成员二", text: "分数(含小数)" }
              ] } },
              { text: "判断 0.5:它能写成 1/2,是分数家族的,那它是不是有理数?", emoji: "🤔" },
              { text: "第③句自己在数轴上走一走:从原点向右 2.5 个单位,落在哪里?", emoji: "📏", scene: { type: "numberline", from: 0, to: 2.5 } }
            ],
            explain: "①对,整数是有理数的一部分;②错,0.5 = 1/2 是分数,分数也是有理数;③对,原点右边为正,距离 2.5 就是 +2.5。",
            explainSteps: [
              { text: "第①句:有理数 = 整数 + 分数,整数当然都是有理数,正确!", emoji: "✅" },
              { text: "第②句是陷阱:0.5 虽然不是整数,但它能写成 1/2,是分数!分数也是有理数家族的。", emoji: "🎭" },
              { text: "所以「不是整数就不是有理数」这个推理是错的,有理数还有分数这一半。", emoji: "🧩" },
              { text: "第③句:原点右边是正方向,走 2.5 个单位就是 +2.5,正确!", emoji: "📏", scene: { type: "numberline", from: 0, to: 2.5 } },
              { text: "答案:只有①③对。记住家谱:有理数 = 整数 + 分数,谁都别漏!", emoji: "🎯" }
            ] }
        },
        {
          name: "🔥 BOSS 挑战 · 数轴寻宝",
          blocks: [
            { type: "text", html: "💪 <b>BOSS 战规则</b>:拿出草稿纸画一条数轴,跟着题目一步步移动。答对得 <b>20 XP</b>!" }
          ],
          q: { type: "fill", points: 20, boss: true, voice: "zh",
            q: "寻宝行动:宝藏埋在数轴的某个点上。提示说:从表示 −3 的点出发,先向右移动 5 个单位,再向左移动 2 个单位,就到了宝藏点。宝藏点表示的数是多少?(直接填数字)",
            placeholder: "例如: 5",
            accept: ["0", "零"],
            demoSteps: [
              { text: "画一条数轴,找到出发点 −3,做好标记。", emoji: "📍", scene: { type: "numberline", from: 0, to: -3 } },
              { text: "第一步:向右移动 5 个单位。向右 = 变大,一格一格数过去。", emoji: "👉", scene: { type: "numberline", from: -3, to: 2 } },
              { text: "第二步:从新位置再向左移动 2 个单位。向左 = 变小。两步都走完,落在哪里?", emoji: "👈", scene: { type: "clues", items: [
                { head: "出发", text: "−3" },
                { head: "右移 5", text: "变大 5" },
                { head: "左移 2", text: "变小 2" }
              ] } }
            ],
            explain: "从 −3 向右 5 个单位:−3 → 2;再向左 2 个单位:2 → 0。宝藏在原点 0!",
            explainSteps: [
              { text: "第一步:从 −3 向右走 5 格:−2、−1、0、1、2,停在 2。", emoji: "1️⃣", scene: { type: "numberline", from: -3, to: 2 } },
              { text: "第二步:从 2 向左走 2 格:1、0,停在 0。", emoji: "2️⃣", scene: { type: "numberline", from: 2, to: 0 } },
              { text: "宝藏就埋在原点 0!这种「数轴上移动」的题,其实就是明天要学的加减法:−3 + 5 − 2 = 0。", emoji: "💎" },
              { text: "记住:向右 = 加,向左 = 减。你已经偷偷学会有理数加减法啦!", emoji: "🎯" }
            ] }
        }
      ]
    },

    // ================== 英语 ==================
    {
      subject: "english", icon: "📚", title: "英语 · 代词变身术", minutes: 45,
      units: [
        {
          name: "单词训练营 · 家庭成员 12 个(点卡片听发音!)",
          blocks: [
            { type: "text", html: "🎧 <b>玩法</b>:点击卡片<span class='hl'>听发音</span>并翻面,每个单词跟读 3 遍。今天的主题是「家人」,学完可以用英语介绍全家福啦!" },
            { type: "flashcards", words: [
              { word: "family", phonetic: "/ˈfæməli/", cn: "家庭", sentence: "I love my family." },
              { word: "parent", phonetic: "/ˈpeərənt/", cn: "父/母亲", sentence: "My parents are teachers." },
              { word: "father", phonetic: "/ˈfɑːðə/", cn: "爸爸", sentence: "My father is tall." },
              { word: "mother", phonetic: "/ˈmʌðə/", cn: "妈妈", sentence: "My mother cooks well." },
              { word: "brother", phonetic: "/ˈbrʌðə/", cn: "兄弟", sentence: "My brother is five." },
              { word: "sister", phonetic: "/ˈsɪstə/", cn: "姐妹", sentence: "My sister likes music." },
              { word: "grandfather", phonetic: "/ˈɡrænfɑːðə/", cn: "爷爷/外公", sentence: "My grandfather tells stories." },
              { word: "grandmother", phonetic: "/ˈɡrænmʌðə/", cn: "奶奶/外婆", sentence: "My grandmother makes cakes." },
              { word: "uncle", phonetic: "/ˈʌŋkl/", cn: "叔叔/舅舅", sentence: "My uncle drives a bus." },
              { word: "aunt", phonetic: "/ɑːnt/", cn: "阿姨/姑姑", sentence: "My aunt is a doctor." },
              { word: "cousin", phonetic: "/ˈkʌzn/", cn: "堂/表兄妹", sentence: "My cousin and I play games." },
              { word: "friend", phonetic: "/frend/", cn: "朋友", sentence: "She is my best friend." }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 · 代词的三副面孔",
          blocks: [
            { type: "lesson", title: "▶ 同一个人,换个位置就变身", steps: [
              { text: "中文里「我」走到哪都是「我」,但英语的「我」会变身:做主语是 I,做宾语变 me,表示「我的」变 my。", emoji: "🎭" },
              { text: "主格站在句子开头做主语:I like English. He is tall. 记住:动作的发出者用主格。", emoji: "🚩" },
              { text: "宾格站在动词或介词后面:Look at me. I like him. 记住:动作落在谁身上,谁就用宾格。", emoji: "🎯", scene: { type: "match", groups: [
                { head: "主格(做主语)", items: ["I", "he / she", "we / they"] },
                { head: "宾格(动词后)", items: ["me", "him / her", "us / them"] }
              ] } },
              { text: "「谁的」用形容词性物主代词,后面必须跟名词:my book、his father、their school。", emoji: "🏷️", scene: { type: "match", groups: [
                { head: "我的", items: ["my + 名词"] },
                { head: "他/她的", items: ["his / her + 名词"] },
                { head: "我们/他们的", items: ["our / their + 名词"] }
              ] } },
              { text: "最大的陷阱:she 是「她」,her 才是「她的」。This is her book,不能说 This is she book!", emoji: "⚠️" }
            ] },
            { type: "chant", lines: ["主格站句首,I you he she 领头;", "宾格动词后,me him her 挥手;", "物主带名词,my your his 不落单;", "记住变身术,代词不出错!"] }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "下面四个句子里,只有一句代词用得完全正确,恩恩来当小老师,把它找出来:",
            options: [
              "Me and Tom are good friends.",
              "This is she book.",
              "His father works in a hospital.",
              "Her likes apples very much."
            ], answer: 2,
            demoSteps: [
              { text: "做代词题,先问:这个代词在句子里站什么位置?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "句首做主语", text: "用主格" },
                { head: "动词后", text: "用宾格" },
                { head: "名词前", text: "用物主" }
              ] } },
              { text: "再检查:「谁的+东西」必须用物主代词加名词,she book 这种组合对吗?", emoji: "🏷️" },
              { text: "一句一句排查,只有一句全对。", emoji: "🎯" }
            ],
            explain: "C 正确:His father(他的爸爸)物主代词+名词。A 错:句首做主语要用 I,应为 Tom and I;B 错:she 是主格,「她的书」要用 her book;D 错:Her 是宾格/物主,做主语要用 She。",
            explainSteps: [
              { text: "A 句:Me 站在句首做主语,但 me 是宾格,主语必须用 I,应该说 Tom and I are good friends,错!", emoji: "❌" },
              { text: "B 句:she 是「她」,不是「她的」。「她的书」要说 her book,错!", emoji: "🎭" },
              { text: "C 句:His father,「他的」+名词,物主代词用法完全正确!", emoji: "✅" },
              { text: "D 句:Her 不能做主语,「她喜欢」要说 She likes,错。", emoji: "❌" },
              { text: "口诀再念一遍:主格站句首,宾格动词后,物主带名词。三副面孔别认错!", emoji: "🎯" }
            ] }
        },
        {
          name: "阅读侦探 · My Big Family",
          blocks: [
            { type: "text", html: "🕵️ <b>侦探任务</b>:读完短文有一道推理题,证据藏在字里行间。点 🔊 可以听全文朗读。" },
            { type: "reading", speakable: true, title: "My Big Family", paragraphs: [
              "Hi! I am Li Hua. There are six people in my family: my grandparents, my parents, my little brother and I.",
              "My grandfather loves plants. He waters his flowers every morning. My grandmother tells us funny stories after dinner, so my brother never wants to go to bed early.",
              "My father is a bus driver and my mother is a nurse. They are busy, but they cook dinner together every evening.",
              "My little brother is only four. He likes drawing. He draws our family on the wall, so my mother is angry, but she laughs at last, because in the picture, everyone is smiling."
            ], tip: "生词提示:grandparents 祖父母 / waters 浇水 / never 从不 / at last 最后 / smiling 微笑的" }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "推理题:Why does Li Hua's brother never want to go to bed early?(为什么弟弟从不想早睡?)",
            options: [
              "Because he likes drawing on the wall.",
              "Because grandmother's stories after dinner are fun.",
              "Because his parents cook dinner every evening.",
              "Because he is only four years old."
            ], answer: 1,
            demoSteps: [
              { text: "推理题的钥匙是连词 so:前面是原因,后面是结果。", emoji: "🔗", scene: { type: "clues", items: [
                { head: "原因", text: "so 前面那句" },
                { head: "结果", text: "so 后面那句" },
                { head: "方法", text: "回原文找 so" }
              ] } },
              { text: "回到原文找「never wants to go to bed early」,看看它前面连着哪句话。", emoji: "🔍" },
              { text: "别被其他选项带跑:画画、做饭都是别的段落的事。", emoji: "⚠️" }
            ],
            explain: "原文:My grandmother tells us funny stories after dinner, so my brother never wants to go to bed early——奶奶饭后讲有趣的故事,所以弟弟不想早睡。so 连接的因果就是答案。",
            explainSteps: [
              { text: "在原文里找到关键句:so my brother never wants to go to bed early。", emoji: "🔍" },
              { text: "so 的前面写着:My grandmother tells us funny stories after dinner——奶奶饭后讲故事。", emoji: "🔗" },
              { text: "因为故事有趣,所以不想睡觉,因果完全对上,选 B!", emoji: "✅" },
              { text: "A 是弟弟画画的事,和睡觉无关;C 是爸妈做饭;D 说他四岁,都不是原因。", emoji: "❌" },
              { text: "记住:看到 so、because,就像看到藏宝图上的红叉,答案就埋在那里!", emoji: "🗺️" }
            ] }
        }
      ]
    },

    // ================== 语文 ==================
    {
      subject: "chinese", icon: "📝", title: "语文 · 成语侦探与江上春潮", minutes: 40,
      units: [
        {
          name: "动画课堂 · 成语最深的坑:望文生义",
          blocks: [
            { type: "lesson", title: "▶ 这些成语,九成人都用错过", steps: [
              { text: "成语题最深的坑叫「望文生义」——只看字面猜意思,一猜就掉坑里。", emoji: "🕳️" },
              { text: "「首当其冲」:看字面像「冲在最前面」?错!它指最先受到攻击或遭遇灾难。", emoji: "⚠️", scene: { type: "clues", items: [
                { head: "字面", text: "冲在前面?" },
                { head: "真义", text: "最先受到冲击" },
                { head: "感情", text: "多指倒霉事" }
              ] } },
              { text: "「三人成虎」:不是三个人力气大如虎,而是谣言说的人多了,假的也被当成真的。", emoji: "🐯" },
              { text: "「曾几何时」:不是「很久以前」,而是「才过了没多久」。用错时间,句子就闹笑话。", emoji: "⏰" },
              { text: "破解方法:遇到成语先问「它的出处和本义是什么」,不确定就查词典,千万别看字面猜。", emoji: "🔑" }
            ] }
          ],
          q: { type: "choice", points: 10, voice: "zh",
            q: "下列句子中,加点成语使用正确的一项是:",
            options: [
              "运动会上他首当其冲,第一个冲过了终点线。",
              "曾几何时,恐龙统治着两亿年前的地球。",
              "谣言重复千遍仿佛成了事实,真是三人成虎。",
              "他俩配合默契,真是三人成虎。"
            ], answer: 2,
            demoSteps: [
              { text: "把每个成语的「真义」默背一遍,再去套句子。", emoji: "🔑", scene: { type: "clues", items: [
                { head: "首当其冲", text: "最先受攻击" },
                { head: "三人成虎", text: "谣言变真" },
                { head: "曾几何时", text: "没过多久" }
              ] } },
              { text: "检查感情色彩和时间逻辑:夸人跑得快能用「首当其冲」吗?两亿年前能叫「没过多久」吗?", emoji: "🤔" }
            ],
            explain: "C 正确:谣言传多了被当真,正是「三人成虎」的本义。A 错:首当其冲指最先受攻击,不是跑第一;B 错:曾几何时指时间不久,两亿年前不适用;D 错:三人成虎和配合默契毫无关系。",
            explainSteps: [
              { text: "A 句用「首当其冲」夸第一名,但它的真义是「最先挨打」,用来夸人闹大笑话,错!", emoji: "❌" },
              { text: "B 句「曾几何时」指才过没多久,配「两亿年前」时间完全拧了,错!", emoji: "⏰" },
              { text: "C 句:谣言重复多了被当成事实——这正是「三人成虎」出处的原意,对!", emoji: "✅" },
              { text: "D 句把「三人成虎」当成「人多力量大」,又是望文生义,错。", emoji: "🕳️" },
              { text: "记住:成语是有身世的词,先查身世再开口,就不会闹笑话。", emoji: "🎯" }
            ] }
        },
        {
          name: "动画课堂 · 《次北固山下》:江面上的新年",
          blocks: [
            { type: "lesson", title: "▶ 一只孤舟,看见了时间的秘密", steps: [
              { text: "唐朝诗人王湾,常年在江南漂泊。这一年岁末,他的船停在北固山下,写下这首思乡名作。", emoji: "⛵" },
              { text: "「潮平两岸阔,风正一帆悬」:潮水涨满,江面与两岸齐平,顺风中一片白帆高高悬挂——画面开阔又平稳。", emoji: "🌊", scene: { type: "sea", phase: "waves" } },
              { text: "最神的是这句:「海日生残夜,江春入旧年」——夜还没退尽,红日已从海上升起;旧年还没过完,江上已有了春意。", emoji: "🌅", scene: { type: "sea", phase: "sun" } },
              { text: "新的东西,总是在旧的还没结束时就已经诞生。这句诗把「新旧交替」的哲理藏进了风景里,所以千古传诵。", emoji: "💡" },
              { text: "结尾「乡书何处达?归雁洛阳边」:家书怎么寄回去呢?只能拜托北归的大雁了——漂泊在外的思乡之情,含蓄又深沉。", emoji: "🦅" }
            ] },
            { type: "reading", title: "次北固山下 · [唐] 王湾", paragraphs: [
              "客路青山外,行舟绿水前。",
              "潮平两岸阔,风正一帆悬。",
              "海日生残夜,江春入旧年。",
              "乡书何处达?归雁洛阳边。"
            ], tip: "次:停宿 / 客路:旅途 / 残夜:夜将尽未尽 / 乡书:家信 / 归雁:北归的大雁(古人认为雁能传书)" }
          ],
          q: { type: "choice", points: 10, voice: "zh",
            q: "深度思考:「海日生残夜,江春入旧年」为什么被称为千古名句?",
            options: [
              "因为它描写的日出景色特别漂亮",
              "因为它用「生」「入」把景物拟人化,并在景中蕴含「新事物必将取代旧事物」的哲理",
              "因为诗人第一个写了大海和日出",
              "因为这两句对仗特别工整,别无深意"
            ], answer: 1,
            demoSteps: [
              { text: "先看用字:太阳是「生」出来的,春天是「闯入」旧年的——景物活了。", emoji: "✍️", scene: { type: "sea", phase: "sun" } },
              { text: "再想深一层:夜还没尽,日已升起;年还没完,春已到来。新与旧,谁挡得住谁?", emoji: "💡", scene: { type: "clues", items: [
                { head: "残夜", text: "旧的未尽" },
                { head: "海日", text: "新的已生" },
                { head: "哲理", text: "新必替旧" }
              ] } }
            ],
            explain: "名句之所以千古,一靠炼字:「生」「入」赋予日和春以生命;二靠哲理:新事物在旧事物尚未消亡时已破土而出,给人乐观向上的力量。写景、炼字、说理三者合一。",
            explainSteps: [
              { text: "先品字:太阳不是「升」而是「生」,像从大海中诞生;春天不是「来」而是「入」,像主动闯进旧年。两个动词让风景活了。", emoji: "✍️" },
              { text: "再品理:黑夜还没结束,太阳已经出生;旧年还没翻页,春天已经进门。", emoji: "🌅", scene: { type: "sea", phase: "sun" } },
              { text: "这说明:新事物的诞生,不需要等旧事物消亡——它自己会破土而出。多么乐观的力量!", emoji: "💪" },
              { text: "所以答案是 B:炼字 + 哲理,缺一不可。只说景色漂亮,就把这句诗读浅了。", emoji: "🎯" },
              { text: "考试写赏析记住公式:好句 = 炼字(哪个字妙)+ 画面(什么景)+ 情理(什么情感或哲理)。", emoji: "🧮" }
            ] }
        },
        {
          name: "今日彩蛋 · 名著打卡",
          blocks: [
            { type: "rule", title: "📖 睡前 20 分钟名著时间", html: "今晚读《朝花夕拾》第二篇:<b>《阿长与〈山海经〉》</b>。<br>长妈妈是鲁迅家的保姆,规矩多、爱唠叨,睡觉还摆「大」字……但她做了一件让鲁迅记一辈子的事。<br><b>阅读任务</b>:找出长妈妈为鲁迅做了什么事,明天语文题有彩蛋!" }
          ],
          q: null
        }
      ]
    },

    // ================== 地理 ==================
    {
      subject: "geography", icon: "🌍", title: "地理 · 地球是个大圆球", minutes: 25,
      units: [
        {
          name: "动画课堂 · 人类是怎么知道地球是圆的?",
          blocks: [
            { type: "lesson", title: "▶ 一场花了两千年的侦探破案", steps: [
              { text: "今天开一门新课——地理!第一个问题:脚下的大地明明是平的,古人怎么发现地球是个球?", emoji: "🌍" },
              { text: "线索一:海边看远方来的帆船,总是先看到桅杆,再看到船身。如果大地是平的,应该整艘船一起出现才对。", emoji: "⛵", scene: { type: "sea", phase: "waves" } },
              { text: "线索二:月食时,地球投在月亮上的影子,边缘永远是圆弧形。什么形状的东西,影子永远是圆的?只有球!", emoji: "🌘" },
              { text: "决定性证据:1519 年麦哲伦船队从西班牙出发一直向西航行,三年后居然从东边回来了——首次用行动证实地球是球体!", emoji: "🚢", scene: { type: "clues", items: [
                { head: "帆船", text: "先见桅杆" },
                { head: "月食", text: "影子是弧" },
                { head: "麦哲伦", text: "环球一圈" }
              ] } },
              { text: "今天最直观的证据是太空拍的地球卫星照片。为了研究方便,人们把地球缩小做成模型——地球仪,上面有地轴、两极和赤道。", emoji: "🛰️" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "思考题:在麦哲伦环球航行之前,「海边先看到桅杆再看到船身」「月食的影子是圆弧」都已被观察到,为什么说麦哲伦的航行才「首次证实」地球是球体?",
            options: [
              "因为麦哲伦更有名,大家愿意相信他",
              "因为前两个只是间接推测,而环球一圈回到原点是用行动直接验证",
              "因为之前的观察都是错误的",
              "因为麦哲伦的船队人数最多"
            ], answer: 1,
            demoSteps: [
              { text: "把证据分两类:一类是「看到现象猜出来的」,一类是「亲自做实验验证的」。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "间接证据", text: "看现象推理" },
                { head: "直接验证", text: "亲自绕一圈" },
                { head: "问题", text: "哪个更有力?" }
              ] } },
              { text: "帆船和月食属于哪一类?一直向西却回到原点,又属于哪一类?", emoji: "🤔" }
            ],
            explain: "帆船桅杆和月食影子是「间接证据」——通过现象推测;而麦哲伦一直向西航行最终回到出发地,是「直接验证」——只有球体才可能绕一圈回到原点。科学上,直接验证比间接推测更有说服力。",
            explainSteps: [
              { text: "帆船先露桅杆、月食影子是弧,这些是「看到现象 → 推测原因」,属于间接证据。", emoji: "🔍" },
              { text: "间接证据可能有别的解释,比如有人会杠:也许是海面有雾呢?", emoji: "🎭" },
              { text: "但麦哲伦的航行不一样:一直朝一个方向走,最后回到出发点——只有在球面上才做得到,平面上永远回不来!", emoji: "🚢" },
              { text: "所以说它「首次证实」:不是推测,是用三年航行做了一次全球尺度的实验。", emoji: "✅" },
              { text: "记住这个科学思维:间接推测 < 直接验证。以后做实验、看新闻,都用得上!", emoji: "🎯" }
            ] }
        }
      ]
    }
  ]
};
