"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

import { useAdminAuth } from "../../lib/admin/use-admin-auth";

const links = [
  { href: "/admin", label: "Resumen" },
  { href: "/admin/services", label: "Servicios" },
  { href: "/admin/barbers", label: "Barberos" },
  { href: "/admin/appointments", label: "Citas" },
  { href: "/admin/payments", label: "Pagos" }
];

export default function AdminShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { isAuthenticated, logout } = useAdminAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Allow time for auth state to be checked
    setIsLoading(false);
  }, [isAuthenticated]);

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  // Show loading state while checking auth
  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-noir">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-gold border-t-transparent"></div>
          <p className="text-sm text-white/60">Verificando sesión...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="mx-auto flex max-w-3xl flex-col gap-6 px-6 py-16">
        <h1 className="text-3xl font-semibold">Acceso restringido</h1>
        <p className="text-white/70">
          Debes iniciar sesión para acceder al panel de administración.
        </p>
        <Link
          href="/admin/login"
          className="rounded-full bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-noir"
        >
          Ir a login
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-noir text-white">
      <div className="border-b border-white/10 bg-graphite/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gold">Panel admin</p>
            <h1 className="text-xl font-semibold">Dinasty Barber ASF</h1>
          </div>
          <button
            type="button"
            onClick={logout}
            className="rounded-full border border-gold px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 lg:flex-row">
        <aside className="w-full max-w-xs rounded-2xl border border-white/10 bg-graphite/50 p-6 shadow-soft">
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">Navegación</p>
          <nav className="mt-6 flex flex-col gap-3 text-sm">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-xl px-4 py-2 transition ${
                  pathname === link.href ? "bg-gold text-noir" : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
