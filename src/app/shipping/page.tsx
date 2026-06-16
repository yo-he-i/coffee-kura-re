import type { Metadata } from "next";
import { LegalPage, LegalRow } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "配送・返品について | Coffee Kura Re",
};

export default function ShippingPage() {
  return (
    <LegalPage title="配送・返品について">
      <div>
        <h2 className="font-mincho text-base text-kura-sumi mb-3">配送について</h2>
        <dl className="flex flex-col">
          <LegalRow term="発送までの日数">
            受注後焙煎のため、ご注文から3〜7日以内に発送いたします。
          </LegalRow>
          <LegalRow term="配送料">
            全国一律 600円（10,000円以上のご注文で無料）
          </LegalRow>
          <LegalRow term="配送業者">ヤマト運輸（予定）</LegalRow>
        </dl>
      </div>
      <div>
        <h2 className="font-mincho text-base text-kura-sumi mb-3">返品・交換について</h2>
        <p>
          商品の品質に問題があった場合は、お届けから7日以内にお問い合わせ
          ページよりご連絡ください。確認のうえ、交換または返金にて対応いたします。
          焙煎豆という商品の特性上、お客様のご都合による返品はお受けできません。
        </p>
      </div>
      <p className="text-kura-sumi-soft/70 text-xs">
        ※ こちらは表示確認用のドラフトです。実際の運用前に正式な内容へ更新してください。
      </p>
    </LegalPage>
  );
}
