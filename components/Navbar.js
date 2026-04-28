"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { getAssociationOverview } from "@/lib/content";

function MenuIcon({ open }) {
  return open ? (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export default function Navbar({ items }) {
  const [open, setOpen] = useState(false);
  const association = getAssociationOverview();

  return (
    <header className="sticky top-0 z-40 border-b border-afs-line/70 bg-white/85 backdrop-blur-xl">
      <div className="container-shell py-4">
        <div className="flex min-h-[44px] items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-afs-line bg-white shadow-soft">
              <Image src={association.logo} alt="Logo Ask for Success" fill className="object-contain p-1.5" sizes="48px" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-afs-accent">Association</p>
              <p className="text-sm font-semibold text-afs-text">Ask for Success</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Navigation principale">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-afs-text/72 transition hover:text-afs-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/#contact" className="button-primary hidden sm:inline-flex">
              Contact
            </Link>
            <button
              type="button"
              aria-controls="mobile-navigation"
              aria-expanded={open}
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              onClick={() => setOpen((current) => !current)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-afs-line bg-white/90 text-afs-primary lg:hidden"
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>

        {open ? (
          <div id="mobile-navigation" className="mt-4 rounded-3xl border border-afs-line bg-white p-4 shadow-soft lg:hidden">
            <nav className="grid gap-3" aria-label="Navigation mobile">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-afs-text/75 transition hover:bg-afs-soft hover:text-afs-primary"
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/#contact" onClick={() => setOpen(false)} className="button-primary mt-2 sm:hidden">
                Contact
              </Link>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
