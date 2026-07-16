// ============ 第 21 关 ============
window.DAYS = window.DAYS || {};

window.DAYS[21] = {
  day: 21,
  title: "第 21 关 · 第三周大盘点",
  estimate: "四科约 2~3 小时 · 共 7 道闯关题(含 1 道 BOSS 题)",
  sections: [
    // ================== 数学 ==================
    {
      subject: "math", icon: "🔢", title: "数学 · 代数式与整式总复盘", minutes: 45,
      units: [
        {
          name: "动画课堂 · 从字母到整式的一条线",
          blocks: [
            { type: "lesson", title: "▶ 这一周,我们学会了用字母算数", steps: [
              { text: "第三周是「代数」入门周!从用字母表示数,到整式加减,连成一条线,今晚复盘。", emoji: "🗺️" },
              { text: "起点:用字母表示数、列代数式(关系词定运算,和差的倍加括号);代入求值(代要加括号,能简先简)。", emoji: "🔤", scene: { type: "clues", items: [
                { head: "列式", text: "关系词→运算" },
                { head: "求值", text: "代入加括号" },
                { head: "技巧", text: "先化简再求值" }
              ] } },
              { text: "整式家族:单项式(看系数、次数)、多项式(找项、看最高次、常数项)。判断同类项:字母同、指数同。", emoji: "👨‍👩‍👧" },
              { text: "两大化简招:合并同类项(系数相加,字母指数不变)、去括号(前+不变号,前−全变号)。", emoji: "🧹", scene: { type: "clues", items: [
                { head: "合并", text: "系数并·指数不变" },
                { head: "去括号+", text: "不变号" },
                { head: "去括号−", text: "全变号" }
              ] } },
              { text: "整式加减 = 去括号 + 合并。相减记得先加括号、再全变号。这一周的地基,决定下周方程学得稳不稳!", emoji: "🏗️" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "化简 3(2x − 1) − 2(x + 3) 的结果是:",
            options: ["4x − 9", "4x + 3", "8x − 9", "4x − 3"], answer: 0,
            demoSteps: [
              { text: "先去括号:数字要乘进每一项!3×(2x−1) 和 −2×(x+3)。", emoji: "🔄", scene: { type: "clues", items: [
                { head: "3(2x−1)", text: "= 6x − 3" },
                { head: "−2(x+3)", text: "= −2x − 6" },
                { head: "合并", text: "同类项相加" }
              ] } },
              { text: "注意 −2 乘 (x+3) 时,x 和 3 都要乘 −2。", emoji: "⚠️" }
            ],
            explain: "3(2x−1)=6x−3;−2(x+3)=−2x−6。合并:6x−2x=4x,−3−6=−9,得 4x−9。选 A。",
            explainSteps: [
              { text: "去括号:3(2x−1)=6x−3;−2(x+3)=−2x−6(−2 乘每一项!)。", emoji: "🔄" },
              { text: "得 6x − 3 − 2x − 6。", emoji: "📦" },
              { text: "合并:4x − 9,选 A!C 忘了 x 前系数,D 常数算错。", emoji: "✅" }
            ] }
        },
        {
          name: "🔥 BOSS 挑战 · 化简求值压轴",
          blocks: [
            { type: "text", html: "💪 <b>BOSS 战规则</b>:第三周本领全上场!先去括号、再合并、最后代入。稳住,一步步来。草稿纸准备!" }
          ],
          q: { type: "fill", points: 20, boss: true, voice: "zh",
            q: "先化简,再求值:2(a² − 2a) − (a² − 3a),其中 a = −2。请算出最后的值。(直接填数字,含正负号)",
            placeholder: "例如: 5",
            accept: ["6", "+6", "六"],
            demoSteps: [
              { text: "先去括号:2(a²−2a)=2a²−4a;−(a²−3a)=−a²+3a(前面减号全变号!)。", emoji: "🔄", scene: { type: "clues", items: [
                { head: "2(a²−2a)", text: "2a²−4a" },
                { head: "−(a²−3a)", text: "−a²+3a" },
                { head: "合并", text: "a²−a" }
              ] } },
              { text: "合并:2a²−a²=a²,−4a+3a=−a,化简成 a²−a,再代 a=−2。", emoji: "🧹" }
            ],
            explain: "去括号:2a²−4a−a²+3a;合并:a²−a。代入 a=−2:(−2)²−(−2)=4+2=6。",
            explainSteps: [
              { text: "去括号:2a²−4a −a²+3a(减号后全变号)。", emoji: "🔄" },
              { text: "合并:a² − a。", emoji: "🧹" },
              { text: "代入 a=−2:(−2)² − (−2) = 4 + 2 = 6!", emoji: "🏆" },
              { text: "先化简再代入,又快又准。三大易错点(变号、指数、代负数括号)你都躲过了吗?", emoji: "🎯" }
            ] }
        }
      ]
    },

    // ================== 英语 ==================
    {
      subject: "english", icon: "📚", title: "英语 · 第三周语法回炉", minutes: 45,
      units: [
        {
          name: "单词大挑战 · 一周高频词抽查(点卡片听发音!)",
          blocks: [
            { type: "text", html: "🎧 这周学了<span class='hl'>进行时、情态、祈使、介词</span>!抽 10 个再听一遍,巩固发音。" },
            { type: "flashcards", words: [
              { word: "now", phonetic: "/naʊ/", cn: "现在", sentence: "She is cooking now." },
              { word: "listen", phonetic: "/ˈlɪsn/", cn: "听", sentence: "Listen! A bird is singing." },
              { word: "can", phonetic: "/kæn/", cn: "能;会", sentence: "I can ride a bike." },
              { word: "must", phonetic: "/mʌst/", cn: "必须", sentence: "You must be quiet." },
              { word: "open", phonetic: "/ˈəʊpən/", cn: "打开", sentence: "Open the window, please." },
              { word: "quiet", phonetic: "/ˈkwaɪət/", cn: "安静的", sentence: "Be quiet in the library." },
              { word: "in", phonetic: "/ɪn/", cn: "在…里", sentence: "The pen is in the box." },
              { word: "on", phonetic: "/ɒn/", cn: "在…上", sentence: "The book is on the desk." },
              { word: "at", phonetic: "/æt/", cn: "在(点)", sentence: "We meet at six." },
              { word: "morning", phonetic: "/ˈmɔːnɪŋ/", cn: "早晨", sentence: "I run in the morning." }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 · 四大语法点一次串",
          blocks: [
            { type: "lesson", title: "▶ 进行时·情态·祈使·介词", steps: [
              { text: "第三周英语学了四大块。今晚一次性串起来,考试信手拈来。", emoji: "🧩" },
              { text: "现在进行时:be + 动词ing,表此刻正在;信号词 now/Look/Listen。别忘了 be,别错 ing。", emoji: "⏱️", scene: { type: "clues", items: [
                { head: "进行时", text: "be + ing" },
                { head: "情态动词", text: "+ 动词原形" },
                { head: "祈使句", text: "动词原形开头" }
              ] } },
              { text: "情态动词 can/must:后面永远跟动词原形;否定加 not(can't/mustn't),不用 don't。", emoji: "💪" },
              { text: "祈使句:动词原形开头(省略 you);否定加 Don't;加 please 更礼貌。", emoji: "📢" },
              { text: "介词 in/on/at:大范围/较长时段用 in,表面/具体某天用 on,一点/时刻用 at(at night!)。四块打通!", emoji: "📍" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "选出完全正确的一句:",
            options: [
              "Look! The children can playing in the park now.",
              "Look! The children are playing in the park now.",
              "Look! The children are play in the park at now.",
              "Look! The children playing in the park now."
            ], answer: 1,
            demoSteps: [
              { text: "Look! + now 提示什么时态?结构是什么?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "Look!/now", text: "现在进行时" },
                { head: "结构", text: "be + ing" },
                { head: "检查", text: "be 有没有·ing 对不对" }
              ] } },
              { text: "进行时要 be + ing,不能和情态动词混用,now 前不加 at。", emoji: "✅" }
            ],
            explain: "B 正确:are playing(be+ing),now 直接用不加介词。A can 和 ing 不能混用;C 用了原形 play 且 at now 错;D 漏了 be 动词。",
            explainSteps: [
              { text: "A:can + playing 情态和进行混用,错。", emoji: "❌" },
              { text: "C:are + play 应为 playing,且 now 前不加 at,错。", emoji: "❌" },
              { text: "D:漏了 be 动词 are,错。", emoji: "❌" },
              { text: "B:are playing + now,进行时结构完整!选 B。", emoji: "✅" }
            ] }
        },
        {
          name: "英文名著时光 · The Elves and the Shoemaker",
          blocks: [
            { type: "rule", title: "📖 名著名片", html: "<b>格林兄弟 Grimm</b>《小精灵与鞋匠》——善良的鞋匠夜里得到小精灵的帮助,好心终有好报。" },
            { type: "reading", speakable: true, title: "The Elves and the Shoemaker", paragraphs: [
              "A poor shoemaker has only enough leather for one pair of shoes. At night he cuts the leather and goes to bed. In the morning, he finds a beautiful pair of shoes on his table! Someone has made them.",
              "He sells the shoes for a good price and buys more leather. Again, in the morning, the shoes are ready. This happens night after night, and soon the shoemaker is not poor any more.",
              "One night, the shoemaker and his wife hide to see who helps them. At midnight, two little elves come. They work fast and make the shoes, but they have no clothes and look cold.",
              "To thank them, the wife makes tiny clothes for the elves. When the elves see the gifts, they are so happy that they dance away and never come back. But the shoemaker never forgets their kindness."
            ], tip: "生词提示:leather 皮革 / shoemaker 鞋匠 / elf 小精灵 / midnight 午夜 / gift 礼物" }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "How does the wife thank the elves?(鞋匠的妻子怎样感谢小精灵?)",
            options: [
              "She gives them money.",
              "She makes tiny clothes for them.",
              "She makes shoes for them.",
              "She gives them food."
            ], answer: 1,
            demoSteps: [
              { text: "妻子发现小精灵没有衣服、看起来很冷,于是做了什么?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "精灵", text: "no clothes, look cold" },
                { head: "妻子", text: "makes tiny clothes" },
                { head: "精灵", text: "so happy, dance away" }
              ] } },
              { text: "原文 the wife makes tiny clothes for the elves。", emoji: "🧵" }
            ],
            explain: "B 正确。妻子看到小精灵没有衣服、很冷,就为它们做了小小的衣服作为感谢。",
            explainSteps: [
              { text: "小精灵夜夜帮忙却衣衫单薄。", emoji: "🧝" },
              { text: "妻子做了小衣服感谢它们,选 B!", emoji: "✅" },
              { text: "善良互相传递:精灵帮鞋匠,鞋匠夫妇也回报善意。好心终有好报。", emoji: "🎯" }
            ] }
        }
      ]
    },

    // ================== 语文 ==================
    {
      subject: "chinese", icon: "📝", title: "语文 · 第三周古文与阅读盘点", minutes: 40,
      units: [
        {
          name: "动画课堂 · 《论语》与写作方法复盘",
          blocks: [
            { type: "lesson", title: "▶ 名句·描写·审题立意", steps: [
              { text: "第三周语文:背了《论语》十二章,学了人物描写、审题立意,读了《西游记》。今晚复盘。", emoji: "📝" },
              { text: "《论语》记牢:学思结合(学而不思则罔)、温故知新、三人行必有我师、三省吾身。还有通假字「说=悦」。", emoji: "📜", scene: { type: "clues", items: [
                { head: "学思结合", text: "学而不思则罔" },
                { head: "虚心求学", text: "三人行必有我师" },
                { head: "通假字", text: "说=悦" }
              ] } },
              { text: "人物描写五种:外貌、语言、动作、神态、心理;还有于细微处见真情的「细节描写」。", emoji: "🎨" },
              { text: "写作两步:审题(圈题眼、看范围、记要求,防跑题)、立意(正确、集中、深刻,以小见大)。", emoji: "🎯", scene: { type: "clues", items: [
                { head: "审题", text: "圈题眼·防跑题" },
                { head: "立意", text: "正确·集中·深刻" },
                { head: "技巧", text: "以小见大" }
              ] } },
              { text: "名著《西游记》:吴承恩、明代、四大名著;记人物性格、经典情节;会用精读跳读。基础题稳拿分!", emoji: "🐒" }
            ] }
          ],
          q: { type: "choice", points: 10, voice: "zh",
            q: "下列关于本周语文知识的说法,错误的一项是:",
            options: [
              "「学而不思则罔,思而不学则殆」强调学习与思考要结合",
              "「他攥紧拳头,咬着嘴唇」属于动作描写",
              "《西游记》的作者是明代的施耐庵",
              "写作文第一步要审题,防止跑题"
            ], answer: 2,
            demoSteps: [
              { text: "《西游记》的作者是谁?施耐庵写的是哪部名著?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "西游记", text: "吴承恩" },
                { head: "水浒传", text: "施耐庵" },
                { head: "别搞混", text: "作者对应作品" }
              ] } },
              { text: "找出作者张冠李戴的一句。", emoji: "🎭" }
            ],
            explain: "C 错。《西游记》的作者是吴承恩,施耐庵写的是《水浒传》。其余三项都正确。",
            explainSteps: [
              { text: "《西游记》作者是吴承恩;施耐庵是《水浒传》的作者。", emoji: "📚" },
              { text: "C 把作者搞混了!选 C。", emoji: "❌" },
              { text: "A 论语、B 动作描写、D 审题都对。名著题记牢「作者—朝代—作品」的对应!", emoji: "✅" }
            ] }
        },
        {
          name: "动画课堂 · 古诗默写周清",
          blocks: [
            { type: "lesson", title: "▶ 《江南逢李龟年》名句回顾", steps: [
              { text: "本周新学杜甫《江南逢李龟年》。默写送分题,今晚再过一遍。", emoji: "✍️" },
              { text: "全诗:岐王宅里寻常见,崔九堂前几度闻。正是江南好风景,落花时节又逢君。", emoji: "🍂", scene: { type: "clues", items: [
                { head: "写盛世", text: "岐王宅里·崔九堂前" },
                { head: "写重逢", text: "落花时节又逢君" },
                { head: "双关", text: "落花时节" }
              ] } },
              { text: "理解性默写要点:「一语双关、以乐景写哀情」的句子是「正是江南好风景,落花时节又逢君」。", emoji: "🎭" },
              { text: "默写口诀再念:三查一读——查错别字、查漏字、查串句,写完回读一遍。送分题一分不丢!", emoji: "✅" }
            ] }
          ],
          q: { type: "fill", points: 10, voice: "zh",
            q: "默写:《江南逢李龟年》中以美好春景反衬凄凉重逢、含蓄深沉的两句是「正是江南好风景,__________」。(填后半句)",
            placeholder: "填七个字",
            accept: ["落花时节又逢君", "落花时节又逢君。", "落花时节又逢君,"],
            demoSteps: [
              { text: "上句写「江南好风景」,下句写在什么时节又遇见了谁?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "上句", text: "正是江南好风景" },
                { head: "下句", text: "落花时节·逢君" },
                { head: "双关", text: "落花=衰败" }
              ] } },
              { text: "「落花时节又逢君」既写暮春,又暗喻晚景凄凉。", emoji: "🍂" }
            ],
            explain: "答案:落花时节又逢君。用江南美景反衬重逢的凄凉,「落花时节」一语双关,含蓄深沉。",
            explainSteps: [
              { text: "下句「落花时节又逢君」,表面暮春,深层写沧桑。", emoji: "🍂" },
              { text: "这是「以乐景写哀情、一语双关」的名句。", emoji: "🎭" },
              { text: "答对了!理解性默写抓住题干关键词就能准确对句。", emoji: "✅" }
            ] }
        },
        {
          name: "今日彩蛋 · 名著打卡",
          blocks: [
            { type: "rule", title: "📖 睡前 20 分钟名著时间", html: "第三周收官!今晚合上<b>《西游记》</b>,用「三省吾身」问问自己:<b>这三周,我坚持下来了吗?学到的东西复习了吗?</b><br>已经走完一大半啦!像取经的师徒一样,坚持到底,你一定能取得属于自己的「真经」!" }
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
          name: "动画课堂 · 第三周副科精华",
          blocks: [
            { type: "lesson", title: "▶ 历史·地理·生物·道法各记一个关键词", steps: [
              { text: "第三周副科:历史讲秦汉大一统,地理讲海陆与天气气候,生物讲生物与环境,道法讲友谊。逐一回顾。", emoji: "🎒" },
              { text: "历史:秦始皇统一(前221年,建郡县制、统一文字货币度量衡);汉武帝巩固(推恩令、尊崇儒术)。", emoji: "👑", scene: { type: "clues", items: [
                { head: "秦始皇", text: "首创统一·郡县制" },
                { head: "汉武帝", text: "推恩令·尊儒术" },
                { head: "别混", text: "焚书坑儒是秦" }
              ] } },
              { text: "地理:七分海洋(71%)三分陆地(29%);天气「短时多变」,气候「长期稳定」,看时间词区分。", emoji: "🌍", scene: { type: "clues", items: [
                { head: "海陆", text: "海 71%·陆 29%" },
                { head: "天气", text: "今天/明天" },
                { head: "气候", text: "常年/四季" }
              ] } },
              { text: "生物:生物与环境相互影响——环境影响生物(仙人掌叶变刺),生物也适应并改变环境。", emoji: "🌵" },
              { text: "道法:真正的友谊要真诚、平等、有原则;讲原则不等于讲「哥们义气」,朋友做错事要劝阻。", emoji: "🤝" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "下列关于第三周副科知识的说法,错误的一项是:",
            options: [
              "秦始皇统一后在地方推行郡县制",
              "海洋约占地球表面的 71%,比陆地大",
              "「昆明四季如春」描述的是天气",
              "仙人掌的叶退化成刺是生物适应环境的表现"
            ], answer: 2,
            demoSteps: [
              { text: "「四季如春」讲的是短时还是长期?是天气还是气候?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "四季如春", text: "常年状况" },
                { head: "长期稳定", text: "→ 气候" },
                { head: "别记反", text: "不是天气" }
              ] } },
              { text: "对照历史、地理、生物三条,找出唯一说错的。", emoji: "🔍" }
            ],
            explain: "C 错。「四季如春」是常年、长期的状况,描述的是气候,不是天气。其余三项都正确。",
            explainSteps: [
              { text: "「四季如春」讲昆明常年的状况,是气候不是天气,C 错!", emoji: "🌡️" },
              { text: "A 郡县制、B 海陆比例、D 生物适应环境,都正确。", emoji: "✅" },
              { text: "选 C。天气看当下、气候看常年,一字之差别搞混!", emoji: "🎯" }
            ] }
        }
      ]
    }
  ]
};
