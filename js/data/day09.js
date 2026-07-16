// ============ 第 9 关 ============
window.DAYS = window.DAYS || {};

window.DAYS[9] = {
  day: 9,
  title: "第 9 关 · 乘法符号大战",
  estimate: "四科约 2~3 小时 · 共 7 道思考题(含 1 道 BOSS 题)",
  sections: [
    // ================== 数学 ==================
    {
      subject: "math", icon: "🔢", title: "数学 · 有理数乘法", minutes: 50,
      units: [
        {
          name: "动画课堂 1 · 符号法则:同号得正,异号得负",
          blocks: [
            { type: "lesson", title: "▶ 两个数相乘,先定符号再算数", steps: [
              { text: "有理数乘法分两步走:第一步定符号,第二步把绝对值相乘。定符号是重点!", emoji: "🎯" },
              { text: "黄金口诀:同号得正,异号得负。正×正=正,负×负=正,正×负=负。", emoji: "⚖️", scene: { type: "match", groups: [
                { head: "结果为正 +", items: ["正×正", "负×负"] },
                { head: "结果为负 −", items: ["正×负", "负×正"] }
              ] } },
              { text: "为什么负负得正?想象:「向东走」为正,「后退」为负。「后退着向西走」= 实际向东,正!", emoji: "🔄" },
              { text: "例:(−4) × (−3):同号得正,4×3=12,结果 +12。异号 (−4) × 3 = −12。", emoji: "🧮", scene: { type: "clues", items: [
                { head: "(−4)×(−3)", text: "同号 → +" },
                { head: "绝对值", text: "4×3=12" },
                { head: "结果", text: "+12" }
              ] } },
              { text: "还有一条:任何数乘 0 都得 0。记牢:先看符号,再算大小,0 是特例。", emoji: "0️⃣" }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 2 · 多个数相乘:数负号的个数",
          blocks: [
            { type: "lesson", title: "▶ 一眼看出结果是正是负", steps: [
              { text: "好几个数连乘,不用一个个算符号,有个「数负号」的神技!", emoji: "🔢" },
              { text: "神技:数一数负因数有几个。偶数个负号→结果为正;奇数个负号→结果为负。", emoji: "🎲", scene: { type: "clues", items: [
                { head: "负号偶数个", text: "结果 +" },
                { head: "负号奇数个", text: "结果 −" },
                { head: "先定符号", text: "再乘绝对值" }
              ] } },
              { text: "例:(−2) × 3 × (−1) × (−5)。数负号:−2、−1、−5 共 3 个,奇数 → 负!", emoji: "👀" },
              { text: "再算绝对值:2×3×1×5 = 30,配上负号 = −30。符号一眼定,又快又准。", emoji: "⚡" },
              { text: "特别提醒:只要其中有一个因数是 0,乘积立刻是 0,连负号都不用数了!", emoji: "🛑" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "计算 (−1) × (−2) × (−3) × 4 的符号和结果是:",
            options: [
              "正,结果 24",
              "负,结果 −24",
              "负,结果 −9",
              "正,结果 9"
            ], answer: 1,
            demoSteps: [
              { text: "先数负号:−1、−2、−3 共几个?", emoji: "🔢", scene: { type: "clues", items: [
                { head: "负因数", text: "−1, −2, −3" },
                { head: "个数", text: "3 个(奇数)" },
                { head: "符号", text: "负" }
              ] } },
              { text: "3 个负号是奇数,结果为负。再算 1×2×3×4。", emoji: "🎲" }
            ],
            explain: "负因数 3 个(奇数)→ 结果为负;绝对值 1×2×3×4 = 24,所以是 −24。选 B。",
            explainSteps: [
              { text: "数负号:−1、−2、−3 共 3 个,奇数,结果为负。", emoji: "🎲" },
              { text: "绝对值相乘:1×2×3×4 = 24。", emoji: "🧮" },
              { text: "合起来 = −24,选 B!", emoji: "✅" },
              { text: "C、D 把乘法算成了加法(1+2+3+…),别掉进去!", emoji: "⚠️" }
            ] }
        },
        {
          name: "🔥 BOSS 挑战 · 潜水艇下潜记",
          blocks: [
            { type: "text", html: "💪 <b>BOSS 战规则</b>:一艘潜水艇匀速下潜,用乘法算深度!下潜方向记为负。草稿纸准备!" }
          ],
          q: { type: "fill", points: 20, boss: true, voice: "zh",
            q: "一艘潜水艇以每分钟下潜 6 米的速度匀速下潜。规定水面为 0,下潜为负,那么 5 分钟后它的深度用算式 (−6) × 5 表示,结果是多少米?(直接填数字,含正负号)",
            placeholder: "例如: -30",
            accept: ["-30", "−30", "-30米", "负30", "负三十"],
            demoSteps: [
              { text: "每分钟变化 −6 米,5 分钟就是 5 个 −6 相加,写成乘法 (−6) × 5。", emoji: "🌊", scene: { type: "clues", items: [
                { head: "每分钟", text: "−6 米" },
                { head: "时间", text: "5 分钟" },
                { head: "列式", text: "(−6) × 5" }
              ] } },
              { text: "定符号:异号得负;算绝对值:6×5=30。", emoji: "🎯" }
            ],
            explain: "(−6) × 5:异号得负,6×5=30,结果 −30 米,即在水面下 30 米。",
            explainSteps: [
              { text: "5 分钟每分钟 −6 米,列式 (−6) × 5。", emoji: "🌊" },
              { text: "异号得负,6×5=30,结果 −30。", emoji: "🎯" },
              { text: "−30 米表示在水面以下 30 米。乘法就是「相同的变化重复多次」!", emoji: "🏆" }
            ] }
        }
      ]
    },

    // ================== 英语 ==================
    {
      subject: "english", icon: "📚", title: "英语 · 一般现在时(第三人称单数)", minutes: 45,
      units: [
        {
          name: "单词训练营 · 兴趣爱好 12 个(点卡片听发音!)",
          blocks: [
            { type: "text", html: "🎧 今天的单词都和<span class='hl'>爱好</span>有关!学完就能介绍别人喜欢做什么。点卡片听发音,跟读 3 遍。" },
            { type: "flashcards", words: [
              { word: "swim", phonetic: "/swɪm/", cn: "游泳", sentence: "She swims every summer." },
              { word: "dance", phonetic: "/dɑːns/", cn: "跳舞", sentence: "My sister dances well." },
              { word: "sing", phonetic: "/sɪŋ/", cn: "唱歌", sentence: "He sings in the choir." },
              { word: "draw", phonetic: "/drɔː/", cn: "画画", sentence: "She draws cute cats." },
              { word: "cook", phonetic: "/kʊk/", cn: "做饭", sentence: "My dad cooks on Sunday." },
              { word: "fish", phonetic: "/fɪʃ/", cn: "钓鱼", sentence: "Grandpa fishes by the river." },
              { word: "collect", phonetic: "/kəˈlekt/", cn: "收集", sentence: "He collects stamps." },
              { word: "hobby", phonetic: "/ˈhɒbi/", cn: "爱好", sentence: "Reading is my hobby." },
              { word: "guitar", phonetic: "/ɡɪˈtɑː/", cn: "吉他", sentence: "She plays the guitar." },
              { word: "chess", phonetic: "/tʃes/", cn: "国际象棋", sentence: "They play chess after lunch." },
              { word: "photo", phonetic: "/ˈfəʊtəʊ/", cn: "照片", sentence: "He takes many photos." },
              { word: "watch", phonetic: "/wɒtʃ/", cn: "观看", sentence: "She watches films at home." }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 · 主语是他/她/它,动词要「变身」",
          blocks: [
            { type: "lesson", title: "▶ 第三人称单数:动词加 s 的秘密", steps: [
              { text: "昨天学的 I/you/we/they 用原形。今天换成 he / she / it（第三人称单数),动词就要「变身加 s」!", emoji: "✨" },
              { text: "大多数直接加 s:play→plays, read→reads, like→likes。", emoji: "➕", scene: { type: "clues", items: [
                { head: "一般", text: "加 s" },
                { head: "s/x/sh/ch/o 结尾", text: "加 es" },
                { head: "辅音+y", text: "变 y 为 i 加 es" }
              ] } },
              { text: "以 s/x/sh/ch/o 结尾加 es:watch→watches, go→goes, do→does。", emoji: "📦" },
              { text: "「辅音字母 + y」结尾:变 y 为 i 再加 es:study→studies, fly→flies。", emoji: "🔤" },
              { text: "特殊三兄弟:have→has, be→is, go→goes。否定和疑问改用 doesn't / Does。He doesn't like it. Does she sing?", emoji: "👑" }
            ] },
            { type: "chant", lines: ["他她它作主语,", "动词记得加 s；", "s x sh ch o 加 es,", "辅音加 y 变 ies!"] }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "选出完全正确的一句:",
            options: [
              "My sister study English and she go to school by bike.",
              "My sister studies English and she goes to school by bike.",
              "My sister studys English and she gos to school by bike.",
              "My sister studies English and she go to school by bike."
            ], answer: 1,
            demoSteps: [
              { text: "主语 my sister = she,第三人称单数,两个动词都要变身。", emoji: "✨", scene: { type: "clues", items: [
                { head: "study", text: "辅音+y → studies" },
                { head: "go", text: "o 结尾 → goes" },
                { head: "都要变", text: "两个动词" }
              ] } },
              { text: "study 变 studies,go 变 goes,两个都对才算对。", emoji: "🔍" }
            ],
            explain: "B 正确:study→studies(辅音+y 变 ies)、go→goes(o 结尾加 es)。A 没变身;C 变错(studys/gos);D 只变了一个。",
            explainSteps: [
              { text: "A:study、go 都没加,错;C:studys、gos 变身错误。", emoji: "❌" },
              { text: "D:studies 对,但 go 没变,漏了一个,错。", emoji: "❌" },
              { text: "B:studies + goes,两个动词都正确变身!选 B。", emoji: "✅" },
              { text: "口诀再念一遍:辅音加 y 变 ies,o 结尾加 es!", emoji: "🎯" }
            ] }
        },
        {
          name: "英文名著时光 · The Boy Who Cried Wolf",
          blocks: [
            { type: "rule", title: "📖 名著名片", html: "<b>《伊索寓言》Aesop's Fables</b>——「狼来了」的故事,说谎的代价谁都逃不掉。" },
            { type: "reading", speakable: true, title: "The Boy Who Cried Wolf", paragraphs: [
              "A boy looks after sheep on a hill. It is quiet and he is bored. So he shouts, 'Wolf! Wolf! A wolf is eating the sheep!'",
              "The people in the village run up the hill to help. But there is no wolf. The boy laughs. He does this two more times, and each time the people come, but there is no wolf.",
              "One day, a real wolf comes. The boy shouts, 'Wolf! Wolf!' But this time nobody comes. 'He is lying again,' they say.",
              "The wolf eats many sheep. Now the boy understands: if you often tell lies, people will not believe you, even when you tell the truth."
            ], tip: "生词提示:look after 照看 / shout 大喊 / village 村庄 / lie 说谎 / truth 真话" }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "Why does nobody come when the real wolf appears?(真狼来时为什么没人来?)",
            options: [
              "Because the villagers are sleeping.",
              "Because the boy has lied before, so they don't believe him.",
              "Because the wolf is very small.",
              "Because the boy shouts too quietly."
            ], answer: 1,
            demoSteps: [
              { text: "男孩之前做了什么?村民为什么改变了态度?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "男孩", text: "lies three times" },
                { head: "村民", text: "don't believe him" },
                { head: "结果", text: "nobody comes" }
              ] } },
              { text: "原文 'He is lying again' 直接说出了原因。", emoji: "🐺" }
            ],
            explain: "B 正确。男孩之前说了三次谎,村民再也不相信他,所以真狼来时没人来。",
            explainSteps: [
              { text: "男孩三次撒谎骗村民,村民一次次白跑上山。", emoji: "🐺" },
              { text: "真狼来时村民想'他又在骗人',所以没人来,选 B!", emoji: "✅" },
              { text: "A、C、D 原文都没提。寓意:说谎的人会失去别人的信任。", emoji: "🎯" }
            ] }
        }
      ]
    },

    // ================== 语文 ==================
    {
      subject: "chinese", icon: "📝", title: "语文 · 记叙文阅读:理解词句", minutes: 40,
      units: [
        {
          name: "动画课堂 · 词语的含义:先本义,再语境义",
          blocks: [
            { type: "lesson", title: "▶ 「这个词在文中是什么意思」怎么答", steps: [
              { text: "阅读常问:「联系上下文,说说加点词的含义」。答题两步:先说词的本义,再说在文中的特殊意思。", emoji: "🔍" },
              { text: "例:「他的心里像塞了一团棉花。」棉花本义是柔软的填充物,句中比喻心里堵得慌、说不出的难受。", emoji: "☁️", scene: { type: "clues", items: [
                { head: "本义", text: "柔软填充物" },
                { head: "语境义", text: "心里堵、难受" },
                { head: "手法", text: "比喻" }
              ] } },
              { text: "遇到「贬词褒用」也要留心:「他狡猾地笑了」——这里的「狡猾」其实是「机灵可爱」,带着喜爱。", emoji: "😏" },
              { text: "答题模板:「××」本指……,这里指……,表现了(人物/情感)……。三段式,分数稳。", emoji: "📐" }
            ] }
          ],
          q: { type: "choice", points: 10, voice: "zh",
            q: "「母亲的眼睛里盛满了笑意」中,「盛满」一词最恰当的理解是:",
            options: [
              "把液体装到容器的边缘",
              "生动地写出母亲眼中笑意浓浓、藏都藏不住的样子",
              "母亲的眼睛很大",
              "母亲在盛饭"
            ], answer: 1,
            demoSteps: [
              { text: "「盛满」本义是装到满,这里装的是什么?是「笑意」这种看不见的情感。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "本义", text: "装到满" },
                { head: "装的东西", text: "笑意(情感)" },
                { head: "效果", text: "笑意浓、藏不住" }
              ] } },
              { text: "把无形的笑意当作能「盛满」的东西,写出了什么样的画面?", emoji: "😊" }
            ],
            explain: "B 正确。「盛满」本指装到边缘,这里把无形的笑意写得可以「盛」,生动表现笑意之浓、之满。A 只说本义,C、D 完全跑偏。",
            explainSteps: [
              { text: "A 只是本义,没结合文中的「笑意」,不完整。", emoji: "❌" },
              { text: "C、D 望文生义,和句子无关。", emoji: "❌" },
              { text: "B:把笑意当成能盛满的东西,写出笑意浓得溢出来,选 B!", emoji: "✅" },
              { text: "理解词句口诀:先本义,再语境,最后说效果。", emoji: "🎯" }
            ] }
        },
        {
          name: "动画课堂 · 句子的含义:抓关键词与言外之意",
          blocks: [
            { type: "lesson", title: "▶ 「画线句子有什么深层含义」", steps: [
              { text: "理解句子,重点看两处:一是句中的关键词(尤其是有比喻、双关的词),二是句子背后的「言外之意」。", emoji: "💬" },
              { text: "例:「窗外的树,又绿了。」表面写树发芽,深层暗示时间流逝、又过了一年,常寄托思念或成长。", emoji: "🌳" },
              { text: "含蓄句往往「说一半留一半」:「他什么也没说,只是把伞往我这边斜了斜。」——不说的爱,更动人。", emoji: "☂️", scene: { type: "clues", items: [
                { head: "表面", text: "斜伞" },
                { head: "深层", text: "默默的关爱" },
                { head: "手法", text: "以动作写情" }
              ] } },
              { text: "答题思路:这句话表面写……,实际上表达了……的情感/道理。抓住「表面—实际」两层。", emoji: "📐" }
            ] }
          ],
          q: { type: "fill", points: 10, voice: "zh",
            q: "理解句子含义,一般要抓住句中的关键词,并体会句子的「言外之意」,即句子的__________含义。(填两个字)",
            placeholder: "填两个字",
            accept: ["深层", "深层。", "深刻", "含蓄", "隐含"],
            demoSteps: [
              { text: "句子有两层:看得见的「表面」义,和藏在后面的那层。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "第一层", text: "表面含义" },
                { head: "第二层", text: "?含义" },
                { head: "言外之意", text: "指的就是它" }
              ] } },
              { text: "「言外之意」= 表面之外、更深一层的意思,两个字。", emoji: "💭" }
            ],
            explain: "答案:深层(含义)。理解句子既要看表面意思,更要体会关键词背后的深层含义,即言外之意。",
            explainSteps: [
              { text: "句子的第一层是表面写的事,第二层是言外之意。", emoji: "💬" },
              { text: "言外之意就是句子的「深层」含义,答「深层」!", emoji: "✅" },
              { text: "答题记住抓两点:关键词 + 深层含义,答案自然完整。", emoji: "🎯" }
            ] }
        },
        {
          name: "今日彩蛋 · 名著打卡",
          blocks: [
            { type: "rule", title: "📖 睡前 20 分钟名著时间", html: "继续读<b>《西游记》</b>!今晚留意一句你觉得「话里有话」的句子,想一想:<b>它表面写什么?其实想说什么?</b><br>比如「悟空一个筋斗十万八千里,却翻不出如来的手掌心」——这句的言外之意是什么呢?" }
          ],
          q: null
        }
      ]
    },

    // ================== 道法 ==================
    {
      subject: "civics", icon: "⚖️", title: "道法 · 学习新天地", minutes: 25,
      units: [
        {
          name: "动画课堂 · 学会学习:上初中的第一课",
          blocks: [
            { type: "lesson", title: "▶ 为什么学、学什么、怎么学", steps: [
              { text: "进入初中,学习不再只是「完成作业」。道法课告诉我们:学习伴随一生,更是一种成长的能力。", emoji: "📚" },
              { text: "学习不只在学校、不只学课本。观察生活、动手实践、向他人请教,都是学习。", emoji: "🌍", scene: { type: "clues", items: [
                { head: "在哪学", text: "学校 + 生活" },
                { head: "学什么", text: "知识 + 本领 + 做人" },
                { head: "谁能学", text: "人人、终身" }
              ] } },
              { text: "学习中有苦也有乐:攻克一道难题、读懂一本好书,那种「豁然开朗」的快乐,只有努力过才尝得到。", emoji: "😊" },
              { text: "学会学习:找到适合自己的方法,善于制订计划、及时复习、学会反思——方法对了,事半功倍。", emoji: "🔑" },
              { text: "记住:学习是自己的事,主动学的人才能真正成长。别把学习当负担,把它当作变强的机会。", emoji: "💪" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "对于「学习」,下列理解正确的一项是:",
            options: [
              "学习只是在学校里学习书本知识",
              "学习伴随人的一生,它不仅指知识,还包括本领和做人",
              "学习只有苦没有乐",
              "学习是老师和家长的事,与自己无关"
            ], answer: 1,
            demoSteps: [
              { text: "回忆三个关键点:学习的范围、内容、苦乐、以及是谁的事。", emoji: "🔑", scene: { type: "clues", items: [
                { head: "范围", text: "终身、处处" },
                { head: "内容", text: "知识+本领+做人" },
                { head: "态度", text: "主动、有苦有乐" }
              ] } },
              { text: "把「太窄」「太消极」「甩锅」的说法排除,剩下的就对了。", emoji: "🔍" }
            ],
            explain: "B 正确。A 把学习说得太窄;C 忽视了学习的乐趣;D 把学习当成别人的事。学习伴随一生,内容丰富,更是自己的事。",
            explainSteps: [
              { text: "A:学习不止在学校、不止课本,太窄,错。", emoji: "❌" },
              { text: "C:学习有苦更有乐,豁然开朗的快乐很珍贵,错。", emoji: "❌" },
              { text: "D:学习是自己的事,主动才有收获,错。", emoji: "❌" },
              { text: "B:学习伴随一生,含知识、本领与做人,正确!选 B。", emoji: "✅" }
            ] }
        }
      ]
    }
  ]
};
