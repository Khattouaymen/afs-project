import PageHero from "@/components/PageHero";
import StatCard from "@/components/StatCard";
import { getStatCategories, getStats } from "@/lib/content";

export default function KeyFiguresPage() {
  const stats = getStats();
  const categories = getStatCategories();

  return (
    <div className="container-shell pb-20 pt-8 sm:pt-12">
      <PageHero
        eyebrow="Chiffres clés"
        title="Des résultats lisibles pour objectiver l’impact d’AFS."
        description="La présentation des indicateurs est pensée pour rassurer, donner de la consistance institutionnelle et valoriser les actions menées."
      />

      <section className="pt-14">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>
      </section>

      <section className="pt-16">
        <div className="section-panel overflow-hidden">
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="bg-afs-hero p-8 text-white sm:p-10">
              <p className="eyebrow border-white/15 bg-white/10 text-white">Lecture d’impact</p>
              <h2 className="mt-6 text-3xl font-semibold">Une catégorisation simple pour mettre en récit les résultats.</h2>
              <p className="mt-5 max-w-xl leading-7 text-white/85">
                Les chiffres peuvent être regroupés par nature d’action pour faciliter la compréhension par les partenaires,
                les établissements et les futurs financeurs.
              </p>
            </div>
            <div className="grid gap-4 p-6 sm:p-8">
              {categories.map((category) => (
                <div key={category.name} className="rounded-3xl border border-afs-line bg-afs-soft p-5">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-afs-primary">
                      {category.tag}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-afs-text/75">{category.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
