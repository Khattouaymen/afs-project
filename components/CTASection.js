import Link from "next/link";

export default function CTASection({ title, description, primaryAction, secondaryAction }) {
  return (
    <section className="section-panel overflow-hidden">
      <div className="grid gap-6 bg-afs-hero p-8 text-white sm:p-10 lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="max-w-2xl">
          <p className="eyebrow border-white/15 bg-white/10 text-white">Étape suivante</p>
          <h2 className="mt-5 text-4xl leading-tight">{title}</h2>
          <p className="mt-5 text-sm leading-8 text-white/82 sm:text-base">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <Link href={primaryAction.href} className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-afs-primary transition hover:-translate-y-0.5 hover:bg-afs-soft">
            {primaryAction.label}
          </Link>
          <Link href={secondaryAction.href} className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10">
            {secondaryAction.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
