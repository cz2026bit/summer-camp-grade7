// ============ 第 24 关 ============
window.DAYS = window.DAYS || {};

window.DAYS[24] = {
  day: 24,
  title: "第 24 关 · 拆掉括号解方程",
  estimate: "四科约 2~3 小时 · 共 7 道思考题(含 1 道 BOSS 题)",
  sections: [
    // ================== 数学 ==================
    {
      subject: "math", icon: "🔢", title: "数学 · 解方程:去括号", minutes: 50,
      units: [
        {
          name: "动画课堂 1 · 带括号的方程,先去括号",
          blocks: [
            { type: "lesson", title: "▶ 用上前几天的去括号本领", steps: [
              { text: "有些方程带着括号,像 2(x + 3) = 10。解它的第一步:先去括号!把前几天学的本领用上。", emoji: "📦" },
              { text: "去括号规则复习:括号前的数字要乘括号里的每一项!2(x+3) = 2x + 6,别只乘 x 忘了 3。", emoji: "✖️", scene: { type: "clues", items: [
                { head: "2(x+3)", text: "2×x + 2×3" },
                { head: "= 2x + 6", text: "每项都乘" },
                { head: "易错", text: "别漏乘 3" }
              ] } },
              { text: "括号前是负号更要小心:−2(x−1) = −2x + 2,每一项都乘 −2,符号全要管好。", emoji: "⚠️" },
              { text: "去括号后,方程就变成了熟悉的样子,再按「移项→合并→系数化 1」往下解。", emoji: "🔧", scene: { type: "clues", items: [
                { head: "第一步", text: "去括号" },
                { head: "第二步", text: "移项" },
                { head: "第三步", text: "合并·化简" }
              ] } },
              { text: "口诀:带括号,先拆开;数字乘遍每一项,负号符号别搞错。拆完再按老步骤,方程照样迎刃解!", emoji: "🎯" }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 2 · 完整解一个带括号方程",
          blocks: [
            { type: "lesson", title: "▶ 一步一步,稳稳当当", steps: [
              { text: "来完整解一个:2(x + 1) = 3x − 4。跟着走,每一步都清清楚楚。", emoji: "🚶" },
              { text: "第一步去括号:2×x + 2×1 = 3x − 4,即 2x + 2 = 3x − 4。", emoji: "📦", scene: { type: "clues", items: [
                { head: "去括号", text: "2x + 2 = 3x − 4" },
                { head: "下一步", text: "移项" }
              ] } },
              { text: "第二步移项:含 x 的移一边、常数移另一边(都变号!)。2x − 3x = −4 − 2。", emoji: "🔄", scene: { type: "clues", items: [
                { head: "3x 移左", text: "变 −3x" },
                { head: "+2 移右", text: "变 −2" },
                { head: "得", text: "2x−3x = −4−2" }
              ] } },
              { text: "第三步合并:−x = −6。第四步系数化 1:两边除以 −1,x = 6。", emoji: "➗" },
              { text: "别忘验算!把 x=6 代回原方程:左 2(6+1)=14,右 3×6−4=14,相等!解对了。", emoji: "✅" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "解方程 3(x − 2) = x + 4,正确的解是:",
            options: ["x = 5", "x = 1", "x = −5", "x = 10"], answer: 0,
            demoSteps: [
              { text: "先去括号:3×x − 3×2 = x + 4,即 3x − 6 = x + 4。", emoji: "📦", scene: { type: "clues", items: [
                { head: "去括号", text: "3x − 6 = x + 4" },
                { head: "移项", text: "3x − x = 4 + 6" },
                { head: "合并", text: "2x = 10" }
              ] } },
              { text: "移项(变号!):3x − x = 4 + 6,合并 2x = 10。", emoji: "🔄" }
            ],
            explain: "去括号:3x−6 = x+4;移项:3x−x = 4+6;合并:2x = 10;化简:x = 5。选 A。",
            explainSteps: [
              { text: "去括号:3(x−2) = 3x − 6,方程变 3x − 6 = x + 4。", emoji: "📦" },
              { text: "移项:3x − x = 4 + 6 → 2x = 10。", emoji: "🔄" },
              { text: "系数化 1:x = 5,选 A!验算:3(5−2)=9,5+4=9,相等。", emoji: "✅" }
            ] }
        },
        {
          name: "🔥 BOSS 挑战 · 买文具",
          blocks: [
            { type: "text", html: "💪 <b>BOSS 战规则</b>:用带括号的方程解决购物问题!设未知数、列方程、解出来。草稿纸准备!" }
          ],
          q: { type: "fill", points: 20, boss: true, voice: "zh",
            q: "恩恩买了 3 支单价相同的笔和一个 5 元的笔记本,一共花了 20 元。设每支笔 x 元,可列方程 3x + 5 = 20。请解出每支笔多少元?(直接填数字)",
            placeholder: "例如: 3",
            accept: ["5", "5元", "五", "五元"],
            demoSteps: [
              { text: "3 支笔 3x 元,加上 5 元笔记本,共 20 元:3x + 5 = 20。", emoji: "✏️", scene: { type: "clues", items: [
                { head: "3 支笔", text: "3x 元" },
                { head: "笔记本", text: "5 元" },
                { head: "方程", text: "3x + 5 = 20" }
              ] } },
              { text: "移项:3x = 20 − 5 = 15,再除以 3。", emoji: "🔄" }
            ],
            explain: "3x + 5 = 20,移项:3x = 20 − 5 = 15,系数化 1:x = 15 ÷ 3 = 5。每支笔 5 元。",
            explainSteps: [
              { text: "移项:3x = 20 − 5 = 15。", emoji: "🔄" },
              { text: "两边除以 3:x = 5,每支笔 5 元!", emoji: "✅" },
              { text: "验算:3×5 + 5 = 20,对!方程是解应用题的万能钥匙。", emoji: "🏆" }
            ] }
        }
      ]
    },

    // ================== 英语 ==================
    {
      subject: "english", icon: "📚", title: "英语 · 一般过去时(不规则动词)", minutes: 45,
      units: [
        {
          name: "单词训练营 · 不规则过去式 12 个(点卡片听发音!)",
          blocks: [
            { type: "text", html: "🎧 今天的动词过去式<span class='hl'>不按套路</span>,要单独记!点卡片听发音,跟读 3 遍。" },
            { type: "flashcards", words: [
              { word: "go → went", phonetic: "/went/", cn: "去(过去式)", sentence: "I went to the zoo." },
              { word: "have → had", phonetic: "/hæd/", cn: "有(过去式)", sentence: "We had a good time." },
              { word: "see → saw", phonetic: "/sɔː/", cn: "看见(过去式)", sentence: "I saw a big panda." },
              { word: "do → did", phonetic: "/dɪd/", cn: "做(过去式)", sentence: "She did her homework." },
              { word: "eat → ate", phonetic: "/eɪt/", cn: "吃(过去式)", sentence: "We ate lunch at noon." },
              { word: "get → got", phonetic: "/ɡɒt/", cn: "得到(过去式)", sentence: "He got a nice gift." },
              { word: "come → came", phonetic: "/keɪm/", cn: "来(过去式)", sentence: "They came home late." },
              { word: "make → made", phonetic: "/meɪd/", cn: "制作(过去式)", sentence: "Mum made a cake." },
              { word: "take → took", phonetic: "/tʊk/", cn: "拿(过去式)", sentence: "I took some photos." },
              { word: "buy → bought", phonetic: "/bɔːt/", cn: "买(过去式)", sentence: "She bought a new bag." },
              { word: "is/am → was", phonetic: "/wɒz/", cn: "是(过去式)", sentence: "It was sunny." },
              { word: "run → ran", phonetic: "/ræn/", cn: "跑(过去式)", sentence: "The dog ran fast." }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 · 不规则动词:只能一个个记",
          blocks: [
            { type: "lesson", title: "▶ 不加 ed,自成一家", steps: [
              { text: "上次学了规则动词加 ed。但英语里有一批「叛逆」的动词,过去式不加 ed,长相完全变了——不规则动词。", emoji: "🎭" },
              { text: "它们没有统一规则,只能一个个记。最常用的一批必须背熟:go→went, have→had, see→saw, do→did。", emoji: "📚", scene: { type: "clues", items: [
                { head: "go", text: "→ went" },
                { head: "have", text: "→ had" },
                { head: "see", text: "→ saw" }
              ] } },
              { text: "有的变化大:eat→ate, buy→bought, take→took;有的变化小:come→came, run→ran, get→got。", emoji: "🔀" },
              { text: "注意:不规则动词只是「过去式形式」特殊,用法和规则动词一样——照样表示过去,照样配 yesterday/last...。", emoji: "⏮️", scene: { type: "clues", items: [
                { head: "规则动词", text: "加 ed" },
                { head: "不规则动词", text: "单独记" },
                { head: "用法", text: "完全相同" }
              ] } },
              { text: "记忆法:不规则动词没捷径,每天记几个,常翻「动词过去式表」。用得多了,自然张口就来!", emoji: "🎯" }
            ] },
            { type: "chant", lines: ["不规则动词真调皮,", "过去式要单独记;", "go 变 went,see 变 saw,", "多读多背记心里!"] }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "选出动词过去式全部正确的一句:",
            options: [
              "Yesterday we goed to the park and eated ice cream.",
              "Yesterday we went to the park and ate ice cream.",
              "Yesterday we went to the park and eatte ice cream.",
              "Yesterday we goed to the park and ate ice cream."
            ], answer: 1,
            demoSteps: [
              { text: "go 和 eat 是不规则动词,它们的过去式是什么?能不能加 ed?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "go", text: "→ went(不是 goed)" },
                { head: "eat", text: "→ ate(不是 eated)" },
                { head: "不规则", text: "不加 ed" }
              ] } },
              { text: "两个都是不规则动词,go→went,eat→ate,不能加 ed。", emoji: "🎭" }
            ],
            explain: "B 正确:went、ate 是 go、eat 的正确过去式。A 的 goed/eated 错;C 的 eatte 错;D 的 goed 错。不规则动词不加 ed！",
            explainSteps: [
              { text: "go 的过去式是 went,不是 goed。", emoji: "🎭" },
              { text: "eat 的过去式是 ate,不是 eated。", emoji: "🎭" },
              { text: "B 两个都对!选 B。不规则动词的过去式只能死记硬背。", emoji: "✅" }
            ] }
        },
        {
          name: "英文名著时光 · Puss in Boots",
          blocks: [
            { type: "rule", title: "📖 名著名片", html: "<b>佩罗童话 Perrault</b>《穿靴子的猫》——一只聪明的猫,用智慧为贫穷的主人赢来了城堡和幸福。" },
            { type: "reading", speakable: true, title: "Puss in Boots", paragraphs: [
              "A poor young man gets only a cat from his father. But this is a clever cat! 'Give me a pair of boots and a bag,' says the cat, 'and I will help you.'",
              "The clever cat catches rabbits and gives them to the king as gifts from 'my master, the Marquis.' The king is very pleased. Day after day, the cat brings gifts, and the king likes the young man more and more.",
              "One day the cat goes to a giant's castle. 'I hear you can change into any animal,' says the cat. 'Can you become a mouse?' The proud giant becomes a tiny mouse — and the cat eats him up! Now the castle belongs to the cat's master.",
              "The king comes to the great castle and meets the young man. He is so impressed that he lets the young man marry the princess. And so, thanks to his clever cat, the poor young man lives happily ever after."
            ], tip: "生词提示:boots 靴子 / clever 聪明的 / marquis 侯爵 / giant 巨人 / marry 娶" }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "How does the cat get the giant's castle for his master?(猫怎样为主人得到巨人的城堡?)",
            options: [
              "He buys it with gold.",
              "He tricks the giant into becoming a mouse and eats him.",
              "He fights the giant with a sword.",
              "The king gives it to him."
            ], answer: 1,
            demoSteps: [
              { text: "猫是靠力气还是靠智慧?它怎么骗巨人的?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "巨人", text: "会变身" },
                { head: "猫", text: "激他变成老鼠" },
                { head: "结果", text: "猫吃掉巨人" }
              ] } },
              { text: "猫故意问巨人能不能变成老鼠,巨人一变就被吃掉了。", emoji: "🐱" }
            ],
            explain: "B 正确。聪明的猫用激将法让骄傲的巨人变成一只小老鼠,然后一口吃掉它,城堡就归了主人。",
            explainSteps: [
              { text: "猫夸巨人能变身,又激他变成老鼠。", emoji: "🐱" },
              { text: "骄傲的巨人一变成老鼠就被猫吃掉,城堡到手,选 B!", emoji: "✅" },
              { text: "这只猫靠的全是智慧。聪明和机智,有时比力量更管用。", emoji: "🎯" }
            ] }
        }
      ]
    },

    // ================== 语文 ==================
    {
      subject: "chinese", icon: "📝", title: "语文 · 《诫子书》预习", minutes: 40,
      units: [
        {
          name: "动画课堂 · 诸葛亮写给儿子的一封信",
          blocks: [
            { type: "lesson", title: "▶ 86 字,道尽修身与治学", steps: [
              { text: "《诫子书》是诸葛亮临终前写给儿子诸葛瞻的一封家书,只有 86 个字,却字字珠玑,是千古家训名篇。", emoji: "✉️" },
              { text: "开篇立论:「夫君子之行,静以修身,俭以养德。」——君子靠「静」来修养身心,靠「俭」来培养品德。", emoji: "🧘", scene: { type: "clues", items: [
                { head: "静以修身", text: "宁静修养" },
                { head: "俭以养德", text: "节俭养德" },
                { head: "核心", text: "静与俭" }
              ] } },
              { text: "千古名句:「非淡泊无以明志,非宁静无以致远。」——不看淡名利就不能明确志向,不宁静就不能实现远大目标。", emoji: "🌟", scene: { type: "clues", items: [
                { head: "淡泊", text: "才能明志" },
                { head: "宁静", text: "才能致远" },
                { head: "警句", text: "淡泊明志·宁静致远" }
              ] } },
              { text: "谈学习:「夫学须静也,才须学也。」——学习必须宁静专一,才干来自学习。强调「静」与「学」的重要。", emoji: "📖" },
              { text: "结尾惜时:「年与时驰,意与日去……」告诫儿子珍惜时光,别等到年老「悲守穷庐」才后悔。", emoji: "⏳" }
            ] }
          ],
          q: { type: "choice", points: 10, voice: "zh",
            q: "《诫子书》中「非淡泊无以明志,非宁静无以致远」这句话,诸葛亮想告诫儿子:",
            options: [
              "要多赚钱,生活富裕",
              "只有看淡名利、内心宁静,才能明确志向、实现远大目标",
              "要安安静静地待在家里",
              "淡泊和宁静没什么用"
            ], answer: 1,
            demoSteps: [
              { text: "拆句:「淡泊」才能怎样?「宁静」才能怎样?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "淡泊", text: "→ 明志(明确志向)" },
                { head: "宁静", text: "→ 致远(实现远大目标)" },
                { head: "告诫", text: "修身求学之道" }
              ] } },
              { text: "「明志」是明确志向,「致远」是实现远大目标,这是在讲修身治学的道理。", emoji: "🌟" }
            ],
            explain: "B 正确。「淡泊」指看淡名利,「宁静」指内心平静。只有淡泊宁静,才能明确志向、实现远大目标。这是修身与治学的至理。",
            explainSteps: [
              { text: "「非淡泊无以明志」——不看淡名利,志向就不明确。", emoji: "🌟" },
              { text: "「非宁静无以致远」——内心不宁静,就走不远、成不了大事,选 B!", emoji: "✅" },
              { text: "「淡泊明志,宁静致远」已成千古名句,是修身治学的金玉良言。", emoji: "🎯" }
            ] }
        },
        {
          name: "动画课堂 · 文言词:夫、以、之的用法",
          blocks: [
            { type: "lesson", title: "▶ 读懂虚词,读通全文", steps: [
              { text: "《诫子书》里有几个文言虚词反复出现,读懂它们,全文就通了。今天认识「夫、以、之」。", emoji: "🔑" },
              { text: "「夫」(fú):放在句首,是发语词,表示要发议论,不用翻译。「夫君子之行」的「夫」就是这样。", emoji: "🗣️", scene: { type: "clues", items: [
                { head: "夫(fú)", text: "句首发语词" },
                { head: "作用", text: "引出议论" },
                { head: "翻译", text: "不译" }
              ] } },
              { text: "「以」:这里表「用来、凭借」。「静以修身」= 用宁静来修养身心,「俭以养德」= 用节俭来培养品德。", emoji: "🔗" },
              { text: "「之」:「君子之行」的「之」是「的」,作结构助词。文言里「之」用法多,常见的就是「的」。", emoji: "📎" },
              { text: "学文言虚词口诀:一词一记看位置——句首的「夫」不翻译,「以」多表「用来」,「之」常作「的」。", emoji: "🎯" }
            ] }
          ],
          q: { type: "fill", points: 10, voice: "zh",
            q: "《诫子书》「静以修身,俭以养德」中的「以」,意思是「__________」。(填两个字,表示凭借、手段)",
            placeholder: "填两个字",
            accept: ["用来", "用来。", "凭借", "用以"],
            demoSteps: [
              { text: "「静以修身」翻译成:用什么来修身?「以」在这里是连接手段和目的的词。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "静", text: "宁静(手段)" },
                { head: "以", text: "?" },
                { head: "修身", text: "目的" }
              ] } },
              { text: "「静以修身」= 用宁静「来」修身,「以」表示「用来」。", emoji: "🔗" }
            ],
            explain: "「以」意思是「用来、凭借」。「静以修身」即「用宁静来修养身心」,「俭以养德」即「用节俭来培养品德」。",
            explainSteps: [
              { text: "「静以修身」= 凭借宁静来修身,「以」= 用来/凭借。", emoji: "🔗" },
              { text: "「俭以养德」同理,用节俭来养德。", emoji: "✅" },
              { text: "答「用来」。文言虚词「以」最常见的意思就是「用来、凭借」。", emoji: "🎯" }
            ] }
        },
        {
          name: "今日彩蛋 · 名著打卡",
          blocks: [
            { type: "rule", title: "📖 睡前 20 分钟名著时间", html: "继续读名著!诸葛亮用 86 个字告诫儿子「淡泊明志,宁静致远」。今晚把这八个字抄在书桌前,想一想:<b>这个暑假,我的「志」是什么?我能静下心来读书吗?</b><br>一封千年前的家书,今天依然能点亮你的心。" }
          ],
          q: null
        }
      ]
    },

    // ================== 历史 ==================
    {
      subject: "history", icon: "🏺", title: "历史 · 丝绸之路", minutes: 25,
      units: [
        {
          name: "动画课堂 · 一条连接东西方的路",
          blocks: [
            { type: "lesson", title: "▶ 张骞凿空,丝路千年", steps: [
              { text: "两千多年前,汉朝开辟了一条连接中国与中亚、西亚乃至欧洲的贸易通道——丝绸之路。它的开辟离不开一个人:张骞。", emoji: "🐫" },
              { text: "汉武帝派张骞两次出使西域。他历尽艰险,「凿空」了通往西域的道路,让汉朝了解了外面的世界。", emoji: "🧭", scene: { type: "clues", items: [
                { head: "派遣者", text: "汉武帝" },
                { head: "出使者", text: "张骞" },
                { head: "功绩", text: "凿空西域" }
              ] } },
              { text: "陆上丝绸之路的大致路线:长安 → 河西走廊 → 西域 → 中亚、西亚 → 欧洲(大秦)。", emoji: "🗺️", scene: { type: "clues", items: [
                { head: "起点", text: "长安" },
                { head: "必经", text: "河西走廊" },
                { head: "终点", text: "欧洲(大秦)" }
              ] } },
              { text: "丝路运的可不只是丝绸:中国的丝绸、瓷器、铁器西传,西域的葡萄、核桃、良马、乐器东来,还有佛教也沿此传入。", emoji: "🎁" },
              { text: "意义:丝绸之路是东西方经济文化交流的桥梁,促进了不同文明的交融。记住「张骞、长安、河西走廊」三个关键词!", emoji: "🌉" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "关于丝绸之路,下列说法正确的一项是:",
            options: [
              "丝绸之路是秦始皇派郑和开辟的",
              "陆上丝绸之路从长安出发,经河西走廊、西域通往中亚、西亚和欧洲",
              "丝绸之路上只运送丝绸,别的什么都不运",
              "丝绸之路只对中国有利,对其他国家没有影响"
            ], answer: 1,
            demoSteps: [
              { text: "回忆三个关键词:是谁派谁开辟?起点是哪?运的只有丝绸吗?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "开辟", text: "汉武帝派张骞" },
                { head: "起点", text: "长安" },
                { head: "运输", text: "丝绸·瓷器·葡萄·佛教…" }
              ] } },
              { text: "把人物错乱、绝对化的说法排除。", emoji: "🔍" }
            ],
            explain: "B 正确。A 错(是汉武帝派张骞,不是秦始皇和郑和);C 错(还运瓷器、葡萄、良马等,还传播文化宗教);D 错(它促进了东西方双向交流)。",
            explainSteps: [
              { text: "A:开辟丝路的是汉武帝派张骞,郑和是明朝下西洋(海上),张冠李戴!", emoji: "❌" },
              { text: "C:丝路运的东西很多,还传入了佛教等文化,错。", emoji: "❌" },
              { text: "D:它是东西方双向交流的桥梁,对各方都有影响,错。", emoji: "❌" },
              { text: "B:长安→河西走廊→西域→欧洲,路线正确!选 B。", emoji: "✅" }
            ] }
        }
      ]
    }
  ]
};
