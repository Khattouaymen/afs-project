import Link from "next/link";
import { getContactDetails } from "@/lib/content";

export default function TopBar() {
  const contact = getContactDetails();

  return (
    <div className="border-b border-white/10 bg-[#1A0B2D] text-white">
      <div className="container-shell flex flex-col gap-3 py-3 text-xs uppercase tracking-[0.18em] sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-white/80">
          <span>{contact.city}</span>
          <span>{contact.email}</span>
          <span>{contact.phones[0]}</span>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-white/85">
          <Link href="/a-propos" className="transition hover:text-white">
            Notre histoire
          </Link>
          <Link href="/mission-vision-valeurs" className="transition hover:text-white">
            Notre engagement
          </Link>
          <a
            href={contact.socials.instagram.url}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}
