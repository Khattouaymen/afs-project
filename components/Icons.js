export function CompassIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M14.8 9.2 13 13l-3.8 1.8L11 11l3.8-1.8Z" />
    </svg>
  );
}

export function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="m12 3 1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3Z" />
    </svg>
  );
}

export function HeartHandsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 20s-6-3.8-6-8.5A3.5 3.5 0 0 1 12 9a3.5 3.5 0 0 1 6 2.5C18 16.2 12 20 12 20Z" />
      <path d="M5 16.5H3.5A1.5 1.5 0 0 1 2 15v-.5A1.5 1.5 0 0 1 3.5 13H6m13 3.5h1.5A1.5 1.5 0 0 0 22 15v-.5A1.5 1.5 0 0 0 20.5 13H18" />
    </svg>
  );
}

export function TeamIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M16 19v-1a4 4 0 0 0-8 0v1" />
      <circle cx="12" cy="11" r="3" />
      <path d="M5 19v-1a3 3 0 0 1 3-3m8 4v-1a3 3 0 0 1 3-3" />
      <path d="M9 8a2.5 2.5 0 1 0-3.5 2.3M15 8a2.5 2.5 0 1 1 3.5 2.3" />
    </svg>
  );
}

export function PartnerIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M7 12a3 3 0 0 1 0-4.2l2-2a3 3 0 1 1 4.2 4.2L12 11" />
      <path d="M17 12a3 3 0 0 1 0 4.2l-2 2a3 3 0 1 1-4.2-4.2L12 13" />
    </svg>
  );
}

export function GalleryIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <path d="m7 15 3-3 3 3 3-4 2 2" />
      <circle cx="9" cy="9" r="1.2" />
    </svg>
  );
}

export function InstagramIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M13.5 21v-7h2.6l.4-3h-3v-1.9c0-.9.3-1.6 1.6-1.6h1.5V5.1c-.3 0-1.1-.1-2.2-.1-2.2 0-3.8 1.3-3.8 3.9V11H8v3h2.7v7h2.8Z" />
    </svg>
  );
}

export function TikTokIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M14.8 3c.4 1.4 1.2 2.5 2.4 3.2.9.6 1.9.9 3 .9v2.8c-1.4 0-2.7-.4-3.9-1v5.6a6 6 0 1 1-6-6c.4 0 .8 0 1.2.1v2.9a3.2 3.2 0 1 0 1.9 2.9V3h1.4Z" />
    </svg>
  );
}

export function LinkedInIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M6.1 8.2a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4ZM4.8 9.8h2.7V19H4.8V9.8Zm4.5 0H12v1.3h.1c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.7V19h-2.7v-4.3c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2V19H9.3V9.8Z" />
    </svg>
  );
}

export function YouTubeIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M21.4 8.2a2.9 2.9 0 0 0-2-2C17.6 5.7 12 5.7 12 5.7s-5.6 0-7.4.5a2.9 2.9 0 0 0-2 2A30 30 0 0 0 2 12a30 30 0 0 0 .6 3.8 2.9 2.9 0 0 0 2 2c1.8.5 7.4.5 7.4.5s5.6 0 7.4-.5a2.9 2.9 0 0 0 2-2A30 30 0 0 0 22 12a30 30 0 0 0-.6-3.8ZM10.2 15.4V8.6l5 3.4-5 3.4Z" />
    </svg>
  );
}
