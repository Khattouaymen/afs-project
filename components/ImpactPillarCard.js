export default function ImpactPillarCard({ pillar, tone = "light" }) {
  const dark = tone === "dark";

  return (
    <article
      className={`rounded-[2rem] border p-7 transition duration-300 hover:-translate-y-1 ${
        dark
          ? "border-white/15 bg-white/10 text-white backdrop-blur"
          : "border-afs-line bg-white shadow-soft"
      }`}
    >
      <p className={`text-xs font-semibold uppercase tracking-[0.3em] ${dark ? "text-white/65" : "text-afs-accent"}`}>
        {pillar.subtitle}
      </p>
      <h3 className={`mt-4 text-3xl font-semibold ${dark ? "text-white" : "text-afs-primary"}`}>{pillar.title}</h3>
      <p className={`mt-4 text-sm leading-7 ${dark ? "text-white/82" : "text-afs-text/75"}`}>{pillar.description}</p>
      <div className={`mt-6 rounded-2xl px-4 py-4 ${dark ? "bg-white/10" : "bg-afs-soft"}`}>
        <p className={`text-sm font-semibold ${dark ? "text-white" : "text-afs-text"}`}>{pillar.metric}</p>
      </div>
      <p className={`mt-5 text-xs font-semibold uppercase tracking-[0.22em] ${dark ? "text-white/72" : "text-afs-primary"}`}>
        {pillar.cta}
      </p>
    </article>
  );
}
