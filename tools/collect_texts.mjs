// 收集全站所有需要朗读的文本 → tools/texts.json
// 清洗和哈希规则必须与 js/app.js 中 TTS.cleanText / hashKey 完全一致
import fs from "fs";
import crypto from "crypto";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

// ---- 与前端一致的工具函数 ----
const ZH_VOICE = "zh-CN-XiaoxiaoNeural";
const EN_VOICE = "en-US-JennyNeural";

function cleanText(text) {
  return String(text)
    .replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{20E3}]/gu, "")
    .replace(/\s+/g, " ")
    .trim();
}
function guessLang(text) {
  const ascii = (String(text).match(/[a-zA-Z]/g) || []).length;
  const han = (String(text).match(/[一-龥]/g) || []).length;
  return ascii > han * 2 ? "en" : "zh";
}
function hashKey(voice, clean) {
  return crypto.createHash("sha256").update(voice + "|" + clean).digest("hex").slice(0, 16);
}

// ---- 加载课程数据(浏览器全局 shim)----
global.window = {};
for (const f of fs.readdirSync(path.join(root, "js/data"))) {
  if (f.endsWith(".js")) {
    const code = fs.readFileSync(path.join(root, "js/data", f), "utf8");
    new Function("window", code)(global.window);
  }
}
const DAYS = global.window.DAYS || {};

// ---- 收集 ----
const out = {}; // hash -> {voice, text}
function add(text, lang) {
  const clean = cleanText(text);
  if (!clean) return;
  const voice = lang === "en" ? EN_VOICE : ZH_VOICE;
  out[hashKey(voice, clean)] = { voice, text: clean };
}
function addAuto(text) { add(text, guessLang(text)); }

function collectSteps(steps) {
  (steps || []).forEach(s => {
    const spoken = s.speak || s.text;
    add(spoken, guessLang(s.text)); // 运行时:speak 内容 + 以 text 判断语言
  });
}

Object.values(DAYS).forEach(day => {
  day.sections.forEach(sec => {
    sec.units.forEach(u => {
      (u.blocks || []).forEach(b => {
        if (b.type === "lesson") collectSteps(b.steps);
        if (b.type === "chant") addAuto(b.lines.join(""));
        if (b.type === "flashcards") b.words.forEach(w => {
          add(w.word, "en");
          add(w.word + ". " + w.sentence, guessLang(w.word + ". " + w.sentence));
        });
        if ((b.type === "reading" || b.type === "foldableReading") && b.speakable) {
          addAuto(b.paragraphs.join(" "));
        }
      });
      const q = u.q;
      if (q) {
        const optText = q.type === "choice" ? q.options.map((o, i) => "ABCD"[i] + ". " + o).join(". ") : "";
        add(q.q + ". " + optText, q.voice || guessLang(q.q + optText));
        collectSteps(q.demoSteps);
        collectSteps(q.explainSteps);
      }
    });
  });
});

// 语音设置面板的试听语句
add("你好恩恩,我是你的学习伙伴,这一关我们一起加油!", "zh");
add("Hello! Welcome to Sunshine Middle School.", "en");

fs.writeFileSync(path.join(__dirname, "texts.json"), JSON.stringify(out, null, 1), "utf8");
console.log("collected", Object.keys(out).length, "unique clips");
