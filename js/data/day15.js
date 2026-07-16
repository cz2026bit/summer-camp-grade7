// ============ 第 15 关 ============
window.DAYS = window.DAYS || {};

window.DAYS[15] = {
  day: 15,
  title: "第 15 关 · 字母登场",
  estimate: "四科约 2~3 小时 · 共 7 道思考题(含 1 道 BOSS 题)",
  sections: [
    // ================== 数学 ==================
    {
      subject: "math", icon: "🔢", title: "数学 · 用字母表示数", minutes: 50,
      units: [
        {
          name: "动画课堂 1 · 一个字母,代表无穷个数",
          blocks: [
            { type: "lesson", title: "▶ 从算术走向代数的一大步", steps: [
              { text: "小学我们只和具体数字打交道。初中数学最大的飞跃:用字母表示数!一个 a,能代表任何数。", emoji: "🔤" },
              { text: "为什么要用字母?因为它能表示「一般规律」。「每本书 x 元,买 3 本」就是 3x,不管 x 是几都成立。", emoji: "💡", scene: { type: "clues", items: [
                { head: "具体", text: "3本×5元=15" },
                { head: "一般", text: "3本×x元=3x" },
                { head: "威力", text: "一式管所有" }
              ] } },
              { text: "书写有讲究:数字和字母相乘,数字写前面,乘号省略。3×a 写作 3a,a×b 写作 ab。", emoji: "✍️" },
              { text: "字母和字母相乘也省乘号;1 与字母相乘,1 省略(1a 写作 a);带分数要化成假分数(1½a 写作 3a/2)。", emoji: "📏", scene: { type: "clues", items: [
                { head: "3×a", text: "= 3a" },
                { head: "1×a", text: "= a" },
                { head: "a÷b", text: "= a/b" }
              ] } },
              { text: "记住:字母表示数,是代数的大门。规范书写是第一课,养成好习惯,后面不吃亏!", emoji: "🚪" }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 2 · 把文字翻译成代数式",
          blocks: [
            { type: "lesson", title: "▶ 列代数式:读懂「关系」是关键", steps: [
              { text: "列代数式,就是把一句话翻译成含字母的式子。核心是读懂数量之间的「关系」。", emoji: "🌐" },
              { text: "常见关系词:「和」用 +,「差」用 −,「积/的倍」用 ×,「商/几分之一」用 ÷。", emoji: "🔑", scene: { type: "clues", items: [
                { head: "a 与 b 的和", text: "a + b" },
                { head: "a 的 3 倍", text: "3a" },
                { head: "a 的一半", text: "a/2" }
              ] } },
              { text: "注意语序和括号:「a 与 b 的和的 2 倍」是 2(a+b),不是 2a+b!先加后乘要加括号。", emoji: "⚠️" },
              { text: "例:「比 x 的 2 倍多 3」= 2x + 3;「x 的 2 倍与 3 的差」= 2x − 3。多读几遍,分清先后。", emoji: "🧮", scene: { type: "clues", items: [
                { head: "比…多", text: "…+…" },
                { head: "…与…的差", text: "…−…" },
                { head: "的和的倍", text: "加括号" }
              ] } },
              { text: "口诀:关系词定运算,语序定先后,「和差的倍」记得加括号。翻译准了,代数就通了!", emoji: "🎯" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "「a 与 b 的和的 3 倍」用代数式表示,正确的是:",
            options: ["3a + b", "a + 3b", "3(a + b)", "3ab"], answer: 2,
            demoSteps: [
              { text: "先分层:核心是「a 与 b 的和」,再对这个和取「3 倍」。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "第一层", text: "a 与 b 的和 = a+b" },
                { head: "第二层", text: "它的 3 倍" },
                { head: "关键", text: "先加,要括号" }
              ] } },
              { text: "先算的「和」要用括号包住,再乘 3。", emoji: "🧮" }
            ],
            explain: "C 正确。「a 与 b 的和」是 (a+b),它的 3 倍是 3(a+b)。A、B 只把其中一个乘了 3;D 是乘积不是和。",
            explainSteps: [
              { text: "「和的 3 倍」:先求和 (a+b),再乘 3。", emoji: "🧮" },
              { text: "先加后乘必须加括号,得 3(a+b),选 C!", emoji: "✅" },
              { text: "A、B 漏了括号,把关系弄错;D 把「和」错成「积」。语序 + 括号,一个都不能少!", emoji: "🎯" }
            ] }
        },
        {
          name: "🔥 BOSS 挑战 · 摆火柴找规律",
          blocks: [
            { type: "text", html: "💪 <b>BOSS 战规则</b>:用字母表示规律!这是代数最迷人的地方——一个式子预言无穷。草稿纸准备!" }
          ],
          q: { type: "fill", points: 20, boss: true, voice: "zh",
            q: "用火柴棒摆三角形:摆 1 个用 3 根,摆 2 个(共边)用 5 根,摆 3 个用 7 根……每多摆一个多用 2 根。那么摆 n 个三角形要用多少根?(用含 n 的式子表示,如 2n+1)",
            placeholder: "例如: 2n+1",
            accept: ["2n+1", "2n + 1", "1+2n", "2×n+1", "2*n+1", "(2n+1)"],
            demoSteps: [
              { text: "找规律:3、5、7……每次加 2,和 2n 有关。列个表看看。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "1 个", text: "3 = 2×1+1" },
                { head: "2 个", text: "5 = 2×2+1" },
                { head: "3 个", text: "7 = 2×3+1" }
              ] } },
              { text: "每个式子都是「2×个数 + 1」,把个数换成 n。", emoji: "🧮" }
            ],
            explain: "摆 1 个:2×1+1=3;摆 2 个:2×2+1=5;摆 n 个就是 2n+1 根。第一个三角形用 3 根,之后每个共边只多 2 根。",
            explainSteps: [
              { text: "列表:3=2·1+1,5=2·2+1,7=2·3+1,规律清清楚楚。", emoji: "📊" },
              { text: "摆 n 个 = 2n + 1 根!", emoji: "✅" },
              { text: "用字母表示规律,就能预言摆 100 个要 201 根——这就是代数的魔力!", emoji: "🏆" }
            ] }
        }
      ]
    },

    // ================== 英语 ==================
    {
      subject: "english", icon: "📚", title: "英语 · 现在进行时(结构)", minutes: 45,
      units: [
        {
          name: "单词训练营 · 正在做的事 12 个(点卡片听发音!)",
          blocks: [
            { type: "text", html: "🎧 今天的词都在描述<span class='hl'>此刻正在发生</span>的动作!点卡片听发音,跟读 3 遍。" },
            { type: "flashcards", words: [
              { word: "now", phonetic: "/naʊ/", cn: "现在", sentence: "She is reading now." },
              { word: "look", phonetic: "/lʊk/", cn: "看", sentence: "Look! It is raining." },
              { word: "listen", phonetic: "/ˈlɪsn/", cn: "听", sentence: "Listen! Someone is singing." },
              { word: "write", phonetic: "/raɪt/", cn: "写", sentence: "He is writing a letter." },
              { word: "make", phonetic: "/meɪk/", cn: "做;制作", sentence: "Mum is making a cake." },
              { word: "clean", phonetic: "/kliːn/", cn: "打扫", sentence: "They are cleaning the room." },
              { word: "wash", phonetic: "/wɒʃ/", cn: "洗", sentence: "I am washing my hands." },
              { word: "sit", phonetic: "/sɪt/", cn: "坐", sentence: "The cat is sitting there." },
              { word: "run", phonetic: "/rʌn/", cn: "跑", sentence: "The boys are running." },
              { word: "eat", phonetic: "/iːt/", cn: "吃", sentence: "We are eating lunch." },
              { word: "have", phonetic: "/hæv/", cn: "吃;进行", sentence: "They are having a party." },
              { word: "swim", phonetic: "/swɪm/", cn: "游泳", sentence: "She is swimming now." }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 · 现在进行时:be + 动词ing",
          blocks: [
            { type: "lesson", title: "▶ 表示「此刻正在做」", steps: [
              { text: "一般现在时讲习惯,现在进行时讲「此刻正在发生」的事:我正在写作业、外面正在下雨。", emoji: "⏱️" },
              { text: "结构公式:be动词(am/is/are)+ 动词ing。缺一不可!I am reading. She is running. They are playing.", emoji: "🔧", scene: { type: "clues", items: [
                { head: "am", text: "I am doing" },
                { head: "is", text: "he/she/it is doing" },
                { head: "are", text: "you/we/they are doing" }
              ] } },
              { text: "动词ing 变化:一般直接加 ing(read→reading);以不发音 e 结尾去 e 加 ing(write→writing)。", emoji: "✍️" },
              { text: "重读闭音节(辅元辅)要双写末尾辅音再加 ing:run→running, sit→sitting, swim→swimming。", emoji: "📏", scene: { type: "clues", items: [
                { head: "一般", text: "+ing" },
                { head: "e 结尾", text: "去 e +ing" },
                { head: "重读闭音节", text: "双写 +ing" }
              ] } },
              { text: "口诀:现在进行 be + ing,be 别漏掉;去 e 双写记心间。此刻正在,就用它!", emoji: "🎯" }
            ] },
            { type: "chant", lines: ["现在进行有玄机,", "be 动词加 ing;", "e 结尾要去 e,", "短音节把辅音双!"] }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "选出完全正确的一句:",
            options: [
              "She is runing in the park now.",
              "She running in the park now.",
              "She is running in the park now.",
              "She is run in the park now."
            ], answer: 2,
            demoSteps: [
              { text: "两处考点:be 动词有没有?run 的 ing 形式对不对?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "结构", text: "be + ing 都要有" },
                { head: "run", text: "重读闭音节" },
                { head: "ing 形式", text: "running(双写 n)" }
              ] } },
              { text: "run 是重读闭音节,要双写 n 再加 ing。", emoji: "✍️" }
            ],
            explain: "C 正确:is + running(双写 n)。A 的 runing 少写一个 n;B 漏了 be 动词;D 用了原形 run 没加 ing。",
            explainSteps: [
              { text: "A:running 要双写 n,runing 拼错。", emoji: "❌" },
              { text: "B:漏了 be 动词 is,进行时 be 不能少。", emoji: "❌" },
              { text: "D:run 没变 ing 形式,错。", emoji: "❌" },
              { text: "C:is running,be + ing 齐全、双写正确!选 C。", emoji: "✅" }
            ] }
        },
        {
          name: "英文名著时光 · The Town Mouse and the Country Mouse",
          blocks: [
            { type: "rule", title: "📖 名著名片", html: "<b>《伊索寓言》Aesop's Fables</b>——城里老鼠和乡下老鼠,平安简单和富贵惊险,你选哪一个?" },
            { type: "reading", speakable: true, title: "The Town Mouse and the Country Mouse", paragraphs: [
              "A town mouse visits his friend in the country. The country mouse gives him simple food: some beans and corn. 'Is this all you eat?' says the town mouse. 'Come to the town with me. There is much better food!'",
              "So they go to a big house in the town. On the table there is cheese, cake and fruit. 'How wonderful!' says the country mouse. He starts to eat.",
              "Suddenly, a big cat runs in! The two mice run and hide. Their hearts beat fast. When the cat is gone, they come out, but soon a dog comes too.",
              "'I am going home,' says the country mouse. 'Your food is very good, but it is too dangerous here. I would rather eat simple food in peace.' And he runs back to his quiet home."
            ], tip: "生词提示:beans 豆子 / cheese 奶酪 / hide 躲藏 / dangerous 危险的 / peace 安宁" }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "Why does the country mouse go home?(乡下老鼠为什么要回家?)",
            options: [
              "Because the town food is bad.",
              "Because he prefers simple food in peace to rich food in danger.",
              "Because the town mouse is unfriendly.",
              "Because he can't find the town."
            ], answer: 1,
            demoSteps: [
              { text: "乡下老鼠最后说了什么?他更看重什么?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "城里", text: "好吃但危险" },
                { head: "乡下", text: "简单但安宁" },
                { head: "他选", text: "peace" }
              ] } },
              { text: "原文 I would rather eat simple food in peace 是关键。", emoji: "🐭" }
            ],
            explain: "B 正确。城里食物虽好却危险(猫和狗),乡下老鼠宁愿吃简单的食物过安宁的生活。",
            explainSteps: [
              { text: "城里美食虽好,却时时有猫狗的危险。", emoji: "🐱" },
              { text: "乡下老鼠说宁愿平安地吃简单食物,选 B!", emoji: "✅" },
              { text: "寓意:平安简单的生活,胜过提心吊胆的富贵。", emoji: "🎯" }
            ] }
        }
      ]
    },

    // ================== 语文 ==================
    {
      subject: "chinese", icon: "📝", title: "语文 · 《论语》十二章(上)", minutes: 40,
      units: [
        {
          name: "动画课堂 · 孔子谈学习:温故知新",
          blocks: [
            { type: "lesson", title: "▶ 关于学习方法与态度的名句", steps: [
              { text: "《论语》是记录孔子及其弟子言行的语录体经典。十二章短小精悍,句句是做人做学问的智慧。今天学上半部分。", emoji: "📜" },
              { text: "「学而时习之,不亦说乎?」——学了又按时温习,不也很愉快吗?「说」通「悦」,是通假字。", emoji: "😊", scene: { type: "clues", items: [
                { head: "学而时习", text: "学了要复习" },
                { head: "说 = 悦", text: "通假字" },
                { head: "启示", text: "复习使人快乐" }
              ] } },
              { text: "「温故而知新,可以为师矣。」——温习旧知识能有新体会,就可以做老师了。强调「复习+思考」。", emoji: "💡" },
              { text: "「学而不思则罔,思而不学则殆。」——只学不思会迷惑,只思不学会疑惑。学与思,必须结合!", emoji: "⚖️", scene: { type: "clues", items: [
                { head: "学而不思", text: "则罔(迷惑)" },
                { head: "思而不学", text: "则殆(疑惑)" },
                { head: "结论", text: "学思结合" }
              ] } },
              { text: "「知之为知之,不知为不知,是知也。」——知道就是知道,不知道就是不知道,这才是智慧。诚实是治学的根本。", emoji: "🎯" }
            ] }
          ],
          q: { type: "choice", points: 10, voice: "zh",
            q: "「学而不思则罔,思而不学则殆」这句话告诉我们:",
            options: [
              "学习比思考更重要",
              "思考比学习更重要",
              "学习和思考必须结合,缺一不可",
              "既不用学也不用思"
            ], answer: 2,
            demoSteps: [
              { text: "拆句子:只「学」不「思」会怎样?只「思」不「学」又会怎样?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "只学不思", text: "罔(迷惑)" },
                { head: "只思不学", text: "殆(疑惑)" },
                { head: "两句合看", text: "都不好" }
              ] } },
              { text: "两种极端都被否定,说明作者主张什么?", emoji: "⚖️" }
            ],
            explain: "C 正确。孔子指出「只学不思」和「只思不学」都不好,说明学习与思考必须结合,相辅相成。",
            explainSteps: [
              { text: "「学而不思则罔」——光记不想,会迷茫。", emoji: "😵" },
              { text: "「思而不学则殆」——光想不学,会空疑。", emoji: "🤔" },
              { text: "两头都否定,正说明学思要结合,选 C!这是穿越两千年仍不过时的学习真理。", emoji: "✅" }
            ] }
        },
        {
          name: "动画课堂 · 文言实词:通假与一词多义",
          blocks: [
            { type: "lesson", title: "▶ 读《论语》要过的词语关", steps: [
              { text: "《论语》里有几个词语现象要牢记,几乎年年考:通假字、古今异义、一词多义。", emoji: "🔑" },
              { text: "通假字:古人写的「别字」。「学而时习之,不亦说乎」的「说」通「悦」(愉快);「诲女知之乎」的「女」通「汝」(你)。", emoji: "🔀", scene: { type: "clues", items: [
                { head: "说 → 悦", text: "愉快" },
                { head: "女 → 汝", text: "你" },
                { head: "知 → 智", text: "智慧" }
              ] } },
              { text: "一词多义:「知」既可指「知道」(知之为知之),也通「智」表「智慧」(是知也)。同一字,不同义。", emoji: "🎭" },
              { text: "古今异义:「可以为师矣」的「可以」是「可以凭借」两个词,不是今天的一个词「可以」。", emoji: "⏳" },
              { text: "学文言实词口诀:通假换本字,多义看语境,古今莫混淆。一字一记,积少成多。", emoji: "🧱" }
            ] }
          ],
          q: { type: "fill", points: 10, voice: "zh",
            q: "《论语》「学而时习之,不亦说乎」中的「说」是通假字,通__________字,意思是「愉快」。(填一个字)",
            placeholder: "填一个字",
            accept: ["悦", "悦。", "「悦」"],
            demoSteps: [
              { text: "「说」在这里不读 shuō,意思是「愉快」,它通哪个字?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "说", text: "此处义:愉快" },
                { head: "通", text: "同音替换" },
                { head: "本字", text: "含「忄」" }
              ] } },
              { text: "表「愉快」的字带竖心旁,读 yuè。", emoji: "😊" }
            ],
            explain: "「说」通「悦」,读 yuè,意思是愉快、高兴。这是《论语》里最著名的通假字之一。",
            explainSteps: [
              { text: "「说」在句中表「愉快」,通「悦」。", emoji: "😊" },
              { text: "通假字就是古人用的「同音替字」,遇到讲不通的字,想想它通哪个字。", emoji: "🔀" },
              { text: "答「悦」。通假字是文言必考点,一定要专门积累!", emoji: "✅" }
            ] }
        },
        {
          name: "今日彩蛋 · 名著打卡",
          blocks: [
            { type: "rule", title: "📖 睡前 20 分钟名著时间", html: "继续读<b>《西游记》</b>!今晚用孔子的话检查自己:<b>今天学的知识,我「时习」了吗?我「学而思」了吗?</b><br>把《论语》上半部分的几句名言抄在书桌前,天天读一读——古人的智慧,就是这样陪你长大的。" }
          ],
          q: null
        }
      ]
    },

    // ================== 历史 ==================
    {
      subject: "history", icon: "🏺", title: "历史 · 秦统一中国", minutes: 25,
      units: [
        {
          name: "动画课堂 · 千古一帝的大一统",
          blocks: [
            { type: "lesson", title: "▶ 秦始皇:第一个皇帝", steps: [
              { text: "公元前 221 年,秦王嬴政灭掉六国,建立起中国历史上第一个统一的多民族的中央集权国家——秦朝。", emoji: "👑" },
              { text: "他觉得「王」不足以显示功业,取「三皇五帝」各一字,自称「皇帝」,他就是秦始皇——第一位皇帝。", emoji: "🏛️", scene: { type: "clues", items: [
                { head: "时间", text: "公元前 221 年" },
                { head: "人物", text: "嬴政(秦始皇)" },
                { head: "意义", text: "第一个统一王朝" }
              ] } },
              { text: "为巩固统一,他推行一系列措施:政治上建立中央集权(设丞相、太尉、御史大夫),地方推行郡县制。", emoji: "⚙️" },
              { text: "文化经济上大统一:统一文字(小篆)、统一货币(圆形方孔半两钱)、统一度量衡、车同轨。", emoji: "📐", scene: { type: "clues", items: [
                { head: "文字", text: "统一为小篆" },
                { head: "货币", text: "圆形方孔钱" },
                { head: "度量衡", text: "统一标准" }
              ] } },
              { text: "记忆法:秦始皇干了「三统一一集权」——统一文字、货币、度量衡,建立中央集权和郡县制。影响两千年!", emoji: "🎯" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "关于秦始皇巩固统一的措施,下列说法错误的一项是:",
            options: [
              "统一文字,把小篆作为全国规范文字",
              "统一货币,使用圆形方孔的半两钱",
              "地方上推行分封制,分封诸侯管理国家",
              "统一度量衡,方便经济交流"
            ], answer: 2,
            demoSteps: [
              { text: "秦朝地方管理用的是「郡县制」还是「分封制」?这是关键区别。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "西周", text: "分封制" },
                { head: "秦朝", text: "郡县制" },
                { head: "区别", text: "中央直接任命" }
              ] } },
              { text: "分封制是西周的老办法,秦朝为加强集权换成了什么?", emoji: "⚙️" }
            ],
            explain: "C 错。秦朝地方推行的是郡县制(由中央直接任命官员管理),不是分封制。分封制是西周的制度。其余三项都正确。",
            explainSteps: [
              { text: "秦始皇为加强中央集权,地方用郡县制,官员由皇帝任命。", emoji: "⚙️" },
              { text: "分封制是西周的老制度,容易造成割据,秦朝正是要废除它,C 错!", emoji: "❌" },
              { text: "A 统一文字、B 统一货币、D 统一度量衡都对。选 C。", emoji: "✅" }
            ] }
        }
      ]
    }
  ]
};
