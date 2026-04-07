export default function SummaryIconCard({ item }) {
  const Icon = item.icon;

  return (
    <article className="section-panel group p-6 transition duration-300 hover:-translate-y-1">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-afs-soft text-afs-primary transition duration-300 group-hover:bg-afs-primary group-hover:text-white">
        <Icon />
      </div>
      <h3 className="mt-5 text-2xl font-semibold">{item.title}</h3>
      <p className="mt-3 text-sm leading-7 text-afs-text/75">{item.description}</p>
    </article>
  );
}
