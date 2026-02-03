import type { Metadata } from "next";

import Layout from "../components/Layout";

export const metadata: Metadata = {
  title: "Dinasty barber ASF | Reservas Premium",
  description: "Agenda tu cita en menos de un minuto con una experiencia premium.",
  metadataBase: new URL("https://dinasty-barber-asf.vercel.app"),
  keywords: [
    "barbería premium",
    "cortes de cabello",
    "barba",
    "agendamiento de citas",
    "Dinasty barber ASF"
  ],
  openGraph: {
    title: "Dinasty barber ASF | Reservas Premium",
    description: "Reserva tu cita en segundos con una experiencia premium y atención personalizada.",
    url: "https://dinasty-barber-asf.vercel.app",
    siteName: "Dinasty barber ASF",
    locale: "es_ES",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Dinasty barber ASF | Reservas Premium",
    description: "Reserva tu cita en segundos con una experiencia premium y atención personalizada."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
