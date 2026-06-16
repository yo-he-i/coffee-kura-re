import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "プライバシーポリシー | Coffee Kura Re",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="プライバシーポリシー">
      <p>
        Coffee Kura Re（以下「当店」）は、お客様からお預かりする個人情報を
        適切に取り扱うため、以下の方針を定めます。
      </p>
      <div>
        <h2 className="font-mincho text-base text-kura-sumi mb-2">取得する情報</h2>
        <p>
          ご注文・お問い合わせの際に、氏名、住所、電話番号、メールアドレス等を
          取得します。決済情報（カード番号等）は当店では保持せず、決済代行会社
          （Stripe）が直接取り扱います。
        </p>
      </div>
      <div>
        <h2 className="font-mincho text-base text-kura-sumi mb-2">利用目的</h2>
        <p>
          ご注文商品の発送、お問い合わせへの対応、重要なお知らせの送付のために
          利用します。
        </p>
      </div>
      <div>
        <h2 className="font-mincho text-base text-kura-sumi mb-2">第三者提供</h2>
        <p>
          法令に基づく場合を除き、お客様の同意なく個人情報を第三者へ提供することは
          ありません。
        </p>
      </div>
      <p className="text-kura-sumi-soft/70 text-xs">
        ※ こちらは表示確認用のドラフトです。実際の運用前に正式な内容へ更新してください。
      </p>
    </LegalPage>
  );
}
