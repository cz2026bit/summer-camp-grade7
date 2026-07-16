// ============ 第 22 关 ============
window.DAYS = window.DAYS || {};

window.DAYS[22] = {
  day: 22,
  title: "第 22 关 · 天平的秘密",
  estimate: "四科约 2~3 小时 · 共 7 道思考题(含 1 道 BOSS 题)",
  sections: [
    // ================== 数学 ==================
    {
      subject: "math", icon: "🔢", title: "数学 · 方程与等式的性质", minutes: 50,
      units: [
        {
          name: "动画课堂 1 · 什么是方程",
          blocks: [
            { type: "lesson", title: "▶ 含未知数的等式", steps: [
              { text: "本周进入初中数学最重要的工具之一:方程!方程是含有未知数的等式,像 2x + 3 = 7。", emoji: "⚖️" },
              { text: "看清两个关键词:「含未知数」+「等式」。x + 1 = 5 是方程;而 x + 1(没有等号)只是代数式,不是方程。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "有未知数", text: "含 x 等字母" },
                { head: "有等号", text: "是等式" },
                { head: "两者都有", text: "才是方程" }
              ] } },
              { text: "「一元一次方程」:只含一个未知数(一元),未知数的次数是 1(一次),如 2x − 5 = 1。", emoji: "1️⃣", scene: { type: "clues", items: [
                { head: "一元", text: "一个未知数" },
                { head: "一次", text: "未知数最高 1 次" },
                { head: "例", text: "2x − 5 = 1" }
              ] } },
              { text: "使方程左右两边相等的未知数的值,叫方程的「解」。x=3 能使 2x+1=7 成立,所以 3 是它的解。", emoji: "🎯" },
              { text: "记住:方程 = 含未知数 + 等式。解方程,就是找出让等式成立的那个未知数的值。", emoji: "🔑" }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 2 · 等式的两条性质:天平不倒",
          blocks: [
            { type: "lesson", title: "▶ 两边同时做同样的事", steps: [
              { text: "把等式想象成一架平衡的天平。解方程的秘密武器,就是「等式的两条性质」——怎么动都保持平衡。", emoji: "⚖️" },
              { text: "性质一:等式两边同时加(或减)同一个数或式,等式仍成立。天平两边同时加同样的砝码,还是平的。", emoji: "➕", scene: { type: "clues", items: [
                { head: "性质一", text: "两边同加同减" },
                { head: "例", text: "x−3=5 → x−3+3=5+3" },
                { head: "得", text: "x = 8" }
              ] } },
              { text: "性质二:等式两边同时乘(或除以)同一个数(除数不为 0),等式仍成立。天平两边同时翻倍,还是平的。", emoji: "✖️", scene: { type: "clues", items: [
                { head: "性质二", text: "两边同乘同除" },
                { head: "例", text: "3x=12 → 3x÷3=12÷3" },
                { head: "得", text: "x = 4" }
              ] } },
              { text: "解方程的本质:利用这两条性质,把方程一步步变形,最后变成「x = 某个数」的样子。", emoji: "🎯" },
              { text: "口诀:天平两边一起动,同加同减同乘除;除数不能是零,平衡到底求出 x!", emoji: "🏅" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "利用等式的性质解方程 x − 5 = 8,下一步正确的做法是:",
            options: [
              "两边同时加 5,得 x = 13",
              "两边同时减 5,得 x = 3",
              "两边同时乘 5,得 5x = 40",
              "直接得 x = 8 − 5 = 3"
            ], answer: 0,
            demoSteps: [
              { text: "目标是让左边只剩 x。现在左边是 x − 5,要消掉 −5,该加几?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "左边", text: "x − 5" },
                { head: "消 −5", text: "两边同时 +5" },
                { head: "结果", text: "x = 13" }
              ] } },
              { text: "两边同时加 5,左边 −5+5=0 只剩 x,右边 8+5=13。", emoji: "➕" }
            ],
            explain: "A 正确。要消去左边的 −5,根据性质一两边同时加 5:x−5+5 = 8+5,得 x = 13。B、C 方向或运算错;D 结果算错。",
            explainSteps: [
              { text: "左边 x−5,要留下 x,就两边同时加 5。", emoji: "➕" },
              { text: "x − 5 + 5 = 8 + 5,得 x = 13,选 A!", emoji: "✅" },
              { text: "B 减 5 反而更乱;D 把 13 错算成 3。加还是减,看怎样能消掉常数项!", emoji: "🎯" }
            ] }
        },
        {
          name: "🔥 BOSS 挑战 · 验根大法",
          blocks: [
            { type: "text", html: "💪 <b>BOSS 战规则</b>:不用解方程,也能判断一个数是不是解——把它代回去验一验!草稿纸准备!" }
          ],
          q: { type: "fill", points: 20, boss: true, voice: "zh",
            q: "已知 x = 4 是方程 3x − a = 5 的解(a 是常数)。请求出 a 的值。(直接填数字)",
            placeholder: "例如: 5",
            accept: ["7", "a=7", "七"],
            demoSteps: [
              { text: "「x=4 是解」意味着把 x=4 代进方程,等式一定成立。", emoji: "🔑", scene: { type: "clues", items: [
                { head: "代入", text: "3×4 − a = 5" },
                { head: "算", text: "12 − a = 5" },
                { head: "求 a", text: "a = ?" }
              ] } },
              { text: "12 − a = 5,现在 a 成了未知数,反过来求它。", emoji: "🔄" }
            ],
            explain: "把 x=4 代入:3×4 − a = 5,即 12 − a = 5,所以 a = 12 − 5 = 7。",
            explainSteps: [
              { text: "x=4 是解 → 代入成立:3×4 − a = 5。", emoji: "🔑" },
              { text: "12 − a = 5,移项得 a = 12 − 5 = 7。", emoji: "🔄" },
              { text: "a = 7!「验根」的思想:解代进去等式成立,反过来能求参数。妙!", emoji: "🏆" }
            ] }
        }
      ]
    },

    // ================== 英语 ==================
    {
      subject: "english", icon: "📚", title: "英语 · 一般过去时(be 动词)", minutes: 45,
      units: [
        {
          name: "单词训练营 · 过去与回忆 12 个(点卡片听发音!)",
          blocks: [
            { type: "text", html: "🎧 今天的词带你回到<span class='hl'>过去</span>!学完就能讲昨天的事。点卡片听发音,跟读 3 遍。" },
            { type: "flashcards", words: [
              { word: "was", phonetic: "/wɒz/", cn: "是(was)", sentence: "I was at home yesterday." },
              { word: "were", phonetic: "/wɜː/", cn: "是(were)", sentence: "They were happy." },
              { word: "yesterday", phonetic: "/ˈjestədeɪ/", cn: "昨天", sentence: "It was sunny yesterday." },
              { word: "ago", phonetic: "/əˈɡəʊ/", cn: "以前", sentence: "Two days ago, I was ill." },
              { word: "last", phonetic: "/lɑːst/", cn: "上一个", sentence: "We were busy last week." },
              { word: "before", phonetic: "/bɪˈfɔː/", cn: "以前", sentence: "I was here before." },
              { word: "young", phonetic: "/jʌŋ/", cn: "年轻的", sentence: "My grandpa was young then." },
              { word: "born", phonetic: "/bɔːn/", cn: "出生", sentence: "I was born in 2013." },
              { word: "then", phonetic: "/ðen/", cn: "那时", sentence: "We were kids then." },
              { word: "past", phonetic: "/pɑːst/", cn: "过去", sentence: "That is in the past." },
              { word: "childhood", phonetic: "/ˈtʃaɪldhʊd/", cn: "童年", sentence: "My childhood was happy." },
              { word: "old", phonetic: "/əʊld/", cn: "旧的;老的", sentence: "This is my old school." }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 · 一般过去时:讲过去的事",
          blocks: [
            { type: "lesson", title: "▶ was 和 were:be 动词的过去式", steps: [
              { text: "一般过去时讲「过去发生的事、过去的状态」。今天先学 be 动词的过去式:was 和 were。", emoji: "⏮️" },
              { text: "am / is 的过去式是 was;are 的过去式是 were。口诀:I/he/she/it 用 was,you/we/they 用 were。", emoji: "🔄", scene: { type: "match", groups: [
                { head: "was", items: ["I was", "he/she/it was"] },
                { head: "were", items: ["you were", "we/they were"] }
              ] } },
              { text: "例:I was at home yesterday.(我昨天在家)/ They were happy.(他们那时很开心)。", emoji: "🏠" },
              { text: "否定加 not:wasn't / weren't。疑问把 was/were 提到句首:Were you there? — Yes, I was.", emoji: "❓", scene: { type: "clues", items: [
                { head: "肯定", text: "I was ill." },
                { head: "否定", text: "I wasn't ill." },
                { head: "疑问", text: "Were you ill?" }
              ] } },
              { text: "标志词提醒你用过去时:yesterday, last week, ... ago, then, before。看到它们,be 动词用 was/were!", emoji: "🚩" }
            ] },
            { type: "chant", lines: ["过去的事一般过去时,", "be 动词变 was were;", "I he she it 用 was,", "you we they 用 were!"] }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "选出完全正确的一句:",
            options: [
              "I were at school yesterday, and my friends was there too.",
              "I was at school yesterday, and my friends were there too.",
              "I was at school yesterday, and my friends was there too.",
              "I were at school yesterday, and my friends were there too."
            ], answer: 1,
            demoSteps: [
              { text: "两个主语:I 用 was 还是 were?my friends(复数)用哪个?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "I", text: "was" },
                { head: "my friends", text: "复数 → were" },
                { head: "两处", text: "各配各的" }
              ] } },
              { text: "yesterday 提示过去时,I 配 was,复数配 were。", emoji: "🚩" }
            ],
            explain: "B 正确:I was、my friends were(复数用 were)。A 的 I were 错;C 的 friends was 错;D 的 I were 错。",
            explainSteps: [
              { text: "I 的过去式 be 动词是 was。", emoji: "✅" },
              { text: "my friends 是复数,用 were。", emoji: "✅" },
              { text: "B 两处都对!选 B。记住:I/he/she/it → was,复数和 you → were。", emoji: "🎯" }
            ] }
        },
        {
          name: "英文名著时光 · Little Red Riding Hood",
          blocks: [
            { type: "rule", title: "📖 名著名片", html: "<b>格林/佩罗经典童话</b>《小红帽》——森林里的大灰狼,和一个关于「别和陌生人说太多」的古老提醒。" },
            { type: "reading", speakable: true, title: "Little Red Riding Hood", paragraphs: [
              "A little girl always wears a red hood, so people call her Little Red Riding Hood. One day, her mother says, 'Take this cake to your grandma. She is ill. Don't stop on the way.'",
              "In the forest, she meets a wolf. 'Where are you going?' asks the wolf. 'To my grandma's house,' she says. The clever wolf runs to grandma's house first and eats grandma up. Then he puts on grandma's clothes and waits in bed.",
              "When the girl comes, she thinks the wolf is her grandma. 'What big eyes you have!' she says. 'What big teeth you have!' Then the wolf jumps up to eat her.",
              "But a hunter is near. He hears the girl and runs in. He saves the girl and grandma from the wolf. 'Next time,' says the girl, 'I will not talk to strangers in the forest.'"
            ], tip: "生词提示:hood 兜帽 / forest 森林 / wolf 狼 / hunter 猎人 / stranger 陌生人" }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "What does Little Red Riding Hood learn at the end?(小红帽最后明白了什么?)",
            options: [
              "She should walk faster.",
              "She should not talk to strangers in the forest.",
              "She should not wear a red hood.",
              "She should bring more cake."
            ], answer: 1,
            demoSteps: [
              { text: "小红帽为什么会有危险?她最后说了什么打算?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "起因", text: "对狼说了去向" },
                { head: "教训", text: "not talk to strangers" },
                { head: "结尾", text: "她的决心" }
              ] } },
              { text: "结尾她说 I will not talk to strangers,答案就在这。", emoji: "🐺" }
            ],
            explain: "B 正确。小红帽因为对陌生的狼说出了去处才招来危险,最后她明白了不要和森林里的陌生人多说话。",
            explainSteps: [
              { text: "小红帽把去外婆家的事告诉了狼,狼才抢先害人。", emoji: "🐺" },
              { text: "她最后决心不再和陌生人多说,选 B!", emoji: "✅" },
              { text: "这个古老的故事提醒我们:对陌生人要有防范之心,保护好自己。", emoji: "🎯" }
            ] }
        }
      ]
    },

    // ================== 语文 ==================
    {
      subject: "chinese", icon: "📝", title: "语文 · 记叙文:环境描写作用", minutes: 40,
      units: [
        {
          name: "动画课堂 · 环境描写:不只是背景",
          blocks: [
            { type: "lesson", title: "▶ 自然环境与社会环境", steps: [
              { text: "写记叙文,总要交代「在哪、什么样」,这就是环境描写。它分两类:自然环境和社会环境。", emoji: "🏞️" },
              { text: "自然环境:天气、季节、山水、花草等。社会环境:时代背景、社会风气、人物的生活场所等。", emoji: "🌍", scene: { type: "clues", items: [
                { head: "自然环境", text: "天气·景物" },
                { head: "社会环境", text: "时代·场所" },
                { head: "作用", text: "不只是背景" }
              ] } },
              { text: "环境描写不是可有可无的「背景板」,它有大用处。常考它的「作用」,一定要会答。", emoji: "🎯" },
              { text: "自然环境四大作用:①交代时间地点;②渲染气氛;③烘托人物心情;④推动情节发展。", emoji: "📋", scene: { type: "clues", items: [
                { head: "交代", text: "时间地点" },
                { head: "渲染", text: "气氛" },
                { head: "烘托", text: "人物心情" }
              ] } },
              { text: "答题模板:「这里的环境描写,通过写……,渲染了……的气氛,烘托了人物……的心情(或推动了……情节)。」", emoji: "📐" }
            ] }
          ],
          q: { type: "choice", points: 10, voice: "zh",
            q: "「天灰蒙蒙的,冷风夹着雨点,打在脸上生疼。他低着头,一步步挪向那间破屋。」这段环境描写的主要作用是:",
            options: [
              "只是随便交代一下天气",
              "渲染阴冷压抑的气氛,烘托人物沉重、失落的心情",
              "说明这天不适合出门",
              "为了凑字数"
            ], answer: 1,
            demoSteps: [
              { text: "「灰蒙蒙」「冷风冷雨」营造出怎样的气氛?配上「低着头」「一步步挪」,人物什么心情?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "灰暗冷雨", text: "阴冷气氛" },
                { head: "低头挪步", text: "沉重心情" },
                { head: "作用", text: "渲染+烘托" }
              ] } },
              { text: "环境和人物心情往往是相配的,冷雨配失落。", emoji: "🌧️" }
            ],
            explain: "B 正确。灰暗的天、冷风冷雨渲染出阴冷压抑的气氛,又烘托出人物沉重、失落的心情。这正是环境描写的典型作用。",
            explainSteps: [
              { text: "「灰蒙蒙」「冷风冷雨」渲染阴冷压抑的气氛。", emoji: "🌧️" },
              { text: "配上「低头挪步」,烘托人物沉重失落的心情,选 B!", emoji: "✅" },
              { text: "环境描写绝不是背景板,它渲染气氛、烘托心情,是有大作用的!", emoji: "🎯" }
            ] }
        },
        {
          name: "动画课堂 · 情景交融:景中藏情",
          blocks: [
            { type: "lesson", title: "▶ 一切景语皆情语", steps: [
              { text: "王国维说:「一切景语皆情语。」意思是:写景的句子里,往往藏着作者的感情。景和情,是分不开的。", emoji: "💗" },
              { text: "开心时写景,景也明亮:「阳光洒在小路上,连路边的野花都在微笑。」——景明媚,因心欢喜。", emoji: "☀️", scene: { type: "clues", items: [
                { head: "心情好", text: "景物明亮" },
                { head: "心情差", text: "景物阴沉" },
                { head: "本质", text: "以景写情" }
              ] } },
              { text: "难过时写景,景也黯淡:「落叶铺满台阶,风一吹,沙沙作响,像谁在低声哭泣。」——景凄凉,因心悲伤。", emoji: "🍂" },
              { text: "这种「借景抒情、情景交融」的写法,能让感情不直白却更动人。写景其实是在写心。", emoji: "🎨" },
              { text: "读到写景句,多问一句:作者此刻是什么心情?写作时也学着「让景物替你说话」,文章更有味道。", emoji: "🎯" }
            ] }
          ],
          q: { type: "fill", points: 10, voice: "zh",
            q: "王国维说「一切景语皆__________」,意思是写景的句子往往寄托着作者的感情。(填一个字)",
            placeholder: "填一个字",
            accept: ["情", "情。", "情语", "「情」"],
            demoSteps: [
              { text: "「景语」指写景的话,那么与它相对、藏在景里的是什么?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "景语", text: "写景的句子" },
                { head: "藏着", text: "作者的?" },
                { head: "一个字", text: "情感的情" }
              ] } },
              { text: "写景其实在写「情」——填一个字。", emoji: "💗" }
            ],
            explain: "答案:情。「一切景语皆情语」——写景的句子都寄托着作者的感情,景和情是交融在一起的。",
            explainSteps: [
              { text: "「景语」是写景,「情语」是抒情。", emoji: "🎨" },
              { text: "王国维说景语皆「情」语,意思是写景就是在写心情,答「情」!", emoji: "✅" },
              { text: "记住:好的写景,都在悄悄传递感情。读景要读情,写景要含情。", emoji: "🎯" }
            ] }
        },
        {
          name: "今日彩蛋 · 名著打卡",
          blocks: [
            { type: "rule", title: "📖 睡前 20 分钟名著时间", html: "开始读<b>《骆驼祥子》</b>或继续读<b>《西游记》</b>!今晚找一处环境描写,想一想:<b>作者写这段景,是为了渲染什么气氛、烘托什么心情?</b><br>学会读「景语」背后的「情语」,你就读懂了作者的心。" }
          ],
          q: null
        }
      ]
    },

    // ================== 生物 ==================
    {
      subject: "biology", icon: "🌱", title: "生物 · 练习使用显微镜", minutes: 25,
      units: [
        {
          name: "动画课堂 · 打开微观世界的钥匙",
          blocks: [
            { type: "lesson", title: "▶ 显微镜的使用要点", steps: [
              { text: "想看清细胞这样的小东西,离不开显微镜。它是生物学最重要的工具,今天学会正确使用它。", emoji: "🔬" },
              { text: "显微镜的放大倍数 = 目镜倍数 × 物镜倍数。目镜 10×、物镜 40×,放大倍数就是 400 倍。", emoji: "✖️", scene: { type: "clues", items: [
                { head: "目镜", text: "10×" },
                { head: "物镜", text: "40×" },
                { head: "总放大", text: "10×40 = 400 倍" }
              ] } },
              { text: "一个反常识的点:显微镜里看到的像是「倒像」——上下颠倒、左右相反。要把标本往左移,像反而往右动。", emoji: "🔄", scene: { type: "clues", items: [
                { head: "看到的", text: "倒像" },
                { head: "移动方向", text: "与像相反" },
                { head: "口诀", text: "像偏哪·标本往哪移" }
              ] } },
              { text: "放大倍数越大:看到的细胞越大、数目越少、视野越暗;倍数越小:细胞越小、数目越多、视野越亮。", emoji: "💡" },
              { text: "记忆法:倍数=目镜×物镜;看到的是倒像,移动方向相反;倍数大则「大、少、暗」。这几点年年考!", emoji: "🎯" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "在显微镜下观察到物像位于视野的左上方,要把物像移到视野中央,应将玻片标本向哪个方向移动?",
            options: ["右下方", "左上方", "右上方", "左下方"], answer: 1,
            demoSteps: [
              { text: "关键:显微镜成的是倒像,移动玻片时,像的移动方向和玻片相反。", emoji: "🔄", scene: { type: "clues", items: [
                { head: "像在", text: "左上方" },
                { head: "要移到", text: "中央" },
                { head: "玻片移向", text: "和像同方向?" }
              ] } },
              { text: "「像偏哪个方向,标本就往哪个方向移」——像在左上,标本也往左上移,像才会回到中央。", emoji: "🔬" }
            ],
            explain: "B 正确。因为显微镜成倒像,物像与玻片移动方向相反。像在左上方,要把它移到中央,玻片就要往左上方移动(像偏哪,玻片往哪移)。",
            explainSteps: [
              { text: "显微镜成倒像,玻片和像的移动方向相反。", emoji: "🔄" },
              { text: "像在左上方,想让它回中央,玻片就往左上方移(与像同向),选 B!", emoji: "✅" },
              { text: "记住口诀:「物像偏哪边,玻片往哪移」,方向一致,别被「相反」绕晕。", emoji: "🎯" }
            ] }
        }
      ]
    }
  ]
};
