import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ | Coffee Kura Re",
};

const CONTACT_EMAIL = "info@coffee-kura-re.example.com";

export default function ContactPage() {
  return (
    <section className="px-6 py-16 md:py-24 max-w-xl mx-auto text-center flex flex-col gap-8">
      <div>
        <p className="font-gothic text-xs tracking-[0.3em] text-kura-earth-dark uppercase mb-3">
          Contact
        </p>
        <h1 className="font-mincho text-2xl md:text-3xl text-kura-sumi tracking-wide">
          お問い合わせ
        </h1>
      </div>
      <p className="font-gothic text-sm leading-loose text-kura-sumi-soft">
        商品やご注文に関するお問い合わせは、下記のメールアドレスまで
        ご連絡ください。順次お返事いたします。
      </p>
      <a
        href={`mailto:${CONTACT_EMAIL}`}
        className="font-gothic text-sm tracking-widest text-kura-cream bg-kura-sumi px-8 py-3 hover:bg-kura-sumi-soft transition-colors inline-block self-center"
      >
        {CONTACT_EMAIL}
      </a>
    </section>
  );
}
