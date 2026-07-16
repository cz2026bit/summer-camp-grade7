// ============ 第 19 关 ============
window.DAYS = window.DAYS || {};

window.DAYS[19] = {
  day: 19,
  title: "第 19 关 · 括号大拆解",
  estimate: "四科约 2~3 小时 · 共 7 道思考题(含 1 道 BOSS 题)",
  sections: [
    // ================== 数学 ==================
    {
      subject: "math", icon: "🔢", title: "数学 · 去括号法则", minutes: 50,
      units: [
        {
          name: "动画课堂 1 · 括号前是加号:原样搬出",
          blocks: [
            { type: "lesson", title: "▶ 去括号第一条:括号前 +,不变号", steps: [
              { text: "整式运算常常要「去括号」。规则的核心只有一个字:看括号前面的符号!", emoji: "🔍" },
              { text: "第一种:括号前面是「+」号。去掉括号和它前面的加号,括号里各项符号都不变。", emoji: "➕", scene: { type: "clues", items: [
                { head: "原式", text: "a + (b − c)" },
                { head: "去括号", text: "括号前是 +" },
                { head: "结果", text: "a + b − c(不变号)" }
              ] } },
              { text: "例:3 + (x − 2) = 3 + x − 2。括号里的 x 还是 +x,−2 还是 −2,符号原样搬出来。", emoji: "📦" },
              { text: "记住:「+括号」就像打开一个透明袋子,里面的东西怎么放进去,就怎么拿出来,符号不变。", emoji: "👜" },
              { text: "这一条最简单,但也别大意:确认括号前真的是加号,再直接去掉括号。", emoji: "🎯" }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 2 · 括号前是减号:全体变号",
          blocks: [
            { type: "lesson", title: "▶ 去括号第二条:括号前 −,全变号", steps: [
              { text: "第二种最容易错:括号前面是「−」号。去掉括号和减号后,括号里每一项都要变号!", emoji: "🔄" },
              { text: "例:a − (b − c) = a − b + c。括号里的 +b 变成 −b,−c 变成 +c。每一项都翻个身!", emoji: "🎭", scene: { type: "clues", items: [
                { head: "原式", text: "a − (b − c)" },
                { head: "括号前是 −", text: "每项变号" },
                { head: "结果", text: "a − b + c" }
              ] } },
              { text: "最常见的错误:只变第一项,忘了后面的!a − (b − c) 写成 a − b − c 就错了,−c 必须变成 +c。", emoji: "⚠️" },
              { text: "为什么全变号?因为 −(b − c) 相当于 −1×(b−c),乘进去每一项都要乘 −1,自然都变号。", emoji: "💡", scene: { type: "clues", items: [
                { head: "−(b−c)", text: "= −1×(b−c)" },
                { head: "分别乘", text: "−b, +c" },
                { head: "所以", text: "全变号" }
              ] } },
              { text: "口诀:括号前 +,照抄不变号;括号前 −,全体变号。变号别偷懒,每一项都要管!", emoji: "🎯" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "去括号:5a − (3a − 2b + 1) 的结果是:",
            options: [
              "5a − 3a − 2b + 1",
              "5a − 3a + 2b − 1",
              "5a + 3a − 2b + 1",
              "2a − 2b + 1"
            ], answer: 1,
            demoSteps: [
              { text: "括号前面是减号,里面每一项都要变号!逐项翻身。", emoji: "🔄", scene: { type: "clues", items: [
                { head: "3a", text: "→ −3a" },
                { head: "−2b", text: "→ +2b" },
                { head: "+1", text: "→ −1" }
              ] } },
              { text: "5a 不动,后面三项全变号:−3a + 2b − 1。", emoji: "🎭" }
            ],
            explain: "括号前是减号,每项变号:−(3a−2b+1) = −3a+2b−1。所以 5a − 3a + 2b − 1。选 B。",
            explainSteps: [
              { text: "3a 变 −3a,−2b 变 +2b,+1 变 −1,三项全变!", emoji: "🔄" },
              { text: "5a − 3a + 2b − 1,选 B!", emoji: "✅" },
              { text: "A 只变了第一项(最常见的错),C 符号搞反。减号在括号前,全体变号!", emoji: "🎯" }
            ] }
        },
        {
          name: "🔥 BOSS 挑战 · 去括号再化简",
          blocks: [
            { type: "text", html: "💪 <b>BOSS 战规则</b>:先去括号,再合并同类项!两步连招,考验细心。草稿纸准备!" }
          ],
          q: { type: "fill", points: 20, boss: true, voice: "zh",
            q: "化简 (3x + 5) − (x − 4)。请写出最简结果。(格式如 2x+9)",
            placeholder: "例如: 2x+9",
            accept: ["2x+9", "2x + 9", "9+2x", "2x＋9", "(2x+9)"],
            demoSteps: [
              { text: "先去括号:第一个括号前是 +(不变号),第二个前是 −(全变号)。", emoji: "🔄", scene: { type: "clues", items: [
                { head: "+(3x+5)", text: "= 3x + 5" },
                { head: "−(x−4)", text: "= −x + 4" },
                { head: "合并", text: "同类项相加" }
              ] } },
              { text: "得 3x + 5 − x + 4,再合并同类项。", emoji: "🧹" }
            ],
            explain: "(3x+5) − (x−4) = 3x + 5 − x + 4 = (3x − x) + (5 + 4) = 2x + 9。",
            explainSteps: [
              { text: "去括号:第二个括号前是减号,x 变 −x,−4 变 +4。", emoji: "🔄" },
              { text: "得 3x + 5 − x + 4。", emoji: "📦" },
              { text: "合并:3x − x = 2x,5 + 4 = 9,结果 2x + 9!去括号+合并,连招通关!", emoji: "🏆" }
            ] }
        }
      ]
    },

    // ================== 英语 ==================
    {
      subject: "english", icon: "📚", title: "英语 · 祈使句", minutes: 45,
      units: [
        {
          name: "单词训练营 · 指令与提示 12 个(点卡片听发音!)",
          blocks: [
            { type: "text", html: "🎧 今天的词都在<span class='hl'>发出指令、给出提醒</span>!点卡片听发音,跟读 3 遍。" },
            { type: "flashcards", words: [
              { word: "open", phonetic: "/ˈəʊpən/", cn: "打开", sentence: "Open the door, please." },
              { word: "close", phonetic: "/kləʊz/", cn: "关上", sentence: "Close your books." },
              { word: "stand", phonetic: "/stænd/", cn: "站立", sentence: "Stand up, please." },
              { word: "sit down", phonetic: "/sɪt daʊn/", cn: "坐下", sentence: "Sit down, everyone." },
              { word: "come", phonetic: "/kʌm/", cn: "来", sentence: "Come here, please." },
              { word: "turn", phonetic: "/tɜːn/", cn: "转;转动", sentence: "Turn left at the shop." },
              { word: "stop", phonetic: "/stɒp/", cn: "停止", sentence: "Stop talking, please." },
              { word: "look out", phonetic: "/lʊk aʊt/", cn: "当心", sentence: "Look out! A car!" },
              { word: "please", phonetic: "/pliːz/", cn: "请", sentence: "Please be quiet." },
              { word: "quiet", phonetic: "/ˈkwaɪət/", cn: "安静的", sentence: "Be quiet, please." },
              { word: "hurry", phonetic: "/ˈhʌri/", cn: "赶快", sentence: "Hurry up!" },
              { word: "cross", phonetic: "/krɒs/", cn: "穿过", sentence: "Don't cross the road now." }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 · 祈使句:动词打头,发号施令",
          blocks: [
            { type: "lesson", title: "▶ 表示命令、请求、提醒", steps: [
              { text: "祈使句用来发命令、提要求、给建议。最大特点:省略主语 you,直接用动词原形开头!", emoji: "📢" },
              { text: "肯定祈使句:动词原形开头。Open the door.(开门)/ Stand up.(起立)/ Be quiet.(安静)。", emoji: "✅", scene: { type: "clues", items: [
                { head: "结构", text: "动词原形 + 其他" },
                { head: "省略", text: "主语 you" },
                { head: "be 动词", text: "用原形 Be" }
              ] } },
              { text: "否定祈使句:前面加 Don't。Don't run.(别跑)/ Don't be late.(别迟到)。Don't + 动词原形。", emoji: "🚫" },
              { text: "加 please 更礼貌:Please sit down. / Sit down, please.(放句首或句尾,句尾要加逗号)。", emoji: "🙏", scene: { type: "clues", items: [
                { head: "肯定", text: "Open the door." },
                { head: "否定", text: "Don't open it." },
                { head: "礼貌", text: "Please…/…, please." }
              ] } },
              { text: "口诀:祈使句,真特别,主语省略动词先;否定加 Don't,礼貌加 please。发号施令就用它!", emoji: "🎯" }
            ] },
            { type: "chant", lines: ["祈使句真奇妙,", "动词原形打头炮;", "否定 Don't 加前面,", "please 一加更礼貌!"] }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "选出完全正确的一句:",
            options: [
              "You don't runs in the classroom.",
              "Don't run in the classroom, please.",
              "Not run in the classroom.",
              "Please don't running in the classroom."
            ], answer: 1,
            demoSteps: [
              { text: "否定祈使句怎么构成?用 Don't 还是 Not?后面动词什么形式?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "否定祈使", text: "Don't 开头" },
                { head: "动词", text: "原形 run" },
                { head: "省略", text: "不要主语 you" }
              ] } },
              { text: "Don't + 动词原形,不要主语,不加 ing。", emoji: "✅" }
            ],
            explain: "B 正确:Don't run(否定祈使句 = Don't + 原形),加 please 更礼貌。A 有主语且 runs 错;C 应用 Don't;D 应用原形 run 不是 running。",
            explainSteps: [
              { text: "A:祈使句不要主语 you,runs 也错。", emoji: "❌" },
              { text: "C:否定祈使句用 Don't,不用 Not。", emoji: "❌" },
              { text: "D:Don't 后面用原形 run,不是 running。", emoji: "❌" },
              { text: "B:Don't run..., please,结构完美!选 B。", emoji: "✅" }
            ] }
        },
        {
          name: "英文名著时光 · Snow White",
          blocks: [
            { type: "rule", title: "📖 名著名片", html: "<b>格林兄弟 Grimm</b>《白雪公主》——一面魔镜,一个毒苹果,七个小矮人,善良终将战胜嫉妒。" },
            { type: "reading", speakable: true, title: "Snow White", paragraphs: [
              "Snow White is a beautiful princess. Her stepmother, the queen, has a magic mirror. Every day she asks, 'Mirror, mirror, who is the most beautiful?' One day the mirror says, 'Snow White is.' The queen is very angry.",
              "The queen tells a man to take Snow White into the forest. But the man is kind and lets her go. Snow White finds a little house. Seven small men — the seven dwarfs — live there. 'You can stay with us,' they say.",
              "But the queen finds out. She dresses as an old woman and gives Snow White a poisoned apple. Snow White eats it and falls into a deep sleep. The sad dwarfs put her in a glass box.",
              "One day a prince sees Snow White. He loves her at once. When he kisses her, she wakes up! The bad queen is gone, and Snow White and the prince live happily ever after."
            ], tip: "生词提示:mirror 镜子 / stepmother 继母 / dwarf 小矮人 / poisoned 有毒的 / kiss 亲吻" }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "Why is the queen angry with Snow White?(王后为什么生白雪公主的气?)",
            options: [
              "Because Snow White breaks the magic mirror.",
              "Because the mirror says Snow White is the most beautiful.",
              "Because Snow White is unkind to her.",
              "Because Snow White eats her apple."
            ], answer: 1,
            demoSteps: [
              { text: "王后每天问镜子什么?镜子的回答让她怎么了?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "王后问", text: "谁最美" },
                { head: "镜子答", text: "Snow White is" },
                { head: "王后", text: "very angry" }
              ] } },
              { text: "原文直接说镜子回答后王后 very angry。", emoji: "🪞" }
            ],
            explain: "B 正确。魔镜说白雪公主是最美的,爱慕虚荣的王后因嫉妒而生气,想害死白雪公主。",
            explainSteps: [
              { text: "王后天天问魔镜谁最美,镜子说是白雪公主。", emoji: "🪞" },
              { text: "王后又嫉妒又生气,选 B!", emoji: "✅" },
              { text: "嫉妒让人做出可怕的事。善良的白雪公主最终获得幸福,恶毒的王后自食恶果。", emoji: "🎯" }
            ] }
        }
      ]
    },

    // ================== 语文 ==================
    {
      subject: "chinese", icon: "📝", title: "语文 · 《江南逢李龟年》", minutes: 40,
      units: [
        {
          name: "动画课堂 · 杜甫:落花时节的重逢",
          blocks: [
            { type: "lesson", title: "▶ 四句诗,写尽半生沧桑", steps: [
              { text: "《江南逢李龟年》是杜甫晚年的作品。李龟年是唐朝著名的宫廷歌唱家,曾红极一时。", emoji: "🎵" },
              { text: "「岐王宅里寻常见,崔九堂前几度闻。」——当年在岐王府、崔九家常常见到你、听你唱歌。回忆开元盛世的繁华。", emoji: "🏛️", scene: { type: "clues", items: [
                { head: "岐王宅里", text: "当年常见" },
                { head: "崔九堂前", text: "多次听歌" },
                { head: "暗写", text: "盛世繁华" }
              ] } },
              { text: "「正是江南好风景,落花时节又逢君。」——如今在江南的好风景里,却在落花时节再次遇见你。", emoji: "🍂", scene: { type: "clues", items: [
                { head: "江南好风景", text: "表面美好" },
                { head: "落花时节", text: "暗写衰败" },
                { head: "又逢君", text: "重逢却凄凉" }
              ] } },
              { text: "妙在「落花时节」:既是暮春实景,又暗喻两人的晚景凄凉、大唐由盛转衰。一语双关,含蓄深沉。", emoji: "💧" },
              { text: "全诗不着一个「悲」字,却写尽了世事沧桑、人生迟暮。这就是杜甫「沉郁顿挫」的功力。", emoji: "🏆" }
            ] }
          ],
          q: { type: "choice", points: 10, voice: "zh",
            q: "《江南逢李龟年》中「落花时节又逢君」的「落花时节」有双重含义,下列理解最恰当的是:",
            options: [
              "只是单纯写春天花落的季节",
              "既指暮春时节,又暗喻两人的晚年境遇和时代的衰落,一语双关",
              "指秋天树叶飘落",
              "表示天气很好,适合出游"
            ], answer: 1,
            demoSteps: [
              { text: "「落花时节」表面写什么季节?联系两人此时的处境和大唐国运,又暗示什么?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "表层", text: "暮春落花" },
                { head: "深层一", text: "两人晚景凄凉" },
                { head: "深层二", text: "时代由盛转衰" }
              ] } },
              { text: "好诗常「一语双关」,表面写景,背后藏情。", emoji: "💧" }
            ],
            explain: "B 正确。「落花时节」表面写暮春,深层暗喻诗人与李龟年的晚年飘零,以及大唐王朝由盛转衰,含蓄而深沉。",
            explainSteps: [
              { text: "表层:暮春时节,花儿飘落,是实景。", emoji: "🍂" },
              { text: "深层:两位老人晚景凄凉、盛唐一去不返,都藏在「落花」二字里,选 B!", emoji: "✅" },
              { text: "一语双关是古诗常见手法:表面写景,实则抒情言志,读诗要读出言外之意。", emoji: "🎯" }
            ] }
        },
        {
          name: "动画课堂 · 借景抒情与以乐景写哀",
          blocks: [
            { type: "lesson", title: "▶ 好风景里的深悲凉", steps: [
              { text: "这首诗还藏着一个高级手法:「以乐景写哀情」。用美好的景反衬悲伤的情,悲得更深。", emoji: "🎭" },
              { text: "「正是江南好风景」——江南春色多美啊!可越是好风景,越衬出「落花时节」重逢的凄凉。", emoji: "🌸", scene: { type: "clues", items: [
                { head: "乐景", text: "江南好风景" },
                { head: "哀情", text: "晚景凄凉" },
                { head: "手法", text: "以乐衬哀" }
              ] } },
              { text: "为什么反衬更有力?就像喜庆的场合听到坏消息,快乐的背景让悲伤显得更加刺眼、更加深沉。", emoji: "💔" },
              { text: "这类手法在古诗里很常见:「感时花溅泪」——花本无泪,是诗人把悲伤投射到美景上。", emoji: "🌺" },
              { text: "答题时认准:用美好景物写悲伤感情,叫「以乐景写哀情」(反衬),作用是使哀情更浓。", emoji: "🎯" }
            ] }
          ],
          q: { type: "fill", points: 10, voice: "zh",
            q: "《江南逢李龟年》用「江南好风景」这样的美景,来反衬两人重逢的凄凉,这种用美好景物写悲伤感情的手法叫「以__________写哀情」。(填一个字)",
            placeholder: "填一个字",
            accept: ["乐", "乐。", "「乐」"],
            demoSteps: [
              { text: "「江南好风景」是让人快乐的景还是悲伤的景?它衬托的是什么情?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "好风景", text: "乐景" },
                { head: "重逢凄凉", text: "哀情" },
                { head: "手法", text: "以?写哀" }
              ] } },
              { text: "用「快乐的景」写「悲哀的情」,填的是表示快乐的那个字。", emoji: "🎭" }
            ],
            explain: "答案:乐。「以乐景写哀情」用美好欢乐的景物反衬悲伤的情感,使哀情显得更加深沉。",
            explainSteps: [
              { text: "「江南好风景」是乐景,重逢的凄凉是哀情。", emoji: "🎭" },
              { text: "用乐景反衬哀情,叫「以乐景写哀情」,答「乐」!", emoji: "✅" },
              { text: "反衬手法能让情感更浓,是古诗鉴赏的常考点。", emoji: "🎯" }
            ] }
        },
        {
          name: "今日彩蛋 · 名著打卡",
          blocks: [
            { type: "rule", title: "📖 睡前 20 分钟名著时间", html: "继续读<b>《西游记》</b>!杜甫在落花时节重逢老友,感慨万千。今晚背一背《江南逢李龟年》,想一想:<b>一首只有四句的小诗,为什么能藏下这么多情感?</b><br>好诗如好茶,越品越有味道。" }
          ],
          q: null
        }
      ]
    },

    // ================== 历史 ==================
    {
      subject: "history", icon: "🏺", title: "历史 · 汉武帝巩固大一统", minutes: 25,
      units: [
        {
          name: "动画课堂 · 汉武帝的雄才大略",
          blocks: [
            { type: "lesson", title: "▶ 从政治到思想的大一统", steps: [
              { text: "秦朝之后是汉朝。到了汉武帝时,西汉进入鼎盛。他从政治、思想、经济、军事全方位巩固大一统。", emoji: "👑" },
              { text: "政治上——推行「推恩令」:让诸侯把封地分给子弟,诸侯国越分越小,中央的威胁就解除了。高明的「削藩」妙招!", emoji: "⚙️", scene: { type: "clues", items: [
                { head: "问题", text: "诸侯国太大" },
                { head: "推恩令", text: "分封给子弟" },
                { head: "结果", text: "越分越小" }
              ] } },
              { text: "思想上——「罢黜百家,尊崇儒术」:把儒家学说立为正统,统一思想。从此儒学成为古代文化的主流。", emoji: "📚", scene: { type: "clues", items: [
                { head: "主张者", text: "董仲舒" },
                { head: "措施", text: "尊崇儒术" },
                { head: "影响", text: "儒学成主流" }
              ] } },
              { text: "经济上——把铸币权收归中央(五铢钱),盐铁由国家专营;军事上——派卫青、霍去病大破匈奴。", emoji: "⚔️" },
              { text: "记忆法:汉武帝「政推恩、思尊儒、经收权、军击匈」,四管齐下,把大一统推向高峰。", emoji: "🎯" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "汉武帝为加强思想上的统一,采取的措施是:",
            options: [
              "焚书坑儒",
              "罢黜百家,尊崇儒术",
              "推行郡县制",
              "统一文字"
            ], answer: 1,
            demoSteps: [
              { text: "题目问的是「思想统一」。四个选项里,哪个是思想方面的措施?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "焚书坑儒", text: "秦始皇(思想,但太暴)" },
                { head: "尊崇儒术", text: "汉武帝(思想)" },
                { head: "郡县制/统一文字", text: "政治/文化" }
              ] } },
              { text: "注意区分:秦始皇「焚书坑儒」,汉武帝是「尊崇儒术」,别张冠李戴。", emoji: "⚖️" }
            ],
            explain: "B 正确。汉武帝接受董仲舒建议,「罢黜百家,尊崇儒术」,统一思想。A 焚书坑儒是秦始皇的做法;C、D 不是思想措施。",
            explainSteps: [
              { text: "A:焚书坑儒是秦始皇干的,还很残暴,不是汉武帝,错。", emoji: "❌" },
              { text: "C 郡县制是政治、D 统一文字是文化,都不是思想统一,错。", emoji: "❌" },
              { text: "B:汉武帝「罢黜百家,尊崇儒术」统一思想,正确!选 B。", emoji: "✅" }
            ] }
        }
      ]
    }
  ]
};
