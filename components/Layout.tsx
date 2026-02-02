import Link from "next/link";
import type { ReactNode } from "react";

import "../styles/globals.css";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-noir text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <Link href="/" className="text-lg font-semibold tracking-[0.2em]">
            BARBERÍA IMPERIAL
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <Link href="/booking/service" className="hover:text-white">
              Reservar
            </Link>
            <Link href="#servicios" className="hover:text-white">
              Servicios
            </Link>
            <Link href="#equipo" className="hover:text-white">
              Equipo
            </Link>
            <Link href="#contacto" className="hover:text-white">
              Contacto
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
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>Barbería Imperial · Experiencia premium en cada visita.</p>
          <p>Av. Principal 123 · +57 320 000 0000 · 09:00 - 20:00</p>
        </div>
      </footer>
    </div>
  );
}
