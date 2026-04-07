import PageHero from "@/components/PageHero";
import ValueCard from "@/components/ValueCard";
import SectionTitle from "@/components/SectionTitle";
import GalleryCard from "@/components/GalleryCard";
import Reveal from "@/components/Reveal";
import { getGallery, getMissionVisionValues, getTestimonials } from "@/lib/content";

export default function MissionVisionValuesPage() {
  const institution = getMissionVisionValues();
  const gallery = getGallery();
  const testimonials = getTestimonials();

  return (
    <div className="container-shell pb-20 pt-8 sm:pt-12">
      <PageHero
        eyebrow="Mission, vision, valeurs"
        title="Le socle stratégique et humain qui structure l’action d’AFS."
        description="Cette page distingue clairement ce que l’association fait, ce qu’elle veut rendre possible et les principes qu’elle défend."
      />

      <section className="pt-14">
        <div className="grid gap-6 lg:grid-cols-3">
          <Reveal><ValueCard title="Mission" items={institution.mission} /></Reveal>
          <Reveal delay={80}><ValueCard title="Vision" items={institution.vision} highlighted /></Reveal>
          <Reveal delay={160}><ValueCard title="Valeurs" items={institution.values} /></Reveal>
        </div>
      </section>

      <section className="pt-16">
        <Reveal>
          <SectionTitle
            eyebrow="Valeurs mises en avant"
            title="Trois repères simples, lisibles et identitaires."
            description="Les valeurs fondatrices sont présentées ici comme des axes de lecture immédiats, pour clarifier l’ADN de l’association."
          />
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {institution.valueHighlights.map((value) => (
            <Reveal key={value.name}>
              <div className="section-panel p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-afs-accent">Valeur</p>
              <h2 className="mt-4 text-3xl font-semibold text-afs-primary">{value.name}</h2>
              <p className="mt-4 text-sm leading-7 text-afs-text/75">{value.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pt-16">
        <Reveal>
          <SectionTitle
            eyebrow="Photos et témoignages"
            title="Les missions prennent plus de force lorsqu'elles sont vues et racontées."
            description="Pour éviter une page seulement textuelle, cette section associe visuels réels et retours de bénéficiaires."
          />
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {gallery.slice(0, 3).map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <GalleryCard item={item} />
            </Reveal>
          ))}
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name + item.role} delay={index * 70}>
              <article className="section-panel p-6">
                <p className="text-sm leading-8 text-afs-text/75">"{item.quote}"</p>
                <p className="mt-5 text-base font-semibold">{item.name}</p>
                <p className="text-sm text-afs-primary">{item.role}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
