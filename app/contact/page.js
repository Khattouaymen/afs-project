import PageHero from "@/components/PageHero";
import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";
import PartnerLogoCloud from "@/components/PartnerLogoCloud";
import Reveal from "@/components/Reveal";
import { getContactDetails, getPartners } from "@/lib/content";

export default function ContactPage() {
  const contact = getContactDetails();
  const partners = getPartners();

  return (
    <div className="container-shell pb-20 pt-8 sm:pt-12">
      <PageHero
        eyebrow="Contact"
        title="Un point d’entrée clair pour échanger avec l’association."
        description="La page de contact reste 100 % frontend pour l’instant, avec des données locales et un formulaire prêt à être branché ultérieurement."
      />

      <section className="grid gap-8 pt-14 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal><ContactInfo contact={contact} /></Reveal>
        <Reveal delay={80}><ContactForm /></Reveal>
      </section>

      <section className="pt-16">
        <Reveal>
          <PageHero
            eyebrow="Partenaires"
            title="Un espace dédié aux alliances et à la confiance institutionnelle."
            description="Même avec des données mockées, cette section prépare la future intégration de vrais logos partenaires sans devoir repenser la page."
          />
        </Reveal>
        <Reveal className="mt-10">
          <PartnerLogoCloud partners={partners} />
        </Reveal>
      </section>
    </div>
  );
}
