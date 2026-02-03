import type { Metadata } from "next";

import Layout from "../components/Layout";

export const metadata: Metadata = {
  title: "Barbería Imperial | Reservas Premium",
  description: "Agenda tu cita en menos de un minuto con una experiencia premium."
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
