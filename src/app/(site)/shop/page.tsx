import type { Metadata } from "next";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "ショップ | Coffee Kura Re",
};

export default function ShopPage() {
  return (
    <section className="px-6 py-16 md:py-24 max-w-5xl mx-auto">
      <div className="text-center mb-12 md:mb-16">
        <p className="font-gothic text-xs tracking-[0.3em] text-kura-earth-dark uppercase mb-3">
          Shop
        </p>
        <h1 className="font-mincho text-2xl md:text-3xl text-kura-sumi tracking-wide">
          豆のご紹介
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
}
