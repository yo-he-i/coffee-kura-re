import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "焙煎へのこだわり | Coffee Kura Re",
};

export default function AboutPage() {
  return (
    <>
      <section className="px-6 pt-16 pb-12 md:pt-24 md:pb-16 max-w-2xl mx-auto text-center">
        <p className="font-gothic text-xs tracking-[0.3em] text-kura-earth-dark uppercase mb-3">
          About
        </p>
        <h1 className="font-mincho text-2xl md:text-3xl text-kura-sumi tracking-wide">
          焙煎へのこだわり
        </h1>
      </section>

      <section className="px-6 py-12 md:py-16 max-w-2xl mx-auto flex flex-col gap-6">
        <div className="aspect-[4/3] bg-kura-cream-dark border border-kura-border flex items-center justify-center">
          <span className="font-gothic text-sm text-kura-sumi-soft/60 tracking-widest">
            焙煎風景の写真（プレースホルダー）
          </span>
        </div>
        <p className="font-gothic text-sm md:text-base leading-loose text-kura-sumi-soft">
          須坂の蔵を再生した小さな焙煎所で、一回ごとに豆と向き合っています。
          ご注文をいただいてから焙煎する「受注後焙煎」を基本にしているのは、
          香りが立つ、いちばん新鮮な状態でお届けしたいから。鮮度こそが、
          おいしさの土台だと考えています。
        </p>
      </section>

      <section className="px-6 py-12 md:py-16 bg-kura-cream-dark/60 border-y border-kura-border">
        <div className="max-w-2xl mx-auto flex flex-col gap-6">
          <h2 className="font-mincho text-xl md:text-2xl text-kura-sumi tracking-wide">
            プロフィール
          </h2>
          <p className="font-gothic text-sm md:text-base leading-loose text-kura-sumi-soft">
            長野県須坂市出身。蔵のまちで育った景色を、もう一度暮らしの中に
            残したいという思いから、空き蔵を改装してカフェを始めました。
            のらりくらりと、急がず、丁寧に。豆と人とのちょうど良い距離感を
            探しながら、日々焙煎をしています。
          </p>
        </div>
      </section>
    </>
  );
}
