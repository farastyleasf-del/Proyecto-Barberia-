import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import "../styles/globals.css";
import FloatingActions from "./FloatingActions";

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "TikTok", href: "https://tiktok.com" },
  { label: "Facebook", href: "https://facebook.com" }
];

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-noir text-white">
      <header className="border-b border-white/10 bg-noir/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-6">
          <Link href="/" className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-white/5">
              <Image
                src="/logo-asf.svg"
                alt="Logo ASF"
                width={40}
                height={40}
                className="h-10 w-10"
                priority
              />
            </div>
            <div className="leading-tight">
              <p className="text-xs uppercase tracking-[0.5em] text-gold">Dinasty</p>
              <p className="text-lg font-semibold tracking-[0.2em]">barber ASF</p>
            </div>
          </Link>
          <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.3em] text-white/70 md:flex">
            <Link href="/booking/service" className="hover:text-white">
              Reservar
            </Link>
            <Link href="/#servicios" className="hover:text-white">
              Servicios
            </Link>
            <Link href="/#equipo" className="hover:text-white">
              Equipo
            </Link>
            <Link href="/blog" className="hover:text-white">
              Blog
            </Link>
          </nav>
          <Link
            href="/booking/service"
            className="rounded-full border border-gold px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold transition hover:bg-gold hover:text-noir"
          >
            Reservar cita
          </Link>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-white/10 bg-graphite">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.4em] text-gold">Dinasty barber ASF</p>
              <p className="text-lg font-semibold">Experiencia exclusiva, cortes precisos.</p>
              <p className="text-sm text-white/60">Av. Principal 123 · +57 320 000 0000 · 09:00 - 20:00</p>
            </div>
            <div className="flex flex-col gap-3 text-sm text-white/60">
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">Redes</p>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70 hover:text-white"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
            <p>© 2024 Dinasty barber ASF. Todos los derechos reservados.</p>
            <p>Diseñado para una experiencia moderna, elegante y confiable.</p>
          </div>
        </div>
      </footer>
      <FloatingActions />
    </div>
  );
}
