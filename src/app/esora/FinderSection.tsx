"use client";

import { useState } from "react";

type FinderMode = "morning" | "work" | "night";

const finderData: Record<
  FinderMode,
  {
    kicker: string;
    title: string;
    copy: string;
    bean: string;
    taste: string;
    scene: string;
  }
> = {
  morning: {
    kicker: "Morning",
    title: '一日の輪郭を整える、<span class="mobile-break"></span>深すぎない一杯。',
    copy: "朝は香りが先に立ち、重たく残りすぎない豆を。急いで飲むより、10分だけ余白を作る感覚で選びます。",
    bean: "季節のシングルオリジン",
    taste: "軽やか、華やか、透明感",
    scene: "仕事前、休日午前",
  },
  work: {
    kicker: "Work Break",
    title: '集中を戻す、<span class="mobile-break"></span>芯のあるブレンド。',
    copy: "仕事の合間には、輪郭のある苦味と甘さがある豆を。気分を切り替えたい時に、派手すぎず深く戻してくれます。",
    bean: "ESORA ダークブレンド",
    taste: "カカオ、ナッツ、深い余韻",
    scene: "午後、思考の整理",
  },
  night: {
    kicker: "Night",
    title: '飲んだ後に静けさが残る、<span class="mobile-break"></span>深い一杯。',
    copy: "夜は味の強さよりも、余韻の落ち着きで選びます。甘さと苦味がゆっくり残る豆が、1日の終わりに合います。",
    bean: "ESORA ダークブレンド",
    taste: "深煎り、甘さ、静けさ",
    scene: "夜、読書、ひと息",
  },
};

const MODES: { key: FinderMode; label: string }[] = [
  { key: "morning", label: "朝" },
  { key: "work", label: "仕事の合間" },
  { key: "night", label: "夜" },
];

export function FinderSection() {
  const [mode, setMode] = useState<FinderMode>("morning");
  const data = finderData[mode];

  return (
    <section className="section mortar" id="finder">
      <div className="section-inner finder">
        <div className="finder-head">
          <div>
            <p className="section-label">Finder</p>
            <h2>
              どの時間に飲むかで
              <span className="mobile-break"></span>選ぶ。
            </h2>
          </div>
        </div>
        <div>
          <div className="segmented" role="tablist" aria-label="飲む時間で豆を選ぶ">
            {MODES.map(({ key, label }) => (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={mode === key ? "true" : "false"}
                data-mode={key}
                onClick={() => setMode(key)}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="finder-panel" aria-live="polite">
            <p className="eyebrow">{data.kicker}</p>
            {/* dangerouslySetInnerHTML is safe here: content is hardcoded, not user input */}
            <h3 dangerouslySetInnerHTML={{ __html: data.title }} />
            <p>{data.copy}</p>
            <div className="finder-notes">
              <div className="finder-note">
                <span>Recommend</span>
                <strong>{data.bean}</strong>
              </div>
              <div className="finder-note">
                <span>Taste</span>
                <strong>{data.taste}</strong>
              </div>
              <div className="finder-note">
                <span>Scene</span>
                <strong>{data.scene}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
