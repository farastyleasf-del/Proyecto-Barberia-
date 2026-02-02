"use client";

import { useRouter } from "next/navigation";

import { useAdminAuth } from "../../../lib/admin/use-admin-auth";

export default function AdminLoginPage() {
  const router = useRouter();
  const { login } = useAdminAuth();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login();
    router.push("/admin");
  };

  return (
    <div className="mx-auto flex min-h-screen max-w-4xl items-center px-6">
      <div className="w-full rounded-3xl border border-white/10 bg-graphite p-10 shadow-soft">
        <p className="text-xs uppercase tracking-[0.4em] text-gold">Acceso admin</p>
        <h1 className="mt-4 text-3xl font-semibold">Bienvenido de nuevo</h1>
        <p className="mt-2 text-sm text-white/70">
          Inicia sesión para gestionar servicios, barberos, citas y pagos.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
          <label className="text-sm text-white/70">
            Email
            <input
              type="email"
              required
              placeholder="admin@barberiaimperial.com"
              className="mt-2 w-full rounded-xl border border-white/10 bg-noir px-4 py-3 text-sm text-white/80"
            />
          </label>
          <label className="text-sm text-white/70">
            Contraseña
            <input
              type="password"
              required
              placeholder="••••••••"
              className="mt-2 w-full rounded-xl border border-white/10 bg-noir px-4 py-3 text-sm text-white/80"
            />
          </label>
          <button
            type="submit"
            className="mt-4 rounded-full bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-noir"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}
