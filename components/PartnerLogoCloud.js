import { PartnerIcon } from "@/components/Icons";

export default function PartnerLogoCloud({ partners }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {partners.map((partner) => (
        <article key={partner.name} className="section-panel p-5 transition duration-300 hover:-translate-y-1">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-afs-soft text-afs-primary">
              <PartnerIcon />
            </div>
            <div>
              <p className="text-lg font-semibold">{partner.name}</p>
              <p className="mt-1 text-sm leading-7 text-afs-text/72">{partner.label}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
