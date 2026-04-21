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
    </div>
  );
}
