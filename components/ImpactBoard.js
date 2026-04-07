export default function ImpactBoard({ stats }) {
  const featured = stats[0];
  const rest = stats.slice(1, 5);

  return (
    <div className="purple-panel relative overflow-hidden p-8 sm:p-10">
      <div className="mauve-orb -left-10 top-8 h-48 w-48" />
      <div className="mauve-orb bottom-0 right-0 h-56 w-56" />
      <div className="relative grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="glass-card p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">{featured.category}</p>
          <p className="mt-6 text-6xl font-semibold text-white">{featured.value}</p>
          <p className="mt-4 text-sm leading-8 text-white/78">{featured.label}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {rest.map((stat) => (
            <div key={stat.label} className="glass-card p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/60">{stat.category}</p>
              <p className="mt-3 text-4xl font-semibold text-white">{stat.value}</p>
              <p className="mt-2 text-sm leading-7 text-white/78">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
