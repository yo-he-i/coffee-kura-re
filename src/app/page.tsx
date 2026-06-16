import Link from "next/link";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export default function Home() {
  const featured = products.slice(0, 3);

  return (
    <>
      <section className="relative px-6 pt-20 pb-24 md:pt-32 md:pb-32">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-10">
          <div className="w-full aspect-[4/3] md:aspect-[16/9] bg-kura-cream-dark border border-kura-border flex items-center justify-center">
            <span className="font-gothic text-sm text-kura-sumi-soft/60 tracking-widest">
              蔵の写真（プレースホルダー）
            </span>
          </div>
          <div className="flex flex-col items-center gap-4">
            <p className="font-gothic text-xs tracking-[0.35em] text-kura-earth-dark uppercase">
              Coffee Kura Re ・ 長野県須坂市
            </p>
            <h1 className="font-mincho text-3xl md:text-5xl leading-relaxed text-kura-sumi">
              のらりくらりと、
              <br />
              蔵で焙煎する一杯。
            </h1>
            <p className="font-gothic text-sm md:text-base text-kura-sumi-soft max-w-md leading-loose">
              須坂の蔵を再生したカフェから、
              <br />
              余白のある暮らしへ、豆をお届けします。
            </p>
            <Link
              href="/shop"
              className="mt-2 font-gothic text-xs tracking-widest text-kura-cream bg-kura-sumi px-8 py-3 hover:bg-kura-sumi-soft transition-colors"
            >
              ショップを見る
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28 bg-kura-cream-dark/60 border-y border-kura-border">
        <div className="max-w-xl mx-auto text-center flex flex-col gap-6">
          <p className="font-gothic text-xs tracking-[0.3em] text-kura-earth-dark uppercase">
            Our Story
          </p>
          <h2 className="font-mincho text-2xl md:text-3xl text-kura-sumi tracking-wide">
            のらりくらり、余白。
          </h2>
          <p className="font-gothic text-sm md:text-base leading-loose text-kura-sumi-soft">
            急がず、ゆっくりと豆と向き合う時間。
            <br />
            蔵に残る土壁や木の質感のように、
            <br />
            何も足さない静かな佇まいを大切にしています。
            <br />
            一杯のコーヒーが、暮らしの余白になりますように。
          </p>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28 max-w-5xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-gothic text-xs tracking-[0.3em] text-kura-earth-dark uppercase mb-3">
            Recommended
          </p>
          <h2 className="font-mincho text-2xl md:text-3xl text-kura-sumi tracking-wide">
            おすすめの豆
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/shop"
            className="font-gothic text-xs tracking-widest text-kura-earth-dark border border-kura-earth-dark/60 px-8 py-3 hover:bg-kura-earth-dark hover:text-kura-cream transition-colors inline-block"
          >
            すべての豆を見る
          </Link>
        </div>
      </section>
    </>
  );
}
