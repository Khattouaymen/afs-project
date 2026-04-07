import Image from "next/image";

export default function ActionCard({ action }) {
  return (
    <article className="section-panel group overflow-hidden transition duration-300 hover:-translate-y-1">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={action.image}
          alt={action.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#160923]/90 via-[#160923]/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/72">{action.category}</p>
          <h2 className="mt-3 text-3xl font-semibold">{action.title}</h2>
        </div>
      </div>
      <div className="space-y-5 p-8">
        <p className="text-sm leading-8 text-afs-text/75">{action.description}</p>
        <div className="flex flex-wrap gap-2">
          {action.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-afs-line bg-afs-soft px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-afs-primary"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="h-px w-full bg-gradient-to-r from-afs-primary/30 to-transparent" />
      </div>
    </article>
  );
}
