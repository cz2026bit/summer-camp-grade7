/* ============ 恩恩的小升初衔接暑期提升计划 ============ */
(function () {
  const app = document.getElementById("app");
  const TOTAL_DAYS = 40;
  const STORE_KEY = "enen_camp_v3";
  const SITE_NAME = "恩恩的小升初衔接暑期提升计划";

  // ---------- 科目定义 ----------
  const SUBJECTS = {
    math:      { label: "数学", icon: "🔢" },
    english:   { label: "英语", icon: "🔤" },
    chinese:   { label: "语文", icon: "📝" },
    history:   { label: "历史", icon: "🏺" },
    geography: { label: "地理", icon: "🌍" },
    biology:   { label: "生物", icon: "🌱" },
    civics:    { label: "道法", icon: "⚖️" },
    review:    { label: "复习", icon: "🔁" }
  };
  function subLabel(key) { return (SUBJECTS[key] || { label: key }).label; }
  function subIcon(key) { return (SUBJECTS[key] || { icon: "📘" }).icon; }

  // ---------- 徽章定义 ----------
  const BADGES = {
    first:   { icon: "🎖️", name: "开营首胜", desc: "完成第 1 关" },
    perfect: { icon: "💯", name: "全对王者", desc: "单日全部答对" },
    combo3:  { icon: "🔥", name: "三连击",   desc: "连续答对 3 题" },
    boss:    { icon: "⚔️", name: "屠龙勇士", desc: "答对 BOSS 挑战题" },
    streak3: { icon: "📅", name: "三日坚持", desc: "连续打卡 3 天" },
    streak7: { icon: "🏅", name: "七日之约", desc: "连续打卡 7 天" },
    lv5:     { icon: "🚀", name: "进阶学者", desc: "达到 5 级" }
  };

  // ---------- 本地存储 ----------
  function loadStore() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; }
    catch (e) { return {}; }  }
  function saveStore(s) { localStorage.setItem(STORE_KEY, JSON.stringify(s)); }
  function getResult(day) { return loadStore()["day" + day] || null; }
  function getXP() { return loadStore().xp || 0; }
  function getBadges() { return loadStore().badges || []; }
  function levelOf(xp) { return Math.floor(Math.sqrt(xp / 60)) + 1; }
  function levelFloorXP(lv) { return (lv - 1) * (lv - 1) * 60; }

  // ---------- 顶栏游戏状态 ----------
  function refreshGameChip() {
    const xp = getXP();
    const el = document.getElementById("game-chip");
    if (el) el.textContent = `Lv.${levelOf(xp)} · ${xp} XP · 🏅×${getBadges().length}`;
  }

  // ---------- 工具 ----------
  function esc(str) {
    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function fmtDuration(ms) {
    const min = Math.max(1, Math.round(ms / 60000));
    if (min < 60) return min + " 分钟";
    return Math.floor(min / 60) + " 小时 " + (min % 60) + " 分钟";
  }
  function normalize(s) {
    return String(s).toLowerCase().replace(/\s+/g, " ").trim()
      .replace(/[’']/g, "'").replace(/[−–]/g, "-");
  }

  // ================================================================
  // 语音引擎(TTS)
  // ================================================================
  const TTS = {
    zhVoice: null, enVoice: null, ready: false,
    init() {
      const pick = () => {
        const vs = speechSynthesis.getVoices();
        if (!vs.length) return;
        this.zhVoice = vs.find(v => /Tingting|婷婷/i.test(v.name)) || vs.find(v => v.lang.startsWith("zh-CN") || v.lang.startsWith("zh_CN")) || vs.find(v => v.lang.startsWith("zh"));
        this.enVoice = vs.find(v => /Samantha/i.test(v.name)) || vs.find(v => v.lang.startsWith("en-US") || v.lang.startsWith("en_US")) || vs.find(v => v.lang.startsWith("en"));
        this.ready = true;
      };
      pick();
      speechSynthesis.onvoiceschanged = pick;
    },
    speak(text, lang) {
      return new Promise(resolve => {
        try {
          const clean = String(text).replace(/[👉🤯💸🎯⚠️✅❌🔑🎵🕊️😴🌊🌌💭❤️‍🔥🧮⛰️🦷🔥🌾🏠🕳️🤔❓🌧️❄️📜😨⚖️🧭🚪📏💺🔍🎭🔗📍🗺️🕵️🀄📚🍲➕✖️➗🏗️🎶💯🎖️⚔️🚀1️⃣2️⃣🧩🏆❤️]/g, "");
          const u = new SpeechSynthesisUtterance(clean);
          const en = lang === "en";
          u.voice = en ? this.enVoice : this.zhVoice;
          u.lang = en ? "en-US" : "zh-CN";
          u.rate = en ? 0.85 : 1.0;
          u.onend = resolve;
          u.onerror = resolve;
          speechSynthesis.speak(u);
        } catch (e) { resolve(); }
      });
    },
    stop() { try { speechSynthesis.cancel(); } catch (e) {} }
  };
  TTS.init();
  // 猜测文本主要语言
  function guessLang(text) {
    const ascii = (String(text).match(/[a-zA-Z]/g) || []).length;
    const han = (String(text).match(/[一-龥]/g) || []).length;
    return ascii > han * 2 ? "en" : "zh";
  }

  // ================================================================
  // 音效(WebAudio)
  // ================================================================
  const SFX = {
    ctx: null,
    ac() { if (!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)(); return this.ctx; },
    tone(freq, t0, dur, type, vol) {
      const ctx = this.ac();
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.type = type || "sine"; o.frequency.value = freq;
      g.gain.setValueAtTime(vol || 0.12, ctx.currentTime + t0);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + t0 + dur);
      o.connect(g); g.connect(ctx.destination);
      o.start(ctx.currentTime + t0); o.stop(ctx.currentTime + t0 + dur + 0.05);
    },
    correct() { try { this.tone(660, 0, .12); this.tone(880, .12, .2); } catch (e) {} },
    wrong() { try { this.tone(220, 0, .25, "triangle"); } catch (e) {} },
    badge() { try { [523, 659, 784, 1047].forEach((f, i) => this.tone(f, i * .1, .18)); } catch (e) {} },
    boss() { try { [392, 330, 392, 523].forEach((f, i) => this.tone(f, i * .12, .15, "square", .07)); } catch (e) {} }
  };

  // ---------- 彩带 ----------
  function confetti(n) {
    const colors = ["#ff8a3d", "#5b6ef5", "#26b8a5", "#ef5b7b", "#ffd93d"];
    for (let i = 0; i < (n || 26); i++) {
      const p = document.createElement("div");
      p.className = "confetti";
      p.style.left = Math.random() * 100 + "vw";
      p.style.background = colors[i % colors.length];
      p.style.animationDelay = Math.random() * .4 + "s";
      p.style.transform = `rotate(${Math.random() * 360}deg)`;
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 2600);
    }
  }
  // 浮动提示(COMBO / +XP)
  function floatTip(text, x, y, cls) {
    const t = document.createElement("div");
    t.className = "float-tip " + (cls || "");
    t.textContent = text;
    t.style.left = (x || window.innerWidth / 2) + "px";
    t.style.top = (y || window.innerHeight / 2) + "px";
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 1400);
  }

  // ================================================================
  // 首页
  // ================================================================
  function renderHome() {
    window.scrollTo(0, 0);
    TTS.stop();
    const store = loadStore();
    const doneCount = Object.keys(store).filter(k => /^day\d+$/.test(k)).length;
    const pct = Math.round(doneCount / TOTAL_DAYS * 100);
    const xp = getXP(), lv = levelOf(xp);
    const nextLvXP = levelFloorXP(lv + 1);
    const lvPct = Math.min(100, Math.round((xp - levelFloorXP(lv)) / (nextLvXP - levelFloorXP(lv)) * 100));
    const badges = getBadges();

    let recommended = null;
    for (let i = 1; i <= TOTAL_DAYS; i++) {
      if (window.DAYS[i] && !getResult(i)) { recommended = i; break; }
    }

    let html = `
      <div class="hero">
        <h1>🌟 恩恩的小升初衔接暑期提升计划</h1>
        <p>每天 2~3 小时 · 动画配音讲解 · 精讲精练 · 像闯关一样学习</p>
        <div class="game-panel">
          <div class="game-stat"><div class="gs-num">Lv.${lv}</div><div class="gs-label">等级</div>
            <div class="lv-bar"><div style="width:${lvPct}%"></div></div>
            <div class="gs-sub">${xp} / ${nextLvXP} XP</div></div>
          <div class="game-stat"><div class="gs-num">${store.streak || 0} 天</div><div class="gs-label">连续打卡 🔥</div></div>
          <div class="game-stat"><div class="gs-num">${doneCount}</div><div class="gs-label">已通关卡</div></div>
          <div class="game-stat badges-stat">
            <div class="gs-label">徽章墙 🏅</div>
            <div class="badge-row">${Object.keys(BADGES).map(k =>
              `<span class="badge-item ${badges.includes(k) ? "owned" : ""}" title="${BADGES[k].name}:${BADGES[k].desc}">${BADGES[k].icon}</span>`).join("")}</div>
          </div>
        </div>
        <div class="progress-wrap">
          <div class="progress-bar"><div style="width:0%" data-target="${pct}%"></div></div>
          <div class="progress-label">冒险地图已探索 ${doneCount} / ${TOTAL_DAYS} 关(${pct}%)</div>
        </div>
      </div>`;

    let curPhase = "";
    let cards = "";
    window.CURRICULUM.forEach((c, idx) => {
      if (c.phase !== curPhase) {
        if (cards) html += `<div class="day-grid">${cards}</div>`;
        cards = "";
        curPhase = c.phase;
        html += `<div class="phase-title">${esc(curPhase)}</div>`;
      }
      const hasContent = !!window.DAYS[c.day];
      const result = getResult(c.day);
      let badge = "";
      if (result) badge = `<span class="day-score">⭐ ${result.score}分</span>`;
      else if (!hasContent) badge = `<span class="day-badge">敬请期待</span>`;
      else if (c.day === recommended) badge = `<span class="day-badge">👉 今日关卡</span>`;

      cards += `
        <div class="day-card ${hasContent ? "" : "locked"} ${c.day === recommended ? "recommended" : ""}"
             style="animation-delay:${Math.min(idx * 0.02, 0.5)}s"
             ${hasContent ? `data-day="${c.day}"` : ""}>
          <div class="day-num">第 ${c.day} 关</div>
          ${badge}
          <div class="day-topics">
            🔢 <b>${esc(c.math)}</b><br>
            🔤 ${esc(c.english)}<br>
            📝 ${esc(c.chinese)}<br>
            ${subIcon(c.extra.key)} ${esc(c.extra.topic)}
          </div>
        </div>`;
    });
    if (cards) html += `<div class="day-grid">${cards}</div>`;
    app.innerHTML = html;
    refreshGameChip();

    requestAnimationFrame(() => {
      const bar = app.querySelector(".progress-bar > div");
      if (bar) setTimeout(() => { bar.style.width = bar.dataset.target; }, 100);
    });

    app.querySelectorAll(".day-card[data-day]").forEach(card => {
      card.addEventListener("click", () => showHonestyGate(parseInt(card.dataset.day, 10)));
    });
  }

  // ================================================================
  // 诚信之门(防 AI 作弊第一道关)
  // ================================================================
  function showHonestyGate(day) {
    if (getResult(day)) { renderDay(day); return; } // 已完成的可直接回看
    const overlay = document.createElement("div");
    overlay.className = "gate-overlay";
    overlay.innerHTML = `
      <div class="gate-card">
        <div class="gate-icon">🤝</div>
        <h2>闯关约定</h2>
        <p class="gate-text">恩恩,这一关的每道题都是为<b>你的大脑</b>设计的。<br>
        用 AI 或搜索找答案 = 把升级的经验值送给机器人 🤖<br>
        <b>系统会记录每道题的答题用时</b>,速度异常会显示在给爸爸妈妈的报告里哦。</p>
        <div class="gate-promise">我承诺:不用 AI、不搜索、不翻书抄答案,<br>靠自己的思考完成挑战!</div>
        <button class="btn btn-primary btn-big" id="gate-ok">🖐️ 击掌承诺,开始闯关!</button>
        <button class="btn btn-ghost-dark" id="gate-cancel">先不学了</button>
      </div>`;
    document.body.appendChild(overlay);
    overlay.querySelector("#gate-ok").onclick = () => { overlay.remove(); SFX.badge(); renderDay(day); };
    overlay.querySelector("#gate-cancel").onclick = () => overlay.remove();
  }

  // ================================================================
  // 学习页(动画课堂 + 深度题)
  // ================================================================
  let dayStartTime = null;
  let dayAnswers = {};
  let combo = 0, maxCombo = 0;
  let lastAnswerTime = null;

  function countQuestions(data) {
    return data.sections.reduce((n, s) => n + s.units.filter(u => u.q).length, 0);
  }

  function renderDay(day) {
    window.scrollTo(0, 0);
    TTS.stop();
    const data = window.DAYS[day];
    if (!data) return renderHome();
    dayStartTime = Date.now();
    lastAnswerTime = Date.now();
    dayAnswers = {}; combo = 0; maxCombo = 0;
    const totalQ = countQuestions(data);

    let html = `
      <div class="day-header no-copy">
        <h1>${esc(data.title)}</h1>
        <div class="meta">⏱️ ${esc(data.estimate)} · 🎬 蓝色框是动画课堂,点「播放讲解」听配音 · 答题立刻知对错</div>
      </div>`;

    data.sections.forEach((sec, si) => {
      html += `<div class="section-card ${sec.subject} no-copy">
        <h2>${sec.icon} ${esc(sec.title)} <span class="tag ${sec.subject}">${subLabel(sec.subject)}</span></h2>
        <div class="section-meta">预计 ${sec.minutes} 分钟</div>`;
      sec.units.forEach((u, ui) => {
        const key = si + "-" + ui;
        html += `<div class="unit">
          <div class="unit-name">📍 ${esc(u.name)}</div>
          ${u.blocks.map((b, bi) => renderBlock(b, key + "-" + bi)).join("")}
          ${u.q ? renderInlineQuestion(u.q, key, sec.subject) : ""}
        </div>`;
      });
      html += `</div>`;
    });

    html += `
      <div class="quiz-sticky">
        <div class="finish-bar">
          <span id="progress-chip" class="progress-chip">已闯 0 / ${totalQ} 题</span>
          <span id="combo-chip" class="combo-chip" style="display:none"></span>
          <button class="btn btn-success btn-big" id="btn-finish">完成闯关,领取战利品 🎁</button>
        </div>
      </div>`;
    app.innerHTML = html;

    bindWidgets();
    bindLessons();
    bindInlineQuestions(day, data, totalQ);
    bindAntiCopy();
  }

  // ---------- 防复制 ----------
  function bindAntiCopy() {
    app.querySelectorAll(".no-copy").forEach(el => {
      ["copy", "cut", "contextmenu", "selectstart", "dragstart"].forEach(evt =>
        el.addEventListener(evt, e => {
          if (e.target.closest("input")) return; // 填空框正常使用
          e.preventDefault();
        }));
    });
  }

  // ---------- 学习内容块渲染 ----------
  function renderBlock(b, bid) {
    switch (b.type) {
      case "text":
        return `<div class="block-text">${b.html}</div>`;
      case "rule":
        return `<div class="rule-card"><h3>${b.title}</h3><div>${b.html}</div></div>`;
      case "lesson":
        return `<div class="lesson-player" data-lesson="${bid}">
          <div class="lesson-head">
            <span class="lesson-title">🎬 ${esc(b.title)}</span>
            <span class="lesson-ctrl">
              <button class="btn btn-primary lesson-play">▶ 播放讲解</button>
              <button class="btn btn-outline lesson-stop" style="display:none">⏹ 停止</button>
            </span>
          </div>
          <div class="lesson-stage"><div class="lesson-hint">点「播放讲解」,老师开讲啦 🎙️(讲解会一句一句出现并朗读)</div></div>
        </div>`;
      case "example":
        return `<div class="example-card">
          <div class="ex-q">${b.q}</div>
          <button class="reveal-btn">👀 点击查看解题过程</button>
          <div class="ex-steps">${b.steps}</div>
        </div>`;
      case "chant":
        return `<div class="rule-card"><h3>🎵 记忆口诀 <button class="mini-voice chant-voice" data-text="${esc(b.lines.join(""))}">🔊 朗读</button></h3><div class="chant">${
          b.lines.map(l => `<div class="line">${esc(l)}</div>`).join("")
        }</div></div>`;
      case "numberline":
        return `<div class="numberline-widget" data-widget="numberline">
          <div class="nl-display"><span class="zero">点击按钮,在数轴上移动小球 👇</span></div>
          <svg class="nl-svg" viewBox="0 0 660 80">
            <line x1="10" y1="40" x2="650" y2="40" stroke="#2b2d42" stroke-width="2"/>
            <polygon points="650,40 638,34 638,46" fill="#2b2d42"/>
            ${Array.from({ length: 21 }, (_, i) => {
              const v = i - 10, x = 30 + i * 30;
              return `<line x1="${x}" y1="34" x2="${x}" y2="46" stroke="#2b2d42" stroke-width="2"/>
                <text x="${x}" y="66" text-anchor="middle" font-size="12" fill="${v < 0 ? "#5b6ef5" : v > 0 ? "#ff5252" : "#2b2d42"}" font-weight="${v === 0 ? "bold" : "normal"}">${v}</text>`;
            }).join("")}
            <circle class="nl-dot" cx="330" cy="40" r="9" fill="#ff8a3d" stroke="#fff" stroke-width="2.5"/>
          </svg>
          <div class="nl-controls">
            <button class="nl-btn" data-move="-1">← 向左 1 格(−1)</button>
            <button class="nl-btn" data-move="0">回到原点 0</button>
            <button class="nl-btn" data-move="1">向右 1 格(+1)→</button>
          </div>
        </div>`;
      case "thermometer":
        return `<div class="thermo-widget" data-widget="thermo">
          <div class="thermo-body"><div class="thermo-fill" style="height:58%"></div></div>
          <div class="thermo-info">
            <div class="thermo-temp hot">+25℃</div>
            <div class="thermo-desc">夏天真热呀 ☀️</div>
            <div class="thermo-controls">
              <button class="nl-btn" data-temp="35">夏日 35℃</button>
              <button class="nl-btn" data-temp="25">舒适 25℃</button>
              <button class="nl-btn" data-temp="0">冰点 0℃</button>
              <button class="nl-btn" data-temp="-10">寒冬 −10℃</button>
              <button class="nl-btn" data-temp="-25">东北 −25℃</button>
            </div>
          </div>
        </div>`;
      case "flashcards":
        return `<div class="vocab-grid">${b.words.map((w, wi) => `
          <div class="vocab-card" data-word="${esc(w.word)}">
            <div class="vocab-inner">
              <div class="vocab-face vocab-front">
                <div class="word">${esc(w.word)}</div>
                <div class="phonetic">${esc(w.phonetic)}</div>
                <div class="hint">🔊 点我发音+翻面</div>
              </div>
              <div class="vocab-face vocab-back">
                <div class="cn">${esc(w.cn)}</div>
                <div class="sentence">${esc(w.sentence)}</div>
                <button class="mini-voice sent-voice" data-text="${esc(w.word)}. ${esc(w.sentence)}">🔊 听例句</button>
              </div>
            </div>
          </div>`).join("")}</div>`;
      case "reading":
        return `<div class="reading-passage">
          <div class="title">${esc(b.title)} ${b.speakable ? `<button class="mini-voice read-voice" data-text="${esc(b.paragraphs.join(" "))}">🔊 听全文</button>` : ""}</div>
          ${b.paragraphs.map(p => `<p>${esc(p)}</p>`).join("")}
        </div><div class="reading-tip">💡 ${esc(b.tip)}</div>`;
      default:
        return "";
    }
  }

  // ---------- 动画课堂播放 ----------
  let lessonToken = 0; // 防止并发播放
  function bindLessons() {
    // 收集 lesson 数据
    const lessonMap = {};
    const data = currentDayData;
    if (data) data.sections.forEach((sec, si) => sec.units.forEach((u, ui) =>
      u.blocks.forEach((b, bi) => { if (b.type === "lesson") lessonMap[si + "-" + ui + "-" + bi] = b; })));

    app.querySelectorAll(".lesson-player").forEach(el => {
      const b = lessonMap[el.dataset.lesson];
      if (!b) return;
      const stage = el.querySelector(".lesson-stage");
      const playBtn = el.querySelector(".lesson-play");
      const stopBtn = el.querySelector(".lesson-stop");

      async function play() {
        const token = ++lessonToken;
        TTS.stop();
        playBtn.style.display = "none";
        stopBtn.style.display = "";
        stage.innerHTML = "";
        for (let i = 0; i < b.steps.length; i++) {
          if (token !== lessonToken) return;
          const s = b.steps[i];
          const line = document.createElement("div");
          line.className = "lesson-line";
          line.innerHTML = `<span class="lesson-emoji">${s.emoji || "💡"}</span><span class="lesson-text">${esc(s.text)}</span>`;
          stage.appendChild(line);
          stage.querySelectorAll(".lesson-line").forEach(l => l.classList.remove("current"));
          line.classList.add("current");
          line.scrollIntoView({ block: "nearest", behavior: "smooth" });
          await TTS.speak(s.speak || s.text, guessLang(s.text));
          if (token !== lessonToken) return;
          await new Promise(r => setTimeout(r, 350));
        }
        if (token !== lessonToken) return;
        stage.querySelectorAll(".lesson-line").forEach(l => l.classList.remove("current"));
        stopBtn.style.display = "none";
        playBtn.style.display = "";
        playBtn.textContent = "🔁 再听一遍";
      }
      function stop() {
        lessonToken++;
        TTS.stop();
        stopBtn.style.display = "none";
        playBtn.style.display = "";
      }
      playBtn.addEventListener("click", play);
      stopBtn.addEventListener("click", stop);
    });

    // 小喇叭按钮(口诀 / 例句 / 全文)
    app.querySelectorAll(".mini-voice").forEach(btn => {
      btn.addEventListener("click", e => {
        e.stopPropagation();
        TTS.stop();
        TTS.speak(btn.dataset.text, guessLang(btn.dataset.text));
      });
    });
  }

  // ---------- 内嵌深度题 ----------
  function renderInlineQuestion(q, key, subject) {
    let inner;
    if (q.type === "choice") {
      inner = `<div class="options">${q.options.map((opt, oi) => `
        <div class="option" data-oi="${oi}">
          <span class="opt-letter">${"ABCD"[oi]}</span><span>${esc(opt)}</span>
        </div>`).join("")}</div>`;
    } else {
      inner = `<input class="fill-input" type="text" placeholder="在这里输入答案…" autocomplete="off">`;
    }
    return `<div class="quiz-question inline-q ${q.boss ? "boss-q" : ""}" data-key="${key}" data-subject="${subject}">
      <div class="q-head">
        <span class="q-num">${q.boss ? "🔥" : "✏️"}</span>
        <span class="q-text">${q.boss ? "<b>BOSS 挑战:</b>" : ""}${q.q}
          <button class="mini-voice q-voice" title="朗读题目">🔊</button></span>
        <span class="q-points">${q.points} XP</span>
      </div>
      ${inner}
      <div class="q-submit-row"><button class="btn btn-primary q-submit">提交答案</button></div>
      <div class="q-feedback"></div>
    </div>`;
  }

  let currentDayData = null;

  function bindInlineQuestions(day, data, totalQ) {
    const qMap = {};
    data.sections.forEach((sec, si) => {
      sec.units.forEach((u, ui) => { if (u.q) qMap[si + "-" + ui] = { q: u.q, unitName: u.name, subject: sec.subject }; });
    });

    app.querySelectorAll(".inline-q").forEach(qEl => {
      const key = qEl.dataset.key;
      const info = qMap[key];
      const q = info.q;

      // 朗读题目
      qEl.querySelector(".q-voice").addEventListener("click", e => {
        e.stopPropagation();
        TTS.stop();
        const optText = q.type === "choice" ? q.options.map((o, i) => "ABCD"[i] + ". " + o).join(". ") : "";
        TTS.speak(q.q + ". " + optText, q.voice || guessLang(q.q + optText));
      });

      qEl.querySelectorAll(".option").forEach(opt => {
        opt.addEventListener("click", () => {
          if (qEl.classList.contains("locked")) return;
          qEl.querySelectorAll(".option").forEach(o => o.classList.remove("selected"));
          opt.classList.add("selected");
        });
      });

      qEl.querySelector(".q-submit").addEventListener("click", (ev) => {
        if (qEl.classList.contains("locked")) return;
        let userAns, correct;
        if (q.type === "choice") {
          const sel = qEl.querySelector(".option.selected");
          if (!sel) { alert("先选一个答案再提交哦!"); return; }
          const oi = parseInt(sel.dataset.oi, 10);
          userAns = "ABCD"[oi] + ". " + q.options[oi];
          correct = oi === q.answer;
          qEl.querySelectorAll(".option").forEach((o, i) => {
            if (i === q.answer) o.classList.add("right-ans");
            else if (o.classList.contains("selected") && !correct) o.classList.add("wrong-pick");
          });
        } else {
          const val = qEl.querySelector(".fill-input").value.trim();
          if (!val) { alert("先填写答案再提交哦!"); return; }
          userAns = val;
          correct = q.accept.some(a => normalize(a) === normalize(val));
          qEl.querySelector(".fill-input").disabled = true;
        }

        // 答题用时(防作弊监测)
        const now = Date.now();
        const elapsed = (now - lastAnswerTime) / 1000;
        lastAnswerTime = now;
        const fast = correct && elapsed < 12; // 12 秒内答对深度题 → 标记

        // 连击与音效
        if (correct) {
          combo += 1; maxCombo = Math.max(maxCombo, combo);
          if (q.boss) { SFX.boss(); confetti(40); } else { SFX.correct(); if (combo >= 2) confetti(12); }
          const rect = ev.target.getBoundingClientRect();
          floatTip(`+${q.points} XP${combo >= 2 ? "  COMBO ×" + combo : ""}`, rect.left + 40, rect.top - 10, "tip-xp");
          const cc = document.getElementById("combo-chip");
          if (combo >= 2) { cc.style.display = ""; cc.textContent = `🔥 COMBO ×${combo}`; }
        } else {
          combo = 0;
          SFX.wrong();
          document.getElementById("combo-chip").style.display = "none";
        }

        qEl.classList.add("locked", correct ? "correct" : "wrong");
        qEl.querySelector(".q-submit-row").style.display = "none";

        // 反馈 + 动画配音讲解
        const fb = qEl.querySelector(".q-feedback");
        fb.innerHTML = `
          <div class="q-result ${correct ? "ok" : "no"}">
            ${correct ? `🎉 ${q.boss ? "BOSS 被你击败了!" : "回答正确!"}+${q.points} XP` : `💪 这道题有点难,正确答案:<b>${esc(q.type === "choice" ? "ABCD"[q.answer] + ". " + q.options[q.answer] : q.accept[0])}</b>`}
            <div class="explain">💡 ${esc(q.explain)}</div>
          </div>
          ${q.explainSteps ? `<div class="lesson-player explain-lesson">
            <div class="lesson-head">
              <span class="lesson-title">🎬 名师讲解(强烈建议听一遍)</span>
              <span class="lesson-ctrl">
                <button class="btn btn-primary lesson-play">▶ 播放讲解</button>
                <button class="btn btn-outline lesson-stop" style="display:none">⏹ 停止</button>
              </span>
            </div>
            <div class="lesson-stage"><div class="lesson-hint">听懂讲解,下次遇到同类题就是送分题 🎁</div></div>
          </div>` : ""}`;

        // 绑定讲解动画
        if (q.explainSteps) {
          const el = fb.querySelector(".explain-lesson");
          const stage = el.querySelector(".lesson-stage");
          const playBtn = el.querySelector(".lesson-play");
          const stopBtn = el.querySelector(".lesson-stop");
          async function play() {
            const token = ++lessonToken;
            TTS.stop();
            playBtn.style.display = "none"; stopBtn.style.display = "";
            stage.innerHTML = "";
            for (const s of q.explainSteps) {
              if (token !== lessonToken) return;
              const line = document.createElement("div");
              line.className = "lesson-line";
              line.innerHTML = `<span class="lesson-emoji">${s.emoji || "💡"}</span><span class="lesson-text">${esc(s.text)}</span>`;
              stage.appendChild(line);
              stage.querySelectorAll(".lesson-line").forEach(l => l.classList.remove("current"));
              line.classList.add("current");
              line.scrollIntoView({ block: "nearest", behavior: "smooth" });
              await TTS.speak(s.speak || s.text, guessLang(s.text));
              if (token !== lessonToken) return;
              await new Promise(r => setTimeout(r, 350));
            }
            if (token !== lessonToken) return;
            stage.querySelectorAll(".lesson-line").forEach(l => l.classList.remove("current"));
            stopBtn.style.display = "none"; playBtn.style.display = ""; playBtn.textContent = "🔁 再听一遍";
          }
          playBtn.addEventListener("click", play);
          stopBtn.addEventListener("click", () => { lessonToken++; TTS.stop(); stopBtn.style.display = "none"; playBtn.style.display = ""; });
          // 自动播放讲解(答错时)
          if (!correct) setTimeout(play, 600);
        }

        dayAnswers[key] = {
          subject: info.subject, unitName: info.unitName, q: q.q, points: q.points,
          correct: correct, userAns: userAns, boss: !!q.boss, fast: fast, seconds: Math.round(elapsed),
          rightAns: q.type === "choice" ? "ABCD"[q.answer] + ". " + q.options[q.answer] : q.accept[0],
          explain: q.explain
        };
        const done = Object.keys(dayAnswers).length;
        document.getElementById("progress-chip").textContent = `已闯 ${done} / ${totalQ} 题`;
      });
    });

    document.getElementById("btn-finish").addEventListener("click", () => {
      const done = Object.keys(dayAnswers).length;
      if (done < totalQ && !confirm(`还有 ${totalQ - done} 道题没挑战,未做的题记 0 分。\n确定要结束闯关吗?`)) return;
      finishDay(day, data);
    });
  }

  // ================================================================
  // 闯关结算
  // ================================================================
  function finishDay(day, data) {
    TTS.stop();
    let score = 0, total = 0;
    const detail = [];
    const subjectStats = {};

    data.sections.forEach((sec, si) => {
      sec.units.forEach((u, ui) => {
        if (!u.q) return;
        const key = si + "-" + ui;
        const rec = dayAnswers[key] || {
          subject: sec.subject, unitName: u.name, q: u.q.q, points: u.q.points,
          correct: false, userAns: "(未作答)", boss: !!u.q.boss, fast: false, seconds: 0,
          rightAns: u.q.type === "choice" ? "ABCD"[u.q.answer] + ". " + u.q.options[u.q.answer] : u.q.accept[0],
          explain: u.q.explain
        };
        detail.push(rec);
        total += rec.points;
        if (rec.correct) score += rec.points;
        if (!subjectStats[rec.subject]) subjectStats[rec.subject] = { got: 0, total: 0, wrong: 0, count: 0 };
        const st = subjectStats[rec.subject];
        st.total += rec.points; st.count += 1;
        if (rec.correct) st.got += rec.points; else st.wrong += 1;
      });
    });

    // ---- 游戏化结算 ----
    const s = loadStore();
    const firstTime = !s["day" + day];
    const oldLv = levelOf(s.xp || 0);
    if (firstTime) s.xp = (s.xp || 0) + score;
    const newLv = levelOf(s.xp || 0);

    // 连续打卡
    const today = new Date().toDateString();
    if (s.lastDate !== today) {
      const yesterday = new Date(Date.now() - 864e5).toDateString();
      s.streak = (s.lastDate === yesterday ? (s.streak || 0) : 0) + 1;
      s.lastDate = today;
    }

    // 徽章
    s.badges = s.badges || [];
    const newBadges = [];
    function award(k) { if (!s.badges.includes(k)) { s.badges.push(k); newBadges.push(k); } }
    if (day === 1) award("first");
    if (score === total) award("perfect");
    if (maxCombo >= 3) award("combo3");
    if (detail.some(d => d.boss && d.correct)) award("boss");
    if ((s.streak || 0) >= 3) award("streak3");
    if ((s.streak || 0) >= 7) award("streak7");
    if (newLv >= 5) award("lv5");

    const fastCount = detail.filter(d => d.fast).length;
    const result = {
      day: day, score: score, total: total,
      subjects: subjectStats, detail: detail,
      duration: Date.now() - dayStartTime,
      maxCombo: maxCombo, fastCount: fastCount,
      xpGained: firstTime ? score : 0,
      newBadges: newBadges, levelUp: newLv > oldLv ? newLv : 0,
      finishedAt: new Date().toLocaleString("zh-CN")
    };
    s["day" + day] = result;
    saveStore(s);
    if (newBadges.length || newLv > oldLv) SFX.badge();
    renderScore(day, result);
  }

  // ================================================================
  // 结算页
  // ================================================================
  function scoreComment(pct) {
    if (pct >= 90) return { stars: 5, title: "太强了,恩恩!", comment: "这个成绩,开学就是老师眼里的种子选手 ⭐" };
    if (pct >= 80) return { stars: 4, title: "很不错,继续加油!", comment: "把错题的讲解再听一遍,你离满分只差一步!" };
    if (pct >= 70) return { stars: 3, title: "合格,但你能更强", comment: "错的题都是升级的机会,听完讲解再走哦。" };
    if (pct >= 60) return { stars: 2, title: "刚刚及格,别慌", comment: "把今天的动画课堂再看一遍,明天再战!" };
    return { stars: 1, title: "万事开头难", comment: "听完每道错题的讲解,你会发现其实不难 💪" };
  }

  function renderScore(day, result) {
    window.scrollTo(0, 0);
    const pct = Math.round(result.score / result.total * 100);
    const c = scoreComment(pct);
    const R = 70, CIRC = 2 * Math.PI * R;
    if (pct >= 80) confetti(50);

    const subCards = Object.keys(result.subjects).map(key => {
      const st = result.subjects[key];
      return `<div class="sub-card ${key}">
        <div class="sub-name">${subIcon(key)} ${subLabel(key)}</div>
        <div class="sub-score">${st.got}<small style="font-size:14px;color:var(--text-light)"> / ${st.total}</small></div>
        <div class="sub-name">${st.wrong === 0 ? "全对 🎉" : "错 " + st.wrong + " 题"}</div>
      </div>`;
    }).join("");

    const loot = `
      <div class="loot-row">
        <div class="loot-item">⚡ 获得 <b>${result.xpGained}</b> XP</div>
        ${result.maxCombo >= 2 ? `<div class="loot-item">🔥 最高连击 ×${result.maxCombo}</div>` : ""}
        ${result.levelUp ? `<div class="loot-item lvup">🚀 升到 Lv.${result.levelUp}!</div>` : ""}
        ${(result.newBadges || []).map(k => `<div class="loot-item badge-new">${BADGES[k].icon} 新徽章「${BADGES[k].name}」</div>`).join("")}
      </div>`;

    const rows = result.detail.map((d, i) => `
      <div class="q-row ${d.correct ? "ok" : "no"}">
        <span class="q-row-mark">${d.correct ? "✓" : "✗"}</span>
        <span class="tag ${d.subject}">${subLabel(d.subject)}</span>
        <div class="q-row-body">
          <div class="q-row-text">${i + 1}. ${d.boss ? "🔥" : ""}${esc(d.q)} ${d.fast ? '<span class="fast-flag" title="答题用时过短">⚡用时' + d.seconds + '秒</span>' : ""}</div>
          ${d.correct ? "" : `<div class="q-row-detail">你的答案:${esc(d.userAns)} → 正确答案:<b>${esc(d.rightAns)}</b><br>💡 ${esc(d.explain)}</div>`}
        </div>
        <span class="q-row-pts">${d.correct ? "+" + d.points : "0"}分</span>
      </div>`).join("");

    app.innerHTML = `
      <div class="score-hero">
        <div class="score-title" style="font-size:17px;color:var(--text-light)">${esc(window.DAYS[day].title)} · 闯关结算</div>
        <div class="score-ring">
          <svg width="160" height="160">
            <defs><linearGradient id="scoreGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#5b6ef5"/><stop offset="100%" stop-color="#26b8a5"/>
            </linearGradient></defs>
            <circle class="ring-bg" cx="80" cy="80" r="${R}"/>
            <circle class="ring-fg" cx="80" cy="80" r="${R}"
              stroke-dasharray="${CIRC}" stroke-dashoffset="${CIRC}" data-target="${CIRC * (1 - pct / 100)}"/>
          </svg>
          <div class="score-num"><b id="score-counter">0</b><span>/ ${result.total} 分</span></div>
        </div>
        <div class="stars">${"★".repeat(c.stars).split("").map(() => `<span class="star">⭐</span>`).join("")}</div>
        <div class="score-title">${c.title}</div>
        <div class="score-comment">${c.comment} · 用时约 ${fmtDuration(result.duration)}</div>
        ${loot}
        <div class="score-sub">${subCards}</div>
        <div class="score-actions">
          <button class="btn btn-success btn-big" id="btn-export">🖼️ 导出图片报告发给爸妈</button>
          <button class="btn btn-outline" id="btn-go-home">🗺️ 回到冒险地图</button>
        </div>
      </div>
      <div class="section-card">
        <h2>📋 全部题目对错一览(共 ${result.detail.length} 题)</h2>
        <div class="section-meta">错题请回到关卡里把「名师讲解」再听一遍</div>
        ${rows}
      </div>`;
    refreshGameChip();

    requestAnimationFrame(() => {
      const ring = app.querySelector(".ring-fg");
      setTimeout(() => { ring.style.strokeDashoffset = ring.dataset.target; }, 100);
      const counter = document.getElementById("score-counter");
      const start = performance.now();
      (function tick(now) {
        const p = Math.min((now - start) / 1400, 1);
        counter.textContent = Math.round(result.score * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(tick);
      })(start);
    });

    document.getElementById("btn-export").onclick = () => exportImage(day, result);
    document.getElementById("btn-go-home").onclick = renderHome;
  }

  // ================================================================
  // 导出图片报告(Canvas → PNG)
  // ================================================================
  function exportImage(day, result) {
    const name = "恩恩";
    const cur = window.CURRICULUM[day - 1];
    const pct = Math.round(result.score / result.total * 100);
    const c = scoreComment(pct);
    const subKeys = Object.keys(result.subjects);

    const W = 900, PAD = 48;
    const scale = 2;

    const measureCanvas = document.createElement("canvas");
    const mctx = measureCanvas.getContext("2d");
    function wrapText(text, font, maxWidth) {
      mctx.font = font;
      const chars = String(text).split("");
      const lines = [];
      let line = "";
      chars.forEach(ch => {
        if (mctx.measureText(line + ch).width > maxWidth) { lines.push(line); line = ch; }
        else line += ch;
      });
      if (line) lines.push(line);
      return lines;
    }

    const qFont = "15px 'PingFang SC','Microsoft YaHei',sans-serif";
    const dFont = "13px 'PingFang SC','Microsoft YaHei',sans-serif";
    let qListHeight = 0;
    const qRender = result.detail.map((d, i) => {
      const flag = d.fast ? `(⚡用时${d.seconds}秒)` : "";
      const qLines = wrapText(`${i + 1}. [${subLabel(d.subject)}]${d.boss ? "[BOSS]" : ""} ${d.q} ${flag}`, qFont, W - PAD * 2 - 90);
      let dLines = [];
      if (!d.correct) {
        dLines = wrapText(`你的答案:${d.userAns} → 正确答案:${d.rightAns}`, dFont, W - PAD * 2 - 110);
      }
      const h = qLines.length * 24 + dLines.length * 20 + 18;
      qListHeight += h;
      return { d, qLines, dLines, h };
    });

    const headerH = 120, scoreH = 190, lootH = 44, tableH = 46 * (subKeys.length + 1) + 30, signH = 100, footH = 50, listTitleH = 56;
    const noteH = result.fastCount > 0 ? 34 : 0;
    const H = headerH + scoreH + lootH + tableH + listTitleH + qListHeight + noteH + signH + footH;

    const canvas = document.createElement("canvas");
    canvas.width = W * scale; canvas.height = H * scale;
    const ctx = canvas.getContext("2d");
    ctx.scale(scale, scale);

    ctx.fillStyle = "#ffffff"; ctx.fillRect(0, 0, W, H);
    const grad = ctx.createLinearGradient(0, 0, W, 0);
    grad.addColorStop(0, "#5b6ef5"); grad.addColorStop(1, "#7c5bf5");
    ctx.fillStyle = grad; ctx.fillRect(0, 0, W, 86);
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 24px 'PingFang SC','Microsoft YaHei',sans-serif";
    ctx.fillText("🌟 恩恩的小升初衔接暑期提升计划 · 学习报告", PAD, 52);

    ctx.fillStyle = "#6b7280";
    ctx.font = "15px 'PingFang SC','Microsoft YaHei',sans-serif";
    ctx.fillText(`第 ${day} 关 · 完成时间:${result.finishedAt} · 学习用时约 ${fmtDuration(result.duration)}`, PAD, headerH - 6);

    let y = headerH + 62;
    ctx.fillStyle = "#5b6ef5";
    ctx.font = "bold 64px 'PingFang SC','Microsoft YaHei',sans-serif";
    const scoreText = String(result.score);
    ctx.fillText(scoreText, PAD, y);
    const sw = ctx.measureText(scoreText).width;
    ctx.fillStyle = "#6b7280";
    ctx.font = "20px 'PingFang SC','Microsoft YaHei',sans-serif";
    ctx.fillText(` / ${result.total} 分`, PAD + sw + 6, y);
    ctx.font = "28px sans-serif";
    ctx.fillText("⭐".repeat(c.stars), PAD, y + 44);
    ctx.fillStyle = "#2b2d42";
    ctx.font = "bold 19px 'PingFang SC','Microsoft YaHei',sans-serif";
    ctx.fillText(c.title + " " + c.comment, PAD + c.stars * 34 + 16, y + 40);

    // 战利品行
    y = headerH + scoreH;
    ctx.fillStyle = "#8b5cf6";
    ctx.font = "bold 15px 'PingFang SC','Microsoft YaHei',sans-serif";
    const lootBits = [`⚡ 本关获得 ${result.xpGained} XP`];
    if (result.maxCombo >= 2) lootBits.push(`🔥 最高连击 ×${result.maxCombo}`);
    (result.newBadges || []).forEach(k => lootBits.push(`${BADGES[k].icon} 新徽章「${BADGES[k].name}」`));
    ctx.fillText(lootBits.join("    "), PAD, y + 20);
    y += lootH;

    const colX = [PAD, PAD + 130, PAD + 470, PAD + 610];
    ctx.fillStyle = "#eef0ff";
    ctx.fillRect(PAD, y, W - PAD * 2, 46);
    ctx.fillStyle = "#2b2d42";
    ctx.font = "bold 15px 'PingFang SC','Microsoft YaHei',sans-serif";
    ctx.fillText("科目", colX[0] + 14, y + 29);
    ctx.fillText("今日内容", colX[1] + 14, y + 29);
    ctx.fillText("得分", colX[2] + 14, y + 29);
    ctx.fillText("错题", colX[3] + 14, y + 29);
    const topicMap = { math: cur.math, english: cur.english, chinese: cur.chinese };
    subKeys.forEach((key, i) => {
      const st = result.subjects[key];
      const ry = y + 46 * (i + 1);
      ctx.strokeStyle = "#e5e8f5"; ctx.strokeRect(PAD, ry, W - PAD * 2, 46);
      ctx.fillStyle = "#2b2d42";
      ctx.font = "15px 'PingFang SC','Microsoft YaHei',sans-serif";
      ctx.fillText(`${subIcon(key)} ${subLabel(key)}`, colX[0] + 14, ry + 29);
      let topic = topicMap[key] || cur.extra.topic;
      if (topic.length > 22) topic = topic.slice(0, 21) + "…";
      ctx.fillText(topic, colX[1] + 14, ry + 29);
      ctx.font = "bold 15px 'PingFang SC','Microsoft YaHei',sans-serif";
      ctx.fillStyle = st.wrong === 0 ? "#34c759" : "#2b2d42";
      ctx.fillText(`${st.got} / ${st.total}`, colX[2] + 14, ry + 29);
      ctx.fillStyle = st.wrong === 0 ? "#34c759" : "#ff5252";
      ctx.fillText(st.wrong === 0 ? "全对" : `${st.wrong} / ${st.count}`, colX[3] + 14, ry + 29);
    });

    y += tableH + 8;
    ctx.fillStyle = "#2b2d42";
    ctx.font = "bold 18px 'PingFang SC','Microsoft YaHei',sans-serif";
    const wrongTotal = result.detail.filter(d => !d.correct).length;
    ctx.fillText(`📋 全部题目对错一览(共 ${result.detail.length} 题,错 ${wrongTotal} 题)`, PAD, y + 24);
    y += listTitleH;

    qRender.forEach(({ d, qLines, dLines }) => {
      ctx.font = "bold 17px sans-serif";
      ctx.fillStyle = d.correct ? "#34c759" : "#ff5252";
      ctx.fillText(d.correct ? "✓" : "✗", PAD, y + 20);
      ctx.font = qFont;
      ctx.fillStyle = "#2b2d42";
      qLines.forEach((ln, li) => ctx.fillText(ln, PAD + 30, y + 20 + li * 24));
      ctx.font = "bold 14px 'PingFang SC','Microsoft YaHei',sans-serif";
      ctx.fillStyle = d.correct ? "#34c759" : "#ff5252";
      ctx.textAlign = "right";
      ctx.fillText(d.correct ? `+${d.points}分` : "0分", W - PAD, y + 20);
      ctx.textAlign = "left";
      let yy = y + 20 + qLines.length * 24 - 4;
      if (!d.correct) {
        ctx.font = dFont;
        ctx.fillStyle = "#c0392b";
        dLines.forEach((ln, li) => ctx.fillText(ln, PAD + 30, yy + li * 20));
      }
      y += qLines.length * 24 + dLines.length * 20 + 18;
      ctx.strokeStyle = "#f0f1f8";
      ctx.beginPath(); ctx.moveTo(PAD, y - 10); ctx.lineTo(W - PAD, y - 10); ctx.stroke();
    });

    if (result.fastCount > 0) {
      ctx.fillStyle = "#e67e22";
      ctx.font = "bold 14px 'PingFang SC','Microsoft YaHei',sans-serif";
      ctx.fillText(`⚡ 提示:有 ${result.fastCount} 道题答题用时明显偏短,建议家长了解孩子是否独立思考完成。`, PAD, y + 14);
      y += noteH;
    }

    y += 20;
    ctx.fillStyle = "#6b7280";
    ctx.font = "15px 'PingFang SC','Microsoft YaHei',sans-serif";
    ctx.fillText("家长签名:____________________", PAD, y + 24);
    ctx.fillText("日期:____________________", W - PAD - 260, y + 24);

    ctx.fillStyle = "#9aa0b5";
    ctx.font = "12px 'PingFang SC','Microsoft YaHei',sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("本报告由「恩恩的提升计划」自动生成 · 每天进步一点点", W / 2, H - 22);
    ctx.textAlign = "left";

    canvas.toBlob(blob => {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `恩恩学习报告_第${day}关_${result.score}分.png`;
      a.click();
      URL.revokeObjectURL(a.href);
      alert("图片报告已下载!🖼️\n\n在下载文件夹找到这张 PNG 图片,微信直接发给爸爸妈妈即可。");
    }, "image/png");
  }

  // ---------- 交互组件绑定 ----------
  function bindWidgets() {
    app.querySelectorAll(".reveal-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        btn.nextElementSibling.classList.add("show");
        btn.style.display = "none";
      });
    });
    // 单词卡:点击发音 + 翻面
    app.querySelectorAll(".vocab-card").forEach(card => {
      card.addEventListener("click", (e) => {
        if (e.target.closest(".mini-voice")) return;
        card.classList.toggle("flipped");
        const w = card.dataset.word;
        if (w && card.classList.contains("flipped")) { TTS.stop(); TTS.speak(w, "en"); }
        else if (w) { TTS.stop(); TTS.speak(w, "en"); }
      });
    });
    app.querySelectorAll('[data-widget="numberline"]').forEach(w => {
      let pos = 0;
      const dot = w.querySelector(".nl-dot");
      const display = w.querySelector(".nl-display");
      w.querySelectorAll("[data-move]").forEach(btn => {
        btn.addEventListener("click", () => {
          const mv = parseInt(btn.dataset.move, 10);
          pos = mv === 0 ? 0 : Math.max(-10, Math.min(10, pos + mv));
          dot.setAttribute("cx", 330 + pos * 30);
          const cls = pos > 0 ? "pos" : pos < 0 ? "neg" : "zero";
          const label = pos > 0 ? `+${pos}(正数,在原点右边)` : pos < 0 ? `${pos}(负数,在原点左边)` : "0(原点,不正不负)";
          display.innerHTML = `<span class="${cls}">${label}</span>`;
        });
      });
    });
    app.querySelectorAll('[data-widget="thermo"]').forEach(w => {
      const fill = w.querySelector(".thermo-fill");
      const tempEl = w.querySelector(".thermo-temp");
      const desc = w.querySelector(".thermo-desc");
      const descs = { "35": "热浪来袭,注意防暑 🥵", "25": "舒适宜人 ☀️", "0": "水开始结冰啦 🧊", "-10": "零下 10 度,记作 −10℃ ❄️", "-25": "泼水成冰!负数越小越冷 ⛄" };
      w.querySelectorAll("[data-temp]").forEach(btn => {
        btn.addEventListener("click", () => {
          const t = parseInt(btn.dataset.temp, 10);
          fill.style.height = ((t + 30) / 70 * 100) + "%";
          fill.classList.toggle("cold", t <= 0);
          tempEl.className = "thermo-temp " + (t <= 0 ? "cold" : "hot");
          tempEl.textContent = (t > 0 ? "+" : t < 0 ? "−" : "") + Math.abs(t) + "℃";
          desc.textContent = descs[String(t)];
        });
      });
    });
  }

  // ================================================================
  // 启动
  // ================================================================
  // 供 renderDay 中 bindLessons 使用
  Object.defineProperty(window, "__currentDayData", { get: () => currentDayData });
  const _renderDay = renderDay;
  renderDay = function (day) { currentDayData = window.DAYS[day] || null; _renderDay(day); };

  document.getElementById("btn-home").addEventListener("click", renderHome);
  renderHome();
})();
