import Link from "next/link";

const whatsappLink = "https://wa.me/573200000000";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
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
        aria-label="Abrir chatbot premium"
      >
        Chatbot
      </button>
    </div>
  );
}
