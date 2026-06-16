export function LegalPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="px-6 py-16 md:py-24 max-w-2xl mx-auto">
      <h1 className="font-mincho text-2xl md:text-3xl text-kura-sumi tracking-wide text-center mb-12">
        {title}
      </h1>
      <div className="font-gothic text-sm leading-loose text-kura-sumi-soft flex flex-col gap-8">
        {children}
      </div>
    </section>
  );
}

export function LegalRow({
  term,
  children,
}: {
  term: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-8 border-t border-kura-border pt-4">
      <dt className="w-full sm:w-40 shrink-0 text-kura-sumi font-medium">{term}</dt>
      <dd>{children}</dd>
    </div>
  );
}
