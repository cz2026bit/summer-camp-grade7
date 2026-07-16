// ============ 第 35 关 ============
window.DAYS = window.DAYS || {};

window.DAYS[35] = {
  day: 35,
  title: "第 35 关 · 第五周大盘点",
  estimate: "四科约 2~3 小时 · 共 7 道闯关题(含 1 道 BOSS 题)",
  sections: [
    // ================== 数学 ==================
    {
      subject: "math", icon: "🔢", title: "数学 · 综合提升总复盘", minutes: 45,
      units: [
        {
          name: "动画课堂 · 方程应用与几何一张网",
          blocks: [
            { type: "lesson", title: "▶ 这一周,数学既会算又会用", steps: [
              { text: "第五周是「综合提升」周!既深化了方程应用,又打开了几何的大门。今晚把它们连成一张网。", emoji: "🕸️" },
              { text: "方程应用三类题:利润折扣(售价=标价×折扣,利润=售价−进价)、工程问题(总量看作 1)、行程问题(路程=速度×时间)。", emoji: "🧮", scene: { type: "clues", items: [
                { head: "利润题", text: "售价−进价=利润" },
                { head: "工程题", text: "总量=1·效率相加" },
                { head: "行程题", text: "相遇加·追及减" }
              ] } },
              { text: "几何初步:点线面体(点动成线…);直线射线线段(端点、延伸、两点定线、线段最短)。", emoji: "📐" },
              { text: "角:分类(锐直钝平周)、度分秒(60 进制)、角平分线、互余(90°)互补(180°);找规律(看差看比看位置)。", emoji: "🔢", scene: { type: "clues", items: [
                { head: "角", text: "互余 90·互补 180" },
                { head: "度量", text: "度分秒 60 进制" },
                { head: "找规律", text: "写含 n 的式子" }
              ] } },
              { text: "综合周的收获:方程能解决生活问题,几何能描述空间世界,找规律能预言未来。数学越学越有用!", emoji: "🎯" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "一件商品进价 80 元,标价 x 元,打九折出售后仍盈利 28 元。所列方程正确的是:",
            options: [
              "0.9x − 80 = 28",
              "x − 80 = 28",
              "0.9x + 80 = 28",
              "80 − 0.9x = 28"
            ], answer: 0,
            demoSteps: [
              { text: "打九折售价 = 标价×0.9 = 0.9x。利润 = 售价 − 进价。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "售价", text: "0.9x" },
                { head: "进价", text: "80" },
                { head: "利润", text: "28" }
              ] } },
              { text: "售价 − 进价 = 利润:0.9x − 80 = 28。", emoji: "🏷️" }
            ],
            explain: "A 正确。九折售价 = 0.9x,利润 = 售价 − 进价:0.9x − 80 = 28。B 忘了打折;C、D 关系式错。",
            explainSteps: [
              { text: "九折售价 = 0.9x。", emoji: "🏷️" },
              { text: "利润 = 售价 − 进价:0.9x − 80 = 28,选 A!", emoji: "✅" },
              { text: "解得 0.9x=108,x=120。利润题记牢「售价−进价=利润」!", emoji: "🎯" }
            ] }
        },
        {
          name: "🔥 BOSS 挑战 · 综合大题",
          blocks: [
            { type: "text", html: "💪 <b>BOSS 战规则</b>:方程应用压轴!审设列解答,一步步走。草稿纸准备!" }
          ],
          q: { type: "fill", points: 20, boss: true, voice: "zh",
            q: "甲、乙两人从相距 36 千米的两地同时出发,相向而行。甲每小时走 4 千米,乙每小时走 5 千米。设经过 x 小时两人相遇,由「甲路程 + 乙路程 = 总距离」得 4x + 5x = 36。请解出经过多少小时相遇?(直接填数字)",
            placeholder: "例如: 3",
            accept: ["4", "4小时", "四", "四小时"],
            demoSteps: [
              { text: "相遇问题:两人路程之和 = 总距离。甲走 4x,乙走 5x。", emoji: "🤝", scene: { type: "clues", items: [
                { head: "甲路程", text: "4x" },
                { head: "乙路程", text: "5x" },
                { head: "方程", text: "4x + 5x = 36" }
              ] } },
              { text: "合并:9x = 36,除以 9。", emoji: "🧮" }
            ],
            explain: "4x + 5x = 36,合并 9x = 36,系数化 1:x = 4。经过 4 小时两人相遇。",
            explainSteps: [
              { text: "合并同类项:4x + 5x = 9x,方程变 9x = 36。", emoji: "🧮" },
              { text: "两边除以 9:x = 4,经过 4 小时相遇!", emoji: "✅" },
              { text: "验算:甲 16 千米 + 乙 20 千米 = 36 千米,对!相遇问题路程相加,搞定!", emoji: "🏆" }
            ] }
        }
      ]
    },

    // ================== 英语 ==================
    {
      subject: "english", icon: "📚", title: "英语 · 四大时态总复盘", minutes: 45,
      units: [
        {
          name: "单词大挑战 · 时态信号词抽查(点卡片听发音!)",
          blocks: [
            { type: "text", html: "🎧 这周学了<span class='hl'>将来时和四大时态</span>!抽 10 个信号词再听一遍,看词选时态。" },
            { type: "flashcards", words: [
              { word: "usually", phonetic: "/ˈjuːʒuəli/", cn: "通常", sentence: "I usually walk to school." },
              { word: "now", phonetic: "/naʊ/", cn: "现在", sentence: "He is sleeping now." },
              { word: "yesterday", phonetic: "/ˈjestədeɪ/", cn: "昨天", sentence: "We went out yesterday." },
              { word: "tomorrow", phonetic: "/təˈmɒrəʊ/", cn: "明天", sentence: "I will call you tomorrow." },
              { word: "will", phonetic: "/wɪl/", cn: "将会", sentence: "It will be sunny." },
              { word: "be going to", phonetic: "/biː ˈɡəʊɪŋ tuː/", cn: "打算", sentence: "We are going to travel." },
              { word: "Look!", phonetic: "/lʊk/", cn: "看!", sentence: "Look! It is snowing." },
              { word: "last night", phonetic: "/lɑːst naɪt/", cn: "昨晚", sentence: "I read last night." },
              { word: "next week", phonetic: "/nekst wiːk/", cn: "下周", sentence: "School starts next week." },
              { word: "every day", phonetic: "/ˈevri deɪ/", cn: "每天", sentence: "She studies every day." }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 · 四大时态终极对比",
          blocks: [
            { type: "lesson", title: "▶ 看信号词,一秒定时态", steps: [
              { text: "四大时态是初中英语的地基。今晚终极对比一次,以后看信号词就能秒选时态。", emoji: "📊" },
              { text: "一般现在时(习惯):动词原形/加 s;标志 every day, usually, always。", emoji: "🔁", scene: { type: "clues", items: [
                { head: "一般现在", text: "原形/加s·习惯" },
                { head: "现在进行", text: "be+ing·此刻" },
                { head: "一般过去", text: "过去式·昨天" }
              ] } },
              { text: "现在进行时(此刻):be+ing;标志 now, Look!, Listen!。一般过去时(过去):过去式;标志 yesterday, ago, last…。", emoji: "⏱️" },
              { text: "一般将来时(将来):will+原形 或 be going to;标志 tomorrow, next…, soon。", emoji: "🔮", scene: { type: "clues", items: [
                { head: "一般将来", text: "will/be going to" },
                { head: "标志", text: "tomorrow, next…" },
                { head: "秘诀", text: "看信号词选时态" }
              ] } },
              { text: "口诀:每天经常一般时,此刻正在进行时;昨天以前用过去,明天以后用将来。四态打通,英语稳了!", emoji: "🎯" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "选出时态与信号词完全匹配的一句:",
            options: [
              "I will visit my grandma next Sunday.",
              "I visit my grandma yesterday.",
              "Look! I go to school every day.",
              "She is reading a book last night."
            ], answer: 0,
            demoSteps: [
              { text: "看每句的信号词,判断时态用得对不对。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "next Sunday", text: "→ 将来时 will" },
                { head: "yesterday", text: "→ 过去时" },
                { head: "last night", text: "→ 过去时" }
              ] } },
              { text: "找信号词和时态完全对应的一句。", emoji: "✅" }
            ],
            explain: "A 正确:next Sunday 配将来时 will visit。B 的 yesterday 该用过去式 visited;C 的 every day 与 Look! 矛盾;D 的 last night 该用过去时。",
            explainSteps: [
              { text: "B:yesterday 该用 visited(过去式),错。", emoji: "❌" },
              { text: "C:every day 是习惯,和 Look!(此刻)矛盾,错。", emoji: "❌" },
              { text: "D:last night 是过去,该用过去时,错。", emoji: "❌" },
              { text: "A:next Sunday 配 will visit,信号时态一致!选 A。", emoji: "✅" }
            ] }
        },
        {
          name: "英文名著时光 · The Ugly Duckling(回顾)",
          blocks: [
            { type: "rule", title: "📖 名著名片", html: "<b>安徒生 Andersen</b>《丑小鸭》——被嘲笑的丑小鸭,终于变成美丽的天鹅。每个人都有属于自己的春天。" },
            { type: "reading", speakable: true, title: "The Ugly Duckling", paragraphs: [
              "On a farm, a mother duck's eggs hatch. But one duckling is big and grey — not like the others. Everyone calls him 'the ugly duckling' and is unkind to him. He is very sad and lonely.",
              "So the ugly duckling runs away. Winter comes, and it is cold and hard. He hides in the reeds by a lake and waits for the cold days to pass.",
              "At last, spring comes. The duckling sees three beautiful white birds on the water — swans! He swims to them, ready to be laughed at again.",
              "But when he looks down at the water, he sees his own reflection. He is not an ugly duckling — he is a beautiful swan! The other swans welcome him. Now he is happy at last."
            ], tip: "生词提示:hatch 孵化 / ugly 丑的 / lonely 孤独的 / reeds 芦苇 / swan 天鹅 / reflection 倒影" }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "What does the ugly duckling become in the end?(丑小鸭最后变成了什么?)",
            options: [
              "A big duck.",
              "A beautiful swan.",
              "A white chicken.",
              "A grey bird."
            ], answer: 1,
            demoSteps: [
              { text: "春天来了,丑小鸭在水里看到了自己怎样的倒影?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "冬天", text: "孤独·躲芦苇" },
                { head: "春天", text: "看到天鹅" },
                { head: "倒影", text: "自己是天鹅" }
              ] } },
              { text: "他在水中看到自己是一只美丽的天鹅。", emoji: "🦢" }
            ],
            explain: "B 正确。熬过寒冬,春天来临,丑小鸭在水中看到自己的倒影,发现自己变成了一只美丽的天鹅。",
            explainSteps: [
              { text: "丑小鸭其实是天鹅蛋孵出来的。", emoji: "🦢" },
              { text: "熬过孤独的冬天,他终于变成美丽的天鹅,选 B!", emoji: "✅" },
              { text: "寓意:不要因一时的处境而自卑,坚持下去,终会绽放属于自己的美丽。", emoji: "🎯" }
            ] }
        }
      ]
    },

    // ================== 语文 ==================
    {
      subject: "chinese", icon: "📝", title: "语文 · 第五周阅读与名著盘点", minutes: 40,
      units: [
        {
          name: "动画课堂 · 议论文·标题·开头结尾复盘",
          blocks: [
            { type: "lesson", title: "▶ 这一周语文的三大收获", steps: [
              { text: "第五周语文:初识议论文,学了标题作用、开头结尾,读了《朝花夕拾》。今晚复盘。", emoji: "📝" },
              { text: "议论文三要素:论点(观点)、论据(事实论据/道理论据)、论证(举例/道理/对比/比喻论证)。", emoji: "💬", scene: { type: "clues", items: [
                { head: "论点", text: "作者观点" },
                { head: "论据", text: "事实/道理" },
                { head: "论证", text: "举例/对比/比喻" }
              ] } },
              { text: "标题作用:概括内容、点明主旨、作线索、设悬念、用修辞、引兴趣。要多角度作答。", emoji: "🏷️" },
              { text: "开头结尾:凤头(快、新、扣题)、豹尾(短、有力、余味);首尾呼应,结构完整。", emoji: "🐆", scene: { type: "clues", items: [
                { head: "开头", text: "凤头·开门见山" },
                { head: "结尾", text: "豹尾·点题呼应" },
                { head: "忌", text: "啰嗦·喊口号" }
              ] } },
              { text: "名著《朝花夕拾》:鲁迅回忆性散文集,温馨回忆+理性批判;记牢名篇和人物「一人一事一品质」。", emoji: "🌸" }
            ] }
          ],
          q: { type: "choice", points: 10, voice: "zh",
            q: "下列关于本周语文知识的说法,错误的一项是:",
            options: [
              "议论文的三要素是论点、论据和论证",
              "「凤头豹尾」中,「豹尾」比喻文章的结尾要短小有力",
              "《朝花夕拾》是鲁迅的一部长篇小说",
              "标题的作用可能包括作全文线索、点明主旨等"
            ], answer: 2,
            demoSteps: [
              { text: "《朝花夕拾》是小说还是散文集?这是本周名著的关键。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "朝花夕拾", text: "回忆性散文集" },
                { head: "不是", text: "长篇小说" },
                { head: "内容", text: "鲁迅真实回忆" }
              ] } },
              { text: "找出体裁说错的一句。", emoji: "🔍" }
            ],
            explain: "C 错。《朝花夕拾》是回忆性散文集,不是长篇小说。其余三项都正确。",
            explainSteps: [
              { text: "《朝花夕拾》是散文集(写真实回忆),不是小说。", emoji: "📖" },
              { text: "C 把它说成长篇小说,体裁错,选 C!", emoji: "❌" },
              { text: "A 议论文三要素、B 豹尾、D 标题作用都对。", emoji: "✅" }
            ] }
        },
        {
          name: "动画课堂 · 古诗默写周清",
          blocks: [
            { type: "lesson", title: "▶ 《夜上受降城闻笛》回顾", steps: [
              { text: "本周新学李益《夜上受降城闻笛》。默写送分题,今晚再过一遍。", emoji: "✍️" },
              { text: "全诗:回乐烽前沙似雪,受降城外月如霜。不知何处吹芦管,一夜征人尽望乡。", emoji: "🌙", scene: { type: "clues", items: [
                { head: "写景比喻", text: "沙似雪·月如霜" },
                { head: "写乡愁", text: "一夜征人尽望乡" },
                { head: "易错字", text: "烽·芦管" }
              ] } },
              { text: "理解性默写要点:借月色、笛声抒发戍边将士思乡之情的句子是「不知何处吹芦管,一夜征人尽望乡」。", emoji: "💔" },
              { text: "默写口诀:三查一读——查错别字(「芦管」别写错)、查漏字、查串句,写完回读一遍。", emoji: "✅" }
            ] }
          ],
          q: { type: "fill", points: 10, voice: "zh",
            q: "默写:《夜上受降城闻笛》中借笛声抒发戍边将士浓浓思乡之情的两句是「不知何处吹芦管,__________」。(填后半句)",
            placeholder: "填七个字",
            accept: ["一夜征人尽望乡", "一夜征人尽望乡。", "一夜征人尽望乡,"],
            demoSteps: [
              { text: "上句写笛声「不知何处吹芦管」,下句写将士们一夜之间都在做什么?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "上句", text: "不知何处吹芦管" },
                { head: "下句", text: "征人望乡" },
                { head: "关键字", text: "尽(都)" }
              ] } },
              { text: "「一夜征人尽望乡」——一个「尽」字写出所有人的思乡。", emoji: "💔" }
            ],
            explain: "答案:一夜征人尽望乡。笛声勾起乡愁,一夜之间戍边将士都望向家乡,「尽」字写尽了共同的思念。",
            explainSteps: [
              { text: "下句「一夜征人尽望乡」,写将士们一夜思乡。", emoji: "🌙" },
              { text: "「尽」= 全都,把个人乡愁扩大成千万人的共鸣。", emoji: "✅" },
              { text: "答对了!理解性默写抓题干关键词精准对句。", emoji: "🎯" }
            ] }
        },
        {
          name: "今日彩蛋 · 名著打卡",
          blocks: [
            { type: "rule", title: "📖 睡前 20 分钟名著时间", html: "第五周收官!只剩最后一周啦!今晚合上<b>《朝花夕拾》</b>,回顾这五周读过的名著:<b>《西游记》《朝花夕拾》</b>和一路的英文经典故事。<br>坚持读书的你,已经悄悄长大了很多。最后冲刺,加油!" }
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
          name: "动画课堂 · 第五周副科精华",
          blocks: [
            { type: "lesson", title: "▶ 历史·地理·生物·道法各记一个关键词", steps: [
              { text: "第五周副科:历史讲三国鼎立与孝文帝改革,地理讲聚落、发展合作,生物讲绿色植物,道法讲亲情。逐一回顾。", emoji: "🎒" },
              { text: "历史:官渡之战曹操统一北方,赤壁之战奠定三国鼎立;北魏孝文帝改革(迁都洛阳、汉化)促进民族交融。", emoji: "⚔️", scene: { type: "clues", items: [
                { head: "官渡之战", text: "统一北方" },
                { head: "赤壁之战", text: "奠定三分" },
                { head: "孝文帝", text: "汉化·民族交融" }
              ] } },
              { text: "地理:聚落(城市/乡村)分布与环境相关,平坦、水源、交通好处聚落密集;发达国家多在北、发展中国家多在南。", emoji: "🌍" },
              { text: "生物:绿色植物是生产者,光合作用(CO₂+水→有机物+氧气)制造食物、释放氧气。", emoji: "🌳", scene: { type: "clues", items: [
                { head: "光合作用", text: "制造有机物" },
                { head: "释放", text: "氧气" },
                { head: "地位", text: "生产者" }
              ] } },
              { text: "道法:家是身心港湾,亲情表达方式不同;亲子冲突正常,靠有效沟通、换位思考化解。", emoji: "🏠" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "下列关于第五周副科知识的说法,错误的一项是:",
            options: [
              "赤壁之战为三国鼎立局面的形成奠定了基础",
              "北魏孝文帝改革促进了民族交融",
              "绿色植物的光合作用消耗氧气、释放二氧化碳",
              "聚落的分布与自然环境关系密切"
            ], answer: 2,
            demoSteps: [
              { text: "重点查生物:光合作用是吸收 CO₂ 放氧气,还是相反?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "光合作用", text: "吸 CO₂·放 O₂" },
                { head: "呼吸作用", text: "吸 O₂·放 CO₂" },
                { head: "别搞混", text: "光合放氧气" }
              ] } },
              { text: "对照历史、地理两条,找出唯一说反的。", emoji: "🔍" }
            ],
            explain: "C 错。光合作用是吸收二氧化碳、释放氧气(正好说反了)。其余三项都正确。",
            explainSteps: [
              { text: "光合作用吸收 CO₂、释放 O₂,C 正好说反,错!", emoji: "🌳" },
              { text: "A 赤壁定三分、B 孝文帝改革、D 聚落与环境,都正确。", emoji: "✅" },
              { text: "选 C。光合放氧气、呼吸放二氧化碳,别记反!", emoji: "🎯" }
            ] }
        }
      ]
    }
  ]
};
