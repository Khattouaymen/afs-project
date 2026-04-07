import Image from "next/image";

export default function VisualMosaic({ association, actions }) {
  const [first, second, third] = actions;

  return (
    <div className="relative">
      <div className="mauve-orb -left-12 top-8 h-40 w-40" />
      <div className="mauve-orb bottom-0 right-0 h-56 w-56" />

      <div className="relative grid gap-4 sm:grid-cols-[1.15fr_0.85fr]">
        <div className="section-panel overflow-hidden p-3">
          <div className="relative h-[23rem] overflow-hidden rounded-[1.8rem] sm:h-[32rem]">
            <Image
              src={association.featuredImage}
              alt="Action de terrain AFS"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#160923]/85 via-[#160923]/15 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-white/70">Terrain AFS</p>
              <h3 className="mt-3 text-3xl font-semibold">Une identité plus visuelle, plus vivante et plus mémorable.</h3>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="purple-panel relative overflow-hidden p-6">
            <div className="absolute right-0 top-0 h-28 w-28 rounded-full border border-white/10" />
            <div className="relative">
              <div className="relative h-14 w-14 overflow-hidden rounded-2xl bg-white">
                <Image src={association.logo} alt="Logo AFS" fill className="object-contain p-1.5" sizes="56px" />
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.28em] text-white/60">Identité</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{association.tagline}</h3>
              <p className="mt-4 text-sm leading-7 text-white/78">
                Le design met le mauve au centre de l’univers AFS et s’appuie sur des visuels réels pour ne pas rester dans un site seulement textuel.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[first, second].map((action) => (
              <div key={action.slug} className="section-panel overflow-hidden p-2">
                <div className="relative h-44 overflow-hidden rounded-[1.4rem]">
                  <Image
                    src={action.image}
                    alt={action.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#180927]/85 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                    <p className="text-xs uppercase tracking-[0.22em] text-white/70">{action.category}</p>
                    <p className="mt-2 text-lg font-semibold">{action.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="section-panel overflow-hidden p-2">
            <div className="relative h-32 overflow-hidden rounded-[1.4rem]">
              <Image
                src={third.image}
                alt={third.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 35vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#180927]/90 via-[#180927]/40 to-transparent" />
              <div className="absolute inset-y-0 left-0 flex max-w-sm items-center p-5 text-white">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-white/70">{third.category}</p>
                  <p className="mt-2 text-2xl font-semibold">{third.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
