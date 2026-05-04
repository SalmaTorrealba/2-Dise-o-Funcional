<<<<<<< HEAD
"use client";
import "./NavBar.css";
export default function NavBar() {
  return (
    <header className="navbar-panel">
      <div className="navbar-panel">
  <div className="navbar-menu">

    <span className="navbar-link">INICIO</span>
    <span className="navbar-link">CURSOS</span>
    <span className="navbar-link">EMPRESAS</span>
    <span className="navbar-link">SOBRE NOSOTROS</span>

    <span className="navbar-register">REGISTRARSE</span>

  </div>
</div>
    </header>
  );
} 
=======
export default function NavBar() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        {/* Menú centrado con separación */}
        <nav className="flex-1 flex justify-center">
          <div className="flex gap-20 text-sm font-semibold text-gray-700 tracking-wide">
            <a className="nav-link">INICIO</a>

            <a className="nav-link">CURSOS</a>

            <a className="nav-link">EMPRESAS</a>
            
            <a className="nav-link">SOBRE NOSOTROS</a>
          </div>
        </nav>

        {/* Botón a la derecha */}
        <a
          href="/auth/register"
          className="bg-[#F57C00] hover:bg-[#EF6C00] text-white font-semibold py-2 px-5 rounded-md transition"
        >
          REGISTRARSE
        </a>

      </div>
    </header>
  );
}
>>>>>>> c982e1fd69a4f72bbe24196cbe06f93e329bfa46
