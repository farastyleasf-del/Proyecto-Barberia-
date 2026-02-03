import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-4xl flex-col justify-center gap-6 px-6 py-16">
      <p className="text-xs uppercase tracking-[0.4em] text-gold">Barbería premium</p>
      <h1 className="text-4xl font-semibold">Barbería Premium</h1>
      <p className="text-base text-white/70">
        Bienvenido. Agenda tu próxima cita con una experiencia rápida, clara y elegante.
      </p>
      <Link
        href="/admin"
        className="w-fit rounded-full border border-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold"
      >
        Ir al panel admin
      </Link>
    </main>
  );
}
