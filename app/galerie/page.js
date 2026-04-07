import PageHero from "@/components/PageHero";
import GalleryCard from "@/components/GalleryCard";
import Reveal from "@/components/Reveal";
import { getGallery } from "@/lib/content";

export default function GalleryPage() {
  const gallery = getGallery();

  return (
    <div className="container-shell pb-20 pt-8 sm:pt-12">
      <PageHero
        eyebrow="Galerie"
        title="Des images réelles pour montrer les caravanes, ateliers, ftours et rénovations."
        description="Cette galerie transforme le storytelling du site: on voit désormais l'énergie, les bénéficiaires et la réalité des actions menées par AFS."
      />

      <section className="pt-14">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {gallery.map((item, index) => (
            <Reveal key={item.title} delay={index * 60}>
              <GalleryCard item={item} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
