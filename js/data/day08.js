// ============ 第 8 关 ============
window.DAYS = window.DAYS || {};

window.DAYS[8] = {
  day: 8,
  title: "第 8 关 · 加减混合闯关",
  estimate: "四科约 2~3 小时 · 共 7 道思考题(含 1 道 BOSS 题)",
  sections: [
    // ================== 数学 ==================
    {
      subject: "math", icon: "🔢", title: "数学 · 有理数加减混合运算", minutes: 50,
      units: [
        {
          name: "动画课堂 1 · 减法先变身,再统一成加法",
          blocks: [
            { type: "lesson", title: "▶ 把混合算式变成「纯加法」", steps: [
              { text: "混合运算里又有加又有减,像一锅乱炖。第一招:把所有减法都念咒语变成加法!", emoji: "🪄" },
              { text: "例:3 − 5 + 2 − 8,先变身:3 + (−5) + 2 + (−8)。整锅只剩加号,清爽多了。", emoji: "🍲", scene: { type: "clues", items: [
                { head: "原式", text: "3 − 5 + 2 − 8" },
                { head: "变身", text: "3 +(−5)+ 2 +(−8)" },
                { head: "好处", text: "只剩加法" }
              ] } },
              { text: "第二招:符号跟着数字走。每个数前面的正负号,就是它的「身份证」,搬家时一起带走。", emoji: "🪪" },
              { text: "现在可以随便调换顺序:3 + 2 + (−5) + (−8),正数一队、负数一队。", emoji: "🚶" },
              { text: "记住两句话:先变身(减变加),再归队(同号相加)。这是混合运算的黄金流程。", emoji: "🏅" }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 2 · 凑整与归队:算得又快又对",
          blocks: [
            { type: "lesson", title: "▶ 加法交换律 · 结合律大显身手", steps: [
              { text: "变身之后,加法交换律和结合律就能大展身手——想怎么搭配就怎么搭配。", emoji: "🔀" },
              { text: "凑整优先:−12 + 45 + 12 里,−12 和 +12 是一对相反数,先抵消得 0,只剩 45!", emoji: "🎯", scene: { type: "clues", items: [
                { head: "找相反数", text: "−12 与 +12" },
                { head: "先抵消", text: "得 0" },
                { head: "剩下", text: "45" }
              ] } },
              { text: "同号归队:正数加正数、负数加负数,分别算出两个「总和」,最后一次拔河。", emoji: "🏉" },
              { text: "例:8 + (−15) + 12 + (−5) → 正队 8+12=20,负队 15+5=20 → 20 − 20 = 0!", emoji: "⚖️", scene: { type: "numberline", from: 0, to: 0 } },
              { text: "口诀:能凑整先凑整,同号先归队,最后正负拔一次河。速度和正确率一起飞!", emoji: "🚀" }
            ] },
            { type: "numberline" }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "计算 −8 + 15 − 7 + 3 的最简便方法和结果是:",
            options: [
              "从左到右硬算,结果 3",
              "先凑整:(−8 −7) + (15 + 3) = −15 + 18 = 3",
              "先凑整:(−8 −7) + (15 + 3) = −15 + 18 = 33",
              "结果是 −3"
            ], answer: 1,
            demoSteps: [
              { text: "先变身:−8 + 15 + (−7) + 3,再把负数归一队、正数归一队。", emoji: "🪄", scene: { type: "clues", items: [
                { head: "负队", text: "−8, −7" },
                { head: "正队", text: "15, 3" },
                { head: "各求和", text: "?" }
              ] } },
              { text: "负队 8+7=15 记作 −15,正队 15+3=18,最后 −15 + 18。", emoji: "🏉" }
            ],
            explain: "同号归队:负数 −8 和 −7 合成 −15,正数 15 和 3 合成 18,−15 + 18 = 3。选 B。",
            explainSteps: [
              { text: "变身:−8 + 15 + (−7) + 3。", emoji: "🪄" },
              { text: "负队:−8 +(−7)= −15;正队:15 + 3 = 18。", emoji: "🏉" },
              { text: "最后拔河:−15 + 18,正方赢 3,结果 3。选 B!", emoji: "💪", scene: { type: "numberline", from: -15, to: 3 } },
              { text: "C 算错(18+15 弄成 33),D 符号搞反。归队法又快又稳!", emoji: "🎯" }
            ] }
        },
        {
          name: "🔥 BOSS 挑战 · 电梯上上下下",
          blocks: [
            { type: "text", html: "💪 <b>BOSS 战规则</b>:一栋 20 层的写字楼,电梯忙个不停!上楼记正、下楼记负,请你算出它最后停在几楼。草稿纸准备!" }
          ],
          q: { type: "fill", points: 20, boss: true, voice: "zh",
            q: "电梯从 1 楼出发:上升 8 层,下降 5 层,再上升 6 层,又下降 3 层。算式 1 + 8 − 5 + 6 − 3,电梯最后停在几楼?(直接填数字)",
            placeholder: "例如: 5",
            accept: ["7", "7楼", "七", "七楼", "7层"],
            demoSteps: [
              { text: "出发点是 1 楼,不是 0!把每次升降接在 1 后面。", emoji: "🛗", scene: { type: "clues", items: [
                { head: "起点", text: "1 楼" },
                { head: "上升记", text: "+8  +6" },
                { head: "下降记", text: "−5  −3" }
              ] } },
              { text: "变身归队:上升总和 8+6=14,下降总和 5+3=8。", emoji: "🏉" },
              { text: "1 + 14 − 8,一步到位。", emoji: "🧮" }
            ],
            explain: "1 + 8 − 5 + 6 − 3 = 1 + (8+6) − (5+3) = 1 + 14 − 8 = 7 楼。",
            explainSteps: [
              { text: "起点 1 楼;上升 8+6=14 层,下降 5+3=8 层。", emoji: "🏉" },
              { text: "1 + 14 − 8 = 7,电梯停在 7 楼!", emoji: "🛗" },
              { text: "陷阱在起点:忘了从 1 出发会算成 6 楼。列式先写起点,稳!", emoji: "🏆" }
            ] }
        }
      ]
    },

    // ================== 英语 ==================
    {
      subject: "english", icon: "📚", title: "英语 · 一般现在时(I/you/we/they)", minutes: 45,
      units: [
        {
          name: "单词训练营 · 日常动作 12 个(点卡片听发音!)",
          blocks: [
            { type: "text", html: "🎧 今天的单词都是<span class='hl'>每天做的动作</span>!学完就能说出自己的一天。点卡片听发音,跟读 3 遍。" },
            { type: "flashcards", words: [
              { word: "get up", phonetic: "/ɡet ʌp/", cn: "起床", sentence: "I get up at six." },
              { word: "eat", phonetic: "/iːt/", cn: "吃", sentence: "We eat breakfast together." },
              { word: "go", phonetic: "/ɡəʊ/", cn: "去", sentence: "They go to school by bus." },
              { word: "study", phonetic: "/ˈstʌdi/", cn: "学习", sentence: "I study English every day." },
              { word: "play", phonetic: "/pleɪ/", cn: "玩;打(球)", sentence: "We play basketball after class." },
              { word: "read", phonetic: "/riːd/", cn: "读", sentence: "I read books at night." },
              { word: "run", phonetic: "/rʌn/", cn: "跑", sentence: "They run in the park." },
              { word: "drink", phonetic: "/drɪŋk/", cn: "喝", sentence: "I drink milk in the morning." },
              { word: "watch", phonetic: "/wɒtʃ/", cn: "看(电视)", sentence: "We watch TV on Sunday." },
              { word: "sleep", phonetic: "/sliːp/", cn: "睡觉", sentence: "I sleep at ten." },
              { word: "like", phonetic: "/laɪk/", cn: "喜欢", sentence: "They like music." },
              { word: "have", phonetic: "/hæv/", cn: "有;吃", sentence: "We have lunch at noon." }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 · 一般现在时:讲习惯的时态",
          blocks: [
            { type: "lesson", title: "▶ 天天做的事,就用一般现在时", steps: [
              { text: "一般现在时讲的是「习惯、事实、经常做的事」:我每天七点起床、地球绕着太阳转。", emoji: "🔁" },
              { text: "主语是 I / you / we / they 时,动词用原形,不加任何尾巴。I get up. You go. We play.", emoji: "✅", scene: { type: "match", groups: [
                { head: "动词原形", items: ["I go", "you play", "we read"] },
                { head: "常配时间词", items: ["every day", "usually", "always"] }
              ] } },
              { text: "否定句加 don't:I don't like fish. They don't watch TV.don't = do not。", emoji: "🚫" },
              { text: "疑问句把 do 提到句首:Do you like music? — Yes, I do. / No, I don't.", emoji: "❓", scene: { type: "clues", items: [
                { head: "肯定", text: "I like it." },
                { head: "否定", text: "I don't like it." },
                { head: "疑问", text: "Do you like it?" }
              ] } },
              { text: "标志词提醒你用它:every day / always / usually / often。看到它们,动词记得用原形!", emoji: "🚩" }
            ] },
            { type: "chant", lines: ["习惯事实一般时,", "I/you/we/they 用原形;", "否定加 don't,", "疑问 Do 提前行!"] }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "选出完全正确的一句:",
            options: [
              "I likes music, and they doesn't like sports.",
              "Do you go to school every day? Yes, I do.",
              "They plays football, and we watches TV.",
              "You doesn't like fish, do you?"
            ], answer: 1,
            demoSteps: [
              { text: "主语 I/you/we/they 时,动词和助动词都不加 s。先圈出加了 s 的错句。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "I/we/you/they", text: "动词原形" },
                { head: "助动词", text: "用 do / don't" },
                { head: "不能用", text: "does / doesn't" }
              ] } },
              { text: "只有一句所有动词都是原形、助动词都是 do,那就是答案。", emoji: "✅" }
            ],
            explain: "B 正确:Do you...? Yes, I do. 全用原形和 do。A 的 likes、doesn't 错;C 的 plays、watches 错;D 的 doesn't 应为 don't。",
            explainSteps: [
              { text: "A:I likes(多了 s)、they doesn't(应 don't),错。", emoji: "❌" },
              { text: "C:they plays、we watches 都多了 s,错。", emoji: "❌" },
              { text: "D:you 该配 don't,却用 doesn't,错。", emoji: "❌" },
              { text: "B:Do you go...? Yes, I do. 全对!I/you/we/they 就认 do 和原形。", emoji: "✅" }
            ] }
        },
        {
          name: "英文名著时光 · The Tortoise and the Hare",
          blocks: [
            { type: "rule", title: "📖 名著名片", html: "<b>《伊索寓言》Aesop's Fables</b>——最著名的龟兔赛跑!慢而不停,终能取胜。" },
            { type: "reading", speakable: true, title: "The Tortoise and the Hare", paragraphs: [
              "A hare laughs at a tortoise. 'You are so slow!' he says. 'I can run much faster than you.'",
              "'Let's have a race,' says the tortoise. The hare laughs again, but he says yes.",
              "The race begins. The hare runs very fast and soon he is far ahead. 'The tortoise is so slow,' he thinks. 'I have time for a sleep.' So he lies down under a tree and sleeps.",
              "The tortoise walks and walks. He never stops. When the hare wakes up, the tortoise is near the finish line. The hare runs, but it is too late. The slow tortoise wins the race!"
            ], tip: "生词提示:hare 野兔 / slow 慢的 / race 比赛 / finish line 终点线" }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "Why does the tortoise win the race?(乌龟为什么赢了?)",
            options: [
              "Because the tortoise runs very fast.",
              "Because the hare helps the tortoise.",
              "Because the hare sleeps and the tortoise never stops.",
              "Because the tortoise takes a bus."
            ], answer: 2,
            demoSteps: [
              { text: "找关键动作:兔子中途做了什么?乌龟又是怎么走的?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "兔子", text: "lies down and sleeps" },
                { head: "乌龟", text: "never stops" },
                { head: "结果", text: "tortoise wins" }
              ] } },
              { text: "原文说 the tortoise never stops,兔子 sleeps,答案就在这两句里。", emoji: "🐢" }
            ],
            explain: "C 正确。兔子骄傲地睡着了(the hare sleeps),乌龟一刻不停(never stops),所以慢乌龟赢了。",
            explainSteps: [
              { text: "兔子太骄傲,躺在树下睡觉;乌龟从不停下,一直走。", emoji: "🐢" },
              { text: "兔子醒来太晚,乌龟已到终点,选 C!", emoji: "✅" },
              { text: "A、B、D 原文都没说。寓意:骄傲使人落后,坚持使人成功。", emoji: "🎯" }
            ] }
        }
      ]
    },

    // ================== 语文 ==================
    {
      subject: "chinese", icon: "📝", title: "语文 · 记叙文阅读:概括内容", minutes: 40,
      units: [
        {
          name: "动画课堂 · 概括题的「六要素」公式",
          blocks: [
            { type: "lesson", title: "▶ 一句话说清一件事", steps: [
              { text: "记叙文阅读第一大题型:「用一句话概括本文写了什么事」。别慌,有公式!", emoji: "📝" },
              { text: "六要素:时间、地点、人物、起因、经过、结果。抓住它们,就抓住了整件事。", emoji: "🧩", scene: { type: "clues", items: [
                { head: "谁", text: "人物" },
                { head: "干什么", text: "事件" },
                { head: "结果", text: "怎么样" }
              ] } },
              { text: "概括公式:谁 + 在什么情况下 + 做了什么 + 结果怎样。次要的时间地点可略,主干不能丢。", emoji: "🔑" },
              { text: "示范:「暴雨天(情况),小明(谁)背同学去医院(做什么),同学得救了(结果)」。干净利落!", emoji: "🌧️" },
              { text: "两个坑:一是抄一大段(不叫概括),二是丢了结果(事情没说完)。记住:一句话,有头有尾。", emoji: "⚠️" }
            ] }
          ],
          q: { type: "choice", points: 10, voice: "zh",
            q: "一篇文章讲:期末考前,小林发现同桌忘带准考证急得快哭,便冒雨骑车帮他回家取回，两人赶在开考前进了考场。最恰当的一句话概括是:",
            options: [
              "小林是个好人,乐于助人。",
              "期末考前,小林冒雨帮同桌取回准考证,两人赶上了考试。",
              "那天下着很大的雨,天气很糟糕。",
              "同桌忘带准考证,非常着急。"
            ], answer: 1,
            demoSteps: [
              { text: "套公式:谁?小林。做什么?帮同桌取准考证。结果?赶上考试。", emoji: "🔑", scene: { type: "clues", items: [
                { head: "谁", text: "小林" },
                { head: "做什么", text: "冒雨取准考证" },
                { head: "结果", text: "赶上考试" }
              ] } },
              { text: "看哪个选项「谁+做什么+结果」三样齐全。", emoji: "🔍" }
            ],
            explain: "B 正确,人物、事件、结果俱全。A 是评价不是概括;C 只说环境;D 只说起因,都不完整。",
            explainSteps: [
              { text: "A 是对人物的评价,没说事;C 只写了天气;D 只写了起因。", emoji: "❌" },
              { text: "B:小林(谁)冒雨帮同桌取准考证(做什么)赶上考试(结果),三要素齐全!", emoji: "✅" },
              { text: "概括口诀:谁+做什么+结果,一句话有头有尾,不多不少。", emoji: "🎯" }
            ] }
        },
        {
          name: "动画课堂 · 划分层次:给文章「分段」",
          blocks: [
            { type: "lesson", title: "▶ 找到事情的「开头—中间—结尾」", steps: [
              { text: "概括之后常跟一问:「本文可分为几层?」其实就是给事情找「起因—经过—结果」三段。", emoji: "✂️" },
              { text: "看标志:时间词(后来、第二天)、地点变化、「于是」「结果」这类过渡词,都是分层的剪刀口。", emoji: "🔪", scene: { type: "clues", items: [
                { head: "时间变", text: "第二天…" },
                { head: "地点变", text: "回到家…" },
                { head: "转折词", text: "于是 / 结果" }
              ] } },
              { text: "记叙文常见结构:开端(起因)→ 发展(经过)→ 高潮(最紧张处)→ 结局(结果)。", emoji: "📈" },
              { text: "分层小技巧:每层用一句话概括,几句话就是几层,层与层之间意思要能分得开。", emoji: "🧱" }
            ] }
          ],
          q: { type: "choice", points: 10, voice: "zh",
            q: "关于记叙文划分层次,下列说法错误的一项是:",
            options: [
              "时间词、地点的转换常常是划分层次的标志",
              "「于是」「结果」这样的词可以帮助我们找到层次的分界",
              "只要每段字数相等,就是正确的分层",
              "每一层通常可以用一句话概括其内容"
            ], answer: 2,
            demoSteps: [
              { text: "分层靠的是「意思」还是「字数」?想想我们刚学的标志。", emoji: "🤔", scene: { type: "clues", items: [
                { head: "靠意思", text: "起因·经过·结果" },
                { head: "靠标志", text: "时间·地点·转折" },
                { head: "不靠", text: "字数多少" }
              ] } },
              { text: "找出那句把「字数」当标准的,就是错的。", emoji: "🔍" }
            ],
            explain: "C 错。分层看的是内容意思的转换,不是字数是否相等。其余三项都是正确方法。",
            explainSteps: [
              { text: "A、B:时间地点转换、「于是」「结果」都是真标志,对。", emoji: "✅" },
              { text: "D:每层能用一句话概括,对。", emoji: "✅" },
              { text: "C:字数相等和分层毫无关系,分层看意思!选 C。", emoji: "🎯" }
            ] }
        },
        {
          name: "今日彩蛋 · 名著打卡",
          blocks: [
            { type: "rule", title: "📖 睡前 20 分钟名著时间", html: "今晚开始读<b>《西游记》</b>前几回!读完试着用刚学的公式概括:<b>「谁+做了什么+结果」</b>——比如「石猴出世,拜师学艺,得名孙悟空」。<br>能一句话说清一回的故事,你就是概括高手!" }
          ],
          q: null
        }
      ]
    },

    // ================== 生物 ==================
    {
      subject: "biology", icon: "🌱", title: "生物 · 认识细胞", minutes: 25,
      units: [
        {
          name: "动画课堂 · 细胞:生命的最小积木",
          blocks: [
            { type: "lesson", title: "▶ 所有生物都是细胞搭出来的", steps: [
              { text: "一栋大楼由砖块搭成,一个生命由细胞搭成。除病毒外,细胞是生物体结构和功能的基本单位。", emoji: "🧱" },
              { text: "细胞非常小,肉眼看不见,所以科学家发明了显微镜。第一个看到细胞的人是英国的罗伯特·胡克。", emoji: "🔬", scene: { type: "clues", items: [
                { head: "发现者", text: "胡克 Hooke" },
                { head: "工具", text: "显微镜" },
                { head: "看到的", text: "软木薄片的小格子" }
              ] } },
              { text: "细胞虽小,却「五脏俱全」:细胞膜像围墙管进出,细胞质像车间干活,细胞核像大脑发指令。", emoji: "🏭" },
              { text: "有的生物一辈子只有一个细胞(如草履虫),有的由亿万个细胞组成(如你我)——但都从一个细胞开始。", emoji: "🌟" },
              { text: "记住一句话:细胞是生命的最小积木,认识了细胞,才算真正走进生物世界的大门。", emoji: "🚪" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "关于细胞,下列说法正确的一项是:",
            options: [
              "所有生物都由许多细胞组成,没有单细胞生物",
              "细胞是除病毒外生物体结构和功能的基本单位",
              "细胞很大,用肉眼就能清楚看到",
              "第一个发现细胞的人是达尔文"
            ], answer: 1,
            demoSteps: [
              { text: "回忆四个关键点:大小、单位地位、单细胞生物、发现者。", emoji: "🔬", scene: { type: "clues", items: [
                { head: "基本单位", text: "对不对?" },
                { head: "单细胞", text: "存在吗?" },
                { head: "发现者", text: "是谁?" }
              ] } },
              { text: "逐项对照,找出唯一正确的一句。", emoji: "🔍" }
            ],
            explain: "B 正确。A 错(有草履虫等单细胞生物);C 错(细胞很小,需显微镜);D 错(发现者是胡克,不是达尔文)。",
            explainSteps: [
              { text: "A:草履虫、变形虫都是单细胞生物,错。", emoji: "❌" },
              { text: "C:细胞太小,肉眼看不见,要用显微镜,错。", emoji: "❌" },
              { text: "D:发现细胞的是胡克;达尔文提出进化论,张冠李戴,错。", emoji: "❌" },
              { text: "B:细胞是除病毒外生物的基本单位,正确!选 B。", emoji: "✅" }
            ] }
        }
      ]
    }
  ]
};
