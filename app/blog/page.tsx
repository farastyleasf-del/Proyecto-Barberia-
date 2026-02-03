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
        description="Explora artículos curados por el equipo ASF para elevar tu rutina de cuidado personal."
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
    </div>
  );
}
