// ============ 第 7 关 ============
window.DAYS = window.DAYS || {};

window.DAYS[7] = {
  day: 7,
  title: "第 7 关 · 第一周大盘点",
  estimate: "四科约 2~3 小时 · 共 7 道闯关题(含 1 道 BOSS 题)",
  sections: [
    // ================== 数学 ==================
    {
      subject: "math", icon: "🔢", title: "数学 · 有理数第一周复盘", minutes: 45,
      units: [
        {
          name: "动画课堂 · 一周知识地图",
          blocks: [
            { type: "lesson", title: "▶ 六天学的负数,连成一张网", steps: [
              { text: "这一周我们从「负数是什么」一路走到了「加减法」。今晚不学新东西,把散落的珍珠串成项链!", emoji: "📿" },
              { text: "第一颗珠子:负数是「相反意义的量」,0 是分界线,既不正也不负。", emoji: "🚪", scene: { type: "numberline", from: -3, to: 0 } },
              { text: "第二颗:数轴——越往右越大,越往左越小,所以 −2 > −6。", emoji: "📏", scene: { type: "numberline", from: -6, to: -2 } },
              { text: "第三颗:相反数「只差一个符号」,绝对值是「到原点的距离」,永远非负。", emoji: "🪞", scene: { type: "clues", items: [
                { head: "相反数", text: "5 与 −5" },
                { head: "绝对值", text: "|−5| = 5" },
                { head: "关键", text: "距离不为负" }
              ] } },
              { text: "第四颗:加法「拔河术」,减法「变身咒语」——减去一个数等于加它的相反数。", emoji: "🪄", scene: { type: "numberline", from: 5, to: 8 } },
              { text: "六天六颗珠子,今天把它们串起来,明天就能戴着这条项链闯第二周!", emoji: "✨" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "综合判断,哪一组全对?①|−7| = 7 ②−3 的相反数是 3 ③在数轴上 −10 比 −1 大 ④(−6) + 4 = −2",
            options: ["①②③④都对", "只有①②④对", "只有①④对", "只有②③对"], answer: 1,
            demoSteps: [
              { text: "逐条验:①绝对值是距离,②相反数只翻符号,都很稳。", emoji: "🔍" },
              { text: "③要小心:−10 在 −1 的左边还是右边?左边就更小!", emoji: "📏", scene: { type: "numberline", from: -10, to: -1 } },
              { text: "④拔河:负 6 对正 4,谁力气大?", emoji: "💪", scene: { type: "numberline", from: -6, to: -2 } }
            ],
            explain: "①②④正确;③错:−10 在 −1 左边,应比 −1 小。(−6)+4:负方赢 2,得 −2。",
            explainSteps: [
              { text: "①|−7|=7,距离,对;②−3 的相反数 3,对。", emoji: "✅" },
              { text: "③是陷阱:数轴上 −10 在最左,比 −1 小得多,错!", emoji: "📏", scene: { type: "numberline", from: -10, to: -1 } },
              { text: "④(−6)+4:拔河负方赢 2,结果 −2,对。", emoji: "💪", scene: { type: "numberline", from: -6, to: -2 } },
              { text: "所以只有①②④对。负数比大小永远回到数轴上看左右!", emoji: "🎯" }
            ] }
        },
        {
          name: "🔥 BOSS 挑战 · 存折上的一周",
          blocks: [
            { type: "text", html: "💪 <b>BOSS 战规则</b>:把一周所学全用上!正数=存入,负数=支出,请你当一次小会计。草稿纸准备!" }
          ],
          q: { type: "fill", points: 20, boss: true, voice: "zh",
            q: "恩恩的零花钱账本:周一存入 20 元,周二支出 15 元,周三又支出 8 元,周四妈妈奖励存入 10 元。算式写成 20 −15 −8 +10,结果账上还有多少元?(直接填数字)",
            placeholder: "例如: 5",
            accept: ["7", "7元", "七", "七元"],
            demoSteps: [
              { text: "把「支出」翻译成负数:20 + (−15) + (−8) + 10。", emoji: "🪄", scene: { type: "clues", items: [
                { head: "存入", text: "+20  +10" },
                { head: "支出", text: "−15  −8" },
                { head: "策略", text: "先同号相加" }
              ] } },
              { text: "凑整技巧:正数一堆 20+10=30,负数一堆 15+8=23。", emoji: "🧮" },
              { text: "最后一次拔河:30 对 23,谁赢?赢多少?", emoji: "💪" }
            ],
            explain: "20 − 15 − 8 + 10 = (20 + 10) − (15 + 8) = 30 − 23 = 7 元。",
            explainSteps: [
              { text: "变身:20 + (−15) + (−8) + 10。", emoji: "🪄" },
              { text: "同号归堆:正数 20+10=30,支出 15+8=23。", emoji: "🧮" },
              { text: "30 − 23 = 7,账上还剩 7 元!", emoji: "💰" },
              { text: "这就是「加减混合」的核心思路,下周第 8 关我们专门练它!", emoji: "🏆" }
            ] }
        }
      ]
    },

    // ================== 英语 ==================
    {
      subject: "english", icon: "📚", title: "英语 · 第一周词汇语法回炉", minutes: 45,
      units: [
        {
          name: "单词大挑战 · 一周 60 词随机抽查(点卡片听发音!)",
          blocks: [
            { type: "text", html: "🎧 这一周学了<span class='hl'>校园、家庭、房间</span>三大主题!下面抽 10 个最容易忘的,点卡片再听一遍。" },
            { type: "flashcards", words: [
              { word: "teacher", phonetic: "/ˈtiːtʃə/", cn: "老师", sentence: "Our teacher is very kind." },
              { word: "classroom", phonetic: "/ˈklɑːsruːm/", cn: "教室", sentence: "The classroom is big and bright." },
              { word: "grandmother", phonetic: "/ˈɡrænmʌðə/", cn: "祖母", sentence: "My grandmother tells great stories." },
              { word: "cousin", phonetic: "/ˈkʌzn/", cn: "堂/表亲", sentence: "My cousin is my best friend." },
              { word: "kitchen", phonetic: "/ˈkɪtʃɪn/", cn: "厨房", sentence: "We cook dinner in the kitchen." },
              { word: "window", phonetic: "/ˈwɪndəʊ/", cn: "窗户", sentence: "There is a bird on the window." },
              { word: "family", phonetic: "/ˈfæmɪli/", cn: "家庭", sentence: "I love my family." },
              { word: "brother", phonetic: "/ˈbrʌðə/", cn: "兄弟", sentence: "My brother plays football." },
              { word: "sofa", phonetic: "/ˈsəʊfə/", cn: "沙发", sentence: "The cat sleeps on the sofa." },
              { word: "friend", phonetic: "/frend/", cn: "朋友", sentence: "She is a good friend." }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 · 一周语法四件套复盘",
          blocks: [
            { type: "lesson", title: "▶ Be动词 · 代词 · 名词复数 · There be", steps: [
              { text: "这一周的语法可以缩成一句话:「谁 + be + 什么」,再加上「某地有某物」。", emoji: "🧩" },
              { text: "Be动词口诀:I 用 am,you 用 are,he/she/it 用 is;复数一律用 are。", emoji: "🔤", scene: { type: "match", groups: [
                { head: "is", items: ["he", "she", "it"] },
                { head: "are", items: ["you", "we", "they"] }
              ] } },
              { text: "人称代词做主语(I/he),物主代词表所有(my/his)。名词复数一般加 s,box→boxes,baby→babies。", emoji: "👥" },
              { text: "There be 表「有」,is/are 看后面第一个名词,记住就近原则。", emoji: "📍", scene: { type: "clues", items: [
                { head: "There is", text: "接单数" },
                { head: "There are", text: "接复数" },
                { head: "就近原则", text: "看最近的名词" }
              ] } },
              { text: "把四件套连起来:There is my brother in the classroom. 一句话用上三样!", emoji: "🎯" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "选出完全正确的一句:",
            options: [
              "There are three boxs on my desk, and they is heavy.",
              "There are three boxes on my desk, and they are heavy.",
              "There is three boxes on my desk, and they are heavy.",
              "There are three boxes on my desk, and it are heavy."
            ], answer: 1,
            demoSteps: [
              { text: "先查名词复数:box 的复数怎么写?", emoji: "🔤", scene: { type: "clues", items: [
                { head: "box", text: "以 x 结尾" },
                { head: "复数", text: "加 es" },
                { head: "结果", text: "boxes" }
              ] } },
              { text: "再查 be:three boxes 是复数,they 也是复数,分别配什么?", emoji: "📍" }
            ],
            explain: "B 正确:boxes(x 结尾加 es)、There are + 复数、they are 都对。A 的 boxs 拼错、they is 错;C 的 There is 配复数错;D 的 it are 主谓不一致。",
            explainSteps: [
              { text: "box 以 x 结尾,复数加 es → boxes。A 的 boxs 直接淘汰。", emoji: "🔤" },
              { text: "three boxes 复数,用 There are;指代它们用 they are。B 全对!", emoji: "✅" },
              { text: "C 的 There is 配复数,错;D 的 it are 单复不一致,错。", emoji: "❌" },
              { text: "答案 B。四件套联动:名词复数 + There be + 代词,一个都不能错!", emoji: "🎯" }
            ] }
        },
        {
          name: "英文名著时光 · The Wind and the Sun(回顾版)",
          blocks: [
            { type: "rule", title: "📖 名著名片", html: "<b>《伊索寓言》Aesop's Fables</b>——两千多年前的希腊智慧,一个个小故事藏着大道理。这周你已经读了 6 个经典故事!" },
            { type: "reading", speakable: true, title: "The Ant and the Grasshopper", paragraphs: [
              "It is summer. The ant works hard every day. He carries food to his home under the ground.",
              "The grasshopper sings and plays all day. 'Why do you work so hard?' he asks. 'Come and sing with me!'",
              "'I am getting ready for winter,' says the ant. 'You should do the same.'",
              "Winter comes. There is snow everywhere. The grasshopper is cold and hungry, but the ant is warm and has lots of food. Now the grasshopper understands: work first, then play."
            ], tip: "生词提示:carry 搬运 / ground 地面 / winter 冬天 / hungry 饥饿的" }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "Why is the ant warm and full in winter?(冬天蚂蚁为什么又暖又饱?)",
            options: [
              "Because the grasshopper gives him food.",
              "Because he works hard in summer and gets ready for winter.",
              "Because the winter is not cold.",
              "Because he sings all day."
            ], answer: 1,
            demoSteps: [
              { text: "蚂蚁夏天做了什么?为的是哪个季节?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "蚂蚁", text: "works hard in summer" },
                { head: "目的", text: "ready for winter" },
                { head: "结果", text: "warm and full" }
              ] } },
              { text: "原文 getting ready for winter 说出了原因。", emoji: "🐜" }
            ],
            explain: "B 正确。蚂蚁夏天辛勤搬运食物、为冬天做准备,所以冬天温暖有食物。蚱蜢只顾玩乐,冬天又冷又饿。",
            explainSteps: [
              { text: "蚂蚁夏天努力干活、储备粮食,为过冬做准备。", emoji: "🐜" },
              { text: "所以冬天它又暖又饱,选 B!", emoji: "✅" },
              { text: "寓意:未雨绸缪,先苦后甜。会规划的人,才能笑到最后。", emoji: "🎯" }
            ] }
        }
      ]
    },

    // ================== 语文 ==================
    {
      subject: "chinese", icon: "📝", title: "语文 · 第一周基础与古诗盘点", minutes: 40,
      units: [
        {
          name: "动画课堂 · 字音字形 · 成语 · 病句 三合一",
          blocks: [
            { type: "lesson", title: "▶ 语文基础题的三大失分点", steps: [
              { text: "这一周语文练的是「基本功」:读准字音、写对字形、用对成语、辨清病句。今天来一次总检修。", emoji: "🔧" },
              { text: "字音关:多音字看语境。「和」在「曲高和寡」读 hè,在「和平」读 hé。", emoji: "🗣️", scene: { type: "char", char: "和", pinyins: ["hé 和平", "hè 附和", "huo 暖和", "hú 和牌"], highlight: 1 } },
              { text: "字形关:形近字别写错。「戴」帽子用「戴」,「带」东西用「带」。", emoji: "✍️" },
              { text: "成语关:望文生义是大坑。「差强人意」是「大体令人满意」,不是「不满意」!", emoji: "⚠️", scene: { type: "clues", items: [
                { head: "差强人意", text: "大体满意 ✓" },
                { head: "常见误解", text: "不满意 ✗" },
                { head: "口诀", text: "查词义防望文" }
              ] } },
              { text: "病句关:先找主谓宾,看搭不搭配、缺不缺成分、重不重复。四步一走,病句现形。", emoji: "🩺" }
            ] }
          ],
          q: { type: "choice", points: 10, voice: "zh",
            q: "下列句子没有语病的一项是:",
            options: [
              "通过这次活动,使我明白了团结的重要。",
              "能否养成好习惯,是取得好成绩的重要条件之一。",
              "我们要防止今后不再发生类似的事故。",
              "他大约十岁左右,是个聪明的孩子。"
            ], answer: 1,
            demoSteps: [
              { text: "A:「通过……使……」一起用,主语被吃掉了,这是老毛病。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "缺主语", text: "通过…使…" },
                { head: "否定不当", text: "防止…不再" },
                { head: "重复啰嗦", text: "大约…左右" }
              ] } },
              { text: "逐项排查三种病:缺主语、否定叠加、语义重复,剩下的就是正确句。", emoji: "🩺" }
            ],
            explain: "B 正确。A 缺主语(去掉「通过」或「使」);C 否定不当(「防止」+「不再」等于要它发生);D 重复(「大约」与「左右」意思重叠)。",
            explainSteps: [
              { text: "A「通过…使…」连用没了主语,病!去掉一个词就好。", emoji: "❌" },
              { text: "C「防止不再发生」= 让它再发生,否定叠加,病!", emoji: "❌" },
              { text: "D「大约十岁左右」,大约和左右重复,病!", emoji: "❌" },
              { text: "B 的「能否……是……之一」前后照应完整,没病!选 B。", emoji: "✅" }
            ] }
        },
        {
          name: "动画课堂 · 三首古诗默写通关",
          blocks: [
            { type: "lesson", title: "▶ 《观沧海》《次北固山下》《天净沙·秋思》", steps: [
              { text: "这一周背了三首诗,今天检查「会不会默、懂不懂意」。名句默写是中考送分题,一分不能丢!", emoji: "📜" },
              { text: "《观沧海》曹操:「日月之行,若出其中;星汉灿烂,若出其里」——写大海吞吐日月星辰的气魄。", emoji: "🌊", scene: { type: "sea", phase: "sun" } },
              { text: "《次北固山下》王湾:「海日生残夜,江春入旧年」——旧的还没走,新的已经来,蕴含哲理。", emoji: "🌅", scene: { type: "sea", phase: "sun" } },
              { text: "《天净沙·秋思》马致远:「夕阳西下,断肠人在天涯」——九种景物叠出浓浓乡愁。", emoji: "🍂" },
              { text: "默写三查:错字、漏字、串句。写完回读一遍,送分题稳稳拿下!", emoji: "✅" }
            ] }
          ],
          q: { type: "fill", points: 10, voice: "zh",
            q: "补写名句:《次北固山下》中蕴含新事物必将取代旧事物这一哲理的句子是「海日生残夜,__________」。(填后半句)",
            placeholder: "填五个字",
            accept: ["江春入旧年", "江春入旧年。", "江春入旧年,"],
            demoSteps: [
              { text: "上句「海日生残夜」写残夜里升起海日,下句要对仗。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "海日", text: "对 江春" },
                { head: "生残夜", text: "对 入旧年" },
                { head: "哲理", text: "新旧交替" }
              ] } },
              { text: "「江春」对「海日」,「入旧年」对「生残夜」,对仗工整。", emoji: "✍️" }
            ],
            explain: "「海日生残夜,江春入旧年」。旧年未尽江上已有春意,残夜将退海上已升红日——旧事物中孕育着新事物。",
            explainSteps: [
              { text: "答案:江春入旧年。", emoji: "✅" },
              { text: "海日/江春、生残夜/入旧年,名词对名词、动宾对动宾,工整!", emoji: "📐" },
              { text: "含义:新事物在旧事物尚未消失时就已诞生,充满向上的力量,常被引用。", emoji: "🌅" }
            ] }
        },
        {
          name: "今日彩蛋 · 名著打卡",
          blocks: [
            { type: "rule", title: "📖 睡前 20 分钟名著时间", html: "第一周收官!今晚翻开《朝花夕拾》读你最喜欢的一篇,合上书想一想:<b>这一周我记住了几个字音、几个成语、几首诗?</b><br>把它们讲给爸爸妈妈听——能讲出来的,才是真正学会的。" }
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
          name: "动画课堂 · 四门副科一周精华",
          blocks: [
            { type: "lesson", title: "▶ 历史·地理·生物·道法 各记一个关键词", steps: [
              { text: "副科每天换一门,一周下来学了历史、地理、生物、道法。今天每门抓一个「关键词」记牢。", emoji: "🎒" },
              { text: "历史:中华文明起源——半坡人住半地穴、河姆渡人住干栏式,南北房屋不同因气候不同。", emoji: "🏺", scene: { type: "house", phase: "both" } },
              { text: "地理:地球与地球仪——经线连南北等长、纬线平行赤道最大,经纬网给地球定位。", emoji: "🌍", scene: { type: "clues", items: [
                { head: "经线", text: "连两极·等长" },
                { head: "纬线", text: "平行赤道" },
                { head: "赤道", text: "最长的纬线" }
              ] } },
              { text: "生物:生物的特征——需要营养、能呼吸、能繁殖、能对刺激作出反应,这是「活着」的标志。", emoji: "🌱" },
              { text: "道法:中学时代——进入初中要适应新环境、立下新目标,做更好的自己。", emoji: "⚖️" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "下列关于第一周副科知识的说法,错误的一项是:",
            options: [
              "河姆渡人住干栏式房屋,与长江流域潮湿的气候有关",
              "地球上所有纬线都一样长",
              "生物能对外界刺激作出反应,如含羞草被碰会合拢",
              "半坡人住半地穴式房屋,与黄河流域寒冷干燥有关"
            ], answer: 1,
            demoSteps: [
              { text: "回忆地理关键词:经线和纬线,谁等长谁不等长?", emoji: "🌍", scene: { type: "clues", items: [
                { head: "经线", text: "全部等长" },
                { head: "纬线", text: "赤道最长" },
                { head: "两极附近", text: "纬线很短" }
              ] } },
              { text: "再对照房屋、生物两条,找出唯一说反的一句。", emoji: "🔍" }
            ],
            explain: "B 错:等长的是经线,纬线离赤道越远越短,只有赤道最长。其余三项都正确。",
            explainSteps: [
              { text: "经线连两极,全部等长;纬线只有赤道最长,越往两极越短。B 说反了!", emoji: "🌍" },
              { text: "A、D 房屋因气候而异,正确;C 含羞草合拢是对刺激的反应,正确。", emoji: "✅" },
              { text: "选 B。副科记忆法:一门一个关键词,一周只记四个,轻松不忘!", emoji: "🎯" }
            ] }
        }
      ]
    }
  ]
};
