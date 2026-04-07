export default function TeamCard({ member }) {
  return (
    <article className="section-panel p-6">
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-afs-primary to-afs-accent text-xl font-bold text-white">
          {member.initials}
        </div>
        <div>
          <h2 className="text-2xl font-semibold">{member.name}</h2>
          <p className="text-sm text-afs-text/75">{member.role}</p>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between gap-4">
        <span className="rounded-full bg-afs-soft px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-afs-primary">
          {member.pole}
        </span>
        <span className="text-sm text-afs-text/55">{member.status}</span>
      </div>
      <p className="mt-5 rounded-2xl bg-afs-soft px-4 py-3 text-sm font-medium text-afs-text/80">{member.focus}</p>
      <p className="mt-6 text-sm leading-7 text-afs-text/75">{member.bio}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {member.expertise.map((item) => (
          <span
            key={item}
            className="rounded-full border border-afs-line bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-afs-primary"
          >
            {item}
          </span>
        ))}
      </div>
      <p className="mt-5 text-sm italic leading-7 text-afs-primary/80">"{member.quote}"</p>
    </article>
  );
}
