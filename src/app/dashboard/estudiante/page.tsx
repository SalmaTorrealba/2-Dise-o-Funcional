<<<<<<< HEAD
"use client";

import DashboardTopBar from "@/components/students/DashboardTopBar";
import "./dashboard.css";
import { useRouter } from "next/navigation";

export default function DashboardEstudiante() {
  const router = useRouter();

  return (
    <div className="dashboard-layout">

      <main className="dashboard-main">
        <DashboardTopBar userName="Estudiante" />

        <h1 className="dashboard-title">Bienvenido a tu Dashboard</h1>

        <div className="dashboard-cards">
          <div className="card">
            <h3>📚Cursos activos</h3>
            <p className="metric">4</p>
            <button className="view-btn" onClick={() => router.push("/dashboard/estudiante/mis-cursos")}>
              Ver mis cursos
            </button>
          </div>

          <div className="card">
            <h3>📝Tareas pendientes</h3>
            <p className="metric">3</p>
            <button className="view-btn" onClick={() => router.push("/dashboard/estudiante/mis-cursos")}>
              Revisar tareas
            </button>
          </div>

          <div className="card">
            <h3>📊Promedio general</h3>
            <p className="metric">8.7</p>
          </div>

          <div className="card">
            <h3>⏱ Horas de estudio</h3>
            <p className="metric">24.5</p>
            <button className="view-btn" onClick={() => router.push("/dashboard/estudiante/mis-cursos")}>
              Ver progreso
            </button>
          </div>
        </div>
      </main>
=======
import "./dashboard.css";

export default function DashboardEstudiante() {
  return (
    <div>

      {/* Header oscuro */}
      <header className="w-full bg-gray-900 text-white py-4">
        <div className="max-w-7xl mx-auto text-sm font-semibold">
          Aula Virtual
        </div>
      </header>

      {/* CONTENEDOR PRINCIPAL */}
      <div className="dashboard-container">

        {/* PANEL COMPLETO (pestañas + menú lateral) */}
        <aside className="dashboard-sidebar">

          {/* PESTAÑAS SUPERIORES */}
          <div className="panel-header">
            <a className="panel-link">CURSOS</a>
            <a className="panel-link">MIS CURSOS</a>
            <a className="panel-link">CUENTA</a>
          </div>

          {/* MENÚ LATERAL */}
          <div className="panel-menu">
            <a className="panel-item">PERFIL DE USUARIO</a>
            <a className="panel-item">SEGURIDAD Y ACCESO</a>
            <a className="panel-item">NOTIFICACIONES</a>
            <a className="panel-item">GESTIÓN DE FACTURACIÓN</a>
          </div>

        </aside>

        {/* CONTENIDO PRINCIPAL */}
        <main className="dashboard-content">

          {/* Tarjeta Perfil */}
          <section className="dashboard-card">
            <h2>PERFIL DE USUARIO</h2>

            <label>NOMBRE COMPLETO</label>
            <input placeholder="Ej. Juan Pérez" />

            <label>CORREO ELECTRÓNICO</label>
            <input placeholder="Ej. juan.perez@empresa.com" />

            <label>EMPRESA / ORGANIZACIÓN (opcional)</label>
            <input placeholder="Ej. TechCorp" />

            <button className="btn-orange">ACTUALIZAR DATOS</button>
          </section>

          {/* Tarjeta Seguridad */}
          <section className="dashboard-card">
            <h2>SEGURIDAD Y ACCESO</h2>

            <label>CONTRASEÑA</label>
            <input type="password" />

            <label>CONFIRMAR CONTRASEÑA</label>
            <input type="password" />

            <button className="btn-orange">CAMBIAR CONTRASEÑA</button>
            <button className="btn-orange">DESCARGAR PDF</button>
          </section>

        </main>

      </div>
>>>>>>> c982e1fd69a4f72bbe24196cbe06f93e329bfa46
    </div>
  );
}
