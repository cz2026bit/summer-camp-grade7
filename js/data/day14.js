// ============ 第 14 关 ============
window.DAYS = window.DAYS || {};

window.DAYS[14] = {
  day: 14,
  title: "第 14 关 · 第二周大盘点",
  estimate: "四科约 2~3 小时 · 共 7 道闯关题(含 1 道 BOSS 题)",
  sections: [
    // ================== 数学 ==================
    {
      subject: "math", icon: "🔢", title: "数学 · 有理数运算总复盘", minutes: 45,
      units: [
        {
          name: "动画课堂 · 有理数运算五件套",
          blocks: [
            { type: "lesson", title: "▶ 加减乘除乘方,一张流程图搞定", steps: [
              { text: "这一周把有理数的五种运算全学完了!今晚串成一张「流程图」,考试照着走不出错。", emoji: "🗺️" },
              { text: "加减:先变身(减变加),再归队(同号相加)、凑整。乘除:先定符号(同正异负),再算绝对值。", emoji: "🔧", scene: { type: "clues", items: [
                { head: "加减", text: "变身+归队" },
                { head: "乘除", text: "定符号+绝对值" },
                { head: "乘方", text: "看底数看指数" }
              ] } },
              { text: "乘方:看清底数是谁(括号内外!),负数看指数奇偶(偶正奇负)。", emoji: "🎲", scene: { type: "clues", items: [
                { head: "(−2)³", text: "= −8" },
                { head: "−2³", text: "= −8" },
                { head: "(−2)⁴", text: "= +16" }
              ] } },
              { text: "混合运算总口诀:先乘方,后乘除,最后加减;有括号,先里头。每步验符号。", emoji: "🚦" },
              { text: "科学记数法:大数瘦身 a×10ⁿ,a 只留一位整数,n = 位数 − 1。五件套齐活,第二周通关!", emoji: "🏆" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "计算 (−2)³ + (−12) ÷ 4 − 3 × (−1)² 的结果是:",
            options: ["−14", "−8", "−12", "14"], answer: 0,
            demoSteps: [
              { text: "先乘方:(−2)³ = −8,(−1)² = +1。", emoji: "🎲", scene: { type: "clues", items: [
                { head: "(−2)³", text: "−8" },
                { head: "(−1)²", text: "+1" },
                { head: "再算乘除", text: "(−12)÷4;3×1" }
              ] } },
              { text: "再乘除:(−12)÷4 = −3,3×(+1) = 3。最后加减:−8 +(−3) − 3。", emoji: "🧮" }
            ],
            explain: "(−2)³=−8;(−12)÷4=−3;3×(−1)²=3×1=3。原式 = −8 + (−3) − 3 = −14。选 A。",
            explainSteps: [
              { text: "乘方:(−2)³=−8,(−1)²=1。", emoji: "🥇" },
              { text: "乘除:(−12)÷4=−3;3×1=3。", emoji: "🥈" },
              { text: "加减:−8 −3 −3 = −14,选 A!", emoji: "✅" },
              { text: "注意 (−1)²=+1 不是 −1;顺序方→乘除→加减,一步不乱。", emoji: "🎯" }
            ] }
        },
        {
          name: "🔥 BOSS 挑战 · 综合大闯关",
          blocks: [
            { type: "text", html: "💪 <b>BOSS 战规则</b>:第二周所有本领都用上!这是一道压轴综合题,沉住气,一步步来。草稿纸准备!" }
          ],
          q: { type: "fill", points: 20, boss: true, voice: "zh",
            q: "计算:−2² × 3 + (−18) ÷ (−3²) + |−4|。请算出最后结果。(直接填数字,含正负号)",
            placeholder: "例如: 5",
            accept: ["-6", "−6", "负6", "负六"],
            demoSteps: [
              { text: "先算乘方(注意负号在括外!):−2² = −4,−3² = −9。", emoji: "❗", scene: { type: "clues", items: [
                { head: "−2²", text: "= −4" },
                { head: "−3²", text: "= −9" },
                { head: "|−4|", text: "= 4" }
              ] } },
              { text: "再乘除:−4×3 = −12;(−18)÷(−9) = +2。绝对值 |−4| = 4。", emoji: "🧮" }
            ],
            explain: "−2²=−4,×3=−12;−3²=−9,(−18)÷(−9)=2;|−4|=4。合计 −12 + 2 + 4 = −6。",
            explainSteps: [
              { text: "乘方:−2²=−4,−3²=−9(负号都在括号外!)。", emoji: "❗" },
              { text: "乘除:−4×3=−12;(−18)÷(−9)=+2。绝对值 |−4|=4。", emoji: "🧮" },
              { text: "加减:−12 + 2 + 4 = −6!", emoji: "🏆" },
              { text: "最易错处:−2² 和 (−2)² 不同,|−4| 永远非负。你都躲过了吗?", emoji: "🎯" }
            ] }
        }
      ]
    },

    // ================== 英语 ==================
    {
      subject: "english", icon: "📚", title: "英语 · 第二周语法回炉", minutes: 45,
      units: [
        {
          name: "单词大挑战 · 一周高频词抽查(点卡片听发音!)",
          blocks: [
            { type: "text", html: "🎧 这周学了<span class='hl'>动作、频率、疑问、食物</span>!抽 10 个再听一遍,巩固发音。" },
            { type: "flashcards", words: [
              { word: "study", phonetic: "/ˈstʌdi/", cn: "学习", sentence: "She studies hard." },
              { word: "always", phonetic: "/ˈɔːlweɪz/", cn: "总是", sentence: "He always helps me." },
              { word: "sometimes", phonetic: "/ˈsʌmtaɪmz/", cn: "有时", sentence: "I sometimes read at night." },
              { word: "where", phonetic: "/weə/", cn: "哪里", sentence: "Where do you live?" },
              { word: "when", phonetic: "/wen/", cn: "何时", sentence: "When is your birthday?" },
              { word: "water", phonetic: "/ˈwɔːtə/", cn: "水", sentence: "How much water is there?" },
              { word: "bread", phonetic: "/bred/", cn: "面包", sentence: "I eat some bread." },
              { word: "some", phonetic: "/sʌm/", cn: "一些", sentence: "I have some friends." },
              { word: "any", phonetic: "/ˈeni/", cn: "任何", sentence: "Do you have any pens?" },
              { word: "question", phonetic: "/ˈkwestʃən/", cn: "问题", sentence: "I have a question." }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 · 一般现在时四项复盘",
          blocks: [
            { type: "lesson", title: "▶ 时态·频度·疑问·名词,一网打尽", steps: [
              { text: "这一周英语的核心是「一般现在时」和它的好朋友们。今天连成一条线。", emoji: "🧩" },
              { text: "时态:I/you/we/they 用原形,he/she/it 动词加 s(辅音+y 变 ies,o/s/x/sh/ch 加 es)。", emoji: "✨", scene: { type: "clues", items: [
                { head: "原形", text: "I/you/we/they" },
                { head: "加 s", text: "he/she/it" },
                { head: "否定疑问", text: "don't / doesn't" }
              ] } },
              { text: "频度副词:行前 be 后,always 到 never 排队;never 已否定,别再加 not。", emoji: "📊" },
              { text: "特殊疑问句:疑问词开头(what/who/where/when),答句给具体信息,不用 Yes/No。", emoji: "❓" },
              { text: "名词:可数加 s 用 many,不可数借容器用 much;some 用肯定,any 用否定疑问。四项打通!", emoji: "🎯" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "选出完全正确的一句:",
            options: [
              "My brother always watch TV, and he doesn't do any homework.",
              "My brother always watches TV, and he doesn't do any homework.",
              "My brother watches always TV, and he don't do some homework.",
              "My brother always watches TV, and he doesn't do some homework."
            ], answer: 1,
            demoSteps: [
              { text: "三处考点:三单动词变身、频度副词位置、否定句 any。逐一检查。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "watch", text: "三单 → watches" },
                { head: "always", text: "实义动词前" },
                { head: "否定句", text: "用 any" }
              ] } },
              { text: "三处全对的才是答案。", emoji: "✅" }
            ],
            explain: "B 正确:watches(三单)、always 在动词前、否定句 doesn't...any。A 没变 watches;C 位置错且 don't/some 错;D 否定句该用 any。",
            explainSteps: [
              { text: "A:watch 没加 s(brother=he),错。", emoji: "❌" },
              { text: "C:always 位置错、brother 该用 doesn't、否定该用 any,错。", emoji: "❌" },
              { text: "D:否定句 don't/doesn't 后该用 any 而非 some,错。", emoji: "❌" },
              { text: "B:watches + always 位置对 + doesn't any,三处全对!选 B。", emoji: "✅" }
            ] }
        },
        {
          name: "英文名著时光 · The Frog Prince",
          blocks: [
            { type: "rule", title: "📖 名著名片", html: "<b>格林兄弟 Grimm</b>《青蛙王子》——一个承诺,一只青蛙,变出一位王子。守信的故事,中外都爱讲。" },
            { type: "reading", speakable: true, title: "The Frog Prince", paragraphs: [
              "A princess plays with a golden ball near a pond. The ball falls into the water. A frog comes up. 'I can get your ball,' he says, 'if you let me be your friend.' 'Yes, yes!' says the princess.",
              "The frog gets the ball, but the princess runs home and forgets her promise. That evening, the frog comes to the palace. The king says, 'A princess must always keep her promise.'",
              "So the princess lets the frog eat from her plate and sit by her. She is not happy, but she keeps her word.",
              "In the morning, the frog is gone. In his place stands a handsome prince! A bad witch turned him into a frog, and only a kind princess could break the spell. They become good friends, and the princess learns to keep her promises."
            ], tip: "生词提示:pond 池塘 / promise 承诺 / palace 宫殿 / handsome 英俊的 / spell 魔咒" }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "What does the princess learn in the story?(公主学到了什么?)",
            options: [
              "She learns to swim.",
              "She learns to keep her promises.",
              "She learns to play the golden ball.",
              "She learns to catch frogs."
            ], answer: 1,
            demoSteps: [
              { text: "国王的话点出了主题,故事最后又强调了一次。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "国王说", text: "must keep her promise" },
                { head: "公主", text: "keeps her word" },
                { head: "结尾", text: "learns to keep promises" }
              ] } },
              { text: "原文结尾 learns to keep her promises 直接给出答案。", emoji: "👑" }
            ],
            explain: "B 正确。公主起初忘了对青蛙的承诺,在国王教导下学会了信守诺言。这正是故事的主题。",
            explainSteps: [
              { text: "国王强调:公主必须守信;公主照做,最终学会守诺。", emoji: "👑" },
              { text: "结尾明说 learns to keep her promises,选 B!", emoji: "✅" },
              { text: "和元方守信、龟兔坚持一样,守信是永恒的主题。", emoji: "🎯" }
            ] }
        }
      ]
    },

    // ================== 语文 ==================
    {
      subject: "chinese", icon: "📝", title: "语文 · 第二周阅读与古文盘点", minutes: 40,
      units: [
        {
          name: "动画课堂 · 记叙文阅读方法复盘",
          blocks: [
            { type: "lesson", title: "▶ 概括 · 理解词句 · 修辞", steps: [
              { text: "这一周语文练了三大阅读本领:概括内容、理解词句、辨析修辞。今晚复盘一遍。", emoji: "📝" },
              { text: "概括:谁 + 在什么情况下 + 做了什么 + 结果怎样。一句话,有头有尾。", emoji: "🔑", scene: { type: "clues", items: [
                { head: "概括", text: "谁+做什么+结果" },
                { head: "理解词句", text: "本义+语境+效果" },
                { head: "修辞", text: "比喻vs拟人" }
              ] } },
              { text: "理解词句:先说本义,再说文中的语境义,最后说表达效果。三段式,分数稳。", emoji: "🔍" },
              { text: "修辞:比喻是「把物比成另一物」(要不同类+有相似),拟人是「把物当人写」(有人的动作情感)。", emoji: "🎨" },
              { text: "古文两篇《咏雪》《陈太丘与友期》:记牢古今异义(儿女=子侄)、敬谦称谓(尊君/家君)。基础题不丢分!", emoji: "📖" }
            ] }
          ],
          q: { type: "choice", points: 10, voice: "zh",
            q: "下列关于本周语文知识的说法,错误的一项是:",
            options: [
              "「小草从土里探出头来」运用了拟人的修辞",
              "「他的脸红得像苹果」是比喻句",
              "《咏雪》中「儿女」的古义就是今天说的儿子和女儿",
              "概括一件事要包含人物、事件和结果"
            ], answer: 2,
            demoSteps: [
              { text: "回忆《咏雪》里「儿女」的古义——谢道韫是侄女也被称儿女。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "儿女(古)", text: "子侄晚辈" },
                { head: "儿女(今)", text: "儿子女儿" },
                { head: "结论", text: "古今不同" }
              ] } },
              { text: "找出唯一说错的一句。", emoji: "🔍" }
            ],
            explain: "C 错。《咏雪》中「儿女」古义指「子侄辈的晚辈」,范围比今义大,是古今异义词。其余三项都正确。",
            explainSteps: [
              { text: "A 拟人、B 比喻、D 概括三要素,都说对了。", emoji: "✅" },
              { text: "C:「儿女」古义是子侄晚辈,不等于今天的儿子女儿,说错了!选 C。", emoji: "🎯" }
            ] }
        },
        {
          name: "动画课堂 · 古诗默写周清",
          blocks: [
            { type: "lesson", title: "▶ 《峨眉山月歌》名句回顾", steps: [
              { text: "本周新学《峨眉山月歌》。默写送分题,今晚再过一遍,把易错字钉牢。", emoji: "✍️" },
              { text: "全诗:峨眉山月半轮秋,影入平羌江水流。夜发清溪向三峡,思君不见下渝州。", emoji: "🌙", scene: { type: "clues", items: [
                { head: "写月影", text: "影入平羌江水流" },
                { head: "写思念", text: "思君不见下渝州" },
                { head: "易错字", text: "羌·渝" }
              ] } },
              { text: "理解性默写要看题干:问「思念友人」答「思君不见下渝州」,问「月影入江」答「影入平羌江水流」。", emoji: "🎯" },
              { text: "默写口诀再念一遍:三查一读——查错别字、查漏字、查串句,写完回读一遍。", emoji: "✅" }
            ] }
          ],
          q: { type: "fill", points: 10, voice: "zh",
            q: "默写:《峨眉山月歌》中直接抒发对友人思念之情的句子是「夜发清溪向三峡,__________」。(填后半句)",
            placeholder: "填七个字",
            accept: ["思君不见下渝州", "思君不见下渝州。", "思君不见下渝州,"],
            demoSteps: [
              { text: "上句写夜里出发向三峡,下句抒发什么情感?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "上句", text: "夜发清溪向三峡" },
                { head: "下句", text: "抒思念之情" },
                { head: "易错字", text: "渝" }
              ] } },
              { text: "「思君不见」正是思念,注意「渝」字写法。", emoji: "✍️" }
            ],
            explain: "答案:思君不见下渝州。想念友人却见不到,只能顺流去往渝州,注意「渝」字。",
            explainSteps: [
              { text: "下句「思君不见下渝州」,直抒思念友人之情。", emoji: "💭" },
              { text: "易错字「渝」(yú),别写成「愉」「渝」以外的字。", emoji: "⚠️" },
              { text: "理解性默写抓题干关键词,对症下句,分数到手!", emoji: "✅" }
            ] }
        },
        {
          name: "今日彩蛋 · 名著打卡",
          blocks: [
            { type: "rule", title: "📖 睡前 20 分钟名著时间", html: "第二周收官!今晚合上<b>《西游记》</b>想一想:<b>这两周你读了哪几回?最喜欢哪个情节?</b><br>把这周学的概括法用上,一句话说清一回故事,讲给爸妈听——你已经是阅读小高手了!" }
          ],
          q: null
        }
      ]
    },

    // ================== 副科周复习 ==================
    {
      subject: "review", icon: "🔁", title: "副科周复习 · 史地生政串烧", minutes: 25,
      units: [
        {
          name: "动画课堂 · 第二周副科精华",
          blocks: [
            { type: "lesson", title: "▶ 生物·道法·历史·地理各记一个关键词", steps: [
              { text: "第二周副科:生物讲细胞,道法讲学习与自我,历史讲春秋战国,地理讲地图三要素。逐一回顾。", emoji: "🎒" },
              { text: "生物:细胞是生命基本单位;植物比动物多三样——细胞壁、叶绿体、大液泡。", emoji: "🌱", scene: { type: "clues", items: [
                { head: "共有", text: "膜·质·核" },
                { head: "植物独有", text: "壁·叶绿体·液泡" },
                { head: "地位", text: "生命基本单位" }
              ] } },
              { text: "历史:春秋「争霸」(齐桓公首霸),战国「兼并」(七雄:齐楚燕韩赵魏秦)。铁农具牛耕推广是根本。", emoji: "⚔️" },
              { text: "地理:地图三要素——比例尺(管大小详略)、方向(有多种定法)、图例(符号说明书)。", emoji: "🗺️", scene: { type: "clues", items: [
                { head: "比例尺", text: "大→范围小更详" },
                { head: "方向", text: "上北下南等" },
                { head: "图例", text: "符号说明" }
              ] } },
              { text: "道法:学习伴随一生;认识自己要全面客观,扬长补短,做更好的自己。", emoji: "⚖️" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "下列关于第二周副科知识的说法,错误的一项是:",
            options: [
              "叶绿体是植物细胞特有的结构,能进行光合作用制造养料",
              "战国七雄指齐、楚、燕、韩、赵、魏、秦",
              "地图上比例尺越大,表示的范围越大、内容越粗略",
              "认识自己既要看到优点,也要接纳不足"
            ], answer: 2,
            demoSteps: [
              { text: "重点查地理:比例尺越大,范围是大还是小?详细还是粗略?", emoji: "🗺️", scene: { type: "clues", items: [
                { head: "大比例尺", text: "范围小·更详细" },
                { head: "小比例尺", text: "范围大·较粗略" },
                { head: "别记反", text: "大→小而详" }
              ] } },
              { text: "对照生物、历史、道法三条,找出唯一说反的。", emoji: "🔍" }
            ],
            explain: "C 错。比例尺越大,表示的实际范围越小、内容越详细(正好说反了)。其余三项都正确。",
            explainSteps: [
              { text: "比例尺越大 → 范围越小、越详细。C 说成「范围越大越粗略」,反了!", emoji: "🗺️" },
              { text: "A 叶绿体、B 战国七雄、D 认识自己,都正确。", emoji: "✅" },
              { text: "选 C。比例尺「大小」和「范围」是反着的,最容易记错,盯牢它!", emoji: "🎯" }
            ] }
        }
      ]
    }
  ]
};
