"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const fadeUpTransition = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1]
};

const floatingStatOffsets = [
  {
    className: "-right-24 -top-24 translate-x-[50%] -rotate-[5deg]",
    drift: [0, -12, 0]
  },
  {
    className: "-left-32 -bottom-36 rotate-[3deg]",
    drift: [0, 12, 0]
  }
];

function StatBadge({ stat, className = "", animateY, prefersReducedMotion }) {
  return (
    <motion.div
      initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.8 }}
      animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      className={className}
    >
      <motion.div
        animate={prefersReducedMotion ? undefined : { y: animateY }}
        transition={
          prefersReducedMotion
            ? undefined
            : {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }
        }
        whileHover={prefersReducedMotion ? undefined : { 
          scale: 1.05,
          rotate: 0,
          boxShadow: "0 30px 60px -12px rgba(232, 121, 249, 0.4)"
        }}
        className="w-[180px] rounded-[1.6rem] border border-white/20 bg-gradient-to-br from-[#2d1540]/95 via-[#1a0c24]/92 to-[#150721]/90 px-4 py-4 shadow-[0_22px_40px_-18px_rgba(0,0,0,0.55)] backdrop-blur-xl transition-all duration-300 hover:border-fuchsia-400/30"
      >
        <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-fuchsia-200/80">{stat.category}</p>
        <p className="mt-3 text-3xl font-bold leading-none bg-gradient-to-r from-white to-fuchsia-100 bg-clip-text text-transparent">{stat.value}</p>
        <p className="mt-3 text-[13px] leading-6 text-white/80">{stat.label}</p>
      </motion.div>
    </motion.div>
  );
}

