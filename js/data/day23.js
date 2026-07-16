// ============ 第 23 关 ============
window.DAYS = window.DAYS || {};

window.DAYS[23] = {
  day: 23,
  title: "第 23 关 · 移项变号",
  estimate: "四科约 2~3 小时 · 共 7 道思考题(含 1 道 BOSS 题)",
  sections: [
    // ================== 数学 ==================
    {
      subject: "math", icon: "🔢", title: "数学 · 解方程:移项", minutes: 50,
      units: [
        {
          name: "动画课堂 1 · 移项:搬家要变号",
          blocks: [
            { type: "lesson", title: "▶ 把含 x 的搬一边,数字搬另一边", steps: [
              { text: "解方程的核心思路:把含未知数的项集中到一边,把常数项集中到另一边。靠的就是「移项」。", emoji: "🚚" },
              { text: "移项:把方程一边的某项,改变符号后,移到另一边。口诀就三个字:「变号搬」!", emoji: "🔄", scene: { type: "clues", items: [
                { head: "移项", text: "从一边搬到另一边" },
                { head: "规则", text: "变号!" },
                { head: "依据", text: "等式性质一" }
              ] } },
              { text: "例:2x + 3 = 7。把 +3 移到右边,变成 −3:2x = 7 − 3 = 4。搬家一定要变号!", emoji: "🏠", scene: { type: "clues", items: [
                { head: "原式", text: "2x + 3 = 7" },
                { head: "移项", text: "2x = 7 − 3" },
                { head: "得", text: "2x = 4" }
              ] } },
              { text: "为什么变号?移项其实就是等式两边同时加或减——+3 移过去,等于两边同时减 3,自然变成 −3。", emoji: "💡" },
              { text: "最常见错误:移项忘变号!2x+3=7 写成 2x=7+3 就全错了。搬家必变号,牢牢记住!", emoji: "⚠️" }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 2 · 系数化为 1:最后一脚",
          blocks: [
            { type: "lesson", title: "▶ 移项后,除以系数得 x", steps: [
              { text: "移项之后,方程变成「ax = b」的样子。最后一步:两边同时除以 x 的系数 a,得到 x = b/a。", emoji: "➗" },
              { text: "例:2x = 4。两边同时除以 2:x = 4 ÷ 2 = 2。这一步叫「系数化为 1」。", emoji: "🎯", scene: { type: "clues", items: [
                { head: "移项后", text: "2x = 4" },
                { head: "两边÷2", text: "x = 4÷2" },
                { head: "解", text: "x = 2" }
              ] } },
              { text: "系数是负数或分数也一样:−3x = 12,两边除以 −3,得 x = −4(异号得负别忘)。", emoji: "⚠️" },
              { text: "解方程完整四步:移项(含 x 归一边)→ 合并同类项 → 系数化为 1 → 写出解。", emoji: "📋", scene: { type: "clues", items: [
                { head: "1 移项", text: "变号搬" },
                { head: "2 合并", text: "各归各" },
                { head: "3 系数化 1", text: "除以系数" }
              ] } },
              { text: "口诀:含 x 一边数一边,移项别忘要变号;合并同类再化简,除以系数解出来!", emoji: "🏅" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "解方程 5x − 2 = 3x + 6,正确的过程和结果是:",
            options: [
              "5x + 3x = 6 + 2,8x = 8,x = 1",
              "5x − 3x = 6 + 2,2x = 8,x = 4",
              "5x − 3x = 6 − 2,2x = 4,x = 2",
              "5x = 3x + 6 + 2,结果 x = 8"
            ], answer: 1,
            demoSteps: [
              { text: "把含 x 的项(3x)移到左边、常数(−2)移到右边,都要变号!", emoji: "🔄", scene: { type: "clues", items: [
                { head: "3x 移左", text: "变 −3x" },
                { head: "−2 移右", text: "变 +2" },
                { head: "得", text: "5x−3x = 6+2" }
              ] } },
              { text: "5x − 3x = 6 + 2,合并成 2x = 8,再除以 2。", emoji: "➗" }
            ],
            explain: "B 正确。移项:5x−3x = 6+2(3x 和 −2 都变号),2x = 8,x = 4。A、C 移项符号错;D 没把 3x 移过来。",
            explainSteps: [
              { text: "3x 从右移到左变 −3x;−2 从左移到右变 +2。", emoji: "🔄" },
              { text: "5x − 3x = 6 + 2 → 2x = 8。", emoji: "🧮" },
              { text: "两边除以 2:x = 4,选 B!C 错在把 +2 写成 −2,移项必变号!", emoji: "✅" }
            ] }
        },
        {
          name: "🔥 BOSS 挑战 · 我几岁",
          blocks: [
            { type: "text", html: "💪 <b>BOSS 战规则</b>:用方程解决年龄问题!设未知数、列方程、解出来,一条龙。草稿纸准备!" }
          ],
          q: { type: "fill", points: 20, boss: true, voice: "zh",
            q: "爸爸今年的年龄是恩恩的 3 倍。已知爸爸比恩恩大 24 岁。设恩恩今年 x 岁,可列方程 3x − x = 24。请解出恩恩今年多少岁?(直接填数字)",
            placeholder: "例如: 10",
            accept: ["12", "12岁", "十二"],
            demoSteps: [
              { text: "爸爸年龄 3x,恩恩年龄 x,爸爸比恩恩大 24,即 3x − x = 24。", emoji: "👨‍👦", scene: { type: "clues", items: [
                { head: "恩恩", text: "x 岁" },
                { head: "爸爸", text: "3x 岁" },
                { head: "方程", text: "3x − x = 24" }
              ] } },
              { text: "合并同类项:3x − x = 2x,得 2x = 24,再除以 2。", emoji: "🧮" }
            ],
            explain: "3x − x = 24,合并得 2x = 24,两边除以 2,x = 12。恩恩今年 12 岁(爸爸 36 岁,正好大 24 岁)。",
            explainSteps: [
              { text: "合并同类项:3x − x = 2x,方程变 2x = 24。", emoji: "🧮" },
              { text: "系数化 1:x = 24 ÷ 2 = 12。恩恩 12 岁!", emoji: "✅" },
              { text: "验算:爸爸 3×12=36 岁,36−12=24,对上了!方程让年龄难题变简单。", emoji: "🏆" }
            ] }
        }
      ]
    },

    // ================== 英语 ==================
    {
      subject: "english", icon: "📚", title: "英语 · 一般过去时(规则动词)", minutes: 45,
      units: [
        {
          name: "单词训练营 · 昨天做过的事 12 个(点卡片听发音!)",
          blocks: [
            { type: "text", html: "🎧 今天的词都是动词的<span class='hl'>过去式</span>!学完就能讲昨天做了什么。点卡片听发音,跟读 3 遍。" },
            { type: "flashcards", words: [
              { word: "played", phonetic: "/pleɪd/", cn: "玩(过去式)", sentence: "I played football yesterday." },
              { word: "watched", phonetic: "/wɒtʃt/", cn: "看(过去式)", sentence: "We watched a film." },
              { word: "visited", phonetic: "/ˈvɪzɪtɪd/", cn: "拜访(过去式)", sentence: "She visited her grandma." },
              { word: "helped", phonetic: "/helpt/", cn: "帮助(过去式)", sentence: "He helped his mother." },
              { word: "studied", phonetic: "/ˈstʌdid/", cn: "学习(过去式)", sentence: "I studied English last night." },
              { word: "cleaned", phonetic: "/kliːnd/", cn: "打扫(过去式)", sentence: "They cleaned the room." },
              { word: "walked", phonetic: "/wɔːkt/", cn: "走(过去式)", sentence: "We walked to school." },
              { word: "cooked", phonetic: "/kʊkt/", cn: "做饭(过去式)", sentence: "Dad cooked dinner." },
              { word: "wanted", phonetic: "/ˈwɒntɪd/", cn: "想要(过去式)", sentence: "I wanted some water." },
              { word: "stayed", phonetic: "/steɪd/", cn: "停留(过去式)", sentence: "We stayed at home." },
              { word: "liked", phonetic: "/laɪkt/", cn: "喜欢(过去式)", sentence: "She liked the gift." },
              { word: "danced", phonetic: "/dɑːnst/", cn: "跳舞(过去式)", sentence: "They danced happily." }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 · 规则动词过去式:加 ed 的学问",
          blocks: [
            { type: "lesson", title: "▶ 动词变过去,规则加 ed", steps: [
              { text: "讲过去做的动作,动词要变过去式。大多数动词是「规则」的:在词尾加 -ed。", emoji: "⏮️" },
              { text: "一般直接加 ed:play→played, watch→watched, help→helped。", emoji: "➕", scene: { type: "clues", items: [
                { head: "一般", text: "加 ed" },
                { head: "e 结尾", text: "只加 d" },
                { head: "辅音+y", text: "变 y 为 i 加 ed" }
              ] } },
              { text: "以 e 结尾只加 d:like→liked, dance→danced, live→lived。", emoji: "✍️" },
              { text: "「辅音字母 + y」结尾:变 y 为 i 再加 ed:study→studied, carry→carried。(元音+y 直接加:play→played)", emoji: "🔤" },
              { text: "重读闭音节双写末尾辅音再加 ed:stop→stopped, plan→planned。标志词:yesterday, last..., ...ago。", emoji: "📏", scene: { type: "clues", items: [
                { head: "重读闭音节", text: "双写 +ed" },
                { head: "stop", text: "→ stopped" },
                { head: "标志词", text: "yesterday, ago" }
              ] } }
            ] },
            { type: "chant", lines: ["规则动词加 ed,", "e 结尾只加 d;", "辅音加 y 变 ied,", "短音节把辅音双!"] }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "选出动词过去式全部正确的一句:",
            options: [
              "Yesterday I studyed English and playd football.",
              "Yesterday I studied English and played football.",
              "Yesterday I studied English and playd football.",
              "Yesterday I studyed English and played football."
            ], answer: 1,
            demoSteps: [
              { text: "study 和 play 的过去式怎么变?注意 y 前面是辅音还是元音。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "study", text: "d+y → studied" },
                { head: "play", text: "a+y(元音)→ played" },
                { head: "区别", text: "看 y 前是辅还是元" }
              ] } },
              { text: "study 的 y 前是辅音 d,变 ied;play 的 y 前是元音 a,直接加 ed。", emoji: "🔤" }
            ],
            explain: "B 正确:studied(辅音+y 变 ied)、played(元音+y 直接加 ed)。A、C、D 至少有一个变错。",
            explainSteps: [
              { text: "study:d(辅音)+ y → 变 studied,不是 studyed。", emoji: "🔤" },
              { text: "play:a(元音)+ y → 直接加 ed → played,不是 playd。", emoji: "✅" },
              { text: "B 两个都对!选 B。关键看 y 前面是辅音还是元音。", emoji: "🎯" }
            ] }
        },
        {
          name: "英文名著时光 · The Bremen Town Musicians",
          blocks: [
            { type: "rule", title: "📖 名著名片", html: "<b>格林兄弟 Grimm</b>《不来梅的音乐家》——四只被主人嫌弃的老动物,合作赶走强盗,找到了自己的家。" },
            { type: "reading", speakable: true, title: "The Bremen Town Musicians", paragraphs: [
              "An old donkey is too weak to work, so his master wants to get rid of him. The donkey runs away. 'I will go to Bremen and be a musician,' he says. On the way he meets a dog, a cat and a rooster. They are all old, and they join him.",
              "At night, they see a light in a house. They look in the window — it is full of robbers eating a big dinner! The four hungry animals have a plan.",
              "They stand on each other's backs and make a loud noise together: 'Hee-haw! Woof! Meow! Cock-a-doodle-doo!' The robbers are so scared that they all run away into the dark forest.",
              "The four animals go in and eat the food. The house is warm and nice. 'Let's stay here!' they say. And so the four old friends live happily together in their new home."
            ], tip: "生词提示:donkey 驴 / rooster 公鸡 / robber 强盗 / noise 噪音 / scared 害怕的" }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "How do the four animals get the house?(四只动物是怎么得到房子的?)",
            options: [
              "They buy the house.",
              "They make a loud noise together and scare the robbers away.",
              "The robbers give them the house.",
              "A kind man gives it to them."
            ], answer: 1,
            demoSteps: [
              { text: "房子里原来住着谁?动物们一起做了什么把他们赶跑?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "房子里", text: "强盗" },
                { head: "动物们", text: "叠罗汉+大声叫" },
                { head: "结果", text: "强盗吓跑" }
              ] } },
              { text: "四只动物一起发出巨响,强盗吓得逃走了。", emoji: "🐴" }
            ],
            explain: "B 正确。四只动物叠在一起,一齐发出巨大的叫声,把强盗吓跑,然后住进了这所温暖的房子。",
            explainSteps: [
              { text: "房子里是一群强盗,动物们叠罗汉齐声大叫。", emoji: "🐔" },
              { text: "强盗被吓跑,动物们住了进去,选 B!", emoji: "✅" },
              { text: "四个被嫌弃的老伙伴,靠团结合作找到了新家。团结力量大!", emoji: "🎯" }
            ] }
        }
      ]
    },

    // ================== 语文 ==================
    {
      subject: "chinese", icon: "📝", title: "语文 · 写作:记叙文结构", minutes: 40,
      units: [
        {
          name: "动画课堂 · 记叙文的骨架:开头—中间—结尾",
          blocks: [
            { type: "lesson", title: "▶ 一篇好作文的整体框架", steps: [
              { text: "作文光有好素材还不够,还得有好「结构」。记叙文的基本骨架:开头、中间、结尾,三部分各有任务。", emoji: "🦴" },
              { text: "开头要「快」:开门见山,尽快进入事件,别绕圈子。可以用环境描写、悬念、点题等方式起笔。", emoji: "🚀", scene: { type: "clues", items: [
                { head: "开头", text: "开门见山·引出事件" },
                { head: "中间", text: "详写经过·有波澜" },
                { head: "结尾", text: "点题·升华" }
              ] } },
              { text: "中间是「主体」:详写事情的经过,要有起因、发展、高潮。最精彩的部分要「详写」,次要的「略写」。", emoji: "⛰️" },
              { text: "结尾要「亮」:点明中心、抒发感情或引发思考。常用「首尾呼应」——结尾回扣开头,结构更完整。", emoji: "✨" },
              { text: "口诀:开头快入题,中间详经过,结尾点主题;详略要分明,首尾能呼应。结构稳,文章才立得住!", emoji: "🎯" }
            ] }
          ],
          q: { type: "choice", points: 10, voice: "zh",
            q: "关于记叙文的结构,下列说法错误的一项是:",
            options: [
              "开头应尽快引出事件,不宜绕太多弯子",
              "文章的每个部分都要平均用力,详略一样",
              "最精彩、最能表现中心的部分应该详写",
              "结尾可以点明中心,并与开头呼应"
            ], answer: 1,
            demoSteps: [
              { text: "回忆:一篇好作文,是「平均用力」还是「详略分明」?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "主体", text: "详写" },
                { head: "次要", text: "略写" },
                { head: "忌", text: "平均用力" }
              ] } },
              { text: "找出违背「详略分明」原则的一句。", emoji: "🔍" }
            ],
            explain: "B 错。好作文要「详略分明」——重点部分详写,次要部分略写,不能平均用力。其余三项都正确。",
            explainSteps: [
              { text: "A 开头快入题、C 精彩处详写、D 首尾呼应,都对。", emoji: "✅" },
              { text: "B「平均用力」是大忌!那样重点不突出,像流水账,选 B。", emoji: "❌" },
              { text: "记住:详略分明才能突出中心,好钢用在刀刃上!", emoji: "🎯" }
            ] }
        },
        {
          name: "动画课堂 · 过渡与照应:让文章连成一体",
          blocks: [
            { type: "lesson", title: "▶ 段与段之间的「桥」", steps: [
              { text: "文章各段之间不能「各说各话」,要有「过渡」和「照应」把它们连成一个整体。", emoji: "🌉" },
              { text: "过渡:在两段之间架一座「桥」。可以用过渡句、过渡段,或「后来」「不久」「然而」这类过渡词。", emoji: "🔗", scene: { type: "clues", items: [
                { head: "过渡", text: "承上启下的桥" },
                { head: "过渡词", text: "后来·然而·于是" },
                { head: "作用", text: "衔接自然" }
              ] } },
              { text: "照应:前面提到的,后面要有回应。「首尾照应」最常见——开头埋下的,结尾要收回来。", emoji: "🎯" },
              { text: "还有「伏笔与照应」:前文不经意的一句(伏笔),后文有了呼应,读者恍然大悟,结构就巧妙了。", emoji: "💡" },
              { text: "口诀:段间搭过渡,前后要照应;首尾能呼应,文章成一体。这样的作文,读起来顺,看起来完整!", emoji: "✅" }
            ] }
          ],
          q: { type: "fill", points: 10, voice: "zh",
            q: "在记叙文里,用来承上启下、把前后两段自然连接起来的句子或词语,起的是__________作用。(填两个字)",
            placeholder: "填两个字",
            accept: ["过渡", "过渡。", "衔接"],
            demoSteps: [
              { text: "「承上启下」、把前后段落连起来的,起什么作用?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "承上启下", text: "连接前后" },
                { head: "像", text: "一座桥" },
                { head: "作用", text: "?" }
              ] } },
              { text: "在两段之间架「桥」,起的是过「渡」的作用——两个字。", emoji: "🌉" }
            ],
            explain: "答案:过渡。承上启下、连接前后段落的句子或词语,起过渡作用,能使文章衔接自然、结构紧凑。",
            explainSteps: [
              { text: "承上启下、连接前后 = 过渡作用。", emoji: "🌉" },
              { text: "「后来」「于是」「然而」都是常见的过渡词。", emoji: "🔗" },
              { text: "答「过渡」。过渡自然、前后照应,文章才浑然一体!", emoji: "✅" }
            ] }
        },
        {
          name: "今日彩蛋 · 名著打卡",
          blocks: [
            { type: "rule", title: "📖 睡前 20 分钟名著时间", html: "继续读名著!今晚留意作者是怎么<b>「过渡」和「照应」</b>的:一章结尾常留个悬念,下一章开头接上——这就是让故事一环扣一环的秘密。<br>好的结构,是好文章看不见的骨架。" }
          ],
          q: null
        }
      ]
    },

    // ================== 道法 ==================
    {
      subject: "civics", icon: "⚖️", title: "道法 · 师长情谊", minutes: 25,
      units: [
        {
          name: "动画课堂 · 走近老师,理解老师",
          blocks: [
            { type: "lesson", title: "▶ 教学相长,亦师亦友", steps: [
              { text: "老师是我们成长路上的重要他人。这一课,我们学着理解老师、尊重老师,建立良好的师生关系。", emoji: "👨‍🏫" },
              { text: "时代在变,老师的角色也在变。今天的老师不只是「传授知识」,更是引导者、陪伴者。老师也是普通人,会有喜怒、也会犯错。", emoji: "🌱", scene: { type: "clues", items: [
                { head: "老师是", text: "引路人·陪伴者" },
                { head: "也是", text: "普通人" },
                { head: "会", text: "有情绪·会犯错" }
              ] } },
              { text: "「教学相长」:教和学是相互促进的。老师教我们,我们的提问和反馈也让老师进步。师生共同成长。", emoji: "🔄" },
              { text: "面对老师的表扬要不骄傲,面对批评要正确对待:老师批评往往出于关心,有则改之,理解老师的良苦用心。", emoji: "💗", scene: { type: "clues", items: [
                { head: "被表扬", text: "不骄傲" },
                { head: "被批评", text: "正确对待" },
                { head: "理解", text: "老师的关心" }
              ] } },
              { text: "如果和老师有分歧或矛盾,要主动沟通、换位思考,用恰当的方式表达。良好的师生关系靠双方共同营造。", emoji: "🤝" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "如果因为一件事对老师产生了误会,下列做法最恰当的是:",
            options: [
              "从此不理老师,心里生闷气",
              "找机会主动、诚恳地和老师沟通,消除误会",
              "在同学中间说老师的坏话",
              "故意不完成老师布置的作业"
            ], answer: 1,
            demoSteps: [
              { text: "回忆:师生有矛盾时,道法课倡导用什么方式解决?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "有矛盾", text: "主动沟通" },
                { head: "态度", text: "换位思考" },
                { head: "方式", text: "恰当表达" }
              ] } },
              { text: "把「冷战」「背后说坏话」「对抗」都排除,选积极沟通的。", emoji: "🤝" }
            ],
            explain: "B 正确。与老师有误会时,应主动、诚恳地沟通,换位思考,消除误会。A 冷战、C 说坏话、D 对抗都会让关系更糟。",
            explainSteps: [
              { text: "A 冷战生闷气、C 背后说坏话、D 故意对抗,都是消极做法。", emoji: "❌" },
              { text: "B:主动诚恳沟通,是化解师生误会的最好方式,选 B!", emoji: "✅" },
              { text: "师生关系靠双方共同营造,主动沟通、相互理解最重要。", emoji: "🎯" }
            ] }
        }
      ]
    }
  ]
};
