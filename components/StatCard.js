export default function StatCard({ stat, compact = false }) {
  return (
    <article className={`rounded-[1.75rem] border border-afs-line bg-white p-5 ${compact ? "" : "shadow-soft"} transition duration-300 hover:-translate-y-1 hover:border-afs-primary/25`}>
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-afs-accent">{stat.category}</p>
      <p className="mt-4 text-4xl font-semibold text-afs-primary">{stat.value}</p>
      <p className="mt-3 text-sm leading-7 text-afs-text/75">{stat.label}</p>
    </article>
  );
}
