// ============ 第 1 天 ============
// 每个知识点(unit)= 学习内容 + 1 道对应的题目,学完马上做
// 数学 8 题×4分 + 英语 8 题×4分 + 语文 6 题×4分 + 历史 3 题×4分 = 25 题 100 分
window.DAYS = window.DAYS || {};

window.DAYS[1] = {
  day: 1,
  title: "第 1 天 · 开营第一课",
  estimate: "四科共约 3~3.5 小时,建议每学完一科休息 10 分钟",
  sections: [
    // ================== 数学 ==================
    {
      subject: "math", icon: "🔢", title: "数学 · 分数运算复习 & 认识负数", minutes: 70,
      units: [
        {
          name: "知识点 1 · 分数加减法",
          blocks: [
            { type: "text", html: "欢迎来到暑假冲刺营第一天!🎉 初一数学第一章是<span class='hl'>有理数</span>,需要扎实的分数运算基础,我们先复习。" },
            { type: "rule", title: "📌 分数加减法", html: "<div class='formula'>同分母:分母不变,分子相加减</div><div class='formula'>异分母:先通分,再相加减</div>通分通常用两个分母的<b>最小公倍数</b>作公分母。" },
            { type: "example", q: "例题:计算 1/2 + 1/3", steps: "2 和 3 的最小公倍数是 6:1/2 = 3/6,1/3 = 2/6<br>3/6 + 2/6 = <b class='ex-ans'>5/6</b>" }
          ],
          q: { type: "choice", points: 4, q: "轮到你了!计算:1/3 + 1/4 = ?",
            options: ["2/7", "7/12", "1/12", "4/7"], answer: 1,
            explain: "通分:1/3 = 4/12,1/4 = 3/12,相加 = 7/12。分子分母不能直接相加哦!" }
        },
        {
          name: "知识点 2 · 分数乘法",
          blocks: [
            { type: "rule", title: "📌 分数乘法", html: "<div class='formula'>分子乘分子,分母乘分母</div>计算前先<b>约分</b>,数字小了就不容易错!" },
            { type: "example", q: "例题:计算 3/4 × 8/9", steps: "先约分:3 与 9 约去 3,4 与 8 约去 4<br>= (1×2)/(1×3) = <b class='ex-ans'>2/3</b>" }
          ],
          q: { type: "choice", points: 4, q: "计算:2/3 × 6/7 = ?",
            options: ["8/21", "12/14", "4/7", "3/7"], answer: 2,
            explain: "先约分:3 和 6 约成 1 和 2,= (2×2)/(1×7) = 4/7。12/14 没约分,不是最简结果。" }
        },
        {
          name: "知识点 3 · 分数除法",
          blocks: [
            { type: "rule", title: "📌 分数除法", html: "<div class='formula'>除以一个数 = 乘这个数的倒数</div>口诀:除法翻个身(把除数分子分母颠倒,除号变乘号)。" },
            { type: "example", q: "例题:计算 2/5 ÷ 4/15", steps: "= 2/5 × 15/4,约分:2 与 4 约、5 与 15 约<br>= (1×3)/(1×2) = <b class='ex-ans'>3/2</b>" }
          ],
          q: { type: "choice", points: 4, q: "计算:3/5 ÷ 9/10 = ?",
            options: ["27/50", "2/3", "3/2", "6/5"], answer: 1,
            explain: "= 3/5 × 10/9,约分:3 与 9 约成 1 和 3,5 与 10 约成 1 和 2,= 2/3。" }
        },
        {
          name: "知识点 4 · 为什么需要负数?",
          blocks: [
            { type: "text", html: "生活中有很多<span class='hl'>相反意义的量</span>:零上 3℃ 和零下 3℃、收入和支出、地上楼层和地下楼层……只用正数和 0 不够表达,数学家发明了<span class='hl'>负数</span>。点下面的按钮感受一下👇" },
            { type: "thermometer" }
          ],
          q: { type: "choice", points: 4, q: "天气预报说哈尔滨今天最低气温是零下 8℃,应记作?",
            options: ["+8℃", "8℃", "−8℃", "0.8℃"], answer: 2,
            explain: "零下的温度用负数表示,零下 8℃ 记作 −8℃。" }
        },
        {
          name: "知识点 5 · 正数、负数与 0",
          blocks: [
            { type: "rule", title: "📌 正数与负数", html: "<div class='formula'>比 0 大的数叫 <b>正数</b>,如 +3、5、1.8</div><div class='formula'>在正数前面加「−」号的数叫 <b>负数</b>,如 −3、−0.5</div><b>0 既不是正数,也不是负数</b>,它是分界线!正数的「+」通常省略,+3 和 3 是同一个数。" }
          ],
          q: { type: "choice", points: 4, q: "下列说法正确的是?",
            options: ["0 是正数", "0 是负数", "0 既不是正数也不是负数", "−0.5 不是负数"], answer: 2,
            explain: "0 是正负数的分界线,既不是正数也不是负数;−0.5 带负号,是负数。" }
        },
        {
          name: "知识点 6 · 数轴",
          blocks: [
            { type: "rule", title: "📌 数轴", html: "规定了<b>原点、正方向、单位长度</b>的直线叫<b>数轴</b>。<div class='formula'>原点右边是正数,左边是负数</div>" },
            { type: "numberline" }
          ],
          q: { type: "choice", points: 4, q: "在数轴上,位于原点左边 4 个单位长度的点表示的数是?",
            options: ["4", "+4", "−4", "0"], answer: 2,
            explain: "原点左边是负数,距离原点 4 个单位,就是 −4。" }
        },
        {
          name: "知识点 7 · 相反意义的量",
          blocks: [
            { type: "example", q: "例题:向东走 50 米记作 +50 米,那么向西走 30 米记作?", steps: "向东为正,相反方向(向西)就为负。<br>记作 <b class='ex-ans'>−30 米</b>" }
          ],
          q: { type: "choice", points: 4, q: "如果收入 200 元记作 +200 元,那么支出 80 元记作?",
            options: ["+80 元", "−80 元", "80 元", "−200 元"], answer: 1,
            explain: "收入为正,支出为负,支出 80 元记作 −80 元。" }
        },
        {
          name: "知识点 8 · 负数比大小",
          blocks: [
            { type: "rule", title: "📌 比较大小", html: "<div class='formula'>数轴上越往右的数越大</div>所以:任何负数 &lt; 0 &lt; 任何正数。<br>两个负数比较:「数字部分」越大的反而越小!" },
            { type: "text", html: "💡 <b>易错提醒</b>:很多同学以为 −5 比 −2 大。记住负数是「欠债」,欠 5 元比欠 2 元更穷!😄" }
          ],
          q: { type: "choice", points: 4, q: "下列比较正确的是?",
            options: ["−5 > −2", "−1 > 0", "−3 < −7", "−2 > −6"], answer: 3,
            explain: "−2 在数轴上位于 −6 右边,所以 −2 > −6。" }
        }
      ]
    },

    // ================== 英语 ==================
    {
      subject: "english", icon: "📚", title: "英语 · 校园词汇 & Be 动词", minutes: 65,
      units: [
        {
          name: "知识点 1 · 校园场所词汇(6 个)",
          blocks: [
            { type: "text", html: "初中校园生活即将开始!点击卡片翻面看中文和例句,<span class='hl'>每个单词大声读 3 遍</span>,再在草稿纸上默写一遍。" },
            { type: "flashcards", words: [
              { word: "classroom", phonetic: "/ˈklɑːsruːm/", cn: "教室", sentence: "Our classroom is big and bright." },
              { word: "library", phonetic: "/ˈlaɪbrəri/", cn: "图书馆", sentence: "I read books in the library." },
              { word: "playground", phonetic: "/ˈpleɪɡraʊnd/", cn: "操场", sentence: "We play football on the playground." },
              { word: "uniform", phonetic: "/ˈjuːnɪfɔːm/", cn: "校服", sentence: "Students wear uniforms at school." },
              { word: "timetable", phonetic: "/ˈtaɪmteɪbl/", cn: "课程表", sentence: "Here is our class timetable." },
              { word: "dictionary", phonetic: "/ˈdɪkʃənri/", cn: "词典", sentence: "Look up new words in the dictionary." }
            ] }
          ],
          q: { type: "choice", points: 4, q: "「图书馆」的英文是?",
            options: ["playground", "library", "classroom", "uniform"], answer: 1,
            explain: "library 图书馆;playground 操场;classroom 教室;uniform 校服。" }
        },
        {
          name: "知识点 2 · 学习生活词汇(6 个)",
          blocks: [
            { type: "flashcards", words: [
              { word: "teacher", phonetic: "/ˈtiːtʃə/", cn: "老师", sentence: "Ms. Li is my English teacher." },
              { word: "student", phonetic: "/ˈstjuːdənt/", cn: "学生", sentence: "I am a middle school student." },
              { word: "subject", phonetic: "/ˈsʌbdʒɪkt/", cn: "学科;科目", sentence: "Math is my favorite subject." },
              { word: "science", phonetic: "/ˈsaɪəns/", cn: "科学", sentence: "We have a science lab at school." },
              { word: "history", phonetic: "/ˈhɪstri/", cn: "历史", sentence: "History is very interesting." },
              { word: "homework", phonetic: "/ˈhəʊmwɜːk/", cn: "家庭作业", sentence: "I do my homework every evening." }
            ] }
          ],
          q: { type: "fill", points: 4, q: "根据中文写单词:学科、科目 → s________(写出完整单词)",
            accept: ["subject"],
            explain: "subject /ˈsʌbdʒɪkt/ 学科。Math is my favorite subject." }
        },
        {
          name: "知识点 3 · Be 动词三兄弟",
          blocks: [
            { type: "text", html: "Be 动词(am / is / are)是英语句子的「骨架」,意思是「是;在」。不同主语搭配不同的 Be 动词。" },
            { type: "rule", title: "📌 搭配规则", html: "<div class='formula'>I → am | he / she / it / 单数名词 → is | you / we / they / 复数名词 → are</div>" },
            { type: "chant", lines: ["我用 am,你用 are,", "is 连着他、她、它;", "单数名词用 is,", "复数全部都用 are。"] }
          ],
          q: { type: "choice", points: 4, q: "I ______ a middle school student.",
            options: ["am", "is", "are", "be"], answer: 0,
            explain: "主语是 I,搭配 am。口诀第一句:我用 am!" }
        },
        {
          name: "知识点 4 · is 还是 are?看主语!",
          blocks: [
            { type: "example", q: "例句观察:找出 Be 动词和它的主语", steps: "She <b>is</b> my English teacher.(She 单数 → is)<br>They <b>are</b> in the library.(They 复数 → are)<br>The book <b>is</b> on the desk.(单数名词 → is)<br>The books <b>are</b> on the desk.(复数名词 → are)" },
            { type: "text", html: "💡 <b>易错提醒</b>:主语是 <b>my brother</b>(单数)用 is;<b>my brothers</b>(复数)用 are。关键看主语是「一个」还是「多个」!" }
          ],
          q: { type: "choice", points: 4, q: "The books ______ on the desk.",
            options: ["am", "is", "are", "be"], answer: 2,
            explain: "主语 The books 是复数名词,搭配 are。" }
        },
        {
          name: "知识点 5 · Be 动词否定句",
          blocks: [
            { type: "rule", title: "📌 否定句:Be 后面加 not", html: "<div class='formula'>主语 + be + not + 其他</div>She is <b>not</b> (isn't) a teacher.<br>We are <b>not</b> (aren't) at home.<br>缩写:is not → isn't,are not → aren't。" }
          ],
          q: { type: "fill", points: 4, q: "改为否定句:They are in the library. → They ______ in the library.(填两个单词或缩写)",
            accept: ["are not", "aren't", "arent"],
            explain: "Be 动词否定句直接在后面加 not:are not,缩写 aren't。" }
        },
        {
          name: "知识点 6 · Be 动词一般疑问句",
          blocks: [
            { type: "rule", title: "📌 疑问句:Be 提到句首", html: "<div class='formula'>Be + 主语 + 其他?</div><b>Is</b> she a teacher? — Yes, she is. / No, she <b>isn't</b>.<br><b>Are</b> you ready? — Yes, I am. / No, I'm not.<br>回答时也要用 Be 动词哦!" }
          ],
          q: { type: "choice", points: 4, q: "______ your sister a doctor? — No, she ______.",
            options: ["Is; is", "Is; isn't", "Are; isn't", "Am; is"], answer: 1,
            explain: "主语 your sister 是单数,用 Is 开头;回答 No 时配 isn't。" }
        },
        {
          name: "知识点 7 · 阅读理解:My New School(第一遍)",
          blocks: [
            { type: "text", html: "把刚学的单词和 Be 动词用起来!认真读短文,<span class='hl'>不认识的单词先猜意思</span>。" },
            { type: "reading", title: "My New School", paragraphs: [
              "Hello! My name is Li Ming. I am twelve years old. In September, I will be a student at Sunshine Middle School.",
              "My new school is big and beautiful. There are thirty classrooms in the teaching building. The library is next to the playground. There are many interesting books in it. I love reading, so the library is my favorite place.",
              "My favorite subject is science, because it is fun. My sister likes history. She says history is like a time machine.",
              "At my new school, students wear blue uniforms. I think they are cool. I can't wait for the new term!"
            ], tip: "生词提示:September 九月 / teaching building 教学楼 / next to 在…旁边 / time machine 时光机 / term 学期" }
          ],
          q: { type: "choice", points: 4, q: "【阅读】How old is Li Ming?",
            options: ["Eleven.", "Twelve.", "Thirteen.", "Ten."], answer: 1,
            explain: "原文第一段:I am twelve years old.(我 12 岁)" }
        },
        {
          name: "知识点 8 · 阅读理解:抓细节(第二遍)",
          blocks: [
            { type: "text", html: "好文章要读两遍!第二遍<span class='hl'>带着问题找细节</span>:李明最喜欢的科目是什么?喜欢历史的是谁?图书馆在哪里?——回到上面的短文再读一遍,然后作答。" }
          ],
          q: { type: "choice", points: 4, q: "【阅读】What is Li Ming's favorite subject?",
            options: ["History.", "Math.", "Science.", "English."], answer: 2,
            explain: "原文:My favorite subject is science. 喜欢 history 的是他姐姐,别掉进陷阱!" }
        }
      ]
    },

    // ================== 语文 ==================
    {
      subject: "chinese", icon: "📝", title: "语文 · 易错字音字形 & 古诗《观沧海》", minutes: 45,
      units: [
        {
          name: "知识点 1 · 初一易错字音",
          blocks: [
            { type: "text", html: "初一语文第一关是<span class='hl'>字音</span>。下面是七年级课文里最容易读错的字,大声读 3 遍:" },
            { type: "rule", title: "📌 易错字音表", html: "确<b>凿</b>(záo) · 菜<b>畦</b>(qí) · 酝<b>酿</b>(niàng) · 应<b>和</b>(hè) · <b>憔悴</b>(qiáo cuì) · 分<b>歧</b>(qí) · <b>徘徊</b>(pái huái) · <b>贮</b>蓄(zhù)" }
          ],
          q: { type: "choice", points: 4, q: "「应和」的「和」正确读音是?",
            options: ["hé", "hè", "huó", "huò"], answer: 1,
            explain: "「应和」指声音相呼应,读 hè。「和」是多音字:和平 hé、应和 hè、和面 huó、和药 huò。" }
        },
        {
          name: "知识点 2 · 易错字形",
          blocks: [
            { type: "rule", title: "📌 易写错的词语", html: "翻来<b>覆</b>去(不是「复」) · 各得其<b>所</b> · 花团锦<b>簇</b> · 人声<b>鼎</b>沸 · 截然不同 · 小心<b>翼翼</b> · 人迹<b>罕</b>至 · 疲惫不<b>堪</b>" },
            { type: "text", html: "💡 <b>记忆窍门</b>:「翻来覆去」的「覆」是翻转的意思,和「覆盖」同字;「人声鼎沸」的「鼎」是古代大锅,人声像锅里的水沸腾。理解了意思就不会写错!" }
          ],
          q: { type: "choice", points: 4, q: "下列词语书写完全正确的一项是?",
            options: ["翻来复去 人声鼎沸", "花团锦簇 小心翼翼", "各得其索 截然不同", "人迹汗至 疲惫不堪"], answer: 1,
            explain: "A 应为「翻来覆去」;C 应为「各得其所」;D 应为「人迹罕至」。" }
        },
        {
          name: "知识点 3 · 成语运用",
          blocks: [
            { type: "rule", title: "📌 四个常考成语", html: "<b>喜出望外</b>:遇到意外的好事而高兴<br><b>小心翼翼</b>:举动十分谨慎<br><b>人迹罕至</b>:很少有人去的地方<br><b>不求甚解</b>:读书只求大概,不求深入(常含贬义)" }
          ],
          q: { type: "choice", points: 4, q: "选出成语使用正确的一句:",
            options: ["他做题总是不求甚解,成绩稳步提升。", "听说爸爸要带我去北京,我喜出望外。", "商场里人迹罕至,热闹极了。", "他小心翼翼地大喊大叫。"], answer: 1,
            explain: "「喜出望外」用于意外的惊喜,正确。A 不求甚解是贬义,与成绩提升矛盾;C 人迹罕至指人少;D 小心翼翼与大喊大叫矛盾。" }
        },
        {
          name: "知识点 4 · 病句辨析入门",
          blocks: [
            { type: "rule", title: "📌 常见病句四大类型", html: "① <b>成分残缺</b>:通过这次活动,使我明白了道理。(「通过…使…」缺主语)<br>② <b>搭配不当</b>:他的写作水平明显改进。(水平→提高)<br>③ <b>语序不当</b>:我们讨论并听取了报告。(先听取后讨论)<br>④ <b>重复啰嗦</b>:大约有 50 人左右。(「大约」和「左右」重复)" }
          ],
          q: { type: "choice", points: 4, q: "下列句子没有语病的一项是?",
            options: ["通过学习,使我进步很大。", "他的学习成绩明显改进了。", "全班同学大约有 45 人左右。", "我们听取并讨论了校长的报告。"], answer: 3,
            explain: "A 缺主语(去掉「通过」或「使」);B 成绩与「改进」搭配不当,应为「提高」;C「大约」与「左右」重复。" }
        },
        {
          name: "知识点 5 · 古诗预习《观沧海》",
          blocks: [
            { type: "text", html: "《观沧海》是初一第一学期要背诵的古诗,作者曹操。先读三遍,再看赏析:" },
            { type: "reading", title: "观沧海 · [东汉] 曹操", paragraphs: [
              "东临碣石,以观沧海。水何澹澹,山岛竦峙。",
              "树木丛生,百草丰茂。秋风萧瑟,洪波涌起。",
              "日月之行,若出其中;星汉灿烂,若出其里。",
              "幸甚至哉,歌以咏志。"
            ], tip: "碣石 jié shí(山名) / 澹澹 dàn dàn(水波荡漾) / 竦峙 sǒng zhì(耸立) / 星汉(银河)" },
            { type: "rule", title: "📌 千古名句赏析", html: "<b>「日月之行,若出其中;星汉灿烂,若出其里。」</b><br>意思:日月的运行、灿烂的银河,好像都从大海中升起。诗人借大海的<b>宏伟壮阔</b>,抒发自己<b>统一天下的雄心壮志</b>。这种手法叫<b>借景抒情</b>。" }
          ],
          q: { type: "choice", points: 4, q: "《观沧海》的作者是?",
            options: ["曹操", "李白", "杜甫", "王维"], answer: 0,
            explain: "《观沧海》是东汉末年曹操北征乌桓凯旋途中所作,是我国现存最早的完整山水诗之一。" }
        },
        {
          name: "知识点 6 · 名著导读《朝花夕拾》",
          blocks: [
            { type: "rule", title: "📌 初一必读名著第一本", html: "<b>《朝花夕拾》</b>,作者<b>鲁迅</b>(原名周树人),是他回忆童年和青年生活的<b>散文集</b>,共 10 篇。<br>书名的意思:早晨的花,傍晚拾起——<b>中年回忆往事</b>。<br>代表篇目:《从百草园到三味书屋》《阿长与〈山海经〉》《藤野先生》。" },
            { type: "text", html: "💡 暑假建议:每天读一篇,开学语文课就轻松啦!今天可以先读《从百草园到三味书屋》,里面有捕鸟、拔何首乌,很有趣。" }
          ],
          q: { type: "choice", points: 4, q: "《朝花夕拾》的作者和体裁是?",
            options: ["鲁迅 · 小说集", "鲁迅 · 散文集", "老舍 · 散文集", "朱自清 · 诗集"], answer: 1,
            explain: "《朝花夕拾》是鲁迅的回忆性散文集,共 10 篇。注意不要和他的小说集《呐喊》《彷徨》混淆。" }
        }
      ]
    },

    // ================== 历史(副科轮换)==================
    {
      subject: "history", icon: "🏺", title: "历史 · 中华文明的起源", minutes: 25,
      units: [
        {
          name: "知识点 1 · 我国境内的早期人类",
          blocks: [
            { type: "text", html: "初一历史从「我们从哪里来」讲起。今天认识两位「老祖先」👇" },
            { type: "rule", title: "📌 两个必记的远古人类", html: "<b>元谋人</b>:距今约 <b>170 万年</b>,云南元谋,是我国境内目前已知<b>最早</b>的古人类。<br><b>北京人</b>:距今约 70 万-20 万年,北京周口店,会使用<b>天然火</b>,过群居生活。" }
          ],
          q: { type: "choice", points: 4, q: "我国境内目前已知最早的古人类是?",
            options: ["北京人", "元谋人", "山顶洞人", "半坡人"], answer: 1,
            explain: "元谋人距今约 170 万年,是我国境内目前已知最早的古人类。北京人距今约 70 万-20 万年。" }
        },
        {
          name: "知识点 2 · 原始农耕生活",
          blocks: [
            { type: "rule", title: "📌 两大原始农耕代表(对比记忆)", html: "<b>河姆渡人</b>:<b>长江</b>流域(浙江),种植<b>水稻</b>,住<b>干栏式</b>房屋(架空防潮)。<br><b>半坡人</b>:<b>黄河</b>流域(陕西西安),种植<b>粟</b>(小米),住<b>半地穴式</b>房屋(保暖防寒)。" },
            { type: "text", html: "💡 <b>记忆窍门</b>:南方潮湿→房子架空(干栏式)、水多种水稻;北方寒冷→房子半入地下(保暖)、干旱种粟。地理环境决定生活方式!" }
          ],
          q: { type: "choice", points: 4, q: "生活在长江流域、最早种植水稻的原始居民是?",
            options: ["半坡人", "北京人", "河姆渡人", "元谋人"], answer: 2,
            explain: "河姆渡人在长江流域种水稻、住干栏式房屋;半坡人在黄河流域种粟、住半地穴式房屋。" }
        },
        {
          name: "知识点 3 · 炎黄传说",
          blocks: [
            { type: "rule", title: "📌 人文初祖", html: "四五千年前,<b>炎帝</b>和<b>黄帝</b>部落联合,在<b>涿鹿之战</b>中打败蚩尤,逐渐形成华夏族。<br>所以中国人自称<b>「炎黄子孙」</b>,炎帝和黄帝被尊为<b>「人文初祖」</b>。<br>后来的部落首领传位方式叫<b>「禅让制」</b>(传给贤能的人),代表:尧 → 舜 → 禹。" }
          ],
          q: { type: "choice", points: 4, q: "中国人自称「炎黄子孙」,是因为尊奉哪两位为人文初祖?",
            options: ["尧和舜", "炎帝和黄帝", "黄帝和蚩尤", "舜和禹"], answer: 1,
            explain: "炎帝、黄帝部落联盟逐渐形成华夏族,二人被尊为「人文初祖」,后人自称炎黄子孙。" }
        }
      ]
    }
  ]
};
