const PRODUCTS = [
  {
    name: 'エチオピア イルガチェフェ',
    origin: 'エチオピア',
    roast: '中浅煎り',
    price: '1,400円 / 100g',
    notes: 'ベルガモットの香り、白い花、澄んだ酸味',
  },
  {
    name: 'グアテマラ ウェウェテナンゴ',
    origin: 'グアテマラ',
    roast: '中煎り',
    price: '1,500円 / 100g',
    notes: 'オレンジピール、ブラウンシュガー、柔らかな余韻',
  },
  {
    name: 'ブラジル セラード',
    origin: 'ブラジル',
    roast: '中深煎り',
    price: '1,300円 / 100g',
    notes: 'ナッツ、ミルクチョコレート、丸みのある甘さ',
  },
  {
    name: 'マンデリン リントン',
    origin: 'インドネシア',
    roast: '深煎り',
    price: '1,600円 / 100g',
    notes: '黒糖、スパイス、どっしりとした余韻',
  },
];

const POLICY_LINKS = [
  { label: '特定商取引法に基づく表記', href: '#' },
  { label: 'プライバシーポリシー', href: '#' },
  { label: '配送・返品について', href: '#' },
];

function SectionHeading({ kicker, title, className = '' }) {
  return (
    <div className={`text-center ${className}`}>
      {kicker && (
        <p className="font-gothic text-xs tracking-[0.3em] text-kura-earth-dark uppercase mb-3">
          {kicker}
        </p>
      )}
      <h2 className="font-mincho text-2xl md:text-3xl text-kura-sumi tracking-wide">
        {title}
      </h2>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative px-6 pt-28 pb-24 md:pt-40 md:pb-32">
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
        </div>
      </div>
    </section>
  );
}

function Concept() {
  return (
    <section className="px-6 py-20 md:py-28 bg-kura-cream-dark/60 border-y border-kura-border">
      <div className="max-w-xl mx-auto text-center flex flex-col gap-6">
        <SectionHeading kicker="Concept" title="のらりくらり、余白。" />
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
  );
}

function ProductCard({ product }) {
  return (
    <div className="flex flex-col bg-kura-cream border border-kura-border">
      <div className="aspect-square bg-kura-cream-dark border-b border-kura-border flex items-center justify-center">
        <span className="font-gothic text-xs text-kura-sumi-soft/50 tracking-widest">
          豆の写真
        </span>
      </div>
      <div className="flex flex-col gap-3 p-6">
        <h3 className="font-mincho text-lg text-kura-sumi">{product.name}</h3>
        <dl className="font-gothic text-xs text-kura-sumi-soft flex flex-col gap-1.5">
          <div className="flex justify-between">
            <dt className="text-kura-sumi-soft/70">原産国</dt>
            <dd>{product.origin}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-kura-sumi-soft/70">焙煎度</dt>
            <dd>{product.roast}</dd>
          </div>
        </dl>
        <p className="font-gothic text-xs leading-relaxed text-kura-sumi-soft border-t border-kura-border pt-3">
          {product.notes}
        </p>
        <p className="font-gothic text-sm text-kura-earth-dark mt-1">
          {product.price}
        </p>
      </div>
    </div>
  );
}

function ProductGrid() {
  return (
    <section className="px-6 py-20 md:py-28 max-w-5xl mx-auto">
      <SectionHeading kicker="Beans" title="豆のご紹介" className="mb-12 md:mb-16" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </section>
  );
}

function Roasting() {
  return (
    <section className="px-6 py-20 md:py-28 bg-kura-sumi text-kura-cream">
      <div className="max-w-xl mx-auto text-center flex flex-col gap-6">
        <p className="font-gothic text-xs tracking-[0.3em] text-kura-cream/60 uppercase">
          Roasting
        </p>
        <h2 className="font-mincho text-2xl md:text-3xl tracking-wide">
          受注後に、一回ずつ焙煎します。
        </h2>
        <p className="font-gothic text-sm md:text-base leading-loose text-kura-cream/80">
          ご注文をいただいてから豆を焙煎し、発送いたします。
          <br />
          香りが立つ、いちばん新鮮な状態でお手元へ。
          <br />
          鮮度こそが、おいしさの土台だと考えています。
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-6 py-16 bg-kura-cream-dark/60 border-t border-kura-border">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-10 text-center">
        <div className="flex flex-col gap-2">
          <p className="font-mincho text-lg text-kura-sumi">Coffee Kura Re</p>
          <p className="font-gothic text-xs text-kura-sumi-soft">
            コーヒー蔵リ ・ 長野県須坂市
          </p>
        </div>
        <ul className="flex gap-8 font-gothic text-xs tracking-widest text-kura-sumi-soft">
          <li>
            <a href="#" className="hover:text-kura-earth-dark transition-colors">
              Instagram
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-kura-earth-dark transition-colors">
              YouTube
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-kura-earth-dark transition-colors">
              TikTok
            </a>
          </li>
        </ul>
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-gothic text-xs text-kura-sumi-soft/80">
          {POLICY_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="hover:text-kura-earth-dark transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="font-gothic text-[11px] text-kura-sumi-soft/50">
          © {new Date().getFullYear()} Coffee Kura Re
        </p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="font-gothic">
      <Hero />
      <Concept />
      <ProductGrid />
      <Roasting />
      <Footer />
    </div>
  );
}

export default App;