export default function HeroSection({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  stats,
  image,
  logo,
  spotlight
}) {
  const containerRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
  const heroStats = stats.slice(0, 2);

  const contentVariants = prefersReducedMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.2 } }
      }
    : {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: fadeUpTransition }
      };

  const mediaInitial = prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 };
  const mediaAnimate = { opacity: 1, y: 0 };
  const mediaTransition = prefersReducedMotion
    ? { duration: 0.2 }
    : { duration: 0.8, ease: "easeOut", delay: 0.12 };

  return (
    <section ref={containerRef} className="relative overflow-hidden pb-16 pt-24 lg:pb-20 lg:pt-28">
      <motion.div style={prefersReducedMotion ? undefined : { y: yBackground }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#1D0B31]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#230B3F]/90 via-[#402063]/80 to-[#11051D]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(217,70,239,0.12),transparent_40%)]" />
        {!prefersReducedMotion ? (
          <>
            <motion.div
              animate={{ scale: [1, 1.12, 1], opacity: [0.2, 0.42, 0.2] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-24 top-12 h-[24rem] w-[24rem] rounded-full bg-fuchsia-500/20 blur-[120px]"
            />
            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.35, 0.15] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -right-32 top-1/4 h-[28rem] w-[28rem] rounded-full bg-purple-500/15 blur-[130px]"
            />
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.25, 0.1] }}
              transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 4 }}
              className="absolute -bottom-20 left-1/3 h-[20rem] w-[20rem] rounded-full bg-pink-500/10 blur-[100px]"
            />
          </>
        ) : null}
      </motion.div>

      <div className="container-shell relative z-10 grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="max-w-2xl space-y-7"
        >
          <motion.div
            variants={contentVariants}
            className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-gradient-to-r from-white/15 to-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-white/95 backdrop-blur-md hover:border-white/25 hover:bg-white/20 transition-all duration-300"
          >
            <motion.span 
              className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-fuchsia-300 to-fuchsia-500 shadow-[0_0_16px_rgba(232,121,249,0.75)]"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span>{eyebrow}</span>
          </motion.div>

          <motion.h1
            variants={contentVariants}
            className="max-w-xl bg-gradient-to-br from-white via-white/95 to-fuchsia-100 bg-clip-text text-4xl font-bold leading-[1.05] text-transparent sm:text-5xl lg:text-6xl"
          >
            {title}
          </motion.h1>

          <motion.p variants={contentVariants} className="max-w-xl text-lg leading-8 text-white/85 sm:text-xl">
            {description}
          </motion.p>

          <motion.ul variants={contentVariants} className="flex flex-wrap gap-3">
            {spotlight.slice(0, 3).map((item, index) => (
              <motion.li
                key={item}
                initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
                className="rounded-full border border-white/20 bg-gradient-to-r from-white/15 to-white/5 px-4 py-2 text-sm font-medium text-white/95 backdrop-blur-md transition-all duration-300 hover:border-fuchsia-400/40 hover:bg-white/20 hover:shadow-[0_0_20px_rgba(232,121,249,0.2)]"
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div variants={contentVariants} className="flex flex-col gap-4 sm:flex-row">
            <Link
              href={primaryAction.href}
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-600 px-8 py-4 text-base font-semibold text-white shadow-[0_0_40px_-8px_rgba(217,70,239,0.5)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_60px_-8px_rgba(217,70,239,0.7)] active:scale-95"
            >
              <span className="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative">{primaryAction.label}</span>
              <motion.svg
                className="relative h-5 w-5 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{ x: 0 }}
                whileHover={{ x: 4 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </motion.svg>
            </Link>
            <Link
              href={secondaryAction.href}
              className="group inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/10 hover:shadow-[0_0_40px_-8px_rgba(255,255,255,0.15)] active:scale-95"
            >
              {secondaryAction.label}
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={mediaInitial}
          animate={mediaAnimate}
          transition={mediaTransition}
          whileHover={prefersReducedMotion ? undefined : { y: -12, rotateX: 2, rotateY: -2 }}
          className="relative mx-auto w-full max-w-[580px] lg:translate-x-20 perspective-1000"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="relative rounded-[2.75rem] border border-white/20 bg-gradient-to-b from-white/10 to-white/5 p-3 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-700 hover:border-white/30 hover:shadow-[0_40px_120px_-20px_rgba(232,121,249,0.3)]">
            <div className="overflow-hidden rounded-[2.15rem]">
              <div className="relative h-[320px] sm:h-[360px]">
                <Image
                  src={image}
                  alt="Image AFS"
                  fill
                  className="object-cover object-[78%_center] transition-transform duration-500 group-hover:scale-105"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#150721]/40 via-transparent to-white/10" />

                <motion.div 
                  className="absolute left-5 top-5 inline-flex items-center gap-3 rounded-2xl bg-white/[0.95] px-4 py-3 text-afs-text shadow-lg backdrop-blur-xl border border-white/20"
                  initial={prefersReducedMotion ? undefined : { opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  whileHover={prefersReducedMotion ? undefined : { scale: 1.05 }}
                >
                  <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-white">
                    <Image src={logo} alt="Logo Ask for Success" fill className="object-contain p-1.5" sizes="40px" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-afs-primary">Ask for Success</p>
                    <p className="text-sm font-semibold text-gray-800">Association de jeunesse</p>
                  </div>
                </motion.div>
              </div>

              <motion.div 
                className="border-t border-white/10 bg-gradient-to-br from-[#17091f]/96 to-[#0d050a]/96 px-5 py-5 sm:px-6 sm:py-6 backdrop-blur-sm"
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <p className="text-xs uppercase tracking-[0.22em] font-semibold text-fuchsia-200/85">Impact terrain</p>
                <p className="mt-3 text-base font-medium leading-7 text-white/95">
                  Nous accompagnons les jeunes avec des actions educatives, culturelles et solidaires concretes.
                </p>
              </motion.div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid lg:hidden">
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              >
                <div className="group rounded-2xl border border-white/10 bg-gradient-to-br from-[#2d1540]/80 via-[#1a0c24]/92 to-[#150721]/90 px-4 py-4 shadow-[0_22px_40px_-18px_rgba(0,0,0,0.55)] backdrop-blur-xl transition-all duration-300 hover:border-fuchsia-400/30 hover:shadow-[0_8px_32px_rgba(232,121,249,0.2)]">
                  <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-fuchsia-200/80">{stat.category}</p>
                  <p className="mt-3 text-3xl font-bold bg-gradient-to-r from-white to-fuchsia-100 bg-clip-text text-transparent">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-white/80">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            {heroStats.map((stat, index) => {
              const offset = floatingStatOffsets[index];
              return (
                <StatBadge
                  key={stat.label}
                  stat={stat}
                  prefersReducedMotion={prefersReducedMotion}
                  animateY={offset.drift}
                  className={`pointer-events-auto absolute ${offset.className}`}
                />
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}











