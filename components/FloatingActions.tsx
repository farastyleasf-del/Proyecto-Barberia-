"use client";

import Link from "next/link";
import { useState } from "react";

const whatsappLink = "https://wa.me/573200000000";

export default function FloatingActions() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {isChatOpen ? (
        <div className="w-72 overflow-hidden rounded-3xl border border-white/10 bg-graphite/90 shadow-soft backdrop-blur">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Chatbot ASF</p>
            <button
              type="button"
              className="text-xs uppercase tracking-[0.3em] text-white/60"
              onClick={() => setIsChatOpen(false)}
            >
              Cerrar
            </button>
          </div>
          <div className="space-y-3 px-4 py-4 text-xs text-white/70">
            <p>Hola, soy tu asistente premium. ¿Quieres agendar una cita o resolver dudas?</p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 px-3 py-1">
                Reservar cita
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1">Servicios</span>
              <span className="rounded-full border border-white/10 px-3 py-1">Horarios</span>
            </div>
          </div>
        </div>
      ) : null}
      <Link
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-3 rounded-full border border-gold/70 bg-noir/90 px-5 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold shadow-soft backdrop-blur"
      >
        WhatsApp
      </Link>
      <button
        type="button"
        className="flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/80 shadow-soft backdrop-blur"
        aria-expanded={isChatOpen}
        aria-label="Abrir chatbot premium"
        onClick={() => setIsChatOpen((value) => !value)}
      >
        Chatbot
      </button>
    </div>
  );
}
