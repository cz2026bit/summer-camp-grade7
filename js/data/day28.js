// ============ 第 28 关 ============
window.DAYS = window.DAYS || {};

window.DAYS[28] = {
  day: 28,
  title: "第 28 关 · 第四周大盘点",
  estimate: "四科约 2~3 小时 · 共 7 道闯关题(含 1 道 BOSS 题)",
  sections: [
    // ================== 数学 ==================
    {
      subject: "math", icon: "🔢", title: "数学 · 一元一次方程总复盘", minutes: 45,
      units: [
        {
          name: "动画课堂 · 解方程的完整流程",
          blocks: [
            { type: "lesson", title: "▶ 五步解方程,一步不落", steps: [
              { text: "第四周我们攻下了「一元一次方程」这座大山!今晚把解方程的完整流程复盘一遍。", emoji: "🏔️" },
              { text: "解方程「五步曲」:去分母 → 去括号 → 移项 → 合并同类项 → 系数化为 1。", emoji: "📋", scene: { type: "clues", items: [
                { head: "1 去分母", text: "两边乘公倍数" },
                { head: "2 去括号", text: "注意符号" },
                { head: "3 移项", text: "变号搬" }
              ] } },
              { text: "每一步都有「坑」:去分母别漏乘整数项、分子多项式加括号;去括号数字乘遍每项;移项一定变号。", emoji: "⚠️", scene: { type: "clues", items: [
                { head: "去分母坑", text: "漏乘·忘括号" },
                { head: "去括号坑", text: "漏乘·符号" },
                { head: "移项坑", text: "忘变号" }
              ] } },
              { text: "应用题「五步走」:审、设、列、解、答。核心是找「等量关系」,和差倍分、行程问题各有套路。", emoji: "🔑" },
              { text: "解完养成好习惯:代回原方程验算。方程是初中数学最强的工具,学好它,后面处处用得上!", emoji: "🎯" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "解方程 2(x − 1) = 3x/2 + 1,下列第一步「去分母」正确的是(两边同乘 2):",
            options: [
              "2(x−1) = 3x + 1",
              "4(x−1) = 3x + 2",
              "4(x−1) = 3x + 1",
              "2x−1 = 3x + 2"
            ], answer: 1,
            demoSteps: [
              { text: "两边同乘 2,每一项都要乘!左边 2(x−1)、右边 3x/2 和 1 都乘 2。", emoji: "✖️", scene: { type: "clues", items: [
                { head: "2(x−1)×2", text: "4(x−1)" },
                { head: "3x/2×2", text: "3x" },
                { head: "1×2", text: "2" }
              ] } },
              { text: "别漏了右边的「1」也要乘 2!", emoji: "⚠️" }
            ],
            explain: "B 正确。两边同乘 2:左边 2(x−1)×2 = 4(x−1);右边 3x/2×2 = 3x,1×2 = 2。得 4(x−1) = 3x + 2。C 漏乘右边的 1;A、D 计算错。",
            explainSteps: [
              { text: "两边同乘 2,左边 2(x−1) 变 4(x−1)。", emoji: "✖️" },
              { text: "右边:3x/2×2 = 3x,1×2 = 2,得 3x + 2。", emoji: "🧮" },
              { text: "所以 4(x−1) = 3x + 2,选 B!C 忘了右边的 1 也要乘,最常见的坑!", emoji: "✅" }
            ] }
        },
        {
          name: "🔥 BOSS 挑战 · 综合解方程",
          blocks: [
            { type: "text", html: "💪 <b>BOSS 战规则</b>:去括号、移项、合并、化简全上!沉住气,一步步来。草稿纸准备!" }
          ],
          q: { type: "fill", points: 20, boss: true, voice: "zh",
            q: "解方程 3(x − 2) − 2(x + 1) = 5。请解出 x 的值。(直接填数字)",
            placeholder: "例如: 5",
            accept: ["13", "x=13", "十三"],
            demoSteps: [
              { text: "先去括号(数字乘每项!):3(x−2)=3x−6,−2(x+1)=−2x−2。", emoji: "📦", scene: { type: "clues", items: [
                { head: "3(x−2)", text: "3x − 6" },
                { head: "−2(x+1)", text: "−2x − 2" },
                { head: "合并", text: "x − 8 = 5" }
              ] } },
              { text: "得 3x − 6 − 2x − 2 = 5,合并同类项后移项。", emoji: "🔄" }
            ],
            explain: "去括号:3x−6−2x−2=5;合并:x−8=5;移项:x=5+8=13。",
            explainSteps: [
              { text: "去括号:3x − 6 − 2x − 2 = 5。", emoji: "📦" },
              { text: "合并同类项:x − 8 = 5。", emoji: "🧹" },
              { text: "移项:x = 5 + 8 = 13!验算:3(11)−2(14)=33−28=5,对!", emoji: "🏆" }
            ] }
        }
      ]
    },

    // ================== 英语 ==================
    {
      subject: "english", icon: "📚", title: "英语 · 一般过去时总复盘", minutes: 45,
      units: [
        {
          name: "单词大挑战 · 过去式抽查(点卡片听发音!)",
          blocks: [
            { type: "text", html: "🎧 这周学了<span class='hl'>过去时</span>!抽 10 个动词过去式再听一遍,规则不规则都要熟。" },
            { type: "flashcards", words: [
              { word: "was / were", phonetic: "/wɒz//wɜː/", cn: "是(过去)", sentence: "I was happy. They were here." },
              { word: "played", phonetic: "/pleɪd/", cn: "玩(过去)", sentence: "We played games." },
              { word: "studied", phonetic: "/ˈstʌdid/", cn: "学习(过去)", sentence: "She studied hard." },
              { word: "went", phonetic: "/went/", cn: "去(过去)", sentence: "I went home." },
              { word: "saw", phonetic: "/sɔː/", cn: "看见(过去)", sentence: "He saw a bird." },
              { word: "ate", phonetic: "/eɪt/", cn: "吃(过去)", sentence: "We ate lunch." },
              { word: "had", phonetic: "/hæd/", cn: "有(过去)", sentence: "They had fun." },
              { word: "did", phonetic: "/dɪd/", cn: "做/助动词", sentence: "Did you go there?" },
              { word: "bought", phonetic: "/bɔːt/", cn: "买(过去)", sentence: "I bought a book." },
              { word: "yesterday", phonetic: "/ˈjestədeɪ/", cn: "昨天", sentence: "It rained yesterday." }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 · 过去时四件套复盘",
          blocks: [
            { type: "lesson", title: "▶ be动词·规则·不规则·否定疑问", steps: [
              { text: "第四周英语核心是「一般过去时」。四个部分连起来,考试稳拿分。", emoji: "🧩" },
              { text: "be 动词过去式:am/is→was,are→were。I/he/she/it 用 was,you/we/they 用 were。", emoji: "🔄", scene: { type: "clues", items: [
                { head: "was", text: "I/he/she/it" },
                { head: "were", text: "you/we/they" },
                { head: "标志词", text: "yesterday, ago, last…" }
              ] } },
              { text: "实义动词过去式:规则动词加 ed(注意 e/辅音+y/双写);不规则动词单独记(go→went,see→saw)。", emoji: "✍️" },
              { text: "否定和疑问请出 did:否定 didn't + 原形,疑问 Did + 主语 + 原形。did 一出,动词回原形!", emoji: "🦸", scene: { type: "clues", items: [
                { head: "肯定", text: "I went." },
                { head: "否定", text: "I didn't go." },
                { head: "疑问", text: "Did you go?" }
              ] } },
              { text: "四件套记牢:be 用 was/were;实义动词看规则不规则;否定疑问用 did + 原形。过去的事,信手拈来!", emoji: "🎯" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "选出完全正确的一句:",
            options: [
              "I didn't went to school, and I was tired yesterday.",
              "I didn't go to school, and I was tired yesterday.",
              "I don't go to school, and I were tired yesterday.",
              "I didn't go to school, and I were tired yesterday."
            ], answer: 1,
            demoSteps: [
              { text: "三处考点:didn't 后动词形式、be 动词过去式、时态一致。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "didn't", text: "+ 原形 go" },
                { head: "I was", text: "I 用 was" },
                { head: "yesterday", text: "过去时" }
              ] } },
              { text: "didn't 后用原形 go;I 配 was。三处都对才算对。", emoji: "✅" }
            ],
            explain: "B 正确:didn't go(原形)、I was tired。A 的 didn't went 错;C 用 don't 且 I were 错;D 的 I were 错。",
            explainSteps: [
              { text: "A:didn't 后该用原形 go,不是 went,错。", emoji: "❌" },
              { text: "C:昨天的事用过去时 didn't,且 I 配 was 不是 were,错。", emoji: "❌" },
              { text: "D:I 的过去 be 动词是 was,不是 were,错。", emoji: "❌" },
              { text: "B:didn't go + I was,全对!选 B。", emoji: "✅" }
            ] }
        },
        {
          name: "英文名著时光 · Androcles and the Lion",
          blocks: [
            { type: "rule", title: "📖 名著名片", html: "<b>《伊索寓言》Aesop's Fables</b>——《狮子与报恩》:一个奴隶帮狮子拔刺,后来狮子救了他的命。善良会被记住。" },
            { type: "reading", speakable: true, title: "Androcles and the Lion", paragraphs: [
              "Androcles is a slave who runs away into the forest. There he meets a lion. But the lion does not attack him — it is crying! Androcles sees a big thorn in the lion's paw. He carefully takes it out. The lion is thankful and becomes his friend.",
              "Later, Androcles is caught and taken back. As a punishment, he must fight a hungry lion in front of many people.",
              "The lion runs at him — but then it stops. It is the same lion! Instead of attacking, the lion gently licks his hand. The people are amazed.",
              "When they hear the story, the emperor sets Androcles free and lets the lion go back to the forest. Kindness, even to an animal, is never wasted."
            ], tip: "生词提示:slave 奴隶 / thorn 刺 / paw 爪子 / punishment 惩罚 / amazed 惊讶的" }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "Why does the lion not hurt Androcles in the end?(为什么狮子最后没伤害安德鲁克斯?)",
            options: [
              "Because the lion is not hungry.",
              "Because it is the same lion he once helped.",
              "Because the emperor tells it to stop.",
              "Because Androcles is very strong."
            ], answer: 1,
            demoSteps: [
              { text: "斗兽场里的狮子,和森林里那只有什么关系?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "森林里", text: "帮狮子拔刺" },
                { head: "斗兽场", text: "同一只狮子" },
                { head: "狮子", text: "舔他的手" }
              ] } },
              { text: "原文说 It is the same lion,狮子记得他的恩情。", emoji: "🦁" }
            ],
            explain: "B 正确。斗兽场里的狮子正是安德鲁克斯当年帮它拔刺的那只。狮子记得他的善意,不但没伤害他,还温柔地舔他的手。",
            explainSteps: [
              { text: "安德鲁克斯曾为这只狮子拔出脚上的刺。", emoji: "🦁" },
              { text: "狮子认出了恩人,舔他的手而不攻击,选 B!", emoji: "✅" },
              { text: "寓意:善良永远不会白费,哪怕是对一只动物的善意。", emoji: "🎯" }
            ] }
        }
      ]
    },

    // ================== 语文 ==================
    {
      subject: "chinese", icon: "📝", title: "语文 · 第四周古文与阅读盘点", minutes: 40,
      units: [
        {
          name: "动画课堂 · 阅读方法与《诫子书》复盘",
          blocks: [
            { type: "lesson", title: "▶ 环境描写·说明文·细节·古文", steps: [
              { text: "第四周语文:学了环境描写、说明文、细节描写,还有古文《诫子书》。今晚一次复盘。", emoji: "📝" },
              { text: "环境描写四作用:交代时地、渲染气氛、烘托心情、推动情节。「一切景语皆情语」,景中藏情。", emoji: "🏞️", scene: { type: "clues", items: [
                { head: "环境描写", text: "渲染·烘托" },
                { head: "说明文", text: "对象·顺序·方法" },
                { head: "细节描写", text: "放慢镜头" }
              ] } },
              { text: "说明文:抓说明对象、说明顺序(时间/空间/逻辑)、说明方法(举例子/列数字/打比方/作比较)。", emoji: "📘" },
              { text: "细节描写:放慢镜头拆动作、调动五感、抓典型细节。少说「爱」,多写「爱的样子」。", emoji: "🎬" },
              { text: "《诫子书》:诸葛亮家书,「静以修身,俭以养德」「淡泊明志,宁静致远」。虚词「夫」「以」「之」要认得。", emoji: "✉️" }
            ] }
          ],
          q: { type: "choice", points: 10, voice: "zh",
            q: "下列关于本周语文知识的说法,错误的一项是:",
            options: [
              "「列数字」是说明文常用的说明方法,能使说明更准确",
              "《诫子书》的作者是诸葛亮,「淡泊明志,宁静致远」出自此文",
              "环境描写只是交代背景,对表现人物心情没有作用",
              "细节描写常用「放慢镜头」把动作拆细来写"
            ], answer: 2,
            demoSteps: [
              { text: "环境描写只是「背景板」吗?它对人物心情有没有作用?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "环境描写", text: "不止是背景" },
                { head: "作用", text: "渲染气氛·烘托心情" },
                { head: "别说成", text: "没作用" }
              ] } },
              { text: "找出小看了环境描写作用的那一句。", emoji: "🔍" }
            ],
            explain: "C 错。环境描写不只是交代背景,还能渲染气氛、烘托人物心情、推动情节,作用很大。其余三项都正确。",
            explainSteps: [
              { text: "环境描写有四大作用,烘托心情正是其中之一。", emoji: "🏞️" },
              { text: "C 说它「对心情没作用」,错!选 C。", emoji: "❌" },
              { text: "A 列数字、B 诫子书、D 放慢镜头都对。「一切景语皆情语」,记牢!", emoji: "✅" }
            ] }
        },
        {
          name: "动画课堂 · 古诗默写周清",
          blocks: [
            { type: "lesson", title: "▶ 《行军九日思长安故园》回顾", steps: [
              { text: "本周新学岑参《行军九日思长安故园》。默写送分题,今晚再过一遍。", emoji: "✍️" },
              { text: "全诗:强欲登高去,无人送酒来。遥怜故园菊,应傍战场开。", emoji: "🌼", scene: { type: "clues", items: [
                { head: "写重阳孤独", text: "无人送酒来" },
                { head: "借物抒情", text: "遥怜故园菊" },
                { head: "写战乱", text: "应傍战场开" }
              ] } },
              { text: "理解性默写要点:借菊花寄托思乡忧国之情的句子是「遥怜故园菊,应傍战场开」。", emoji: "💔" },
              { text: "默写口诀:三查一读——查错别字(「傍」别写错)、查漏字、查串句,写完回读一遍。", emoji: "✅" }
            ] }
          ],
          q: { type: "fill", points: 10, voice: "zh",
            q: "默写:《行军九日思长安故园》中借菊花寄托对故乡思念、暗写战乱的两句是「遥怜故园菊,__________」。(填后半句)",
            placeholder: "填五个字",
            accept: ["应傍战场开", "应傍战场开。", "应傍战场开,"],
            demoSteps: [
              { text: "上句「遥怜故园菊」,下句写这些菊花应该开在哪里?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "上句", text: "遥怜故园菊" },
                { head: "下句", text: "菊开在战场旁" },
                { head: "易错字", text: "傍" }
              ] } },
              { text: "「应傍战场开」——应该开在战场旁边,注意「傍」字。", emoji: "✍️" }
            ],
            explain: "答案:应傍战场开。故园的菊花应该正开在战场旁边,借菊寄托思乡之情,暗写战乱之痛,注意「傍」字。",
            explainSteps: [
              { text: "下句「应傍战场开」,菊花开在战场旁,暗写战乱。", emoji: "🌼" },
              { text: "易错字「傍」(bàng,靠近),别写成「旁」。", emoji: "⚠️" },
              { text: "答对了!理解性默写抓题干关键词,精准对句。", emoji: "✅" }
            ] }
        },
        {
          name: "今日彩蛋 · 名著打卡",
          blocks: [
            { type: "rule", title: "📖 睡前 20 分钟名著时间", html: "第四周收官!已经完成一大半啦!今晚用诸葛亮的话勉励自己:<b>「非淡泊无以明志,非宁静无以致远。」</b><br>还剩最后两周,像取经的师徒一样静下心、坚持住,你的暑假一定收获满满!" }
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
          name: "动画课堂 · 第四周副科精华",
          blocks: [
            { type: "lesson", title: "▶ 历史·地理·生物·道法各记一个关键词", steps: [
              { text: "第四周副科:历史讲丝绸之路,地理讲人口人种,生物讲显微镜与开花结果,道法讲师长情谊与生命。逐一回顾。", emoji: "🎒" },
              { text: "历史:丝绸之路——汉武帝派张骞出使西域「凿空」,长安→河西走廊→西域→欧洲,东西方交流的桥梁。", emoji: "🐫", scene: { type: "clues", items: [
                { head: "开辟", text: "张骞·汉武帝" },
                { head: "路线", text: "长安→河西走廊→欧洲" },
                { head: "意义", text: "东西方交流" }
              ] } },
              { text: "地理:人口分布不均(亚洲东南部、欧洲西部稠密);三大人种(黄、白、黑)一律平等。", emoji: "🌍" },
              { text: "生物:显微镜放大倍数=目镜×物镜,成倒像(移动方向与像相反);结果:传粉→受精→子房变果实、胚珠变种子。", emoji: "🔬", scene: { type: "clues", items: [
                { head: "放大倍数", text: "目镜×物镜" },
                { head: "成倒像", text: "移动方向相反" },
                { head: "结果", text: "子房→果实" }
              ] } },
              { text: "道法:理解老师、教学相长,师生有矛盾主动沟通;敬畏生命、珍爱生命,活出生命的价值。", emoji: "⚖️" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "下列关于第四周副科知识的说法,错误的一项是:",
            options: [
              "丝绸之路的开辟与张骞出使西域有关",
              "世界三大人种在地位上是完全平等的,没有优劣之分",
              "显微镜的放大倍数等于目镜倍数加上物镜倍数",
              "受精后,子房发育成果实,胚珠发育成种子"
            ], answer: 2,
            demoSteps: [
              { text: "重点查生物:显微镜放大倍数是目镜和物镜「相加」还是「相乘」?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "放大倍数", text: "目镜 × 物镜" },
                { head: "例", text: "10× × 40× = 400 倍" },
                { head: "不是", text: "相加" }
              ] } },
              { text: "对照丝路、人种、结果三条,找出唯一说错的。", emoji: "🔍" }
            ],
            explain: "C 错。显微镜放大倍数 = 目镜倍数 × 物镜倍数(相乘),不是相加。其余三项都正确。",
            explainSteps: [
              { text: "放大倍数是目镜×物镜(如 10×40=400 倍),不是相加,C 错!", emoji: "🔬" },
              { text: "A 丝路、B 人种平等、D 开花结果,都正确。", emoji: "✅" },
              { text: "选 C。放大倍数是「乘」不是「加」,记牢!", emoji: "🎯" }
            ] }
        }
      ]
    }
  ]
};
