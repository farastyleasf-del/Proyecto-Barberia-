import Image from "next/image";
import Link from "next/link";

import SectionTitle from "../../components/SectionTitle";

const posts = [
  {
    title: "Guía definitiva para cuidar tu barba",
    date: "12 Ago 2024",
    excerpt:
      "Rutina diaria, productos clave y tips de expertos para un look impecable y saludable.",
    readTime: "5 min",
    image: "/images/barberia/blog-1.svg"
  },
  {
    title: "Tendencias de cortes premium 2024",
    date: "05 Ago 2024",
    excerpt:
      "Lo último en estilos masculinos con inspiración editorial y acabados a la medida.",
    readTime: "6 min",
    image: "/images/barberia/blog-2.svg"
  },
  {
    title: "Cómo elegir el barbero ideal",
    date: "28 Jul 2024",
    excerpt:
      "Descubre qué evaluar para encontrar a tu experto y mantener una relación de confianza.",
    readTime: "4 min",
    image: "/images/barberia/blog-3.svg"
  }
];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-10 px-6 py-16">
      <SectionTitle
        eyebrow="Blog"
        title="Consejos y tendencias para un estilo premium"
        description="Explora artículos curados por el equipo Dinasty barber ASF para elevar tu rutina de cuidado personal."
      />
      <div className="space-y-6">
        {posts.map((post) => (
          <article
            key={post.title}
            className="rounded-3xl border border-white/10 bg-graphite/70 p-6 shadow-soft"
          >
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <Image
                src={post.image}
                alt={post.title}
                width={800}
                height={420}
                className="h-48 w-full object-cover"
              />
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.3em] text-gold">
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
            <h2 className="mt-4 text-2xl font-semibold">{post.title}</h2>
            <p className="mt-3 text-sm text-white/60">{post.excerpt}</p>
            <Link
              href="/blog"
              className="mt-6 inline-flex items-center text-xs font-semibold uppercase tracking-[0.25em] text-gold"
            >
              Leer artículo
            </Link>
          </article>
        ))}
      </div>
      <section className="rounded-3xl border border-white/10 bg-graphite/70 p-8 shadow-soft">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">Califícanos</p>
          <h2 className="text-2xl font-semibold">Tu opinión impulsa nuestra experiencia premium.</h2>
          <p className="text-sm text-white/60">
            Cuéntanos cómo fue tu visita y ayuda a la comunidad Dinasty barber ASF a elegir la mejor atención.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {["★", "★", "★", "★", "★"].map((star, index) => (
            <span
              key={`${star}-${index}`}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-2xl text-gold"
            >
              {star}
            </span>
          ))}
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-[1fr_auto]">
          <input
            type="text"
            placeholder="Escribe tu comentario..."
            className="w-full rounded-full border border-white/10 bg-noir px-5 py-3 text-sm text-white/80 placeholder:text-white/40"
          />
          <button
            type="button"
            className="rounded-full border border-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold"
          >
            Enviar
          </button>
        </div>
      </section>
    </div>
  );
}
