import Link from "next/link";

const NAV_LINKS = [
  { label: "ショップ", href: "/shop" },
  { label: "焙煎へのこだわり", href: "/about" },
  { label: "配送・返品", href: "/shipping" },
  { label: "お問い合わせ", href: "/contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-kura-border bg-kura-cream/90 backdrop-blur">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-mincho text-lg text-kura-sumi tracking-wide">
          Coffee Kura Re
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-gothic text-xs tracking-widest text-kura-sumi-soft hover:text-kura-earth-dark transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/shop"
          className="md:hidden font-gothic text-xs tracking-widest text-kura-earth-dark"
        >
          ショップへ
        </Link>
      </div>
      <nav className="md:hidden flex overflow-x-auto gap-6 px-6 pb-3 -mt-1">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-gothic text-xs tracking-widest text-kura-sumi-soft whitespace-nowrap hover:text-kura-earth-dark transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
