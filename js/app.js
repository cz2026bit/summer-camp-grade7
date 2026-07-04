/* ============ 暑假冲刺营 · 应用逻辑 ============ */
(function () {
  const app = document.getElementById("app");
  const TOTAL_DAYS = 40;
  const STORE_KEY = "summer_camp_v2";

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

  // ---------- 本地存储 ----------
  function loadStore() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; }
    catch (e) { return {}; }
  }
  function saveStore(s) { localStorage.setItem(STORE_KEY, JSON.stringify(s)); }
  function getResult(day) { return loadStore()["day" + day] || null; }
  function setResult(day, result) {
    const s = loadStore();
    s["day" + day] = result;
    saveStore(s);
  }
  function getName() { return loadStore().studentName || ""; }
  function setName(n) { const s = loadStore(); s.studentName = n; saveStore(s); }

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
  // 首页
  // ================================================================
  function renderHome() {
    window.scrollTo(0, 0);
    const doneCount = Object.keys(loadStore()).filter(k => /^day\d+$/.test(k)).length;
    const pct = Math.round(doneCount / TOTAL_DAYS * 100);

    let recommended = null;
    for (let i = 1; i <= TOTAL_DAYS; i++) {
      if (window.DAYS[i] && !getResult(i)) { recommended = i; break; }
    }

    let html = `
      <div class="hero">
        <h1>📅 40 天小升初冲刺计划</h1>
        <p>每天 2~4 小时 · 数学 / 英语 / 语文 / 副科 · 边学边练 → 打分 → 导出报告给家长</p>
        <div class="progress-wrap">
          <div class="progress-bar"><div style="width:0%" data-target="${pct}%"></div></div>
          <div class="progress-label">已完成 ${doneCount} / ${TOTAL_DAYS} 天(${pct}%)</div>
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
      if (result) badge = `<span class="day-score">✅ ${result.score}分</span>`;
      else if (!hasContent) badge = `<span class="day-badge">敬请期待</span>`;
      else if (c.day === recommended) badge = `<span class="day-badge">👉 推荐今天学</span>`;

      cards += `
        <div class="day-card ${hasContent ? "" : "locked"} ${c.day === recommended ? "recommended" : ""}"
             style="animation-delay:${Math.min(idx * 0.02, 0.5)}s"
             ${hasContent ? `data-day="${c.day}"` : ""}>
          <div class="day-num">第 ${c.day} 天</div>
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

    requestAnimationFrame(() => {
      const bar = app.querySelector(".progress-bar > div");
      if (bar) setTimeout(() => { bar.style.width = bar.dataset.target; }, 100);
    });

    app.querySelectorAll(".day-card[data-day]").forEach(card => {
      card.addEventListener("click", () => renderDay(parseInt(card.dataset.day, 10)));
    });
  }

  // ================================================================
  // 学习页:知识点 + 对应题目,边学边练
  // ================================================================
  let dayStartTime = null;
  let dayAnswers = {};   // key -> {correct, userAns, ...}

  function stepsBar(active) {
    const steps = ["📖 边学边练(每个知识点配一题)", "🏆 成绩报告"];
    return `<div class="steps">${steps.map((s, i) =>
      `<div class="step-pill ${i === active ? "active" : i < active ? "done" : ""}">${s}</div>`
    ).join("")}</div>`;
  }

  function countQuestions(data) {
    return data.sections.reduce((n, s) => n + s.units.length, 0);
  }

  function renderDay(day) {
    window.scrollTo(0, 0);
    const data = window.DAYS[day];
    if (!data) return renderHome();
    dayStartTime = Date.now();
    dayAnswers = {};
    const totalQ = countQuestions(data);

    let html = `
      <div class="day-header">
        <h1>${esc(data.title)}</h1>
        <div class="meta">⏱️ ${esc(data.estimate)} · 学完一个知识点马上做对应的题,做完立刻看讲解 ✅</div>
      </div>
      ${stepsBar(0)}`;

    data.sections.forEach((sec, si) => {
      html += `<div class="section-card ${sec.subject}">
        <h2>${sec.icon} ${esc(sec.title)} <span class="tag ${sec.subject}">${subLabel(sec.subject)}</span></h2>
        <div class="section-meta">预计用时 ${sec.minutes} 分钟 · ${sec.units.length} 个知识点 ${sec.units.length} 道题</div>`;
      sec.units.forEach((u, ui) => {
        const key = si + "-" + ui;
        html += `<div class="unit">
          <div class="unit-name">📍 ${esc(u.name)}</div>
          ${u.blocks.map(renderBlock).join("")}
          ${renderInlineQuestion(u.q, key, sec.subject)}
        </div>`;
      });
      html += `</div>`;
    });

    html += `
      <div class="quiz-sticky">
        <div class="finish-bar">
          <span id="progress-chip" class="progress-chip">已完成 0 / ${totalQ} 题</span>
          <button class="btn btn-success btn-big" id="btn-finish">全部完成,查看成绩 🏆</button>
        </div>
      </div>`;
    app.innerHTML = html;

    bindWidgets();
    bindInlineQuestions(day, data, totalQ);
  }

  // ---------- 学习内容块渲染 ----------
  function renderBlock(b) {
    switch (b.type) {
      case "text":
        return `<div class="block-text">${b.html}</div>`;
      case "rule":
        return `<div class="rule-card"><h3>${b.title}</h3><div>${b.html}</div></div>`;
      case "example":
        return `<div class="example-card">
          <div class="ex-q">${b.q}</div>
          <button class="reveal-btn">👀 点击查看解题过程</button>
          <div class="ex-steps">${b.steps}</div>
        </div>`;
      case "chant":
        return `<div class="rule-card"><h3>🎵 记忆口诀(逐行出现)</h3><div class="chant">${
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
        return `<div class="vocab-grid">${b.words.map(w => `
          <div class="vocab-card">
            <div class="vocab-inner">
              <div class="vocab-face vocab-front">
                <div class="word">${esc(w.word)}</div>
                <div class="phonetic">${esc(w.phonetic)}</div>
                <div class="hint">点我翻面 👆</div>
              </div>
              <div class="vocab-face vocab-back">
                <div class="cn">${esc(w.cn)}</div>
                <div class="sentence">${esc(w.sentence)}</div>
              </div>
            </div>
          </div>`).join("")}</div>`;
      case "reading":
        return `<div class="reading-passage">
          <div class="title">${esc(b.title)}</div>
          ${b.paragraphs.map(p => `<p>${esc(p)}</p>`).join("")}
        </div><div class="reading-tip">💡 ${esc(b.tip)}</div>`;
      default:
        return "";
    }
  }

  // ---------- 内嵌题目 ----------
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
    return `<div class="quiz-question inline-q" data-key="${key}" data-subject="${subject}">
      <div class="q-head">
        <span class="q-num">✏️</span>
        <span class="q-text">随堂练:${q.q}</span>
        <span class="q-points">${q.points}分</span>
      </div>
      ${inner}
      <div class="q-submit-row"><button class="btn btn-primary q-submit">提交本题</button></div>
      <div class="q-feedback"></div>
    </div>`;
  }

  function bindInlineQuestions(day, data, totalQ) {
    // 建立 key -> 题目数据 的映射
    const qMap = {};
    data.sections.forEach((sec, si) => {
      sec.units.forEach((u, ui) => { qMap[si + "-" + ui] = { q: u.q, unitName: u.name, subject: sec.subject }; });
    });

    app.querySelectorAll(".inline-q").forEach(qEl => {
      const key = qEl.dataset.key;
      const info = qMap[key];
      const q = info.q;

      // 选项选择
      qEl.querySelectorAll(".option").forEach(opt => {
        opt.addEventListener("click", () => {
          if (qEl.classList.contains("locked")) return;
          qEl.querySelectorAll(".option").forEach(o => o.classList.remove("selected"));
          opt.classList.add("selected");
        });
      });

      // 提交本题:立即判分 + 讲解
      qEl.querySelector(".q-submit").addEventListener("click", () => {
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

        qEl.classList.add("locked", correct ? "correct" : "wrong");
        qEl.querySelector(".q-submit-row").style.display = "none";
        qEl.querySelector(".q-feedback").innerHTML = `
          <div class="q-result ${correct ? "ok" : "no"}">
            ${correct ? `🎉 回答正确!+${q.points} 分` : `❌ 回答错误。正确答案:<b>${esc(q.type === "choice" ? "ABCD"[q.answer] + ". " + q.options[q.answer] : q.accept[0])}</b>`}
            <div class="explain">💡 ${esc(q.explain)}</div>
          </div>`;

        dayAnswers[key] = {
          subject: info.subject, unitName: info.unitName, q: q.q, points: q.points,
          correct: correct, userAns: userAns,
          rightAns: q.type === "choice" ? "ABCD"[q.answer] + ". " + q.options[q.answer] : q.accept[0],
          explain: q.explain
        };
        const done = Object.keys(dayAnswers).length;
        document.getElementById("progress-chip").textContent = `已完成 ${done} / ${totalQ} 题`;
      });
    });

    document.getElementById("btn-finish").addEventListener("click", () => {
      const done = Object.keys(dayAnswers).length;
      if (done < totalQ && !confirm(`还有 ${totalQ - done} 道题没做,未做的题记 0 分。\n确定要结束今天的学习吗?`)) return;
      finishDay(day, data);
    });
  }

  // ================================================================
  // 统计成绩
  // ================================================================
  function finishDay(day, data) {
    let score = 0, total = 0;
    const detail = [];
    const subjectStats = {};

    data.sections.forEach((sec, si) => {
      sec.units.forEach((u, ui) => {
        const key = si + "-" + ui;
        const rec = dayAnswers[key] || {
          subject: sec.subject, unitName: u.name, q: u.q.q, points: u.q.points,
          correct: false, userAns: "(未作答)",
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

    const result = {
      day: day, score: score, total: total,
      subjects: subjectStats, detail: detail,
      duration: Date.now() - dayStartTime,
      finishedAt: new Date().toLocaleString("zh-CN")
    };
    setResult(day, result);
    renderScore(day, result);
  }

  // ================================================================
  // 成绩报告页
  // ================================================================
  function scoreComment(pct) {
    if (pct >= 90) return { stars: 5, title: "太棒了,学霸预定!", comment: "继续保持这个状态,开学你就是最亮的星 ⭐" };
    if (pct >= 80) return { stars: 4, title: "很不错,继续加油!", comment: "把错题弄懂,你离满分只差一点点!" };
    if (pct >= 70) return { stars: 3, title: "合格啦,还有进步空间", comment: "建议把错题记到错题本上,明天再看一遍。" };
    if (pct >= 60) return { stars: 2, title: "刚刚及格,要加把劲哦", comment: "今天的知识点建议再学一遍,基础很重要!" };
    return { stars: 1, title: "别灰心,万事开头难", comment: "回到学习页重新看一遍,把错题弄懂,你一定可以的!💪" };
  }

  function renderScore(day, result) {
    window.scrollTo(0, 0);
    const pct = Math.round(result.score / result.total * 100);
    const c = scoreComment(pct);
    const R = 70, CIRC = 2 * Math.PI * R;

    const subCards = Object.keys(result.subjects).map(key => {
      const st = result.subjects[key];
      return `<div class="sub-card ${key}">
        <div class="sub-name">${subIcon(key)} ${subLabel(key)}</div>
        <div class="sub-score">${st.got}<small style="font-size:14px;color:var(--text-light)"> / ${st.total}</small></div>
        <div class="sub-name">${st.wrong === 0 ? "全对 🎉" : "错 " + st.wrong + " 题"}</div>
      </div>`;
    }).join("");

    // 全部题目对错列表
    const rows = result.detail.map((d, i) => `
      <div class="q-row ${d.correct ? "ok" : "no"}">
        <span class="q-row-mark">${d.correct ? "✓" : "✗"}</span>
        <span class="tag ${d.subject}">${subLabel(d.subject)}</span>
        <div class="q-row-body">
          <div class="q-row-text">${i + 1}. ${esc(d.q)}</div>
          ${d.correct ? "" : `<div class="q-row-detail">你的答案:${esc(d.userAns)} → 正确答案:<b>${esc(d.rightAns)}</b><br>💡 ${esc(d.explain)}</div>`}
        </div>
        <span class="q-row-pts">${d.correct ? "+" + d.points : "0"}分</span>
      </div>`).join("");

    app.innerHTML = `
      ${stepsBar(1)}
      <div class="score-hero">
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
        <div class="score-sub">${subCards}</div>
        <div class="score-actions">
          <button class="btn btn-success btn-big" id="btn-export">🖼️ 导出图片报告发给家长</button>
          <button class="btn btn-outline" id="btn-go-home">🏠 返回首页</button>
        </div>
      </div>
      <div class="section-card">
        <h2>📋 全部题目对错一览(共 ${result.detail.length} 题)</h2>
        <div class="section-meta">错题请认真看讲解,建议记到错题本上</div>
        ${rows}
      </div>`;

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
  // 导出图片报告(Canvas 绘制 → PNG 下载)
  // ================================================================
  function exportImage(day, result) {
    let name = getName();
    const input = prompt("请输入学生姓名(会显示在报告图片上):", name || "");
    if (input === null) return;
    name = input.trim() || "同学";
    setName(name);

    const cur = window.CURRICULUM[day - 1];
    const pct = Math.round(result.score / result.total * 100);
    const c = scoreComment(pct);
    const subKeys = Object.keys(result.subjects);

    // ---------- 尺寸参数 ----------
    const W = 900, PAD = 48, LINE = 30;
    const scale = 2; // 高清 2x

    // 文本换行辅助
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

    // ---------- 预计算高度 ----------
    const qFont = "15px 'PingFang SC','Microsoft YaHei',sans-serif";
    const dFont = "13px 'PingFang SC','Microsoft YaHei',sans-serif";
    let qListHeight = 0;
    const qRender = result.detail.map((d, i) => {
      const qLines = wrapText(`${i + 1}. [${subLabel(d.subject)}] ${d.q}`, qFont, W - PAD * 2 - 90);
      let dLines = [];
      if (!d.correct) {
        dLines = wrapText(`你的答案:${d.userAns} → 正确答案:${d.rightAns}`, dFont, W - PAD * 2 - 110);
      }
      const h = qLines.length * 24 + dLines.length * 20 + 18;
      qListHeight += h;
      return { d, qLines, dLines, h };
    });

    const headerH = 120, scoreH = 190, tableH = 46 * (subKeys.length + 1) + 30, signH = 100, footH = 50, listTitleH = 56;
    const H = headerH + scoreH + tableH + listTitleH + qListHeight + signH + footH;

    // ---------- 绘制 ----------
    const canvas = document.createElement("canvas");
    canvas.width = W * scale; canvas.height = H * scale;
    const ctx = canvas.getContext("2d");
    ctx.scale(scale, scale);

    // 背景
    ctx.fillStyle = "#ffffff"; ctx.fillRect(0, 0, W, H);

    // 顶部渐变条
    const grad = ctx.createLinearGradient(0, 0, W, 0);
    grad.addColorStop(0, "#5b6ef5"); grad.addColorStop(1, "#7c5bf5");
    ctx.fillStyle = grad; ctx.fillRect(0, 0, W, 86);
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 26px 'PingFang SC','Microsoft YaHei',sans-serif";
    ctx.fillText("🚀 暑假冲刺营 · 每日学习报告", PAD, 52);

    // 学生信息
    ctx.fillStyle = "#6b7280";
    ctx.font = "15px 'PingFang SC','Microsoft YaHei',sans-serif";
    ctx.fillText(`学生:${name} · 第 ${day} 天 · 完成时间:${result.finishedAt} · 用时约 ${fmtDuration(result.duration)}`, PAD, headerH - 6);

    // 大分数
    let y = headerH + 62;
    ctx.fillStyle = "#5b6ef5";
    ctx.font = "bold 64px 'PingFang SC','Microsoft YaHei',sans-serif";
    const scoreText = String(result.score);
    ctx.fillText(scoreText, PAD, y);
    const sw = ctx.measureText(scoreText).width;
    ctx.fillStyle = "#6b7280";
    ctx.font = "20px 'PingFang SC','Microsoft YaHei',sans-serif";
    ctx.fillText(` / ${result.total} 分`, PAD + sw + 6, y);
    // 星星和评语
    ctx.font = "28px sans-serif";
    ctx.fillText("⭐".repeat(c.stars), PAD, y + 44);
    ctx.fillStyle = "#2b2d42";
    ctx.font = "bold 19px 'PingFang SC','Microsoft YaHei',sans-serif";
    ctx.fillText(c.title + " " + c.comment, PAD + c.stars * 34 + 16, y + 40);

    // 分科表格
    y = headerH + scoreH;
    const colX = [PAD, PAD + 130, PAD + 470, PAD + 610, W - PAD];
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

    // 题目列表标题
    y += tableH + 8;
    ctx.fillStyle = "#2b2d42";
    ctx.font = "bold 18px 'PingFang SC','Microsoft YaHei',sans-serif";
    const wrongTotal = result.detail.filter(d => !d.correct).length;
    ctx.fillText(`📋 全部题目对错一览(共 ${result.detail.length} 题,错 ${wrongTotal} 题)`, PAD, y + 24);
    y += listTitleH;

    // 逐题
    qRender.forEach(({ d, qLines, dLines }) => {
      // 对错标记
      ctx.font = "bold 17px sans-serif";
      ctx.fillStyle = d.correct ? "#34c759" : "#ff5252";
      ctx.fillText(d.correct ? "✓" : "✗", PAD, y + 20);
      // 题干
      ctx.font = qFont;
      ctx.fillStyle = "#2b2d42";
      qLines.forEach((ln, li) => ctx.fillText(ln, PAD + 30, y + 20 + li * 24));
      // 得分
      ctx.font = "bold 14px 'PingFang SC','Microsoft YaHei',sans-serif";
      ctx.fillStyle = d.correct ? "#34c759" : "#ff5252";
      ctx.textAlign = "right";
      ctx.fillText(d.correct ? `+${d.points}分` : "0分", W - PAD, y + 20);
      ctx.textAlign = "left";
      let yy = y + 20 + qLines.length * 24 - 4;
      // 错题详情
      if (!d.correct) {
        ctx.font = dFont;
        ctx.fillStyle = "#c0392b";
        dLines.forEach((ln, li) => ctx.fillText(ln, PAD + 30, yy + li * 20));
        yy += dLines.length * 20;
      }
      y += qLines.length * 24 + dLines.length * 20 + 18;
      ctx.strokeStyle = "#f0f1f8";
      ctx.beginPath(); ctx.moveTo(PAD, y - 10); ctx.lineTo(W - PAD, y - 10); ctx.stroke();
    });

    // 签名
    y += 20;
    ctx.fillStyle = "#6b7280";
    ctx.font = "15px 'PingFang SC','Microsoft YaHei',sans-serif";
    ctx.fillText("家长签名:____________________", PAD, y + 24);
    ctx.fillText("日期:____________________", W - PAD - 260, y + 24);

    // 页脚
    ctx.fillStyle = "#9aa0b5";
    ctx.font = "12px 'PingFang SC','Microsoft YaHei',sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("本报告由「暑假冲刺营」自动生成 · 每天进步一点点", W / 2, H - 22);
    ctx.textAlign = "left";

    // 下载
    canvas.toBlob(blob => {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `学习报告_${name}_第${day}天_${result.score}分.png`;
      a.click();
      URL.revokeObjectURL(a.href);
      alert("图片报告已下载!🖼️\n\n在下载文件夹找到这张 PNG 图片,微信直接发给家长即可。");
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
    app.querySelectorAll(".vocab-card").forEach(card => {
      card.addEventListener("click", () => card.classList.toggle("flipped"));
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
  document.getElementById("btn-home").addEventListener("click", renderHome);
  renderHome();
})();
