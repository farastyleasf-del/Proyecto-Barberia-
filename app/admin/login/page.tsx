"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useAdminAuth } from "../../../lib/admin/use-admin-auth";

export default function AdminLoginPage() {
  const router = useRouter();
  const { login } = useAdminAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    // Simple validation
    if (!email || !password) {
      setError("Por favor, completa todos los campos");
      setIsLoading(false);
      return;
    }

    if (!email.includes("@")) {
      setError("Por favor, ingresa un email válido");
      setIsLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      setIsLoading(false);
      return;
    }

    // Simulate authentication delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    // For demo purposes, accept any valid email/password format
    // In production, this would validate against a backend
    if (email && password) {
      login();
      router.push("/admin");
    } else {
      setError("Credenciales inválidas");
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto flex min-h-screen max-w-4xl items-center px-6">
      <div className="w-full rounded-3xl border border-white/10 bg-graphite p-10 shadow-soft">
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-white/5">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="14" stroke="#C8A15A" strokeWidth="2"/>
              <path d="M16 8v8l5 3" stroke="#C8A15A" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gold">Acceso admin</p>
            <p className="text-sm uppercase tracking-[0.2em] text-white/70">Dinasty Barber ASF</p>
          </div>
        </div>
        
        <h1 className="mt-4 text-3xl font-semibold">Bienvenido de nuevo</h1>
        <p className="mt-2 text-sm text-white/70">
          Inicia sesión para gestionar servicios, barberos, citas y pagos.
        </p>
        
        {error && (
          <div className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
          <label className="text-sm text-white/70">
            Email
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@dinastybarber.com"
              className="mt-2 w-full rounded-xl border border-white/10 bg-noir px-4 py-3 text-sm text-white/80 transition focus:border-gold focus:outline-none"
              disabled={isLoading}
            />
          </label>
          <label className="text-sm text-white/70">
            Contraseña
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="mt-2 w-full rounded-xl border border-white/10 bg-noir px-4 py-3 text-sm text-white/80 transition focus:border-gold focus:outline-none"
              disabled={isLoading}
            />
          </label>
          <button
            type="submit"
            disabled={isLoading}
            className="mt-4 rounded-full bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-noir transition hover:bg-gold/90 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Ingresando..." : "Ingresar"}
          </button>
        </form>
        
        <div className="mt-6 text-center text-xs text-white/50">
          <p>Demo: Use cualquier email válido y contraseña de 6+ caracteres</p>
        </div>
      </div>
    </div>
  );
}
