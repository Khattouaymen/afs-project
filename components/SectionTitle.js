export default function SectionTitle({ eyebrow, title, description, align = "center", inverse = false }) {
  const alignment = align === "left" ? "max-w-2xl text-left" : "mx-auto max-w-3xl text-center";

  return (
    <div className={alignment}>
      <p className={inverse ? "eyebrow border-white/15 bg-white/10 text-white" : "eyebrow"}>{eyebrow}</p>
      <h2 className={`mt-5 text-4xl leading-tight sm:text-5xl ${inverse ? "text-white" : "text-afs-text"}`}>{title}</h2>
      <p className={`mt-5 text-sm leading-8 sm:text-base ${inverse ? "text-white/78" : "text-afs-text/75"}`}>{description}</p>
    </div>
  );
}
