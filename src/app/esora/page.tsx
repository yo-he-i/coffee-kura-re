import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { FinderSection } from "./FinderSection";
import "./esora.css";

export const metadata: Metadata = {
  title: "ESORA COFFEE | Online Store",
  description:
    "静岡市鷹匠のロースタリーカフェ、ESORA COFFEEのオンラインストア用ランディングページ。自家焙煎のコーヒー豆とギフトを紹介します。",
};

export default function EsoraPage() {
  return (
    <div className="esora-lp">
      {/* ── Header ── */}
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#top" aria-label="ESORA COFFEE トップへ">
            <span className="brand-mark">ESORA COFFEE</span>
            <span className="brand-sub">Roastery</span>
          </a>
          <nav className="nav" aria-label="ページ内ナビゲーション">
            <a href="#concept">Concept</a>
            <a href="#lineup">Lineup</a>
            <a href="#gift">Gift</a>
            <a className="nav-cta" href="#lineup">
              Online Store
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* ── Hero ── */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-fallback" aria-hidden="true"></div>
          <img
            className="hero-media"
            src="/assets/kyoto-machiya-hero.svg"
            alt=""
          />
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="kicker">Roastery / Shizuoka Takajou</p>
              <h1 id="hero-title">ESORA COFFEE</h1>
              <p className="hero-lead">
                自家焙煎の静けさを、
                <span className="mobile-break"></span>家の一杯へ。
              </p>
              <p className="hero-text">
                鷹匠のロースタリーで整えた香りを、余白のある朝、仕事の合間、夜のひと息に。派手な言葉より、飲んだ後の静けさで伝わるコーヒーを届けます。
              </p>
              <div className="hero-actions" aria-label="主要導線">
                <a className="button" href="#lineup">
                  豆を見る
                </a>
                <a className="button secondary" href="#gift">
                  ギフトを見る
                </a>
              </div>
            </div>
          </div>
          <div className="hero-notes" aria-label="ESORA COFFEEの特徴">
            <div className="hero-note">
              <strong>自家焙煎</strong>
              香り、甘さ、余韻を細かく整える。
            </div>
            <div className="hero-note">
              <strong>引き算の美学</strong>
              必要なものだけを残す、静かな設計。
            </div>
            <div className="hero-note">
              <strong>鷹匠のロースタリー</strong>
              店で感じる空気を、自宅の一杯へ。
            </div>
          </div>
        </section>

        {/* ── Concept ── */}
        <section className="section mortar" id="concept">
          <div className="section-inner intro-grid">
            <div>
              <p className="section-label">Concept</p>
              <h2>
                余白まで持ち帰れる
                <span className="mobile-break"></span>コーヒー。
              </h2>
              <div className="rule-line" aria-hidden="true"></div>
            </div>
            <div className="intro-copy">
              <p>
                ESORA
                COFFEEが大切にしているのは、コーヒーの強さだけではありません。香りが立ち、口に含み、少し遅れて余韻が残る。その数秒の静けさまで、ひとつの商品として整えます。
              </p>
              <p>
                オンラインストアでは、日常に置きやすい定番ブレンド、季節の個性を楽しむ豆、大切な人へ贈れるギフトを用意します。
              </p>
              <div
                className="intro-photo"
                aria-label="京都の町家カフェを思わせる店内イメージ"
              >
                <img src="/assets/kyoto-interior-counter.svg" alt="" />
              </div>
            </div>
          </div>
        </section>

        {/* ── Editorial Strip ── */}
        <section className="editorial-strip" aria-label="ESORA COFFEEの特徴">
          <div className="strip-inner">
            <div className="strip-item">ESORA Online</div>
            <div className="strip-item">Small Batch Roast</div>
            <div className="strip-item">Quiet Aftertaste</div>
            <div className="strip-item">Gift Ready</div>
          </div>
        </section>

        {/* ── Lineup ── */}
        <section className="section" id="lineup">
          <div className="section-inner">
            <div className="lineup-head">
              <div>
                <p className="section-label">Lineup</p>
                <h2>
                  今の気分で選ぶ、
                  <span className="mobile-break"></span>ESORAの豆。
                </h2>
              </div>
              <p>
                深さ、甘さ、余韻。味の情報を詰め込みすぎず、飲む時間のイメージで選べるラインナップにしています。
              </p>
            </div>
            <div className="product-grid">
              {/* Product 1 */}
              <article className="product-card">
                <div className="product-visual">
                  <img src="/assets/kyoto-product-coffee.svg" alt="" />
                  <span className="photo-caption">Dark Blend</span>
                </div>
                <div className="product-body">
                  <p className="product-meta">Standard</p>
                  <h3>ESORA ダークブレンド</h3>
                  <div
                    className="roast-meter"
                    style={{ "--meter": "82%" } as CSSProperties}
                  >
                    <span>Roast</span>
                    <span className="meter-bar" aria-hidden="true"></span>
                  </div>
                  <p>
                    苦味だけに寄せず、カカオのような甘さと深い余韻を残す定番ブレンド。朝の一杯にも、夜のリセットにも。
                  </p>
                  <ul className="taste-list" aria-label="味の特徴">
                    <li>深煎り</li>
                    <li>カカオ</li>
                    <li>静かな余韻</li>
                  </ul>
                  <a className="product-link" href="#finder">
                    選び方を見る
                  </a>
                </div>
              </article>

              {/* Product 2 */}
              <article className="product-card">
                <div className="product-visual light">
                  <img src="/assets/kyoto-interior-counter.svg" alt="" />
                  <span className="photo-caption">Single Origin</span>
                </div>
                <div className="product-body">
                  <p className="product-meta">Seasonal</p>
                  <h3>季節のシングルオリジン</h3>
                  <div
                    className="roast-meter"
                    style={{ "--meter": "58%" } as CSSProperties}
                  >
                    <span>Roast</span>
                    <span className="meter-bar" aria-hidden="true"></span>
                  </div>
                  <p>
                    その時期に届いた豆の個性を、軽やかに楽しむ一袋。果実感や華やかさを、ESORAらしい落ち着きで整えます。
                  </p>
                  <ul className="taste-list" aria-label="味の特徴">
                    <li>季節限定</li>
                    <li>華やか</li>
                    <li>軽い余白</li>
                  </ul>
                  <a className="product-link" href="#finder">
                    選び方を見る
                  </a>
                </div>
              </article>

              {/* Product 3 */}
              <article className="product-card">
                <div className="product-visual sage">
                  <img src="/assets/kyoto-gift-set.svg" alt="" />
                  <span className="photo-caption">Gift Set</span>
                </div>
                <div className="product-body">
                  <p className="product-meta">Gift</p>
                  <h3>ドリップバッグ ギフト</h3>
                  <div
                    className="roast-meter"
                    style={{ "--meter": "70%" } as CSSProperties}
                  >
                    <span>Roast</span>
                    <span className="meter-bar" aria-hidden="true"></span>
                  </div>
                  <p>
                    器具がなくても、ESORAの一杯をそのまま贈れるギフト。手土産、季節の挨拶、少し静かな贈り物に。
                  </p>
                  <ul className="taste-list" aria-label="味の特徴">
                    <li>手軽</li>
                    <li>贈答向け</li>
                    <li>常温配送</li>
                  </ul>
                  <a className="product-link" href="#gift">
                    ギフトを見る
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ── Roasting ── */}
        <section className="section dark" id="roast">
          <div className="section-inner process">
            <div>
              <p className="section-label">Roasting</p>
              <h2>
                説明しすぎない一杯のために、
                <span className="mobile-break"></span>細部を整える。
              </h2>
              <p>
                焙煎も抽出も、主張を足すためではなく、不要な角を削るためにあります。豆の個性を残しながら、日常の中で何度も飲みたくなる重心へ。
              </p>
              <div
                className="process-media"
                aria-label="京都の町家カフェを思わせるカウンターイメージ"
              >
                <img src="/assets/kyoto-interior-counter.svg" alt="" />
              </div>
            </div>
            <div className="process-list">
              <div className="process-item">
                <span className="process-num">01</span>
                <div>
                  <h3>主役を決める</h3>
                  <p>香り、甘さ、ボディのどこを中心にするかを先に決める。</p>
                </div>
              </div>
              <div className="process-item">
                <span className="process-num">02</span>
                <div>
                  <h3>余計な複雑さを削る</h3>
                  <p>ブレンドは混ぜすぎず、2から3種類で役割を明確にする。</p>
                </div>
              </div>
              <div className="process-item">
                <span className="process-num">03</span>
                <div>
                  <h3>飲んだ後の静けさを見る</h3>
                  <p>味の強さより、飲み終わったあとに残る余韻で判断する。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Finder (interactive) ── */}
        <FinderSection />

        {/* ── Gift ── */}
        <section className="section dark" id="gift">
          <div className="section-inner gift">
            <div className="gift-copy">
              <p className="section-label">Gift</p>
              <h2>
                派手ではなく、
                <span className="mobile-break"></span>ちゃんと残る贈り物。
              </h2>
              <p>
                コーヒーのギフトは、相手の時間にそっと入っていく贈り物です。忙しい人へ、甘いものを控えている人へ、家で静かな一杯を楽しみたい人へ。
              </p>
              <div className="section-actions">
                <a className="button" href="#lineup">
                  ギフト候補を見る
                </a>
                <a className="button secondary" href="#faq">
                  配送について
                </a>
              </div>
            </div>
            <div
              className="gift-visual"
              aria-label="ギフトパッケージのイメージ写真"
            >
              <img src="/assets/kyoto-gift-set.svg" alt="" />
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="section" id="faq">
          <div className="section-inner">
            <div className="faq-head">
              <div>
                <p className="section-label">FAQ</p>
                <h2>
                  購入前に
                  <span className="mobile-break"></span>知っておきたいこと。
                </h2>
              </div>
              <p>
                豆の挽き方、ギフト、保存方法など、はじめての方が迷いやすいポイントをまとめました。
              </p>
            </div>
            <div className="faq-list">
              <details>
                <summary>豆のまま、挽いた状態、どちらで購入できますか。</summary>
                <p>
                  豆のままでも、粉の状態でも選べます。挽き目に迷う場合は、普段使っている器具に合わせてお選びください。
                </p>
              </details>
              <details>
                <summary>ギフト包装はできますか。</summary>
                <p>
                  ギフト向けの商品をご用意しています。大げさすぎない、ESORA
                  COFFEEらしい落ち着いた贈り物としてお選びいただけます。
                </p>
              </details>
              <details>
                <summary>どの豆を選べばいいかわかりません。</summary>
                <p>
                  まずは飲む時間で選んでください。朝は軽やかに、仕事の合間は集中を戻す味に、夜は余韻が静かに残る深煎りがおすすめです。
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* ── Closing CTA ── */}
        <section className="closing" id="store">
          <div className="closing-inner">
            <h2>
              家で飲む一杯にも、
              <span className="mobile-break"></span>ESORA COFFEEの静けさを。
            </h2>
            <a className="button secondary" href="#lineup">
              商品ラインナップへ
            </a>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="site-footer">
        <div className="footer-inner">
          <span>ESORA COFFEE / Shizuoka Takajou</span>
          <div className="footer-links">
            <a href="#concept">Concept</a>
            <a href="#lineup">Lineup</a>
            <a href="#gift">Gift</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
