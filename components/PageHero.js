export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="purple-panel relative overflow-hidden px-6 py-10 sm:px-10 sm:py-14">
      <div className="mauve-orb -left-16 top-0 h-48 w-48" />
      <div className="mauve-orb right-0 top-0 h-56 w-56" />
      <div className="absolute bottom-0 right-20 h-24 w-24 rounded-full border border-white/10" />
      <div className="relative max-w-3xl space-y-5">
        <p className="eyebrow border-white/15 bg-white/10 text-white">{eyebrow}</p>
        <h1 className="text-4xl leading-tight sm:text-5xl">{title}</h1>
        <p className="text-sm leading-8 text-white/78 sm:text-base">{description}</p>
      </div>
    </section>
  );
}
