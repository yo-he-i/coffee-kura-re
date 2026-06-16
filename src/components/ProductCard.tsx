import Link from "next/link";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  const isSoldOut = product.stock <= 0;

  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group flex flex-col bg-kura-cream border border-kura-border hover:border-kura-earth-dark/60 transition-colors"
    >
      <div className="relative aspect-square bg-kura-cream-dark border-b border-kura-border flex items-center justify-center overflow-hidden">
        <span className="font-gothic text-xs text-kura-sumi-soft/50 tracking-widest">
          豆の写真
        </span>
        {isSoldOut && (
          <span className="absolute top-3 right-3 font-gothic text-[10px] tracking-widest text-kura-cream bg-kura-sumi/80 px-2 py-1">
            SOLD OUT
          </span>
        )}
      </div>
      <div className="flex flex-col gap-3 p-6">
        <h3 className="font-mincho text-lg text-kura-sumi group-hover:text-kura-earth-dark transition-colors">
          {product.name}
        </h3>
        <dl className="font-gothic text-xs text-kura-sumi-soft flex flex-col gap-1.5">
          <div className="flex justify-between">
            <dt className="text-kura-sumi-soft/70">原産国</dt>
            <dd>{product.origin}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-kura-sumi-soft/70">焙煎度</dt>
            <dd>{product.roastLevel}</dd>
          </div>
        </dl>
        <p className="font-gothic text-xs leading-relaxed text-kura-sumi-soft border-t border-kura-border pt-3">
          {product.tastingNotes.join(" / ")}
        </p>
        <p className="font-gothic text-sm text-kura-earth-dark mt-1">
          {product.price.toLocaleString()}円〜
        </p>
      </div>
    </Link>
  );
}
