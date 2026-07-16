// ============ 第 40 关 ============
window.DAYS = window.DAYS || {};

window.DAYS[40] = {
  day: 40,
  title: "第 40 关 · 结营总测评 🏆",
  estimate: "四科约 2~3 小时 · 共 7 道总测评(含 1 道 BOSS 题)· 冲刺满分!",
  sections: [
    // ================== 数学 ==================
    {
      subject: "math", icon: "🔢", title: "数学 · 结营总测评", minutes: 50,
      units: [
        {
          name: "毕业寄语 · 40 天数学之旅",
          blocks: [
            { type: "lesson", title: "▶ 从分数到方程,你已脱胎换骨", steps: [
              { text: "恩恩,今天是最后一关——结营总测评!回头看看,40 天前你还在复习小学分数,如今已经会解方程、算几何了!", emoji: "🎓" },
              { text: "这个暑假,你走过了:有理数(负数、数轴、四则运算)→ 代数式(字母、整式)→ 方程(解方程、应用题)→ 几何(线、角、规律)。", emoji: "🗺️", scene: { type: "clues", items: [
                { head: "有理数", text: "负数·运算" },
                { head: "代数式", text: "字母·整式" },
                { head: "方程几何", text: "解方程·图形" }
              ] } },
              { text: "你学会的不只是知识,更是「数学思维」:用字母表示规律、用方程解决问题、用画图理清关系。", emoji: "🧠" },
              { text: "最后一战,拿出你 40 天练就的本领,认真审题、仔细计算、别忘验算。相信自己,你一定行!", emoji: "💪" },
              { text: "无论分数多少,能坚持 40 天走到这里,你已经是最棒的!现在,冲刺满分,给暑假一个漂亮的收尾!", emoji: "🏆" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "计算 −3² + (−2)³ ÷ 4 × 2 − |−6| 的结果是:",
            options: ["−19", "−11", "−15", "−9"], answer: 0,
            demoSteps: [
              { text: "分部算:先乘方 −3²、(−2)³,再乘除,最后加减,注意绝对值。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "−3²", text: "= −9" },
                { head: "(−2)³", text: "= −8" },
                { head: "|−6|", text: "= 6" }
              ] } },
              { text: "−3²=−9;(−2)³÷4×2 = −8÷4×2 = −4;再减 |−6|=6。", emoji: "🧮" }
            ],
            explain: "−3² = −9;(−2)³ ÷ 4 × 2 = −8 ÷ 4 × 2 = −2 × 2 = −4;|−6| = 6。原式 = −9 + (−4) − 6 = −19。选 A。",
            explainSteps: [
              { text: "乘方:−3²=−9,(−2)³=−8。", emoji: "🥇" },
              { text: "乘除(从左到右):−8÷4=−2,×2=−4。绝对值 |−6|=6。", emoji: "🥈" },
              { text: "加减:−9 + (−4) − 6 = −19,选 A!运算顺序、符号全考,你都拿下了!", emoji: "🏆" }
            ] }
        },
        {
          name: "🔥 终极 BOSS · 结营压轴大题",
          blocks: [
            { type: "text", html: "🏆 <b>终极 BOSS 战</b>:40 天的最后一题!方程应用压轴,拿出全部本领,冲刺满分!草稿纸准备!" }
          ],
          q: { type: "fill", points: 20, boss: true, voice: "zh",
            q: "结营联欢会,老师买了两种奖品:笔记本每本 6 元,钢笔每支 10 元,共买了 20 件,一共花了 152 元。设买了笔记本 x 本,则钢笔有 (20−x) 支,由「笔记本钱 + 钢笔钱 = 总钱数」得 6x + 10(20−x) = 152。请解出买了多少本笔记本?(直接填数字)",
            placeholder: "例如: 10",
            accept: ["12", "12本", "十二"],
            demoSteps: [
              { text: "笔记本 x 本花 6x 元,钢笔 (20−x) 支花 10(20−x) 元,共 152 元。", emoji: "🎁", scene: { type: "clues", items: [
                { head: "笔记本", text: "6x 元" },
                { head: "钢笔", text: "10(20−x) 元" },
                { head: "方程", text: "6x+10(20−x)=152" }
              ] } },
              { text: "去括号:6x + 200 − 10x = 152,移项合并求 x。", emoji: "🔄" }
            ],
            explain: "6x + 10(20−x) = 152;去括号:6x + 200 − 10x = 152;合并:−4x + 200 = 152;移项:−4x = −48;x = 12。买了 12 本笔记本(钢笔 8 支)。",
            explainSteps: [
              { text: "去括号:6x + 200 − 10x = 152。", emoji: "📦" },
              { text: "合并移项:−4x = 152 − 200 = −48 → x = 12。", emoji: "🔄" },
              { text: "12 本笔记本!验算:6×12 + 10×8 = 72+80 = 152,对!恩恩,你太棒了!🎉", emoji: "🏆" }
            ] }
        }
      ]
    },

    // ================== 英语 ==================
    {
      subject: "english", icon: "📚", title: "英语 · 结营总测评", minutes: 45,
      units: [
        {
          name: "毕业寄语 · 40 天英语之旅",
          blocks: [
            { type: "lesson", title: "▶ 从单词到句子,你能开口说了", steps: [
              { text: "恩恩,40 天英语之旅到终点啦!回想开营时,你还在认单词;现在你能用四大时态、各种句型表达自己了!", emoji: "🎓" },
              { text: "这个暑假你积累了几百个单词,掌握了:名词、代词、be动词、四大时态、情态动词、祈使句、There be、介词……", emoji: "📚", scene: { type: "clues", items: [
                { head: "词汇", text: "几百个单词" },
                { head: "时态", text: "四大时态" },
                { head: "句型", text: "各种句型" }
              ] } },
              { text: "你还读完了几十个英文经典故事——从龟兔赛跑到丑小鸭,从伊索寓言到安徒生童话。这是了不起的阅读量!", emoji: "📖" },
              { text: "最后一战:看信号词定时态,查主谓一致,阅读题回原文找依据。把六周的功夫都使出来!", emoji: "💪" },
              { text: "You did it! 能坚持读完这么多英文故事、掌握这么多语法,你已经为初中英语打下了坚实的基础。为你骄傲!", emoji: "🏆" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "综合选择,完全正确的一句是:",
            options: [
              "Look! The students are cleaning the classroom now, and they will finish it soon.",
              "Look! The students clean the classroom now, and they finished it soon.",
              "Look! The students are cleaning the classroom yesterday.",
              "Look! The students cleaned the classroom now, and they will finishes it soon."
            ], answer: 0,
            demoSteps: [
              { text: "Look!/now 是什么时态?soon 又提示什么时态?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "Look!/now", text: "→ 进行时" },
                { head: "soon", text: "→ 将来时 will" },
                { head: "will 后", text: "原形 finish" }
              ] } },
              { text: "前半句进行时(are cleaning),后半句将来时(will finish 原形)。", emoji: "✅" }
            ],
            explain: "A 正确:are cleaning(进行时,配 Look!/now)、will finish(将来时,配 soon,原形)。B 时态错;C 进行时配 yesterday 矛盾;D 时态和 finishes 都错。",
            explainSteps: [
              { text: "Look!/now 用进行时 are cleaning;soon 用将来时 will finish。", emoji: "⏱️" },
              { text: "A 两处时态都对，will 后用原形 finish，选 A！", emoji: "✅" },
              { text: "多时态综合题,看清每个信号词，一段话里可以有不同时态！", emoji: "🎯" }
            ] }
        },
        {
          name: "英文名著时光 · The Happy Prince(回顾)",
          blocks: [
            { type: "rule", title: "📖 名著名片", html: "<b>王尔德 Oscar Wilde</b>《快乐王子》——用最后一次回顾,记住这个关于奉献与爱的美丽故事。你已经读完了几十个英文经典!" },
            { type: "reading", speakable: true, title: "The Happy Prince", paragraphs: [
              "High above the city stands a beautiful statue — the Happy Prince. He is covered with gold, and his eyes are two bright jewels. One day, a little swallow rests at his feet.",
              "'Little swallow,' says the Prince, 'in the city there are poor and hungry people. Please take the gold and jewels from me and give them to those in need.'",
              "The kind swallow does as the Prince asks. Day by day, he carries the gold and jewels to the poor. The Prince becomes grey and dull, but the poor people are helped and happy.",
              "Winter comes, and the little swallow is too weak to fly away. He dies at the feet of the Prince. But their love and kindness are remembered forever. To give to others is the most beautiful thing of all."
            ], tip: "生词提示:statue 雕像 / swallow 燕子 / jewel 宝石 / poor 贫穷的 / remember 记住" }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "What is the main message of the story?(这个故事的主旨是什么?)",
            options: [
              "Gold and jewels are the most important things.",
              "Giving to others and kindness are the most beautiful things.",
              "The swallow should have flown away earlier.",
              "The Prince should keep his gold."
            ], answer: 1,
            demoSteps: [
              { text: "王子和燕子做了什么?故事最后一句点出了什么主旨?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "王子", text: "献出金子宝石" },
                { head: "燕子", text: "帮助穷人" },
                { head: "主旨", text: "奉献与爱最美" }
              ] } },
              { text: "结尾 To give to others is the most beautiful thing,点明主旨。", emoji: "💛" }
            ],
            explain: "B 正确。快乐王子献出自己的金子和宝石,小燕子帮助穷人,最后都为爱牺牲。故事告诉我们:奉献与善良,是世上最美的东西。",
            explainSteps: [
              { text: "王子和燕子把美好献给需要的人,自己却付出了一切。", emoji: "💛" },
              { text: "结尾点明:给予他人、心怀善良最美,选 B!", emoji: "✅" },
              { text: "读完几十个故事,你收获的不只是英语,还有这些温暖的道理。💫", emoji: "🎯" }
            ] }
        }
      ]
    },

    // ================== 语文 ==================
    {
      subject: "chinese", icon: "📝", title: "语文 · 结营总测评", minutes: 40,
      units: [
        {
          name: "毕业寄语 · 40 天语文之旅",
          blocks: [
            { type: "lesson", title: "▶ 从字词到阅读,你的底蕴更深了", steps: [
              { text: "恩恩,40 天语文之旅走到终点!这个暑假,你的语文底蕴悄悄变得更深厚了。", emoji: "🎓" },
              { text: "你复习了字音字形成语病句,学会了记叙文、说明文、议论文阅读,掌握了审题立意、开头结尾、细节描写等写作方法。", emoji: "📚", scene: { type: "clues", items: [
                { head: "基础", text: "字词·成语·病句" },
                { head: "阅读", text: "记叙·说明·议论" },
                { head: "写作", text: "审题·立意·细节" }
              ] } },
              { text: "你背下了七首古诗,读懂了《咏雪》《陈太丘与友期》《诫子书》,还读完了《西游记》和《朝花夕拾》!", emoji: "📖" },
              { text: "最后一战:基础题细心排查,阅读题回文找依据,古诗默写一字不错。规范作答,漂亮收官!", emoji: "💪" },
              { text: "「腹有诗书气自华」。这些诗词名篇会陪伴你一生,成为你最宝贵的财富。为坚持读书的你点赞!", emoji: "🏆" }
            ] }
          ],
          q: { type: "choice", points: 10, voice: "zh",
            q: "下列文学常识、名句搭配完全正确的一项是:",
            options: [
              "《诫子书》——诸葛亮——「非淡泊无以明志,非宁静无以致远」",
              "《西游记》——施耐庵——「三打白骨精」",
              "《观沧海》——王湾——「海日生残夜,江春入旧年」",
              "《朝花夕拾》——鲁迅——是一部长篇小说"
            ], answer: 0,
            demoSteps: [
              { text: "逐项核对「作品—作者—名句/常识」:哪一项三样全对?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "诫子书", text: "诸葛亮 ✓" },
                { head: "西游记", text: "吴承恩(不是施耐庵)" },
                { head: "观沧海", text: "曹操(不是王湾)" }
              ] } },
              { text: "把作者搞错、体裁说错的排除。", emoji: "🔍" }
            ],
            explain: "A 正确。B 错(《西游记》作者是吴承恩);C 错(《观沧海》作者是曹操,那句是王湾《次北固山下》的);D 错(《朝花夕拾》是散文集)。",
            explainSteps: [
              { text: "B:《西游记》是吴承恩,施耐庵写《水浒传》,错。", emoji: "❌" },
              { text: "C:《观沧海》是曹操的,那句名句出自王湾《次北固山下》,张冠李戴,错。", emoji: "❌" },
              { text: "D:《朝花夕拾》是散文集不是小说,错。A 全对,选 A!", emoji: "✅" }
            ] }
        },
        {
          name: "古诗文总测评 · 名句默写",
          blocks: [
            { type: "text", html: "✍️ <b>压轴默写</b>:这是 40 天古诗文的收官之题。静下心,把最经典的名句写对!" },
            { type: "rule", title: "📜 名句回顾", html: "回顾《诫子书》——诸葛亮告诫儿子修身养德的开篇名句。<b>「静以修身」</b>之后,还有一句讲『俭』的,想一想?" }
          ],
          q: { type: "fill", points: 10, voice: "zh",
            q: "默写:《诫子书》开篇「夫君子之行,静以修身,__________」。(填四个字,讲『俭』与『德』)",
            placeholder: "填四个字",
            accept: ["俭以养德", "俭以养德。", "俭以养德,"],
            demoSteps: [
              { text: "上句「静以修身」讲用宁静修养身心;下句对称,讲用什么培养品德?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "静以修身", text: "宁静→修身" },
                { head: "俭以养德", text: "节俭→养德" },
                { head: "对称", text: "结构一致" }
              ] } },
              { text: "「俭以养德」——用节俭培养品德。", emoji: "✍️" }
            ],
            explain: "答案:俭以养德。「静以修身,俭以养德」是《诫子书》开篇名句,讲君子靠宁静修身、靠节俭养德。",
            explainSteps: [
              { text: "下句「俭以养德」,与「静以修身」对称。", emoji: "📖" },
              { text: "君子:静以修身、俭以养德、淡泊明志、宁静致远。", emoji: "✅" },
              { text: "恩恩,愿你也做一个「淡泊宁静、志存高远」的人!🌟", emoji: "🏆" }
            ] }
        },
        {
          name: "结营彩蛋 · 40 天的礼物",
          blocks: [
            { type: "rule", title: "🎉 恭喜你,完成 40 天暑期提升计划!", html: "恩恩,你做到了!<b>40 关全部闯过,四科同步提升</b>。<br>这个暑假,你读了两部名著、几十个英文故事、七首古诗;学会了解方程、算几何、写作文、辨时态……<br>更重要的是,你养成了<b>每天坚持</b>的好习惯——这将是你受用一生的财富。<br><b>开学见,惊艳所有人!💪🌟</b>" }
          ],
          q: null
        }
      ]
    },

    // ================== 副科总测评 ==================
    {
      subject: "review", icon: "🔁", title: "副科 · 结营总测评", minutes: 25,
      units: [
        {
          name: "动画课堂 · 史地生政大回顾",
          blocks: [
            { type: "lesson", title: "▶ 四门副科,一次通关", steps: [
              { text: "结营总测评的最后一门——副科大回顾!这个暑假,历史、地理、生物、道法你都学了不少,今天一次通关。", emoji: "🎓" },
              { text: "历史:一条时间轴——先秦(春秋战国)→ 秦汉(秦统一、汉武帝、丝绸之路)→ 三国南北朝(赤壁、孝文帝改革)。", emoji: "🏺", scene: { type: "clues", items: [
                { head: "先秦", text: "春秋战国" },
                { head: "秦汉", text: "统一·丝绸之路" },
                { head: "三国", text: "赤壁·孝文帝" }
              ] } },
              { text: "地理:经纬网、地图三要素、海陆分布(七三)、天气气候、人口人种、聚落、发达/发展中国家。", emoji: "🌍" },
              { text: "生物:生物特征、细胞(植物多三样)、显微镜(倍数相乘、倒像)、光合作用(放氧气)、开花结果。", emoji: "🌱", scene: { type: "clues", items: [
                { head: "细胞", text: "基本单位" },
                { head: "光合作用", text: "放氧气" },
                { head: "结果", text: "子房→果实" }
              ] } },
              { text: "道法:成长立志、学会学习、认识自己、友谊师生亲情、敬畏生命。副科也精彩,你都掌握了!", emoji: "⚖️" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "下列副科知识的说法,完全正确的一项是:",
            options: [
              "秦始皇派张骞开辟了丝绸之路",
              "光合作用释放氧气,绿色植物是生物圈中的生产者",
              "天气是长期稳定的,气候是短时多变的",
              "显微镜放大倍数等于目镜倍数加物镜倍数"
            ], answer: 1,
            demoSteps: [
              { text: "四门都考:历史(丝路)、生物(光合)、地理(天气气候)、生物(放大倍数)。", emoji: "🔍", scene: { type: "clues", items: [
                { head: "丝绸之路", text: "汉武帝派张骞" },
                { head: "光合作用", text: "放氧气·生产者" },
                { head: "放大倍数", text: "目镜×物镜" }
              ] } },
              { text: "把人物错、天气气候反、放大倍数(应相乘)的排除。", emoji: "🔍" }
            ],
            explain: "B 正确。A 错(是汉武帝派张骞,不是秦始皇);C 错(天气短时多变、气候长期稳定,说反了);D 错(放大倍数是相乘)。",
            explainSteps: [
              { text: "A:开辟丝路是汉武帝派张骞,不是秦始皇,错。", emoji: "❌" },
              { text: "C:天气短时多变、气候长期稳定,C 说反了,错;D:放大倍数相乘,错。", emoji: "❌" },
              { text: "B:光合作用放氧气,绿色植物是生产者,正确!选 B。🎉", emoji: "✅" }
            ] }
        }
      ]
    }
  ]
};
