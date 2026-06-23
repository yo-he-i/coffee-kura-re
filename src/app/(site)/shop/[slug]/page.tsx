import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/data/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "商品が見つかりません | Coffee Kura Re" };
  }

  return { title: `${product.name} | Coffee Kura Re` };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const isSoldOut = product.stock <= 0;

  return (
    <section className="px-6 py-16 md:py-24 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        <div className="aspect-square bg-kura-cream-dark border border-kura-border flex items-center justify-center">
          <span className="font-gothic text-sm text-kura-sumi-soft/50 tracking-widest">
            豆の写真
          </span>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <p className="font-gothic text-xs tracking-[0.3em] text-kura-earth-dark uppercase mb-3">
              {product.roastLevel}
            </p>
            <h1 className="font-mincho text-2xl md:text-3xl text-kura-sumi tracking-wide">
              {product.name}
            </h1>
          </div>

          <p className="font-gothic text-sm leading-loose text-kura-sumi-soft">
            {product.description}
          </p>

          <dl className="font-gothic text-sm text-kura-sumi-soft flex flex-col gap-2 border-t border-kura-border pt-5">
            <div className="flex justify-between gap-4">
              <dt className="text-kura-sumi-soft/70 shrink-0">原産国</dt>
              <dd className="text-right">{product.origin}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-kura-sumi-soft/70 shrink-0">農園 / 生産者</dt>
              <dd className="text-right">{product.farm}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-kura-sumi-soft/70 shrink-0">品種</dt>
              <dd className="text-right">{product.varietal}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-kura-sumi-soft/70 shrink-0">精製方法</dt>
              <dd className="text-right">{product.process}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-kura-sumi-soft/70 shrink-0">焙煎度</dt>
              <dd className="text-right">{product.roastLevel}</dd>
            </div>
          </dl>

          <div className="border-t border-kura-border pt-5">
            <p className="font-gothic text-xs text-kura-sumi-soft/70 mb-2">
              テイスティングノート
            </p>
            <ul className="flex flex-wrap gap-2">
              {product.tastingNotes.map((note) => (
                <li
                  key={note}
                  className="font-gothic text-xs text-kura-sumi-soft border border-kura-border px-3 py-1"
                >
                  {note}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-kura-border pt-5 flex flex-col gap-3">
            <p className="font-gothic text-xs text-kura-sumi-soft/70">内容量</p>
            <ul className="flex flex-col gap-2">
              {product.weightOptions.map((option) => (
                <li
                  key={option.weight}
                  className="flex justify-between font-gothic text-sm text-kura-sumi"
                >
                  <span>{option.weight}</span>
                  <span className="text-kura-earth-dark">
                    {option.price.toLocaleString()}円
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <button
            type="button"
            disabled={isSoldOut}
            className="mt-2 font-gothic text-xs tracking-widest text-kura-cream bg-kura-sumi px-8 py-3 hover:bg-kura-sumi-soft transition-colors disabled:bg-kura-sumi-soft/40 disabled:cursor-not-allowed"
          >
            {isSoldOut ? "売り切れ" : "カートに入れる（準備中）"}
          </button>
        </div>
      </div>
    </section>
  );
}
