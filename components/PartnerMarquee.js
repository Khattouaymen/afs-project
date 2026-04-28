"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

function PartnerTile({ partner }) {
  const content = (
    <>
      <div className="relative flex h-14 w-28 items-center justify-center drop-shadow-transparent transition-all duration-500 group-hover:drop-shadow-[0_10px_20px_rgba(102,51,153,0.2)] sm:h-20 sm:w-40">
        {partner.logo ? (
          <Image
            src={partner.logo}
            alt={`Logo ${partner.name}`}
            fill
            className="object-contain opacity-60 grayscale transition-all duration-700 group-hover:opacity-100 group-hover:grayscale-0"
          />
        ) : (
          <span className="text-3xl font-black text-afs-text/25 transition-all duration-700 group-hover:text-afs-primary sm:text-5xl">
            {partner.mark}
          </span>
        )}
      </div>

      <div className="mt-3 text-center sm:absolute sm:-bottom-8 sm:mt-0 sm:translate-y-3 sm:opacity-0 sm:transition-all sm:duration-500 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
        <p className="text-sm font-extrabold tracking-tight text-afs-text">{partner.name}</p>
        <p className="mt-0.5 text-[9px] font-bold uppercase tracking-widest text-fuchsia-500">{partner.label}</p>
      </div>
    </>
  );

  if (!partner.url) {
    return (
      <div className="group relative flex flex-col items-center justify-center px-4 transition-all duration-500 hover:scale-105">
        {content}
      </div>
    );
  }

  return (
    <a
      href={partner.url}
      target="_blank"
      rel="noreferrer"
      aria-label={partner.name}
      className="group relative flex flex-col items-center justify-center px-4 transition-all duration-500 hover:scale-105"
    >
      {content}
    </a>
  );
}

export default function PartnerMarquee({ partners, fundraiser }) {
  const prefersReducedMotion = useReducedMotion();
  const displayedPartners = prefersReducedMotion ? partners : [...partners, ...partners];

  return (
    <div className="relative z-10 mb-12 mt-[-2rem] w-full overflow-hidden border-y border-afs-line/40 bg-white/80 py-10 backdrop-blur-md">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-20 bg-gradient-to-r from-white to-transparent sm:block" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-20 bg-gradient-to-l from-white to-transparent sm:block" />

      <div className="container-shell mb-10 text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-afs-text/40">Ils nous ont fait confiance</p>
      </div>

      <div className="flex">
        <motion.div
          animate={prefersReducedMotion ? undefined : { x: ["0%", "-50%"] }}
          transition={
            prefersReducedMotion
              ? undefined
              : {
                  duration: 32,
                  repeat: Infinity,
                  ease: "linear"
                }
          }
          className={
            prefersReducedMotion
              ? "container-shell flex flex-wrap items-start justify-center gap-x-12 gap-y-8"
              : "flex min-w-max whitespace-nowrap items-center gap-14 px-12 sm:gap-24"
          }
        >
          {displayedPartners.map((partner, index) => (
            <PartnerTile key={`${partner.name}-${index}`} partner={partner} />
          ))}
        </motion.div>
      </div>

      {fundraiser ? (
        <div className="container-shell mt-14">
          <div className="grid gap-8 rounded-[2rem] border border-afs-line bg-white px-6 py-6 shadow-[0_20px_50px_-18px_rgba(0,0,0,0.15)] sm:px-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
            <div className="max-w-2xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-afs-primary">
                Collecte solidaire
              </p>
              <h3 className="mt-3 text-3xl font-semibold leading-tight text-afs-text">
                Soutenir Chabab for Atlas via Kiwi Collecte
              </h3>
              <p className="mt-4 text-base leading-8 text-afs-text/72">
                Kiwi Collecte héberge la campagne de don. Vous pouvez contribuer directement en ligne
                ou scanner le QR code pour ouvrir la page de collecte depuis votre téléphone.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={fundraiser.url}
                  target="_blank"
                  rel="noreferrer"
                  className="button-primary"
                >
                  Faire un don
                </a>
                <a
                  href={fundraiser.url}
                  target="_blank"
                  rel="noreferrer"
                  className="button-secondary"
                >
                  Ouvrir Kiwi Collecte
                </a>
              </div>
            </div>

            <a
              href={fundraiser.url}
              target="_blank"
              rel="noreferrer"
              className="mx-auto block rounded-[1.75rem] border border-afs-line bg-afs-soft/40 p-4 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-square w-full max-w-[240px] overflow-hidden rounded-[1.25rem] bg-white">
                <Image
                  src={fundraiser.qrCode}
                  alt="QR code Kiwi Collecte pour le don Chabab for Atlas"
                  fill
                  className="object-cover"
                  sizes="240px"
                />
              </div>
              <p className="mt-4 text-center text-sm font-medium text-afs-text/72">
                Scanner pour accéder à la collecte
              </p>
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
}
