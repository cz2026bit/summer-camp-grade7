#!/usr/bin/env python3
"""用微软 edge-tts 批量生成真人语音 → audio/<hash>.mp3 + audio/manifest.json
用法:node tools/collect_texts.mjs && python3 tools/gen_audio.py
"""
import asyncio, json, os, sys

try:
    import edge_tts
except ImportError:
    sys.exit("请先安装:pip3 install edge-tts")

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
AUDIO_DIR = os.path.join(ROOT, "audio")
os.makedirs(AUDIO_DIR, exist_ok=True)

with open(os.path.join(ROOT, "tools", "texts.json"), encoding="utf8") as f:
    texts = json.load(f)

SEM = None  # 并发限制,在事件循环内创建

async def gen(h, item):
    path = os.path.join(AUDIO_DIR, h + ".mp3")
    if os.path.exists(path) and os.path.getsize(path) > 200:
        return "skip"
    async with SEM:
        for attempt in range(3):
            try:
                tts = edge_tts.Communicate(item["text"], item["voice"])
                await tts.save(path)
                if os.path.getsize(path) > 200:
                    print(f"  ✓ {h} [{item['voice'][:8]}] {item['text'][:32]}…")
                    return "ok"
            except Exception as e:
                print(f"  ✗ {h} 第{attempt+1}次失败: {e}")
                await asyncio.sleep(1.5 * (attempt + 1))
        return "fail"

async def main():
    global SEM
    SEM = asyncio.Semaphore(5)
    results = await asyncio.gather(*[gen(h, it) for h, it in texts.items()])
    ok = results.count("ok"); skip = results.count("skip"); fail = results.count("fail")
    # 写 manifest(只收录实际存在的音频)
    manifest = {h: 1 for h in texts
                if os.path.exists(os.path.join(AUDIO_DIR, h + ".mp3"))
                and os.path.getsize(os.path.join(AUDIO_DIR, h + ".mp3")) > 200}
    with open(os.path.join(AUDIO_DIR, "manifest.json"), "w", encoding="utf8") as f:
        json.dump(manifest, f)
    total_mb = sum(os.path.getsize(os.path.join(AUDIO_DIR, x)) for x in os.listdir(AUDIO_DIR)) / 1e6
    print(f"\n完成:新生成 {ok},已有 {skip},失败 {fail} · manifest 共 {len(manifest)} 条 · audio/ 总大小 {total_mb:.1f} MB")
    if fail:
        sys.exit(1)

asyncio.run(main())
