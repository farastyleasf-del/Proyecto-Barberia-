import Image from "next/image";
import Link from "next/link";

import SectionTitle from "../components/SectionTitle";

const services = [
  {
    title: "Corte Signature",
    description: "Diseño personalizado, precisión milimétrica y acabado impecable.",
    duration: "45 min"
  },
  {
    title: "Barba Premium",
    description: "Ritual de barba con toallas calientes y aceites esenciales.",
    duration: "30 min"
  },
  {
    title: "Experiencia Total",
    description: "Corte + barba + masaje facial para un look total.",
    duration: "75 min"
  }
];

const team = [
  {
    name: "Alejandro Silva",
    role: "Master Barber",
    specialty: "Fade de precisión"
  },
  {
    name: "Fernando Cruz",
    role: "Senior Barber",
    specialty: "Barbas clásicas"
  },
  {
    name: "Sebastián Ríos",
    role: "Style Curator",
    specialty: "Tendencias urbanas"
  }
];

const blogPreview = [
  {
    title: "Guía definitiva para cuidar tu barba",
    date: "12 Ago 2024",
    excerpt: "Rutina diaria, productos clave y tips de expertos para un look impecable."
  },
  {
    title: "Tendencias de cortes premium 2024",
    date: "05 Ago 2024",
    excerpt: "Lo último en estilos masculinos con inspiración editorial."
  }
];

export default function HomePage() {
  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(200,161,90,0.15),_transparent_55%)]" />
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="relative z-10 space-y-8">
            <div className="flex items-center gap-4">
              <Image
                src="/logo-asf.svg"
                alt="Logo ASF"
                width={56}
                height={56}
                className="h-14 w-14"
              />
              <div className="text-left">
                <p className="text-xs uppercase tracking-[0.4em] text-gold">ASF</p>
                <p className="text-sm uppercase tracking-[0.3em] text-white/70">
                  Barbería Premium
                </p>
              </div>
            </div>
            <p className="text-xs uppercase tracking-[0.4em] text-gold">Experiencia premium</p>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              Barbería Premium con estilo editorial y precisión impecable.
            </h1>
            <p className="max-w-xl text-base text-white/70 md:text-lg">
              Reservas claras, atención personalizada y una atmósfera sofisticada diseñada para
              clientes que valoran su tiempo.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/booking/service"
                className="rounded-full bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-noir"
              >
                Reservar cita
              </Link>
              <Link
                href="/admin"
                className="rounded-full border border-white/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/80"
              >
                Ir al panel admin
              </Link>
            </div>
            <div className="flex items-center gap-6 text-xs uppercase tracking-[0.3em] text-white/60">
              <span>Agendamiento en 60 segundos</span>
              <span>Reserva segura</span>
            </div>
          </div>
          <div className="relative z-10">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-graphite/70 shadow-soft">
              <Image
                src="/images/hero-premium.svg"
                alt="Ambiente premium"
                width={520}
                height={640}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="mx-auto max-w-6xl space-y-12 px-6">
        <SectionTitle
          eyebrow="Servicios"
          title="Experiencias diseñadas para resaltar tu estilo"
          description="Selecciona el servicio ideal y personaliza tu cita con un equipo experto en tendencias masculinas."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex flex-col justify-between rounded-3xl border border-white/10 bg-graphite/70 p-6 shadow-soft"
            >
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.3em] text-gold">{service.duration}</p>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-sm text-white/60">{service.description}</p>
              </div>
              <Link
                href="/booking/service"
                className="mt-6 inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold"
              >
                Reservar
              </Link>
            </article>
          ))}
        </div>
        <div className="overflow-hidden rounded-3xl border border-white/10">
          <Image
            src="/images/services-premium.svg"
            alt="Servicios premium"
            width={1100}
            height={420}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section id="equipo" className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div className="space-y-6">
          <SectionTitle
            eyebrow="Equipo"
            title="Expertos en detalle, estilo y precisión"
            description="Nuestro equipo domina técnicas clásicas y contemporáneas para asegurar un resultado a tu medida."
          />
          <div className="space-y-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-graphite/70 px-5 py-4"
              >
                <div>
                  <p className="text-base font-semibold">{member.name}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">{member.role}</p>
                </div>
                <p className="text-sm text-gold">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl border border-white/10">
          <Image
            src="/images/team-premium.svg"
            alt="Equipo premium"
            width={540}
            height={640}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(200,161,90,0.2),_rgba(23,24,28,0.8)_60%)] px-6 py-12 text-center md:grid-cols-[1.4fr_0.6fr] md:items-center md:text-left">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">Reserva inteligente</p>
          <h3 className="text-3xl font-semibold">Agenda en menos de un minuto.</h3>
          <p className="text-sm text-white/70">
            Elige servicio, barbero y hora disponible sin fricción. Recibe confirmación inmediata.
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <Link
            href="/booking/service"
            className="rounded-full border border-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold"
          >
            Iniciar reserva
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-10 px-6">
        <SectionTitle
          eyebrow="Blog"
          title="Inspiración, tendencias y consejos premium"
          description="Contenido editorial para mantener tu estilo actualizado y bien cuidado."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {blogPreview.map((post) => (
            <article
              key={post.title}
              className="rounded-3xl border border-white/10 bg-graphite/70 p-6 shadow-soft"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-gold">{post.date}</p>
              <h3 className="mt-4 text-xl font-semibold">{post.title}</h3>
              <p className="mt-3 text-sm text-white/60">{post.excerpt}</p>
              <Link
                href="/blog"
                className="mt-6 inline-flex items-center text-xs font-semibold uppercase tracking-[0.25em] text-gold"
              >
                Ver artículo
              </Link>
            </article>
          ))}
        </div>
        <div className="flex justify-center">
          <Link
            href="/blog"
            className="rounded-full border border-white/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/80"
          >
            Ir al blog
          </Link>
        </div>
      </section>
    </div>
  );
}
