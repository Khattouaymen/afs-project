export default function ValueCard({ title, items, highlighted = false }) {
  return (
    <article
      className={`rounded-4xl border p-7 sm:p-8 transition duration-300 hover:-translate-y-1 ${
        highlighted
          ? "border-afs-primary bg-afs-hero text-white shadow-soft"
          : "border-afs-line bg-white"
      }`}
    >
      <p className={`text-xs font-semibold uppercase tracking-[0.28em] ${highlighted ? "text-white/70" : "text-afs-accent"}`}>
        {title}
      </p>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-7 sm:text-base">
            <span className={`mt-2 h-2.5 w-2.5 rounded-full ${highlighted ? "bg-white" : "bg-afs-primary"}`} />
            <span className={highlighted ? "text-white/88" : "text-afs-text/78"}>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
