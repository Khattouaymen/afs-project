export default function TeamPreviewCard({ member }) {
  return (
    <article className="section-panel p-6 transition duration-300 hover:-translate-y-1">
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-afs-primary to-afs-accent text-xl font-bold text-white">
          {member.initials}
        </div>
        <div>
          <h3 className="text-2xl font-semibold">{member.name}</h3>
          <p className="text-sm text-afs-text/72">{member.role}</p>
        </div>
      </div>
      <p className="mt-5 text-sm leading-7 text-afs-text/75">{member.focus}</p>
      <p className="mt-4 text-sm italic leading-7 text-afs-primary/80">"{member.quote}"</p>
    </article>
  );
}
