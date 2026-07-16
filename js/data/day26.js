// ============ 第 26 关 ============
window.DAYS = window.DAYS || {};

window.DAYS[26] = {
  day: 26,
  title: "第 26 关 · 和差倍分",
  estimate: "四科约 2~3 小时 · 共 7 道思考题(含 1 道 BOSS 题)",
  sections: [
    // ================== 数学 ==================
    {
      subject: "math", icon: "🔢", title: "数学 · 方程应用:和差倍分", minutes: 50,
      units: [
        {
          name: "动画课堂 1 · 列方程解应用题:五步走",
          blocks: [
            { type: "lesson", title: "▶ 从「文字」到「方程」", steps: [
              { text: "方程最厉害的用处,是解应用题。以前用算术要绕着弯想,现在用方程,顺着题意就能列。", emoji: "🚀" },
              { text: "列方程解应用题「五步走」:审(读懂题)、设(设未知数)、列(列方程)、解(解方程)、答(写答案)。", emoji: "📋", scene: { type: "clues", items: [
                { head: "审", text: "读懂题意" },
                { head: "设", text: "设未知数 x" },
                { head: "列", text: "找等量关系" }
              ] } },
              { text: "最关键的是「找等量关系」——题目里那句能画等号的话。「甲比乙多 5」→ 甲 = 乙 + 5。", emoji: "🔑" },
              { text: "「和差倍分」类题:两个量的和、差、倍数关系。如「两数之和是 20,一个是另一个的 3 倍」。", emoji: "➕", scene: { type: "clues", items: [
                { head: "和", text: "甲 + 乙 = 20" },
                { head: "倍", text: "甲 = 3 乙" },
                { head: "设小的为 x", text: "列方程" }
              ] } },
              { text: "小技巧:设未知数时,一般把「较小的量」或「问题所求」设为 x,列式更顺。五步走稳,应用题不难!", emoji: "🎯" }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 2 · 和差倍分实战",
          blocks: [
            { type: "lesson", title: "▶ 设一个 x,表示所有量", steps: [
              { text: "和差倍分题的诀窍:抓住倍数关系,用一个 x 把所有量都表示出来。", emoji: "🔗" },
              { text: "例:两个数的和是 40,大数是小数的 3 倍。设小数为 x,那么大数就是 3x。", emoji: "🧮", scene: { type: "clues", items: [
                { head: "设小数", text: "x" },
                { head: "大数", text: "3x" },
                { head: "等量关系", text: "x + 3x = 40" }
              ] } },
              { text: "等量关系是「两数之和 = 40」,列方程:x + 3x = 40。合并:4x = 40,解得 x = 10。", emoji: "🔑" },
              { text: "别忘回答完整!小数 x = 10,大数 3x = 30。题目问什么就答什么,两个都要写清楚。", emoji: "✍️", scene: { type: "clues", items: [
                { head: "解出 x", text: "小数=10" },
                { head: "求大数", text: "3×10=30" },
                { head: "作答", text: "两数分别是 10 和 30" }
              ] } },
              { text: "口诀:倍数关系设 x,一个 x 表全部;抓住和差列方程,解完别忘全写清!", emoji: "🏅" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "两个数的和是 48,其中一个数是另一个数的 5 倍。设较小的数为 x,列出的方程正确的是:",
            options: ["x + 5 = 48", "5x = 48", "x + 5x = 48", "x − 5x = 48"], answer: 2,
            demoSteps: [
              { text: "设较小的数为 x,那么较大的数(是它的 5 倍)是多少?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "小数", text: "x" },
                { head: "大数", text: "5x(5 倍)" },
                { head: "关系", text: "两数之和 = 48" }
              ] } },
              { text: "等量关系是「小数 + 大数 = 48」,即 x + 5x = 48。", emoji: "➕" }
            ],
            explain: "C 正确。较小数是 x,较大数是 5x,两数之和 48,所以 x + 5x = 48。A、B 漏了一个数;D 用了差而非和。",
            explainSteps: [
              { text: "小数 x,大数是它的 5 倍 = 5x。", emoji: "🔗" },
              { text: "两数之和 = 48,列方程 x + 5x = 48,选 C!", emoji: "✅" },
              { text: "解出来 6x=48,x=8,大数 40。A、B 只写了一个量,列不出正确方程。", emoji: "🎯" }
            ] }
        },
        {
          name: "🔥 BOSS 挑战 · 分书大作战",
          blocks: [
            { type: "text", html: "💪 <b>BOSS 战规则</b>:完整走一遍「审设列解答」!用方程解决分配问题。草稿纸准备!" }
          ],
          q: { type: "fill", points: 20, boss: true, voice: "zh",
            q: "图书馆把 120 本书分给两个班,一班分到的书是二班的 2 倍。设二班分到 x 本,可列方程 x + 2x = 120。请求出二班分到多少本?(直接填数字)",
            placeholder: "例如: 30",
            accept: ["40", "40本", "四十"],
            demoSteps: [
              { text: "设二班 x 本,一班是二班 2 倍 = 2x 本,两班共 120 本。", emoji: "📚", scene: { type: "clues", items: [
                { head: "二班", text: "x 本" },
                { head: "一班", text: "2x 本" },
                { head: "方程", text: "x + 2x = 120" }
              ] } },
              { text: "合并:x + 2x = 3x,得 3x = 120,再除以 3。", emoji: "🧮" }
            ],
            explain: "x + 2x = 120,合并 3x = 120,系数化 1:x = 40。二班分到 40 本(一班 80 本)。",
            explainSteps: [
              { text: "合并同类项:x + 2x = 3x,方程变 3x = 120。", emoji: "🧮" },
              { text: "两边除以 3:x = 40,二班 40 本!", emoji: "✅" },
              { text: "验算:二班 40 + 一班 80 = 120,对!五步走一遍,应用题拿下!", emoji: "🏆" }
            ] }
        }
      ]
    },

    // ================== 英语 ==================
    {
      subject: "english", icon: "📚", title: "英语 · 阅读理解专项(记叙文)", minutes: 45,
      units: [
        {
          name: "单词训练营 · 故事高频词 12 个(点卡片听发音!)",
          blocks: [
            { type: "text", html: "🎧 今天的词都是<span class='hl'>记叙类短文</span>里的常客!认识它们,读故事更顺。点卡片听发音,跟读 3 遍。" },
            { type: "flashcards", words: [
              { word: "one day", phonetic: "/wʌn deɪ/", cn: "有一天", sentence: "One day, a boy found a dog." },
              { word: "suddenly", phonetic: "/ˈsʌdənli/", cn: "突然", sentence: "Suddenly, it started to rain." },
              { word: "finally", phonetic: "/ˈfaɪnəli/", cn: "最后", sentence: "Finally, they got home." },
              { word: "because", phonetic: "/bɪˈkɒz/", cn: "因为", sentence: "He cried because he was lost." },
              { word: "so", phonetic: "/səʊ/", cn: "所以", sentence: "It was cold, so I stayed in." },
              { word: "but", phonetic: "/bʌt/", cn: "但是", sentence: "She was tired but happy." },
              { word: "after", phonetic: "/ˈɑːftə/", cn: "在…之后", sentence: "After lunch, we played." },
              { word: "then", phonetic: "/ðen/", cn: "然后", sentence: "Then he opened the box." },
              { word: "help", phonetic: "/help/", cn: "帮助", sentence: "A man helped the old woman." },
              { word: "happy", phonetic: "/ˈhæpi/", cn: "快乐的", sentence: "The ending is happy." },
              { word: "afraid", phonetic: "/əˈfreɪd/", cn: "害怕的", sentence: "The girl was afraid of the dark." },
              { word: "learn", phonetic: "/lɜːn/", cn: "懂得;学到", sentence: "He learned an important lesson." }
            ] }
          ],
          q: null
        },
        {
          name: "阅读侦探 · A Lost Dog",
          blocks: [
            { type: "text", html: "🕵️ <b>侦探任务</b>:读记叙文抓「五要素」——时间、地点、人物、发生了什么、结果如何。带着这五个问题去读!" },
            { type: "reading", speakable: true, title: "A Lost Dog", paragraphs: [
              "Last Sunday, Tom was walking in the park. Suddenly, he saw a small dog under a tree. The dog looked hungry and afraid. There was no one with it.",
              "Tom looked at the dog's collar. On it there was a name — 'Lucky' — and a phone number. Tom took out his phone and called the number.",
              "A few minutes later, a girl ran to the park. 'Lucky! Lucky!' she cried. The dog ran to her happily. The girl said 'Thank you' to Tom again and again. She lost her dog in the morning and looked for it everywhere.",
              "Tom felt very happy on his way home. Helping others, he thought, makes me happy too."
            ], tip: "生词提示:park 公园 / hungry 饥饿的 / collar 项圈 / number 号码 / everywhere 到处" }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "How did Tom find the owner of the dog?(汤姆是怎么找到狗主人的?)",
            options: [
              "He asked people in the park.",
              "He called the phone number on the dog's collar.",
              "He took the dog to the police.",
              "The girl was standing next to him."
            ], answer: 1,
            demoSteps: [
              { text: "汤姆在狗的项圈上发现了什么?他用它做了什么?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "项圈上", text: "名字 + 电话号码" },
                { head: "汤姆", text: "called the number" },
                { head: "结果", text: "女孩赶来" }
              ] } },
              { text: "原文说他拨打了项圈上的电话号码。", emoji: "📞" }
            ],
            explain: "B 正确。汤姆在狗的项圈上看到了名字和电话号码,于是拨打那个号码,联系上了狗的主人。",
            explainSteps: [
              { text: "汤姆看到项圈上有名字 Lucky 和一个电话号码。", emoji: "📞" },
              { text: "他打了这个号码,女孩很快赶来,选 B!", emoji: "✅" },
              { text: "读记叙文抓五要素:时间(上周日)、地点(公园)、人物、事件、结果,答题就有据可依。", emoji: "🎯" }
            ] }
        },
        {
          name: "英文名著时光 · The Ant and the Dove",
          blocks: [
            { type: "rule", title: "📖 名著名片", html: "<b>《伊索寓言》Aesop's Fables</b>——蚂蚁和鸽子互相救助,善良会回到善良的人身边。" },
            { type: "reading", speakable: true, title: "The Ant and the Dove", paragraphs: [
              "One hot day, an ant is thirsty. He goes to the river to drink. But he slips and falls into the water! The ant can't swim. 'Help! Help!' he cries.",
              "A dove in a tree sees the ant. She quickly drops a leaf into the water. The ant climbs onto the leaf and floats to the bank. He is safe! 'Thank you, kind dove,' says the ant.",
              "Some days later, a hunter comes. He sees the dove in the tree and raises his gun. The little ant sees this. He runs fast and bites the hunter's foot.",
              "'Ouch!' shouts the hunter, and his gun misses. The dove hears the noise and flies away safely. Now the ant has saved the dove, just as the dove once saved him. One good turn deserves another."
            ], tip: "生词提示:thirsty 口渴的 / slip 滑倒 / dove 鸽子 / leaf 叶子 / hunter 猎人 / bite 咬" }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "How does the ant save the dove?(蚂蚁是怎样救鸽子的?)",
            options: [
              "He drops a leaf for the dove.",
              "He bites the hunter's foot so the gun misses.",
              "He flies the dove away.",
              "He calls other animals for help."
            ], answer: 1,
            demoSteps: [
              { text: "猎人要打鸽子时,小蚂蚁做了什么?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "猎人", text: "举枪瞄准鸽子" },
                { head: "蚂蚁", text: "咬猎人的脚" },
                { head: "结果", text: "枪打偏了" }
              ] } },
              { text: "蚂蚁咬了猎人的脚,枪就打偏了。", emoji: "🐜" }
            ],
            explain: "B 正确。猎人举枪要打鸽子时,小蚂蚁咬了猎人的脚,猎人一疼,枪打偏了,鸽子得以逃走。",
            explainSteps: [
              { text: "之前鸽子丢下树叶救了落水的蚂蚁。", emoji: "🕊️" },
              { text: "这次蚂蚁咬猎人的脚,枪打偏,救了鸽子,选 B!", emoji: "✅" },
              { text: "寓意:好心有好报,你帮别人,别人也会在关键时刻帮你。", emoji: "🎯" }
            ] }
        }
      ]
    },

    // ================== 语文 ==================
    {
      subject: "chinese", icon: "📝", title: "语文 · 《行军九日思长安故园》", minutes: 40,
      units: [
        {
          name: "动画课堂 · 岑参:战乱中的重阳节",
          blocks: [
            { type: "lesson", title: "▶ 一朵菊花,寄托家国之思", steps: [
              { text: "《行军九日思长安故园》是唐代边塞诗人岑参写的。「九日」指农历九月初九重阳节,当时长安正被叛军占领。", emoji: "🌼" },
              { text: "「强欲登高去,无人送酒来。」——重阳节本该登高饮菊花酒,可身在行军途中,勉强想登高,却没有人送酒来。", emoji: "⛰️", scene: { type: "clues", items: [
                { head: "重阳习俗", text: "登高·饮菊花酒" },
                { head: "现实", text: "行军中·无人送酒" },
                { head: "情绪", text: "孤独凄凉" }
              ] } },
              { text: "「遥怜故园菊,应傍战场开。」——远远地怜惜故乡长安的菊花,它们应该正开在战场旁边吧。", emoji: "💔", scene: { type: "clues", items: [
                { head: "遥怜", text: "远远地怜惜" },
                { head: "故园菊", text: "长安的菊花" },
                { head: "战场开", text: "战乱之痛" }
              ] } },
              { text: "妙在结尾:诗人不写自己多想家,却去心疼故乡战场旁的菊花。以「菊」寄情,把对家乡的思念和对战乱的痛惜,写得含蓄深沉。", emoji: "🎭" },
              { text: "全诗借一个重阳节、一朵故园菊,写尽了游子思乡之情和忧国忧民之心。小小菊花,承载千斤重的家国情。", emoji: "🎯" }
            ] }
          ],
          q: { type: "choice", points: 10, voice: "zh",
            q: "《行军九日思长安故园》中「遥怜故园菊,应傍战场开」一句,主要表达了诗人怎样的情感?",
            options: [
              "单纯喜爱菊花",
              "对故乡的思念和对战乱中人民的忧虑、对和平的渴望",
              "觉得战场上开花很美",
              "想回家赏菊喝酒"
            ], answer: 1,
            demoSteps: [
              { text: "「故园菊」指哪里的菊?「傍战场开」暗示了什么现实?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "故园菊", text: "长安(故乡)" },
                { head: "战场开", text: "长安正遭战乱" },
                { head: "情感", text: "思乡 + 忧国" }
              ] } },
              { text: "菊花开在战场旁,诗人心疼的仅仅是花吗?", emoji: "💔" }
            ],
            explain: "B 正确。诗人借「故园菊」寄托对沦陷故乡的思念,「傍战场开」暗写战乱之痛,表达了思乡之情和忧国忧民、渴望和平的心。",
            explainSteps: [
              { text: "「故园菊」是长安的菊花,寄托思乡之情。", emoji: "🌼" },
              { text: "「傍战场开」暗写长安战乱,表达对战乱和百姓的忧虑,选 B!", emoji: "✅" },
              { text: "诗人以菊寄情,思乡与忧国交织,这就是古诗「含蓄」的魅力。", emoji: "🎯" }
            ] }
        },
        {
          name: "动画课堂 · 借物抒情:让物件替我说话",
          blocks: [
            { type: "lesson", title: "▶ 托物言志与借物抒情", steps: [
              { text: "这首诗用了「借物抒情」——不直接说情感,而是借一个物件(菊花)把情感表达出来。这是古诗常用的高级手法。", emoji: "🌼" },
              { text: "为什么借物?因为直接喊「我想家」太直白。借一朵故园菊,思念就有了寄托,含蓄而深沉,更耐人回味。", emoji: "💭", scene: { type: "clues", items: [
                { head: "直接抒情", text: "我很想家(直白)" },
                { head: "借物抒情", text: "遥怜故园菊(含蓄)" },
                { head: "效果", text: "深沉·有味" }
              ] } },
              { text: "「借物抒情」重在抒发感情;还有「托物言志」,重在借物表明志向(如借梅花表清高)。二者相近,略有侧重。", emoji: "⚖️" },
              { text: "古诗里常见的「情感寄托物」:月亮(思乡)、柳(送别)、菊(高洁/思乡)、梅(坚强)、雁(思念)。", emoji: "🈺" },
              { text: "读古诗记住:看到反复写的某个物件,想一想——诗人借它寄托了什么情感或志向?", emoji: "🎯" }
            ] }
          ],
          q: { type: "fill", points: 10, voice: "zh",
            q: "《行军九日思长安故园》不直接说思乡,而是借「故园菊」来寄托情感,这种手法叫「借物__________情」。(填一个字)",
            placeholder: "填一个字",
            accept: ["抒", "抒。", "抒情", "「抒」"],
            demoSteps: [
              { text: "借一个物件来「表达、抒发」感情,叫「借物__情」?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "借物", text: "借菊花" },
                { head: "?情", text: "表达感情" },
                { head: "一个字", text: "抒发的抒" }
              ] } },
              { text: "借物来「抒发」感情——填「抒」。", emoji: "💭" }
            ],
            explain: "答案:抒。「借物抒情」指借助某个物件来抒发感情,比直接抒情更含蓄、更有韵味。",
            explainSteps: [
              { text: "借「故园菊」抒发思乡忧国之情 = 借物抒情。", emoji: "🌼" },
              { text: "它比直接说「我想家」更含蓄、更动人。", emoji: "✅" },
              { text: "答「抒」。借物抒情、托物言志是古诗鉴赏的高频考点!", emoji: "🎯" }
            ] }
        },
        {
          name: "今日彩蛋 · 名著打卡",
          blocks: [
            { type: "rule", title: "📖 睡前 20 分钟名著时间", html: "继续读名著!岑参借一朵故园菊思念家乡。今晚背一背《行军九日思长安故园》,再想一想:<b>如果让你借一样东西表达对某人的思念,你会选什么?</b><br>月亮、老照片、一支旧钢笔……借物抒情,你也可以试试!" }
          ],
          q: null
        }
      ]
    },

    // ================== 生物 ==================
    {
      subject: "biology", icon: "🌱", title: "生物 · 开花与结果", minutes: 25,
      units: [
        {
          name: "动画课堂 · 从一朵花到一颗果",
          blocks: [
            { type: "lesson", title: "▶ 传粉、受精、结果", steps: [
              { text: "一朵花怎么变成一颗果实?这背后藏着植物繁殖的大秘密。今天揭开它。", emoji: "🌸" },
              { text: "花的主要结构是雄蕊和雌蕊。雄蕊的花药里有花粉;雌蕊的下部是子房,里面有胚珠。它们是结果的关键。", emoji: "🌼", scene: { type: "clues", items: [
                { head: "雄蕊", text: "花药有花粉" },
                { head: "雌蕊", text: "子房内有胚珠" },
                { head: "关键", text: "花粉 + 胚珠" }
              ] } },
              { text: "第一步传粉:花粉从花药落到雌蕊柱头上。可以靠风、靠昆虫(蜜蜂、蝴蝶)传播。", emoji: "🐝" },
              { text: "第二步受精:花粉萌发,把精子送到胚珠里与卵细胞结合。受精之后,花就开始「变身」了。", emoji: "💫", scene: { type: "clues", items: [
                { head: "传粉", text: "花粉→柱头" },
                { head: "受精", text: "精卵结合" },
                { head: "结果", text: "子房→果实" }
              ] } },
              { text: "受精后:子房发育成果实,胚珠发育成种子。所以——先传粉受精,才能结果!记住这条主线。", emoji: "🍎" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "关于花的结构和结果过程,下列说法正确的一项是:",
            options: [
              "花不需要传粉和受精就能直接结果",
              "传粉后经过受精,子房发育成果实,胚珠发育成种子",
              "果实是由花瓣发育来的",
              "花粉里含有卵细胞"
            ], answer: 1,
            demoSteps: [
              { text: "回忆结果的顺序:传粉→受精→谁变成果实?谁变成种子?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "子房", text: "→ 果实" },
                { head: "胚珠", text: "→ 种子" },
                { head: "前提", text: "先传粉受精" }
              ] } },
              { text: "把「不用受精」「花瓣变果实」「花粉含卵细胞」的错误说法排除。", emoji: "🔍" }
            ],
            explain: "B 正确。A 错(必须先传粉受精);C 错(果实由子房发育而来,不是花瓣);D 错(花粉里是精子,卵细胞在胚珠里)。",
            explainSteps: [
              { text: "A:不传粉受精就无法结果,错。", emoji: "❌" },
              { text: "C:果实是子房发育来的,花瓣会凋谢,错。", emoji: "❌" },
              { text: "D:花粉含精子,卵细胞在胚珠里,错。", emoji: "❌" },
              { text: "B:传粉→受精→子房变果实、胚珠变种子,主线正确!选 B。", emoji: "✅" }
            ] }
        }
      ]
    }
  ]
};
