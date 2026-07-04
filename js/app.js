/* ============ 暑假冲刺营 · 应用逻辑 ============ */
(function () {
  const app = document.getElementById("app");
  const TOTAL_DAYS = 40;
  const STORE_KEY = "summer_camp_v1";

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
    const min = Math.round(ms / 60000);
    if (min < 60) return min + " 分钟";
    return Math.floor(min / 60) + " 小时 " + (min % 60) + " 分钟";
  }

  // ================================================================
  // 首页
  // ================================================================
  function renderHome() {
    window.scrollTo(0, 0);
    const doneCount = Object.keys(loadStore()).filter(k => /^day\d+$/.test(k)).length;
    const pct = Math.round(doneCount / TOTAL_DAYS * 100);

    // 推荐:第一个未完成且有内容的天
    let recommended = null;
    for (let i = 1; i <= TOTAL_DAYS; i++) {
      if (window.DAYS[i] && !getResult(i)) { recommended = i; break; }
    }

    let html = `
      <div class="hero">
        <h1>📅 40 天小升初冲刺计划</h1>
        <p>每天 2~4 小时 · 数学 + 英语 · 学习 → 做题 → 对答案 → 打分 → 导出报告</p>
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
          <div class="day-topics">🔢 <b>${esc(c.math)}</b><br>🔤 ${esc(c.english)}</div>
        </div>`;
    });
    if (cards) html += `<div class="day-grid">${cards}</div>`;
    app.innerHTML = html;

    // 进度条动画
    requestAnimationFrame(() => {
      const bar = app.querySelector(".progress-bar > div");
      if (bar) setTimeout(() => { bar.style.width = bar.dataset.target; }, 100);
    });

    app.querySelectorAll(".day-card[data-day]").forEach(card => {
      card.addEventListener("click", () => renderDay(parseInt(card.dataset.day, 10)));
    });
  }

  // ================================================================
  // 学习页
  // ================================================================
  let dayStartTime = null;

  function stepsBar(active) {
    const steps = ["📖 学习", "✏️ 做题", "✅ 对答案", "🏆 成绩报告"];
    return `<div class="steps">${steps.map((s, i) =>
      `<div class="step-pill ${i === active ? "active" : i < active ? "done" : ""}">${s}</div>`
    ).join("")}</div>`;
  }

  function renderDay(day) {
    window.scrollTo(0, 0);
    const data = window.DAYS[day];
    if (!data) return renderHome();
    dayStartTime = Date.now();

    let html = `
      <div class="day-header">
        <h1>${esc(data.title)}</h1>
        <div class="meta">⏱️ ${esc(data.estimate)} · 建议中途休息,每 40 分钟起来活动一下 🤸</div>
      </div>
      ${stepsBar(0)}`;

    data.sections.forEach(sec => {
      html += `<div class="section-card ${sec.subject}">
        <h2>${sec.icon} ${esc(sec.title)} <span class="tag ${sec.subject}">${sec.subject === "math" ? "数学" : "英语"}</span></h2>
        <div class="section-meta">预计用时 ${sec.minutes} 分钟</div>
        ${sec.blocks.map(renderBlock).join("")}
      </div>`;
    });

    html += `
      <div class="bottom-nav">
        <button class="btn btn-outline" id="btn-back">🏠 返回首页</button>
        <button class="btn btn-primary btn-big" id="btn-to-quiz">学完啦,开始做题 ✏️</button>
      </div>`;
    app.innerHTML = html;

    bindWidgets();
    document.getElementById("btn-back").onclick = renderHome;
    document.getElementById("btn-to-quiz").onclick = () => {
      if (!confirm("确认已经认真学完全部内容了吗?\n做题时不要翻回来看笔记哦!")) return;
      renderQuiz(day);
    };
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

  // ---------- 交互组件绑定 ----------
  function bindWidgets() {
    // 例题展开
    app.querySelectorAll(".reveal-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        btn.nextElementSibling.classList.add("show");
        btn.style.display = "none";
      });
    });
    // 单词卡翻面
    app.querySelectorAll(".vocab-card").forEach(card => {
      card.addEventListener("click", () => card.classList.toggle("flipped"));
    });
    // 数轴
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
    // 温度计
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
  // 做题页
  // ================================================================
  function renderQuiz(day) {
    window.scrollTo(0, 0);
    const data = window.DAYS[day];
    const total = data.quiz.reduce((s, q) => s + q.points, 0);

    let html = `
      <div class="day-header">
        <h1>✏️ ${esc(data.title)} · 随堂检测</h1>
        <div class="meta">共 ${data.quiz.length} 题,满分 ${total} 分 · 独立完成,不要回头看笔记哦!</div>
      </div>
      ${stepsBar(1)}`;

    data.quiz.forEach((q, i) => {
      html += `<div class="quiz-question" data-qi="${i}">
        <div class="q-head">
          <span class="q-num">${i + 1}</span>
          <span class="q-text"><span class="tag ${q.subject}">${q.subject === "math" ? "数学" : "英语"}</span> ${q.q}</span>
          <span class="q-points">${q.points}分</span>
        </div>`;
      if (q.type === "choice") {
        html += `<div class="options">${q.options.map((opt, oi) => `
          <div class="option" data-oi="${oi}">
            <span class="opt-letter">${"ABCD"[oi]}</span><span>${esc(opt)}</span>
          </div>`).join("")}</div>`;
      } else {
        html += `<input class="fill-input" type="text" placeholder="在这里输入答案…" autocomplete="off">`;
      }
      html += `</div>`;
    });

    html += `
      <div class="quiz-sticky">
        <button class="btn btn-success btn-big" id="btn-submit">📤 交卷,看看我得多少分!</button>
      </div>`;
    app.innerHTML = html;

    // 选项点击
    app.querySelectorAll(".quiz-question .option").forEach(opt => {
      opt.addEventListener("click", () => {
        opt.closest(".options").querySelectorAll(".option").forEach(o => o.classList.remove("selected"));
        opt.classList.add("selected");
      });
    });

    document.getElementById("btn-submit").onclick = () => {
      // 收集答案
      const answers = data.quiz.map((q, i) => {
        const qEl = app.querySelector(`.quiz-question[data-qi="${i}"]`);
        if (q.type === "choice") {
          const sel = qEl.querySelector(".option.selected");
          return sel ? parseInt(sel.dataset.oi, 10) : null;
        }
        return qEl.querySelector(".fill-input").value.trim();
      });
      const blank = answers.filter(a => a === null || a === "").length;
      if (blank > 0 && !confirm(`还有 ${blank} 道题没做,确定要交卷吗?`)) return;
      gradeQuiz(day, answers);
    };
  }

  // ================================================================
  // 对答案 & 打分
  // ================================================================
  function normalize(s) {
    return String(s).toLowerCase().replace(/\s+/g, " ").trim()
      .replace(/[’']/g, "'").replace(/[−–]/g, "-");
  }

  function gradeQuiz(day, answers) {
    const data = window.DAYS[day];
    let score = 0;
    const detail = data.quiz.map((q, i) => {
      let correct = false;
      if (q.type === "choice") {
        correct = answers[i] === q.answer;
      } else {
        const user = normalize(answers[i] || "");
        correct = q.accept.some(a => normalize(a) === user);
      }
      if (correct) score += q.points;
      return {
        subject: q.subject, q: q.q, points: q.points, correct: correct,
        userAns: q.type === "choice"
          ? (answers[i] === null ? "(未作答)" : "ABCD"[answers[i]] + ". " + q.options[answers[i]])
          : (answers[i] || "(未作答)"),
        rightAns: q.type === "choice" ? "ABCD"[q.answer] + ". " + q.options[q.answer] : q.accept[0],
        explain: q.explain
      };
    });

    const total = data.quiz.reduce((s, q) => s + q.points, 0);
    const subScores = {};
    ["math", "english"].forEach(sub => {
      const qs = detail.filter(d => d.subject === sub);
      subScores[sub] = {
        got: qs.filter(d => d.correct).reduce((s, d) => s + d.points, 0),
        total: qs.reduce((s, d) => s + d.points, 0),
        wrong: qs.filter(d => !d.correct).length,
        count: qs.length
      };
    });

    const result = {
      day: day, score: score, total: total,
      subScores: subScores, detail: detail,
      duration: Date.now() - dayStartTime,
      finishedAt: new Date().toLocaleString("zh-CN")
    };
    setResult(day, result);
    renderReview(day, result);
  }

  // ---------- 对答案页 ----------
  function renderReview(day, result) {
    window.scrollTo(0, 0);
    const data = window.DAYS[day];
    let html = `
      <div class="day-header">
        <h1>✅ 对答案 · 逐题讲解</h1>
        <div class="meta">得分 ${result.score} / ${result.total} · 认真看每道错题的讲解,弄懂了再往下走!</div>
      </div>
      ${stepsBar(2)}`;

    result.detail.forEach((d, i) => {
      html += `<div class="quiz-question ${d.correct ? "correct" : "wrong"}">
        <div class="q-head">
          <span class="q-num" style="background:${d.correct ? "var(--success)" : "var(--danger)"}">${i + 1}</span>
          <span class="q-text"><span class="tag ${d.subject}">${d.subject === "math" ? "数学" : "英语"}</span> ${d.q}</span>
          <span class="q-points">${d.correct ? "+" + d.points : "0"}分</span>
        </div>
        <div class="q-result ${d.correct ? "ok" : "no"}">
          ${d.correct ? "🎉 回答正确!" : `❌ 回答错误。你的答案:<b>${esc(d.userAns)}</b> · 正确答案:<b>${esc(d.rightAns)}</b>`}
          <div class="explain">💡 ${esc(d.explain)}</div>
        </div>
      </div>`;
    });

    html += `
      <div class="bottom-nav">
        <button class="btn btn-primary btn-big" id="btn-to-score">看成绩报告 🏆</button>
      </div>`;
    app.innerHTML = html;
    document.getElementById("btn-to-score").onclick = () => renderScore(day, result);
  }

  // ---------- 成绩报告页 ----------
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

    app.innerHTML = `
      ${stepsBar(3)}
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
        <div class="stars">${"★".repeat(c.stars).split("").map(s => `<span class="star">⭐</span>`).join("")}</div>
        <div class="score-title">${c.title}</div>
        <div class="score-comment">${c.comment}</div>
        <div class="score-sub">
          <div class="sub-card math">
            <div class="sub-name">🔢 数学</div>
            <div class="sub-score">${result.subScores.math.got}<small style="font-size:14px;color:var(--text-light)"> / ${result.subScores.math.total}</small></div>
            <div class="sub-name">错 ${result.subScores.math.wrong} 题</div>
          </div>
          <div class="sub-card english">
            <div class="sub-name">🔤 英语</div>
            <div class="sub-score">${result.subScores.english.got}<small style="font-size:14px;color:var(--text-light)"> / ${result.subScores.english.total}</small></div>
            <div class="sub-name">错 ${result.subScores.english.wrong} 题</div>
          </div>
        </div>
        <div class="score-actions">
          <button class="btn btn-success btn-big" id="btn-export">📤 导出报告发给家长</button>
          <button class="btn btn-outline" id="btn-review-again">🔍 再看一遍错题</button>
          <button class="btn btn-outline" id="btn-go-home">🏠 返回首页</button>
        </div>
      </div>`;

    // 动画:圆环 + 数字滚动
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

    document.getElementById("btn-export").onclick = () => exportReport(day, result);
    document.getElementById("btn-review-again").onclick = () => renderReview(day, result);
    document.getElementById("btn-go-home").onclick = renderHome;
  }

  // ================================================================
  // 导出家长报告
  // ================================================================
  function exportReport(day, result) {
    let name = getName();
    const input = prompt("请输入学生姓名(会显示在报告上):", name || "");
    if (input === null) return;
    name = input.trim() || "同学";
    setName(name);

    const cur = window.CURRICULUM[day - 1];
    const pct = Math.round(result.score / result.total * 100);
    const c = scoreComment(pct);
    const wrongList = result.detail.filter(d => !d.correct);

    const reportHtml = `<!DOCTYPE html>
<html lang="zh-CN"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(name)} · 第${day}天学习报告</title>
<style>
  body{font-family:"PingFang SC","Microsoft YaHei",sans-serif;background:#f7f8fc;color:#2b2d42;line-height:1.7;margin:0;padding:20px}
  .report{max-width:680px;margin:0 auto;background:#fff;border-radius:16px;padding:32px;box-shadow:0 4px 20px rgba(60,70,130,.1)}
  h1{font-size:22px;text-align:center;margin:0 0 4px}
  .sub{text-align:center;color:#6b7280;font-size:13px;margin-bottom:20px}
  .big-score{text-align:center;font-size:52px;font-weight:800;color:#5b6ef5;margin:10px 0 0}
  .stars{text-align:center;font-size:24px;letter-spacing:4px}
  .comment{text-align:center;color:#6b7280;margin-bottom:20px}
  table{width:100%;border-collapse:collapse;margin:16px 0;font-size:14px}
  th,td{border:1px solid #e5e8f5;padding:8px 12px;text-align:center}
  th{background:#eef0ff}
  .wrong-item{background:#fff7f7;border-left:4px solid #ff5252;border-radius:8px;padding:10px 14px;margin:10px 0;font-size:14px}
  .wrong-item .ex{color:#6b7280;font-size:13px;margin-top:4px}
  .sign{margin-top:32px;display:flex;justify-content:space-between;color:#6b7280;font-size:14px}
  .footer{text-align:center;color:#9aa0b5;font-size:12px;margin-top:24px}
  @media print{body{background:#fff;padding:0}.report{box-shadow:none}}
</style></head><body>
<div class="report">
  <h1>🚀 暑假冲刺营 · 每日学习报告</h1>
  <div class="sub">学生:${esc(name)} · 第 ${day} 天 · 完成时间:${esc(result.finishedAt)}</div>
  <div class="big-score">${result.score}<span style="font-size:20px;color:#6b7280"> / ${result.total} 分</span></div>
  <div class="stars">${"⭐".repeat(c.stars)}</div>
  <div class="comment">${c.title} ${c.comment}</div>
  <table>
    <tr><th>科目</th><th>今日内容</th><th>得分</th><th>错题数</th></tr>
    <tr><td>🔢 数学</td><td>${esc(cur.math)}</td><td><b>${result.subScores.math.got}</b> / ${result.subScores.math.total}</td><td>${result.subScores.math.wrong} / ${result.subScores.math.count}</td></tr>
    <tr><td>🔤 英语</td><td>${esc(cur.english)}</td><td><b>${result.subScores.english.got}</b> / ${result.subScores.english.total}</td><td>${result.subScores.english.wrong} / ${result.subScores.english.count}</td></tr>
  </table>
  <p>⏱️ 本次学习+做题用时:约 ${fmtDuration(result.duration)}</p>
  ${wrongList.length === 0
    ? `<p style="color:#34c759;font-weight:700">🎉 全部答对,零错题!请家长给孩子一个大大的鼓励!</p>`
    : `<h3 style="font-size:16px">❌ 错题清单(共 ${wrongList.length} 题,建议家长陪孩子再过一遍)</h3>` +
      wrongList.map(d => `<div class="wrong-item">
        <b>[${d.subject === "math" ? "数学" : "英语"}]</b> ${d.q}<br>
        孩子的答案:${esc(d.userAns)} → 正确答案:<b>${esc(d.rightAns)}</b>
        <div class="ex">💡 ${esc(d.explain)}</div>
      </div>`).join("")}
  <div class="sign"><span>家长签名:________________</span><span>日期:________________</span></div>
  <div class="footer">本报告由「暑假冲刺营」自动生成 · 建议打印或转发给老师留存</div>
</div>
</body></html>`;

    const blob = new Blob([reportHtml], { type: "text/html;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `学习报告_${name}_第${day}天_${result.score}分.html`;
    a.click();
    URL.revokeObjectURL(a.href);
    alert("报告已下载!📤\n\n发送方法:在下载文件夹里找到这个 HTML 文件,通过微信/邮件发给家长,家长用浏览器打开即可查看,也可以直接打印。");
  }

  // ================================================================
  // 启动
  // ================================================================
  document.getElementById("btn-home").addEventListener("click", renderHome);
  renderHome();
})();
