import Link from "next/link";

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "TikTok", href: "https://tiktok.com" },
];

const LEGAL_LINKS = [
  { label: "特定商取引法に基づく表記", href: "/legal/tokushoho" },
  { label: "プライバシーポリシー", href: "/legal/privacy" },
  { label: "利用規約", href: "/legal/terms" },
  { label: "配送・返品について", href: "/shipping" },
];

export function SiteFooter() {
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
          {SOCIAL_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-kura-earth-dark transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-gothic text-xs text-kura-sumi-soft/80">
          {LEGAL_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-kura-earth-dark transition-colors">
                {link.label}
              </Link>
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
