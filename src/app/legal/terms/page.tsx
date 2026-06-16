import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "利用規約 | Coffee Kura Re",
};

export default function TermsPage() {
  return (
    <LegalPage title="利用規約">
      <p>
        この利用規約（以下「本規約」）は、Coffee Kura Re（以下「当店」）が
        運営するオンラインショップ（以下「本サービス」）のご利用条件を
        定めるものです。
      </p>
      <div>
        <h2 className="font-mincho text-base text-kura-sumi mb-2">第1条（適用）</h2>
        <p>本規約は、本サービスの利用に関わる一切の関係に適用されます。</p>
      </div>
      <div>
        <h2 className="font-mincho text-base text-kura-sumi mb-2">第2条（注文）</h2>
        <p>
          お客様が商品をご注文された時点で、本規約に同意したものとみなします。
        </p>
      </div>
      <div>
        <h2 className="font-mincho text-base text-kura-sumi mb-2">第3条（免責事項）</h2>
        <p>
          当店は、本サービスに関して生じた損害について、当店の故意または重大な
          過失による場合を除き、責任を負いません。
        </p>
      </div>
      <p className="text-kura-sumi-soft/70 text-xs">
        ※ こちらは表示確認用のドラフトです。実際の運用前に正式な内容へ更新してください。
      </p>
    </LegalPage>
  );
}
