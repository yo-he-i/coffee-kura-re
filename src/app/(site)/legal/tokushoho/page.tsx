import type { Metadata } from "next";
import { LegalPage, LegalRow } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 | Coffee Kura Re",
};

export default function TokushohoPage() {
  return (
    <LegalPage title="特定商取引法に基づく表記">
      <dl className="flex flex-col">
        <LegalRow term="販売事業者名">Coffee Kura Re（コーヒー蔵リ）</LegalRow>
        <LegalRow term="運営責任者">（記載予定）</LegalRow>
        <LegalRow term="所在地">長野県須坂市（詳細は記載予定）</LegalRow>
        <LegalRow term="連絡先">お問い合わせページよりご連絡ください</LegalRow>
        <LegalRow term="販売価格">各商品ページに記載した価格（税込）</LegalRow>
        <LegalRow term="商品代金以外の必要料金">
          配送料（地域により異なります。詳細は配送・返品についてのページをご確認ください）
        </LegalRow>
        <LegalRow term="お支払い方法">クレジットカード決済（準備中）</LegalRow>
        <LegalRow term="お支払い時期">ご注文確定時</LegalRow>
        <LegalRow term="商品の引き渡し時期">
          受注後焙煎のため、ご注文から3〜7日以内に発送
        </LegalRow>
        <LegalRow term="返品・交換について">
          配送・返品についてのページをご確認ください
        </LegalRow>
      </dl>
      <p className="text-kura-sumi-soft/70 text-xs">
        ※ こちらは表示確認用のドラフトです。実際の運用前に正式な内容へ更新してください。
      </p>
    </LegalPage>
  );
}
