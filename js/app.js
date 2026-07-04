/* ============ 恩恩的小升初衔接暑期提升计划 ============ */
(function () {
  const app = document.getElementById("app");
  const TOTAL_DAYS = 40;
  const STORE_KEY = "enen_camp_v3";
  const VOICE_KEY = "enen_voice";
  const SAVE_VERSION = 1;

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
    catch (e) { return {}; }
  }
  function saveStore(s) {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(s));
      return true;
    } catch (e) {
      alert("浏览器本地存储写入失败。可能是无痕模式、存储空间不足,或浏览器禁止了本地数据。");
      return false;
    }
  }
  function getResult(day) { return loadStore()["day" + day] || null; }
  function getXP() { return loadStore().xp || 0; }
  function getBadges() { return loadStore().badges || []; }
  function levelOf(xp) { return Math.floor(Math.sqrt(xp / 60)) + 1; }
  function levelFloorXP(lv) { return (lv - 1) * (lv - 1) * 60; }
  function downloadTextFile(filename, text, mime) {
    const blob = new Blob([text], { type: mime || "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    a.click();
    URL.revokeObjectURL(a.href);
  }
  function exportSaveData() {
    const payload = {
      app: "enen-middle-school-camp",
      version: SAVE_VERSION,
      exportedAt: new Date().toISOString(),
      store: loadStore(),
      voice: TTS.prefs || {}
    };
    const stamp = new Date().toISOString().slice(0, 10);
    downloadTextFile(`恩恩学习存档_${stamp}.json`, JSON.stringify(payload, null, 2), "application/json");
  }
  function importSaveData(file) {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const payload = JSON.parse(String(reader.result || ""));
        const store = payload && payload.store;
        if (!store || typeof store !== "object") throw new Error("bad save");
        if (!confirm("导入存档会覆盖当前浏览器里的等级、打卡、徽章和关卡记录。确定导入吗?")) return;
        if (!saveStore(store)) return;
        if (payload.voice && typeof payload.voice === "object") {
          TTS.prefs = payload.voice;
          localStorage.setItem(VOICE_KEY, JSON.stringify(TTS.prefs));
          TTS.init();
        }
        alert("学习存档已导入,等级、连续打卡和关卡记录已恢复。");
        renderHome();
      } catch (e) {
        alert("这个文件不像是本项目导出的学习存档,导入失败。");
      }
    };
    reader.readAsText(file);
  }

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
  // 语音引擎(TTS)—— 自动挑选最自然的声音,支持用户自选
  // ================================================================
  const TTS = {
    voices: [], zhVoice: null, enVoice: null, token: 0,
    prefs: (function () { try { return JSON.parse(localStorage.getItem(VOICE_KEY)) || {}; } catch (e) { return {}; } })(),
    savePrefs() { localStorage.setItem(VOICE_KEY, JSON.stringify(this.prefs)); },
    // 给声音打分:神经/自然/在线人声 > 高质量系统声 > 普通系统声
    scoreZh(v) {
      let s = 0;
      if (/natural|neural|online/i.test(v.name)) s += 120;
      if (/premium|enhanced/i.test(v.name)) s += 70;
      if (/xiaoxiao|xiaoyi|xiaoxuan|yunjian|yunxi|晓晓|晓伊|晓萱/i.test(v.name)) s += 55;
      if (/google/i.test(v.name)) s += 60;
      if (/tingting|ting-ting|婷婷/i.test(v.name)) s += 30;
      if (/siri/i.test(v.name)) s += 25;
      if (/^zh(-|_)CN/i.test(v.lang)) s += 10; else if (/^zh/i.test(v.lang)) s += 5; else s -= 100;
      return s;
    },
    scoreEn(v) {
      let s = 0;
      if (/natural|neural|online/i.test(v.name)) s += 120;
      if (/premium|enhanced/i.test(v.name)) s += 70;
      if (/aria|jenny|guy|ana|ava|andrew|emma|brian/i.test(v.name)) s += 35;
      if (/google us english/i.test(v.name)) s += 60;
      if (/samantha/i.test(v.name)) s += 40;
      if (/siri/i.test(v.name)) s += 25;
      if (/^en(-|_)US/i.test(v.lang)) s += 10; else if (/^en/i.test(v.lang)) s += 5; else s -= 100;
      return s;
    },
    init() {
      const pick = () => {
        this.voices = speechSynthesis.getVoices();
        if (!this.voices.length) return;
        const zhList = this.voices.filter(v => /^zh/i.test(v.lang)).sort((a, b) => this.scoreZh(b) - this.scoreZh(a));
        const enList = this.voices.filter(v => /^en/i.test(v.lang)).sort((a, b) => this.scoreEn(b) - this.scoreEn(a));
        this.zhVoice = (this.prefs.zh && this.voices.find(v => v.name === this.prefs.zh)) || zhList[0] || null;
        this.enVoice = (this.prefs.en && this.voices.find(v => v.name === this.prefs.en)) || enList[0] || null;
      };
      pick();
      speechSynthesis.onvoiceschanged = pick;
    },
    hasNatural() { return this.voices.some(v => /natural|neural|online/i.test(v.name)); },
    qualityLabel(v) {
      if (!v) return "未找到可用声音";
      if (/natural|neural|online/i.test(v.name)) return "接近真人";
      if (/premium|enhanced|google|samantha|tingting|婷婷/i.test(v.name)) return "较自然";
      return "普通系统声音";
    },
    splitText(text) {
      const clean = String(text)
        .replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{20E3}]/gu, "")
        .replace(/\s+/g, " ")
        .trim();
      if (!clean) return [];
      const parts = clean.match(/[^。！？!?；;：:,.，、]+[。！？!?；;：:,.，、]?/g) || [clean];
      const chunks = [];
      let cur = "";
      parts.forEach(part => {
        if ((cur + part).length > 80 && cur) { chunks.push(cur.trim()); cur = part; }
        else cur += part;
      });
      if (cur.trim()) chunks.push(cur.trim());
      return chunks;
    },
    pauseFor(chunk) {
      if (/[。！？!?]/.test(chunk.slice(-1))) return 180;
      if (/[；;：:]/.test(chunk.slice(-1))) return 120;
      return 70;
    },
    async speakRemote(text, lang) {
      if (!this.prefs.remoteUrl) return false;
      try {
        const format = this.prefs.remoteFormat || "openai-edge";
        const en = lang === "en";
        const headers = { "Content-Type": "application/json" };
        const body = format === "openai-edge"
          ? {
              model: "tts-1",
              input: String(text),
              voice: this.prefs.edgeVoice || (en ? "en-US-JennyNeural" : "zh-CN-XiaoxiaoNeural"),
              response_format: "mp3",
              speed: Math.max(0.25, Math.min(4, this.prefs.rate || 1))
            }
          : { text: String(text), lang: lang || guessLang(text), voice: this.prefs.edgeVoice || "" };
        const res = await fetch(this.prefs.remoteUrl, {
          method: "POST",
          headers: headers,
          body: JSON.stringify(body)
        });
        if (!res.ok) throw new Error("remote tts failed");
        const type = res.headers.get("content-type") || "";
        let audioUrl = "";
        if (type.includes("application/json")) {
          const data = await res.json();
          audioUrl = data.audioUrl || data.url || "";
        } else {
          audioUrl = URL.createObjectURL(await res.blob());
        }
        if (!audioUrl) throw new Error("empty audio");
        await new Promise(resolve => {
          const audio = new Audio(audioUrl);
          this.currentAudio = audio;
          audio.onended = resolve;
          audio.onerror = resolve;
          audio.play().catch(resolve);
        });
        if (audioUrl.startsWith("blob:")) URL.revokeObjectURL(audioUrl);
        return true;
      } catch (e) {
        console.warn("Remote TTS fallback to browser voice:", e);
        return false;
      }
    },
    speak(text, lang) {
      this.token += 1;
      const token = this.token;
      const en = lang === "en";
      const chunks = this.splitText(text);
      const voice = en ? this.enVoice : this.zhVoice;
      const rate = (this.prefs.rate || 1) * (en ? 0.86 : 0.94);
      const pitch = en ? 1 : 1.04;
      const volume = Math.max(0.2, Math.min(1, this.prefs.volume || 1));
      try { speechSynthesis.cancel(); } catch (e) {}
      if (this.prefs.remoteUrl) {
        return this.speakRemote(text, lang).then(ok => {
          if (ok) return;
          return chunks.reduce((chain, chunk) => chain.then(() => this.speakChunk(chunk, token, voice, en, rate, pitch, volume)), Promise.resolve());
        });
      }
      return chunks.reduce((chain, chunk) => chain.then(() => this.speakChunk(chunk, token, voice, en, rate, pitch, volume)), Promise.resolve());
    },
    speakChunk(chunk, token, voice, en, rate, pitch, volume) {
      return new Promise(resolve => {
        if (token !== this.token) { resolve(); return; }
        try {
          const u = new SpeechSynthesisUtterance(chunk);
          u.voice = voice;
          u.lang = en ? "en-US" : "zh-CN";
          u.rate = rate;
          u.pitch = pitch;
          u.volume = volume;
          u.onend = () => setTimeout(resolve, this.pauseFor(chunk));
          u.onerror = resolve;
          speechSynthesis.speak(u);
        } catch (e) { resolve(); }
      });
    },
    stop() {
      this.token += 1;
      try { speechSynthesis.cancel(); } catch (e) {}
      try { if (this.currentAudio) this.currentAudio.pause(); } catch (e) {}
    }
  };
  TTS.init();
  function guessLang(text) {
    const ascii = (String(text).match(/[a-zA-Z]/g) || []).length;
    const han = (String(text).match(/[一-龥]/g) || []).length;
    return ascii > han * 2 ? "en" : "zh";
  }

  // ---------- 语音设置面板 ----------
  function showVoiceSettings() {
    const zhList = TTS.voices.filter(v => /^zh/i.test(v.lang)).sort((a, b) => TTS.scoreZh(b) - TTS.scoreZh(a));
    const enList = TTS.voices.filter(v => /^en/i.test(v.lang)).sort((a, b) => TTS.scoreEn(b) - TTS.scoreEn(a));
    const options = (list, current) => list.length
      ? list.map(v => `<option value="${esc(v.name)}" ${current && v.name === current.name ? "selected" : ""}>${esc(v.name)} · ${esc(v.lang)} · ${TTS.qualityLabel(v)}</option>`).join("")
      : `<option value="">当前浏览器没有提供该语言声音</option>`;
    const overlay = document.createElement("div");
    overlay.className = "gate-overlay";
    overlay.innerHTML = `
      <div class="gate-card voice-card">
        <div class="gate-icon">🎙️</div>
        <h2>语音设置</h2>
        <div class="voice-status">
          中文:${esc(TTS.zhVoice ? TTS.zhVoice.name : "未找到")} · ${TTS.qualityLabel(TTS.zhVoice)}<br>
          英文:${esc(TTS.enVoice ? TTS.enVoice.name : "未找到")} · ${TTS.qualityLabel(TTS.enVoice)}
        </div>
        <div class="vs-row"><label>中文声音</label>
          <select id="vs-zh">${options(zhList, TTS.zhVoice)}</select>
          <button class="mini-voice" id="vs-try-zh">🔊 试听</button></div>
        <div class="vs-row"><label>英文声音</label>
          <select id="vs-en">${options(enList, TTS.enVoice)}</select>
          <button class="mini-voice" id="vs-try-en">🔊 试听</button></div>
        <div class="vs-row"><label>语速</label>
          <input type="range" id="vs-rate" min="0.7" max="1.3" step="0.05" value="${TTS.prefs.rate || 1}">
          <span id="vs-rate-val">${TTS.prefs.rate || 1}x</span></div>
        <div class="vs-row"><label>音量</label>
          <input type="range" id="vs-volume" min="0.4" max="1" step="0.05" value="${TTS.prefs.volume || 1}">
          <span id="vs-volume-val">${Math.round((TTS.prefs.volume || 1) * 100)}%</span></div>
        <div class="vs-row vs-url"><label>云端语音</label>
          <input id="vs-remote" type="url" placeholder="Edge TTS / 豆包代理地址,留空用浏览器语音" value="${esc(TTS.prefs.remoteUrl || "")}">
          <span></span></div>
        <div class="vs-row"><label>接口格式</label>
          <select id="vs-format">
            <option value="openai-edge" ${(TTS.prefs.remoteFormat || "openai-edge") === "openai-edge" ? "selected" : ""}>Edge TTS / OpenAI兼容</option>
            <option value="generic" ${TTS.prefs.remoteFormat === "generic" ? "selected" : ""}>通用代理 {text, lang}</option>
          </select>
          <span></span></div>
        <div class="vs-row"><label>Edge音色</label>
          <select id="vs-edge-voice">
            ${[
              ["zh-CN-XiaoxiaoNeural", "晓晓 · 女声 · 自然亲切"],
              ["zh-CN-YunxiNeural", "云希 · 男声 · 阳光少年"],
              ["zh-CN-XiaochenNeural", "晓辰 · 女声 · 清晰稳重"],
              ["zh-CN-XiaoyiNeural", "晓伊 · 女声 · 甜美"],
              ["zh-CN-YunjianNeural", "云健 · 男声 · 讲解感"],
              ["zh-CN-YunyangNeural", "云扬 · 男声 · 新闻播报"],
              ["en-US-JennyNeural", "Jenny · English"],
              ["en-US-AriaNeural", "Aria · English"]
            ].map(([v, label]) => `<option value="${v}" ${(TTS.prefs.edgeVoice || "zh-CN-XiaoxiaoNeural") === v ? "selected" : ""}>${label}</option>`).join("")}
          </select>
          <span></span></div>
        <div class="vs-hint">推荐填 Edge TTS 的 OpenAI 兼容代理地址,例如自建服务的 /v1/audio/speech。公共中转接口如果支持 CORS,也可以直接填。豆包语音也能接,但不要把豆包 API Key 写进 GitHub Pages 前端,需要后端/Serverless 代理保护密钥。</div>
        <div style="margin-top:18px">
          <button class="btn btn-primary btn-big" id="vs-save">保存设置</button>
          <button class="btn btn-ghost-dark" id="vs-close">关闭</button>
        </div>
      </div>`;
    document.body.appendChild(overlay);
    const $ = id => overlay.querySelector(id);
    $("#vs-rate").oninput = () => { $("#vs-rate-val").textContent = $("#vs-rate").value + "x"; };
    $("#vs-volume").oninput = () => { $("#vs-volume-val").textContent = Math.round(parseFloat($("#vs-volume").value) * 100) + "%"; };
    function applySel() {
      TTS.prefs.zh = $("#vs-zh").value;
      TTS.prefs.en = $("#vs-en").value;
      TTS.prefs.rate = parseFloat($("#vs-rate").value);
      TTS.prefs.volume = parseFloat($("#vs-volume").value);
      TTS.prefs.remoteUrl = $("#vs-remote").value.trim();
      TTS.prefs.remoteFormat = $("#vs-format").value;
      TTS.prefs.edgeVoice = $("#vs-edge-voice").value;
      TTS.zhVoice = TTS.voices.find(v => v.name === TTS.prefs.zh) || TTS.zhVoice;
      TTS.enVoice = TTS.voices.find(v => v.name === TTS.prefs.en) || TTS.enVoice;
    }
    $("#vs-try-zh").onclick = () => { applySel(); TTS.stop(); TTS.speak("你好恩恩,我是你的学习伙伴,这一关我们一起加油!", "zh"); };
    $("#vs-try-en").onclick = () => { applySel(); TTS.stop(); TTS.speak("Hello! Welcome to Sunshine Middle School.", "en"); };
    $("#vs-save").onclick = () => { applySel(); TTS.savePrefs(); overlay.remove(); };
    $("#vs-close").onclick = () => { TTS.stop(); overlay.remove(); };
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

  // ---------- 彩带 & 浮动提示 ----------
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
  // 动画场景库(SVG 可视化动画)
  // ================================================================
  const SCENES = {
    // 默认:大表情弹跳
    emoji(el, p, step) {
      el.innerHTML = `<div class="scene-emoji">${p.emoji || step.emoji || "💡"}</div>`;
    },

    // 数轴:小球跳跃 from → to
    numberline(el, p) {
      const min = -10, max = 10, W = 600, H = 200, y = 118;
      const xOf = v => 30 + (v - min) / (max - min) * (W - 60);
      const fmtNum = n => Math.abs(n) < 0.001 ? "0" : Number.isInteger(n) ? String(n) : n.toFixed(1).replace(/\.0$/, "");
      const marks = [];
      for (let v = min; v <= max; v += 2) {
        marks.push(`<line x1="${xOf(v)}" y1="${y - 6}" x2="${xOf(v)}" y2="${y + 6}" stroke="#8a90b8" stroke-width="2"/>
          <text x="${xOf(v)}" y="${y + 28}" text-anchor="middle" font-size="14"
            fill="${v === p.to ? "#ff8a3d" : v === p.from ? "#5b6ef5" : v < 0 ? "#5b6ef5" : v > 0 ? "#ff5252" : "#2b2d42"}"
            font-weight="${v === p.to || v === p.from || v === 0 ? "800" : "400"}">${v}</text>`);
      }
      el.innerHTML = `<svg viewBox="0 0 ${W} ${H}" class="scene-svg">
        <line x1="16" y1="${y}" x2="${W - 16}" y2="${y}" stroke="#8a90b8" stroke-width="2.5"/>
        <polygon points="${W - 16},${y} ${W - 30},${y - 7} ${W - 30},${y + 7}" fill="#8a90b8"/>
        ${marks.join("")}
        <circle class="nl-anim-dot" cx="${xOf(p.from)}" cy="${y - 14}" r="11" fill="#ff8a3d" stroke="#fff" stroke-width="3"/>
        <text class="nl-anim-label" x="${xOf(p.from)}" y="${y - 34}" text-anchor="middle" font-size="17" font-weight="800" fill="#ff8a3d">${fmtNum(p.from)}</text>
      </svg>`;
      const dot = el.querySelector(".nl-anim-dot");
      const label = el.querySelector(".nl-anim-label");
      const x0 = xOf(p.from), x1 = xOf(p.to);
      const hops = Math.min(4, Math.max(1, Math.abs(p.to - p.from)));
      const t0 = performance.now(), dur = 1700;
      (function anim(now) {
        const t = Math.min((now - t0) / dur, 1);
        const ease = t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
        const x = x0 + (x1 - x0) * ease;
        const bounce = Math.abs(Math.sin(t * Math.PI * hops)) * 34;
        dot.setAttribute("cx", x); dot.setAttribute("cy", y - 14 - bounce);
        label.setAttribute("x", x); label.setAttribute("y", y - 38 - bounce);
        label.textContent = fmtNum(p.from + (p.to - p.from) * ease);
        if (t < 1) requestAnimationFrame(anim);
      })(t0);
    },

    // 温度计:从 from 降/升到 to
    thermo(el, p) {
      const min = -30, max = 40;
      const hOf = t => (t - min) / (max - min);
      el.innerHTML = `<div class="scene-thermo">
        <svg viewBox="0 0 600 200" class="scene-svg">
          <rect x="262" y="14" width="42" height="150" rx="21" fill="#eceef8" stroke="#d9dcf0" stroke-width="3"/>
          <rect class="th-fill" x="266" y="${18 + 142 * (1 - hOf(p.from))}" width="34" height="${142 * hOf(p.from)}" rx="17" fill="${p.from > 0 ? "#ff6b4a" : "#4a7dff"}"/>
          <circle cx="283" cy="172" r="18" fill="${p.to > 0 ? "#ff6b4a" : "#4a7dff"}" class="th-bulb"/>
          <text x="330" y="40" font-size="15" fill="#9aa0b5">40℃</text>
          <line x1="306" y1="${18 + 142 * (1 - hOf(0))}" x2="322" y2="${18 + 142 * (1 - hOf(0))}" stroke="#2b2d42" stroke-width="2"/>
          <text x="330" y="${23 + 142 * (1 - hOf(0))}" font-size="15" font-weight="800" fill="#2b2d42">0℃</text>
          <text x="330" y="162" font-size="15" fill="#9aa0b5">−30℃</text>
          <text class="th-num" x="185" y="105" text-anchor="middle" font-size="44" font-weight="900" fill="${p.from > 0 ? "#ff5252" : "#4a7dff"}">${p.from > 0 ? "+" : ""}${p.from}℃</text>
        </svg></div>`;
      const fill = el.querySelector(".th-fill");
      const num = el.querySelector(".th-num");
      const t0 = performance.now(), dur = 2000;
      (function anim(now) {
        const t = Math.min((now - t0) / dur, 1);
        const ease = 1 - Math.pow(1 - t, 3);
        const cur = p.from + (p.to - p.from) * ease;
        const h = 142 * hOf(cur);
        fill.setAttribute("y", 18 + 142 - h);
        fill.setAttribute("height", Math.max(2, h));
        fill.setAttribute("fill", cur > 0 ? "#ff6b4a" : "#4a7dff");
        num.textContent = (cur > 0 ? "+" : "") + Math.round(cur) + "℃";
        num.setAttribute("fill", cur > 0 ? "#ff5252" : "#4a7dff");
        if (t < 1) requestAnimationFrame(anim);
      })(t0);
    },

    // 分数饼图:a/b + c/d = r/s 动态填充
    fraction(el, p) {
      const R = 40, C = 2 * Math.PI * R;
      function pie(cx, frac, color, label, delay) {
        return `<g>
          <circle cx="${cx}" cy="86" r="${R}" fill="none" stroke="#eceef8" stroke-width="24"/>
          <circle class="pie-fill" cx="${cx}" cy="86" r="${R}" fill="none" stroke="${color}" stroke-width="24"
            stroke-dasharray="0 ${C}" data-target="${frac * C}" data-delay="${delay}"
            transform="rotate(-90 ${cx} 86)" stroke-linecap="butt"/>
          <text x="${cx}" y="162" text-anchor="middle" font-size="21" font-weight="800" fill="#2b2d42">${label}</text>
        </g>`;
      }
      const [a, b] = p.a, [c, d] = p.b, [rn, rd] = p.r;
      el.innerHTML = `<svg viewBox="0 0 600 200" class="scene-svg">
        ${pie(120, a / b, "#5b6ef5", a + "/" + b, 0)}
        <text x="210" y="96" text-anchor="middle" font-size="34" font-weight="800" fill="#9aa0b5">+</text>
        ${pie(300, c / d, "#26b8a5", c + "/" + d, 600)}
        <text x="392" y="96" text-anchor="middle" font-size="34" font-weight="800" fill="#9aa0b5">=</text>
        ${pie(490, rn / rd, "#ff8a3d", rn + "/" + rd, 1400)}
      </svg>`;
      el.querySelectorAll(".pie-fill").forEach(c2 => {
        setTimeout(() => {
          c2.style.transition = "stroke-dasharray 1s cubic-bezier(.4,0,.2,1)";
          c2.setAttribute("stroke-dasharray", `${c2.dataset.target} ${C}`);
        }, parseInt(c2.dataset.delay, 10) + 100);
      });
    },

    // Be 动词分拣:主语飞入对应的桶
    match(el, p) {
      el.innerHTML = `<div class="scene-match">${p.groups.map((g, gi) => `
        <div class="match-col">
          <div class="match-bucket" style="animation-delay:${gi * .15}s">${esc(g.head)}</div>
          ${g.items.map((it, ii) => `<div class="match-chip" style="animation-delay:${.5 + gi * .5 + ii * .28}s">${esc(it)}</div>`).join("")}
        </div>`).join("")}</div>`;
    },

    // 汉字多音字:大字 + 拼音气泡
    char(el, p) {
      const pos = [[150, 46], [452, 46], [118, 140], [478, 140], [300, 26]];
      el.innerHTML = `<svg viewBox="0 0 600 200" class="scene-svg">
        <text x="300" y="136" text-anchor="middle" font-size="104" font-weight="900" fill="#2b2d42" class="char-main">${p.char}</text>
        ${p.pinyins.map((py, i) => `
          <g class="char-bubble" style="animation-delay:${.5 + i * .55}s">
            <rect x="${pos[i][0] - 52}" y="${pos[i][1] - 22}" width="104" height="36" rx="18"
              fill="${i === p.highlight ? "#ff8a3d" : "#eef0ff"}"/>
            <text x="${pos[i][0]}" y="${pos[i][1] + 3}" text-anchor="middle" font-size="17" font-weight="800"
              fill="${i === p.highlight ? "#fff" : "#5b6ef5"}">${esc(py)}</text>
          </g>`).join("")}
      </svg>`;
    },

    // 大海:波浪 + 日出/月升银河(观沧海)
    sea(el, p) {
      const night = p.phase === "stars";
      const stars = night ? Array.from({ length: 16 }, (_, i) =>
        `<circle class="star-tw" style="animation-delay:${i * .17}s" cx="${30 + Math.random() * 540}" cy="${14 + Math.random() * 70}" r="${1.5 + Math.random() * 1.8}" fill="#fff"/>`).join("") : "";
      const body = p.phase === "sun"
        ? `<circle class="sea-rise" cx="300" cy="210" r="30" fill="#ffd93d"/>`
        : night ? `<circle class="sea-rise" cx="440" cy="200" r="24" fill="#f4f6ff"/><ellipse cx="300" cy="60" rx="220" ry="26" fill="rgba(255,255,255,.14)" class="galaxy"/>` : "";
      el.innerHTML = `<svg viewBox="0 0 600 200" class="scene-svg sea-svg">
        <rect width="600" height="200" fill="${night ? "#1d2450" : "#cfe8ff"}"/>
        ${stars}${body}
        <path class="wave w1" fill="${night ? "#2c3a78" : "#7db8e8"}" d="M0,140 Q75,120 150,140 T300,140 T450,140 T600,140 T750,140 T900,140 V200 H0 Z"/>
        <path class="wave w2" fill="${night ? "#3a4c96" : "#5b9fd8"}" d="M0,158 Q75,142 150,158 T300,158 T450,158 T600,158 T750,158 T900,158 V200 H0 Z"/>
        <g class="boat"><path d="M270,132 L330,132 L318,148 L282,148 Z" fill="#8a5a2b"/><line x1="300" y1="132" x2="300" y2="100" stroke="#8a5a2b" stroke-width="3"/><path d="M300,100 L326,126 L300,126 Z" fill="#fff"/></g>
      </svg>`;
    },

    // 干栏式 vs 半地穴式房屋(雨 / 雪)
    house(el, p) {
      const rain = Array.from({ length: 10 }, (_, i) =>
        `<line class="rain" style="animation-delay:${i * .14}s" x1="${30 + i * 26}" y1="10" x2="${24 + i * 26}" y2="26" stroke="#6aa8e8" stroke-width="2.5" stroke-linecap="round"/>`).join("");
      const snow = Array.from({ length: 10 }, (_, i) =>
        `<circle class="snow" style="animation-delay:${i * .3}s" cx="${330 + i * 25}" cy="8" r="3" fill="#dfe8ff"/>`).join("");
      el.innerHTML = `<svg viewBox="0 0 600 200" class="scene-svg">
        <rect width="290" height="200" fill="#e8f6ee"/><rect x="310" width="290" height="200" fill="#eef2fb"/>
        ${rain}${snow}
        <!-- 干栏式:架空 -->
        <g class="house-pop">
          <line x1="80" y1="160" x2="80" y2="120" stroke="#8a5a2b" stroke-width="6"/>
          <line x1="120" y1="160" x2="120" y2="120" stroke="#8a5a2b" stroke-width="6"/>
          <line x1="160" y1="160" x2="160" y2="120" stroke="#8a5a2b" stroke-width="6"/>
          <line x1="200" y1="160" x2="200" y2="120" stroke="#8a5a2b" stroke-width="6"/>
          <rect x="65" y="90" width="150" height="34" rx="4" fill="#c98d4e"/>
          <path d="M55,92 L140,52 L225,92 Z" fill="#7a9c58"/>
          <line x1="20" y1="162" x2="270" y2="162" stroke="#9fc8ae" stroke-width="5"/>
        </g>
        <text x="140" y="190" text-anchor="middle" font-size="15" font-weight="800" fill="#2f7d4f">干栏式 · 长江流域 · 防潮 🌧️</text>
        <!-- 半地穴式:半入地下 -->
        <g class="house-pop" style="animation-delay:.5s">
          <rect x="340" y="140" width="220" height="40" fill="#d8c8a8"/>
          <rect x="400" y="118" width="100" height="34" fill="#b09060"/>
          <path d="M385,122 L450,74 L515,122 Z" fill="#8a6a3a"/>
        </g>
        <text x="450" y="196" text-anchor="middle" font-size="15" font-weight="800" fill="#5b6ef5">半地穴式 · 黄河流域 · 保暖 ❄️</text>
      </svg>`;
    },

    // 线索卡片:阅读题/审题题用
    clues(el, p) {
      el.innerHTML = `<div class="scene-clues">${p.items.map((it, i) => `
        <div class="clue-card" style="animation-delay:${i * .25}s">
          <b>${esc(it.head)}</b><span>${esc(it.text)}</span>
        </div>`).join("")}</div>`;
    }
  };

  // ================================================================
  // 动画课堂播放器(可视化舞台 + 字幕 + 配音)
  // ================================================================
  let lessonToken = 0;
  function createLessonPlayer(el, steps, opts) {
    opts = opts || {};
    const screen = el.querySelector(".lesson-screen");
    const visual = el.querySelector(".stage-visual");
    const caption = el.querySelector(".stage-caption");
    const progress = el.querySelector(".stage-progress > i");
    const playBtn = el.querySelector(".lesson-play");
    const stopBtn = el.querySelector(".lesson-stop");

    function showStep(step) {
      const scene = step.scene || { type: "emoji" };
      (SCENES[scene.type] || SCENES.emoji)(visual, scene, step);
      caption.innerHTML = `<span class="cap-text">${esc(step.text)}</span>`;
      caption.classList.remove("cap-in");
      void caption.offsetWidth; // 重启动画
      caption.classList.add("cap-in");
    }

    async function play() {
      const token = ++lessonToken;
      TTS.stop();
      playBtn.style.display = "none";
      stopBtn.style.display = "";
      screen.style.display = "";
      screen.classList.add("playing");
      for (let i = 0; i < steps.length; i++) {
        if (token !== lessonToken) return;
        progress.style.width = ((i + 1) / steps.length * 100) + "%";
        showStep(steps[i]);
        await TTS.speak(steps[i].speak || steps[i].text, guessLang(steps[i].text));
        if (token !== lessonToken) return;
        await new Promise(r => setTimeout(r, 500));
      }
      if (token !== lessonToken) return;
      screen.classList.remove("playing");
      stopBtn.style.display = "none";
      playBtn.style.display = "";
      playBtn.innerHTML = "🔁 再看一遍";
    }
    function stop() {
      lessonToken++;
      TTS.stop();
      screen.classList.remove("playing");
      stopBtn.style.display = "none";
      playBtn.style.display = "";
    }
    playBtn.addEventListener("click", play);
    stopBtn.addEventListener("click", stop);
    if (opts.autoplay) setTimeout(play, 500);
  }

  function lessonPlayerHTML(title, hint) {
    return `
      <div class="lesson-head">
        <span class="lesson-title">🎬 ${esc(title)}</span>
        <span class="lesson-ctrl">
          <button class="btn btn-primary lesson-play">▶ 播放动画</button>
          <button class="btn btn-outline lesson-stop" style="display:none">⏹ 停止</button>
        </span>
      </div>
      <div class="lesson-screen">
        <div class="stage-visual"><div class="lesson-hint">${esc(hint || "点「播放动画」,配音老师开讲啦 🎙️")}</div></div>
        <div class="stage-caption"><span class="cap-text" style="color:var(--text-light);font-weight:400">动画和字幕会在这里出现…</span></div>
        <div class="stage-progress"><i></i></div>
      </div>`;
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
        <div class="storage-panel">
          <div>
            <b>数据已保存在本浏览器</b>
            <span>等级、XP、徽章、连续打卡和每关报告会写入 localStorage。同一浏览器重新打开会保留;换设备、无痕模式或清理网站数据可能丢失。</span>
          </div>
          <div class="storage-actions">
            <button class="mini-voice" id="btn-export-save">导出存档</button>
            <button class="mini-voice" id="btn-import-save">导入存档</button>
            <input id="save-file" type="file" accept="application/json,.json" hidden>
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
    const exportBtn = document.getElementById("btn-export-save");
    const importBtn = document.getElementById("btn-import-save");
    const fileInput = document.getElementById("save-file");
    if (exportBtn) exportBtn.addEventListener("click", exportSaveData);
    if (importBtn && fileInput) {
      importBtn.addEventListener("click", () => fileInput.click());
      fileInput.addEventListener("change", () => {
        if (fileInput.files && fileInput.files[0]) importSaveData(fileInput.files[0]);
        fileInput.value = "";
      });
    }
  }

  // ================================================================
  // 诚信之门
  // ================================================================
  function showHonestyGate(day) {
    if (getResult(day)) { renderDay(day); return; }
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
  // 学习页
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
        <div class="meta">⏱️ ${esc(data.estimate)} · 🎬 每个蓝框都是一部带配音的动画小课,记得开声音!</div>
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
    // 绑定动画课堂
    data.sections.forEach((sec, si) => sec.units.forEach((u, ui) =>
      u.blocks.forEach((b, bi) => {
        if (b.type !== "lesson") return;
        const el = app.querySelector(`[data-lesson="${si}-${ui}-${bi}"]`);
        if (el) createLessonPlayer(el, b.steps);
      })));
    bindInlineQuestions(day, data, totalQ);
    bindAntiCopy();
  }

  function bindAntiCopy() {
    app.querySelectorAll(".no-copy").forEach(el => {
      ["copy", "cut", "contextmenu", "selectstart", "dragstart"].forEach(evt =>
        el.addEventListener(evt, e => {
          if (e.target.closest("input")) return;
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
        return `<div class="lesson-player" data-lesson="${bid}">${lessonPlayerHTML(b.title)}</div>`;
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
          <div class="nl-display"><span class="zero">动手试一试:点按钮移动小球 👇</span></div>
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
            <div class="thermo-desc">动手试一试:点按钮变温度 ☀️</div>
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
      case "foldableReading":
        return `<details class="fold-reading">
          <summary>${esc(b.title)} <span>${esc(b.summary || "展开阅读")}</span></summary>
          <div class="reading-passage">
            ${(b.paragraphs || []).map(p => `<p>${esc(p)}</p>`).join("")}
          </div>
          ${b.tip ? `<div class="reading-tip">💡 ${esc(b.tip)}</div>` : ""}
        </details>`;
      default:
        return "";
    }
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
      inner = `<input class="fill-input" type="text" placeholder="${esc(q.placeholder || "在这里输入答案…")}" autocomplete="off">`;
    }
    return `<div class="quiz-question inline-q ${q.boss ? "boss-q" : ""}" data-key="${key}" data-subject="${subject}">
      <div class="q-head">
        <span class="q-num">${q.boss ? "🔥" : "✏️"}</span>
        <span class="q-text">${q.boss ? "<b>BOSS 挑战:</b>" : ""}${q.q}
          <button class="mini-voice q-voice" title="朗读题目">🔊</button></span>
        <span class="q-points">${q.points} XP</span>
      </div>
      ${q.demoSteps ? `<div class="lesson-player question-demo">${lessonPlayerHTML(q.demoTitle || "题目前动画演示", "先看演示,再自己作答。演示只讲思路,不直接报答案。")}</div>` : ""}
      ${inner}
      <div class="q-submit-row"><button class="btn btn-primary q-submit">提交答案</button></div>
      <div class="q-feedback"></div>
    </div>`;
  }

  function bindInlineQuestions(day, data, totalQ) {
    const qMap = {};
    data.sections.forEach((sec, si) => {
      sec.units.forEach((u, ui) => { if (u.q) qMap[si + "-" + ui] = { q: u.q, unitName: u.name, subject: sec.subject }; });
    });

    app.querySelectorAll(".inline-q").forEach(qEl => {
      const key = qEl.dataset.key;
      const info = qMap[key];
      const q = info.q;

      if (q.demoSteps) {
        createLessonPlayer(qEl.querySelector(".question-demo"), q.demoSteps);
      }

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
          correct = isFillCorrect(q, val);
          qEl.querySelector(".fill-input").disabled = true;
        }

        const now = Date.now();
        const elapsed = (now - lastAnswerTime) / 1000;
        lastAnswerTime = now;
        const fast = correct && elapsed < 12;

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

        const fb = qEl.querySelector(".q-feedback");
        fb.innerHTML = `
          <div class="q-result ${correct ? "ok" : "no"}">
            ${correct ? `🎉 ${q.boss ? "BOSS 被你击败了!" : "回答正确!"}+${q.points} XP` : `💪 这道题有点难,正确答案:<b>${esc(q.type === "choice" ? "ABCD"[q.answer] + ". " + q.options[q.answer] : q.accept[0])}</b>`}
            <div class="explain">💡 ${esc(q.explain)}</div>
          </div>
          ${q.explainSteps ? `<div class="lesson-player explain-lesson">${lessonPlayerHTML("名师动画讲解(强烈建议看一遍)", "听懂讲解,下次遇到同类题就是送分题 🎁")}</div>` : ""}`;

        if (q.explainSteps) {
          createLessonPlayer(fb.querySelector(".explain-lesson"), q.explainSteps, { autoplay: !correct });
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

  function isFillCorrect(q, val) {
    const user = normalize(val);
    if ((q.accept || []).some(a => normalize(a) === user)) return true;
    if ((q.mustInclude || []).length) {
      return q.mustInclude.every(group => group.some(item => user.includes(normalize(item))));
    }
    return false;
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

    const s = loadStore();
    const firstTime = !s["day" + day];
    const oldLv = levelOf(s.xp || 0);
    if (firstTime) s.xp = (s.xp || 0) + score;
    const newLv = levelOf(s.xp || 0);

    const today = new Date().toDateString();
    if (s.lastDate !== today) {
      const yesterday = new Date(Date.now() - 864e5).toDateString();
      s.streak = (s.lastDate === yesterday ? (s.streak || 0) : 0) + 1;
      s.lastDate = today;
    }

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
    if (!saveStore(s)) return;
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
        <div class="section-meta">错题请回到关卡里把「名师动画讲解」再看一遍</div>
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
    app.querySelectorAll(".vocab-card").forEach(card => {
      card.addEventListener("click", (e) => {
        if (e.target.closest(".mini-voice")) return;
        card.classList.toggle("flipped");
        const w = card.dataset.word;
        if (w) { TTS.stop(); TTS.speak(w, "en"); }
      });
    });
    app.querySelectorAll(".mini-voice").forEach(btn => {
      btn.addEventListener("click", e => {
        e.stopPropagation();
        TTS.stop();
        TTS.speak(btn.dataset.text, guessLang(btn.dataset.text));
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
  document.getElementById("btn-home").addEventListener("click", renderHome);
  document.getElementById("btn-voice").addEventListener("click", showVoiceSettings);
  renderHome();
})();
