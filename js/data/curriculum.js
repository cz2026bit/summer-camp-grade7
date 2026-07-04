// 40 天课程大纲:循序渐进,由易到难
// 每天四科:数学 + 英语 + 语文 + 副科(历史/地理/生物/道法 轮换)
window.CURRICULUM = [
  // ===== 第一阶段:温故知新(第 1-7 天)难度:★ =====
  { day: 1,  phase: "第一阶段 · 温故知新(第1-7天)", math: "分数运算复习 & 认识负数", english: "校园词汇 & Be动词", chinese: "易错字音字形 & 古诗《观沧海》", extra: { key: "history", topic: "中华文明的起源" } },
  { day: 2,  phase: "第一阶段 · 温故知新(第1-7天)", math: "有理数与数轴", english: "人称代词 & 物主代词", chinese: "成语运用 & 古诗《次北固山下》", extra: { key: "geography", topic: "地球与地球仪" } },
  { day: 3,  phase: "第一阶段 · 温故知新(第1-7天)", math: "相反数与绝对值", english: "名词单复数", chinese: "病句辨析 & 古诗《天净沙·秋思》", extra: { key: "biology", topic: "生物的特征" } },
  { day: 4,  phase: "第一阶段 · 温故知新(第1-7天)", math: "比较有理数大小", english: "冠词 a / an / the", chinese: "标点符号 & 《闻王昌龄左迁龙标》", extra: { key: "civics", topic: "中学时代" } },
  { day: 5,  phase: "第一阶段 · 温故知新(第1-7天)", math: "有理数加法", english: "指示代词 this/that", chinese: "文学常识 & 现代文阅读入门", extra: { key: "history", topic: "夏商周的更替" } },
  { day: 6,  phase: "第一阶段 · 温故知新(第1-7天)", math: "有理数减法", english: "There be 句型", chinese: "仿写句子 & 《朝花夕拾》导读", extra: { key: "geography", topic: "经线与纬线" } },
  { day: 7,  phase: "第一阶段 · 温故知新(第1-7天)", math: "第一周小测 & 复习", english: "第一周小测 & 复习", chinese: "第一周小测 & 复习", extra: { key: "review", topic: "副科周复习" } },

  // ===== 第二阶段:有理数运算(第 8-14 天)难度:★★ =====
  { day: 8,  phase: "第二阶段 · 有理数运算(第8-14天)", math: "加减混合运算", english: "一般现在时(I/you/we/they)", chinese: "记叙文阅读:概括内容", extra: { key: "biology", topic: "认识细胞" } },
  { day: 9,  phase: "第二阶段 · 有理数运算(第8-14天)", math: "有理数乘法", english: "一般现在时(第三人称单数)", chinese: "记叙文阅读:理解词句", extra: { key: "civics", topic: "学习新天地" } },
  { day: 10, phase: "第二阶段 · 有理数运算(第8-14天)", math: "有理数除法", english: "频度副词", chinese: "古文预习:《世说新语·咏雪》", extra: { key: "history", topic: "春秋战国的纷争" } },
  { day: 11, phase: "第二阶段 · 有理数运算(第8-14天)", math: "乘方的意义", english: "疑问词 what/where/when/who", chinese: "古文预习:《陈太丘与友期》", extra: { key: "geography", topic: "地图三要素" } },
  { day: 12, phase: "第二阶段 · 有理数运算(第8-14天)", math: "有理数混合运算", english: "可数与不可数名词", chinese: "修辞手法:比喻与拟人", extra: { key: "biology", topic: "植物细胞与动物细胞" } },
  { day: 13, phase: "第二阶段 · 有理数运算(第8-14天)", math: "科学记数法", english: "some / any 的用法", chinese: "古诗《峨眉山月歌》& 默写训练", extra: { key: "civics", topic: "认识自己" } },
  { day: 14, phase: "第二阶段 · 有理数运算(第8-14天)", math: "第二周小测 & 复习", english: "第二周小测 & 复习", chinese: "第二周小测 & 复习", extra: { key: "review", topic: "副科周复习" } },

  // ===== 第三阶段:代数式初步(第 15-21 天)难度:★★★ =====
  { day: 15, phase: "第三阶段 · 代数式初步(第15-21天)", math: "用字母表示数", english: "现在进行时(结构)", chinese: "《论语》十二章(上)", extra: { key: "history", topic: "秦统一中国" } },
  { day: 16, phase: "第三阶段 · 代数式初步(第15-21天)", math: "代数式求值", english: "现在进行时(用法)", chinese: "《论语》十二章(下)", extra: { key: "geography", topic: "陆地与海洋" } },
  { day: 17, phase: "第三阶段 · 代数式初步(第15-21天)", math: "单项式与多项式", english: "两种现在时态对比", chinese: "记叙文阅读:人物描写方法", extra: { key: "biology", topic: "生物与环境" } },
  { day: 18, phase: "第三阶段 · 代数式初步(第15-21天)", math: "合并同类项", english: "情态动词 can / must", chinese: "写作:审题与立意", extra: { key: "civics", topic: "友谊的天空" } },
  { day: 19, phase: "第三阶段 · 代数式初步(第15-21天)", math: "去括号法则", english: "祈使句", chinese: "古诗《江南逢李龟年》", extra: { key: "history", topic: "汉武帝巩固大一统" } },
  { day: 20, phase: "第三阶段 · 代数式初步(第15-21天)", math: "整式加减综合", english: "介词 in/on/at", chinese: "名著《西游记》导读", extra: { key: "geography", topic: "天气与气候" } },
  { day: 21, phase: "第三阶段 · 代数式初步(第15-21天)", math: "第三周小测 & 复习", english: "第三周小测 & 复习", chinese: "第三周小测 & 复习", extra: { key: "review", topic: "副科周复习" } },

  // ===== 第四阶段:一元一次方程(第 22-28 天)难度:★★★★ =====
  { day: 22, phase: "第四阶段 · 一元一次方程(第22-28天)", math: "方程与等式的性质", english: "一般过去时(be动词)", chinese: "记叙文阅读:环境描写作用", extra: { key: "biology", topic: "练习使用显微镜" } },
  { day: 23, phase: "第四阶段 · 一元一次方程(第22-28天)", math: "解方程:移项", english: "一般过去时(规则动词)", chinese: "写作:记叙文结构", extra: { key: "civics", topic: "师长情谊" } },
  { day: 24, phase: "第四阶段 · 一元一次方程(第22-28天)", math: "解方程:去括号", english: "一般过去时(不规则动词)", chinese: "古文:《诫子书》预习", extra: { key: "history", topic: "丝绸之路" } },
  { day: 25, phase: "第四阶段 · 一元一次方程(第22-28天)", math: "解方程:去分母", english: "过去时疑问句与否定句", chinese: "说明文阅读入门", extra: { key: "geography", topic: "世界的人口与人种" } },
  { day: 26, phase: "第四阶段 · 一元一次方程(第22-28天)", math: "方程应用:和差倍分", english: "阅读理解专项(记叙文)", chinese: "古诗《行军九日思长安故园》", extra: { key: "biology", topic: "开花与结果" } },
  { day: 27, phase: "第四阶段 · 一元一次方程(第22-28天)", math: "方程应用:行程问题", english: "阅读理解专项(应用文)", chinese: "写作:细节描写", extra: { key: "civics", topic: "生命的思考" } },
  { day: 28, phase: "第四阶段 · 一元一次方程(第22-28天)", math: "第四周小测 & 复习", english: "第四周小测 & 复习", chinese: "第四周小测 & 复习", extra: { key: "review", topic: "副科周复习" } },

  // ===== 第五阶段:综合提升(第 29-35 天)难度:★★★★ =====
  { day: 29, phase: "第五阶段 · 综合提升(第29-35天)", math: "方程应用:利润与折扣", english: "一般将来时 be going to", chinese: "议论性文字初识", extra: { key: "history", topic: "三国鼎立" } },
  { day: 30, phase: "第五阶段 · 综合提升(第29-35天)", math: "方程应用:工程问题", english: "一般将来时 will", chinese: "古诗《夜上受降城闻笛》", extra: { key: "geography", topic: "聚落与环境" } },
  { day: 31, phase: "第五阶段 · 综合提升(第29-35天)", math: "几何图形初步", english: "四大时态大比拼", chinese: "综合性学习:传统文化", extra: { key: "biology", topic: "生物圈中的绿色植物" } },
  { day: 32, phase: "第五阶段 · 综合提升(第29-35天)", math: "线段与角", english: "完形填空入门", chinese: "记叙文阅读:标题的作用", extra: { key: "civics", topic: "亲情之爱" } },
  { day: 33, phase: "第五阶段 · 综合提升(第29-35天)", math: "角度计算", english: "看图写话", chinese: "写作:开头与结尾", extra: { key: "history", topic: "北魏孝文帝改革" } },
  { day: 34, phase: "第五阶段 · 综合提升(第29-35天)", math: "找规律专题", english: "写作:自我介绍 My Life", chinese: "名著《朝花夕拾》精读", extra: { key: "geography", topic: "发展与合作" } },
  { day: 35, phase: "第五阶段 · 综合提升(第29-35天)", math: "第五周小测 & 复习", english: "第五周小测 & 复习", chinese: "第五周小测 & 复习", extra: { key: "review", topic: "副科周复习" } },

  // ===== 第六阶段:模拟测评(第 36-40 天)难度:★★★★★ =====
  { day: 36, phase: "第六阶段 · 模拟测评(第36-40天)", math: "综合复习:数与式", english: "综合复习:词汇与语法", chinese: "综合复习:基础知识", extra: { key: "history", topic: "历史综合复习" } },
  { day: 37, phase: "第六阶段 · 模拟测评(第36-40天)", math: "综合复习:方程与几何", english: "综合复习:时态与句型", chinese: "综合复习:古诗文", extra: { key: "geography", topic: "地理综合复习" } },
  { day: 38, phase: "第六阶段 · 模拟测评(第36-40天)", math: "模拟测试(一)", english: "模拟测试(一)", chinese: "模拟测试(一)", extra: { key: "biology", topic: "生物综合复习" } },
  { day: 39, phase: "第六阶段 · 模拟测评(第36-40天)", math: "模拟测试(二)", english: "模拟测试(二)", chinese: "模拟测试(二)", extra: { key: "civics", topic: "道法综合复习" } },
  { day: 40, phase: "第六阶段 · 模拟测评(第36-40天)", math: "结营总测评 🏆", english: "结营总测评 🏆", chinese: "结营总测评 🏆", extra: { key: "review", topic: "结营总测评 🏆" } }
];
