// ============ 第 38 关 ============
window.DAYS = window.DAYS || {};

window.DAYS[38] = {
  day: 38,
  title: "第 38 关 · 模拟测试(一)",
  estimate: "四科约 2~3 小时 · 共 7 道测试题(含 1 道 BOSS 题)",
  sections: [
    // ================== 数学 ==================
    {
      subject: "math", icon: "🔢", title: "数学 · 模拟测试(一)", minutes: 50,
      units: [
        {
          name: "考前提醒 · 数学审题三看",
          blocks: [
            { type: "lesson", title: "▶ 进考场前,记住这三句", steps: [
              { text: "今天是模拟测试第一场!正式做题前,记住数学审题「三看」,能避开一大半失分。", emoji: "📝" },
              { text: "一看符号:负号在括号内还是外?(−2)² 和 −2² 天差地别。看清符号再动笔。", emoji: "⚠️", scene: { type: "clues", items: [
                { head: "看符号", text: "负号·括号" },
                { head: "看要求", text: "求什么" },
                { head: "看单位", text: "别漏别错" }
              ] } },
              { text: "二看要求:题目求的是「x」还是「2x」?是「进价」还是「售价」?看清所求,别答非所问。", emoji: "🎯" },
              { text: "三看验算:算完代回去检验。方程验根、应用题验是否合理(人数不能是小数、年龄不能为负)。", emoji: "✅" },
              { text: "深呼吸,静下心,认真读题。你已经练了 37 关,相信自己,开始吧!", emoji: "💪" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "计算 (−1)²⁰²⁴ + (−2)³ − |−5| 的结果是:",
            options: ["−12", "−2", "−14", "12"], answer: 0,
            demoSteps: [
              { text: "分三部分算:(−1) 的偶次方、(−2)³、绝对值。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "(−1)²⁰²⁴", text: "偶次 → +1" },
                { head: "(−2)³", text: "奇 → −8" },
                { head: "|−5|", text: "= 5" }
              ] } },
              { text: "(−1) 偶次方 = 1;(−2)³ = −8;|−5| = 5。合起来 1 + (−8) − 5。", emoji: "🧮" }
            ],
            explain: "(−1)²⁰²⁴ = 1(偶次方为正);(−2)³ = −8;|−5| = 5。原式 = 1 − 8 − 5 = −12。选 A。",
            explainSteps: [
              { text: "(−1) 的 2024 次方,偶数次,结果 +1。", emoji: "🎲" },
              { text: "(−2)³ = −8;|−5| = 5。", emoji: "🧮" },
              { text: "1 + (−8) − 5 = −12,选 A!负数乘方看奇偶、绝对值非负,都用上了!", emoji: "✅" }
            ] }
        },
        {
          name: "🔥 BOSS 挑战 · 应用题压轴",
          blocks: [
            { type: "text", html: "💪 <b>BOSS 战规则</b>:模拟测试压轴应用题!审、设、列、解、答,一步步来。草稿纸准备!" }
          ],
          q: { type: "fill", points: 20, boss: true, voice: "zh",
            q: "一件衣服按标价打八折出售,售价 160 元,这样商店仍能获利 40 元。这件衣服的进价是多少元?(提示:进价 = 售价 − 利润,直接填数字)",
            placeholder: "例如: 100",
            accept: ["120", "120元", "一百二十"],
            demoSteps: [
              { text: "售价已知是 160 元,获利 40 元。进价 = 售价 − 利润。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "售价", text: "160 元" },
                { head: "利润", text: "40 元" },
                { head: "进价", text: "160 − 40" }
              ] } },
              { text: "利润 = 售价 − 进价,所以进价 = 售价 − 利润 = 160 − 40。", emoji: "🧮" }
            ],
            explain: "利润 = 售价 − 进价,所以进价 = 售价 − 利润 = 160 − 40 = 120 元。(「打八折」是干扰信息,售价已直接给出!)",
            explainSteps: [
              { text: "本题售价已直接给出 160 元,「八折」是干扰项。", emoji: "🎯" },
              { text: "进价 = 售价 − 利润 = 160 − 40 = 120 元!", emoji: "✅" },
              { text: "考场智慧:看清已知条件,别被多余信息带偏。审题「三看」立功了!", emoji: "🏆" }
            ] }
        }
      ]
    },

    // ================== 英语 ==================
    {
      subject: "english", icon: "📚", title: "英语 · 模拟测试(一)", minutes: 45,
      units: [
        {
          name: "考前提醒 · 英语做题小贴士",
          blocks: [
            { type: "lesson", title: "▶ 语法选择 + 阅读理解的诀窍", steps: [
              { text: "英语模拟测试来啦!做题前记住两个诀窍,选择和阅读都能提分。", emoji: "📝" },
              { text: "语法选择:先找「信号词」定时态/句型,再检查主谓一致、动词形式。别凭感觉,靠规则!", emoji: "🚦", scene: { type: "clues", items: [
                { head: "找信号词", text: "定时态" },
                { head: "查一致", text: "主谓·单复数" },
                { head: "查形式", text: "动词变对没" }
              ] } },
              { text: "阅读理解:先读问题,带着问题读短文,快速定位;细节题回原文找依据,别凭印象。", emoji: "🔍" },
              { text: "遇到生词别慌:联系上下文猜意思,或先跳过,读完全文往往就懂了。", emoji: "💡" },
              { text: "沉住气,先易后难,不会的先跳过。你的词汇量和语法都练扎实了,加油!", emoji: "💪" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "综合选择,完全正确的一句是:",
            options: [
              "Yesterday she goes to school and studys hard.",
              "Yesterday she went to school and studied hard.",
              "Yesterday she go to school and studied hard.",
              "Yesterday she went to school and studys hard."
            ], answer: 1,
            demoSteps: [
              { text: "信号词 yesterday 定时态;go 和 study 的过去式怎么变?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "yesterday", text: "→ 过去时" },
                { head: "go", text: "→ went(不规则)" },
                { head: "study", text: "→ studied(辅音+y)" }
              ] } },
              { text: "两个动词都要变过去式:went、studied。", emoji: "⏮️" }
            ],
            explain: "B 正确:went(go 的过去式)、studied(study→studied)。A、C、D 至少有一个动词没变对过去式。",
            explainSteps: [
              { text: "yesterday 提示过去时,两个动词都要变过去式。", emoji: "⏮️" },
              { text: "go → went(不规则),study → studied(辅音+y 变 ied)。", emoji: "✅" },
              { text: "B 两个都对!选 B。信号词定时态,再检查每个动词形式。", emoji: "🎯" }
            ] }
        },
        {
          name: "阅读理解测试 · My Summer Plan",
          blocks: [
            { type: "text", html: "🕵️ <b>阅读任务</b>:先看问题,再读短文,快速找答案。注意时态和细节!" },
            { type: "reading", speakable: true, title: "My Summer Plan", paragraphs: [
              "Summer holiday is coming. Lucy has an exciting plan. Next week, she is going to visit her grandparents in the countryside. She will stay there for two weeks.",
              "In the countryside, Lucy is going to help her grandpa on the farm. She will feed the chickens and water the vegetables every morning. In the afternoon, she plans to read books and draw pictures.",
              "Lucy is also going to learn to swim in the river with her cousins. 'I can't wait!' she says. She believes this summer will be the best one ever."
            ], tip: "生词提示:countryside 乡下 / feed 喂 / water 浇水 / cousin 表亲" }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "What is Lucy going to do in the countryside every morning?(露西每天早上打算在乡下做什么?)",
            options: [
              "Read books and draw pictures.",
              "Feed the chickens and water the vegetables.",
              "Swim in the river.",
              "Visit her grandparents."
            ], answer: 1,
            demoSteps: [
              { text: "题目问「每天早上」做什么。回原文找 every morning。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "every morning", text: "喂鸡·浇菜" },
                { head: "afternoon", text: "读书·画画" },
                { head: "定位", text: "看时间词" }
              ] } },
              { text: "原文 every morning 后面写的是喂鸡、浇菜。", emoji: "🐔" }
            ],
            explain: "B 正确。原文说 every morning 露西喂鸡、给蔬菜浇水;读书画画是下午(afternoon)的事;游泳是和表亲一起。",
            explainSteps: [
              { text: "定位 every morning:feed the chickens and water the vegetables。", emoji: "🐔" },
              { text: "读书画画是 afternoon,别看错时间,选 B!", emoji: "✅" },
              { text: "细节题回原文找时间词、地点词,精准定位不出错!", emoji: "🎯" }
            ] }
        }
      ]
    },

    // ================== 语文 ==================
    {
      subject: "chinese", icon: "📝", title: "语文 · 模拟测试(一)", minutes: 40,
      units: [
        {
          name: "考前提醒 · 语文答题规范",
          blocks: [
            { type: "lesson", title: "▶ 会做也要会答", steps: [
              { text: "语文模拟测试!很多同学「会做却丢分」,问题出在「答题不规范」。今天记住几条。", emoji: "📝" },
              { text: "基础题(字音字形成语病句):细心排查,用排除法,别马虎。默写题:一字不错,写完回读。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "选择题", text: "排除法·细心" },
                { head: "默写题", text: "一字不错" },
                { head: "阅读题", text: "答案在文中" }
              ] } },
              { text: "阅读题:答案往往「在原文里」,要回文中找依据,别凭空发挥。分点作答,序号标清。", emoji: "📖" },
              { text: "赏析题用「方法+作用」模板:如「运用比喻,生动写出了……」。修辞、描写、说明方法都套得上。", emoji: "📐" },
              { text: "书写工整、卷面整洁也是分!静下心,认真读题,规范作答。你准备好了,开始吧!", emoji: "💪" }
            ] }
          ],
          q: { type: "choice", points: 10, voice: "zh",
            q: "下列词语中,字形和字音全部正确的一项是:",
            options: [
              "决别（jué）  一丝不苟（gǒu）",
              "诀别（jué）  一丝不苟（gǒu）",
              "诀别（jué）  一丝不狗（gǒu）",
              "决别（jué）  一丝不苟（gōu）"
            ], answer: 1,
            demoSteps: [
              { text: "先看字形:「诀别」还是「决别」?「一丝不苟」还是「一丝不狗」?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "诀别", text: "言字旁·告别" },
                { head: "一丝不苟", text: "苟·草字头" },
                { head: "苟", text: "读 gǒu" }
              ] } },
              { text: "「诀别」是分别告别用言字旁;「一丝不苟」的「苟」是草字头。", emoji: "✍️" }
            ],
            explain: "B 正确。「诀别」(言字旁,指分别)、「一丝不苟」(苟,gǒu,一点不马虎)都对。A、D 写成「决别」错;C 写成「不狗」错。",
            explainSteps: [
              { text: "「诀别」用言字旁(诀,告别),不是「决」。", emoji: "✍️" },
              { text: "「一丝不苟」的「苟」是草字头,读 gǒu,不是「狗」。", emoji: "✅" },
              { text: "B 字形字音全对!选 B。基础题靠的就是细心和积累。", emoji: "🎯" }
            ] }
        },
        {
          name: "阅读理解测试 · 记叙文选段",
          blocks: [
            { type: "text", html: "🕵️ <b>阅读任务</b>:读下面的选段,注意人物描写和句子的含义,答案就在字里行间。" },
            { type: "reading", speakable: true, title: "母亲的等待", paragraphs: [
              "每天放学,拐过街角,我总能看见母亲站在老槐树下。她微微踮着脚,朝我来的方向张望,风吹乱了她额前的白发。",
              "看见我,她的眼睛一下子亮了,快步迎上来,伸手接过我沉甸甸的书包,嘴里念叨着:「饿了吧?锅里温着你爱吃的红烧肉呢。」",
              "那一刻我忽然明白,母亲站的不是一个街角,而是一段用爱丈量的时光。她的等待,是我每天回家路上最踏实的风景。"
            ], tip: "阅读提示:注意「踮脚」「张望」等动作细节,以及最后一段的含义。" }
          ],
          q: { type: "choice", points: 10, voice: "zh",
            q: "文中「她微微踮着脚,朝我来的方向张望」这句话主要运用了什么描写,有什么作用?",
            options: [
              "语言描写,写出母亲爱唠叨",
              "动作描写,通过「踮脚」「张望」的细节,生动表现了母亲盼儿归来的急切与深爱",
              "环境描写,交代了天气",
              "心理描写,写出母亲的想法"
            ], answer: 1,
            demoSteps: [
              { text: "「踮脚」「张望」是动作还是语言?这些细节表现了母亲怎样的心情?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "踮脚·张望", text: "动作描写" },
                { head: "细节", text: "盼儿归" },
                { head: "情感", text: "急切·深爱" }
              ] } },
              { text: "一连串动作细节,写的是母亲盼孩子回家的心情。", emoji: "💗" }
            ],
            explain: "B 正确。「踮脚」「张望」是动作描写(细节描写),生动表现了母亲盼望孩子归来的急切心情和深深的爱。",
            explainSteps: [
              { text: "「踮脚」「张望」是动作,属于动作(细节)描写。", emoji: "🏃" },
              { text: "这些细节表现母亲盼儿归的急切与深爱,选 B!", emoji: "✅" },
              { text: "赏析题模板:方法(动作描写)+ 作用(表现……情感)。规范作答得满分!", emoji: "🎯" }
            ] }
        },
        {
          name: "今日彩蛋 · 名著打卡",
          blocks: [
            { type: "rule", title: "📖 睡前 20 分钟名著时间", html: "冲刺中!今晚放松一下,读读<b>《朝花夕拾》</b>里最温暖的一篇。<br>还记得文中母亲、长妈妈那些不起眼的小动作吗?好文章里的爱,都藏在细节里——就像今天阅读题里踮脚张望的母亲。" }
          ],
          q: null
        }
      ]
    },

    // ================== 生物 ==================
    {
      subject: "biology", icon: "🌱", title: "生物 · 生物综合复习", minutes: 25,
      units: [
        {
          name: "动画课堂 · 生物知识总盘点",
          blocks: [
            { type: "lesson", title: "▶ 从细胞到绿色植物,一次串清", steps: [
              { text: "模拟测评周!生物今晚把这个暑假学的知识串一遍,考试心中有数。", emoji: "🌱" },
              { text: "生物的特征:需要营养、能呼吸、能繁殖、能对刺激作出反应。细胞是生物结构和功能的基本单位。", emoji: "🔬", scene: { type: "clues", items: [
                { head: "生物特征", text: "营养·呼吸·繁殖·反应" },
                { head: "细胞", text: "基本单位" },
                { head: "植物独有", text: "壁·叶绿体·液泡" }
              ] } },
              { text: "细胞:植物细胞比动物多三样(细胞壁、叶绿体、液泡);显微镜放大倍数=目镜×物镜,成倒像。", emoji: "🔬" },
              { text: "生物与环境:相互影响(仙人掌叶变刺=适应);光合作用(CO₂+水→有机物+氧气),绿色植物是生产者。", emoji: "🌳", scene: { type: "clues", items: [
                { head: "光合作用", text: "吸 CO₂·放 O₂" },
                { head: "结果", text: "子房→果实" },
                { head: "适应环境", text: "仙人掌叶变刺" }
              ] } },
              { text: "复习口诀:细胞是单位,植物多三样;光合放氧气,显微成倒像。生物知识串成线,考试不再乱!", emoji: "🎯" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "下列关于生物学知识的说法,正确的一项是:",
            options: [
              "动物细胞和植物细胞一样都有细胞壁和叶绿体",
              "光合作用吸收二氧化碳、释放氧气,绿色植物是生产者",
              "显微镜的放大倍数等于目镜倍数加物镜倍数",
              "生物不能对外界刺激作出反应"
            ], answer: 1,
            demoSteps: [
              { text: "逐项核对:细胞结构、光合作用、放大倍数、生物特征。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "细胞壁叶绿体", text: "植物独有" },
                { head: "光合作用", text: "吸 CO₂·放 O₂" },
                { head: "放大倍数", text: "目镜×物镜" }
              ] } },
              { text: "把细胞结构、放大倍数、生物特征说错的排除。", emoji: "🔍" }
            ],
            explain: "B 正确。A 错(细胞壁、叶绿体是植物特有);C 错(放大倍数是相乘不是相加);D 错(生物能对刺激作出反应)。",
            explainSteps: [
              { text: "A:细胞壁、叶绿体是植物细胞独有,动物没有,错。", emoji: "❌" },
              { text: "C:放大倍数=目镜×物镜(相乘),错;D:生物能对刺激反应,错。", emoji: "❌" },
              { text: "B:光合作用吸 CO₂ 放 O₂,绿色植物是生产者,正确!选 B。", emoji: "✅" }
            ] }
        }
      ]
    }
  ]
};
