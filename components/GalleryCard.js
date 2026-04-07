import Image from "next/image";

export default function GalleryCard({ item }) {
  return (
    <article className="section-panel group overflow-hidden">
      <div className="relative h-72 overflow-hidden">
        <Image src={item.image} alt={item.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#180927]/90 via-[#180927]/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/68">{item.category}</p>
          <h3 className="mt-2 text-2xl font-semibold">{item.title}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-sm leading-7 text-afs-text/75">{item.description}</p>
      </div>
    </article>
  );
}
