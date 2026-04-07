export default function ContactInfo({ contact }) {
  return (
    <section className="space-y-6">
      <div className="section-panel p-7 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-afs-primary">Coordonnées</p>
        <div className="mt-6 space-y-5 text-sm leading-7 text-afs-text/75">
          <p><span className="font-semibold text-afs-text">Ville :</span> {contact.city}</p>
          <p><span className="font-semibold text-afs-text">Email :</span> {contact.email}</p>
          <p><span className="font-semibold text-afs-text">Téléphones :</span> {contact.phones.join(" / ")}</p>
          <p>
            <span className="font-semibold text-afs-text">Instagram :</span>{" "}
            <a
              href={contact.socials.instagram.url}
              target="_blank"
              rel="noreferrer"
              className="text-afs-primary transition hover:text-afs-accent"
            >
              {contact.socials.instagram.handle}
            </a>
          </p>
        </div>
      </div>

      <div className="section-panel overflow-hidden">
        <div className="border-b border-afs-line p-7 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-afs-primary">Localisation</p>
          <h2 className="mt-4 text-3xl font-semibold">Casablanca, Maroc</h2>
          <p className="mt-4 text-sm leading-7 text-afs-text/75">
            Bloc de localisation prêt à accueillir plus tard une carte interactive, une iframe ou une intégration API dédiée.
          </p>
        </div>
        <div className="bg-afs-soft p-7 sm:p-8">
          <div className="rounded-4xl border border-dashed border-afs-primary/30 bg-white p-8 text-center">
            <p className="text-sm uppercase tracking-[0.24em] text-afs-accent">Point de présence</p>
            <p className="mt-4 text-2xl font-semibold text-afs-primary">Casablanca</p>
            <p className="mt-4 text-sm leading-7 text-afs-text/75">
              Zone illustrative frontend uniquement, pensée pour être remplacée ensuite par une vraie donnée géographique.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
