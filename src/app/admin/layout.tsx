import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="bg-kura-sumi border-b border-kura-sumi-soft">
        <div className="max-w-5xl mx-auto px-6 py-2 flex items-center gap-6">
          <span className="text-xs tracking-widest font-gothic text-kura-cream/50">管理画面</span>
          <Link
            href="/admin/inventory"
            className="text-xs tracking-wide font-gothic text-kura-cream/80 hover:text-kura-cream transition-colors"
          >
            在庫管理
          </Link>
        </div>
      </div>
      {children}
    </div>
  );
}
