import Image from "next/image";
import Link from "next/link";
import { getAssociationOverview, getContactDetails, getNavigationItems, getSiteMeta } from "@/lib/content";

export default function Footer() {
  const meta = getSiteMeta();
  const association = getAssociationOverview();
  const navigationItems = getNavigationItems();
  const contact = getContactDetails();
  const activeSocials = Object.values(contact.socials).filter((social) => social.url);

  return (
    <footer className="mt-20 border-t border-white/10 bg-[#180927] text-white">
      <div className="container-shell grid gap-10 py-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-white/10 bg-white">
              <Image src={association.logo} alt="Logo Ask for Success" fill className="object-contain p-1.5" sizes="56px" />
            </div>
            <div>
              <p className="eyebrow border-white/15 bg-white/10 text-white">Ask for Success</p>
            </div>
          </div>
          <h2 className="text-3xl font-semibold">
            Une association marocaine engagée pour l'orientation, les compétences et l'impact terrain.
          </h2>
          <p className="max-w-xl text-sm leading-7 text-white/72">{meta.description}</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Navigation</p>
          <div className="mt-4 space-y-3">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-sm text-white/72 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Coordonnées</p>
          <div className="mt-4 space-y-3 text-sm text-white/72">
            <p>{contact.city}</p>
            <a href={`mailto:${contact.email}`} className="block transition hover:text-white">
              {contact.email}
            </a>
            {contact.phones.map((phone) => (
              <a key={phone} href={`tel:${phone}`} className="block transition hover:text-white">
                {phone}
              </a>
            ))}
            <div className="flex flex-wrap gap-x-4 gap-y-2 pt-1">
              {activeSocials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex text-white transition hover:text-white/80"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
