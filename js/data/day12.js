// ============ 第 12 关 ============
window.DAYS = window.DAYS || {};

window.DAYS[12] = {
  day: 12,
  title: "第 12 关 · 混合运算的顺序",
  estimate: "四科约 2~3 小时 · 共 7 道思考题(含 1 道 BOSS 题)",
  sections: [
    // ================== 数学 ==================
    {
      subject: "math", icon: "🔢", title: "数学 · 有理数混合运算", minutes: 50,
      units: [
        {
          name: "动画课堂 1 · 运算顺序:先算谁后算谁",
          blocks: [
            { type: "lesson", title: "▶ 混合运算的交通规则", steps: [
              { text: "一个算式里又有加减、又有乘除、还有乘方,先算哪个?数学有一套「交通规则」,谁都不能闯。", emoji: "🚦" },
              { text: "三级顺序:先算乘方(第一级),再算乘除(第二级),最后算加减(第三级)。", emoji: "🥇", scene: { type: "clues", items: [
                { head: "第一步", text: "乘方" },
                { head: "第二步", text: "乘除" },
                { head: "第三步", text: "加减" }
              ] } },
              { text: "有括号先算括号里的,从小括号到中括号,由里到外。括号是「加急通道」,优先放行!", emoji: "🚑" },
              { text: "例:2 + 3 × (−2)²。先乘方 (−2)²=4,再乘 3×4=12,最后加 2+12=14。一步都不能乱。", emoji: "🧮", scene: { type: "clues", items: [
                { head: "先乘方", text: "(−2)²=4" },
                { head: "再乘", text: "3×4=12" },
                { head: "后加", text: "2+12=14" }
              ] } },
              { text: "口诀:先乘方,后乘除,最后加减别着急;有括号,先里头。顺序对了,答案才对!", emoji: "🎯" }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 2 · 带负号的混合运算:符号是命门",
          blocks: [
            { type: "lesson", title: "▶ 每一步都盯紧符号", steps: [
              { text: "混合运算里出了负数,顺序不变,但每一步都要盯紧符号,一个符号错,满盘皆输。", emoji: "🔍" },
              { text: "例:(−2)³ − 4 ÷ (−2)。先乘方:(−2)³ = −8;再除:4 ÷ (−2) = −2。", emoji: "🎲", scene: { type: "clues", items: [
                { head: "乘方", text: "(−2)³ = −8" },
                { head: "除法", text: "4 ÷(−2)= −2" },
                { head: "剩下", text: "−8 −(−2)" }
              ] } },
              { text: "现在剩 −8 − (−2)。念减法变身咒语:−8 + 2 = −6。别把 −(−2) 写成 −2!", emoji: "🪄" },
              { text: "常见陷阱:−8 − (−2) 一慌就写成 −8 − 2 = −10。看到「减负数」,先变加号再算!", emoji: "⚠️", scene: { type: "numberline", from: -8, to: -6 } },
              { text: "口诀升级版:顺序照旧(方→乘除→加减),符号每步都验,减负数记得变身。稳扎稳打得满分!", emoji: "🏅" }
            ] },
            { type: "numberline" }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "计算 −2² + 6 ÷ (−3) 的结果是:",
            options: ["−2", "−6", "2", "6"], answer: 1,
            demoSteps: [
              { text: "先看 −2²:负号在括号外!先算 2²=4,再取负 = −4。", emoji: "❗", scene: { type: "clues", items: [
                { head: "−2²", text: "= −(2²) = −4" },
                { head: "6÷(−3)", text: "= −2" },
                { head: "相加", text: "−4 +(−2)" }
              ] } },
              { text: "再算 6 ÷ (−3) = −2,最后 −4 + (−2)。", emoji: "🧮" }
            ],
            explain: "−2² = −(2²) = −4;6 ÷ (−3) = −2;−4 + (−2) = −6。选 B。",
            explainSteps: [
              { text: "关键:−2² 的负号在外,先乘方 2²=4 再取负 = −4(不是 +4!)。", emoji: "❗" },
              { text: "6 ÷ (−3):异号得负 = −2。", emoji: "🎲" },
              { text: "最后 −4 + (−2) = −6,选 B!", emoji: "✅" },
              { text: "A、C 错在把 −2² 当成了 (−2)²= +4。括号内外,天壤之别!", emoji: "🎯" }
            ] }
        },
        {
          name: "🔥 BOSS 挑战 · 温度的一天",
          blocks: [
            { type: "text", html: "💪 <b>BOSS 战规则</b>:综合运用乘方、乘除、加减!把一天的温度变化算清楚。草稿纸准备!" }
          ],
          q: { type: "fill", points: 20, boss: true, voice: "zh",
            q: "计算:(−3)² − 2 × (−4) + (−10) ÷ 5。请算出最后结果。(直接填数字,含正负号)",
            placeholder: "例如: 5",
            accept: ["15", "+15", "十五"],
            demoSteps: [
              { text: "先乘方:(−3)² = 9。再乘除:2×(−4)=−8,(−10)÷5=−2。", emoji: "🧮", scene: { type: "clues", items: [
                { head: "乘方", text: "(−3)²=9" },
                { head: "乘除", text: "2×(−4)=−8;(−10)÷5=−2" },
                { head: "剩下", text: "9 −(−8)+(−2)" }
              ] } },
              { text: "代回原式:9 − (−8) + (−2)。减负数变身:9 + 8 − 2。", emoji: "🪄" }
            ],
            explain: "(−3)²=9;2×(−4)=−8,原式的「−2×(−4)」= +8;(−10)÷5=−2。合起来 9 + 8 − 2 = 15。",
            explainSteps: [
              { text: "第一级乘方:(−3)² = 9。", emoji: "🥇" },
              { text: "第二级乘除:−2×(−4) = +8;+(−10)÷5 = −2。", emoji: "🥈" },
              { text: "第三级加减:9 + 8 + (−2) = 15!", emoji: "🥉" },
              { text: "混合运算像闯三关:方→乘除→加减,每关盯紧符号,满分到手!", emoji: "🏆" }
            ] }
        }
      ]
    },

    // ================== 英语 ==================
    {
      subject: "english", icon: "📚", title: "英语 · 可数与不可数名词", minutes: 45,
      units: [
        {
          name: "单词训练营 · 食物与容器 12 个(点卡片听发音!)",
          blocks: [
            { type: "text", html: "🎧 今天的词有的能数、有的不能数!学完就明白为什么。点卡片听发音,跟读 3 遍。" },
            { type: "flashcards", words: [
              { word: "water", phonetic: "/ˈwɔːtə/", cn: "水", sentence: "I drink a lot of water." },
              { word: "milk", phonetic: "/mɪlk/", cn: "牛奶", sentence: "There is some milk in the cup." },
              { word: "bread", phonetic: "/bred/", cn: "面包", sentence: "I want some bread." },
              { word: "rice", phonetic: "/raɪs/", cn: "米饭", sentence: "We eat rice for lunch." },
              { word: "meat", phonetic: "/miːt/", cn: "肉", sentence: "He doesn't eat much meat." },
              { word: "apple", phonetic: "/ˈæpl/", cn: "苹果", sentence: "I have two apples." },
              { word: "egg", phonetic: "/eɡ/", cn: "鸡蛋", sentence: "There are three eggs." },
              { word: "banana", phonetic: "/bəˈnɑːnə/", cn: "香蕉", sentence: "She likes bananas." },
              { word: "cup", phonetic: "/kʌp/", cn: "杯子", sentence: "A cup of tea, please." },
              { word: "bottle", phonetic: "/ˈbɒtl/", cn: "瓶子", sentence: "A bottle of water is here." },
              { word: "glass", phonetic: "/ɡlɑːs/", cn: "玻璃杯", sentence: "Two glasses of juice." },
              { word: "piece", phonetic: "/piːs/", cn: "块;片", sentence: "A piece of bread." }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 · 能数不能数,方法大不同",
          blocks: [
            { type: "lesson", title: "▶ 可数名词 vs 不可数名词", steps: [
              { text: "英语名词分两类:能一个两个数出来的是可数名词(apple, egg);数不出个数的是不可数名词(water, bread)。", emoji: "🔢", scene: { type: "match", groups: [
                { head: "可数(能数)", items: ["apple 苹果", "egg 鸡蛋", "cup 杯子"] },
                { head: "不可数(不能数)", items: ["water 水", "bread 面包", "milk 牛奶"] }
              ] } },
              { text: "可数名词有单复数:one apple, two apples;前面可加 a/an 或数字。", emoji: "➕" },
              { text: "不可数名词没有复数,不能直接说 a water!要「借容器」来数:a glass of water, a piece of bread。", emoji: "🥛", scene: { type: "clues", items: [
                { head: "a cup of", text: "tea / coffee" },
                { head: "a glass of", text: "water / milk" },
                { head: "a piece of", text: "bread / paper" }
              ] } },
              { text: "问「多少」用词也不同:可数用 How many（＋复数),不可数用 How much。", emoji: "❓" },
              { text: "口诀:能数加 s 用 many,不能数借容器用 much。分清两类,量词不再乱!", emoji: "🎯" }
            ] },
            { type: "chant", lines: ["名词可数不可数,", "可数复数加 s 数;", "不可数要借容器,", "many much 别用错!"] }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "选出完全正确的一句:",
            options: [
              "I want two breads and a milk.",
              "How much water do you drink every day?",
              "There are many water in the bottle.",
              "She has three rices for lunch."
            ], answer: 1,
            demoSteps: [
              { text: "先分类:bread、milk、water、rice 是可数还是不可数?", emoji: "🔢", scene: { type: "clues", items: [
                { head: "不可数", text: "bread milk water rice" },
                { head: "不能加 s", text: "不能 breads/rices" },
                { head: "问多少", text: "用 much" }
              ] } },
              { text: "不可数名词不能加 s、不能加 a、问量用 much,照这三条筛。", emoji: "🔍" }
            ],
            explain: "B 正确:water 不可数,问量用 How much。A 的 breads、a milk 错;C 的 water 不可数应用 much/is;D 的 rices 错。",
            explainSteps: [
              { text: "A:bread、milk 不可数,不能说 two breads、a milk,错。", emoji: "❌" },
              { text: "C:water 不可数,不能用 many,也不能 are,错。", emoji: "❌" },
              { text: "D:rice 不可数,没有 rices,错。", emoji: "❌" },
              { text: "B:How much water,不可数配 much,正确!选 B。", emoji: "✅" }
            ] }
        },
        {
          name: "英文名著时光 · The Emperor's New Clothes",
          blocks: [
            { type: "rule", title: "📖 名著名片", html: "<b>安徒生 Andersen</b>《皇帝的新装》——一个孩子的一句真话,戳穿了所有大人的谎言。" },
            { type: "reading", speakable: true, title: "The Emperor's New Clothes", paragraphs: [
              "Long ago, there is an emperor who loves new clothes. One day, two men come. 'We can make magic clothes,' they say. 'Only clever people can see them. Foolish people see nothing.'",
              "Of course, there are no clothes at all. But nobody wants to look foolish. So everyone says, 'What beautiful clothes!' The emperor can't see the clothes either, but he says nothing.",
              "The emperor walks through the town in his 'new clothes'. All the people say, 'How beautiful!' They are afraid to tell the truth.",
              "Then a little child shouts, 'But the emperor has no clothes on!' Everyone knows the child is right. Sometimes only a child is brave enough to tell the truth."
            ], tip: "生词提示:emperor 皇帝 / magic 魔法的 / foolish 愚蠢的 / brave 勇敢的 / truth 真相" }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "Why does everyone say the clothes are beautiful?(为什么大家都说衣服很美?)",
            options: [
              "Because the clothes are really beautiful.",
              "Because they don't want to look foolish.",
              "Because the emperor pays them money.",
              "Because they can't see anything at all."
            ], answer: 1,
            demoSteps: [
              { text: "骗子说什么样的人看不见衣服?大家怕被当成哪种人?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "骗子说", text: "foolish people see nothing" },
                { head: "大家怕", text: "被当成愚蠢" },
                { head: "所以", text: "假装看得见" }
              ] } },
              { text: "原文 nobody wants to look foolish,答案就在这里。", emoji: "👀" }
            ],
            explain: "B 正确。骗子说只有愚蠢的人看不见,谁也不想被当成蠢人,所以大家都假装衣服很美,不敢说真话。",
            explainSteps: [
              { text: "骗子设的圈套:蠢人才看不见——于是人人都怕承认。", emoji: "🎭" },
              { text: "为了不显得愚蠢,大家都跟着撒谎,选 B!", emoji: "✅" },
              { text: "只有小孩说了真话。寓意:别被虚荣和从众绑架,要有说真话的勇气。", emoji: "🎯" }
            ] }
        }
      ]
    },

    // ================== 语文 ==================
    {
      subject: "chinese", icon: "📝", title: "语文 · 修辞:比喻与拟人", minutes: 40,
      units: [
        {
          name: "动画课堂 · 比喻:打个比方更生动",
          blocks: [
            { type: "lesson", title: "▶ 本体、喻体、比喻词", steps: [
              { text: "比喻就是「打比方」:用一个熟悉的事物去说明另一个事物,让抽象变具体,让平淡变生动。", emoji: "🎨" },
              { text: "比喻有三个零件:被比的叫本体,拿来比的叫喻体,连接词叫比喻词(像、好像、仿佛、是)。", emoji: "🧩", scene: { type: "clues", items: [
                { head: "本体", text: "被比的(月亮)" },
                { head: "喻体", text: "拿来比的(玉盘)" },
                { head: "比喻词", text: "像 / 好像 / 是" }
              ] } },
              { text: "分三种:明喻(A 像 B)、暗喻(A 是 B)、借喻(直接用 B 代 A)。「月亮像玉盘」是明喻。", emoji: "🌕" },
              { text: "关键提醒:有「像」不一定是比喻!「他长得像他爸爸」是同类比较,不是比喻。比喻要「两种不同事物」。", emoji: "⚠️" },
              { text: "判断比喻两条件:本体喻体是不同类事物 + 有相似点。二者缺一,就不是比喻。", emoji: "🔑" }
            ] }
          ],
          q: { type: "choice", points: 10, voice: "zh",
            q: "下列句子中,不是比喻句的一项是:",
            options: [
              "月亮像一个大玉盘挂在天上。",
              "小明长得很像他的哥哥。",
              "这本书是我的良师益友。",
              "天上的云像一群奔跑的白马。"
            ], answer: 1,
            demoSteps: [
              { text: "比喻要求本体和喻体是「不同类」事物。逐句看:谁比谁?是不是同类?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "月亮比玉盘", text: "不同类 ✓" },
                { head: "小明比哥哥", text: "都是人 ✗" },
                { head: "书比良师", text: "不同类 ✓" }
              ] } },
              { text: "「小明像哥哥」是两个人相比,同类,不算比喻。", emoji: "👬" }
            ],
            explain: "B 不是比喻。小明和哥哥都是人,属于同类比较。A(月亮/玉盘)、C(书/良师)、D(云/白马)都是不同类事物打比方,是比喻。",
            explainSteps: [
              { text: "A、D 是明喻,C 是暗喻(是),本体喻体都是不同类事物,都是比喻。", emoji: "✅" },
              { text: "B「小明像哥哥」——两个人比外貌,是同类比较,不是比喻!", emoji: "👬" },
              { text: "记住:有「像」未必是比喻,关键看是不是「不同类 + 有相似」。选 B。", emoji: "🎯" }
            ] }
        },
        {
          name: "动画课堂 · 拟人:让万物开口说话",
          blocks: [
            { type: "lesson", title: "▶ 把物当人写", steps: [
              { text: "拟人就是把事物当作人来写,让它有人的动作、表情、情感。花会笑,风会唱,星星会眨眼。", emoji: "🌟" },
              { text: "例:「小草偷偷地从土里钻出来。」——「偷偷地」是人的神态,小草被写活了,充满生机。", emoji: "🌱", scene: { type: "clues", items: [
                { head: "本是物", text: "小草" },
                { head: "赋予", text: "偷偷地(人的神态)" },
                { head: "效果", text: "生动有情" }
              ] } },
              { text: "拟人和比喻的区别:比喻是「把物比成另一物」,拟人是「把物当成人」。拟人句里往往没有喻体。", emoji: "🔀" },
              { text: "拟人的作用:让描写生动形象,富有情趣，还能表达作者的喜爱之情。写景作文的秘密武器!", emoji: "✍️" },
              { text: "小口诀:比喻靠喻体(像什么),拟人靠人化(会做人的事)。判断时先找有没有「人的动作情感」。", emoji: "🎯" }
            ] }
          ],
          q: { type: "fill", points: 10, voice: "zh",
            q: "「春天来了,柳树摆动着长长的辫子,向人们招手。」这句话运用的修辞手法是__________。(填两个字)",
            placeholder: "填两个字",
            accept: ["拟人", "拟人。", "拟人手法"],
            demoSteps: [
              { text: "句中柳树做了什么?「摆辫子」「招手」是谁才有的动作?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "柳树", text: "本是植物" },
                { head: "招手", text: "人的动作" },
                { head: "手法", text: "把物当人写" }
              ] } },
              { text: "把柳树当人来写,赋予它人的动作,这是哪种修辞?", emoji: "🌳" }
            ],
            explain: "答案:拟人。柳树本是植物,句中却「摆辫子」「招手」,赋予了人的动作,是典型的拟人。",
            explainSteps: [
              { text: "「摆辫子」「向人招手」都是人的动作,柳树被写成了人。", emoji: "🌳" },
              { text: "把物当人写 = 拟人。注意:句中没有「像什么」,不是比喻!", emoji: "✅" },
              { text: "拟人让景物有了情感和生命,是写景作文提分的好帮手。", emoji: "🎯" }
            ] }
        },
        {
          name: "今日彩蛋 · 名著打卡",
          blocks: [
            { type: "rule", title: "📖 睡前 20 分钟名著时间", html: "继续读<b>《西游记》</b>!今晚找一处景物描写,判断作者用了<b>比喻还是拟人</b>——比如「山如画屏,水似银带」是比喻,「松涛阵阵,似在低语」是拟人。<br>会分辨,你的阅读理解就又强了一分!" }
          ],
          q: null
        }
      ]
    },

    // ================== 生物 ==================
    {
      subject: "biology", icon: "🌱", title: "生物 · 植物细胞与动物细胞", minutes: 25,
      units: [
        {
          name: "动画课堂 · 两种细胞,同中有异",
          blocks: [
            { type: "lesson", title: "▶ 植物细胞和动物细胞比一比", steps: [
              { text: "上次认识了细胞。今天来对比:植物细胞和动物细胞,哪些一样、哪些不一样?", emoji: "🔬" },
              { text: "共同「标配」:都有细胞膜(管进出)、细胞质(干活)、细胞核(总指挥)。这三样两种细胞都有。", emoji: "🤝", scene: { type: "clues", items: [
                { head: "共有", text: "细胞膜" },
                { head: "共有", text: "细胞质" },
                { head: "共有", text: "细胞核" }
              ] } },
              { text: "植物细胞的「专属装备」:细胞壁(最外面的硬壳,保护支撑)、液泡(装细胞液)、叶绿体(制造养料)。", emoji: "🌿", scene: { type: "clues", items: [
                { head: "细胞壁", text: "植物特有·支撑" },
                { head: "叶绿体", text: "植物特有·光合" },
                { head: "液泡", text: "植物明显" }
              ] } },
              { text: "动物细胞没有细胞壁、没有叶绿体、一般没有大液泡。所以动物不能自己制造养料,得靠吃。", emoji: "🐾" },
              { text: "记忆法:植物比动物多三样——壁、绿体、大液泡。有叶绿体才能晒太阳做饭(光合作用)!", emoji: "☀️" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "下列结构中,植物细胞有而动物细胞一般没有的一组是:",
            options: [
              "细胞膜、细胞质、细胞核",
              "细胞壁、叶绿体、液泡",
              "细胞核、叶绿体、细胞膜",
              "细胞质、细胞壁、细胞核"
            ], answer: 1,
            demoSteps: [
              { text: "先划出「两种细胞都有」的三样,再找「只有植物有」的。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "共有", text: "膜·质·核" },
                { head: "植物独有", text: "壁·叶绿体·液泡" },
                { head: "选项", text: "找全是独有的那组" }
              ] } },
              { text: "细胞膜、细胞质、细胞核是共有的,含它们的选项都排除。", emoji: "🚫" }
            ],
            explain: "B 正确。细胞壁、叶绿体、液泡是植物细胞特有(动物细胞一般没有)。A、C、D 都含有两种细胞共有的结构。",
            explainSteps: [
              { text: "细胞膜、质、核是两者共有,凡含这些的选项(A、C、D)都不对。", emoji: "🚫" },
              { text: "只有 B 三样全是植物独有:细胞壁、叶绿体、液泡!", emoji: "✅" },
              { text: "记住「壁、绿体、大液泡」是植物三件套,选 B。", emoji: "🎯" }
            ] }
        }
      ]
    }
  ]
};
