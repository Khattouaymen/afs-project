import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";
import SummaryIconCard from "@/components/SummaryIconCard";
import ImpactBoard from "@/components/ImpactBoard";
import PartnerLogoCloud from "@/components/PartnerLogoCloud";
import TeamPreviewCard from "@/components/TeamPreviewCard";
import GalleryCard from "@/components/GalleryCard";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import {
  CompassIcon,
  GalleryIcon,
  HeartHandsIcon,
  SparkIcon,
  TeamIcon
} from "@/components/Icons";
import {
  getAssociationOverview,
  getGallery,
  getHomepageSections,
  getMissionVisionValues,
  getPartners,
  getStats,
  getTeam
} from "@/lib/content";

export default function HomePage() {
  const association = getAssociationOverview();
  const home = getHomepageSections();
  const stats = getStats();
  const institution = getMissionVisionValues();
  const partners = getPartners();
  const team = getTeam();
  const gallery = getGallery();

  const summaryItems = [
    {
      title: "Mission",
      description: institution.mission[0],
      icon: CompassIcon
    },
    {
      title: "Vision",
      description: institution.vision[1],
      icon: SparkIcon
    },
    {
      title: "Valeurs",
      description: institution.valueHighlights[0].description,
      icon: HeartHandsIcon
    }
  ];

  return (
    <div className="overflow-hidden pb-24">
      <HeroSection
        eyebrow="Présentation institutionnelle"
        title={home.hero.title}
        description={home.hero.description}
        primaryAction={{ label: "Découvrir nos missions", href: "/mission-vision-valeurs" }}
        secondaryAction={{ label: "Faire un don", href: "/contact" }}
        stats={stats.slice(0, 4)}
        image={association.featuredImage}
        logo={association.logo}
        spotlight={home.hero.spotlight}
      />

      <div className="container-shell relative z-10 -mt-6">
        <Reveal>
          <div className="purple-panel grid gap-6 p-6 sm:p-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow border-white/15 bg-white/10 text-white">Présentation rapide</p>
              <h2 className="mt-5 text-4xl font-semibold text-white sm:text-5xl">
                Une association marocaine jeune, ambitieuse et profondément ancrée dans le réel.
              </h2>
            </div>
            <div className="grid gap-4">
              {association.highlights.map((item) => (
                <div key={item} className="glass-card px-5 py-4 text-white/82">
                  <p className="text-sm leading-7">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <section className="container-shell pt-20">
        <Reveal>
          <SectionTitle
            eyebrow="Mission / Vision / Valeurs"
            title="Un résumé clair, visuel et immédiatement compréhensible."
            description="Le site s'organise désormais autour d'un contenu plus graphique: moins de longs blocs, plus de repères courts, de visuels et de respiration."
          />
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {summaryItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <SummaryIconCard item={item} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8 flex justify-center">
          <Link href="/mission-vision-valeurs" className="button-secondary">
            Voir en détail
          </Link>
        </Reveal>
      </section>

      <section className="container-shell pt-20">
        <Reveal>
          <SectionTitle
            eyebrow="Chiffres clés / Impact"
            title="Des chiffres visibles, scénarisés et plus émotionnels."
            description="Au lieu d'empiler des statistiques, on met l'impact en scène avec une composition mauve forte et une hiérarchie simple à scanner."
          />
        </Reveal>
        <Reveal className="mt-10">
          <ImpactBoard stats={stats} />
        </Reveal>
      </section>

      <section className="container-shell pt-20">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <Reveal>
            <div className="purple-panel p-8 sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white">
                <GalleryIcon />
              </div>
              <h2 className="mt-6 text-4xl font-semibold text-white">Du storytelling visuel, pas seulement du texte.</h2>
              <p className="mt-5 text-sm leading-8 text-white/78">
                Les vraies photos d'actions rendent le site plus crédible, plus humain et beaucoup plus engageant.
                Elles montrent concrètement les caravanes, les ateliers, les ftours et les rénovations.
              </p>
              <Link href="/galerie" className="button-primary mt-8">
                Explorer la galerie
              </Link>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {gallery.slice(0, 3).map((item, index) => (
              <Reveal key={item.title} delay={index * 90}>
                <GalleryCard item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell pt-20">
        <div className="grid gap-10 lg:grid-cols-[0.74fr_1.26fr] lg:items-start">
          <Reveal>
            <div>
              <SectionTitle
                eyebrow="Équipe"
                title="Les visages qui portent les projets, les partenariats et l'énergie du terrain."
                description="Même sans photos réelles des membres, on structure mieux la présence de l'équipe avec un aperçu clair, humain et facile à approfondir."
                align="left"
              />
              <Link href="/equipe" className="button-secondary mt-8">
                Voir toute l'équipe
              </Link>
            </div>
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-3">
            {team.slice(0, 3).map((member, index) => (
              <Reveal key={member.name} delay={index * 80}>
                <TeamPreviewCard member={member} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell pt-20">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <Reveal>
            <div>
              <SectionTitle
                eyebrow="Contact / Partenaires"
                title="Un bloc final plus utile: prise de contact, alliances et crédibilité."
                description="Cette section regroupe le formulaire et une présence partenaires pour clôturer la page avec une vraie logique institutionnelle."
                align="left"
              />
              <div className="mt-8 rounded-[2rem] border border-afs-line bg-gradient-to-br from-afs-soft to-white p-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-afs-primary text-white">
                  <TeamIcon />
                </div>
                <p className="mt-5 text-sm leading-8 text-afs-text/75">
                  AFS construit sa crédibilité à travers les relations terrain, les collaborations et les initiatives menées
                  avec des structures éducatives et sociales.
                </p>
              </div>
            </div>
          </Reveal>
          <div className="grid gap-6">
            <Reveal>
              <ContactForm />
            </Reveal>
            <Reveal delay={80}>
              <PartnerLogoCloud partners={partners} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-shell pt-20">
        <Reveal>
          <CTASection
            title="Un site plus visuel, mieux structuré et prêt pour les pages détaillées."
            description="La base est maintenant prête pour aller plus loin sur les missions, la galerie complète, l'équipe détaillée et les futurs branchements backend."
            primaryAction={{ label: "Voir les missions", href: "/mission-vision-valeurs" }}
            secondaryAction={{ label: "Voir la galerie", href: "/galerie" }}
          />
        </Reveal>
      </section>
    </div>
  );
}
