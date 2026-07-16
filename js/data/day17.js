// ============ 第 17 关 ============
window.DAYS = window.DAYS || {};

window.DAYS[17] = {
  day: 17,
  title: "第 17 关 · 认识整式家族",
  estimate: "四科约 2~3 小时 · 共 7 道思考题(含 1 道 BOSS 题)",
  sections: [
    // ================== 数学 ==================
    {
      subject: "math", icon: "🔢", title: "数学 · 单项式与多项式", minutes: 50,
      units: [
        {
          name: "动画课堂 1 · 单项式:数字与字母的乘积",
          blocks: [
            { type: "lesson", title: "▶ 系数和次数,单项式的身份证", steps: [
              { text: "由数字与字母的「乘积」组成的式子,叫单项式。像 3a、−2x²y、5,都是单项式。单独一个数或字母也算!", emoji: "🔤" },
              { text: "单项式有两个身份信息:系数和次数。系数是前面的数字因数;次数是所有字母指数的和。", emoji: "🪪", scene: { type: "clues", items: [
                { head: "−2x²y", text: "系数 −2" },
                { head: "字母指数和", text: "2 + 1 = 3" },
                { head: "次数", text: "3" }
              ] } },
              { text: "找系数别丢符号!−2x²y 的系数是 −2,不是 2。系数带着前面的正负号一起走。", emoji: "⚠️" },
              { text: "找次数别漏字母!−2x²y 里 x 是 2 次、y 是 1 次(省略的指数是 1),加起来 3 次。", emoji: "🔢" },
              { text: "特别注意:单独的数字(如 5)系数是它本身,次数是 0。字母的系数若是 1 通常省略(a 的系数是 1)。", emoji: "🎯" }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 2 · 多项式:几个单项式的和",
          blocks: [
            { type: "lesson", title: "▶ 项、次数,多项式的看点", steps: [
              { text: "几个单项式相加,组成多项式。如 2x² − 3x + 1,它有三「项」。整式 = 单项式 + 多项式。", emoji: "➕" },
              { text: "每一项都带着自己前面的符号!2x² − 3x + 1 的三项是:2x²、−3x、+1(注意 −3x 的负号)。", emoji: "🪪", scene: { type: "clues", items: [
                { head: "第一项", text: "2x²" },
                { head: "第二项", text: "−3x(带负号)" },
                { head: "常数项", text: "+1" }
              ] } },
              { text: "多项式的次数:看次数最高的那一项。2x² − 3x + 1 中 2x² 是二次,所以这是「二次三项式」。", emoji: "🏔️" },
              { text: "不含字母的项叫常数项。2x² − 3x + 1 的常数项是 1。命名规则:「几次几项式」,如三次两项式。", emoji: "🏷️", scene: { type: "clues", items: [
                { head: "看最高次", text: "定「几次」" },
                { head: "数项数", text: "定「几项式」" },
                { head: "例", text: "二次三项式" }
              ] } },
              { text: "口诀:多项式找项带符号,次数看最高,常数项无字母。分清整式家族,后面运算不迷路!", emoji: "🎯" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "关于多项式 3x²y − 2xy + 5,下列说法正确的是:",
            options: [
              "它是三次三项式,常数项是 5",
              "它是二次三项式,常数项是 5",
              "它是三次两项式,常数项是 −5",
              "它的次数是 2"
            ], answer: 0,
            demoSteps: [
              { text: "先看每项的次数:3x²y 的字母指数和是几?2xy 呢?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "3x²y", text: "2+1=3 次" },
                { head: "−2xy", text: "1+1=2 次" },
                { head: "5", text: "常数项" }
              ] } },
              { text: "最高次是 3,共 3 项,常数项是 +5。", emoji: "🧮" }
            ],
            explain: "A 正确。3x²y 是 3 次(2+1),最高次为 3,共 3 项,常数项是 +5,所以是三次三项式。",
            explainSteps: [
              { text: "3x²y:x 是 2 次、y 是 1 次,和为 3 次(最高)。", emoji: "🏔️" },
              { text: "共 3 项,最高次 3 → 三次三项式;常数项 +5。选 A!", emoji: "✅" },
              { text: "B、D 错在次数(应是 3);C 项数和常数项符号都错。多字母的项别漏加指数!", emoji: "🎯" }
            ] }
        },
        {
          name: "🔥 BOSS 挑战 · 找系数与次数",
          blocks: [
            { type: "text", html: "💪 <b>BOSS 战规则</b>:一眼看穿单项式的身份!系数、次数一个都不能错。草稿纸准备!" }
          ],
          q: { type: "fill", points: 20, boss: true, voice: "zh",
            q: "单项式 −3πr² 的次数是多少?(注意:π 是圆周率,是一个确定的数,不是字母。直接填数字)",
            placeholder: "例如: 3",
            accept: ["2", "二", "2次"],
            demoSteps: [
              { text: "先分清谁是字母、谁是数字:−3 是数字,π 也是数字(圆周率),只有 r 是字母!", emoji: "🔍", scene: { type: "clues", items: [
                { head: "−3", text: "数字" },
                { head: "π", text: "确定的数(≈3.14)" },
                { head: "r²", text: "唯一字母,2 次" }
              ] } },
              { text: "次数只数字母的指数。这里只有 r²,次数就是 2。", emoji: "🎯" }
            ],
            explain: "π 是一个确定的常数(≈3.14),不是字母!系数是 −3π,唯一的字母是 r,指数为 2,所以次数是 2。",
            explainSteps: [
              { text: "陷阱:π 看起来像字母,其实是圆周率,是个固定的数。", emoji: "⚠️" },
              { text: "系数 = −3π(数字部分都算系数),字母只有 r²。", emoji: "🪪" },
              { text: "次数只看字母指数:r² 是 2 次,答 2!分清「字母」和「常数」是关键。", emoji: "🏆" }
            ] }
        }
      ]
    },

    // ================== 英语 ==================
    {
      subject: "english", icon: "📚", title: "英语 · 两种现在时态对比", minutes: 45,
      units: [
        {
          name: "单词训练营 · 时间信号词 12 个(点卡片听发音!)",
          blocks: [
            { type: "text", html: "🎧 今天的词是<span class='hl'>判断时态</span>的信号灯!点卡片听发音,跟读 3 遍。" },
            { type: "flashcards", words: [
              { word: "every day", phonetic: "/ˈevri deɪ/", cn: "每天", sentence: "I read every day." },
              { word: "usually", phonetic: "/ˈjuːʒuəli/", cn: "通常", sentence: "She usually walks." },
              { word: "often", phonetic: "/ˈɒfn/", cn: "经常", sentence: "We often meet." },
              { word: "now", phonetic: "/naʊ/", cn: "现在", sentence: "He is eating now." },
              { word: "at the moment", phonetic: "/ət ðə ˈməʊmənt/", cn: "此刻", sentence: "I am busy at the moment." },
              { word: "look", phonetic: "/lʊk/", cn: "看", sentence: "Look! It is snowing." },
              { word: "listen", phonetic: "/ˈlɪsn/", cn: "听", sentence: "Listen! She is singing." },
              { word: "these days", phonetic: "/ðiːz deɪz/", cn: "这些天", sentence: "I am reading these days." },
              { word: "sometimes", phonetic: "/ˈsʌmtaɪmz/", cn: "有时", sentence: "He sometimes cooks." },
              { word: "always", phonetic: "/ˈɔːlweɪz/", cn: "总是", sentence: "They always help." },
              { word: "right now", phonetic: "/raɪt naʊ/", cn: "此刻", sentence: "We are working right now." },
              { word: "on Sundays", phonetic: "/ɒn ˈsʌndeɪz/", cn: "每逢周日", sentence: "I swim on Sundays." }
            ] }
          ],
          q: null
        },
        {
          name: "动画课堂 · 习惯 vs 正在:两种时态大 PK",
          blocks: [
            { type: "lesson", title: "▶ 一般现在时 vs 现在进行时", steps: [
              { text: "两种现在时最容易混。记住核心区别:一般现在时讲「习惯、经常」,现在进行时讲「此刻、正在」。", emoji: "⚔️" },
              { text: "看信号词分辨:every day / usually / often / always → 一般现在时;now / Look! / Listen! / at the moment → 进行时。", emoji: "🚦", scene: { type: "match", groups: [
                { head: "一般现在时", items: ["every day", "usually", "often"] },
                { head: "现在进行时", items: ["now", "Look!", "at the moment"] }
              ] } },
              { text: "对比:I read every day.(习惯:我每天读书)vs I am reading now.(此刻:我正在读书)。", emoji: "🔄", scene: { type: "clues", items: [
                { head: "习惯", text: "read every day" },
                { head: "正在", text: "am reading now" },
                { head: "看信号", text: "选对时态" }
              ] } },
              { text: "动词形式不同:一般现在时用原形或加 s;进行时用 be + ing。别把两套混着用!", emoji: "✂️" },
              { text: "口诀:每天经常一般时,此刻正在进行时;信号词是指路灯,看清它,选对它!", emoji: "🎯" }
            ] },
            { type: "chant", lines: ["every day 用一般,", "now 和 Look 用进行;", "习惯经常加 s,", "此刻正在 be ing!"] }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "选出完全正确的一句:",
            options: [
              "Look! Tom is playing football, but he plays it every Sunday too.",
              "Look! Tom plays football, but he is playing it every Sunday too.",
              "Tom is playing football every day.",
              "Look! Tom play football now."
            ], answer: 0,
            demoSteps: [
              { text: "句中有两个信号:Look!(此刻)和 every Sunday(习惯)。各配什么时态?", emoji: "🚦", scene: { type: "clues", items: [
                { head: "Look!", text: "→ 进行时 is playing" },
                { head: "every Sunday", text: "→ 一般现在时 plays" },
                { head: "两处", text: "各归各位" }
              ] } },
              { text: "Look 后用进行时,every Sunday 用一般现在时,两处都对才行。", emoji: "✅" }
            ],
            explain: "A 正确:Look! 配 is playing(进行时),every Sunday 配 plays(一般现在时)。B 两处颠倒;C 用 every day 却用进行时;D 的 play 少了 be+ing。",
            explainSteps: [
              { text: "Look! 提示此刻,用 is playing;every Sunday 表习惯,用 plays。", emoji: "🚦" },
              { text: "A 两处都放对了!选 A。", emoji: "✅" },
              { text: "B 把两个时态用反;C、D 时态与信号词不匹配。信号词一亮,时态立定!", emoji: "🎯" }
            ] }
        },
        {
          name: "英文名著时光 · The Three Little Pigs",
          blocks: [
            { type: "rule", title: "📖 名著名片", html: "<b>英国经典童话</b>《三只小猪》——草房、木房、砖房,谁的房子能挡住大灰狼?" },
            { type: "reading", speakable: true, title: "The Three Little Pigs", paragraphs: [
              "Three little pigs build their own houses. The first pig builds a house of straw — it is quick and easy. The second pig builds a house of sticks. But the third pig works hard and builds a strong house of bricks.",
              "A big bad wolf comes. He blows down the straw house, and the first pig runs away. He blows down the stick house, and the second pig runs away too. Both pigs run to the brick house.",
              "The wolf huffs and puffs, but he can't blow down the brick house. It is too strong! He tries to come down the chimney, but the pigs have a hot pot of water ready.",
              "The wolf runs away and never comes back. 'Hard work keeps us safe,' say the three little pigs. Now they all live happily in the strong brick house."
            ], tip: "生词提示:straw 稻草 / sticks 木棍 / bricks 砖 / blow 吹 / chimney 烟囱" }
          ],
          q: { type: "choice", points: 15, voice: "en",
            q: "Why can't the wolf blow down the third pig's house?(为什么狼吹不倒第三只小猪的房子?)",
            options: [
              "Because it is made of straw.",
              "Because it is a strong house of bricks.",
              "Because the wolf is too weak.",
              "Because it is made of sticks."
            ], answer: 1,
            demoSteps: [
              { text: "第三只小猪的房子是用什么建的?和前两只有什么不同?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "第一只", text: "straw 草房" },
                { head: "第二只", text: "sticks 木房" },
                { head: "第三只", text: "bricks 砖房" }
              ] } },
              { text: "砖房结实,原文说 It is too strong。", emoji: "🐷" }
            ],
            explain: "B 正确。第三只小猪辛勤地用砖建了一座结实的房子,狼再怎么吹也吹不倒。",
            explainSteps: [
              { text: "前两只小猪图省事用草和木棍,房子被轻易吹倒。", emoji: "💨" },
              { text: "第三只用砖辛苦建房,坚固无比,狼吹不倒,选 B!", emoji: "✅" },
              { text: "寓意:踏实认真、肯下功夫,才能造出真正牢靠的成果。", emoji: "🎯" }
            ] }
        }
      ]
    },

    // ================== 语文 ==================
    {
      subject: "chinese", icon: "📝", title: "语文 · 记叙文:人物描写方法", minutes: 40,
      units: [
        {
          name: "动画课堂 · 五种描写,让人物活起来",
          blocks: [
            { type: "lesson", title: "▶ 外貌·语言·动作·神态·心理", steps: [
              { text: "写人,要让人物「活」在纸上。作家有五种「魔法」:外貌、语言、动作、神态、心理描写。", emoji: "✨" },
              { text: "外貌(肖像)描写写长相衣着:「他有一双炯炯有神的大眼睛」。语言描写写说的话:「『快跑!』他喊道」。", emoji: "👤", scene: { type: "clues", items: [
                { head: "外貌", text: "写长相衣着" },
                { head: "语言", text: "写说的话" },
                { head: "动作", text: "写做的事" }
              ] } },
              { text: "动作描写抓一连串动词:「他弯下腰,捡起书,轻轻拍去灰尘」——动词越准,人物越鲜活。", emoji: "🏃" },
              { text: "神态描写写表情:「他皱起眉头」;心理描写写内心活动:「我心里像揣了只兔子,怦怦直跳」。", emoji: "😰", scene: { type: "clues", items: [
                { head: "神态", text: "写脸上表情" },
                { head: "心理", text: "写内心想法" },
                { head: "作用", text: "刻画性格情感" }
              ] } },
              { text: "答题格式:「这句运用了××描写,生动写出了人物……的特点/心情。」认准描写方法,是阅读题的常考点!", emoji: "🎯" }
            ] }
          ],
          q: { type: "choice", points: 10, voice: "zh",
            q: "「他攥紧拳头,咬着嘴唇,一步一步向讲台走去。」这句话主要运用了哪种人物描写?",
            options: ["外貌描写", "动作描写", "语言描写", "环境描写"], answer: 1,
            demoSteps: [
              { text: "圈出句中的动词:「攥」「咬」「走」——这些写的是长相、说话,还是动作?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "攥紧拳头", text: "动作" },
                { head: "咬着嘴唇", text: "动作/神态" },
                { head: "向讲台走", text: "动作" }
              ] } },
              { text: "一连串动词,主要是哪种描写?", emoji: "🏃" }
            ],
            explain: "B 正确。「攥紧」「咬着」「走去」都是动作,属于动作描写,生动表现了人物紧张而坚定的状态。",
            explainSteps: [
              { text: "句子由一串动词组成:攥、咬、走,都是「做的事」。", emoji: "🏃" },
              { text: "这是动作描写,写出了人物紧张又下决心的样子,选 B!", emoji: "✅" },
              { text: "动作描写的秘诀是「用准动词」,一连串动词能让画面活起来。", emoji: "🎯" }
            ] }
        },
        {
          name: "动画课堂 · 细节描写:于细微处见真情",
          blocks: [
            { type: "lesson", title: "▶ 一个小动作,胜过千言万语", steps: [
              { text: "最打动人的往往不是华丽的辞藻,而是精准的「细节描写」——抓住一个不起眼的小动作、小神态。", emoji: "🔬" },
              { text: "朱自清《背影》里,父亲爬月台买橘子:「他用两手攀着上面,两脚再向上缩;他肥胖的身子向左微倾……」", emoji: "🍊", scene: { type: "clues", items: [
                { head: "攀", text: "吃力" },
                { head: "缩", text: "费劲" },
                { head: "倾", text: "笨拙" }
              ] } },
              { text: "「攀」「缩」「倾」几个细节,把一个笨拙、吃力却满是父爱的背影,刻进了每个读者心里。", emoji: "💗" },
              { text: "写细节的诀窍:放慢镜头,把一个动作「拆」成好几个小动作,一帧一帧地写。", emoji: "🎬" },
              { text: "记住:细节是文章的「泪点」和「记忆点」。学会抓细节,你的作文就有了打动人的力量。", emoji: "🎯" }
            ] }
          ],
          q: { type: "fill", points: 10, voice: "zh",
            q: "抓住人物细微的动作、神态等进行的描写,叫做__________描写,它常常能于细微处打动读者。(填两个字)",
            placeholder: "填两个字",
            accept: ["细节", "细节。", "细节描写"],
            demoSteps: [
              { text: "抓「细微」处、放慢镜头写的描写,叫什么描写?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "关键词", text: "细微" },
                { head: "手法", text: "放慢、拆分" },
                { head: "名称", text: "?描写" }
              ] } },
              { text: "抓「细」处的描写,两个字。", emoji: "🔬" }
            ],
            explain: "答案:细节描写。抓住人物细微的动作、神态、语言等进行的描写,往往能于细微处见真情,最能打动读者。",
            explainSteps: [
              { text: "抓住「细微」之处的描写,就是细节描写。", emoji: "🔬" },
              { text: "《背影》的「攀、缩、倾」正是经典的细节描写。", emoji: "🍊" },
              { text: "答「细节」。会写细节,作文才有真情实感和感染力!", emoji: "✅" }
            ] }
        },
        {
          name: "今日彩蛋 · 名著打卡",
          blocks: [
            { type: "rule", title: "📖 睡前 20 分钟名著时间", html: "继续读<b>《西游记》</b>!今晚找一处写人物的句子,判断它用了<b>哪种描写(外貌/语言/动作/神态/心理)</b>——比如写孙悟空「火眼金睛」是外貌,「抓耳挠腮」是动作。<br>会分辨描写方法,你的阅读理解又稳了一分!" }
          ],
          q: null
        }
      ]
    },

    // ================== 生物 ==================
    {
      subject: "biology", icon: "🌱", title: "生物 · 生物与环境", minutes: 25,
      units: [
        {
          name: "动画课堂 · 生物与环境,相互影响",
          blocks: [
            { type: "lesson", title: "▶ 环境影响生物,生物适应并改变环境", steps: [
              { text: "生物离不开环境。阳光、空气、水、温度、土壤等叫「非生物因素」,同类和其他生物叫「生物因素」。", emoji: "🌍" },
              { text: "环境影响生物:沙漠缺水,仙人掌的叶就退化成刺,减少水分蒸发。这是生物「适应」环境。", emoji: "🌵", scene: { type: "clues", items: [
                { head: "非生物因素", text: "光·水·温度·空气" },
                { head: "生物因素", text: "同类·天敌·食物" },
                { head: "适应", text: "仙人掌叶变刺" }
              ] } },
              { text: "生物也影响环境:蚯蚓松土使土壤肥沃,森林能保持水土、调节气候。生物在改变着环境。", emoji: "🪱" },
              { text: "生物之间还有各种关系:捕食(猫吃老鼠)、竞争(杂草和庄稼争养分)、合作(蚂蚁分工)、寄生等。", emoji: "🔗", scene: { type: "clues", items: [
                { head: "捕食", text: "猫吃老鼠" },
                { head: "竞争", text: "争光争水" },
                { head: "合作", text: "蚂蚁分工" }
              ] } },
              { text: "记住:生物与环境是一个相互影响的整体——环境塑造生物,生物也适应并改变环境。", emoji: "🎯" }
            ] }
          ],
          q: { type: "choice", points: 15, voice: "zh",
            q: "「仙人掌的叶退化成刺」这一现象说明:",
            options: [
              "生物改变了环境",
              "生物能适应环境(减少水分散失以适应干旱)",
              "环境不影响生物",
              "仙人掌不需要水"
            ], answer: 1,
            demoSteps: [
              { text: "仙人掌生活在什么环境?叶变刺是为了应对什么?", emoji: "🔍", scene: { type: "clues", items: [
                { head: "环境", text: "干旱缺水" },
                { head: "叶变刺", text: "减少蒸发" },
                { head: "本质", text: "适应环境" }
              ] } },
              { text: "为了在缺水环境活下去而发生的变化,叫生物「适应」环境。", emoji: "🌵" }
            ],
            explain: "B 正确。仙人掌生活在干旱地区,叶退化成刺可减少水分散失,是生物适应环境的典型例子。",
            explainSteps: [
              { text: "沙漠缺水,叶子面积大就蒸发多,不利生存。", emoji: "🌵" },
              { text: "叶退化成刺,大大减少水分散失,这是适应干旱环境,选 B!", emoji: "✅" },
              { text: "A 是「生物影响环境」(方向反了),C、D 明显错误。适应环境是生物的生存智慧。", emoji: "🎯" }
            ] }
        }
      ]
    }
  ]
};
