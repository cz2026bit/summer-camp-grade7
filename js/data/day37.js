// ============ 第 37 关 ============
window.DAYS = window.DAYS || {};

window.DAYS[37] = {
  day: 37,
  title: "第 37 关 · 方程与几何总复习",
  estimate: "四科约 2~3 小时 · 共 7 道冲刺题(含 1 道 BOSS 题)",
  sections: [
    // ================== 数学 ==================
    {
      subject: "math", icon: "🔢", title: "数学 · 综合复习:方程与几何", minutes: 50,
      units: [
        {
          name: "动画课堂 · 方程与几何大盘点",
          blocks: [
            { type: "lesson", title: "▶ 会解方程,会算图形", steps: [
              { text: "今晚复习「方程」和「几何」两大块。它们是这个暑假数学的重头戏,也是模拟测试的主角。", emoji: "🏁" },
              { text: "解方程五步:去分母 → 去括号 → 移项 → 合并 → 系数化 1。每步都有坑:漏乘、忘变号最常见。", emoji: "🧮", scene: { type: "clues", items: [
                { head: "解方程", text: "去分母→…→化 1" },
                { head: "移项", text: "变号搬" },
                { head: "应用题", text: "审设列解答" }
              ] } },
              { text: "应用题:利润(售价−进价)、工程(总量=1)、行程(相遇加、追及减)。核心是找「等量关系」。", emoji: "🔑" },
              { text: "几何:点线面体、三线(直线射线线段);角(锐直钝平周、互余 90/互补 180、角平分线、度分秒 60 进制)。", emoji: "📐", scene: { type: "clues", items: [
                { head: "线段", text: "两点定线·最短" },
                { head: "角", text: "余 90·补 180" },
                { head: "找规律", text: "含 n 的式子" }
              ] } },
              { text: "复习口诀:方程五步别出错,应用题找等量;几何角度记规律,余补平分要分清!", emoji: "🎯" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "解方程 (2x−1)/3 = x − 1,正确的解是:",
            options: ["x = 2", "x = −2", "x = 1", "x = 4"], answer: 0,
            demoSteps: [
              { text: "先去分母:两边乘 3。左边分子是整体,右边每项都乘!", emoji: "✖️", scene: { type: "clues", items: [
                { head: "×3", text: "2x−1 = 3(x−1)" },
                { head: "去括号", text: "2x−1 = 3x−3" },
                { head: "移项", text: "2x−3x = −3+1" }
              ] } },
              { text: "去分母后 2x−1 = 3x−3,去括号、移项、合并。", emoji: "🔄" }
            ],
            explain: "A 正确。去分母:2x−1 = 3(x−1) = 3x−3;移项:2x−3x = −3+1,−x = −2,x = 2。",
            explainSteps: [
              { text: "两边乘 3:2x−1 = 3(x−1) = 3x−3(右边每项乘 3!)。", emoji: "✖️" },
              { text: "移项:2x−3x = −3+1 → −x = −2 → x = 2。", emoji: "🔄" },
              { text: "选 A!验算:(2×2−1)/3 = 1,2−1 = 1,相等!去分母别漏乘右边。", emoji: "✅" }
            ] }
        },
        {
          name: "🔥 BOSS 挑战 · 方程解几何",
          blocks: [
            { type: "text", html: "💪 <b>BOSS 战规则</b>:方程和几何结合!用方程思想求角度。草稿纸准备!" }
          ],
          q: { type: "fill", points: 20, boss: true, voice: "zh",
            q: "一个角的补角比它的余角的 3 倍还多 10°。设这个角为 x°,由「补角 = 3×余角 + 10」得 180 − x = 3(90 − x) + 10。请解出这个角是多少度?(直接填数字)",
            placeholder: "例如: 50",
            accept: ["50", "50°", "50度", "五十"],
            demoSteps: [
              { text: "补角 = 180−x,余角 = 90−x。列方程 180−x = 3(90−x)+10。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "补角", text: "180 − x" },
                { head: "3×余角", text: "3(90−x)" },
                { head: "方程", text: "180−x = 3(90−x)+10" }
              ] } },
              { text: "去括号:180−x = 270−3x+10,移项合并求 x。", emoji: "🔄" }
            ],
            explain: "180−x = 3(90−x)+10 = 270−3x+10 = 280−3x;移项:−x+3x = 280−180,2x = 100,x = 50。这个角是 50°。",
            explainSteps: [
              { text: "去括号:180−x = 270−3x+10 = 280−3x。", emoji: "📦" },
              { text: "移项:−x+3x = 280−180 → 2x = 100 → x = 50。", emoji: "🔄" },
              { text: "这个角是 50°!方程与几何结合,是中考压轴的常见套路,你已掌握!", emoji: "🏆" }
            ] }
        }
      ]
    },

    // ================== 英语 ==================
    {
      subject: "english", icon: "📚", title: "英语 · 综合复习:时态与句型", minutes: 45,
      units: [
        {
          name: "单词大挑战 · 动词变化回顾(点卡片听发音!)",
          blocks: [
            { type: "text", html: "🎧 时态复习,先过动词变化关!抽 10 个再听一遍,原形、三单、过去式、ing 都要熟。" },
            { type: "flashcards", words: [
              { word: "go / goes / went / going", phonetic: "/ɡəʊ/", cn: "去(四种形式)", sentence: "I go / She goes / We went / He is going." },
              { word: "have / has / had", phonetic: "/hæv/", cn: "有", sentence: "I have / She has / We had." },
              { word: "do / does / did", phonetic: "/duː/", cn: "做/助动词", sentence: "Do you? / She does. / Did they?" },
              { word: "study / studies / studied", phonetic: "/ˈstʌdi/", cn: "学习", sentence: "I study / She studies / We studied." },
              { word: "run / runs / ran / running", phonetic: "/rʌn/", cn: "跑", sentence: "He runs / ran / is running." },
              { word: "be / is / was / were", phonetic: "/biː/", cn: "是", sentence: "I am / She is / We were." },
              { word: "watch / watched", phonetic: "/wɒtʃ/", cn: "看", sentence: "We watch / watched TV." },
              { word: "will go", phonetic: "/wɪl ɡəʊ/", cn: "将去", sentence: "I will go tomorrow." },
              { word: "play / played / playing", phonetic: "/pleɪ/", cn: "玩", sentence: "They play / played / are playing." },
              { word: "eat / ate / eating", phonetic: "/iːt/", cn: "吃", sentence: "We eat / ate / are eating." }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 · 一个动词的「四副面孔」",
          blocks: [
            { type: "lesson", title: "▶ 同一动词,四大时态怎么变", steps: [
              { text: "模拟测试最爱考时态!掌握一个诀窍:同一个动词,在四大时态里有「四副面孔」。以 play 为例。", emoji: "🎭" },
              { text: "一般现在时:play / plays(习惯)。现在进行时:am/is/are playing(此刻)。", emoji: "🔄", scene: { type: "clues", items: [
                { head: "一般现在", text: "play/plays" },
                { head: "现在进行", text: "be playing" },
                { head: "一般过去", text: "played" }
              ] } },
              { text: "一般过去时:played(过去)。一般将来时:will play / am going to play(将来)。", emoji: "⏮️" },
              { text: "做题步骤:①找信号词定时态 → ②想这个时态动词怎么变 → ③检查主谓一致。三步不出错!", emoji: "📋", scene: { type: "clues", items: [
                { head: "第一步", text: "看信号词" },
                { head: "第二步", text: "变对形式" },
                { head: "第三步", text: "主谓一致" }
              ] } },
              { text: "口诀:一个动词四面孔,信号词是指南针;定时态、变形式、查一致,时态题稳拿分!", emoji: "🎯" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "根据句意和信号词,选出正确的一句:",
            options: [
              "Listen! Someone is singing in the next room.",
              "Listen! Someone sings in the next room.",
              "Listen! Someone sang in the next room.",
              "Listen! Someone will sing in the next room."
            ], answer: 0,
            demoSteps: [
              { text: "Listen! 是哪个时态的信号词?表示什么正在发生。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "Listen!", text: "→ 现在进行时" },
                { head: "结构", text: "be + ing" },
                { head: "is singing", text: "正在唱" }
              ] } },
              { text: "Listen! 提示此刻正在发生,用现在进行时。", emoji: "🎵" }
            ],
            explain: "A 正确。Listen! 是现在进行时的标志,表示此刻正在发生,用 is singing。B 一般现在时、C 过去时、D 将来时都不符合「此刻正在」。",
            explainSteps: [
              { text: "Listen! 提示「此刻正在」,该用现在进行时。", emoji: "🎵" },
              { text: "someone(单数)+ is singing,选 A!", emoji: "✅" },
              { text: "看到 Listen!/Look!/now,几乎就是现在进行时的信号灯!", emoji: "🎯" }
            ] }
        },
        {
          name: "英文名著时光 · The North Wind and the Sun(回顾)",
          blocks: [
            { type: "rule", title: "📖 名著名片", html: "<b>《伊索寓言》Aesop's Fables</b>——北风和太阳比本领,温暖胜过强迫。" },
            { type: "reading", speakable: true, title: "The North Wind and the Sun", paragraphs: [
              "The North Wind and the Sun have an argument. Each says, 'I am stronger than you!' Just then, a traveller comes along the road, wearing a warm coat.",
              "'Let's see who can make the traveller take off his coat,' says the Sun. 'The stronger one wins.' The North Wind agrees and goes first.",
              "The North Wind blows as hard as he can. But the harder he blows, the tighter the man holds his coat. At last the Wind gives up.",
              "Then it is the Sun's turn. The Sun shines gently and warmly. Soon the traveller feels hot and takes off his coat himself. 'You see,' says the Sun, 'gentleness and warmth can do more than force.'"
            ], tip: "生词提示:argument 争论 / traveller 旅行者 / coat 外套 / tight 紧的 / gentle 温和的" }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "Who makes the traveller take off his coat, and why?(谁让旅行者脱下外套,为什么?)",
            options: [
              "The North Wind, because he blows hard.",
              "The Sun, because gentle warmth works better than force.",
              "The traveller does it because he is tired.",
              "Nobody can make him take it off."
            ], answer: 1,
            demoSteps: [
              { text: "北风越吹,旅人怎么做?太阳用什么方式成功了?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "北风", text: "越吹越裹紧" },
                { head: "太阳", text: "温暖照耀" },
                { head: "结果", text: "旅人自己脱衣" }
              ] } },
              { text: "太阳温暖地照耀,旅人热了自己脱下外套。", emoji: "☀️" }
            ],
            explain: "B 正确。北风用力猛吹,旅人反而裹得更紧;太阳温和地照耀,旅人觉得热就自己脱下了外套。温暖胜过强迫。",
            explainSteps: [
              { text: "北风越用力,旅人把衣服裹得越紧。", emoji: "🌬️" },
              { text: "太阳温暖照耀,旅人自己脱下外套,选 B!", emoji: "✅" },
              { text: "寓意:温和与善意,往往比强迫更有力量。", emoji: "🎯" }
            ] }
        }
      ]
    },

    // ================== 语文 ==================
    {
      subject: "chinese", icon: "📝", title: "语文 · 综合复习:古诗文", minutes: 40,
      units: [
        {
          name: "动画课堂 · 古诗默写大盘点",
          blocks: [
            { type: "lesson", title: "▶ 六周古诗,名句串烧", steps: [
              { text: "模拟测评周!今晚把这个暑假背过的古诗串一遍,默写送分题一分不能丢。", emoji: "📜" },
              { text: "《观沧海》(曹操):日月之行,若出其中。《次北固山下》(王湾):海日生残夜,江春入旧年。", emoji: "🌊", scene: { type: "clues", items: [
                { head: "观沧海", text: "曹操·大海气魄" },
                { head: "次北固山下", text: "王湾·哲理" },
                { head: "天净沙秋思", text: "马致远·乡愁" }
              ] } },
              { text: "《峨眉山月歌》(李白):峨眉山月半轮秋。《江南逢李龟年》(杜甫):落花时节又逢君。", emoji: "🌙" },
              { text: "《行军九日思长安故园》(岑参):遥怜故园菊,应傍战场开。《夜上受降城闻笛》(李益):一夜征人尽望乡。", emoji: "🌼", scene: { type: "clues", items: [
                { head: "峨眉山月歌", text: "李白·思友" },
                { head: "行军九日", text: "岑参·思乡忧国" },
                { head: "夜上受降城", text: "李益·边塞乡愁" }
              ] } },
              { text: "默写口诀:三查一读——错别字、漏字、串句,写完回读。作者、篇目、名句对应记,默写满分稳!", emoji: "🎯" }
            ] }
          ],
          q: { type: "choice", points: 10, voice: "zh",
            q: "下列诗句与作者搭配错误的一项是:",
            options: [
              "「海日生残夜,江春入旧年」——王湾",
              "「遥怜故园菊,应傍战场开」——岑参",
              "「峨眉山月半轮秋」——杜甫",
              "「一夜征人尽望乡」——李益"
            ], answer: 2,
            demoSteps: [
              { text: "《峨眉山月歌》的作者是谁?回忆一下。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "峨眉山月歌", text: "李白" },
                { head: "江南逢李龟年", text: "杜甫" },
                { head: "别搞混", text: "作者对应" }
              ] } },
              { text: "找出作者张冠李戴的一句。", emoji: "🎭" }
            ],
            explain: "C 错。「峨眉山月半轮秋」出自李白的《峨眉山月歌》,不是杜甫。其余三项作者都对。",
            explainSteps: [
              { text: "《峨眉山月歌》是李白的作品,不是杜甫。", emoji: "🌙" },
              { text: "C 把作者搞错了,选 C!", emoji: "❌" },
              { text: "A 王湾、B 岑参、D 李益都对。古诗记牢「诗句—作者—篇目」三对应!", emoji: "✅" }
            ] }
        },
        {
          name: "动画课堂 · 文言文重点回顾",
          blocks: [
            { type: "lesson", title: "▶ 三篇古文,考点串清", steps: [
              { text: "这个暑假读了三篇古文:《咏雪》《陈太丘与友期》《诫子书》。今晚把考点串一遍。", emoji: "📖" },
              { text: "《咏雪》(《世说新语》):谢道韫「未若柳絮因风起」,咏絮之才;古今异义「儿女」=子侄晚辈。", emoji: "❄️", scene: { type: "clues", items: [
                { head: "咏雪", text: "柳絮之才" },
                { head: "陈太丘", text: "守信懂礼" },
                { head: "诫子书", text: "淡泊明志" }
              ] } },
              { text: "《陈太丘与友期》:元方驳友人「无信」「无礼」;敬谦称谓「尊君/家君」。", emoji: "👦" },
              { text: "《诫子书》(诸葛亮):「静以修身,俭以养德」「非淡泊无以明志,非宁静无以致远」;虚词「夫、以、之」。", emoji: "✉️" },
              { text: "文言复习口诀:通假古今一词多义要积累,敬谦称谓分清楚,名句名篇记牢固。文言不再拦路虎!", emoji: "🎯" }
            ] }
          ],
          q: { type: "fill", points: 10, voice: "zh",
            q: "默写:《诫子书》中诸葛亮劝勉儿子要看淡名利、宁静专一的千古名句是「非淡泊无以明志,__________」。(填后半句)",
            placeholder: "填七个字",
            accept: ["非宁静无以致远", "非宁静无以致远。", "非宁静无以致远,"],
            demoSteps: [
              { text: "上句「非淡泊无以明志」,下句对仗,讲「宁静」才能怎样?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "淡泊", text: "→ 明志" },
                { head: "宁静", text: "→ 致远" },
                { head: "对仗", text: "工整" }
              ] } },
              { text: "「非宁静无以致远」——不宁静就不能实现远大目标。", emoji: "🌟" }
            ],
            explain: "答案:非宁静无以致远。「非淡泊无以明志,非宁静无以致远」是《诫子书》的千古名句,劝人淡泊宁静、志存高远。",
            explainSteps: [
              { text: "下句「非宁静无以致远」,与上句对仗工整。", emoji: "🌟" },
              { text: "「淡泊明志,宁静致远」已成为传世名言。", emoji: "✅" },
              { text: "答对了!文言名句是默写和作文引用的双料素材。", emoji: "🎯" }
            ] }
        },
        {
          name: "今日彩蛋 · 名著打卡",
          blocks: [
            { type: "rule", title: "📖 睡前 20 分钟名著时间", html: "冲刺阶段!今晚做一件事:把这个暑假背过的<b>七首古诗</b>连起来背一遍,再默写你最喜欢的两句。<br>「腹有诗书气自华」——这些诗句会陪伴你一生,成为你最宝贵的财富。" }
          ],
          q: null
        }
      ]
    },

    // ================== 地理 ==================
    {
      subject: "geography", icon: "🌍", title: "地理 · 地理综合复习", minutes: 25,
      units: [
        {
          name: "动画课堂 · 地理知识总盘点",
          blocks: [
            { type: "lesson", title: "▶ 从地球仪到世界,一次串清", steps: [
              { text: "模拟测评周!地理今晚把这个暑假学的知识串成一张「思维导图」。", emoji: "🗺️" },
              { text: "地球与地图:经线(连两极·等长)、纬线(平行赤道·赤道最长);地图三要素(比例尺、方向、图例)。", emoji: "🌐", scene: { type: "clues", items: [
                { head: "经线", text: "等长·指南北" },
                { head: "纬线", text: "赤道最长" },
                { head: "地图三要素", text: "比例尺·方向·图例" }
              ] } },
              { text: "海陆:七分海洋(71%)三分陆地;七大洲(亚最大)、四大洋(太平洋最大)。", emoji: "🌊", scene: { type: "clues", items: [
                { head: "海陆比例", text: "海 71%·陆 29%" },
                { head: "最大洲", text: "亚洲" },
                { head: "最大洋", text: "太平洋" }
              ] } },
              { text: "天气与气候:天气短时多变、气候长期稳定;人口分布不均、三大人种平等;聚落与环境;发达/发展中国家。", emoji: "🌡️" },
              { text: "复习口诀:经纬地图记要素,海陆七三别记反;天气气候看长短,人种平等要牢记!", emoji: "🎯" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "下列地理知识中,说法正确的一项是:",
            options: [
              "陆地面积约占地球表面的 71%",
              "比例尺越大,地图表示的范围越小、内容越详细",
              "「今天多云转晴」描述的是气候",
              "世界上最大的大洋是大西洋"
            ], answer: 1,
            demoSteps: [
              { text: "逐项核对:海陆比例、比例尺、天气气候、最大洋。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "海洋", text: "71%(比陆大)" },
                { head: "大比例尺", text: "范围小·更详细" },
                { head: "最大洋", text: "太平洋" }
              ] } },
              { text: "把海陆说反、天气气候混淆、最大洋说错的排除。", emoji: "🔍" }
            ],
            explain: "B 正确。A 错(71% 是海洋不是陆地);C 错(「今天」是天气不是气候);D 错(最大的大洋是太平洋)。",
            explainSteps: [
              { text: "A:71% 是海洋,陆地只 29%,错。", emoji: "❌" },
              { text: "C:「今天」是短时,是天气不是气候,错;D:最大洋是太平洋,错。", emoji: "❌" },
              { text: "B:比例尺越大范围越小越详细,正确!选 B。", emoji: "✅" }
            ] }
        }
      ]
    }
  ]
};
