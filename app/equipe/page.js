import PageHero from "@/components/PageHero";
import TeamCard from "@/components/TeamCard";
import Reveal from "@/components/Reveal";
import { getTeam } from "@/lib/content";

export default function TeamPage() {
  const team = getTeam();

  return (
    <div className="container-shell pb-20 pt-8 sm:pt-12">
      <PageHero
        eyebrow="Équipe"
        title="Une équipe structurée en pôles pour porter les actions et l’image de l’association."
        description="Cette maquette présente une organisation claire et crédible, avec des profils placeholders faciles à connecter à une base de données plus tard."
      />

      <section className="pt-14">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {team.map((member, index) => (
            <Reveal key={member.name} delay={index * 60}>
              <TeamCard member={member} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
