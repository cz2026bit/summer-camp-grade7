// ============ 第 4 关 ============
window.DAYS = window.DAYS || {};

window.DAYS[4] = {
  day: 4,
  title: "第 4 关 · 排队的学问",
  estimate: "四科约 2~3 小时 · 共 7 道思考题(含 1 道 BOSS 题)",
  sections: [
    // ================== 数学 ==================
    {
      subject: "math", icon: "🔢", title: "数学 · 有理数比大小", minutes: 50,
      units: [
        {
          name: "动画课堂 1 · 比大小的三条金规则",
          blocks: [
            { type: "lesson", title: "▶ 让所有有理数乖乖排队", steps: [
              { text: "今天给有理数排队。金规则一:正数都大于 0,负数都小于 0,所以正数 > 0 > 负数,三个阵营先分清。", emoji: "🥇", scene: { type: "numberline", from: -5, to: 5 } },
              { text: "金规则二:两个正数比大小,和小学一样,数字大的大。", emoji: "🥈" },
              { text: "金规则三(最容易错):两个负数比大小,绝对值大的反而小!−8 和 −2,8 比 2 大,所以 −8 反而小。", emoji: "🥉", scene: { type: "numberline", from: -8, to: -2 } },
              { text: "为什么反过来?想想欠债:欠 8 元的人比欠 2 元的人更穷。绝对值越大,负得越狠。", emoji: "💸" },
              { text: "万能保底法:把数都标到数轴上,右边的永远大于左边的。分不清就画数轴,一画就明白!", emoji: "📏", scene: { type: "numberline", from: -10, to: 10 } }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 2 · 带小数分数一起排队",
          blocks: [
            { type: "lesson", title: "▶ 混合部队怎么排?", steps: [
              { text: "实战中,整数、小数、分数会混在一起考你,比如:−3、2、−0.5、0,谁大谁小?", emoji: "🎯" },
              { text: "第一步:分阵营。正数阵营:2;零自己一营;负数阵营:−3 和 −0.5。", emoji: "🏳️", scene: { type: "clues", items: [
                { head: "正数营", text: "2" },
                { head: "中立", text: "0" },
                { head: "负数营", text: "−3、−0.5" }
              ] } },
              { text: "第二步:负数营内部比。|−3| = 3,|−0.5| = 0.5,3 > 0.5,所以 −3 反而更小。", emoji: "⚖️", scene: { type: "numberline", from: -3, to: -0.5 } },
              { text: "第三步:合起来排:−3 < −0.5 < 0 < 2。搞定!", emoji: "✅" },
              { text: "口诀:先分正负零三阵营,负数营里看绝对值,绝对值大的排最左。", emoji: "🎵" }
            ] },
            { type: "numberline" }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "把 −3、2、−0.5、0 这四个数从小到大排列,正确的是:",
            options: [
              "−0.5 < −3 < 0 < 2",
              "−3 < −0.5 < 0 < 2",
              "0 < −0.5 < −3 < 2",
              "−3 < 0 < −0.5 < 2"
            ], answer: 1,
            demoSteps: [
              { text: "先分三个阵营:谁是正数?谁是 0?谁是负数?", emoji: "🏳️", scene: { type: "clues", items: [
                { head: "第一步", text: "分正负零" },
                { head: "第二步", text: "负数比狠" },
                { head: "第三步", text: "拼成一队" }
              ] } },
              { text: "负数营里 −3 和 −0.5 谁小?想想谁欠的债多。", emoji: "💸", scene: { type: "numberline", from: -3, to: -0.5 } }
            ],
            explain: "分阵营:负数(−3、−0.5)< 0 < 正数(2)。负数内部:|−3| > |−0.5|,所以 −3 < −0.5。合并:−3 < −0.5 < 0 < 2。",
            explainSteps: [
              { text: "第一步分阵营:负数 −3、−0.5 排最前,0 在中间,正数 2 排最后。", emoji: "🏳️" },
              { text: "第二步比负数:−3 欠 3 元,−0.5 只欠 5 毛,−3 更穷,排在更左边。", emoji: "💸", scene: { type: "numberline", from: -3, to: -0.5 } },
              { text: "合并起来:−3 < −0.5 < 0 < 2,答案是 B!", emoji: "✅" },
              { text: "检验:画个数轴把四个数标上去,从左往右读,顺序一模一样。", emoji: "📏", scene: { type: "numberline", from: -3, to: 2 } }
            ] }
        },
        {
          name: "🔥 BOSS 挑战 · 神秘的 −a",
          blocks: [
            { type: "text", html: "💪 <b>BOSS 战规则</b>:这道题没有具体数字,考的是思维!别急着回答,先在草稿纸上举例子试一试。" }
          ],
          q: { type: "choice", points: 20, boss: true, voice: "zh",
            q: "灵魂拷问:字母 a 表示任意一个有理数,那么 −a 一定是负数吗?",
            options: [
              "一定是,因为它前面带负号",
              "不一定:a 是正数时 −a 是负数,a 是负数时 −a 是正数,a 是 0 时 −a 就是 0",
              "一定不是,负号只是装饰",
              "无法判断,题目出错了"
            ], answer: 1,
            demoSteps: [
              { text: "别被负号吓住!−a 的真正意思是「a 的相反数」,不是「负数」。", emoji: "🎭", scene: { type: "clues", items: [
                { head: "−a 读作", text: "a 的相反数" },
                { head: "不等于", text: "负数" },
                { head: "方法", text: "分类举例" }
              ] } },
              { text: "举三个例子代进去:a = 5 时 −a = ?a = −3 时 −a = ?a = 0 时 −a = ?", emoji: "🧪" },
              { text: "三种情况结果一样吗?这就是数学里重要的「分类讨论」思想。", emoji: "🔀" }
            ],
            explain: "−a 表示「a 的相反数」:a = 5 时,−a = −5 是负数;a = −3 时,−a = 3 是正数;a = 0 时,−a = 0。所以 −a 不一定是负数,要分类讨论。",
            explainSteps: [
              { text: "试第一种:a = 5,−a = −5,确实是负数。但别急,再试!", emoji: "1️⃣" },
              { text: "试第二种:a = −3,−a = −(−3) = 3,居然是正数!负号遇到负数,负负得正。", emoji: "2️⃣", scene: { type: "numberline", from: -3, to: 3 } },
              { text: "试第三种:a = 0,−a = 0,不正不负。", emoji: "3️⃣" },
              { text: "三种情况三种结果,所以「−a 一定是负数」是错的,答案选 B!", emoji: "✅" },
              { text: "恭喜你学会了初中数学最重要的思想之一:分类讨论。看到字母别慌,分情况代数字试,真相自然浮现。", emoji: "🏆" }
            ] }
        }
      ]
    },

    // ================== 英语 ==================
    {
      subject: "english", icon: "📚", title: "英语 · 冠词三兄弟", minutes: 45,
      units: [
        {
          name: "单词训练营 · 三餐美食 12 个(点卡片听发音!)",
          blocks: [
            { type: "text", html: "🎧 今天的单词和<span class='hl'>吃</span>有关!注意听 egg、orange 的开头发音——它们和冠词的用法有大关系。" },
            { type: "flashcards", words: [
              { word: "breakfast", phonetic: "/ˈbrekfəst/", cn: "早餐", sentence: "I have breakfast at seven." },
              { word: "lunch", phonetic: "/lʌntʃ/", cn: "午餐", sentence: "Lunch is at noon." },
              { word: "dinner", phonetic: "/ˈdɪnə/", cn: "晚餐", sentence: "We have dinner together." },
              { word: "egg", phonetic: "/eɡ/", cn: "鸡蛋", sentence: "I eat an egg every morning." },
              { word: "bread", phonetic: "/bred/", cn: "面包", sentence: "The bread smells good." },
              { word: "milk", phonetic: "/mɪlk/", cn: "牛奶", sentence: "Milk is good for you." },
              { word: "juice", phonetic: "/dʒuːs/", cn: "果汁", sentence: "I'd like a glass of juice." },
              { word: "rice", phonetic: "/raɪs/", cn: "米饭", sentence: "We eat rice every day." },
              { word: "noodle", phonetic: "/ˈnuːdl/", cn: "面条", sentence: "The noodles are delicious." },
              { word: "vegetable", phonetic: "/ˈvedʒtəbl/", cn: "蔬菜", sentence: "Eat more vegetables." },
              { word: "fruit", phonetic: "/fruːt/", cn: "水果", sentence: "Fruit is sweet and healthy." },
              { word: "water", phonetic: "/ˈwɔːtə/", cn: "水", sentence: "Drink more water." }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 · a / an / the:名词的三顶帽子",
          blocks: [
            { type: "lesson", title: "▶ 给名词戴对帽子", steps: [
              { text: "英语名词出门要戴帽子。第一顶 a:泛指「一个」,戴在辅音音素开头的词前——a book、a banana。", emoji: "🎩" },
              { text: "第二顶 an:也是「一个」,但戴在元音音素开头的词前——an apple、an egg、an orange。为什么?连读顺口!", emoji: "👒", scene: { type: "match", groups: [
                { head: "a + 辅音音素", items: ["a book", "a banana"] },
                { head: "an + 元音音素", items: ["an apple", "an egg"] }
              ] } },
              { text: "高手过招看「音」不看「字母」:hour 的 h 不发音,读 /aʊə/,元音开头,要用 an hour;university 拼写是 u 开头,但读 /juː/,辅音开头,用 a university!", emoji: "🥷", scene: { type: "clues", items: [
                { head: "an hour", text: "h 不发音" },
                { head: "a university", text: "读 /juː/" },
                { head: "秘诀", text: "听音定冠词" }
              ] } },
              { text: "第三顶 the:特指「就是那个」——双方都知道说的是哪一个,或者世上独一无二的:the sun、the moon。", emoji: "👑" },
              { text: "有时不戴帽子(零冠词):三餐和球类前不加——have breakfast、play basketball。但乐器前要加 the:play the piano。", emoji: "🎹" }
            ] },
            { type: "chant", lines: ["泛指一个 a 和 an,", "元音音素用 an 连;", "特指独一要用 the,", "三餐球类光着头!"] }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "选出冠词全部正确的一句:",
            options: [
              "I eat a egg and drink a glass of milk for the breakfast.",
              "He plays the basketball for an hour every day.",
              "She eats an egg and plays the piano after dinner.",
              "There is an university near my home."
            ], answer: 2,
            demoSteps: [
              { text: "给每个名词做「听音测试」:egg 开头是元音还是辅音?university 呢?", emoji: "👂", scene: { type: "clues", items: [
                { head: "egg", text: "/e/ 元音" },
                { head: "university", text: "/juː/ 辅音" },
                { head: "hour", text: "/aʊə/ 元音" }
              ] } },
              { text: "再查「光头规则」:三餐、球类不戴帽子,乐器要戴 the。", emoji: "🎩" }
            ],
            explain: "C 正确:an egg(元音音素)、play the piano(乐器加 the)、after dinner(三餐零冠词)。A 错:应为 an egg,且 breakfast 前不加 the;B 错:球类 play basketball 不加 the;D 错:university 读音辅音开头,应为 a university。",
            explainSteps: [
              { text: "A 句两处错:egg 元音开头要用 an;三餐 breakfast 前不能加 the。", emoji: "❌" },
              { text: "B 句:basketball 是球类,光头出门,不能加 the;an hour 倒是对的,可惜整句已错。", emoji: "🏀" },
              { text: "C 句逐项检查:an egg ✓ 元音;the piano ✓ 乐器;dinner ✓ 三餐光头。全对!", emoji: "✅" },
              { text: "D 句:university 拼写是 u,但读 /juː/,辅音开头,要用 a university,错。", emoji: "🥷" },
              { text: "记住高手心法:冠词看发音不看拼写,三餐球类光头,乐器戴 the!", emoji: "🎯" }
            ] }
        },
        {
          name: "阅读侦探 · The Best Breakfast",
          blocks: [
            { type: "text", html: "🕵️ <b>侦探任务</b>:读的时候圈出所有 a、an、the,体会它们的用法。最后的推理题要找出「话里的话」!" },
            { type: "reading", speakable: true, title: "The Best Breakfast", paragraphs: [
              "Sunday is Dad's cooking day. This morning, Dad wants to make a special breakfast for Mum, because it is her birthday.",
              "He puts an egg, some bread and a glass of juice on the table. But when he cuts the bread, he cuts his finger. \"Ouch!\"",
              "Little Ming runs over. He can't cook, but he draws a big cake on a piece of paper and writes: Happy Birthday, Mum!",
              "Mum looks at the burnt egg, the untidy table and the drawing. She smiles and says, \"This is the best breakfast in the world.\""
            ], tip: "生词提示:special 特别的 / cuts his finger 切到手指 / burnt 烧糊的 / untidy 凌乱的 / drawing 画" }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "推理题:The egg is burnt and the table is untidy. Why does Mum still say it is \"the best breakfast\"?(蛋糊了桌子乱了,妈妈为什么还说这是最棒的早餐?)",
            options: [
              "Because she likes burnt eggs.",
              "Because she feels the love from Dad and Little Ming.",
              "Because she doesn't want to cook by herself.",
              "Because the juice is very sweet."
            ], answer: 1,
            demoSteps: [
              { text: "先列出「事实」:蛋糊了、桌子乱、爸爸切到手、小明画了蛋糕。再看妈妈的反应:微笑。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "事实", text: "早餐搞砸了" },
                { head: "反应", text: "妈妈却微笑" },
                { head: "推理", text: "她看重什么?" }
              ] } },
              { text: "「best」指的是味道最好,还是心意最好?这就是「话里的话」。", emoji: "💭" }
            ],
            explain: "早餐本身很失败,但爸爸为她受了伤、小明画了蛋糕——妈妈感受到的是家人的爱。「the best breakfast」说的不是味道,而是心意。读英语故事也要读出言外之意。",
            explainSteps: [
              { text: "字面上看,这顿早餐很糟糕:蛋糊了,桌子乱了,爸爸还切到了手。", emoji: "🍳" },
              { text: "但妈妈看到的是:爸爸一大早为她下厨,小明画了蛋糕写了祝福——每一样都是爱。", emoji: "❤️" },
              { text: "所以「best」形容的不是食物,而是心意。答案选 B!", emoji: "✅" },
              { text: "A、D 都停在字面;C 更是无中生有。", emoji: "❌" },
              { text: "高分秘诀:阅读理解的最后一题,常考「言外之意」——问问自己,人物真正在乎的是什么?", emoji: "🎯" }
            ] }
        },
        {
          name: "英文名著时光 · The Happy Prince(上)",
          blocks: [
            { type: "rule", title: "📖 名著名片", html: "<b>王尔德 Oscar Wilde</b>,英国作家,他的童话美得让人心疼。《快乐王子》分上下两天读,今天是上篇。" },
            { type: "reading", speakable: true, title: "The Happy Prince (Part 1)", paragraphs: [
              "High above the city stands the statue of the Happy Prince. His body is covered with gold, and his eyes are two bright sapphires.",
              "One night, a little swallow stops at his feet on her way to the warm south. Suddenly, a drop of water falls on her. Is it rain? No — the Happy Prince is crying.",
              "'When I was alive, I never saw any sad people,' says the Prince. 'Now I stand high here, and I can see all the poor people of my city.'",
              "'Little Swallow, will you help me? Please take the ruby from my sword to a sick boy's mother. She has no money for food.'"
            ], tip: "生词提示:statue 雕像 / sapphires 蓝宝石 / swallow 燕子 / a drop of 一滴 / ruby 红宝石 / sword 剑" },
            { type: "text", html: "🎧 <b>名著任务</b>:听读各一遍。想一想:王子活着时从没见过悲伤,现在为什么哭了?小燕子会答应帮他吗?——明天揭晓!" }
          ],
          q: null
        }
      ]
    },

    // ================== 语文 ==================
    {
      subject: "chinese", icon: "📝", title: "语文 · 标点法官与月亮邮差", minutes: 40,
      units: [
        {
          name: "动画课堂 · 标点符号的三宗罪",
          blocks: [
            { type: "lesson", title: "▶ 小符号,大陷阱", steps: [
              { text: "标点是句子的交通信号灯,放错一个,整句话就「撞车」。初一最常考三宗罪,今天全部拿下。", emoji: "🚦" },
              { text: "第一宗罪:顿号逗号不分。顿号(、)管句子内部最小的并列:苹果、香蕉、橙子;更大的停顿才用逗号。", emoji: "⏸️", scene: { type: "clues", items: [
                { head: "顿号、", text: "词语间小并列" },
                { head: "逗号,", text: "句子间停顿" },
                { head: "口诀", text: "小顿大逗" }
              ] } },
              { text: "第二宗罪:见「谁、什么」就打问号。「我不知道他是谁。」——这是陈述「我不知道」这件事,不是提问,句末用句号!", emoji: "❓" },
              { text: "判断秘诀:读一遍,问自己「这句话需要别人回答吗?」需要回答才用问号。", emoji: "🔑" },
              { text: "第三宗罪:引号句末标点放错位。完整引用一句话,句号放引号里面:他说:「我明天来。」如果只引几个词,标点放外面。", emoji: "💬" }
            ] }
          ],
          q: { type: "choice", points: 10, voice: "zh",
            q: "下列句子标点使用正确的一项是:",
            options: [
              "我不知道明天会不会下雨?",
              "书店里有小说,散文,诗歌等许多书。",
              "他问我:「你明天有空吗?」",
              "妈妈买了苹果,香蕉,和橙子。"
            ], answer: 2,
            demoSteps: [
              { text: "逐句过三关:问号关(需要回答吗?)、顿号关(词语并列用什么?)、引号关(标点位置对吗?)", emoji: "🚦", scene: { type: "clues", items: [
                { head: "关一", text: "该不该问号" },
                { head: "关二", text: "顿号还是逗号" },
                { head: "关三", text: "引号内标点" }
              ] } },
              { text: "「我不知道……」这句话是在提问,还是在陈述「我不知道」?", emoji: "🤔" }
            ],
            explain: "C 正确:「他问我」引出完整的问句,问号放引号内。A 错:陈述「不知道」这件事,句末应用句号;B 错:小说、散文、诗歌是词语并列,应用顿号;D 错:并列词语用顿号,且「和」前不加标点。",
            explainSteps: [
              { text: "A 句:整句是陈述「我不知道」,不需要任何人回答,句末用句号,错!", emoji: "❓" },
              { text: "B 句:小说、散文、诗歌是最小的词语并列,该用顿号却用了逗号,错!", emoji: "⏸️" },
              { text: "C 句:引号里是完整的问句「你明天有空吗?」,问号放引号内,完全正确!", emoji: "✅" },
              { text: "D 句:苹果、香蕉和橙子——顿号伺候,而且「和」字前面不加任何标点,错。", emoji: "🍎" },
              { text: "标点口诀:小顿大逗,问号看回答,引号完整句标点住里边。", emoji: "🎯" }
            ] }
        },
        {
          name: "动画课堂 · 李白的月亮快递",
          blocks: [
            { type: "lesson", title: "▶ 一颗愁心,寄往五千里外", steps: [
              { text: "唐朝,李白听说好友王昌龄被贬到偏远的龙标(今湖南一带),连送别的机会都没有,于是写下这首诗寄给他。", emoji: "📮" },
              { text: "「杨花落尽子规啼」:杨花落尽是暮春,子规(杜鹃鸟)的叫声像「不如归去」——两个意象一出场,离愁的气氛就拉满了。", emoji: "🌸", scene: { type: "clues", items: [
                { head: "杨花落尽", text: "暮春,漂泊感" },
                { head: "子规啼", text: "「不如归去」" },
                { head: "气氛", text: "愁绪拉满" }
              ] } },
              { text: "「闻道龙标过五溪」:听说你要渡过五条溪水,去那么远那么荒凉的地方——担忧又心疼。", emoji: "🏞️" },
              { text: "然后是神来之笔:「我寄愁心与明月,随君直到夜郎西。」——我把我的忧愁和牵挂打包,托付给月亮,让它陪你一路走到夜郎以西!", emoji: "🌙", scene: { type: "sea", phase: "stars" } },
              { text: "月亮成了快递员:人不能同行,心却可以。这种把无形情感托付给有形景物的想象,就是李白最浪漫的地方。", emoji: "💌" }
            ] },
            { type: "reading", title: "闻王昌龄左迁龙标遥有此寄 · [唐] 李白", paragraphs: [
              "杨花落尽子规啼,",
              "闻道龙标过五溪。",
              "我寄愁心与明月,",
              "随君直到夜郎西。"
            ], tip: "左迁:降职贬官 / 子规:杜鹃鸟 / 五溪:五条溪水,指偏远之地 / 夜郎:古地名,极言其远" }
          ],
          q: { type: "choice", points: 10, voice: "zh",
            q: "深度思考:愁心明明是看不见摸不着的情感,李白为什么说要把它「寄」给明月?",
            options: [
              "因为古代真的可以用月亮寄东西",
              "把无形的愁心当作可寄之物,又让明月当信使陪伴友人——化无形为有形,想象奇特,情意加倍",
              "因为李白写诗时正好看到了月亮,随手一写",
              "因为月亮很亮,方便朋友晚上赶路"
            ], answer: 1,
            demoSteps: [
              { text: "抓住那个「寄」字:平时我们寄的是包裹信件,李白寄的是什么?", emoji: "📦", scene: { type: "clues", items: [
                { head: "常人寄", text: "信件包裹" },
                { head: "李白寄", text: "一颗愁心" },
                { head: "妙处", text: "无形变有形" }
              ] } },
              { text: "再想月亮的特点:你在这里看得到它,五千里外的朋友也看得到——它是不是最合适的信使?", emoji: "🌙", scene: { type: "sea", phase: "stars" } }
            ],
            explain: "「寄愁心」把无形的情感写成可以打包托运的实物(化虚为实),「与明月」让天下人共见的月亮做信使——人不能陪你,月光可以夜夜陪你。奇特的想象背后,是深厚的友情。",
            explainSteps: [
              { text: "第一层妙处:愁心本是无形的,一个「寄」字让它变成了可以托运的包裹——化虚为实。", emoji: "📦" },
              { text: "第二层妙处:为什么选月亮?因为月亮独一无二,我看见的和你看见的是同一轮——它能同时陪着两个人。", emoji: "🌙", scene: { type: "sea", phase: "stars" } },
              { text: "「随君直到夜郎西」:人被路途阻隔,但托付给月亮的心意可以一路随行,连贬谪之路都被照亮了。", emoji: "💌" },
              { text: "所以答案是 B。A 和 D 太实在,C 太随意——诗人的想象从来不是随手一写。", emoji: "🎯" },
              { text: "积累一下:「化虚为实」+「借物传情」,和前两天的「借景抒情」「以乐景写哀情」凑成古诗赏析四件套!", emoji: "🧰" }
            ] }
        },
        {
          name: "今日彩蛋 · 名著打卡",
          blocks: [
            { type: "rule", title: "📖 睡前 20 分钟名著时间", html: "昨天《五猖会》的答案:出发前,父亲突然命令鲁迅<b>背书</b>,背不出不许去——兴致就这样被浇灭了。这篇文章批评的正是不顾孩子天性的教育。<br>今晚任务:读<b>《从百草园到三味书屋》后半部分(三味书屋)</b>,对比:私塾里的读书生活和百草园的快乐有什么不同?" }
          ],
          q: null
        }
      ]
    },

    // ================== 道法 ==================
    {
      subject: "civics", icon: "⚖️", title: "道法 · 中学时代:新地图已解锁", minutes: 25,
      units: [
        {
          name: "动画课堂 · 升级不只是换个校服",
          blocks: [
            { type: "lesson", title: "▶ 中学时代到底「新」在哪?", steps: [
              { text: "还有两个月,恩恩就正式成为中学生了!道法课第一讲,就聊聊这场「升级」。", emoji: "🎒" },
              { text: "新变化一:课程从三四门变成七八门,老师更多,节奏更快——这不是负担,是探索世界的新地图。", emoji: "🗺️", scene: { type: "clues", items: [
                { head: "小学", text: "三四门课" },
                { head: "初中", text: "七八门课" },
                { head: "本质", text: "更大的世界" }
              ] } },
              { text: "新变化二:新同学、新老师、新集体。老朋友可能不在一个班,但这也意味着——可以认识更多新朋友。", emoji: "🤝" },
              { text: "新变化三:别人眼里的你「归零」了。小学的光环或遗憾都翻篇,每个人都站在同一条新起跑线上——这是重新塑造自己的最好机会!", emoji: "🌱" },
              { text: "中学时代是人生的「十字路口」:身体在长高,思想在成型,习惯在定型。抓住它,未来的你会感谢现在的自己。", emoji: "🛤️" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "思考题:小凡上初中后发现自己不再是班里成绩最好的,老朋友也分到了别的班,他有点失落。下面哪种想法最能帮他打开新局面?",
            options: [
              "「小学的荣誉没了,初中就随便混混吧。」",
              "「我要天天去老朋友班里玩,新同学不熟就不理了。」",
              "「新起点意味着新机会:我可以重新定位自己,也可以主动认识新朋友。」",
              "「都怪分班不公平,我要求调回和老朋友一个班。」"
            ], answer: 2,
            demoSteps: [
              { text: "先识别小凡的处境:环境变了,比较对象变了,朋友圈变了——这些是坏事还是「中性事件」?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "事件", text: "环境改变" },
                { head: "消极解读", text: "失去光环" },
                { head: "积极解读", text: "重新出发" }
              ] } },
              { text: "判断标准:哪种想法让他「往前走」,哪些让他「原地打转」甚至「往后退」?", emoji: "🧭" }
            ],
            explain: "C 正确:把变化看成机会,主动适应新环境、建立新关系,是中学时代应有的成长型心态。A 是自我放弃;B 是拒绝融入新集体;D 是逃避现实、把责任推给外界。",
            explainSteps: [
              { text: "A 选项「随便混混」:把一次排名变化当成人生定局,直接躺平——这是自我放弃,最不可取。", emoji: "❌" },
              { text: "B 选项守着旧朋友、拒绝新同学:等于把自己锁在过去,新地图永远解锁不了。", emoji: "🔒" },
              { text: "D 选项怪分班、要求调班:把问题推给外界,可环境不会永远迁就你。", emoji: "🙅" },
              { text: "C 选项:承认变化、看到机会、主动行动——三步都踩在点上,这就是「成长型思维」,选它!", emoji: "✅" },
              { text: "送恩恩一句话:中学的新起跑线,不看你从哪里来,只看你往哪里跑。", emoji: "🏃‍♀️" }
            ] }
        }
      ]
    }
  ]
};
