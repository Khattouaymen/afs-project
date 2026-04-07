import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import PageHero from "@/components/PageHero";
import { getAssociationOverview } from "@/lib/content";

export default function AboutPage() {
  const association = getAssociationOverview();

  return (
    <div className="container-shell pb-20 pt-8 sm:pt-12">
      <PageHero
        eyebrow="À propos"
        title="Une association née à Casablanca pour éclairer les parcours et amplifier les ambitions."
        description="AFS construit un cadre institutionnel crédible et accessible, pensé pour informer, orienter et mobiliser la jeunesse marocaine."
      />

      <section className="grid gap-8 pt-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="section-panel p-7 sm:p-10">
          <SectionTitle
            eyebrow="Histoire"
            title="Une création récente, portée par une intention forte."
            description={association.longStory}
            align="left"
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-afs-soft p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-afs-primary">Date de création</p>
              <p className="mt-3 text-xl font-semibold">{association.foundationDate}</p>
            </div>
            <div className="rounded-3xl bg-afs-soft p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-afs-primary">Ville d’ancrage</p>
              <p className="mt-3 text-xl font-semibold">{association.location}</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="section-panel overflow-hidden p-3">
            <div className="relative h-[20rem] overflow-hidden rounded-[1.8rem] sm:h-[28rem]">
              <Image
                src={association.featuredImage}
                alt="Équipe Ask for Success"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F0D34]/85 via-[#1F0D34]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <p className="eyebrow border-white/15 bg-white/10 text-white">Terrain</p>
                <h2 className="mt-6 text-3xl font-semibold">Un positionnement premium associatif, sans perdre la chaleur du terrain.</h2>
                <p className="mt-5 leading-7 text-white/85">
                  Le ton, la structure et la hiérarchie visuelle ont été pensés pour inspirer confiance aux familles,
                  aux partenaires, aux établissements et aux jeunes eux-mêmes.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {association.identityMarkers.map((item) => (
              <div key={item.title} className="rounded-3xl border border-afs-line bg-white p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-afs-primary">{item.title}</p>
                <p className="mt-3 text-sm leading-7 text-afs-text/75">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
