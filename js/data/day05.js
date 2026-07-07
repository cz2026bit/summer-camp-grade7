// ============ 第 5 关 ============
window.DAYS = window.DAYS || {};

window.DAYS[5] = {
  day: 5,
  title: "第 5 关 · 正负相遇",
  estimate: "四科约 2~3 小时 · 共 7 道思考题(含 1 道 BOSS 题)",
  sections: [
    // ================== 数学 ==================
    {
      subject: "math", icon: "🔢", title: "数学 · 有理数加法", minutes: 50,
      units: [
        {
          name: "动画课堂 1 · 同号相加:同一伙的抱团",
          blocks: [
            { type: "lesson", title: "▶ 加法在数轴上就是走路", steps: [
              { text: "第 2 关的数轴寻宝还记得吗?向右走是加正数,向左走是加负数。今天正式给这种走路立规矩。", emoji: "🚶", scene: { type: "numberline", from: 0, to: 3 } },
              { text: "同号相加最简单:两个正数相加照旧;两个负数相加,比如 (−2) + (−3):从 −2 出发再向左走 3 格,到 −5。", emoji: "👬", scene: { type: "numberline", from: -2, to: -5 } },
              { text: "规矩一:同号两数相加,符号不变,绝对值相加。欠 2 元又欠 3 元,一共欠 5 元,负得更多了。", emoji: "💸" },
              { text: "自己验证:(−4) + (−1) = ?先猜,再在数轴上从 −4 向左走 1 格看看。", emoji: "🧪", scene: { type: "numberline", from: -4, to: -5 } }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 2 · 异号相加:一场拔河比赛",
          blocks: [
            { type: "lesson", title: "▶ 正负两队拔河,谁赢听谁的", steps: [
              { text: "异号相加像拔河:5 + (−3),正方力气 5,负方力气 3,正方赢!赢多少?5 − 3 = 2,所以结果是 +2。", emoji: "🪢", scene: { type: "numberline", from: 5, to: 2 } },
              { text: "再看 (−5) + 3:负方力气 5,正方力气 3,负方赢,赢 2,结果是 −2。", emoji: "🏴", scene: { type: "numberline", from: -5, to: -2 } },
              { text: "规矩二:异号两数相加,取绝对值较大一方的符号,再用大绝对值减小绝对值。一句话:谁力气大听谁的,力气差就是结果。", emoji: "📜", scene: { type: "clues", items: [
                { head: "第一步", text: "比谁力气大" },
                { head: "第二步", text: "冠军定符号" },
                { head: "第三步", text: "大减小定数值" }
              ] } },
              { text: "两个特例:力气一样大就打平——互为相反数的两数相加得 0;任何数加 0,还是它自己。", emoji: "🤝", scene: { type: "numberline", from: 3, to: 0 } },
              { text: "最容易错的点:异号相加是「减」不是「加」!5 + (−3) 不是 8,冷静想想拔河就不会错。", emoji: "⚠️" }
            ] },
            { type: "numberline" }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "请判断这三句话,哪些是对的?①两个负数相加,和一定是负数 ②5 + (−3) = 8 ③互为相反数的两个数相加得 0",
            options: ["①②③都对", "只有①③对", "只有②对", "只有③对"], answer: 1,
            demoSteps: [
              { text: "第①句想「欠债叠加」:欠了又欠,可能变成有钱吗?", emoji: "💸", scene: { type: "numberline", from: -2, to: -5 } },
              { text: "第②句是拔河还是抱团?5 和 −3 是同号还是异号?", emoji: "🪢", scene: { type: "clues", items: [
                { head: "5 和 −3", text: "一正一负" },
                { head: "规则", text: "拔河:大减小" },
                { head: "警报", text: "不能直接加!" }
              ] } },
              { text: "第③句:力气相等的拔河,结果是什么?", emoji: "🤝" }
            ],
            explain: "①对:负数抱团只会更负;②错:异号相加要拔河,5 + (−3) = 5 − 3 = 2,不是 8;③对:力气相等打平,和为 0。",
            explainSteps: [
              { text: "第①句:欠 2 元再欠 3 元,只会欠更多,两个负数的和一定是负数,正确!", emoji: "✅", scene: { type: "numberline", from: -2, to: -5 } },
              { text: "第②句掉进了最常见的坑:看到加号就把 5 和 3 加起来。但它们异号,要拔河!", emoji: "⚠️" },
              { text: "正方 5,负方 3,正方赢 2,所以 5 + (−3) = 2,不是 8。", emoji: "🪢", scene: { type: "numberline", from: 5, to: 2 } },
              { text: "第③句:3 + (−3),力气相等,打平,结果为 0,正确!", emoji: "🤝", scene: { type: "numberline", from: 3, to: 0 } },
              { text: "答案:只有①③对。加法心法:同号抱团,异号拔河!", emoji: "🎯" }
            ] }
        },
        {
          name: "🔥 BOSS 挑战 · 四数连加",
          blocks: [
            { type: "text", html: "💪 <b>BOSS 战规则</b>:四个数混战!聪明的将军不会从左打到右,而是先「分营」再开战。草稿纸出动!" }
          ],
          q: { type: "fill", points: 20, boss: true, voice: "zh",
            q: "计算:(−8) + 5 + (−2) + 6 = ?(直接填数字)",
            placeholder: "例如: 3",
            accept: ["1", "一", "+1"],
            demoSteps: [
              { text: "四个数混在一起别硬算,先分营:正数一队,负数一队。", emoji: "🏳️", scene: { type: "clues", items: [
                { head: "正数营", text: "5 和 6" },
                { head: "负数营", text: "−8 和 −2" },
                { head: "战术", text: "先算各营总和" }
              ] } },
              { text: "每个营内部是同号相加(抱团),两营之间才是拔河。", emoji: "🪢" },
              { text: "算出两营的总力气,最后拔一次河定胜负。", emoji: "🏁" }
            ],
            explain: "分组:正数 5 + 6 = 11;负数 (−8) + (−2) = −10;最后拔河:11 + (−10) = 1。",
            explainSteps: [
              { text: "正数营集合:5 + 6 = 11,正方总力气 11。", emoji: "1️⃣" },
              { text: "负数营集合:(−8) + (−2),同号抱团,= −10,负方总力气 10。", emoji: "2️⃣", scene: { type: "numberline", from: -8, to: -10 } },
              { text: "决战拔河:11 对 10,正方险胜 1,结果 = +1!", emoji: "🪢", scene: { type: "numberline", from: 11, to: 1 } },
              { text: "这个战术叫「同号结合」,数越多越好用——先分营,再决战,永远不乱。", emoji: "🏆" }
            ] }
        }
      ]
    },

    // ================== 英语 ==================
    {
      subject: "english", icon: "📚", title: "英语 · 这个那个,指给你看", minutes: 45,
      units: [
        {
          name: "单词训练营 · 衣服穿搭 12 个(点卡片听发音!)",
          blocks: [
            { type: "text", html: "🎧 今天学<span class='hl'>衣物单词</span>!买衣服、夸穿搭全靠它们。点卡片听发音,跟读 3 遍。" },
            { type: "flashcards", words: [
              { word: "shirt", phonetic: "/ʃɜːt/", cn: "衬衫", sentence: "This shirt is white." },
              { word: "T-shirt", phonetic: "/ˈtiːʃɜːt/", cn: "T恤", sentence: "I like this blue T-shirt." },
              { word: "trousers", phonetic: "/ˈtraʊzəz/", cn: "长裤", sentence: "These trousers are long." },
              { word: "skirt", phonetic: "/skɜːt/", cn: "短裙", sentence: "That skirt looks nice." },
              { word: "dress", phonetic: "/dres/", cn: "连衣裙", sentence: "She wears a red dress." },
              { word: "coat", phonetic: "/kəʊt/", cn: "外套", sentence: "Put on your coat. It's cold." },
              { word: "sweater", phonetic: "/ˈswetə/", cn: "毛衣", sentence: "This sweater is warm." },
              { word: "shoe", phonetic: "/ʃuː/", cn: "鞋", sentence: "Those shoes are new." },
              { word: "sock", phonetic: "/sɒk/", cn: "袜子", sentence: "I can't find my socks." },
              { word: "hat", phonetic: "/hæt/", cn: "帽子", sentence: "He wears a funny hat." },
              { word: "glove", phonetic: "/ɡlʌv/", cn: "手套", sentence: "These gloves are soft." },
              { word: "scarf", phonetic: "/skɑːf/", cn: "围巾", sentence: "That scarf is beautiful." }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 · this / that / these / those:远近与多少",
          blocks: [
            { type: "lesson", title: "▶ 一双眼睛 + 一把尺子", steps: [
              { text: "指着东西说话,英语要先量两件事:离得近还是远?一个还是多个?", emoji: "📐" },
              { text: "近处一个用 this(这个),远处一个用 that(那个);近处多个用 these(这些),远处多个用 those(那些)。", emoji: "👉", scene: { type: "match", groups: [
                { head: "近处", items: ["this 一个", "these 多个"] },
                { head: "远处", items: ["that 一个", "those 多个"] }
              ] } },
              { text: "配套的 be 动词跟着单复数走:This is a hat. / These are hats. 复数指示词后面,名词也要变复数!", emoji: "🔗" },
              { text: "回答有讲究:问 Is this your coat? 回答用 it——Yes, it is. 问 Are these your socks? 回答用 they——Yes, they are. 别再用 this/these 答回去!", emoji: "🔄", scene: { type: "clues", items: [
                { head: "this/that 提问", text: "用 it 回答" },
                { head: "these/those 提问", text: "用 they 回答" },
                { head: "原因", text: "避免重复啰嗦" }
              ] } },
              { text: "打电话彩蛋:英语里自报家门说 This is Enen speaking,不说 I am Enen——记住这个地道用法!", emoji: "📞" }
            ] },
            { type: "chant", lines: ["近 this 远 that 要分清,", "复数 these those 跟着行;", "提问 this that,回答 it,", "these those 提问 they 来应!"] }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "选出完全正确的对话:",
            options: [
              "— Is this your scarf? — Yes, this is.",
              "— Are those your gloves? — Yes, they are.",
              "— Is that your hat? — Yes, that is.",
              "— Are these your shoe? — Yes, they are."
            ], answer: 1,
            demoSteps: [
              { text: "查两处:问句里的指示词和名词单复数配了吗?答句用 it / they 了吗?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "检查一", text: "指示词配名词" },
                { head: "检查二", text: "回答用 it/they" }
              ] } },
              { text: "these 后面的名词该是单数还是复数?回答 this is 地道吗?", emoji: "🤔" }
            ],
            explain: "B 正确:those 问复数,用 they are 回答。A 错:回答应为 Yes, it is;C 错:回答应为 Yes, it is;D 错:these 后名词要用复数 shoes。",
            explainSteps: [
              { text: "A 句问得没问题,但回答 Yes, this is 不地道——单数提问要用 it 回答:Yes, it is,错!", emoji: "🔄" },
              { text: "B 句:Are those your gloves? 复数提问;Yes, they are 用 they 回答,完美,选它!", emoji: "✅" },
              { text: "C 句同 A:that 提问也要用 it 回答,Yes, that is 错。", emoji: "❌" },
              { text: "D 句:these 是复数,后面必须跟 shoes,单数 shoe 配不上,错。", emoji: "👟" },
              { text: "口诀复习:提问 this that,回答 it;these those 提问,they 来应!", emoji: "🎯" }
            ] }
        },
        {
          name: "阅读侦探 · The Lost Scarf",
          blocks: [
            { type: "text", html: "🕵️ <b>侦探任务</b>:一条围巾失踪了!注意短文里的 this、that、these、those,它们是破案线索。" },
            { type: "reading", speakable: true, title: "The Lost Scarf", paragraphs: [
              "\"Where is my red scarf?\" Amy looks everywhere in her room. On the bed, there are two sweaters and a coat, but no scarf.",
              "\"Is this your scarf?\" her brother asks. He holds a blue one. \"No, that one is yours,\" Amy says. \"Mine is red.\"",
              "Then Amy sees their cat Mimi sleeping in a basket. Something red is under her. \"Look at those little paws holding my scarf!\" Amy laughs.",
              "\"Mimi likes this scarf too,\" her brother says. \"Because it is the warmest thing in the house!\""
            ], tip: "生词提示:everywhere 到处 / holds 拿着 / basket 篮子 / paws 爪子 / warmest 最暖和的" }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "推理题:Why does Mimi the cat take Amy's red scarf?(猫咪为什么拿走了红围巾?)",
            options: [
              "Because Mimi likes the color red.",
              "Because the scarf is the warmest thing in the house.",
              "Because Amy gives it to Mimi.",
              "Because the brother puts it in the basket."
            ], answer: 1,
            demoSteps: [
              { text: "破案要找「作案动机」:短文最后一句谁解释了原因?", emoji: "🕵️", scene: { type: "clues", items: [
                { head: "嫌疑猫", text: "Mimi 压着围巾" },
                { head: "动机", text: "because 后面找" }
              ] } },
              { text: "看到 because,答案就在它后面。", emoji: "🔑" }
            ],
            explain: "最后一句:Because it is the warmest thing in the house——围巾是家里最暖和的东西,猫咪贪暖才抱着它睡。because 后面永远藏着原因题的答案。",
            explainSteps: [
              { text: "定位最后一句:\"Because it is the warmest thing in the house!\"", emoji: "🔍" },
              { text: "翻译:因为围巾是家里最暖和的东西——猫咪抱着它睡觉,是因为暖和,选 B!", emoji: "✅" },
              { text: "A 说猫喜欢红色——文中没说,猫其实也不怎么分辨红色;C、D 都没发生。", emoji: "❌" },
              { text: "连着三关了,发现规律没有?原因题 → 找 because / so;推理题 → 回原文找证据。这两把钥匙要随身带!", emoji: "🗝️" }
            ] }
        }
      ]
    },

    // ================== 语文 ==================
    {
      subject: "chinese", icon: "📝", title: "语文 · 文学常识与阅读第一课", minutes: 40,
      units: [
        {
          name: "动画课堂 · 文学常识:大诗人的名片夹",
          blocks: [
            { type: "lesson", title: "▶ 认识几位即将见面的老朋友", steps: [
              { text: "初一语文课本里,有几位大人物会反复出现。今天先把他们的「名片」收进夹子。", emoji: "🗂️" },
              { text: "李白,盛唐,人称「诗仙」,浪漫主义,想象天马行空——昨天的月亮快递就是他干的。杜甫,人称「诗圣」,现实主义,笔下多是民间疾苦。", emoji: "🌙", scene: { type: "clues", items: [
                { head: "李白 · 诗仙", text: "浪漫,想象奇" },
                { head: "杜甫 · 诗圣", text: "现实,忧民生" },
                { head: "并称", text: "「李杜」" }
              ] } },
              { text: "曹操,东汉末年政治家、军事家、诗人,《观沧海》就是他的手笔,诗风慷慨悲壮。", emoji: "⚔️" },
              { text: "鲁迅,原名周树人,现代文学的旗手:散文集《朝花夕拾》(恩恩正在读!)、小说集《呐喊》《彷徨》——体裁千万别张冠李戴。", emoji: "📚", scene: { type: "clues", items: [
                { head: "《朝花夕拾》", text: "散文集" },
                { head: "《呐喊》《彷徨》", text: "小说集" },
                { head: "易错点", text: "体裁别混" }
              ] } },
              { text: "四大名著顺口溜:罗贯中《三国演义》,施耐庵《水浒传》,吴承恩《西游记》,曹雪芹《红楼梦》——作者和书要配对成功!", emoji: "🎴" }
            ] }
          ],
          q: { type: "choice", points: 10, voice: "zh",
            q: "下列文学常识搭配错误的一项是:",
            options: [
              "《观沧海》——曹操——东汉末年",
              "《朝花夕拾》——鲁迅——小说集",
              "「诗仙」——李白——浪漫主义",
              "《西游记》——吴承恩——四大名著之一"
            ], answer: 1,
            demoSteps: [
              { text: "把每张「名片」的三个信息核对一遍:作品、作者、朝代/体裁。", emoji: "🗂️", scene: { type: "clues", items: [
                { head: "核对一", text: "作品配作者" },
                { head: "核对二", text: "朝代对不对" },
                { head: "核对三", text: "体裁别搞混" }
              ] } },
              { text: "重点盯《朝花夕拾》:恩恩天天在读,它是散文还是小说?", emoji: "📖" }
            ],
            explain: "B 错:《朝花夕拾》是鲁迅的回忆性散文集,不是小说集;他的小说集是《呐喊》《彷徨》。其余三项均正确。",
            explainSteps: [
              { text: "A 项:《观沧海》确是曹操东汉末年北征归途所作,正确。", emoji: "✅" },
              { text: "B 项:《朝花夕拾》是散文集!你读的《阿长与山海经》《五猖会》都是回忆散文,不是虚构小说——搭配错了,选它!", emoji: "🎯" },
              { text: "C 项:李白「诗仙」浪漫主义,昨天刚见过他的月亮快递,正确。", emoji: "🌙" },
              { text: "D 项:吴承恩《西游记》,四大名著,正确。", emoji: "✅" },
              { text: "记忆窍门:自己读过的书最不容易记错——所以每天的名著打卡,也是在攒考试的分!", emoji: "💰" }
            ] }
        },
        {
          name: "动画课堂 · 现代文阅读第一课:找中心句",
          blocks: [
            { type: "lesson", title: "▶ 每段话都有一位「队长」", steps: [
              { text: "从初一开始,现代文阅读是语文的半壁江山。第一课,学会找每段的「队长」——中心句。", emoji: "🧢" },
              { text: "队长最爱站的位置:段首(开门见山)和段尾(总结收束)。读段落先扫这两处。", emoji: "📍", scene: { type: "clues", items: [
                { head: "位置一", text: "段首,先亮观点" },
                { head: "位置二", text: "段尾,总结全段" },
                { head: "特征", text: "概括性最强" }
              ] } },
              { text: "识别队长的方法:它说的是「观点和结论」,其他句子在举例子、摆数据、打比方——都是给队长打工的队员。", emoji: "👷" },
              { text: "找不到现成队长怎么办?自己任命一个:把各队员干的事合并归纳,用「谁 + 干什么/怎么样」造一句。", emoji: "✍️" },
              { text: "试一试:「蜜蜂是勤劳的。天不亮它们就出发采蜜,一天要飞几十公里,连休息时都在扇翅膀酿蜜。」——哪句是队长?对,第一句!后面全是它的证据。", emoji: "🐝" }
            ] }
          ],
          q: { type: "choice", points: 10, voice: "zh",
            q: "阅读小段:「竹子全身都是宝。竹笋可以做菜,鲜嫩可口;竹竿可以做家具、造纸;就连竹叶,也能包出清香的粽子。」这段话的中心句是哪一句?",
            options: [
              "竹笋可以做菜,鲜嫩可口",
              "竹竿可以做家具、造纸",
              "竹子全身都是宝",
              "竹叶能包出清香的粽子"
            ], answer: 2,
            demoSteps: [
              { text: "先扫段首段尾:第一句说了什么?它是观点还是例子?", emoji: "📍", scene: { type: "clues", items: [
                { head: "队长", text: "说观点结论" },
                { head: "队员", text: "举例子证明" },
                { head: "检验", text: "谁概括了全段" }
              ] } },
              { text: "检验法:后面三句(笋、竿、叶)是不是都在为某一句「打工」?", emoji: "👷" }
            ],
            explain: "「竹子全身都是宝」是观点句,概括全段;竹笋、竹竿、竹叶三句分别从不同部位举例,都是在证明这个观点。中心句 = 被所有例子共同支撑的那句话。",
            explainSteps: [
              { text: "第一句「竹子全身都是宝」——这是一个观点,没有具体细节,概括性最强。", emoji: "🧢" },
              { text: "再看后三句:笋能吃、竿能用、叶能包粽子——分别是「宝」的三个例子。", emoji: "👷" },
              { text: "三个队员都在给第一句打工,队长确认无疑,选 C!", emoji: "✅" },
              { text: "以后做概括题就用这招:找到被例子们共同支撑的那句话;没有现成的,就自己归纳一句。", emoji: "🎯" }
            ] }
        },
        {
          name: "今日彩蛋 · 名著打卡",
          blocks: [
            { type: "rule", title: "📖 睡前 20 分钟名著时间", html: "三味书屋 vs 百草园:一边是摇头晃脑读古书的枯燥,一边是拔何首乌、捕鸟的自由——鲁迅用对比写出了对童真的怀念。<br>今晚任务:读《朝花夕拾》名篇<b>《藤野先生》</b>开头部分,记住这位日本老师的样子,明天要考他!" }
          ],
          q: null
        }
      ]
    },

    // ================== 历史 ==================
    {
      subject: "history", icon: "🏺", title: "历史 · 家天下的开始", minutes: 25,
      units: [
        {
          name: "动画课堂 · 夏商周:王朝接力赛",
          blocks: [
            { type: "lesson", title: "▶ 从「选贤」到「传儿子」", steps: [
              { text: "第 1 关讲到尧舜禹「禅让」——把首领之位传给贤能的人。但一场大变革即将到来。", emoji: "🏺" },
              { text: "约公元前 2070 年,治水英雄禹建立了我国历史上第一个王朝——夏朝。禹死后,他的儿子启继承王位,从此「公天下」变成了「家天下」,世袭制取代了禅让制。", emoji: "👑", scene: { type: "clues", items: [
                { head: "禅让制", text: "传给贤能者" },
                { head: "世袭制", text: "传给亲儿子" },
                { head: "转折点", text: "启继禹位" }
              ] } },
              { text: "夏朝末代王桀残暴无度,商汤起兵灭夏建立商朝。商朝留下两件国宝:刻在龟甲兽骨上的甲骨文——我国已知最早的成熟文字;还有青铜器巅峰之作司母戊鼎。", emoji: "🐢", scene: { type: "clues", items: [
                { head: "甲骨文", text: "最早成熟文字" },
                { head: "司母戊鼎", text: "最重青铜器" },
                { head: "朝代", text: "都属于商朝" }
              ] } },
              { text: "历史惊人地重复:商朝末代王纣同样残暴,周武王伐纣,牧野之战后建立周朝,并推行分封制管理辽阔疆土。", emoji: "⚔️" },
              { text: "发现规律了吗?夏桀、商纣都因暴政亡国——「得民心者得天下」,这是三个王朝用兴亡写下的第一课。", emoji: "💡" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "思考题:禹传位给儿子启,史书称之为「公天下」变成「家天下」。这里「公」变「家」指的是什么?",
            options: [
              "国家的土地从公有变成了私有",
              "首领之位从「传给贤能的人」变成「在自家血脉中世代相传」",
              "人们从住公房变成住自己家",
              "天下从太平变成了战乱"
            ], answer: 1,
            demoSteps: [
              { text: "对比两种传位方式:尧传舜、舜传禹,凭的是什么?禹传启,凭的又是什么?", emoji: "⚖️", scene: { type: "clues", items: [
                { head: "尧→舜→禹", text: "看贤能" },
                { head: "禹→启", text: "看血缘" },
                { head: "变化", text: "标准变了" }
              ] } },
              { text: "「公」和「家」在这里说的是「位子属于谁」,不是房子和土地。", emoji: "🤔" }
            ],
            explain: "「公天下」指首领之位属于天下,选贤能者居之(禅让);「家天下」指王位成了一家一姓的私产,父死子继(世袭)。启继禹位是这一转变的标志,此后世袭制延续了近四千年。",
            explainSteps: [
              { text: "禅让时代:位子是「公家的」,谁贤能给谁——尧挑中了种地的舜,舜挑中了治水的禹。", emoji: "🌾" },
              { text: "启继位后:位子成了「自家的」,只在血脉里传——不管儿子贤不贤,都是他继承。", emoji: "👑" },
              { text: "所以「公变家」变的是王位的归属规则:从天下人的,变成一家人的,选 B!", emoji: "✅" },
              { text: "A、C 把「家」理解成房产,太字面;D 与题意无关。", emoji: "❌" },
              { text: "这个知识点是中国古代政治制度的起点,初一历史第一次月考几乎必考——恭喜你提前拿下!", emoji: "🏆" }
            ] }
        }
      ]
    }
  ]
};
