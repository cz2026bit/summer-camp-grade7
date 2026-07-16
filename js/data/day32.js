// ============ 第 32 关 ============
window.DAYS = window.DAYS || {};

window.DAYS[32] = {
  day: 32,
  title: "第 32 关 · 线段与角",
  estimate: "四科约 2~3 小时 · 共 7 道思考题(含 1 道 BOSS 题)",
  sections: [
    // ================== 数学 ==================
    {
      subject: "math", icon: "🔢", title: "数学 · 线段与角", minutes: 50,
      units: [
        {
          name: "动画课堂 1 · 线段的中点与和差",
          blocks: [
            { type: "lesson", title: "▶ 把线段「切」和「拼」", steps: [
              { text: "线段可以「拼接」也可以「切分」。如果点 C 在线段 AB 上,那么 AC + CB = AB。这是线段和差的基础。", emoji: "📏" },
              { text: "线段的中点:把线段平分成两段相等部分的点。若 M 是 AB 的中点,则 AM = MB = ½AB。", emoji: "🎯", scene: { type: "clues", items: [
                { head: "中点 M", text: "平分线段" },
                { head: "AM = MB", text: "各一半" },
                { head: "AM = MB = ½AB", text: "关键式" }
              ] } },
              { text: "例:AB = 10cm,M 是中点,那么 AM = MB = 5cm。求线段常用「和差」和「中点」两个关系。", emoji: "🧮" },
              { text: "解线段问题的窍门:画个图!把已知长度标上去,和差、中点关系一目了然,不容易算错。", emoji: "✏️", scene: { type: "clues", items: [
                { head: "第一步", text: "画线段图" },
                { head: "第二步", text: "标已知" },
                { head: "第三步", text: "用和差·中点" }
              ] } },
              { text: "口诀:线段和差看整体,中点平分各一半;画图标数最保险,几何计算不出错!", emoji: "🎯" }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 2 · 角:分类与角平分线",
          blocks: [
            { type: "lesson", title: "▶ 从锐角到周角", steps: [
              { text: "角是由两条有公共端点的射线组成的图形。按大小,角分成几类,考试常考。", emoji: "📐" },
              { text: "角的分类:锐角(小于 90°)、直角(等于 90°)、钝角(大于 90° 小于 180°)、平角(180°)、周角(360°)。", emoji: "🔢", scene: { type: "clues", items: [
                { head: "锐角", text: "< 90°" },
                { head: "直角", text: "= 90°" },
                { head: "钝角", text: "90°~180°" }
              ] } },
              { text: "角也有「中线」——角平分线:从角的顶点出发,把角分成两个相等的角的射线。", emoji: "✂️", scene: { type: "clues", items: [
                { head: "角平分线", text: "平分一个角" },
                { head: "分成", text: "两个相等的角" },
                { head: "类比", text: "像线段的中点" }
              ] } },
              { text: "两个重要关系:互余(两角和 = 90°)、互补(两角和 = 180°)。「余」小(90°),「补」大(180°)。", emoji: "🤝", scene: { type: "clues", items: [
                { head: "互余", text: "两角和 90°" },
                { head: "互补", text: "两角和 180°" },
                { head: "记忆", text: "余 9 补 18" }
              ] } },
              { text: "口诀:锐直钝平周,90 180 360;角平分线分两半,互余 90 互补 180!", emoji: "🎯" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "已知一个角是 35°,那么它的余角和补角分别是:",
            options: [
              "余角 55°,补角 145°",
              "余角 145°,补角 55°",
              "余角 65°,补角 155°",
              "余角 55°,补角 155°"
            ], answer: 0,
            demoSteps: [
              { text: "余角 = 90° 减这个角,补角 = 180° 减这个角。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "余角", text: "90° − 35°" },
                { head: "补角", text: "180° − 35°" },
                { head: "记忆", text: "余 9 补 18" }
              ] } },
              { text: "90 − 35 = 55,180 − 35 = 145。", emoji: "🧮" }
            ],
            explain: "A 正确。余角 = 90° − 35° = 55°;补角 = 180° − 35° = 145°。互余凑 90°,互补凑 180°。",
            explainSteps: [
              { text: "余角:90° − 35° = 55°(互余凑 90°)。", emoji: "🤝" },
              { text: "补角:180° − 35° = 145°(互补凑 180°)。", emoji: "🤝" },
              { text: "选 A!记住:「余」配 90，「补」配 180,别记反。", emoji: "✅" }
            ] }
        },
        {
          name: "🔥 BOSS 挑战 · 角平分线求角",
          blocks: [
            { type: "text", html: "💪 <b>BOSS 战规则</b>:角平分线 + 和差关系!画图理清,一步步算。草稿纸准备!" }
          ],
          q: { type: "fill", points: 20, boss: true, voice: "zh",
            q: "∠AOB = 80°,OC 是 ∠AOB 的平分线,OD 是 ∠BOC 的平分线。请问 ∠AOD 是多少度?(直接填数字)",
            placeholder: "例如: 50",
            accept: ["60", "60°", "60度", "六十"],
            demoSteps: [
              { text: "OC 平分 80°,所以 ∠AOC = ∠BOC = 40°。", emoji: "✂️", scene: { type: "clues", items: [
                { head: "∠AOB", text: "80°" },
                { head: "∠BOC", text: "80÷2 = 40°" },
                { head: "∠COD", text: "40÷2 = 20°" }
              ] } },
              { text: "OD 平分 ∠BOC(40°),所以 ∠COD = 20°。∠AOD = ∠AOC + ∠COD。", emoji: "🧮" }
            ],
            explain: "OC 平分 80° → ∠AOC = ∠BOC = 40°;OD 平分 ∠BOC(40°)→ ∠COD = 20°;∠AOD = ∠AOC + ∠COD = 40° + 20° = 60°。",
            explainSteps: [
              { text: "OC 平分 ∠AOB:∠AOC = ∠BOC = 40°。", emoji: "✂️" },
              { text: "OD 平分 ∠BOC:∠COD = 20°。", emoji: "✂️" },
              { text: "∠AOD = 40° + 20° = 60°!画图 + 平分线,层层求解,BOSS 拿下!", emoji: "🏆" }
            ] }
        }
      ]
    },

    // ================== 英语 ==================
    {
      subject: "english", icon: "📚", title: "英语 · 完形填空入门", minutes: 45,
      units: [
        {
          name: "单词训练营 · 短文连接词 12 个(点卡片听发音!)",
          blocks: [
            { type: "text", html: "🎧 今天的词是<span class='hl'>句子之间的桥</span>,完形填空常靠它们判断!点卡片听发音,跟读 3 遍。" },
            { type: "flashcards", words: [
              { word: "and", phonetic: "/ænd/", cn: "和;而且", sentence: "He is kind and helpful." },
              { word: "but", phonetic: "/bʌt/", cn: "但是", sentence: "It is small but nice." },
              { word: "so", phonetic: "/səʊ/", cn: "所以", sentence: "It rained, so we stayed in." },
              { word: "because", phonetic: "/bɪˈkɒz/", cn: "因为", sentence: "I like it because it is fun." },
              { word: "then", phonetic: "/ðen/", cn: "然后", sentence: "First read, then write." },
              { word: "also", phonetic: "/ˈɔːlsəʊ/", cn: "也", sentence: "She can sing and also dance." },
              { word: "however", phonetic: "/haʊˈevə/", cn: "然而", sentence: "It's hard; however, I'll try." },
              { word: "first", phonetic: "/fɜːst/", cn: "首先", sentence: "First, wash your hands." },
              { word: "finally", phonetic: "/ˈfaɪnəli/", cn: "最后", sentence: "Finally, we got home." },
              { word: "another", phonetic: "/əˈnʌðə/", cn: "另一个", sentence: "Give me another one." },
              { word: "both", phonetic: "/bəʊθ/", cn: "两者都", sentence: "Both boys are tall." },
              { word: "enough", phonetic: "/ɪˈnʌf/", cn: "足够的", sentence: "We have enough time." }
            ] }
          ],
          q: null
        },
        {
          name: "阅读侦探 · 完形填空:读懂上下文",
          blocks: [
            { type: "text", html: "🕵️ <b>侦探任务</b>:完形填空考的是「读懂整段」!别只看一个空,要联系上下文,读懂意思再选。" },
            { type: "reading", speakable: true, title: "A Kind Boy (完形短文)", paragraphs: [
              "Tom is a kind boy. On his way to school, he sees an old woman. She wants to cross the road, but she is afraid because there are many cars.",
              "Tom walks up to her and says, 'Let me help you.' He holds her hand and they cross the road together slowly and safely.",
              "The old woman is very happy. She says 'Thank you' to Tom. Tom feels happy too, because helping others is a good thing to do."
            ], tip: "解题提示:完形填空要通读全文,先理解大意,再根据逻辑和语法选词。" }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "根据短文,老妇人过马路时害怕,是「因为」路上车多。表示原因,句中用的连接词应是:",
            options: ["and", "because", "but", "so"], answer: 1,
            demoSteps: [
              { text: "「她害怕」和「路上车多」是什么关系?后者是前者的原因。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "她害怕", text: "结果" },
                { head: "车多", text: "原因" },
                { head: "表原因", text: "用 because" }
              ] } },
              { text: "表示「因为」的连接词是哪个?", emoji: "🔗" }
            ],
            explain: "B 正确。「她害怕」是因为「路上车多」,表示原因用 because。and 表并列,but 表转折,so 表结果,都不合适。",
            explainSteps: [
              { text: "「害怕」和「车多」是「结果—原因」关系。", emoji: "🔗" },
              { text: "表示原因用 because,选 B!", emoji: "✅" },
              { text: "完形填空诀窍:读懂句子之间的逻辑关系(因果、转折、并列),再选连接词。", emoji: "🎯" }
            ] }
        },
        {
          name: "英文名著时光 · The Shepherd Boy and the Wolf",
          blocks: [
            { type: "rule", title: "📖 名著名片", html: "<b>《伊索寓言》Aesop's Fables</b>——《牧羊童和星星》:仰望星空的孩子,别忘了脚下的路。" },
            { type: "reading", speakable: true, title: "The Astronomer", paragraphs: [
              "There is a man who loves to study the stars. Every night, he walks outside and looks up at the sky. He knows the name of every star.",
              "One night, he is walking and looking up at the stars as usual. He is thinking about the moon and the planets far away. He does not look at the road in front of him.",
              "Suddenly, he falls into a deep hole in the ground! He can't climb out. 'Help! Help!' he cries.",
              "A neighbour hears him and comes. 'You want to know all about the sky,' says the neighbour, 'but you don't see what is at your own feet!' Sometimes we look so far away that we forget what is right in front of us."
            ], tip: "生词提示:astronomer 天文学家 / planet 行星 / hole 坑 / neighbour 邻居 / feet 脚" }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "What lesson does the story teach?(这个故事告诉我们什么道理?)",
            options: [
              "We should study the stars every night.",
              "We should not forget what is right in front of us while looking far away.",
              "We should never walk at night.",
              "We should ask neighbours for help."
            ], answer: 1,
            demoSteps: [
              { text: "天文学家为什么掉进坑里?邻居的话点出了什么道理?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "看天上", text: "忘了看脚下" },
                { head: "结果", text: "掉进坑" },
                { head: "道理", text: "别忘眼前" }
              ] } },
              { text: "邻居说他只顾看远方,看不到脚下,答案就在这。", emoji: "🌟" }
            ],
            explain: "B 正确。天文学家只顾仰望星空,忘了看脚下的路,掉进坑里。故事告诉我们:别只顾看远方而忽略眼前实实在在的东西。",
            explainSteps: [
              { text: "他只看天上的星星,没看脚下的坑。", emoji: "🌟" },
              { text: "邻居点破:别忘了眼前的东西,选 B!", emoji: "✅" },
              { text: "寓意:有理想仰望星空是好的,但也要脚踏实地,别忽略眼前。", emoji: "🎯" }
            ] }
        }
      ]
    },

    // ================== 语文 ==================
    {
      subject: "chinese", icon: "📝", title: "语文 · 记叙文:标题的作用", minutes: 40,
      units: [
        {
          name: "动画课堂 · 一个好标题,能干这么多事",
          blocks: [
            { type: "lesson", title: "▶ 标题为什么这么起", steps: [
              { text: "阅读题常问:「文章的标题有什么作用/好处?」标题看着简单,作用可不小,答题要全面。", emoji: "🏷️" },
              { text: "标题常见作用有：①概括文章主要内容;②点明或暗示文章中心(主旨);③是文章的线索。", emoji: "🧵", scene: { type: "clues", items: [
                { head: "概括内容", text: "写了什么" },
                { head: "点明主旨", text: "中心思想" },
                { head: "作线索", text: "贯穿全文" }
              ] } },
              { text: "还有:④设置悬念、引起读者兴趣;⑤运用修辞(比喻等),生动形象;⑥交代写作对象或环境。", emoji: "🎣", scene: { type: "clues", items: [
                { head: "设悬念", text: "引人阅读" },
                { head: "用修辞", text: "生动形象" },
                { head: "点对象", text: "写谁/什么" }
              ] } },
              { text: "举例:《背影》以「背影」为线索贯穿全文,又是全文的中心;《爸爸的花儿落了》一语双关,既指花落又暗示爸爸去世。", emoji: "🌸" },
              { text: "答题模板:「标题××,①概括了……,②点明了……的中心,③是全文线索,④吸引读者兴趣。」多角度作答,分数才高!", emoji: "🎯" }
            ] }
          ],
          q: { type: "choice", points: 10, voice: "zh",
            q: "一篇写母爱的文章题为《一碗热汤面》,全文围绕「热汤面」展开。这个标题的作用不包括:",
            options: [
              "是贯穿全文的线索",
              "以小见大,暗示母爱的主题",
              "生动具体,引起读者阅读兴趣",
              "说明这篇文章是介绍怎么做面条的说明文"
            ], answer: 3,
            demoSteps: [
              { text: "《一碗热汤面》写的是母爱,不是做面。逐条看哪个作用「不成立」。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "线索", text: "围绕热汤面展开 ✓" },
                { head: "以小见大", text: "小面条·大母爱 ✓" },
                { head: "说明做面", text: "文章不是说明文 ✗" }
              ] } },
              { text: "文章写母爱,不是教做面条,哪个说法离题了?", emoji: "🍜" }
            ],
            explain: "D 不是标题的作用。文章写的是母爱(记叙文),不是介绍做面条的说明文。A、B、C 都是这个标题真正的作用。",
            explainSteps: [
              { text: "A 线索、B 以小见大点主题、C 引兴趣,都是真作用。", emoji: "✅" },
              { text: "D 把它说成「介绍做面条的说明文」,完全跑偏,选 D!", emoji: "❌" },
              { text: "标题《一碗热汤面》是借「面」写「母爱」,以小见大,不是说明文。", emoji: "🎯" }
            ] }
        },
        {
          name: "动画课堂 · 给文章拟标题",
          blocks: [
            { type: "lesson", title: "▶ 好标题怎么起", steps: [
              { text: "有时阅读题反过来考:「给文章拟一个标题」。会赏析标题,也要会「起」标题。", emoji: "✍️" },
              { text: "拟标题的几种思路:①用文章的写作对象或线索(《背影》);②用中心事件(《一次难忘的旅行》)。", emoji: "🧩", scene: { type: "clues", items: [
                { head: "抓对象/线索", text: "背影·热汤面" },
                { head: "抓中心事件", text: "难忘的旅行" },
                { head: "抓主旨情感", text: "母爱·成长" }
              ] } },
              { text: "③用文章的主旨或情感(《母爱如水》);④用修辞让标题生动(比喻、双关)。", emoji: "🎨" },
              { text: "好标题的标准:简洁(不啰嗦)、贴切(扣内容)、有味(能吸引人、有意蕴)。", emoji: "⭐" },
              { text: "口诀:拟题抓对象、线索、中心、情感;简洁又贴切,最好有点味。一个好标题,是文章的眼睛!", emoji: "👁️" }
            ] }
          ],
          q: { type: "fill", points: 10, voice: "zh",
            q: "像《背影》《一碗热汤面》这样,标题贯穿全文、把各个情节串联起来,这时标题起的是全文「__________」的作用。(填两个字)",
            placeholder: "填两个字",
            accept: ["线索", "线索。", "线索作用"],
            demoSteps: [
              { text: "标题「贯穿全文、串联情节」,像一条什么把珠子串起来?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "贯穿全文", text: "从头到尾" },
                { head: "串联情节", text: "像一条线" },
                { head: "作用", text: "?" }
              ] } },
              { text: "把情节像珠子一样串起来的那条「线」,叫线索——两个字。", emoji: "🧵" }
            ],
            explain: "答案:线索。标题贯穿全文、串联各个情节时,起的是「线索」作用,如《背影》以「背影」为线索。",
            explainSteps: [
              { text: "标题贯穿全文、串联情节 = 线索作用。", emoji: "🧵" },
              { text: "《背影》全文围绕「背影」展开,就是线索。", emoji: "✅" },
              { text: "答「线索」。标题的作用要多角度答:概括、主旨、线索、悬念、修辞。", emoji: "🎯" }
            ] }
        },
        {
          name: "今日彩蛋 · 名著打卡",
          blocks: [
            { type: "rule", title: "📖 睡前 20 分钟名著时间", html: "继续读<b>《朝花夕拾》</b>!今晚留意各篇的标题:<b>《从百草园到三味书屋》《阿长与〈山海经〉》《藤野先生》</b>——想一想,这些标题分别起了什么作用?<br>是概括内容、点明对象,还是暗示情感?会分析标题,阅读题就多拿几分!" }
          ],
          q: null
        }
      ]
    },

    // ================== 道法 ==================
    {
      subject: "civics", icon: "⚖️", title: "道法 · 亲情之爱", minutes: 25,
      units: [
        {
          name: "动画课堂 · 家的意味与亲情",
          blocks: [
            { type: "lesson", title: "▶ 理解家庭,体味亲情", steps: [
              { text: "家,是我们身心的港湾。这一课,我们学着理解家庭、体味亲情、化解与父母的冲突。", emoji: "🏠" },
              { text: "家庭是我们成长的地方,家人给予我们生命、抚养和关爱。亲情是家庭最珍贵的情感纽带。", emoji: "💗", scene: { type: "clues", items: [
                { head: "家", text: "身心的港湾" },
                { head: "亲情", text: "家庭的纽带" },
                { head: "表达方式", text: "不尽相同" }
              ] } },
              { text: "每个家庭的亲情表达方式不同:有的热烈直接,有的含蓄深沉。父母不常说「爱」,却把爱藏在一日三餐里。", emoji: "🍚" },
              { text: "进入青春期,和父母难免有「碰撞」。这很正常,原因是我们长大了、有了独立想法,和父母存在观念差异。", emoji: "⚡", scene: { type: "clues", items: [
                { head: "亲子冲突", text: "很正常" },
                { head: "原因", text: "观念差异·独立意识" },
                { head: "化解", text: "沟通·换位思考" }
              ] } },
              { text: "化解冲突要靠有效沟通:主动交流、换位思考、控制情绪、求同存异。爱需要用心表达,也需要智慧经营。", emoji: "🤝" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "进入青春期后,小刚常和父母因为一些小事发生争执。对此,下列认识正确的是:",
            options: [
              "亲子冲突说明父母不爱自己了",
              "亲子间的冲突是正常的,可以通过有效沟通、换位思考来化解",
              "为了避免冲突,凡事都听父母的,不表达自己的想法",
              "和父母冲突就用冷战、顶撞来解决"
            ], answer: 1,
            demoSteps: [
              { text: "回忆:亲子冲突正常吗?正确的化解方式是什么?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "冲突", text: "很正常" },
                { head: "原因", text: "观念差异" },
                { head: "化解", text: "沟通·换位思考" }
              ] } },
              { text: "把「父母不爱了」「一味顺从」「冷战顶撞」的错误说法排除。", emoji: "🔍" }
            ],
            explain: "B 正确。亲子冲突是青春期正常现象,源于观念差异,应通过有效沟通、换位思考化解。A 误解了冲突;C 压抑自我;D 激化矛盾,都不对。",
            explainSteps: [
              { text: "A:有冲突不代表父母不爱,恰恰是因为在乎,错。", emoji: "❌" },
              { text: "C:一味顺从、不表达,不利于成长和沟通,错。", emoji: "❌" },
              { text: "D:冷战顶撞只会激化矛盾,错。", emoji: "❌" },
              { text: "B:冲突正常,靠沟通、换位思考化解,选 B!", emoji: "✅" }
            ] }
        }
      ]
    }
  ]
};
