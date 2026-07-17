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
    prefs: (function () {
      let p = {};
      try { p = JSON.parse(localStorage.getItem(VOICE_KEY)) || {}; } catch (e) { p = {}; }
      // 一次性迁移:默认(并把老用户重置)为微软真人语音;之后用户再手动改才生效
      if (!p.msDefault) { p.engine = "ms"; p.msDefault = 1; }
      return p;
    })(),
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
    // ---------- 预生成微软真人语音(audio/*.mp3,由 tools/gen_audio.py 生成) ----------
    manifest: null,
    cleanText(text) {
      return String(text)
        .replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{20E3}]/gu, "")
        .replace(/\s+/g, " ")
        .trim();
    },
    loadManifest() {
      fetch("audio/manifest.json")
        .then(r => r.ok ? r.json() : null)
        .then(m => { this.manifest = m; })
        .catch(() => {});
    },
    // 共享播放器:在用户第一次点击时解锁,之后 iOS/安卓也能自动播放
    player: null,
    unlocked: false,
    pendingRetry: null,
    ensurePlayer() {
      if (!this.player) {
        this.player = new Audio();
        this.player.preload = "auto";
      }
      return this.player;
    },
    unlock() {
      if (this.unlocked) return;
      this.unlocked = true;
      try {
        const p = this.ensurePlayer();
        if (p.paused) {
          p.muted = true;
          p.src = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=";
          p.play().then(() => { p.pause(); p.muted = false; }).catch(() => { p.muted = false; });
        }
      } catch (e) {}
      try { SFX.ac().resume(); } catch (e) {}
    },
    isPlaying() {
      const a = this.player;
      return (a && !a.paused && !a.ended && a.src && !a.muted) || (speechSynthesis.speaking && !speechSynthesis.paused);
    },
    isPaused() {
      const a = this.player;
      return (a && a.paused && !a.ended && a.currentTime > 0 && a.src.indexOf("data:") < 0) || speechSynthesis.paused;
    },
    pauseCurrent() {
      try { if (this.player) this.player.pause(); } catch (e) {}
      try { if (speechSynthesis.speaking) speechSynthesis.pause(); } catch (e) {}
    },
    resumeCurrent() {
      try { if (this.player && this.player.paused && this.player.currentTime > 0) this.player.play().catch(() => {}); } catch (e) {}
      try { if (speechSynthesis.paused) speechSynthesis.resume(); } catch (e) {}
    },
    async speakPregen(clean, lang, token) {
      if (!this.manifest) return false;
      try {
        const voice = lang === "en" ? "en-US-JennyNeural" : "zh-CN-XiaoxiaoNeural";
        const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(voice + "|" + clean));
        const h = [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, "0")).join("").slice(0, 16);
        if (!this.manifest[h]) return false;
        if (token !== this.token) return true;
        const self = this;
        return await new Promise(resolve => {
          const audio = self.ensurePlayer();
          try { audio.pause(); } catch (e) {}
          const onEnd = () => { cleanup(); resolve(true); };
          const onErr = () => { cleanup(); resolve(token !== self.token); };
          function cleanup() {
            audio.removeEventListener("ended", onEnd);
            audio.removeEventListener("error", onErr);
            audio.removeEventListener("tts-stop", onErr);
          }
          audio.addEventListener("ended", onEnd);
          audio.addEventListener("error", onErr);
          audio.addEventListener("tts-stop", onErr);
          audio.muted = false;
          audio.src = "audio/" + h + ".mp3";
          audio.volume = Math.max(0.2, Math.min(1, self.prefs.volume || 1));
          audio.playbackRate = self.prefs.rate || 1;
          self.currentAudio = audio;
          audio.play().catch(() => {
            // 被浏览器自动播放策略拦截:显示"点我开声音",点击后从头播放本句
            markAudioBlocked();
            self.pendingRetry = () => {
              self.unlocked = true;
              audio.play().catch(() => { cleanup(); resolve(true); });
            };
          });
        });
      } catch (e) { return false; }
    },
    // ---------- 微软 Edge-TTS(浏览器直连,免配置,神经网络人声) ----------
    edgeCache: new Map(),
    edgeFails: 0,
    edgeVoiceZh() { return this.prefs.edgeVoice || "zh-CN-XiaoxiaoNeural"; },
    edgeVoiceEn() { return this.prefs.edgeVoiceEn || "en-US-JennyNeural"; },
    async genSecMsGec() {
      // Sec-MS-GEC = SHA256(Windows时间戳(5分钟对齐) + TrustedClientToken),大写十六进制
      const ticks = (Math.floor(Date.now() / 1000 / 300) * 300 + 11644473600) * 10000000;
      const str = ticks + "6A5AA1D4EAFF4E9FB37E23D68491D6F4";
      const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(str));
      return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, "0")).join("").toUpperCase();
    },
    fetchEdgeAudio(text, voice, ratePct) {
      return new Promise((resolve, reject) => {
        this.genSecMsGec().then(gec => {
          const reqId = Array.from(crypto.getRandomValues(new Uint8Array(16))).map(b => b.toString(16).padStart(2, "0")).join("");
          const url = "wss://speech.platform.bing.com/consumer/speech/synthesize/readaloud/edge/v1" +
            "?TrustedClientToken=6A5AA1D4EAFF4E9FB37E23D68491D6F4" +
            "&Sec-MS-GEC=" + gec + "&Sec-MS-GEC-Version=1-131.0.2903.99" +
            "&ConnectionId=" + reqId;
          const ws = new WebSocket(url);
          ws.binaryType = "arraybuffer";
          const chunks = [];
          const timer = setTimeout(() => { try { ws.close(); } catch (e) {} reject(new Error("edge tts timeout")); }, 10000);
          ws.onopen = () => {
            ws.send("X-Timestamp:" + new Date().toString() + "\r\nContent-Type:application/json; charset=utf-8\r\nPath:speech.config\r\n\r\n" +
              JSON.stringify({ context: { synthesis: { audio: { metadataoptions: { sentenceBoundaryEnabled: "false", wordBoundaryEnabled: "false" }, outputFormat: "audio-24khz-48kbitrate-mono-mp3" } } } }));
            const sign = ratePct >= 0 ? "+" : "";
            const safe = String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
            const ssml = `<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='en-US'><voice name='${voice}'><prosody pitch='+0Hz' rate='${sign}${ratePct}%' volume='+0%'>${safe}</prosody></voice></speak>`;
            ws.send("X-RequestId:" + reqId + "\r\nContent-Type:application/ssml+xml\r\nX-Timestamp:" + new Date().toString() + "\r\nPath:ssml\r\n\r\n" + ssml);
          };
          ws.onmessage = (ev) => {
            if (typeof ev.data === "string") {
              if (ev.data.indexOf("Path:turn.end") >= 0) {
                clearTimeout(timer);
                try { ws.close(); } catch (e) {}
                resolve(new Blob(chunks, { type: "audio/mpeg" }));
              }
            } else {
              const data = new Uint8Array(ev.data);
              const headerLen = (data[0] << 8) | data[1];
              const header = new TextDecoder().decode(data.slice(2, 2 + headerLen));
              if (header.indexOf("Path:audio") >= 0) chunks.push(data.slice(2 + headerLen));
            }
          };
          ws.onerror = () => { clearTimeout(timer); reject(new Error("edge ws error")); };
        }).catch(reject);
      });
    },
    async speakEdge(text, lang, token) {
      if (this.edgeFails >= 2) return false; // 连续失败则本次会话不再尝试,避免每句都卡顿
      try {
        const en = lang === "en";
        const voice = en ? this.edgeVoiceEn() : this.edgeVoiceZh();
        const ratePct = Math.round(((this.prefs.rate || 1) - 1) * 100) + (en ? -8 : 0);
        const key = voice + "|" + ratePct + "|" + text;
        let blobUrl = this.edgeCache.get(key);
        if (!blobUrl) {
          const blob = await this.fetchEdgeAudio(text, voice, ratePct);
          if (!blob || blob.size < 200) throw new Error("empty audio");
          blobUrl = URL.createObjectURL(blob);
          this.edgeCache.set(key, blobUrl);
          if (this.edgeCache.size > 80) {
            const k0 = this.edgeCache.keys().next().value;
            URL.revokeObjectURL(this.edgeCache.get(k0));
            this.edgeCache.delete(k0);
          }
        }
        this.edgeFails = 0;
        if (token !== this.token) return true; // 已被停止,但音频获取成功
        await new Promise(resolve => {
          const audio = new Audio(blobUrl);
          audio.volume = Math.max(0.2, Math.min(1, this.prefs.volume || 1));
          this.currentAudio = audio;
          audio.onended = resolve;
          audio.onerror = resolve;
          audio.play().catch(resolve);
        });
        return true;
      } catch (e) {
        this.edgeFails += 1;
        console.warn("微软语音暂不可用,回退本地声音:", e);
        return false;
      }
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
      const cleanAll = this.cleanText(text);
      const voice = en ? this.enVoice : this.zhVoice;
      const rate = (this.prefs.rate || 1) * (en ? 0.86 : 0.94);
      const pitch = en ? 1 : 1.04;
      const volume = Math.max(0.2, Math.min(1, this.prefs.volume || 1));
      try { speechSynthesis.cancel(); } catch (e) {}
      const localFallback = () => chunks.reduce((chain, chunk) =>
        chain.then(() => this.speakChunk(chunk, token, voice, en, rate, pitch, volume)), Promise.resolve());
      const engine = this.prefs.engine || "ms";
      if (engine === "local" || !cleanAll) return localFallback();
      // 默认引擎:预生成微软真人语音 → 微软在线 → 自定义代理 → 浏览器本地声音
      return this.speakPregen(cleanAll, lang, token).then(okPre => {
        if (okPre || token !== this.token) return;
        return this.speakEdge(cleanAll, lang, token).then(ok => {
          if (ok || token !== this.token) return;
          if (this.prefs.remoteUrl) {
            return this.speakRemote(cleanAll, lang).then(ok2 => {
              if (ok2 || token !== this.token) return;
              return localFallback();
            });
          }
          return localFallback();
        });
      });
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
      this.pendingRetry = null;
      try { speechSynthesis.cancel(); } catch (e) {}
      try {
        if (this.player) {
          this.player.pause();
          this.player.dispatchEvent(new Event("tts-stop")); // 让等待中的播放 Promise 立即返回
        }
        if (this.currentAudio && this.currentAudio !== this.player) this.currentAudio.pause();
      } catch (e) {}
    }
  };
  TTS.init();
  TTS.loadManifest();
  // 任意首次点击即解锁音频(应对 iOS/安卓自动播放限制)
  document.addEventListener("pointerdown", () => TTS.unlock(), { capture: true });

  // 语音被浏览器拦截时,把顶栏按钮变成醒目的"点我开声音"
  function markAudioBlocked() {
    const b = document.getElementById("btn-audio");
    if (b) { b.classList.add("audio-blocked"); b.textContent = "🔇 点我开声音"; }
  }
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
        <div class="voice-status" id="vs-status">
          当前引擎:${(TTS.prefs.engine || "ms") === "ms" ? "🌟 微软晓晓真人语音" : "浏览器本地声音"}${TTS.manifest ? " · 语音包已加载 ✓" : ""}
        </div>
        <div class="vs-row"><label>语音引擎</label>
          <select id="vs-engine">
            <option value="ms" ${(TTS.prefs.engine || "ms") === "ms" ? "selected" : ""}>🌟 微软晓晓真人语音(推荐)</option>
            <option value="local" ${TTS.prefs.engine === "local" ? "selected" : ""}>浏览器本地声音</option>
          </select>
          <span></span></div>
        <div class="vs-row"><label>试听</label>
          <span style="display:flex;gap:8px">
            <button class="mini-voice" id="vs-try-zh">🔊 中文(晓晓)</button>
            <button class="mini-voice" id="vs-try-en">🔊 英文(Jenny)</button>
          </span>
          <span></span></div>
        <details class="vs-local"><summary>本地声音备选(微软人声连不上时使用)</summary>
        <div class="vs-row"><label>中文备选</label>
          <select id="vs-zh">${options(zhList, TTS.zhVoice)}</select>
          <span></span></div>
        <div class="vs-row"><label>英文备选</label>
          <select id="vs-en">${options(enList, TTS.enVoice)}</select>
          <span></span></div>
        </details>
        <div class="vs-row"><label>语速</label>
          <input type="range" id="vs-rate" min="0.7" max="1.3" step="0.05" value="${TTS.prefs.rate || 1}">
          <span id="vs-rate-val">${TTS.prefs.rate || 1}x</span></div>
        <div class="vs-row"><label>音量</label>
          <input type="range" id="vs-volume" min="0.4" max="1" step="0.05" value="${TTS.prefs.volume || 1}">
          <span id="vs-volume-val">${Math.round((TTS.prefs.volume || 1) * 100)}%</span></div>
        <details class="vs-local"><summary>高级:自定义语音代理(一般不用填)</summary>
        <div class="vs-row vs-url"><label>代理地址</label>
          <input id="vs-remote" type="url" placeholder="自建 TTS 代理地址,留空即可" value="${esc(TTS.prefs.remoteUrl || "")}">
          <span></span></div>
        <div class="vs-row"><label>接口格式</label>
          <select id="vs-format">
            <option value="openai-edge" ${(TTS.prefs.remoteFormat || "openai-edge") === "openai-edge" ? "selected" : ""}>OpenAI 兼容 /v1/audio/speech</option>
            <option value="generic" ${TTS.prefs.remoteFormat === "generic" ? "selected" : ""}>通用代理 {text, lang}</option>
          </select>
          <span></span></div>
        </details>
        <div class="vs-hint">🌟 课程语音已用<b>微软「晓晓」神经网络人声</b>提前录制好(英文为 Jenny),所有浏览器都能直接播放,和真人非常接近。语速调节对真人语音同样有效。</div>
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
      TTS.prefs.engine = $("#vs-engine").value;
      TTS.prefs.zh = $("#vs-zh").value;
      TTS.prefs.en = $("#vs-en").value;
      TTS.prefs.rate = parseFloat($("#vs-rate").value);
      TTS.prefs.volume = parseFloat($("#vs-volume").value);
      TTS.prefs.remoteUrl = $("#vs-remote").value.trim();
      TTS.prefs.remoteFormat = $("#vs-format").value;
      TTS.edgeFails = 0; // 重新尝试微软人声
      TTS.zhVoice = TTS.voices.find(v => v.name === TTS.prefs.zh) || TTS.zhVoice;
      TTS.enVoice = TTS.voices.find(v => v.name === TTS.prefs.en) || TTS.enVoice;
      $("#vs-status").textContent = "当前引擎:" + (TTS.prefs.engine === "ms" ? "🌟 微软晓晓真人语音" : "浏览器本地声音") + (TTS.manifest ? " · 语音包已加载 ✓" : "");
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
  // ---------- 全部 40 关通关庆典 ----------
  const ALL_CLEAR_SPEECH = "恭喜恩恩!四十关全部通关!你用四十天的坚持和智慧,走完了整个小升初冒险地图。你是真正的闯关王者,开学一定惊艳所有人!";
  function showAllClear() {
    if (document.querySelector(".allclear-overlay")) return;
    const store = loadStore();
    const xp = getXP(), lv = levelOf(xp);
    const badgeCount = (store.badges || []).length;
    const overlay = document.createElement("div");
    overlay.className = "allclear-overlay";
    overlay.innerHTML = `
      <div class="ac-sky"></div>
      <div class="ac-card">
        <div class="ac-trophy">🏆</div>
        <div class="ac-ribbon">40 / 40 关 · 全部通关</div>
        <h1 class="ac-title">恭喜恩恩!</h1>
        <div class="ac-sub">你用 40 天的坚持和智慧,走完了整个小升初冒险地图!</div>
        <div class="ac-stars">${Array.from({ length: 5 }, (_, i) => `<span style="animation-delay:${.9 + i * .18}s">⭐</span>`).join("")}</div>
        <div class="ac-stats">
          <div class="ac-stat"><b>Lv.${lv}</b><span>最终等级</span></div>
          <div class="ac-stat"><b>${xp}</b><span>总 XP</span></div>
          <div class="ac-stat"><b>${badgeCount}</b><span>徽章</span></div>
        </div>
        <div class="ac-line">真正的闯关王者 · 开学惊艳所有人 💪</div>
        <button class="btn btn-success btn-big" id="ac-close">🎉 太棒啦!</button>
      </div>`;
    document.body.appendChild(overlay);
    // 持续放烟花
    const colors = ["#ffd93d", "#ff8a3d", "#ef5b7b", "#5b6ef5", "#26b8a5", "#a78bfa", "#ffffff"];
    function firework() {
      if (!overlay.isConnected) return;
      const fw = document.createElement("div");
      fw.className = "ac-fw";
      fw.style.left = (8 + Math.random() * 84) + "%";
      fw.style.top = (6 + Math.random() * 55) + "%";
      const color = colors[Math.floor(Math.random() * colors.length)];
      for (let i = 0; i < 22; i++) {
        const s = document.createElement("i");
        const ang = (i / 22) * Math.PI * 2;
        const dist = 55 + Math.random() * 65;
        s.style.setProperty("--dx", Math.cos(ang) * dist + "px");
        s.style.setProperty("--dy", Math.sin(ang) * dist + "px");
        s.style.background = color;
        fw.appendChild(s);
      }
      overlay.appendChild(fw);
      setTimeout(() => fw.remove(), 1300);
    }
    firework(); firework();
    const timer = setInterval(() => { firework(); if (Math.random() < .5) firework(); }, 550);
    confetti(70);
    const confTimer = setInterval(() => { if (overlay.isConnected) confetti(18); }, 2200);
    SFX.badge();
    setTimeout(() => { try { SFX.badge(); } catch (e) {} }, 700);
    TTS.stop();
    setTimeout(() => TTS.speak(ALL_CLEAR_SPEECH, "zh"), 400);
    overlay.querySelector("#ac-close").onclick = () => {
      clearInterval(timer); clearInterval(confTimer);
      TTS.stop();
      overlay.remove();
    };
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
    // 默认:发光光斑 + 大表情漂浮 + 星光点缀
    emoji(el, p, step) {
      const em = p.emoji || step.emoji || "💡";
      const sparks = Array.from({ length: 6 }, (_, i) =>
        `<span class="sw-spark" style="left:${12 + Math.random() * 76}%;top:${10 + Math.random() * 70}%;animation-delay:${i * .35}s">✦</span>`).join("");
      el.innerHTML = `<div class="scene-wrap sw-emoji-wrap">
        <div class="sw-blob"></div><div class="sw-blob sw-blob2"></div>
        ${sparks}
        <div class="sw-emoji">${em}</div>
      </div>`;
    },

    // 数轴 2.0:发光小球弹跳 + 拖尾 + 落点脉冲环 + 起终点标签
    numberline(el, p) {
      const min = -10, max = 10, W = 600, y = 122;
      const xOf = v => 34 + (v - min) / (max - min) * (W - 68);
      const fmtNum = n => Math.abs(n) < 0.001 ? "0" : Number.isInteger(n) ? String(n) : n.toFixed(1).replace(/\.0$/, "");
      const marks = [];
      for (let v = min; v <= max; v += 2) {
        const major = v === p.to || v === p.from || v === 0;
        marks.push(`<line x1="${xOf(v)}" y1="${y - (major ? 9 : 6)}" x2="${xOf(v)}" y2="${y + (major ? 9 : 6)}" stroke="${major ? "#6b74c9" : "#b8bede"}" stroke-width="${major ? 3 : 2}"/>
          <text x="${xOf(v)}" y="${y + 30}" text-anchor="middle" font-size="${major ? 16 : 13}"
            fill="${v === p.to ? "#ff8a3d" : v === p.from ? "#5b6ef5" : v < 0 ? "#7c86e8" : v > 0 ? "#f07878" : "#2b2d42"}"
            font-weight="${major ? "900" : "500"}">${v}</text>`);
      }
      const x0 = xOf(p.from), x1 = xOf(p.to);
      el.innerHTML = `<div class="scene-wrap"><svg viewBox="0 0 ${W} 200" class="scene-svg">
        <defs>
          <radialGradient id="nlDotG" cx="35%" cy="30%"><stop offset="0%" stop-color="#ffd36b"/><stop offset="100%" stop-color="#ff7a2f"/></radialGradient>
          <filter id="nlGlow" x="-80%" y="-80%" width="260%" height="260%"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          <linearGradient id="nlAxis" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#8a90b8"/><stop offset="100%" stop-color="#6b74c9"/></linearGradient>
        </defs>
        <rect x="14" y="${y - 2.5}" width="${W - 28}" height="5" rx="2.5" fill="url(#nlAxis)"/>
        <polygon points="${W - 12},${y} ${W - 28},${y - 8} ${W - 28},${y + 8}" fill="#6b74c9"/>
        ${marks.join("")}
        <circle class="nl2-ring" cx="${x1}" cy="${y}" r="10" fill="none" stroke="#ff8a3d" stroke-width="3"/>
        <g class="nl2-trails"></g>
        <ellipse class="nl2-dot" cx="${x0}" cy="${y - 15}" rx="12" ry="12" fill="url(#nlDotG)" stroke="#fff" stroke-width="3" filter="url(#nlGlow)"/>
        <g class="nl2-tag" filter="url(#nlGlow)">
          <rect class="nl2-tag-bg" x="${x0 - 30}" y="${y - 66}" width="60" height="30" rx="15" fill="#ff8a3d"/>
          <text class="nl2-tag-tx" x="${x0}" y="${y - 45}" text-anchor="middle" font-size="17" font-weight="900" fill="#fff">${fmtNum(p.from)}</text>
        </g>
      </svg></div>`;
      const dot = el.querySelector(".nl2-dot");
      const tagBg = el.querySelector(".nl2-tag-bg");
      const tagTx = el.querySelector(".nl2-tag-tx");
      const trails = el.querySelector(".nl2-trails");
      const hops = Math.min(4, Math.max(1, Math.abs(p.to - p.from)));
      const t0 = performance.now(), dur = 1900;
      let lastTrail = 0;
      (function anim(now) {
        const t = Math.min((now - t0) / dur, 1);
        const ease = t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
        const x = x0 + (x1 - x0) * ease;
        const wave = Math.sin(t * Math.PI * hops);
        const bounce = Math.abs(wave) * 40;
        const land = 1 - Math.abs(wave);            // 落地程度 0~1
        const sx = 12 * (1 + land * .28), sy = 12 * (1 - land * .3);
        dot.setAttribute("cx", x); dot.setAttribute("cy", y - 15 - bounce);
        dot.setAttribute("rx", sx); dot.setAttribute("ry", sy);
        tagBg.setAttribute("x", x - 30); tagBg.setAttribute("y", y - 66 - bounce);
        tagTx.setAttribute("x", x); tagTx.setAttribute("y", y - 45 - bounce);
        tagTx.textContent = fmtNum(p.from + (p.to - p.from) * ease);
        if (now - lastTrail > 50 && t < 1) {
          lastTrail = now;
          const tr = document.createElementNS("http://www.w3.org/2000/svg", "circle");
          tr.setAttribute("cx", x); tr.setAttribute("cy", y - 15 - bounce);
          tr.setAttribute("r", 6); tr.setAttribute("class", "nl2-trail");
          trails.appendChild(tr);
          setTimeout(() => tr.remove(), 700);
        }
        if (t < 1) requestAnimationFrame(anim);
        else dot.classList.add("nl2-arrived");
      })(t0);
    },

    // 温度计 2.0:玻璃质感 + 气泡 + 天气氛围(雪/太阳)
    thermo(el, p) {
      const min = -30, max = 40;
      const hOf = t => (t - min) / (max - min);
      const cold = p.to <= 0, hot = p.to >= 25;
      const flakes = cold ? Array.from({ length: 9 }, (_, i) =>
        `<text class="th2-flake" x="${40 + Math.random() * 160}" y="-12" font-size="${12 + Math.random() * 8}" style="animation-delay:${i * .5}s;animation-duration:${2.6 + Math.random() * 2}s">❄</text>`).join("") : "";
      const sun = hot ? `<g class="th2-sun"><circle cx="80" cy="46" r="22" fill="#ffd93d"/><g class="th2-rays">${Array.from({ length: 8 }, (_, i) =>
        `<line x1="80" y1="46" x2="${80 + 36 * Math.cos(i * Math.PI / 4)}" y2="${46 + 36 * Math.sin(i * Math.PI / 4)}" stroke="#ffd93d" stroke-width="4" stroke-linecap="round"/>`).join("")}</g></g>` : "";
      const scale = [];
      for (let tv = -30; tv <= 40; tv += 10) {
        const sy = 18 + 142 * (1 - hOf(tv));
        scale.push(`<line x1="315" y1="${sy}" x2="${tv === 0 ? 332 : 326}" y2="${sy}" stroke="${tv === 0 ? "#2b2d42" : "#b8bede"}" stroke-width="${tv === 0 ? 2.5 : 1.5}"/>
          <text x="338" y="${sy + 5}" font-size="${tv === 0 ? 15 : 12}" font-weight="${tv === 0 ? "900" : "500"}" fill="${tv === 0 ? "#2b2d42" : "#9aa0b5"}">${tv}℃</text>`);
      }
      el.innerHTML = `<div class="scene-wrap"><svg viewBox="0 0 600 200" class="scene-svg">
        <defs>
          <linearGradient id="thHot" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ffb36b"/><stop offset="100%" stop-color="#ff5252"/></linearGradient>
          <linearGradient id="thCold" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#7db8ff"/><stop offset="100%" stop-color="#3b6ef0"/></linearGradient>
          <radialGradient id="thBulb" cx="35%" cy="30%"><stop offset="0%" stop-color="#ff9d7a"/><stop offset="100%" stop-color="#ff5252"/></radialGradient>
          <radialGradient id="thBulbC" cx="35%" cy="30%"><stop offset="0%" stop-color="#8db8ff"/><stop offset="100%" stop-color="#3b6ef0"/></radialGradient>
          <filter id="thGlow" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          <clipPath id="thClip"><rect x="270" y="16" width="36" height="148" rx="18"/></clipPath>
        </defs>
        ${sun}${flakes}
        <rect x="264" y="10" width="48" height="160" rx="24" fill="#f2f4fd" stroke="#d9dcf0" stroke-width="3"/>
        <g clip-path="url(#thClip)">
          <rect class="th2-fill" x="270" y="${18 + 142 * (1 - hOf(p.from))}" width="36" height="${150 * hOf(p.from)}" fill="url(#${p.from > 0 ? "thHot" : "thCold"})"/>
          <circle class="th2-bub" cx="280" cy="150" r="3" fill="rgba(255,255,255,.65)"/>
          <circle class="th2-bub" cx="292" cy="158" r="2.3" fill="rgba(255,255,255,.55)" style="animation-delay:.7s"/>
          <circle class="th2-bub" cx="286" cy="145" r="1.8" fill="rgba(255,255,255,.5)" style="animation-delay:1.3s"/>
        </g>
        <rect x="272" y="20" width="7" height="130" rx="3.5" fill="rgba(255,255,255,.55)"/>
        <circle class="th2-bulb" cx="288" cy="172" r="20" fill="url(#${p.to > 0 ? "thBulb" : "thBulbC"})" stroke="#fff" stroke-width="3" filter="url(#thGlow)"/>
        ${scale.join("")}
        <text class="th2-num" x="165" y="100" text-anchor="middle" font-size="50" font-weight="900" filter="url(#thGlow)"
          fill="${p.from > 0 ? "#ff5252" : "#3b6ef0"}">${p.from > 0 ? "+" : ""}${p.from}℃</text>
        <text x="165" y="130" text-anchor="middle" font-size="14" font-weight="700" fill="#9aa0b5">${p.to < p.from ? "温度下降中…" : "温度上升中…"}</text>
      </svg></div>`;
      const fill = el.querySelector(".th2-fill");
      const num = el.querySelector(".th2-num");
      const bulb = el.querySelector(".th2-bulb");
      const t0 = performance.now(), dur = 2200;
      (function anim(now) {
        const t = Math.min((now - t0) / dur, 1);
        const ease = 1 - Math.pow(1 - t, 3);
        const cur = p.from + (p.to - p.from) * ease;
        const h = 150 * hOf(cur);
        fill.setAttribute("y", 168 - h);
        fill.setAttribute("height", Math.max(2, h));
        fill.setAttribute("fill", cur > 0 ? "url(#thHot)" : "url(#thCold)");
        bulb.setAttribute("fill", cur > 0 ? "url(#thBulb)" : "url(#thBulbC)");
        num.textContent = (cur > 0 ? "+" : "") + Math.round(cur) + "℃";
        num.setAttribute("fill", cur > 0 ? "#ff5252" : "#3b6ef0");
        if (t < 1) requestAnimationFrame(anim);
        else num.classList.add("th2-num-done");
      })(t0);
    },

    // 分数饼图 2.0:立体投影 + 中心分数 + 完成星光
    fraction(el, p) {
      const R = 40, C = 2 * Math.PI * R;
      function pie(cx, frac, g1, g2, id, label, delay) {
        return `
          <radialGradient id="fr${id}" cx="35%" cy="30%"><stop offset="0%" stop-color="${g1}"/><stop offset="100%" stop-color="${g2}"/></radialGradient>
          <g class="fr2-pie" style="animation-delay:${delay}ms">
            <circle cx="${cx}" cy="84" r="${R + 13}" fill="#fff" filter="url(#frShadow)"/>
            <circle cx="${cx}" cy="84" r="${R}" fill="none" stroke="#edeffa" stroke-width="24"/>
            <circle class="pie-fill" cx="${cx}" cy="84" r="${R}" fill="none" stroke="url(#fr${id})" stroke-width="24"
              stroke-dasharray="0 ${C}" data-target="${frac * C}" data-delay="${delay}"
              transform="rotate(-90 ${cx} 84)"/>
            <text x="${cx}" y="92" text-anchor="middle" font-size="22" font-weight="900" fill="#2b2d42">${label}</text>
            <text x="${cx}" y="165" text-anchor="middle" font-size="15" font-weight="700" fill="#6b7280">${Math.round(frac * 100)}%</text>
          </g>`;
      }
      const [a, b] = p.a, [c, d] = p.b, [rn, rd] = p.r;
      el.innerHTML = `<div class="scene-wrap"><svg viewBox="0 0 600 200" class="scene-svg">
        <defs><filter id="frShadow" x="-40%" y="-40%" width="180%" height="180%"><feDropShadow dx="0" dy="5" stdDeviation="7" flood-color="#3c4682" flood-opacity=".16"/></filter></defs>
        ${pie(115, a / b, "#8d9bff", "#5b6ef5", "A", a + "/" + b, 100)}
        <text class="fr2-op" x="205" y="96" text-anchor="middle" font-size="38" font-weight="900" fill="#b8bede" style="animation-delay:.7s">+</text>
        ${pie(295, c / d, "#5fd8c7", "#26b8a5", "B", c + "/" + d, 800)}
        <text class="fr2-op" x="388" y="96" text-anchor="middle" font-size="38" font-weight="900" fill="#b8bede" style="animation-delay:1.6s">=</text>
        ${pie(487, rn / rd, "#ffc06b", "#ff8a3d", "R", rn + "/" + rd, 1700)}
        <g class="fr2-stars" style="animation-delay:2.7s">${[[-58, -52], [58, -50], [-52, 48], [56, 52]].map(([dx, dy]) =>
          `<text x="${487 + dx}" y="${84 + dy}" text-anchor="middle" font-size="20" fill="#ffd93d">✦</text>`).join("")}</g>
      </svg></div>`;
      el.querySelectorAll(".pie-fill").forEach(c2 => {
        setTimeout(() => {
          c2.style.transition = "stroke-dasharray 1.1s cubic-bezier(.4,0,.2,1)";
          c2.setAttribute("stroke-dasharray", `${c2.dataset.target} ${C}`);
        }, parseInt(c2.dataset.delay, 10) + 250);
      });
    },

    // 分拣 2.0:桶弹入 + 词条弹簧落下 + 光晕
    match(el, p) {
      el.innerHTML = `<div class="scene-wrap"><div class="scene-match">${p.groups.map((g, gi) => `
        <div class="match-col">
          <div class="mt2-bucket" style="animation-delay:${gi * .18}s">${esc(g.head)}</div>
          ${g.items.map((it, ii) => `<div class="mt2-chip" style="animation-delay:${.55 + gi * .5 + ii * .3}s">${esc(it)}</div>`).join("")}
        </div>`).join("")}</div></div>`;
    },

    // 汉字 2.0:大字墨韵登场 + 拼音气泡连线弹出
    char(el, p) {
      const pos = [[140, 46], [462, 46], [108, 142], [490, 142], [300, 24]];
      el.innerHTML = `<div class="scene-wrap"><svg viewBox="0 0 600 200" class="scene-svg">
        <defs><filter id="chGlow" x="-40%" y="-40%" width="180%" height="180%"><feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#3c4682" flood-opacity=".2"/></filter></defs>
        <circle class="ch2-halo" cx="300" cy="104" r="62" fill="#eef0ff"/>
        <text x="300" y="140" text-anchor="middle" font-size="106" font-weight="900" fill="#2b2d42" class="ch2-main" filter="url(#chGlow)">${p.char}</text>
        ${p.pinyins.map((py, i) => {
          const hl = i === p.highlight;
          return `
          <line class="ch2-line" style="animation-delay:${.55 + i * .5}s" x1="300" y1="104" x2="${pos[i][0]}" y2="${pos[i][1]}" stroke="${hl ? "#ff8a3d" : "#d5daf5"}" stroke-width="2" stroke-dasharray="4 5"/>
          <g class="ch2-bubble ${hl ? "ch2-hl" : ""}" style="animation-delay:${.6 + i * .5}s">
            <rect x="${pos[i][0] - 55}" y="${pos[i][1] - 22}" width="110" height="38" rx="19"
              fill="${hl ? "#ff8a3d" : "#ffffff"}" stroke="${hl ? "#ffb36b" : "#dfe4ff"}" stroke-width="2.5" filter="url(#chGlow)"/>
            <text x="${pos[i][0]}" y="${pos[i][1] + 4}" text-anchor="middle" font-size="17" font-weight="900"
              fill="${hl ? "#fff" : "#5b6ef5"}">${esc(py)}</text>
          </g>`;
        }).join("")}
      </svg></div>`;
    },

    // 大海 2.0:三层视差浪 + 日出光芒 / 星河流星 + 帆船
    sea(el, p) {
      const night = p.phase === "stars";
      const stars = night ? Array.from({ length: 22 }, (_, i) =>
        `<circle class="star-tw" style="animation-delay:${i * .14}s" cx="${20 + Math.random() * 560}" cy="${10 + Math.random() * 78}" r="${1.2 + Math.random() * 2}" fill="#fff"/>`).join("") : "";
      const clouds = !night ? `
        <g class="sea2-cloud"><ellipse cx="120" cy="40" rx="42" ry="15" fill="rgba(255,255,255,.85)"/><ellipse cx="150" cy="34" rx="30" ry="12" fill="rgba(255,255,255,.75)"/></g>
        <g class="sea2-cloud sea2-cloud2"><ellipse cx="480" cy="28" rx="36" ry="12" fill="rgba(255,255,255,.8)"/></g>` : "";
      const body = p.phase === "sun"
        ? `<g class="sea2-sunrise">
             <g class="sea2-rays">${Array.from({ length: 12 }, (_, i) =>
               `<line x1="300" y1="118" x2="${300 + 66 * Math.cos(i * Math.PI / 6)}" y2="${118 + 66 * Math.sin(i * Math.PI / 6)}" stroke="#ffd93d" stroke-width="5" stroke-linecap="round" opacity=".7"/>`).join("")}</g>
             <circle cx="300" cy="118" r="40" fill="#ffe9a0" opacity=".5"/>
             <circle cx="300" cy="118" r="30" fill="#ffd93d"/>
           </g>`
        : night ? `
           <ellipse class="galaxy" cx="300" cy="52" rx="240" ry="30" fill="rgba(190,205,255,.16)" transform="rotate(-8 300 52)"/>
           <ellipse class="galaxy" cx="320" cy="56" rx="170" ry="16" fill="rgba(255,255,255,.14)" transform="rotate(-8 320 56)" style="animation-delay:.7s"/>
           <g class="sea2-moonrise"><circle cx="450" cy="70" r="24" fill="#f4f6ff"/><circle cx="442" cy="64" r="5" fill="#dde2f5"/><circle cx="458" cy="76" r="3.6" fill="#dde2f5"/><circle cx="450" cy="84" r="2.6" fill="#e6eaf8"/></g>
           <line class="sea2-shoot" x1="90" y1="18" x2="150" y2="42" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>` : "";
      el.innerHTML = `<div class="scene-wrap"><svg viewBox="0 0 600 200" class="scene-svg sea-svg">
        <defs>
          <linearGradient id="seaSky" x1="0" y1="0" x2="0" y2="1">
            ${night ? '<stop offset="0%" stop-color="#0e1345"/><stop offset="100%" stop-color="#33418f"/>'
                    : '<stop offset="0%" stop-color="#a5d8ff"/><stop offset="100%" stop-color="#e3f4ff"/>'}
          </linearGradient>
          <linearGradient id="seaW1" x1="0" y1="0" x2="0" y2="1">
            ${night ? '<stop offset="0%" stop-color="#33418f"/><stop offset="100%" stop-color="#28356f"/>'
                    : '<stop offset="0%" stop-color="#8ec8f0"/><stop offset="100%" stop-color="#6aaede"/>'}
          </linearGradient>
          <linearGradient id="seaW2" x1="0" y1="0" x2="0" y2="1">
            ${night ? '<stop offset="0%" stop-color="#3d4d9e"/><stop offset="100%" stop-color="#2c3a78"/>'
                    : '<stop offset="0%" stop-color="#5b9fd8"/><stop offset="100%" stop-color="#3e82c4"/>'}
          </linearGradient>
        </defs>
        <rect width="600" height="200" fill="url(#seaSky)"/>
        ${stars}${clouds}${body}
        <path class="wave" fill="${night ? "#242f66" : "#a8d4f2"}" opacity=".8" d="M0,132 Q75,116 150,132 T300,132 T450,132 T600,132 T750,132 T900,132 V200 H0 Z" style="animation-duration:5.5s"/>
        <g class="boat">
          <path d="M266,136 L334,136 L320,154 L280,154 Z" fill="#a06a35"/>
          <path d="M266,136 L334,136 L330,142 L270,142 Z" fill="#8a5a2b"/>
          <line x1="300" y1="136" x2="300" y2="94" stroke="#7a4e24" stroke-width="3.5"/>
          <path class="sea2-sail" d="M303,96 L332,128 L303,128 Z" fill="#fff"/>
          <path class="sea2-sail" d="M297,100 L272,128 L297,128 Z" fill="#f2f4fd"/>
          <path d="M300,94 L316,99 L300,104 Z" fill="#ff8a3d"/>
        </g>
        <path class="wave w1" fill="url(#seaW1)" d="M0,146 Q75,128 150,146 T300,146 T450,146 T600,146 T750,146 T900,146 V200 H0 Z"/>
        <path class="wave w2" fill="url(#seaW2)" d="M0,164 Q75,148 150,164 T300,164 T450,164 T600,164 T750,164 T900,164 V200 H0 Z"/>
        <g class="sea2-foam">${Array.from({ length: 7 }, (_, i) =>
          `<circle cx="${40 + i * 88}" cy="${150 + (i % 2) * 14}" r="${2 + Math.random() * 2}" fill="rgba(255,255,255,.6)"/>`).join("")}</g>
      </svg></div>`;
    },

    // 房屋 2.0:南北分屏,茅草干栏楼(雨+水花) vs 半地穴土屋(雪+炊烟)
    house(el, p) {
      const rain = Array.from({ length: 14 }, (_, i) =>
        `<line class="hs2-rain" style="animation-delay:${(i * .11).toFixed(2)}s" x1="${24 + i * 19}" y1="-8" x2="${18 + i * 19}" y2="10" stroke="#6aa8e8" stroke-width="2.5" stroke-linecap="round"/>`).join("");
      const splash = Array.from({ length: 5 }, (_, i) =>
        `<ellipse class="hs2-splash" style="animation-delay:${(i * .33).toFixed(2)}s" cx="${45 + i * 48}" cy="164" rx="6" ry="1.8" fill="rgba(106,168,232,.55)"/>`).join("");
      const snow = Array.from({ length: 12 }, (_, i) =>
        `<circle class="hs2-snow" style="animation-delay:${(i * .42).toFixed(2)}s;animation-duration:${(2.8 + Math.random() * 2).toFixed(1)}s" cx="${322 + i * 23}" cy="-6" r="${2 + Math.random() * 2}" fill="#eef2ff"/>`).join("");
      el.innerHTML = `<div class="scene-wrap"><svg viewBox="0 0 600 200" class="scene-svg">
        <defs>
          <linearGradient id="hsSkyS" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#cdeedd"/><stop offset="100%" stop-color="#eafaf1"/></linearGradient>
          <linearGradient id="hsSkyN" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#dfe7fb"/><stop offset="100%" stop-color="#f0f4fe"/></linearGradient>
          <linearGradient id="hsRoof" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#94b56a"/><stop offset="100%" stop-color="#6f8f4c"/></linearGradient>
          <filter id="hsShadow" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#3c4682" flood-opacity=".18"/></filter>
        </defs>
        <rect width="296" height="200" fill="url(#hsSkyS)"/><rect x="304" width="296" height="200" fill="url(#hsSkyN)"/>
        <rect x="296" width="8" height="200" fill="#fff"/>
        ${rain}${splash}${snow}
        <!-- 左:干栏式 -->
        <g class="house-pop" filter="url(#hsShadow)">
          <rect x="20" y="160" width="256" height="8" rx="4" fill="#9fc8ae"/>
          ${[78, 116, 154, 192].map(x => `<rect x="${x}" y="118" width="8" height="46" rx="3" fill="#8a5a2b"/><rect x="${x - 2}" y="138" width="12" height="4" rx="2" fill="#7a4e24"/>`).join("")}
          <rect x="60" y="88" width="150" height="34" rx="5" fill="#c98d4e"/>
          <rect x="60" y="88" width="150" height="7" rx="3.5" fill="#b57a3c"/>
          <rect x="122" y="98" width="24" height="24" rx="3" fill="#7a4e24"/>
          <path d="M48,90 L135,44 L222,90 Z" fill="url(#hsRoof)"/>
          <path d="M60,84 L135,48 L210,84" fill="none" stroke="#5d7a3e" stroke-width="3" stroke-linecap="round"/>
          <line x1="228" y1="162" x2="212" y2="122" stroke="#8a5a2b" stroke-width="4" stroke-linecap="round"/>
          <line x1="222" y1="150" x2="214" y2="148" stroke="#7a4e24" stroke-width="3"/>
          <line x1="225" y1="138" x2="217" y2="136" stroke="#7a4e24" stroke-width="3"/>
        </g>
        <!-- 右:半地穴式 -->
        <g class="house-pop" style="animation-delay:.45s" filter="url(#hsShadow)">
          <path d="M320,168 Q450,150 580,168 L580,200 L320,200 Z" fill="#d8c8a8"/>
          <path d="M360,168 Q450,158 540,168 L528,140 Q450,128 372,140 Z" fill="#c4ad82"/>
          <path d="M375,140 L450,80 L525,140 Z" fill="#8a6a3a"/>
          <path d="M385,136 L450,86 L515,136" fill="none" stroke="#6f5228" stroke-width="3" stroke-linecap="round"/>
          <rect x="432" y="118" width="36" height="26" rx="4" fill="#4d3a1e"/>
          <path class="hs2-smoke" d="M455,78 q8,-10 0,-20 q-8,-9 2,-18" fill="none" stroke="#c9cfe8" stroke-width="5" stroke-linecap="round"/>
          ${[340, 560].map(x => `<path d="M${x},168 q4,-10 0,-16 M${x - 5},168 q-2,-8 2,-12 M${x + 5},168 q2,-8 -2,-12" stroke="#9fb87a" stroke-width="2.5" fill="none"/>`).join("")}
        </g>
        <g class="hs2-label"><rect x="60" y="176" width="160" height="22" rx="11" fill="#2f7d4f"/><text x="140" y="192" text-anchor="middle" font-size="13" font-weight="800" fill="#fff">干栏式 · 长江流域 · 防潮</text></g>
        <g class="hs2-label" style="animation-delay:.6s"><rect x="372" y="176" width="160" height="22" rx="11" fill="#5b6ef5"/><text x="452" y="192" text-anchor="middle" font-size="13" font-weight="800" fill="#fff">半地穴式 · 黄河流域 · 保暖</text></g>
      </svg></div>`;
    },

    // 线索卡片 2.0:3D 翻入 + 步骤箭头
    clues(el, p) {
      const arrow = `<div class="cl2-arrow">➜</div>`;
      el.innerHTML = `<div class="scene-wrap"><div class="scene-clues">${p.items.map((it, i) => `
        ${i > 0 ? `<div class="cl2-arrow" style="animation-delay:${i * .35}s">➜</div>` : ""}
        <div class="cl2-card" style="animation-delay:${i * .35}s">
          <b>${esc(it.head)}</b><span>${esc(it.text)}</span>
        </div>`).join("")}</div></div>`;
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
        ${doneCount >= TOTAL_DAYS ? `<div style="text-align:center;margin-top:14px"><button class="btn btn-success" id="btn-allclear">🎆 全部通关!重看庆典</button></div>` : ""}
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
    const acBtn = document.getElementById("btn-allclear");
    if (acBtn) acBtn.onclick = showAllClear;
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

  // ---------- 多邻国式翻页:把一天的内容切成一页页的小卡片 ----------
  let dayPages = [], pageIdx = 0, currentDay = null, currentData = null;
  const MAJOR_BLOCKS = ["lesson", "flashcards", "reading", "foldableReading", "thermometer", "numberline"];

  function buildPages(data) {
    const pages = [];
    data.sections.forEach((sec, si) => {
      pages.push({ type: "cover", sec });
      sec.units.forEach((u, ui) => {
        const key = si + "-" + ui;
        let minors = [];
        let firstOfUnit = true;
        const pushContent = blocks => {
          pages.push({ type: "content", sec, unit: u, key, blocks, showUnitName: firstOfUnit });
          firstOfUnit = false;
        };
        (u.blocks || []).forEach(b => {
          if (MAJOR_BLOCKS.includes(b.type)) { pushContent(minors.concat([b])); minors = []; }
          else minors.push(b);
        });
        if (u.q) {
          // 剩余的小块(如 BOSS 规则说明)贴在题目页上方
          pages.push({ type: "question", sec, unit: u, key, q: u.q, preBlocks: minors, showUnitName: firstOfUnit });
          minors = [];
        } else if (minors.length) {
          pushContent(minors);
        }
      });
    });
    return pages;
  }

  function renderDay(day) {
    TTS.stop();
    const data = window.DAYS[day];
    if (!data) return renderHome();
    currentDay = day; currentData = data;
    dayStartTime = Date.now();
    lastAnswerTime = Date.now();
    dayAnswers = {}; combo = 0; maxCombo = 0;
    dayPages = buildPages(data);
    pageIdx = 0;
    renderPage();
  }

  // ---------- 完成一页的奖励动画 ----------
  const PRAISES = [["⭐", "太棒了!"], ["🎉", "真厉害!"], ["🔥", "恩恩冲鸭!"], ["💪", "就是这样!"], ["🌟", "学霸气质!"], ["🚀", "继续冲!"], ["🏄", "越学越顺!"]];
  function pageReward() {
    const pick = PRAISES[Math.floor(Math.random() * PRAISES.length)];
    const el = document.createElement("div");
    el.className = "page-reward";
    el.innerHTML = `<div class="pr-emoji">${pick[0]}</div><div class="pr-text">${pick[1]}</div>`;
    document.body.appendChild(el);
    if (pageIdx % 5 === 0) { confetti(26); SFX.badge(); } else { confetti(8); SFX.correct(); }
    setTimeout(() => el.remove(), 1000);
  }

  // 每页进入时自动播放的语音
  function pageAutoText(p) {
    if (p.type === "cover") return "接下来是" + subLabel(p.sec.subject) + "时间,加油!";
    if (p.type !== "content") return null;
    const major = p.blocks.find(b => MAJOR_BLOCKS.includes(b.type));
    if (!major) return null;
    if (major.type === "flashcards") return "点击单词卡,先听发音,再翻面记住意思。每个单词都要读三遍哦。";
    if (major.type === "thermometer") return "动手试一试,点按钮看看温度计的变化。";
    if (major.type === "numberline") return "动手试一试,点按钮移动数轴上的小球。";
    if ((major.type === "reading" || major.type === "foldableReading") && major.speakable) return major.paragraphs.join(" ");
    return null; // lesson 页由动画课堂自动播放
  }

  function renderPage() {
    window.scrollTo(0, 0);
    TTS.stop();
    const total = dayPages.length;
    const p = dayPages[pageIdx];
    const pct = Math.round((pageIdx + 1) / total * 100);
    const isLast = pageIdx === total - 1;
    const answered = p.type !== "question" || !!dayAnswers[p.key];

    let body = "";
    if (p.type === "cover") {
      body = `<div class="section-card ${p.sec.subject} cover-page no-copy">
        <div class="cover-icon">${p.sec.icon}</div>
        <h2 style="justify-content:center">${esc(p.sec.title)}</h2>
        <div class="cover-meta"><span class="tag ${p.sec.subject}">${subLabel(p.sec.subject)}</span> · 预计 ${p.sec.minutes} 分钟</div>
        <div class="cover-line">准备好了吗?点「继续」开始!</div>
      </div>`;
    } else if (p.type === "content") {
      body = `<div class="section-card ${p.sec.subject} page-card no-copy">
        <div class="unit-name">📍 ${esc(p.unit.name)}${p.showUnitName ? "" : " · 续"}</div>
        ${p.blocks.map((b, bi) => renderBlock(b, "pg-" + bi)).join("")}
      </div>`;
    } else {
      body = `<div class="section-card ${p.sec.subject} page-card no-copy">
        <div class="unit-name">📍 ${esc(p.unit.name)}</div>
        ${(p.preBlocks || []).map((b, bi) => renderBlock(b, "pre-" + bi)).join("")}
        ${renderInlineQuestion(p.q, p.key, p.sec.subject)}
      </div>`;
    }

    app.innerHTML = `
      <div class="page-top no-copy">
        <button class="btn btn-ghost-dark page-exit" id="btn-exit" title="退出本关">✕</button>
        <div class="page-progress"><div style="width:${pct}%"></div></div>
        <span class="page-count">${pageIdx + 1}/${total}</span>
        <button class="btn btn-ghost-dark page-audio" id="btn-audio" title="暂停 / 播放本页语音">🔊</button>
        <span id="combo-chip" class="combo-chip" style="display:${combo >= 2 ? "" : "none"}">🔥 ×${combo}</span>
      </div>
      ${body}
      <div class="page-nav">
        <button class="btn btn-outline" id="btn-prev" ${pageIdx === 0 ? "disabled" : ""}>←</button>
        <button class="btn ${isLast ? "btn-success" : "btn-primary"} btn-big page-next" id="btn-next" ${answered ? "" : "disabled"}>
          ${isLast ? "完成闯关,领取战利品 🎁" : p.type === "question" && !answered ? "答完题才能继续哦" : "继续 →"}</button>
      </div>`;

    bindWidgets();
    bindAntiCopy();

    if (p.type === "content") {
      p.blocks.forEach((b, bi) => {
        if (b.type !== "lesson") return;
        const el = app.querySelector(`[data-lesson="pg-${bi}"]`);
        if (el) createLessonPlayer(el, b.steps, { autoplay: true });
      });
      const autoText = pageAutoText(p);
      if (autoText) TTS.speak(autoText, guessLang(autoText));
    } else if (p.type === "cover") {
      TTS.speak(pageAutoText(p), "zh");
    } else {
      bindQuestionPage(p);
    }

    // 🔊 播放 / 暂停 / 重播本页语音
    const audioBtn = document.getElementById("btn-audio");
    const replayPageAudio = () => {
      const lessonPlay = app.querySelector(".lesson-player .lesson-play");
      if (p.type === "question") {
        const v = app.querySelector(".q-voice");
        if (v) { v.click(); return; }
      }
      if (lessonPlay && lessonPlay.style.display !== "none") { lessonPlay.click(); return; }
      const t = pageAutoText(p);
      if (t) { TTS.stop(); TTS.speak(t, guessLang(t)); }
    };
    audioBtn.onclick = () => {
      TTS.unlock();
      if (TTS.pendingRetry) {           // 之前被自动播放策略拦截 → 从被拦的那句继续
        const retry = TTS.pendingRetry;
        TTS.pendingRetry = null;
        audioBtn.classList.remove("audio-blocked");
        audioBtn.textContent = "🔊";
        retry();
        return;
      }
      if (TTS.isPlaying()) { TTS.pauseCurrent(); audioBtn.textContent = "▶ 继续"; }
      else if (TTS.isPaused()) { TTS.resumeCurrent(); audioBtn.textContent = "🔊"; }
      else { audioBtn.textContent = "🔊"; replayPageAudio(); }
    };

    document.getElementById("btn-exit").onclick = () => {
      if (confirm("要退出本关吗?本关的答题进度不会保存哦。")) renderHome();
    };
    document.getElementById("btn-prev").onclick = () => {
      if (pageIdx > 0) { pageIdx--; renderPage(); }
    };
    document.getElementById("btn-next").onclick = () => {
      if (p.type === "question" && !dayAnswers[p.key]) return;
      if (isLast) { finishDay(currentDay, currentData); return; }
      pageIdx++;
      pageReward();
      renderPage();
    };
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

  function feedbackHTML(q, correct) {
    return `
      <div class="q-result ${correct ? "ok" : "no"}">
        ${correct ? `🎉 ${q.boss ? "BOSS 被你击败了!" : "回答正确!"}+${q.points} XP` : `💪 这道题有点难,正确答案:<b>${esc(q.type === "choice" ? "ABCD"[q.answer] + ". " + q.options[q.answer] : q.accept[0])}</b>`}
        <div class="explain">💡 ${esc(q.explain)}</div>
      </div>
      ${q.explainSteps ? `<div class="lesson-player explain-lesson">${lessonPlayerHTML("名师动画讲解(强烈建议看一遍)", "听懂讲解,下次遇到同类题就是送分题 🎁")}</div>` : ""}`;
  }

  // 翻回已答过的题目页:还原锁定状态
  function restoreAnswered(qEl, q, rec) {
    qEl.classList.add("locked", rec.correct ? "correct" : "wrong");
    if (q.type === "choice") {
      qEl.querySelectorAll(".option").forEach((o, i) => {
        if (i === q.answer) o.classList.add("right-ans");
        else if (i === rec.oi && !rec.correct) o.classList.add("wrong-pick");
      });
    } else {
      const inp = qEl.querySelector(".fill-input");
      inp.value = rec.userAns === "(未作答)" ? "" : rec.userAns;
      inp.disabled = true;
    }
    qEl.querySelector(".q-submit-row").style.display = "none";
    qEl.querySelector(".q-feedback").innerHTML = feedbackHTML(q, rec.correct);
    if (q.explainSteps) createLessonPlayer(qEl.querySelector(".q-feedback .explain-lesson"), q.explainSteps);
  }

  function bindQuestionPage(p) {
    const q = p.q, key = p.key;
    const qEl = app.querySelector(".inline-q");
    if (!qEl) return;

    if (q.demoSteps) {
      createLessonPlayer(qEl.querySelector(".question-demo"), q.demoSteps);
    }

    const optText = q.type === "choice" ? q.options.map((o, i) => "ABCD"[i] + ". " + o).join(". ") : "";
    const speakQ = () => { TTS.stop(); TTS.speak(q.q + ". " + optText, q.voice || guessLang(q.q + optText)); };
    qEl.querySelector(".q-voice").addEventListener("click", e => { e.stopPropagation(); speakQ(); });

    // 已答过(翻页回看):直接还原
    if (dayAnswers[key]) { restoreAnswered(qEl, q, dayAnswers[key]); return; }

    // 进入题目页自动朗读题目
    speakQ();

    qEl.querySelectorAll(".option").forEach(opt => {
      opt.addEventListener("click", () => {
        if (qEl.classList.contains("locked")) return;
        qEl.querySelectorAll(".option").forEach(o => o.classList.remove("selected"));
        opt.classList.add("selected");
      });
    });

    qEl.querySelector(".q-submit").addEventListener("click", (ev) => {
      if (qEl.classList.contains("locked")) return;
      let userAns, correct, oi = -1;
      if (q.type === "choice") {
        const sel = qEl.querySelector(".option.selected");
        if (!sel) { alert("先选一个答案再提交哦!"); return; }
        oi = parseInt(sel.dataset.oi, 10);
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
        if (combo >= 2) { cc.style.display = ""; cc.textContent = `🔥 ×${combo}`; }
      } else {
        combo = 0;
        SFX.wrong();
        document.getElementById("combo-chip").style.display = "none";
      }

      qEl.classList.add("locked", correct ? "correct" : "wrong");
      qEl.querySelector(".q-submit-row").style.display = "none";
      qEl.querySelector(".q-feedback").innerHTML = feedbackHTML(q, correct);
      if (q.explainSteps) {
        createLessonPlayer(qEl.querySelector(".q-feedback .explain-lesson"), q.explainSteps, { autoplay: !correct });
      }

      dayAnswers[key] = {
        subject: p.sec.subject, unitName: p.unit.name, q: q.q, points: q.points,
        correct: correct, userAns: userAns, oi: oi, boss: !!q.boss, fast: fast, seconds: Math.round(elapsed),
        rightAns: q.type === "choice" ? "ABCD"[q.answer] + ". " + q.options[q.answer] : q.accept[0],
        explain: q.explain
      };

      // 解锁「继续」按钮
      const nextBtn = document.getElementById("btn-next");
      nextBtn.disabled = false;
      nextBtn.textContent = pageIdx === dayPages.length - 1 ? "完成闯关,领取战利品 🎁" : "继续 →";
      nextBtn.classList.add("attention");
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

    // 全部 40 关通关 → 播放庆典动画(每次通关最后一关都会庆祝)
    const store = loadStore();
    const doneCount = Object.keys(store).filter(k => /^day\d+$/.test(k)).length;
    if (doneCount >= TOTAL_DAYS) setTimeout(showAllClear, 1600);
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
