import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import SummaryIconCard from "@/components/SummaryIconCard";
import PartnerMarquee from "@/components/PartnerMarquee";
import TeamPreviewCard from "@/components/TeamPreviewCard";
import GalleryCard from "@/components/GalleryCard";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { CompassIcon, HeartHandsIcon, SparkIcon, TeamIcon } from "@/components/Icons";
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

  const fundraiser = {
    url: "https://www.kiwicollecte.ma/en/chabab-for-atlas",
    qrCode: "/images/qrcode-kiwi-collecte.png"
  };

  return (
    <div className="space-y-32 overflow-hidden pb-24">
      <section id="accueil">
        <HeroSection
          eyebrow="Présentation institutionnelle"
          title={home.hero.title}
          description={home.hero.description}
          primaryAction={{ label: "Découvrir nos missions", href: "#missions" }}
          secondaryAction={{ label: "Nous contacter", href: "#contact" }}
          stats={stats}
          image={association.featuredImage}
          logo={association.logo}
          spotlight={home.hero.spotlight}
        />
      </section>

      <section id="a-propos" className="container-shell relative z-10 w-full pt-8">
        <Reveal>
          <div className="grid gap-6 rounded-[2.5rem] bg-gradient-to-r from-afs-primary to-purple-600 p-8 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(102,51,153,0.5)] sm:p-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
                À propos
              </p>
              <h2 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                Une association marocaine jeune, structurée et engagée.
              </h2>
            </div>
            <div className="grid gap-4">
              {association.highlights.map((item, idx) => (
                <Reveal key={item} delay={idx * 100} slide="up">
                  <div className="cursor-default rounded-2xl border border-white/10 bg-white/10 px-6 py-5 text-white/90 shadow-sm backdrop-blur-sm transition-all hover:bg-white/20 hover:shadow-md">
                    <p className="text-[15px] font-medium leading-relaxed">{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section id="missions" className="container-shell">
        <Reveal>
          <SectionTitle
            eyebrow="Mission / Vision / Valeurs"
            title="L'essence de notre engagement."
            description="Trois repères simples et clairs pour orienter nos actions, nos partenariats et notre impact dans la durée."
          />
        </Reveal>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {summaryItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 150} slide="up">
              <SummaryIconCard item={item} />
            </Reveal>
          ))}
        </div>
      </section>

      <section id="galerie" className="container-shell">
        <Reveal slide="up">
          <div className="mx-auto flex max-w-2xl flex-col items-center justify-center text-center">
            <p className="eyebrow">La galerie</p>
            <h2 className="mt-4 text-4xl leading-tight text-afs-text sm:text-5xl">L'action en images.</h2>
            <p className="mt-4 text-base leading-8 text-afs-text/75">
              Des ateliers, des rencontres et des actions de terrain qui montrent concrètement comment
              l'association agit auprès des jeunes.
            </p>
          </div>
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {gallery.slice(0, 6).map((item, index) => (
            <Reveal key={item.title} delay={index * 120} slide="up">
              <GalleryCard item={item} />
            </Reveal>
          ))}
        </div>
      </section>

      <section id="equipe" className="container-shell">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal slide="left">
            <div>
              <SectionTitle
                eyebrow="L'équipe"
                title="Les jeunes talents derrière l'impact."
                description="Une équipe mobilisée pour concevoir, coordonner et faire grandir des actions utiles sur le terrain."
                align="left"
              />
            </div>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2">
            {team.slice(0, 4).map((member, index) => (
              <Reveal key={member.name} delay={index * 150} slide="up">
                <TeamPreviewCard member={member} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 w-full overflow-hidden">
        <PartnerMarquee partners={partners} fundraiser={fundraiser} />
      </section>

      <section id="contact" className="container-shell pb-10">
        <div className="group grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <Reveal slide="left">
            <div>
              <SectionTitle
                eyebrow="Contact / Partenariat"
                title="Construisons l'avenir ensemble."
                description="Que vous souhaitiez devenir bénévole, partenaire ou simplement prendre contact, notre équipe vous répond."
                align="left"
              />
              <div className="mt-10 rounded-3xl border border-afs-line bg-gradient-to-br from-afs-soft/50 to-white/80 p-8 shadow-sm backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-afs-primary text-white shadow-md transition-transform hover:scale-110">
                  <TeamIcon />
                </div>
                <h3 className="mb-3 text-xl font-bold text-afs-text">Rejoignez le mouvement</h3>
                <p className="text-base font-medium leading-relaxed text-afs-text/75">
                  AFS se construit à travers les rencontres, les synergies et des engagements
                  durables. Nous cherchons des personnes et des structures prêtes à agir avec nous.
                </p>
              </div>
            </div>
          </Reveal>
          <div className="mx-auto w-full max-w-lg lg:mx-0">
            <Reveal slide="up" delay={200}>
              <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] transition-all duration-500 group-hover:scale-[1.02] hover:shadow-[0_30px_60px_-12px_rgba(100,50,250,0.15)]">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
