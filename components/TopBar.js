import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TikTokIcon,
  YouTubeIcon
} from "@/components/Icons";
import { getContactDetails } from "@/lib/content";

const socialEntries = [
  { key: "instagram", Icon: InstagramIcon },
  { key: "facebook", Icon: FacebookIcon },
  { key: "tiktok", Icon: TikTokIcon },
  { key: "linkedin", Icon: LinkedInIcon },
  { key: "youtube", Icon: YouTubeIcon }
];

export default function TopBar() {
  const contact = getContactDetails();

  return (
    <div className="border-b border-white/10 bg-[#1A0B2D] text-white">
      <div className="container-shell flex flex-col gap-3 py-3 text-[11px] uppercase tracking-[0.18em] sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-white/80">
          <span>{contact.city}</span>
          <a href={`mailto:${contact.email}`} className="transition hover:text-white">
            {contact.email}
          </a>
          <a
            href={`tel:${contact.phones[0]}`}
            className="text-sm font-semibold tracking-[0.14em] text-white transition hover:text-white sm:text-[13px]"
          >
            {contact.phones[0]}
          </a>
        </div>
        <div className="flex items-center gap-2 text-white/85">
          {socialEntries.map(({ key, Icon }) => {
            const social = contact.socials[key];

            if (!social?.url) {
              return (
                <span
                  key={key}
                  title={`${social?.label || key} à ajouter`}
                  aria-label={`${social?.label || key} à ajouter`}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/45"
                >
                  <Icon />
                </span>
              );
            }

            return (
              <a
                key={key}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                title={social.label}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/85 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
