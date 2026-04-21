"use client";
import "./login.css";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/useUserStore";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      alert("Credenciales incorrectas");
      return;
    }

    const session = await fetch("/api/auth/session").then((r) => r.json());
    const role = session?.user?.role;

    useUserStore.getState().setUser(email, role);

    if (role === "admin") router.push("/dashboard/admin");
    if (role === "profesor") router.push("/dashboard/profesor");
    if (role === "estudiante") router.push("/dashboard/estudiante");
  }

  return (
    <div className="min-h-screen flex items-center justify-center login-background">
      <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-md">

        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          INICIA TU SESIÓN
        </h2>

    <form onSubmit={handleLogin} className="login-form">

  <div>
    <label className="login-label">CORREO ELECTRÓNICO</label>
    <input
      type="email"
      placeholder="Ej. juan.perez@empresa.com"
      className="login-input"
      onChange={(e) => setEmail(e.target.value)}
    />
  </div>

  <div>
    <label className="login-label">CONTRASEÑA</label>
    <input
      type="password"
      className="login-input"
      onChange={(e) => setPassword(e.target.value)}
    />
  </div>

  <button
    type="submit"
    className="w-full bg-[#F57C00] hover:bg-[#EF6C00] text-white font-semibold py-2 rounded-md transition"
  >
    INICIAR SESIÓN
  </button>

  <p className="text-center text-[11px] text-[#F57C00] font-medium cursor-pointer hover:underline">
    ¿OLVIDASTE TU CONTRASEÑA?
  </p>

</form>

        <div className="mt-8 text-center text-xs text-gray-500">
          <p>Certificaciones de seguridad</p>
          <div className="flex justify-center gap-4 mt-2">
            <span className="font-bold">PCI DSS</span>
            <span className="font-bold">SSL</span>
          </div>
        </div>

      </div>
    </div>
  );
}
