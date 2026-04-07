import Image from "next/image";
import Link from "next/link";

export default function HeroSection({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  stats,
  image,
  logo,
  spotlight
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-afs-hero" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.06),transparent_35%)]" />
      <div className="absolute -left-16 top-24 h-36 w-36 rounded-full border border-white/20 sm:h-52 sm:w-52" />
      <div className="absolute bottom-10 right-0 h-52 w-52 rounded-full bg-white/10 blur-3xl" />

      <div className="container-shell relative grid min-h-[calc(100svh-76px)] items-center gap-12 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:py-20">
        <div className="max-w-3xl space-y-7 text-white">
          <p className="eyebrow border-white/20 bg-white/10 text-white">{eyebrow}</p>
          <h1 className="max-w-3xl text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">{title}</h1>
          <p className="max-w-2xl text-base leading-8 text-white/82 sm:text-lg">{description}</p>
          <div className="flex flex-wrap gap-3">
            {spotlight.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/88 backdrop-blur"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href={primaryAction.href} className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-afs-primary transition hover:-translate-y-0.5 hover:bg-afs-soft">
              {primaryAction.label}
            </Link>
            <Link href={secondaryAction.href} className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10">
              {secondaryAction.label}
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/10 p-3 backdrop-blur">
            <div className="relative h-[26rem] overflow-hidden rounded-[2rem] sm:h-[32rem]">
              <Image src={image} alt="Équipe Ask for Success sur le terrain" fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#210B38]/85 via-[#210B38]/20 to-transparent" />
              <div className="absolute left-5 top-5 flex items-center gap-3 rounded-full bg-white/92 px-4 py-3 text-afs-text shadow-soft">
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-white">
                  <Image src={logo} alt="Logo AFS" fill className="object-contain p-1" sizes="40px" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-afs-accent">AFS</p>
                  <p className="text-sm font-semibold">Jeunesse, impact, terrain</p>
                </div>
              </div>
              <div className="absolute bottom-5 left-5 right-5 grid gap-4 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-[1.75rem] border border-white/15 bg-[#1F0D34]/55 p-5 text-white backdrop-blur-md">
                    <p className="text-xs uppercase tracking-[0.26em] text-white/65">{stat.category}</p>
                    <p className="mt-3 text-4xl font-semibold">{stat.value}</p>
                    <p className="mt-2 text-sm leading-7 text-white/80">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
